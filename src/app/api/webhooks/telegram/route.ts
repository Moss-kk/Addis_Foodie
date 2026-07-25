import { NextResponse } from 'next/server';
import { parseSocialCaption } from '@/lib/parser';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('[TELEGRAM WEBHOOK RECEIVED]:', JSON.stringify(body, null, 2));

    const text = body?.channel_post?.text || body?.message?.text || '';
    if (text) {
      const parsed = parseSocialCaption(text);
      console.log('[TELEGRAM PARSED RECENT REVIEW]:', parsed);
    }

    return NextResponse.json({ success: true, channel: 'TELEGRAM' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Telegram webhook error:', error);
    return NextResponse.json({ error: 'Webhook payload processing error' }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Telegram bot webhook connector operational' });
}
