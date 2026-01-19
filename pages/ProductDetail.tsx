
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Share2, 
  ChevronDown, 
  AlertTriangle,
  Info,
  UserPlus,
  LayoutGrid,
  PenLine,
  Network,
  ChevronRight,
  FileText,
  UserCheck,
  CheckCircle2
} from 'lucide-react';

const ProductDetail: React.FC = () => {
  const navigate = useNavigate();
  const [cashValueOpen, setCashValueOpen] = useState(true);

  // 显式返回保险商城
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/insurance-mall');
  };

  return (
    <div className="flex flex-col min-h-full bg-[#f8fafc] pb-32 isolate">
      {/* 头部导航栏 */}
      <header className="h-14 flex items-center bg-white sticky top-0 z-[999] border-b border-gray-100 shadow-sm px-0">
        <button 
          onClick={handleBack}
          type="button"
          className="w-20 h-full flex items-center justify-center cursor-pointer active:bg-gray-100 transition-colors z-[1000]"
        >
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </button>
        <div className="flex-1 flex justify-center items-center">
          <h1 className="text-base font-bold text-gray-900">产品详情</h1>
        </div>
        <div className="w-20 h-full flex items-center justify-center">
          <button className="p-2 text-gray-600 active:scale-90 transition-all">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="flex-1 space-y-4 px-4 pt-6">
        {/* 1. 标题与核心信息 */}
        <div className="space-y-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">XX 财富传承寿险计划</h2>
          <div className="space-y-3">
            <InfoRow label="承保公司" value="XX 人寿保险有限公司（香港）" />
            <InfoRow label="产品类型" value="终身寿险（财富传承型）" />
            <InfoRow label="产品定位" value="长期资产规划与财富传承" />
            <InfoRow label="货币类型" value="港币（HKD）" />
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <Tag text="长期规划" />
            <Tag text="资产传承" />
            <Tag text="可指定受益人" />
          </div>
        </div>

        {/* 2. 产品结构摘要 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
          <h3 className="text-base font-bold text-gray-900 mb-5">产品结构摘要</h3>
          <div className="space-y-4">
            <InfoRow label="投入方式" value="一次性或定期缴费" />
            <InfoRow label="缴费年期" value="5 年 / 10 年可选" />
            <InfoRow label="保障期间" value="终身" />
            <InfoRow label="保证利益" value="是" />
            <InfoRow label="非保证利益" value="是（如分红）" />
          </div>
        </div>

        {/* 3. 中间快速操作栏 (截图中的蓝色/白框按钮组合) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 space-y-4">
          <p className="text-xs text-gray-400 leading-relaxed text-center px-4">
            本产品涉及长期规划与传承安排，建议由专业保险顾问协助说明与规划。
          </p>
          <div className="flex space-x-3">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-100 active:scale-95 transition-all">
              咨询顾问
            </button>
            <button 
              onClick={() => navigate('/reservation')}
              className="flex-1 bg-white text-blue-600 border border-blue-600 py-3 rounded-xl font-bold text-sm active:bg-blue-50 transition-all"
            >
              预约投保
            </button>
          </div>
        </div>

        {/* 4. 现金价值与权益说明 (折叠面板) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
          <button 
            onClick={() => setCashValueOpen(!cashValueOpen)}
            className="w-full px-6 py-5 flex items-center justify-between"
          >
            <h3 className="text-base font-bold text-gray-900">现金价值与权益说明</h3>
            <ChevronDown className={`w-5 h-5 text-gray-300 transition-transform ${cashValueOpen ? 'rotate-180' : ''}`} />
          </button>
          {cashValueOpen && (
            <div className="px-6 pb-6 space-y-3 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
              <p>保证现金价值：按合同约定逐年累积</p>
              <p>非保证红利：视保险公司经营表现而定</p>
              <p>保单红利不承诺，可能为零</p>
              <p>现金价值用于退保、贷款或减保</p>
            </div>
          )}
        </div>

        {/* 5. 提取、减保与流动性规则 (截图补全) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
          <h3 className="text-base font-bold text-gray-900 mb-5">提取、减保与流动性规则</h3>
          <div className="space-y-3 pl-4">
            <BulletItem text="提前退保可能低于已缴保费" />
            <BulletItem text="减保或提取需符合合同约定" />
            <BulletItem text="操作后可能影响保障及非保证利益" />
          </div>
        </div>

        {/* 6. 传承与受益人安排 (含示例图表) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 space-y-6">
          <h3 className="text-base font-bold text-gray-900">传承与受益人安排</h3>
          <div className="space-y-4">
            <IconListItem icon={<UserPlus className="w-4 h-4" />} text="可指定一名或多名受益人" />
            <IconListItem icon={<LayoutGrid className="w-4 h-4" />} text="支持受益比例及顺位安排" />
            <IconListItem icon={<PenLine className="w-4 h-4" />} text="受益人安排可按规则变更" />
            <IconListItem icon={<Network className="w-4 h-4" />} text="是否支持信托安排以保险公司规则为准" />
          </div>

          {/* 受益人安排示例 (图表部分) */}
          <div className="mt-8 space-y-4">
            <h4 className="text-sm font-bold text-gray-900">受益人安排示例</h4>
            <div className="bg-gray-50/80 rounded-2xl p-6 space-y-4">
              <div className="flex justify-center">
                <div className="bg-white px-6 py-2 rounded-lg border border-gray-100 shadow-sm text-xs font-bold text-gray-700">
                  主要受益人（100%）
                </div>
              </div>
              <div className="flex justify-between space-x-4">
                <div className="flex-1 bg-white py-2 rounded-lg border border-gray-100 shadow-sm text-xs font-bold text-center text-gray-700">
                  第一顺位（50%）
                </div>
                <div className="flex-1 bg-white py-2 rounded-lg border border-gray-100 shadow-sm text-xs font-bold text-center text-gray-700">
                  第二顺位（50%）
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7. 风险与不确定性提示 (黄色卡片) */}
        <div className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100 space-y-4">
          <div className="flex items-center space-x-2 text-orange-600 mb-2">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-bold">风险与不确定性提示</span>
          </div>
          <div className="space-y-3">
            <RiskItem text="非保证利益存在不确定性" />
            <RiskItem text="长期持有更适合本产品设计" />
            <RiskItem text="提前退保可能产生经济损失" />
            <RiskItem text="如涉及外币，存在汇率风险" />
          </div>
        </div>

        {/* 8. 投保要点 (补全表格) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
          <h3 className="text-base font-bold text-gray-900 mb-5">投保要点</h3>
          <div className="space-y-4">
            <InfoRow label="投保年龄" value="出生满 15 天至 70 岁" />
            <InfoRow label="保障期间" value="终身" />
            <InfoRow label="健康告知" value="是" />
            <InfoRow label="保单贷款" value="是" />
            <InfoRow label="多币种转换" value="否" />
          </div>
        </div>

        {/* 9. 产品资料 (补全下载列表) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
          <h3 className="text-base font-bold text-gray-900 mb-4">产品资料</h3>
          <div className="divide-y divide-gray-50">
            <MaterialLink title="保险条款（PDF）" />
            <MaterialLink title="产品说明书" />
            <MaterialLink title="分红机制说明" />
            <MaterialLink title="常见问题" />
          </div>
        </div>

        {/* Final Disclaimer */}
        <p className="text-[10px] text-gray-300 text-center px-10 leading-relaxed py-8 pb-10">
          本页面仅为保险产品信息展示，不构成任何投资或收益承诺。具体权利义务及产品条款以正式保险合同为准。
        </p>
      </div>

      {/* 底部悬浮按钮 (截图风格) */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 p-4 pb-6 flex space-x-4 z-[100] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-100 active:bg-blue-700 transition-colors">
          咨询顾问
        </button>
        <button 
          onClick={() => navigate('/reservation')}
          className="flex-1 bg-white text-blue-600 border border-blue-600 py-4 rounded-xl font-bold text-base active:bg-blue-50 transition-all"
        >
          预约投保
        </button>
      </div>
    </div>
  );
};

// --- 子组件 ---

const InfoRow: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-start text-sm">
    <span className="text-gray-400 font-medium shrink-0">{label}</span>
    <span className="text-gray-900 font-bold text-right ml-4 leading-tight">{value}</span>
  </div>
);

const Tag: React.FC<{ text: string }> = ({ text }) => (
  <span className="px-3 py-1.5 bg-gray-50 text-gray-400 text-[11px] font-bold rounded-lg border border-gray-100">
    {text}
  </span>
);

const BulletItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center space-x-3 text-sm text-gray-600">
    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
    <span>{text}</span>
  </div>
);

const IconListItem: React.FC<{ icon: React.ReactNode, text: string }> = ({ icon, text }) => (
  <div className="flex items-center space-x-3 text-sm text-gray-700">
    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <span className="font-medium">{text}</span>
  </div>
);

const RiskItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center space-x-3 text-sm text-gray-700 font-medium">
    <div className="p-0.5 rounded-full border border-orange-200">
      <div className="w-3 h-3 bg-orange-500 rounded-full flex items-center justify-center">
        <span className="text-[8px] text-white">i</span>
      </div>
    </div>
    <span>{text}</span>
  </div>
);

const MaterialLink: React.FC<{ title: string }> = ({ title }) => (
  <div className="py-4 flex items-center justify-between group active:bg-gray-50 transition-colors cursor-pointer">
    <span className="text-sm font-medium text-gray-700">{title}</span>
    <ChevronRight className="w-4 h-4 text-gray-300" />
  </div>
);

export default ProductDetail;
