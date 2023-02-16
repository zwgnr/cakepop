import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <img
        width='4%'
        src='https://raw.githubusercontent.com/zwagnr/cakepop/main/apps/docs/public/cakepop.png'
        alt='cakepopUI'
      />
      <span>CakepopUI</span>
    </div>
  ),
  project: {
    link: 'https://github.com/zwagnr/cakepop',
  },
  docsRepositoryBase: 'https://github.com/zwagnr/cakepop',
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='CakepopUI' />
      <meta property='og:description' content='CakepopUI' />
      <title>CakePopUI</title>
      <link
          rel="icon"
          href="/cakepop.png"
          type="image/png"
        />
    </>
  ),
  footer: {
    text: 'CakepopUI',
  },
  primaryHue: 308,
};

export default config;
