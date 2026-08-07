import { redirect } from 'next/navigation';
import { AWARDS_BASE_URL } from '../../lib/awardsLinks';

export default function AwardsPage() {
  // Hand-off immediately to the official Netlify Awards application
  redirect(AWARDS_BASE_URL);
}
