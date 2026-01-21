
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Info, Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';

const XufeibaoPoster: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#001838] relative overflow-hidden">
      {/* 增强背景装饰层 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001838] via-[#0b284e] to-[#001838]"></div>
      
      {/* 金色光晕氛围 */}
      <div className="absolute top-[-5%] right-[-10%] w-[70%] h-[40%] bg-[#d4af37]/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[60%] h-[30%] bg-[#d4af37]/5 blur-[80px] rounded-full"></div>

      {/* 顶部导航 */}
      <header className="relative z-50 px-4 h-14 flex items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-white/80 active:opacity-50 transition-opacity">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </header>

      {/* 海报主体内容 */}
      <div className="relative z-10 flex-1 flex flex-col items-center pt-10 px-8 text-center">
        
        {/* 标题区 - 续费宝并增强金色效果 */}
        <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-1000">
          <h1 className="text-7xl font-black tracking-[0.25em] bg-gradient-to-b from-[#f5e6ab] via-[#d4af37] to-[#b08e4f] bg-clip-text text-transparent drop-shadow-[0_4px_10px_rgba(212,175,55,0.4)]">
            续费宝
          </h1>
          <div className="space-y-4">
            <p className="text-2xl font-bold text-white tracking-wide">提前存入，缴费期自动缴费</p>
            <div className="flex items-center justify-center space-x-4 py-2">
              <div className="flex flex-col items-center space-y-1.5">
                <span className="text-[#d4af37] text-[15px] font-black tracking-[0.1em]">提前规划</span>
                <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              </div>
              <div className="w-[1px] h-5 bg-white/10"></div>
              <div className="flex flex-col items-center space-y-1.5">
                <span className="text-[#d4af37] text-[15px] font-black tracking-[0.1em]">自动缴费</span>
                <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              </div>
              <div className="w-[1px] h-5 bg-white/10"></div>
              <div className="flex flex-col items-center space-y-1.5">
                <span className="text-[#d4af37] text-[15px] font-black tracking-[0.1em]">灵活增值</span>
                <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 丰富后的发光时间轴进度条 */}
        <div className="w-full mt-24 mb-12 relative h-52 animate-in fade-in zoom-in duration-1000 delay-300">
          {/* 背景斜向板装饰 */}
          <div className="absolute top-[40%] left-[-20%] w-[140%] h-[120px] bg-gradient-to-r from-[#d4af37]/5 via-[#d4af37]/15 to-transparent -rotate-[12deg] rounded-full blur-xl"></div>
          
          {/* 时间轴主线 */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -rotate-[12deg] overflow-hidden">
            {/* 流动光效 */}
            <div className="absolute top-0 left-[-50%] w-[50%] h-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent animate-[flow_3s_linear_infinite]"></div>
          </div>
          
          <style>{`
            @keyframes flow {
              0% { left: -50%; }
              100% { left: 150%; }
            }
          `}</style>

          {/* 节点 1: 存入 */}
          <TimelineNode 
            pos="top-[28%] left-[15%]" 
            label="资金存入" 
            sub="灵活划转" 
            icon={<ShieldCheck className="w-3.5 h-3.5 text-[#001838]" />}
          />

          {/* 节点 2: 增值 (核心位置) */}
          <TimelineNode 
            pos="top-[45%] left-[50%]" 
            label="稳步增值" 
            sub="收益日结" 
            active
            icon={<TrendingUp className="w-4 h-4 text-[#001838]" />}
          />

          {/* 节点 3: 续费 */}
          <TimelineNode 
            pos="top-[62%] left-[85%]" 
            label="自动续费" 
            sub="保障延续" 
            icon={<Sparkles className="w-3.5 h-3.5 text-[#001838]" />}
          />
          
          {/* 金属质感装饰带 */}
          <div className="absolute bottom-[-100px] left-[-20%] w-[140%] h-[260px] bg-gradient-to-tr from-[#d1d5db]/10 via-[#f3f4f6]/20 to-transparent -rotate-[22deg] -z-10 blur-[2px] border-t border-white/20"></div>
        </div>

        {/* 收益对比/优势展示 */}
        <div className="grid grid-cols-2 gap-5 w-full mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-[#d4af37]/20 flex flex-col items-start space-y-1.5">
            <span className="text-[12px] text-[#d4af37] font-bold tracking-wider">活期便利</span>
            <span className="text-xl font-black text-white">随存随用</span>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-[#d4af37]/20 flex flex-col items-start space-y-1.5">
            <span className="text-[12px] text-[#d4af37] font-bold tracking-wider">智能代缴</span>
            <span className="text-xl font-black text-white">0手续费</span>
          </div>
        </div>

        {/* 风险提示区 */}
        <div className="mt-auto pb-48 text-left animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <h3 className="text-base font-black text-[#d4af37] mb-3 flex items-center">
            <Info className="w-4.5 h-4.5 mr-2" />
            风险提示:
          </h3>
          <div className="text-[12px] text-white/40 leading-relaxed font-medium text-justify space-y-2 border-l-2 border-[#d4af37]/20 pl-4">
            <p>本页面所示“续费宝”为保险保费资金规划与管理服务，并非独立金融产品或基金名称。</p>
            <p>客户资金将根据授权申购与保险缴费币种一致的货币基金，用于未来保费缴付安排。货币基金不等同于存款，存在市场波动及投资风险。</p>
            <p>过往业绩不代表未来表现，亦不保证收益或本金安全。具体安排以相关产品条款为准，投资前请仔细阅读。</p>
          </div>
        </div>
      </div>

      {/* 底部操作栏 - 增强金色视觉，双按钮并排 */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 pb-12 z-50 bg-gradient-to-t from-[#001838] via-[#001838]/95 to-transparent flex space-x-4">
        <button 
          onClick={() => window.location.href = 'https://dc-hk.molifund.com/#/fund/fund/fundDetail?fund_code=HK0000499811'}
          className="flex-1 bg-white/5 backdrop-blur-md text-white border border-[#d4af37]/40 py-5 rounded-2xl font-black text-lg active:bg-white/10 transition-all"
        >
          了解详情
        </button>
        <button className="flex-[2] relative group overflow-hidden bg-gradient-to-b from-[#f5e6ab] via-[#d4af37] to-[#b08e4f] text-[#001838] py-5 rounded-2xl font-black text-lg shadow-[0_10px_40px_rgba(212,175,55,0.3)] active:scale-[0.98] transition-all">
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-active:translate-x-[100%] transition-transform duration-500"></div>
          立即开启续费宝
        </button>
      </div>
    </div>
  );
};

// 进度条节点组件
const TimelineNode: React.FC<{ pos: string, label: string, sub: string, active?: boolean, icon: React.ReactNode }> = ({ pos, label, sub, active, icon }) => (
  <div className={`absolute ${pos} flex flex-col items-center -rotate-[12deg] z-20`}>
    <div className={`
      relative rounded-full flex items-center justify-center transition-all duration-700
      ${active ? 'w-10 h-10 bg-white scale-125 shadow-[0_0_25px_rgba(212,175,55,1)]' : 'w-8 h-8 bg-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)]'}
      border-2 border-white/50
    `}>
      {icon}
      {/* 涟漪效果 */}
      {active && <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20"></div>}
    </div>
    <div className="mt-4 flex flex-col items-center">
      <span className={`text-[13px] font-black tracking-tighter ${active ? 'text-white' : 'text-white/60'}`}>{label}</span>
      <span className="text-[10px] text-[#d4af37] font-bold opacity-80 mt-1 uppercase tracking-tight">{sub}</span>
    </div>
  </div>
);

export default XufeibaoPoster;
