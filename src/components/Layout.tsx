import { Outlet } from 'react-router';
import { Header } from './Header';
import Footer from '../components/Footer';

export function Layout() {
  return (
    <div className="layout-container">
      <Header title="My Portfolio" />
      <main>
        <Outlet />
      </main>
      <Footer year={2026} name="Ramazan Abdyashim" />
    </div>
  );
}