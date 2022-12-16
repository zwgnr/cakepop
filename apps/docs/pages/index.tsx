import * as React from 'react';

import Head from 'next/head';
import Image from 'next/image';
import '@cakepop/react/styles';
import styles from '../styles/Home.module.css';
import { Button, Container, Switch } from '@cakepop/react';
import { defaultTheme } from '@cakepop/react';
import { SideNav } from '../components/SideNav';

export default function Home() {
  return (
    <div className={defaultTheme}>
      <div className={styles.container}>
        <SideNav />
        </div>
    </div>
  );
}
