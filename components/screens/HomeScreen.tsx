import { ProductImagePlaceholder } from '@/components/ui/ProductImagePlaceholder';
import type { HeroItem } from '@/lib/types';

type HomeScreenProps = {
  className: string;
  hero: HeroItem;
  onOpenProduct: (name: string) => void;
};

export function HomeScreen({ className, hero, onOpenProduct }: HomeScreenProps) {
  return (
    <section className={className}>
      <header className="px-4 pt-2 fade-up">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">Hey, Guest</p>
            <p className="mt-0.5 text-xs text-neutral-500">
              141 Sparks · get 50 sparks on first order
            </p>
          </div>
          <button type="button" className="text-xs font-medium text-neutral-600">
            United Kingdom ▾
          </button>
        </div>

        <button
          type="button"
          onClick={() => onOpenProduct(hero.name)}
          className="tap-card mt-4 w-full rounded-3xl bg-white p-4 text-left shadow-sm fade-up fade-up-delay"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                today&apos;s picks
              </p>
              <p className="mt-2 text-sm font-semibold">{hero.name}</p>
              <p className="mt-1 text-xs text-neutral-500">{hero.subtitle}</p>
            </div>
            <ProductImagePlaceholder />
          </div>
        </button>

        <div className="mt-3 rounded-3xl bg-white p-4 text-xs text-neutral-600 shadow-sm fade-up fade-up-delay-lg">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Our store
          </p>
          <p className="mt-1 text-sm font-semibold text-neutral-900">
            New style tea, by inspiration.
          </p>
          <p className="mt-2 leading-relaxed">
            We blend fresh ingredients with handcrafted toppings to make calm, everyday
            drinks. Change this text to describe your own shop, story, and values.
          </p>
          <p className="mt-2 text-[11px] text-neutral-400">
            Replace this copy with your brand intro, opening hours, or any short message you
            want guests to see first.
          </p>
        </div>
      </header>
    </section>
  );
}
