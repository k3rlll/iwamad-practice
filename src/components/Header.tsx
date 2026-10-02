import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header className="header">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>{title}</h1>
        <span>Likes: {likes}</span>
      </div>
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}