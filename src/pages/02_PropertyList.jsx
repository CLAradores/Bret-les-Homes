import { useState } from 'react';
import { Cards } from '../components';
import { HeroSection } from '../components';
import { SemiFooter } from '../components';

export const PropertyList = () => {
  return (
    <div>
      <HeroSection />
      <main>
        <section className="max-w-7xl m-auto py-7">
          <div className="flex flex-wrap justify-center">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </section>
      </main>
      <SemiFooter />
    </div>
  );
};
