'use client';

import { useEffect, useState } from 'react';

import { BottomNav } from '@/components/layout/BottomNav';
import { AccountScreen } from '@/components/screens/AccountScreen';
import { HomeScreen } from '@/components/screens/HomeScreen';
import { MenuScreen } from '@/components/screens/MenuScreen';
import { ProductScreen } from '@/components/screens/ProductScreen';
import { HERO_ITEMS } from '@/lib/data';
import { screenClass } from '@/lib/screen';
import type { Screen } from '@/lib/types';

export function TeaApp() {
  const [screen, setScreen] = useState<Screen>('home');
  const [heroIndex, setHeroIndex] = useState(0);
  const [currentProduct, setCurrentProduct] = useState<string>(HERO_ITEMS[0].name);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % HERO_ITEMS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const hero = HERO_ITEMS[heroIndex];

  const openProduct = (name: string) => {
    setCurrentProduct(name);
    setScreen('product');
  };

  return (
    <main className="min-h-screen bg-neutral-200/80 py-0 sm:bg-neutral-300/60 sm:py-6 md:py-8 lg:py-0">
      <div className="app-shell">
        <div className="relative mt-0 flex-1 overflow-hidden">
          <HomeScreen
            className={screenClass(screen, 'home')}
            hero={hero}
            onOpenProduct={openProduct}
          />
          <MenuScreen
            className={screenClass(screen, 'menu')}
            onBack={() => setScreen('home')}
            onOpenProduct={openProduct}
          />
          <ProductScreen
            className={screenClass(screen, 'product')}
            productName={currentProduct}
            onBack={() => setScreen('menu')}
          />
          <AccountScreen
            className={screenClass(screen, 'account')}
            onBack={() => setScreen('home')}
            onViewMenu={() => setScreen('menu')}
          />
        </div>

        <BottomNav screen={screen} onNavigate={setScreen} />
      </div>
    </main>
  );
}
