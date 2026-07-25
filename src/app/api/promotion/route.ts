import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { businessName, contactPhone, promoType, message } = body;

    if (!businessName || !contactPhone || !promoType) {
      return NextResponse.json(
        { error: 'Missing required fields: businessName, contactPhone, and promoType are required.' },
        { status: 400 }
      );
    }

    // Server-side validation & storage logging
    const inquiry = {
      id: `inq_${Date.now()}`,
      businessName: String(businessName).trim(),
      contactPhone: String(contactPhone).trim(),
      promoType: String(promoType).trim(),
      message: message ? String(message).trim() : null,
      status: 'PENDING',
      createdAt: new Date().toISOString(),
    };

    console.log('[PROMOTION INQUIRY RECEIVED]:', inquiry);

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received successfully! The Addis Foodies team will contact you within 24 hours.',
        inquiryId: inquiry.id,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Error processing promotion inquiry:', error);
    return NextResponse.json(
      { error: 'Internal Server Error processing promotion inquiry.' },
      { status: 500 }
    );
  }
}
