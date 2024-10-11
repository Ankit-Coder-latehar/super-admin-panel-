import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Dashboards2 from './pages/Dashboards2';
import Market from './pages/Market';
import MarketReport from './pages/MarketReport';
import Result from './pages/Result';
import Subscriptions from './pages/Subscriptions';
import Subscription2 from './pages/Subscription2';
import Branch from './pages/Branch';
import BranchHistory from './pages/BranchHistory';
import SeoContent from './pages/SeoContent';
import SeoContentForm from './pages/SeoContentForm';
import Admins from './pages/Admins';
import MarketCredits from './pages/MarketCredits';
import FakeBusinessPage from './pages/FakeBusiness';
const App = () => {
  return (
    <Router>
        
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard2" element={<Dashboards2 />} />
          <Route path="/market" element={<Market />} />
          <Route path="/marketreport" element={<MarketReport />} />'
          <Route path="/result" element={<Result />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/subscription2" element={<Subscription2 />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/branchhistory" element={<BranchHistory />} />
          <Route path="/seoContent" element={<SeoContent />} />
          <Route path="/seoContentForm" element={<SeoContentForm/>} />
          <Route path="/admins" element={<Admins/>} />
          <Route path="/marketCredits" element={<MarketCredits/>} />
          <Route path="/fakebusiness" element={<FakeBusinessPage/>} />

        </Routes>
    </Router>
  );
};

export default App;

