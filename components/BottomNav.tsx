
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Shield, BarChart3, User } from 'lucide-react';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 定义不需要显示底部主导航的页面路径
  const hideOnPaths = ['/product-detail', '/my-policy', '/reservation'];
  if (hideOnPaths.includes(location.pathname)) {
    return null;
  }

  const navItems = [
    { id: 'home', icon: <Home className="w-5 h-5" />, label: '首页', path: '/' },
    { id: 'mall', icon: <Shield className="w-5 h-5" />, label: '保险商城', path: '/insurance-mall' },
    { id: 'funds', icon: <BarChart3 className="w-5 h-5" />, label: '基金服务', path: '/fund-services' },
    { id: 'me', icon: <User className="w-5 h-5" />, label: '我的', path: '/me' },
  ];

  return (
    <nav className="absolute bottom-0 left-0 right-0 h-[75px] bg-white border-t border-gray-100 flex items-stretch justify-around px-2 z-50 pb-2">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className="relative flex flex-col items-center justify-center flex-1 transition-all"
          >
            <div className={`transition-colors duration-200 ${isActive ? 'text-orange-500' : 'text-gray-400'}`}>
              {item.icon}
            </div>
            <span className={`text-[10px] mt-1 transition-colors duration-200 ${
              isActive ? 'text-gray-900 font-bold' : 'text-gray-400 font-medium'
            }`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
