'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import AdminNavbar from '@/admin/adminnavbar/AdminNavbar';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const isLoginRoute = pathname === '/admin/login';

  if (isLoginRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <AdminNavbar />
      <main style={{ minHeight: 'calc(100vh - 72px)' }}>
        {children}
      </main>
    </>
  );
}
