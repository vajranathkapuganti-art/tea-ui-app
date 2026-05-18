import { ProductImagePlaceholder } from '@/components/ui/ProductImagePlaceholder';
import { MENU_CATEGORIES, PRODUCTS_BY_CATEGORY, type MenuCategory } from '@/lib/data';
import { useState } from 'react';

type MenuScreenProps = {
  className: string;
  onBack: () => void;
  onOpenProduct: (name: string) => void;
};

export function MenuScreen({ className, onBack, onOpenProduct }: MenuScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>(MENU_CATEGORIES[0]);
  const displayProducts = PRODUCTS_BY_CATEGORY[selectedCategory];

  return (
    <section className={`${className} overflow-y-auto`}>
      <header className="sticky top-0 z-10 bg-neutral-50 px-4 pb-3 pt-3 md:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm font-medium md:text-base">
          <button type="button" onClick={onBack} className="tap-card text-lg leading-none md:text-xl">
            ←
          </button>
          <p className="font-semibold tracking-wide">Home</p>
        </div>
      </header>

      <div className="flex border-t border-neutral-200 bg-white">
        <aside className="sticky top-0 flex w-24 shrink-0 flex-col gap-4 border-r border-neutral-200 py-4 pl-3 pr-2 text-center text-[11px] text-neutral-400 md:w-28 md:gap-6 md:text-xs lg:w-32 lg:py-6">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'font-medium text-neutral-900' : undefined}
            >
              {category}
            </button>
          ))}
        </aside>

        <section className="min-w-0 flex-1 space-y-6 px-4 py-4 text-sm md:space-y-8 md:px-6 md:py-6 lg:px-8 pb-20 md:pb-24 lg:pb-28 overflow-y-auto">
          <h2 className="text-sm font-semibold fade-up md:text-base lg:text-lg">{selectedCategory}</h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 text-xs md:grid-cols-3 md:gap-x-8 md:gap-y-10 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-12">
            {displayProducts.map((drink, idx) => (
              <button
                key={drink.name}
                type="button"
                className={`tap-card flex flex-col items-center gap-2 text-center ${
                  idx < 2 ? 'fade-up fade-up-delay' : 'fade-up fade-up-delay-lg'
                }`}
                onClick={() => onOpenProduct(drink.name)}
              >
                <ProductImagePlaceholder label={drink.shortLabel} />
                <p className="w-full text-left text-[13px] font-normal text-neutral-900 md:text-sm lg:text-base">
                  {drink.name}
                </p>
                <p className="w-full text-left text-[13px] text-neutral-600 md:text-sm lg:text-base">£{drink.price}</p>
              </button>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
