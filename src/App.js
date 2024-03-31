import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CreateNewsFeedPage from './components/CreateNewsFeedPage';
import ManageNewsFeedsPage from './components/ManageNewsFeedsPage';
import PerformanceReportsPage from './components/PerformanceReportsPage';

function App() {
// Add fetchNews to dependency array to ensure useEffect runs when fetchNews changes

  return (
    <div className="app">
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to='/'>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to='/create'>Create News Feed</NavLink>
          </li>
          <li>
            <NavLink to='/manage'>Manage News Feeds</NavLink>
          </li>
          <li>
            <NavLink to='/reports'>Performance Reports</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateNewsFeedPage />} />
        <Route path="/manage" element={<ManageNewsFeedsPage />} />
        <Route path="/reports" element={<PerformanceReportsPage />} />
      </Routes>
    </div>
  );
}

export default App;
