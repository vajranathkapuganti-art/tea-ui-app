type AccountScreenProps = {
  className: string;
  onBack: () => void;
  onViewMenu: () => void;
};

export function AccountScreen({ className, onBack, onViewMenu }: AccountScreenProps) {
  return (
    <section className={className}>
      <header className="flex items-center gap-2 px-4 pb-2 pt-3">
        <button type="button" onClick={onBack} className="tap-card text-lg leading-none">
          ←
        </button>
        <h1 className="text-sm font-semibold">Account</h1>
      </header>

      <div className="space-y-4 px-4 pb-6 pt-1 text-sm">
        <div className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium text-neutral-500">Phone number</p>
          <div className="mt-2 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-neutral-900">+91 90000 00000</p>
            <button type="button" className="text-xs font-medium text-neutral-600 underline">
              Change
            </button>
          </div>
          <p className="mt-1 text-[11px] text-neutral-400">
            Use your phone number to receive order updates and rewards.
          </p>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Your history</p>
            <button type="button" className="text-xs font-medium text-neutral-600 underline">
              View all
            </button>
          </div>
          <div className="mt-3 space-y-2 text-xs text-neutral-600">
            <div className="flex items-center justify-between">
              <span>Coconut Mango Boom · £5.9</span>
              <span className="text-[11px] text-neutral-400">Today</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Dalgona Bubble Tea · £5.5</span>
              <span className="text-[11px] text-neutral-400">Yesterday</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold">Current order</p>
          <p className="mt-1 text-xs text-neutral-600">
            You don&apos;t have an active order right now.
          </p>
          <button
            type="button"
            onClick={onViewMenu}
            className="mt-3 inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium text-neutral-800"
          >
            Go to Order
          </button>
        </div>
      </div>
    </section>
  );
}
