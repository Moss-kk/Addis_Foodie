import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userName, contactPhone, restaurantName, neighborhood, category, reason } = body;

    if (!restaurantName || !category) {
      return NextResponse.json(
        { error: 'Missing required fields: restaurantName and category are required.' },
        { status: 400 }
      );
    }

    const suggestion = {
      id: `sug_${Date.now()}`,
      userName: userName ? String(userName).trim() : 'Anonymous Foodie',
      contactPhone: contactPhone ? String(contactPhone).trim() : 'Not provided',
      restaurantName: String(restaurantName).trim(),
      neighborhood: neighborhood ? String(neighborhood).trim() : 'Addis Ababa',
      category: String(category).trim(),
      reason: reason ? String(reason).trim() : null,
      status: 'PENDING_REVIEW',
      createdAt: new Date().toISOString(),
    };

    console.log('[RESTAURANT SUGGESTION SUBMITTED]:', suggestion);

    return NextResponse.json(
      {
        success: true,
        message: `Thank you! ${suggestion.restaurantName} has been submitted for Addis Foodie inspection & Awards nomination.`,
        suggestionId: suggestion.id,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Error processing suggestion submission:', error);
    return NextResponse.json(
      { error: 'Internal Server Error processing suggestion submission.' },
      { status: 500 }
    );
  }
}
