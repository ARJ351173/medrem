import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from 'src/Components/Home.jsx';
import History from 'src/components/History';
import Settings from 'src/components/Settings';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
