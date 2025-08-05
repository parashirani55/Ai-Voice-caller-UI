import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './pages/Dashboard';
import Calls from './pages/Calls';
import Campaigns from './pages/Campaigns';
import Settings from './pages/Settings';
import LiveMonitor from './pages/LiveMonitor';
function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calls" element={<Calls />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/live" element={<LiveMonitor />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
