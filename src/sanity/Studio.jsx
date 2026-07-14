import React from 'react';
import { Studio } from 'sanity';
import config from '../../sanity.config';

const SanityStudio = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Studio config={config} />
    </div>
  );
};

export default SanityStudio;
