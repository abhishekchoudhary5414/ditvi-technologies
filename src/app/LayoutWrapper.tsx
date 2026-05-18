'use client';

import { usePathname } from 'next/navigation';
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PopupTrigger from '@/custom/getquotepopup/PopupTrigger';
import { useDeferredCss } from '@/lib/useDeferredCss';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  // Defer non-critical CSS loading
  useDeferredCss();

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <PopupTrigger />
      {children}
      <Footer />
    </>
  );
}
