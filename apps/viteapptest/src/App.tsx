import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Button } from '@cakepop/react';
import { defaultTheme } from '@cakepop/react';
//import { customTheme } from './themee';
import { style } from '@macaron-css/core';
import '@master/css';

import '@cakepop/react/styles';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={defaultTheme}>
      <Button shape='base' variant='primary' css={style({ backgroundColor: 'red' })}>button</Button>
      <div>
        <button className='color:red bg:green:hover@md flex'>button</button>
        <button
          className={style({
            background: 'red',
            color: 'green',
            padding: '2px',
            display: 'flex',
            borderLeft: '2px solid red',
          })}
        >
          button
        </button>
        <div>
          <a href='https://vitejs.dev' target='_blank'>
            <img src='/vite.svg' className='logo' alt='Vite logo' />
          </a>
          <a href='https://reactjs.org' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      </div>
    </div>
  );
}

export default App;
