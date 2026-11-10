import type { Event, Category } from './events';

type DbEvent = {
  id: string; title: string; category: string; description: string;
  start_date: string; end_date: string | null; start_time: string | null;
  end_time: string | null; organizer: string; venue: string | null;
  street_address: string | null; image_url: string | null;
  event_url: string | null; original_source_url: string | null;
  is_repost: boolean;
  event_keywords: { keyword: string }[] | null;
  event_closures: { closure_date: string | null; weekday: number | null }[] | null;
};

function clock(value: string | null): string | null {
  if (!value) return null;
  const [hour, minute] = value.split(':').map(Number);
  if (!Number.isFinite(hour) || !Number.isFinite(minute)) return null;
  return `${hour % 12 || 12}:${String(minute).padStart(2, '0')} ${hour >= 12 ? 'PM' : 'AM'}`;
}

function toEvent(row: DbEvent): Event {
  const start = clock(row.start_time);
  const end = clock(row.end_time);
  return {
    id: row.id, title: row.title, category: row.category.toUpperCase() as Category,
    start: row.start_date, end: row.end_date || undefined,
    time: start ? `${start}${end ? ` – ${end}` : ''}` : 'ALL DAY',
    venue: row.venue || (row.street_address ? 'Location to be confirmed' : 'Online'),
    address: row.street_address || '', organizer: row.organizer,
    description: row.description, keywords: (row.event_keywords || []).map(k => k.keyword),
    image: row.image_url || undefined, website: row.event_url || undefined,
    closedWeekdays: (row.event_closures || []).filter(c => c.weekday !== null).map(c => c.weekday!),
    closedDates: (row.event_closures || []).filter(c => c.closure_date !== null).map(c => c.closure_date!),
    repost: row.is_repost, source: row.original_source_url || undefined,
  };
}

/** Browser-safe read-only request. Supabase RLS restricts anonymous access to published events. */
export async function loadPublishedEvents(): Promise<Event[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error('Supabase environment variables are not configured.');
  const endpoint = `${url.replace(/\/$/, '')}/rest/v1/events`;
  const params = new URLSearchParams({
    select: 'id,title,category,description,start_date,end_date,start_time,end_time,organizer,venue,street_address,image_url,event_url,original_source_url,is_repost,event_keywords(keyword),event_closures(closure_date,weekday)',
    status: 'eq.published', order: 'start_date.asc', limit: '1000',
  });
  const response = await fetch(`${endpoint}?${params}`, {
    headers: { apikey: key }, cache: 'no-store',
  });
  if (!response.ok) throw new Error(`Supabase event request failed (${response.status}).`);
  return ((await response.json()) as DbEvent[]).map(toEvent);
}
