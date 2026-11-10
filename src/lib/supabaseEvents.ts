import { supabase } from './supabase';
import type { Event, Category } from './events';

type DatabaseEvent = {
  id: string;
  title: string;
  category: string;
  description: string | null;
  start_date: string;
  end_date: string | null;
  start_time: string | null;
  end_time: string | null;
  venue: string | null;
  street_address: string | null;
  organizer: string | null;
  image_url: string | null;
  event_url: string | null;
  is_repost: boolean | null;
  original_source_url: string | null;
};

function formatTime(
  start: string | null,
  end: string | null
): string {
  if (!start) return 'ALL DAY';

  const convert = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hour = hours % 12 || 12;

    return `${hour}:${String(minutes).padStart(2, '0')} ${period}`;
  };

  return end
    ? `${convert(start)} – ${convert(end)}`
    : convert(start);
}

export async function fetchPublishedEvents(): Promise<Event[]> {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('status', 'published')
    .order('start_date', { ascending: true });

  if (error) {
    console.error('Supabase event retrieval error:', error);
    throw error;
  }

  return ((data ?? []) as DatabaseEvent[]).map((event) => ({
    id: event.id,
    title: event.title,
    category: event.category.toUpperCase() as Category,
    start: event.start_date,
    end: event.end_date ?? undefined,
    time: formatTime(event.start_time, event.end_time),
    venue: event.venue ?? '',
    address: event.street_address ?? '',
    organizer: event.organizer ?? '',
    description: event.description ?? '',
    keywords: [],
    image: event.image_url ?? undefined,
    website: event.event_url ?? undefined,
    repost: event.is_repost ?? false,
    source: event.original_source_url ?? undefined,
  }));
}
