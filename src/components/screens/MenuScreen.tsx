import { ProductImagePlaceholder } from '@/components/ui/ProductImagePlaceholder';
import { FEATURED_DRINKS, MENU_CATEGORIES } from '@/lib/data';

type MenuScreenProps = {
  className: string;
  onBack: () => void;
  onOpenProduct: (name: string) => void;
};

export function MenuScreen({ className, onBack, onOpenProduct }: MenuScreenProps) {
  return (
    <section className={className}>
      <header className="px-4 pb-3 pt-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <button type="button" onClick={onBack} className="tap-card text-lg leading-none">
            ←
          </button>
          <p className="font-semibold tracking-wide">PICK UP</p>
        </div>

        <div className="mt-1 flex items-start justify-between gap-3 text-xs text-neutral-500">
          <div>
            <button
              type="button"
              className="flex items-center gap-1 text-left text-xs font-medium text-neutral-900"
            >
              <span className="text-[11px]">☆</span>
              <span>Southampton High Street ▾</span>
            </button>
            <p className="mt-1">
              No location service · <span className="underline">Enable now</span>
            </p>
          </div>
          <button
            type="button"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-sm text-white"
            aria-label="Search"
          >
            ⌕
          </button>
        </div>
        <p className="mt-2 text-xs text-neutral-400">new style tea, by inspiration</p>
      </header>

      <div className="flex border-t border-neutral-200 bg-white">
        <aside className="flex w-24 shrink-0 flex-col gap-4 border-r border-neutral-200 py-4 pl-3 pr-2 text-center text-[11px] text-neutral-400">
          {MENU_CATEGORIES.map((category, index) => (
            <button
              key={category}
              type="button"
              className={index === 0 ? 'font-medium text-neutral-900' : undefined}
            >
              {category}
            </button>
          ))}
        </aside>

        <section className="min-w-0 flex-1 space-y-6 px-4 py-4 text-sm">
          <h2 className="text-sm font-semibold fade-up">Featured Drinks</h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 text-xs">
            {FEATURED_DRINKS.map((drink, idx) => (
              <button
                key={drink.name}
                type="button"
                className={`tap-card flex flex-col items-center gap-2 text-center ${
                  idx < 2 ? 'fade-up fade-up-delay' : 'fade-up fade-up-delay-lg'
                }`}
                onClick={() => onOpenProduct(drink.name)}
              >
                <ProductImagePlaceholder label={drink.shortLabel} />
                <p className="w-full text-left text-[13px] font-normal text-neutral-900">
                  {drink.name}
                </p>
                <p className="w-full text-left text-[13px] text-neutral-600">£{drink.price}</p>
              </button>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
