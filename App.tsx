
import React, { useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';
import PolicyDetail from './pages/PolicyDetail';
import InsuranceMall from './pages/InsuranceMall';
import ProductDetail from './pages/ProductDetail';
import ReservationForm from './pages/ReservationForm';
import FundServices from './pages/FundServices';
import FundDetail from './pages/FundDetail';
import Me from './pages/Me';
import XufeibaoPoster from './pages/XufeibaoPoster';
import BottomNav from './components/BottomNav';

// 滚动置顶组件：监听路由变化并重置滚动位置
const ScrollToTop: React.FC<{ scrollRef: React.RefObject<HTMLElement | null> }> = ({ scrollRef }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [pathname, scrollRef]);

  return null;
};

const App: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen max-w-md mx-auto bg-gray-50 shadow-xl relative overflow-x-hidden">
        {/* 全局水印层 */}
        <div className="watermark-overlay"></div>

        {/* 滚动重置逻辑 */}
        <ScrollToTop scrollRef={mainRef} />

        {/* Main Content Area */}
        <main 
          ref={mainRef}
          className="flex-1 pb-20 overflow-y-auto hide-scrollbar"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/insurance-mall" element={<InsuranceMall />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/reservation" element={<ReservationForm />} />
            <Route path="/fund-services" element={<FundServices />} />
            <Route path="/fund-detail" element={<FundDetail />} />
            <Route path="/xufeibao" element={<XufeibaoPoster />} />
            <Route path="/my-policy" element={<PolicyDetail />} />
            <Route path="/hk-card" element={<PlaceholderPage title="港卡服务" />} />
            <Route path="/proposal" element={<PlaceholderPage title="保险建议书" />} />
            <Route path="/me" element={<Me />} />
          </Routes>
        </main>

        {/* Persistent Navigation */}
        <BottomNav />
      </div>
    </Router>
  );
};

export default App;
