import type { Screen } from '@/lib/types';

export function screenClass(active: Screen, name: Screen): string {
  return `screen-base ${active === name ? 'screen-visible' : ''}`;
}
