'use client'
import { ThemeProvider } from '@/components/theme-provider';
import HydrogenLayout from '@/layouts/hydrogen/layout';
import React from 'react';
import GlobalDrawer from '../shared/drawer-views/container';
import GlobalModal from '../shared/modal-views/container';

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <HydrogenLayout>{children}</HydrogenLayout>
      <GlobalDrawer />
      <GlobalModal />
    </ThemeProvider>
  )
}
