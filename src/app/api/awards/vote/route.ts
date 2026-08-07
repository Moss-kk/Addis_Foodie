import { NextResponse } from 'next/server';

// In-memory vote store for v1 MVP demonstration
// NOTE: Replace with persistent database (e.g. Supabase/PostgreSQL) prior to production traffic.
const voteStore: Record<string, number> = {};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nomineeId, categorySlug, restaurantName } = body;

    if (!nomineeId || !categorySlug) {
      return NextResponse.json(
        { error: 'Missing required fields: nomineeId and categorySlug are required.' },
        { status: 400 }
      );
    }

    const key = `${categorySlug}:${nomineeId}`;
    voteStore[key] = (voteStore[key] || 0) + 1;

    const voteEntry = {
      id: `vote_${Date.now()}`,
      nomineeId: String(nomineeId),
      categorySlug: String(categorySlug),
      restaurantName: restaurantName ? String(restaurantName) : 'Unknown',
      currentTotalVotes: voteStore[key],
      timestamp: new Date().toISOString(),
    };

    console.log('[AWARDS VOTE CAST]:', voteEntry);

    return NextResponse.json(
      {
        success: true,
        message: `Vote successfully registered for ${voteEntry.restaurantName}!`,
        voteId: voteEntry.id,
        totalNomineeVotes: voteStore[key],
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Error processing award vote:', error);
    return NextResponse.json(
      { error: 'Internal Server Error processing award vote.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    votes: voteStore,
  });
}
