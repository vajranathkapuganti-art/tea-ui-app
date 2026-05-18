import { ProductImagePlaceholder } from '@/components/ui/ProductImagePlaceholder';
import type { HeroItem } from '@/lib/types';
import Image from 'next/image';

type HomeScreenProps = {
  className: string;
  hero: HeroItem;
  onOpenProduct: (name: string) => void;
};

export function HomeScreen({ className, hero, onOpenProduct }: HomeScreenProps) {
  return (
    <section className={`${className} overflow-y-auto md:overflow-y-hidden`}>
      <header className="sticky top-0 z-10 bg-neutral-50 px-4 pt-2 fade-up md:px-6 lg:px-8 pb-20 md:pb-24 lg:pb-28">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold md:text-base lg:text-xl">COCO & BOBA</p>
          </div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
          />
        </div>

        <button
          type="button"
          onClick={() => onOpenProduct(hero.name)}
          className="tap-card mt-4 w-full rounded-3xl bg-white p-4 text-left shadow-sm fade-up fade-up-delay md:mt-6 md:p-6 lg:p-8"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 md:text-sm">
                today&apos;s picks
              </p>
              <p className="mt-2 text-sm font-semibold md:text-base lg:text-lg">{hero.name}</p>
              <p className="mt-1 text-xs text-neutral-500 md:text-sm">{hero.subtitle}</p>
            </div>
            <ProductImagePlaceholder />
          </div>
        </button>

        <div className="mt-3 rounded-3xl bg-white p-4 text-xs text-neutral-600 shadow-sm fade-up fade-up-delay-lg md:mt-6 md:p-6 lg:p-8 lg:mt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500 md:text-xs lg:text-sm">
            Our store
          </p>
          <p className="mt-1 text-sm font-semibold text-neutral-900 md:text-base lg:text-lg">
            Hyderabad has never settled for ordinary. Neither have we.
          </p>
          <p className="mt-2 leading-relaxed md:text-sm lg:text-base">
            We blend fresh ingredients with handcrafted toppings to make calm, everyday
            drinks. Change this text to describe your own shop, story, and values.
          </p>
          <p className="mt-2 leading-relaxed md:text-sm lg:text-base">
            So we did the work. Travelled to Vietnam, trained properly, learned to make pearls from scratch, brew authentic teas, craft fruit teas that actually taste like fruit, build ice blends with real depth, and get the tofu pudding and bingsu just right.
Everything on our menu is made with that same intention. Pearls cooked in-house, teas selected for depth, fruits chosen at peak ripeness.
          </p>
          <p className="mt-2 leading-relaxed md:text-sm lg:text-base">
            Whether grabbing something quick or sitting down with friends, every order is made to be worth your time.
          </p>
          <p className="mt-2 leading-relaxed md:text-sm lg:text-base">
            Replace this copy with your brand intro, opening hours, or any short message you
            want guests to see first.
          </p>
        </div>
      </header>
    </section>
  );
}
