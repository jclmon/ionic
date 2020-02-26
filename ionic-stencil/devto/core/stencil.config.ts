import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'core',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: '**/*.scss' }
      ]
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
