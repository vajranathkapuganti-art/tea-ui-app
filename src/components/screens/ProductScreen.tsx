type ProductScreenProps = {
  className: string;
  productName: string;
  onBack: () => void;
};

export function ProductScreen({ className, productName, onBack }: ProductScreenProps) {
  return (
    <section className={`${className} overflow-y-auto md:overflow-y-hidden`}>
      <header className="sticky top-0 z-10 bg-neutral-50 flex items-center gap-2 px-4 pb-2 pt-3 md:px-6 lg:px-8">
        <button type="button" onClick={onBack} className="tap-card text-lg leading-none md:text-xl">
          ←
        </button>
        <h1 className="text-sm font-semibold md:text-base lg:text-lg">{productName}</h1>
      </header>

      <div className="px-4 pb-20 pt-1 text-sm md:px-6 md:pb-24 lg:px-8 lg:pb-28">
        <div className="rounded-3xl bg-amber-50 px-4 py-5 fade-up md:px-6 md:py-8 lg:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 md:text-xs lg:text-sm">
            Explore More Natural Recipes
          </p>
          <h2 className="mt-2 text-lg font-semibold md:text-xl lg:text-2xl">{productName}</h2>
          <p className="mt-2 text-xs leading-relaxed text-neutral-600 md:text-sm lg:text-base">
            Freshly made with real ingredients and handcrafted toppings. Replace this text
            with the specific recipe and story for each drink.
          </p>
        </div>
      </div>
    </section>
  );
}
