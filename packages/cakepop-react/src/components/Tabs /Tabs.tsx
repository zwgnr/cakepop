import React from 'react'

import * as Tab from '@radix-ui/react-tabs';

export const Tabs = () => (
  <Tab.Root defaultValue='tab1' orientation='vertical'>
    <Tab.List aria-label='tabs example'>
      <Tab.Trigger value='tab1'>One</Tab.Trigger>
      <Tab.Trigger value='tab2'>Two</Tab.Trigger>
      <Tab.Trigger value='tab3'>Three</Tab.Trigger>
    </Tab.List>
    <Tab.Content value='tab1'>Tab one content</Tab.Content>
    <Tab.Content value='tab2'>Tab two content</Tab.Content>
    <Tab.Content value='tab3'>Tab three content</Tab.Content>
  </Tab.Root>
);
