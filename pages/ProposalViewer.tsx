
import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Share2, Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Printer } from 'lucide-react';

const ProposalViewer: React.FC = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const scrollRef = useRef<HTMLDivElement>(null);

  const isFwd = type === 'fwd-medical';
  const totalPages = isFwd ? 12 : 14;

  useEffect(() => {
    // 页面加载时自动滚动到顶部
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [type]);

  return (
    <div className="flex flex-col h-full bg-[#525659] overflow-hidden select-none">
      {/* 1. PDF 仿真工具栏 */}
      <header className="h-12 flex items-center justify-between bg-[#323639] px-3 shadow-2xl z-50 shrink-0 border-b border-black/20">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="p-1.5 text-white/90 active:scale-90 transition-transform">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="ml-2 flex flex-col">
            <span className="text-[11px] font-bold text-white/90 truncate max-w-[140px]">
              {isFwd ? 'BraveHealth_VVIP_Proposal.pdf' : 'AIA_GlobalWealth_VIP.pdf'}
            </span>
            <span className="text-[9px] text-white/40 leading-none">PDF • 1.2 MB</span>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-white/70">
          <div className="hidden sm:flex items-center space-x-2 bg-black/20 px-2 py-1 rounded">
             <ZoomOut className="w-4 h-4" />
             <span className="text-[10px] font-bold w-8 text-center">100%</span>
             <ZoomIn className="w-4 h-4" />
          </div>
          <button className="p-1 active:opacity-50"><Download className="w-4 h-4" /></button>
          <button className="p-1 active:opacity-50"><Printer className="w-4 h-4" /></button>
          <button className="p-1 active:opacity-50"><Share2 className="w-4 h-4" /></button>
        </div>
      </header>

      {/* 2. PDF 内容滚动区域 */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar bg-[#525659] relative"
      >
        {/* 第一页 */}
        <div className="bg-white w-full shadow-[0_8px_30px_rgb(0,0,0,0.3)] relative min-h-[600px] flex flex-col mx-auto max-w-2xl transform-gpu">
          {isFwd ? <FwdPage1 /> : <AiaPage1 />}
          
          {/* 页码标记 */}
          <div className="mt-auto p-5 flex justify-between items-center text-[9px] text-gray-400 font-mono border-t border-gray-50/50">
            <span>{isFwd ? 'S-S-0-NA | 0000102A' : '5LPRJR5'}</span>
            <span className="bg-gray-100 px-2 py-0.5 rounded italic">第 1 页</span>
            <span>[7.7]</span>
          </div>
        </div>

        {/* 模拟多页效果的占位页 */}
        {[...Array(totalPages - 1)].map((_, i) => (
          <div key={i} className="bg-white w-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] relative min-h-[600px] flex flex-col mx-auto max-w-2xl opacity-90">
             <div className="flex-1 flex items-center justify-center p-10">
                <div className="w-full h-full border-2 border-dashed border-gray-100 rounded-2xl flex flex-col items-center justify-center space-y-3">
                   <div className="w-12 h-1 bg-gray-100 rounded-full"></div>
                   <div className="w-24 h-1 bg-gray-50 rounded-full"></div>
                   <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest pt-4">Page {i + 2} Content Preview</span>
                </div>
             </div>
             <div className="mt-auto p-5 flex justify-between items-center text-[9px] text-gray-400 font-mono">
                <span>{isFwd ? 'S-S-0-NA' : '5LPRJR5'}</span>
                <span className="bg-gray-50 px-2 py-0.5 rounded italic">第 {i + 2} 页</span>
                <span>[7.7]</span>
             </div>
          </div>
        ))}

        <div className="py-12 text-center">
           <p className="text-white/20 text-[10px] font-black tracking-[0.3em] uppercase">Document End</p>
        </div>
      </div>

      {/* 3. 底部导航栏 */}
      <div className="h-10 bg-[#323639] flex items-center justify-between px-6 text-white/60 border-t border-black/10 shrink-0">
         <button className="flex items-center space-x-1 opacity-40 text-[11px] font-bold"><ChevronLeft className="w-4 h-4" /><span>上一页</span></button>
         <div className="bg-black/40 px-3 py-1 rounded-full flex items-center space-x-2">
            <input type="text" readOnly value="1" className="bg-transparent w-4 text-center text-[11px] font-bold text-white outline-none" />
            <span className="text-[10px] text-white/30">/</span>
            <span className="text-[11px] font-bold text-white/30">{totalPages}</span>
         </div>
         <button className="flex items-center space-x-1 active:text-white transition-colors text-[11px] font-bold"><span>下一页</span><ChevronRight className="w-4 h-4" /></button>
      </div>
    </div>
  );
};

// --- FWD (富卫) 建议书内容还原 ---
const FwdPage1: React.FC = () => (
  <div className="p-8 flex flex-col h-full font-sans text-[#333] relative">
    {/* 右上角 Logo */}
    <div className="flex justify-end mb-10">
      <div className="text-right flex flex-col items-end">
        <div className="text-3xl font-black italic tracking-tighter text-black flex items-baseline">
          FWD <span className="w-1.5 h-1.5 bg-[#ff7b1c] rounded-full ml-1"></span>
        </div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">insurance</p>
      </div>
    </div>

    <div className="space-y-6">
      <div className="space-y-1.5 border-b border-gray-100 pb-3">
        <p className="text-[11px] font-bold text-gray-800">富衛人壽保險（百慕達）有限公司（於百慕達註冊成立之有限責任公司）（「本公司」）</p>
      </div>

      <div className="grid grid-cols-2 gap-y-3.5 text-[11px] font-medium pt-2">
        <div className="flex justify-between border-b border-gray-50 pb-1 mr-4">
          <span className="text-gray-400">受保人姓名:</span>
          <span className="font-bold text-gray-900">VVIP</span>
        </div>
        <div className="flex justify-between border-b border-gray-50 pb-1">
          <span className="text-gray-400">性别:</span>
          <span className="font-bold text-gray-900">男</span>
        </div>
        <div className="flex justify-between border-b border-gray-50 pb-1 mr-4">
          <span className="text-gray-400">下次生日年龄:</span>
          <span className="font-bold text-gray-900">37</span>
        </div>
        <div className="flex justify-between border-b border-gray-50 pb-1">
          <span className="text-gray-400">承保级别:</span>
          <span className="font-bold text-gray-900">优惠级别</span>
        </div>
        <div className="flex justify-between border-b border-gray-50 pb-1 mr-4">
          <span className="text-gray-400">保单名称:</span>
          <span className="font-bold text-gray-900">倍衛您醫療計劃</span>
        </div>
        <div className="flex justify-between border-b border-gray-50 pb-1">
          <span className="text-gray-400">保单货币:</span>
          <span className="font-bold text-gray-900">港元</span>
        </div>
      </div>

      <div className="mt-8">
        <table className="w-full text-[10px] border-t-2 border-black">
          <thead className="text-gray-500 font-bold">
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 w-[45%]">保障項目</th>
              <th className="text-center py-4">投保時保險金額/<br/>保障金額</th>
              <th className="text-right py-4">投保時每年保費</th>
              <th className="text-right py-4">保費供款年期</th>
            </tr>
          </thead>
          <tbody className="font-bold text-gray-900">
            <tr className="border-b border-gray-50">
              <td className="py-5 leading-relaxed">
                倍衛您醫療計劃^ (HVS7)<br/>
                <span className="text-gray-400 font-medium text-[9px]">(自付費 0 港元)</span><br/>
                <span className="text-gray-400 font-medium text-[9px]">受保人 / 男 / 37</span>
              </td>
              <td className="text-center py-5">--</td>
              <td className="text-right py-5">10,131.00</td>
              <td className="text-right py-5">64 年</td>
            </tr>
            <tr className="bg-gray-50/50">
              <td colSpan={2} className="py-4 pl-2 font-black text-gray-700">總額 (1) + (2):</td>
              <td className="text-right py-4 pr-1 text-base underline decoration-double decoration-gray-300">10,141.13</td>
              <td className="text-right py-4 pr-2"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-gray-50/80 p-5 rounded-xl border border-gray-100 space-y-3">
        <p className="text-[10px] font-black text-gray-800 border-l-2 border-[#ff7b1c] pl-2 uppercase tracking-wider">说明 / 註解:</p>
        <div className="text-[9px] leading-relaxed text-gray-500 text-justify space-y-1.5">
          <p>1. 此文件內所述之年齡均為受保人下次生日年齡...</p>
          <p>2. 本計劃屬於政府認可之自願醫保計劃中的靈活計劃 (編號: F00069-01-000-01)...</p>
          <p className="font-black text-gray-800 pt-2 border-t border-gray-200 mt-4 italic">
            本產品資料不包括本保單的條款及保障及受其所限。有關完整的條款、條件、保障及不保事項，請參閱保單條款。
          </p>
        </div>
      </div>
    </div>
  </div>
);

// --- AIA (友邦) 建议书内容还原 ---
const AiaPage1: React.FC = () => (
  <div className="p-8 flex flex-col h-full font-sans text-[#333]">
    {/* 顶部 AIA 红色装饰条 */}
    <div className="absolute top-0 right-0 w-8 h-8 bg-[#D31145] rounded-bl-[40px]"></div>
    
    <div className="flex items-center justify-between mb-12">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-[#D31145] rounded-full flex items-center justify-center shadow-lg">
           <span className="text-white font-black text-base italic">AIA</span>
        </div>
      </div>
      <div className="text-right">
        <h1 className="text-sm font-black text-gray-800 tracking-wider">分紅保單銷售說明文件</h1>
        <div className="h-0.5 w-12 bg-[#D31145] ml-auto mt-1"></div>
      </div>
    </div>

    <div className="space-y-6">
      <div className="text-[#D31145] border-l-4 border-[#D31145] pl-4 py-1">
        <h2 className="text-lg font-bold">友邦保險（國際）有限公司</h2>
        <h3 className="text-xl font-black mt-0.5 tracking-tight">計劃：環宇盈活儲蓄保險計劃（5年繳費）</h3>
      </div>

      <div className="bg-gray-50/50 border-2 border-gray-100 p-5 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 text-[10px] font-bold text-gray-200 opacity-20 rotate-45">IMPORTANT</div>
        <p className="text-[10px] font-black text-gray-800 mb-2 uppercase tracking-widest">重要事項：</p>
        <p className="text-[9px] leading-relaxed text-gray-500 text-justify">
          此文件僅概括說明保單下的預計退保價值金額及身故賠償總額，旨在顯示任何非保證金額的比重，並闡述在指定情景下非保證金額的變動的影響，而絕不影響保單內所訂明的條款及細則。
        </p>
      </div>

      <div className="grid grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div className="bg-white p-3 flex flex-col items-center justify-center">
          <span className="text-[8px] text-gray-400 font-bold mb-1">受保人姓名</span>
          <span className="text-[10px] font-black text-gray-800">VIP 先生</span>
        </div>
        <div className="bg-white p-3 flex flex-col items-center justify-center">
          <span className="text-[8px] text-gray-400 font-bold mb-1">投保時年龄</span>
          <span className="text-[10px] font-black text-gray-800">36</span>
        </div>
        <div className="bg-white p-3 flex flex-col items-center justify-center">
          <span className="text-[8px] text-gray-400 font-bold mb-1">性别</span>
          <span className="text-[10px] font-black text-gray-800">男</span>
        </div>
        <div className="bg-white p-3 flex flex-col items-center justify-center">
          <span className="text-[8px] text-gray-400 font-bold mb-1">吸煙狀況</span>
          <span className="text-[10px] font-black text-gray-800">非吸煙者</span>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h4 className="text-[11px] font-black text-gray-800 flex items-center">
          <span className="w-1 h-3 bg-[#D31145] mr-2"></span>
          (i) 基本保單
        </h4>
        <table className="w-full text-[9px] border-t border-gray-100">
          <thead className="bg-gray-50/50">
            <tr className="text-gray-400">
              <th className="p-3 text-left font-bold">保障項目</th>
              <th className="p-3 text-right font-bold">投保時基本金額(1)</th>
              <th className="p-3 text-right font-bold">投保時年繳保費</th>
              <th className="p-3 text-right font-bold">保障年期</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-50">
              <td className="p-3 font-black text-gray-700 leading-tight">
                環宇盈活儲蓄保險計劃<br/>
                <span className="font-medium text-gray-400">(5年繳費)</span>
              </td>
              <td className="p-3 text-right font-black">30,000</td>
              <td className="p-3 text-right font-black">3,000.00</td>
              <td className="p-3 text-right font-black">終身</td>
            </tr>
            <tr className="bg-gray-50/30">
              <td className="p-3 text-gray-400" colSpan={2}>保險監管局(IA)保費徵費:</td>
              <td className="p-3 text-right font-bold text-gray-500">3.00</td>
              <td></td>
            </tr>
            <tr className="bg-[#D31145]/5 font-black">
              <td className="p-3 text-gray-700" colSpan={2}>投保時年繳總保費：<br/><span className="text-[8px] font-medium text-gray-400">(已包括保費徵費)</span></td>
              <td className="p-3 text-right text-lg text-[#D31145] underline decoration-double underline-offset-4">3,003.00</td>
              <td className="p-3"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-[8px] leading-relaxed text-gray-400 italic text-justify bg-gray-50/30 p-4 rounded-lg">
        <p>此報價是特別為在香港投保的非香港及非澳門身份證持有人而設。</p>
        <p className="mt-2">備註：「我們」、「我們的」、「本公司」或「友邦」是指友邦保險（國際）有限公司（于百慕達註冊成立之有限公司）。</p>
      </div>
    </div>
  </div>
);

export default ProposalViewer;
