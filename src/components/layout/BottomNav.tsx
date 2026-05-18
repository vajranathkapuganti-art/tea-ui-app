import type { Screen } from '@/lib/types';

type BottomNavProps = {
  screen: Screen;
  onNavigate: (screen: Screen) => void;
};

const NAV_ITEMS: { label: string; screen: Screen }[] = [
  { label: 'Home', screen: 'home' },
  { label: 'Menu', screen: 'menu' },
  { label: 'Account', screen: 'account' },
];

function isActive(screen: Screen, target: Screen): boolean {
  if (target === 'menu') return screen === 'menu' || screen === 'product';
  return screen === target;
}

export function BottomNav({ screen, onNavigate }: BottomNavProps) {
  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map(({ label, screen: target }) => {
        const active = isActive(screen, target);
        return (
          <button
            key={target}
            type="button"
            className={`bottom-nav-btn ${active ? 'bottom-nav-btn-active' : ''}`}
            onClick={() => onNavigate(target)}
          >
            <span
              className={`h-5 w-5 rounded-full border ${
                active ? 'border-neutral-900' : 'border-neutral-400'
              }`}
            />
            <span>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
