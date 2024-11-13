import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Desktop6 from './pages/Desktop6';
import Desktop7 from './pages/Desktop7';
import Desktop4 from './pages/Desktop4';
import Desktop8 from './pages/Desktop8';
import Desktop18 from './pages/Desktop18';
import Desktops20 from './pages/Desktops20';
import Desktop23 from './pages/Desktop23';
import Desktop24 from './pages/Desktop24';
import Desktop27 from './pages/Desktop27';
import Desktop28 from './pages/Desktop28';
import Marketers from './pages/Marketers';
import Desktops9 from './pages/Desktops9';
import Desktops14 from './pages/Desktop14';
import DashboardHome from './pages/Dashboard';
const App = () => {
  return (
    <Router>
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<DashboardHome/>} />
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
          <Route path="/desktop6" element={<Desktop6/>} />
          <Route path="/desktop7" element={<Desktop7/>} />
          <Route path="/desktop4" element={<Desktop4/>} />
          <Route path="/desktop8" element={<Desktop8/>} />
          <Route path="/desktop18" element={<Desktop18/>} />
          <Route path="/desktop20" element={<Desktops20/>} />
          <Route path="/desktop23" element={<Desktop23/>} />
          <Route path="/desktop24" element={<Desktop24/>} />
          <Route path="/desktop27" element={<Desktop27/>} />
          <Route path="/desktop28" element={<Desktop28/>} />
          <Route path="/marketer" element={<Marketers/>} />
          <Route path="/desktop9" element={<Desktops9/>} />
          <Route path="/desktop14" element={<Desktops14/>} />
        </Routes>
    </Router>
  );
};

export default App;

