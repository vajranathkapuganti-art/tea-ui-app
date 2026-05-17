type ProductScreenProps = {
  className: string;
  productName: string;
  onBack: () => void;
};

export function ProductScreen({ className, productName, onBack }: ProductScreenProps) {
  return (
    <section className={className}>
      <header className="flex items-center gap-2 px-4 pb-2 pt-3">
        <button type="button" onClick={onBack} className="tap-card text-lg leading-none">
          ←
        </button>
        <h1 className="text-sm font-semibold">{productName}</h1>
      </header>

      <div className="px-4 pb-6 pt-1 text-sm">
        <div className="rounded-3xl bg-amber-50 px-4 py-5 fade-up">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
            Explore More Natural Recipes
          </p>
          <h2 className="mt-2 text-lg font-semibold">{productName}</h2>
          <p className="mt-2 text-xs leading-relaxed text-neutral-600">
            Freshly made with real ingredients and handcrafted toppings. Replace this text
            with the specific recipe and story for each drink.
          </p>
        </div>
      </div>
    </section>
  );
}
