/**
 * app/api/webhooks/instagram/route.ts
 * ─────────────────────────────────────────────────────────────
 * Meta Instagram Webhook handler for @addisfoodiess.
 *
 * GET  → Webhook verification (hub.challenge handshake)
 * POST → Receive real-time notifications from Meta
 *
 * Configure in Meta Dashboard:
 *   Callback URL: https://YOUR_DOMAIN/api/webhooks/instagram
 *   Verify Token: value of INSTAGRAM_VERIFY_TOKEN in .env.local
 *   Subscribe to: feed, mentions
 * ─────────────────────────────────────────────────────────────
 */

import { NextResponse } from 'next/server';

/* ── GET: Webhook Verification Handshake ── */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode      = searchParams.get('hub.mode');
  const token     = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  const verifyToken =
    process.env.INSTAGRAM_VERIFY_TOKEN ?? 'addis_foodies_webhook_secret';

  if (mode === 'subscribe' && token === verifyToken) {
    console.log('[META WEBHOOK] ✅ Instagram webhook verified');
    return new Response(challenge, { status: 200 });
  }

  console.warn('[META WEBHOOK] ❌ Verification failed. Token mismatch.');
  return NextResponse.json({ error: 'Verification token mismatch' }, { status: 403 });
}

/* ── POST: Receive Webhook Notifications ── */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log('[META WEBHOOK] 📩 Received payload:',
      JSON.stringify(body, null, 2));

    // Extract notification type
    const entries = body?.entry ?? [];

    for (const entry of entries) {
      const changes = entry?.changes ?? [];

      for (const change of changes) {
        const field = change.field;
        const value = change.value;

        switch (field) {
          case 'feed': {
            // New post / story from @addisfoodiess
            const mediaId   = value?.media_id;
            const caption   = value?.caption ?? '';
            const permalink = value?.permalink ?? '';

            console.log('[META WEBHOOK] 🆕 New post detected:', {
              mediaId,
              caption: caption.slice(0, 80),
              permalink,
            });

            // TODO: Trigger a revalidation of the homepage feed cache
            // e.g. revalidateTag('instagram-feed') if using Next.js cache tags
            break;
          }

          case 'mentions': {
            // @addisfoodiess was mentioned
            const mentionedMediaId = value?.media_id;
            console.log('[META WEBHOOK] 📣 Mentioned in media:', mentionedMediaId);
            break;
          }

          default:
            console.log(`[META WEBHOOK] ℹ️ Unhandled field: ${field}`);
        }
      }
    }

    return NextResponse.json(
      { success: true, received: entries.length },
      { status: 200 }
    );

  } catch (error: unknown) {
    console.error('[META WEBHOOK] Error processing payload:', error);
    return NextResponse.json(
      { error: 'Webhook payload processing error' },
      { status: 400 }
    );
  }
}
