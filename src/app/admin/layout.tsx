import { ReactNode } from 'react';
import AdminNavbar from '@/admin/adminnavbar/AdminNavbar';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
      <AdminNavbar />
      <main style={{ minHeight: 'calc(100vh - 72px)' }}>
        {children}
      </main>
    </>
  );
}
