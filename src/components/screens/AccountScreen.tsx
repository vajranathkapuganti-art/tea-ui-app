type AccountScreenProps = {
  className: string;
  onBack: () => void;
  onViewMenu: () => void;
};

export function AccountScreen({ className, onBack, onViewMenu }: AccountScreenProps) {
  return (
    <section className={`${className} overflow-y-auto md:overflow-y-hidden`}>
      <header className="sticky top-0 z-10 bg-neutral-50 flex items-center gap-2 px-4 pb-2 pt-3 md:px-6 lg:px-8">
        <button type="button" onClick={onBack} className="tap-card text-lg leading-none md:text-xl">
          ←
        </button>
        <h1 className="text-sm font-semibold md:text-base lg:text-lg">Account</h1>
      </header>

      <div className="space-y-4 px-4 pb-20 pt-1 text-sm md:space-y-6 md:px-6 md:pb-24 lg:space-y-8 lg:px-8 lg:pb-28">
        <div className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm md:p-6 lg:p-8">
          <p className="text-xs font-medium text-neutral-500 md:text-sm">Phone number</p>
          <div className="mt-2 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-neutral-900 md:text-base">+91 90000 00000</p>
            <button type="button" className="text-xs font-medium text-neutral-600 underline md:text-sm">
              Change
            </button>
          </div>
          <p className="mt-1 text-[11px] text-neutral-400 md:text-xs">
            Use your phone number to receive order updates and rewards.
          </p>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm md:p-6 lg:p-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold md:text-base lg:text-lg">Your history</p>
            <button type="button" className="text-xs font-medium text-neutral-600 underline md:text-sm">
              View all
            </button>
          </div>
          <div className="mt-3 space-y-2 text-xs text-neutral-600 md:text-sm lg:text-base">
            <div className="flex items-center justify-between">
              <span>Coconut Mango Boom · £5.9</span>
              <span className="text-[11px] text-neutral-400 md:text-xs">Today</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Dalgona Bubble Tea · £5.5</span>
              <span className="text-[11px] text-neutral-400 md:text-xs">Yesterday</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm md:p-6 lg:p-8">
          <p className="text-sm font-semibold md:text-base lg:text-lg">Current order</p>
          <p className="mt-1 text-xs text-neutral-600 md:text-sm lg:text-base">
            You don&apos;t have an active order right now.
          </p>
          <button
            type="button"
            onClick={onViewMenu}
            className="mt-3 inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium text-neutral-800 md:px-6 md:py-3 md:text-sm lg:px-8 lg:py-3 lg:text-base"
          >
            Go to Order
          </button>
        </div>
      </div>
    </section>
  );
}
