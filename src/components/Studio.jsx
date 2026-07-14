import React from 'react';
import { Studio } from 'sanity';
import config from '../../sanity.config';

export default function SanityStudio() {
  return (
    <div className="fixed inset-0 z-[99999] bg-white h-screen overflow-y-auto">
      <Studio config={config} />
    </div>
  );
}
