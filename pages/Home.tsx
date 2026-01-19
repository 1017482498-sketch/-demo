
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Handshake, 
  UserRoundCheck, 
  Search, 
  ChevronRight,
  FileText,
  CreditCard,
  ShoppingBag,
  TrendingUp,
  Baby,
  User,
  Home as HomeIcon,
  Stethoscope,
  BellRing
} from 'lucide-react';

// 稳定的 Logo 数据
const LOGOS = {
  BOC: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAANlBMVEVHcEwdZpYdZpYdZpYdZpYdZpYdZpYdZpYdZpYdZpYdZpYdZpYdZpYdZpYdZpYdZpYdZpYdZpb///9yis80AAAAEXRSTlMA9v72/v7+/v79/f39/f399fX18/Pv70gAAAFlSURBVFjD7dbXcsIwEATQJSG9994LhPT+/89shEAYMGYscXAn88LInSzdBUn5t8SQU66Y0pS4Rk65YkpTy8vH+fG1Wl6uL6uX7e9D9vM145Uv8PqB8fN51pY38No7fL5X9rGBeNn/uW2gYvTz1Gf55+mPrYFrz7uX1kCn09m9tAYm6O/TGqh3OK61BhqdjuvWQKfTeWkN1Dsc11oDjc7Ica010OiMHNdaA43OyHGtNdDojBzXWgONzsjtWmug2ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ug3ZmsW2ugM7L9AdlH8/A6yV/oAAAAAElFTkSuQmCC",
  SC: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAbFBMVEVHcEydzP/09f////9MmMz///89l8zU1f98p/9vof9In8xVndBAnsy20f9VndC70v9VndD09f89l8ypzuj///98p89Vncy70v89l8ypzun09f9MmMz///89l8ypzun09f/09f/09f/09f/09f92n84vAAAAH3RSTlMA/v7+/v7+9vXv7+fPz8/Pz5+fn5+fj49/f39/f38fD/Y+AAACGUlEQVRYw+2V2XaiSBCGKVREBQVREBfUuMaYmGTm/V9mU63ZRE0mOfdp8m7O6mI/f9Vf1V3Anz6Uf06y0YI/95I6Y0XzSreL3W77SreL7W6bYofp9pXatXWq/W6baofpYbtL77vtd9tUO0wP26f2vG3X6YbpYfu9XfX6Xp9qh+lh66/be32vT7XD9LD1un5v9r+T7TA9bJ/v680T96m2mB62f9yvP5N6VHtID1vH9uWJ+8t4v9v2O7YvT9yfK6v70xP3l/F+t+13bI89cX+urO5PT9zvy6v7y3i/27Yv9+X7v6X8v7m+vE88Xn//t5SvP/990uUv667L97e7Pq97SZe7vlj6Xf3u7jNd7nJpX63f1e98v8ulS7+X3un3vX669Dvd7/u97vtPl97p973/vUuXfqf7ff/u6XKX6X7f67+Xv7XfX6b7/at9697S5S7T/b59un1v6XKX6X7f66f9Xfrf0uUv6X7f/W4/Wrr0S7p99/vd0+Uv6fbd7/v3S5f+K/Xf/69/Xv6X73+P+7888f9H/K9Y/B8T/mcu/scZ/9f19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1/6O/L/8Byt4C8h+X2M8AAAAASUVORK5CYII=",
  HSBC: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/2560px-HSBC_logo_%282018%29.svg.png"
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  const banks = [
    {
      name: "中国银行 (香港)",
      logo: LOGOS.BOC,
      tags: ['跨境便利', '中银理财'],
      color: "border-red-100"
    },
    {
      name: "汇丰银行 (HSBC)",
      logo: LOGOS.HSBC,
      tags: ['全球通行', '卓越理财'],
      color: "border-red-50"
    },
    {
      name: "渣打银行 (SC)",
      logo: LOGOS.SC,
      tags: ['快速审批', '优先理财'],
      color: "border-green-50"
    }
  ];

  return (
    <div className="flex flex-col space-y-4 pb-10 bg-[#f8fafc] min-h-full">
      {/* 1. Header Area */}
      <div className="px-4 pt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
           <div className="w-9 h-9 rounded-xl bg-[#1a2b4b] flex items-center justify-center shadow-lg shadow-blue-900/20">
              <span className="text-white font-bold text-sm">DC</span>
           </div>
           <div>
              <h1 className="text-lg font-bold text-[#1a2b4b] leading-tight">德萃财富</h1>
              <p className="text-[9px] text-gray-400 font-medium tracking-tighter uppercase">DC Wealth Management</p>
           </div>
        </div>
        <div className="flex space-x-2">
          <div className="p-2.5 bg-white rounded-full shadow-sm border border-gray-100 active:scale-90 transition-transform cursor-pointer">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <div className="p-2.5 bg-white rounded-full shadow-sm border border-gray-100 relative active:scale-90 transition-transform cursor-pointer">
            <BellRing className="w-5 h-5 text-gray-400" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
        </div>
      </div>

      {/* 2. Trust Indicators */}
      <div className="px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 flex items-center justify-between shadow-sm border border-white/50">
          <TrustItem icon={<ShieldCheck className="w-3.5 h-3.5" />} label="持牌经纪机构" />
          <div className="h-3 w-[1px] bg-gray-200"></div>
          <TrustItem icon={<Handshake className="w-3.5 h-3.5" />} label="合规资金出境" />
          <div className="h-3 w-[1px] bg-gray-200"></div>
          <TrustItem icon={<UserRoundCheck className="w-3.5 h-3.5" />} label="1对1专家服务" />
        </div>
      </div>

      {/* 3. Hero Banner */}
      <div className="px-4">
        <div className="relative h-48 rounded-3xl overflow-hidden bg-[#1a2b4b] text-white shadow-2xl group cursor-pointer active:scale-[0.99] transition-transform">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b4b] via-[#1a2b4b] to-[#2c4a85]"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#c5a059] opacity-10 blur-[60px] rounded-full"></div>
          <div className="relative p-6 flex flex-col justify-center h-full space-y-4">
            <div className="flex items-center space-x-3">
                <div className="bg-white/10 backdrop-blur-xl p-2.5 rounded-2xl border border-white/20 shadow-inner">
                   <div className="w-10 h-10 border-2 border-[#c5a059] rounded flex items-center justify-center">
                      <span className="text-[#c5a059] font-serif font-bold text-xl">DC</span>
                   </div>
                </div>
                <div className="space-y-0.5">
                  <h2 className="text-xl font-bold tracking-wide">德萃财富 | DC Wealth</h2>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-bold opacity-90">Asset Management Service</p>
                </div>
            </div>
            <div className="space-y-1.5">
              <p className="text-xl font-semibold leading-tight">定制您的全球资产配置方案</p>
              <div className="flex space-x-3">
                <BannerTag text="香港保险" />
                <BannerTag text="港卡开户" />
                <BannerTag text="环球基金" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Main Grid Navigation (恢复样式但保持不跳转逻辑) */}
      <div className="px-4 grid grid-cols-5 gap-2 text-center pt-2">
        <NavIcon 
          icon={<FileText className="w-6 h-6" />} 
          label="保险建议书" 
          color="bg-orange-50" 
          textColor="text-orange-500" 
          /* onClick 留空以保持不展示新页面，但移除 disabled 以恢复样式 */
        />
        <NavIcon 
          icon={<ShieldCheck className="w-6 h-6" />} 
          label="我的保单" 
          color="bg-blue-50" 
          textColor="text-blue-500" 
          onClick={() => navigate('/my-policy')} 
        />
        <NavIcon 
          icon={<ShoppingBag className="w-6 h-6" />} 
          label="保险商城" 
          color="bg-orange-50" 
          textColor="text-orange-500" 
          onClick={() => navigate('/insurance-mall')} 
        />
        <NavIcon 
          icon={<TrendingUp className="w-6 h-6" />} 
          label="基金服务" 
          color="bg-indigo-50" 
          textColor="text-indigo-500" 
          onClick={() => navigate('/fund-services')} 
        />
        <NavIcon 
          icon={<CreditCard className="w-6 h-6" />} 
          label="港卡服务" 
          color="bg-amber-50" 
          textColor="text-amber-600" 
          /* onClick 留空以保持不展示新页面，但移除 disabled 以恢复样式 */
        />
      </div>

      {/* 5. Insurance Categories */}
      <div className="px-4 py-4 border-y border-gray-100 bg-white">
        <div className="grid grid-cols-4 gap-4">
          <TypeIcon icon={<Baby className="w-6 h-6" />} label="少儿重疾" color="bg-sky-50" textColor="text-sky-500" />
          <TypeIcon icon={<User className="w-6 h-6" />} label="成人重疾" color="bg-blue-50" textColor="text-blue-500" />
          <TypeIcon icon={<HomeIcon className="w-6 h-6" />} label="养老储蓄" color="bg-indigo-50" textColor="text-indigo-500" />
          <TypeIcon icon={<Stethoscope className="w-6 h-6" />} label="高端医疗" color="bg-blue-100" textColor="text-blue-600" />
        </div>
      </div>

      {/* 6. ★ 新增：保险建议书推荐板块 (复刻截图样式) ★ */}
      <div className="px-4">
        <div 
          onClick={() => navigate('/proposal')}
          className="bg-white rounded-[28px] overflow-hidden shadow-sm border border-gray-50 flex items-stretch h-36 active:scale-[0.98] transition-transform cursor-pointer group"
        >
          {/* 左侧文字区 */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-gray-800 tracking-tight">免费获取保险建议书</h3>
              <p className="text-[10px] text-gray-400 font-medium tracking-tight">
                1对1顾问 · 不花钱 · 无强制购买
              </p>
            </div>
            <button className="w-28 bg-orange-500 text-white py-2.5 rounded-full text-xs font-bold shadow-lg shadow-orange-100 active:scale-95 transition-transform">
              立即获取
            </button>
          </div>
          {/* 右侧图片区 */}
          <div className="w-32 relative overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=300&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
               alt="Proposal Background"
             />
             <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10"></div>
          </div>
        </div>
      </div>

      {/* 7. Bank Account Services Section */}
      <div className="px-4 space-y-4 pt-2">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-lg font-bold text-gray-800 flex items-center">
            <span className="w-1.5 h-5 bg-[#c5a059] rounded-full mr-2.5"></span>
            港卡开户服务
          </h3>
          <button className="text-xs text-blue-600 font-bold bg-blue-50/50 px-3.5 py-1.5 rounded-xl hover:bg-blue-50 transition-all">查看全部</button>
        </div>
        <div className="space-y-3">
          {banks.map((bank, index) => (
            <BankCard 
              key={index}
              name={bank.name} 
              logo={bank.logo} 
              tags={bank.tags} 
              borderColor={bank.color}
            />
          ))}
        </div>
      </div>

      {/* 8. Footer Info */}
      <div className="px-4 py-12 text-center space-y-4">
        <div className="flex justify-center items-center space-x-6 text-[11px] text-gray-400 font-semibold">
          <span className="cursor-pointer">服务声明</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="cursor-pointer">隐私政策</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="cursor-pointer">风险提示</span>
        </div>
        <p className="text-[10px] text-gray-300 tracking-widest uppercase">DC WEALTH MANAGEMENT © 2024</p>
      </div>
    </div>
  );
};

// 辅助子组件
const TrustItem: React.FC<{ icon: React.ReactNode, label: string }> = ({ icon, label }) => (
  <div className="flex items-center space-x-1.5 text-[10px] text-gray-500 font-bold">
    <div className="text-[#c5a059]">{icon}</div>
    <span>{label}</span>
  </div>
);

const BannerTag: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center space-x-1.5 text-[10px] text-white/80 font-bold">
    <div className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></div>
    <span>{text}</span>
  </div>
);

const NavIcon: React.FC<{ icon: React.ReactNode, label: string, color: string, textColor: string, onClick?: () => void, disabled?: boolean }> = ({ icon, label, color, textColor, onClick, disabled }) => (
  <button 
    onClick={disabled ? undefined : onClick} 
    className={`flex flex-col items-center space-y-2.5 group ${disabled ? 'cursor-default opacity-50' : 'cursor-pointer'}`}
  >
    <div className={`${color} ${textColor} p-4 rounded-[22px] ${!disabled && 'group-active:scale-90'} transition-all shadow-sm border border-white`}>
      {icon}
    </div>
    <span className={`text-[10px] font-bold ${disabled ? 'text-gray-400' : 'text-gray-600'} whitespace-nowrap tracking-tight`}>{label}</span>
  </button>
);

const TypeIcon: React.FC<{ icon: React.ReactNode, label: string, color: string, textColor: string }> = ({ icon, label, color, textColor }) => (
  <button className="flex flex-col items-center space-y-2 group">
    <div className={`${color} ${textColor} p-4 rounded-full group-active:scale-90 transition-all shadow-sm border border-white`}>
      {icon}
    </div>
    <span className="text-[11px] font-bold text-gray-700 whitespace-nowrap">{label}</span>
  </button>
);

const BankCard: React.FC<{ name: string, logo: string, tags: string[], borderColor: string }> = ({ name, logo, tags, borderColor }) => (
  <div className={`flex items-center justify-between p-4 bg-white rounded-3xl border-2 ${borderColor} shadow-sm active:bg-gray-50 active:scale-[0.98] transition-all cursor-pointer group`}>
    <div className="flex items-center space-x-4">
      <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white border border-gray-100 flex items-center justify-center p-1.5 flex-shrink-0 shadow-inner">
        <img src={logo} alt={name} className="max-w-full max-h-full object-contain" />
      </div>
      <div className="flex flex-col space-y-1.5">
        <span className="text-[15px] font-bold text-gray-800 tracking-tight">{name}</span>
        <div className="flex flex-wrap gap-1.5">
          {tags.map(tag => (
            <span key={tag} className="text-[9px] px-2.5 py-1 bg-gray-50 text-gray-400 rounded-lg font-bold border border-gray-100/50">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <button className="text-[11px] text-white bg-[#1a2b4b] px-4 py-2 rounded-xl font-bold shadow-lg shadow-blue-900/10 active:scale-90 transition-transform">
        申请
      </button>
      <ChevronRight className="w-5 h-5 text-gray-200" />
    </div>
  </div>
);

export default Home;
