import { NextResponse } from 'next/server';
import { parseSocialCaption } from '@/lib/parser';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  const verifyToken = process.env.INSTAGRAM_VERIFY_TOKEN || 'addis_foodies_webhook_secret';

  if (mode === 'subscribe' && token === verifyToken) {
    console.log('[INSTAGRAM WEBHOOK VERIFIED]');
    return new Response(challenge, { status: 200 });
  }

  return NextResponse.json({ error: 'Verification token mismatch' }, { status: 403 });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('[INSTAGRAM WEBHOOK PAYLOAD]:', JSON.stringify(body, null, 2));

    const caption = body?.entry?.[0]?.changes?.[0]?.value?.caption || '';
    if (caption) {
      const parsed = parseSocialCaption(caption);
      console.log('[INSTAGRAM PARSED RECENT REVIEW]:', parsed);
    }

    return NextResponse.json({ success: true, channel: 'INSTAGRAM' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Instagram webhook error:', error);
    return NextResponse.json({ error: 'Webhook payload processing error' }, { status: 400 });
  }
}
