
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';
import PolicyDetail from './pages/PolicyDetail';
import InsuranceMall from './pages/InsuranceMall';
import ProductDetail from './pages/ProductDetail';
import ReservationForm from './pages/ReservationForm';
import FundServices from './pages/FundServices';
import FundDetail from './pages/FundDetail';
import Me from './pages/Me';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen max-w-md mx-auto bg-gray-50 shadow-xl relative overflow-x-hidden">
        {/* 全局水印层 */}
        <div className="watermark-overlay"></div>

        {/* Main Content Area */}
        <main className="flex-1 pb-20 overflow-y-auto hide-scrollbar">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/insurance-mall" element={<InsuranceMall />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/reservation" element={<ReservationForm />} />
            <Route path="/fund-services" element={<FundServices />} />
            <Route path="/fund-detail" element={<FundDetail />} />
            <Route path="/my-policy" element={<PolicyDetail />} />
            <Route path="/hk-card" element={<PlaceholderPage title="港卡服务" />} />
            <Route path="/proposal" element={<PlaceholderPage title="保险建议书" />} />
            <Route path="/me" element={<Me />} />
          </Routes>
        </main>

        {/* Persistent Navigation - Now uses 'fixed' internally */}
        <BottomNav />
      </div>
    </Router>
  );
};

export default App;
