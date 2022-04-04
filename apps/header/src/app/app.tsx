import './app.scss';
import { Link } from 'react-router-dom';

export function App() {
  return (
    <header className="app-header">
      <h1>Custom Header</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Go to homepage</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
