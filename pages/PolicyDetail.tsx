
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Lightbulb,
  FileText,
  ChevronDown,
  Phone,
  Layout
} from 'lucide-react';

const PolicyDetail: React.FC = () => {
  const navigate = useNavigate();
  const [activeMainTab, setActiveMainTab] = useState('客户信息');
  const [customerType, setCustomerType] = useState('投保人');

  const mainTabs = ['客户信息', '保障信息', '交费信息', '服务信息'];

  return (
    <div className="flex flex-col min-h-full bg-[#f8fafc] pb-10">
      {/* 1. Header */}
      <header className="px-4 h-14 flex items-center justify-between bg-white sticky top-0 z-[60] border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-800 active:opacity-60">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold text-gray-800">保单详情</h1>
        <div className="flex space-x-1 items-center p-2 cursor-pointer">
           <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
           <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
           <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar space-y-4 pt-4 px-4 pb-12">
        
        {/* 2. 主概要卡片 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 space-y-4">
          <div className="space-y-3">
            <h2 className="text-[17px] font-bold text-gray-900 leading-snug">
              环球守护高端医疗保险计划 Global Guardian Premium Medical Insurance Plan
            </h2>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase">
                有效
              </span>
              <span className="text-[10px] text-gray-400 font-medium">保障中</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-3.5 pt-4 border-t border-gray-50">
            <InfoRow label="保单编号 (Policy No.)" value="PL202305128765" />
            <InfoRow label="保单生效日期 (Policy Issue Date)" value="2023-05-15" />
            <InfoRow label="保单币种" value="USD" />
          </div>
        </div>

        {/* 3. 锚点导航页签 */}
        <div className="flex justify-between items-center px-2 py-1 sticky top-14 bg-[#f8fafc] z-50">
           {mainTabs.map((tab) => (
             <button 
               key={tab} 
               onClick={() => setActiveMainTab(tab)}
               className={`text-xs font-bold py-2 transition-colors ${activeMainTab === tab ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'}`}
             >
               {tab}
             </button>
           ))}
        </div>

        {/* 4. 客户信息板块 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50">
          <div className="p-5 flex items-center justify-between border-b border-gray-50">
            <h3 className="font-bold text-gray-900 text-[15px]">客户信息</h3>
            <div className="flex space-x-4">
              {['投保人', '被保险人', '受益人'].map(type => (
                <button 
                  key={type}
                  onClick={() => setCustomerType(type)}
                  className={`text-xs font-bold transition-all ${customerType === type ? 'text-orange-500' : 'text-gray-400'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 space-y-4">
            <InfoRow label="姓名" value="张明" />
            <InfoRow label="性别" value="男" />
            <InfoRow label="证件类型" value="居民身份证" />
            <InfoRow label="证件号码" value="110********1234" />
            <InfoRow label="出生日期" value="1985-03-15" />
            <InfoRow label="联系方式" value="138****5678" />
            <InfoRow label="Email" value="zhang.ming@example.com" />
            <InfoRow label="通讯地址" value="北京市朝阳区建国路88号" />
          </div>
        </div>

        {/* 5. 保障信息板块 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50">
          <div className="p-5 border-b border-gray-50">
            <h3 className="font-bold text-gray-900 text-[15px]">保障信息</h3>
          </div>
          <div className="p-5 space-y-4">
            <InfoRow label="产品名称" value="环球守护高端医疗保险计划" />
            <div className="flex justify-between items-center text-sm">
               <span className="text-gray-400 font-medium shrink-0">保单状态</span>
               <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[9px] font-bold">有效</span>
            </div>
            <InfoRow label="生效日期" value="2023-05-15" />
            <InfoRow label="到期日期" value="终身" />
            <InfoRow label="基本保额" value="USD 5,000,000" />
            
            <div className="pt-4 border-t border-gray-50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400 font-medium">附加保障</span>
                <ChevronDown className="w-4 h-4 text-gray-300" />
              </div>
              <div className="space-y-2">
                <AddonRow label="紧急救援服务" status="已包含" />
                <AddonRow label="牙科护理保障" status="已包含" />
                <AddonRow label="体检福利" status="已包含" />
                <AddonRow label="疫苗接种保障" status="未包含" statusColor="text-gray-300" />
              </div>
              <button className="w-full flex items-center justify-center space-x-1.5 py-2 text-blue-500 text-xs font-bold active:bg-blue-50">
                <FileText className="w-3.5 h-3.5" />
                <span>查看条款详情</span>
              </button>
            </div>
          </div>
        </div>

        {/* 6. 交费信息板块 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50">
          <div className="p-5 border-b border-gray-50">
            <h3 className="font-bold text-gray-900 text-[15px]">交费信息</h3>
          </div>
          <div className="p-5 space-y-4">
            <InfoRow label="交费年期" value="20 年" />
            <InfoRow label="每期保费" value="USD 2,500.00" />
            <InfoRow label="缴费频率" value="年缴" />
            <InfoRow label="下次交费日期" value="2024-05-15" />
            <div className="flex justify-between items-center text-sm">
               <span className="text-gray-400 font-medium shrink-0">当前缴费状态</span>
               <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[9px] font-bold uppercase">已缴清</span>
            </div>
            <InfoRow label="缴费账户" value="中国银行(香港) ****1234" />
            
            <button className="w-full mt-2 py-3 bg-gray-50 text-gray-600 text-xs font-bold rounded-xl active:bg-gray-100 border border-gray-100/50">
               交费历史
            </button>
          </div>
        </div>

        {/* 7. 推荐资金管理方案 (蓝色卡片 - 严格复刻截图样式) */}
        <div className="bg-[#eff6ff] rounded-2xl p-5 border border-blue-100 space-y-4">
          <div className="flex items-center space-x-2">
             <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <Lightbulb className="w-3.5 h-3.5 text-white" />
             </div>
             <h4 className="text-xs font-bold text-blue-800">推荐资金管理方案</h4>
          </div>
          <div className="space-y-3">
             <p className="text-[13px] font-bold text-gray-800 leading-tight">易方达（香港）美元货币市场基金 C-USD 累积</p>
             <div className="flex items-end justify-between">
                <div>
                   <p className="text-2xl font-black text-[#10b981] leading-none">+8.13%</p>
                   <p className="text-[10px] text-gray-400 mt-1.5 font-medium">近7日年化收益率</p>
                </div>
                <div className="text-right">
                   <span className="text-[9px] text-gray-400 font-bold px-1.5 py-0.5 border border-gray-200 rounded">中低风险</span>
                </div>
             </div>
             <p className="text-[10px] text-gray-400 pt-1 leading-relaxed">
               为您匹配的同币种货币基金，资金灵活使用，到缴费期将自动用于缴付保单。资金灵活使用，省心又有潜在收益。
             </p>
             <div className="flex space-x-3 pt-2">
                <button className="flex-1 bg-orange-500 text-white py-3 rounded-xl text-xs font-bold shadow-lg shadow-orange-100 active:scale-95 transition-transform">
                  一键买入
                </button>
                <button className="flex-1 bg-white text-gray-600 py-3 rounded-xl text-xs font-bold border border-gray-100 active:bg-gray-50">
                  了解详情
                </button>
             </div>
             <p className="text-[9px] text-gray-300 text-center pt-1 font-medium italic">基金服务由XX提供，不构成投资建议</p>
          </div>
        </div>

        {/* 8. 服务信息板块 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50">
          <div className="p-5 border-b border-gray-50">
            <h3 className="font-bold text-gray-900 text-[15px]">服务信息</h3>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400 font-medium">服务专线</span>
              <div className="flex items-center space-x-1.5 text-blue-600 font-bold">
                 <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 fill-current" />
                 </div>
                 <span className="text-sm">400-888-9999</span>
              </div>
            </div>
            <InfoRow label="服务时间" value="周一至周日 9:00-18:00" />
            <InfoRow label="服务人员" value="王顾问" />
            <InfoRow label="所属保险经纪公司" value="香港环球保险经纪有限公司" />
            <InfoRow label="销售渠道" value="保险经纪" />
            <div className="flex justify-between items-center pt-3 border-t border-gray-50">
              <span className="text-sm text-gray-400 font-medium">客户经理联系方式</span>
              <div className="flex items-center space-x-1.5 text-blue-600 font-bold">
                 <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 fill-current" />
                 </div>
                 <span className="text-sm">139****8888</span>
              </div>
            </div>
          </div>
        </div>

        {/* 9. Footer Info */}
        <div className="pt-8 pb-12 text-center space-y-4">
           <div className="flex justify-center space-x-6 text-[11px] text-gray-400 font-bold">
             <span>香港持牌保险经纪</span>
             <span>声明</span>
             <span>风险提示</span>
             <span>关于我们</span>
           </div>
           <p className="text-[9px] text-gray-300 tracking-wider">© 2026 保险服务平台 版权所有</p>
        </div>
      </div>
    </div>
  );
};

// 内部原子组件
const InfoRow: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-start text-sm">
    <span className="text-gray-400 font-medium shrink-0 leading-tight">{label}</span>
    <span className="text-gray-900 font-bold tracking-tight text-right ml-4 leading-tight">{value}</span>
  </div>
);

const AddonRow: React.FC<{ label: string, status: string, statusColor?: string }> = ({ label, status, statusColor = "text-gray-400" }) => (
  <div className="flex justify-between items-center py-2.5 text-xs border-b border-gray-50 last:border-0">
    <span className="text-gray-600 font-medium">{label}</span>
    <span className={`font-bold ${statusColor}`}>{status}</span>
  </div>
);

export default PolicyDetail;
