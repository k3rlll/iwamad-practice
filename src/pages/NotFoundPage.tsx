import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <div className="page-content">
      <h2>404 - Not Found</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
}