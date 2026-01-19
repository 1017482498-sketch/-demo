
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
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto h-[75px] bg-white border-t border-gray-100 flex items-stretch justify-around px-2 z-[999] pb-safe shadow-[0_-1px_10px_rgba(0,0,0,0.02)]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className="relative flex flex-col items-center justify-center flex-1 transition-all active:scale-95"
          >
            <div className={`transition-colors duration-200 ${isActive ? 'text-orange-500' : 'text-gray-400'}`}>
              {/* Fix: Use 'as any' to bypass strict type checking for strokeWidth on the cloned Lucide icon element */}
              {React.cloneElement(item.icon as any, { strokeWidth: isActive ? 2.5 : 2 })}
            </div>
            <span className={`text-[10px] mt-1 transition-colors duration-200 ${
              isActive ? 'text-gray-900 font-bold' : 'text-gray-400 font-medium'
            }`}>
              {item.label}
            </span>
            {isActive && (
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-orange-500 rounded-b-full opacity-20"></div>
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
