
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MoreHorizontal } from 'lucide-react';

const InsuranceMall: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('全部');
  const [activeTag, setActiveTag] = useState('');

  // 1. 按照要求修改标签顺序
  const categories = ['全部', '储蓄险', '年金险', '医疗险', '重疾险'];
  const tags = ['为孩子', '为自己', '为服务', '全家保障'];

  // 2. 按照截图还原产品信息
  const products = [
    {
      id: 1,
      title: "环宇盈活储蓄保险计划",
      company: "友邦保险",
      type: "储蓄险",
      typeColor: "text-orange-400 bg-orange-50",
      featureTag: "长期回报",
      featureColor: "text-blue-500 bg-blue-50",
      desc: "更早回本及更高回报 灵活提取，货币转换",
      footerText: "支持顾问 1对1咨询",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=200&h=200&auto=format&fit=crop",
      clickable: true
    },
    {
      id: 2,
      title: "享悦即享年金保险",
      company: "永明保险",
      type: "年金险",
      typeColor: "text-blue-400 bg-blue-50",
      featureTag: "终身保障",
      featureColor: "text-emerald-500 bg-emerald-50",
      desc: "终身保证每月年金款项 自选附加保障",
      footerText: "支持危疾保障",
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=200&h=200&auto=format&fit=crop",
      clickable: false
    },
    {
      id: 3,
      title: "臻尚环球医疗保障-精选",
      company: "安盛保险",
      type: "医疗险",
      typeColor: "text-purple-400 bg-purple-50",
      featureTag: "覆盖全面",
      featureColor: "text-orange-500 bg-orange-50",
      desc: "多地区、多级别、多自付额选择",
      footerText: "提供协助，涵盖多范畴",
      image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=200&h=200&auto=format&fit=crop",
      clickable: false
    },
    {
      id: 4,
      title: "诚保一生危疾保",
      company: "保诚保险",
      type: "重疾险",
      typeColor: "text-red-400 bg-red-50",
      featureTag: "多种疾病",
      featureColor: "text-indigo-500 bg-indigo-50",
      desc: "覆盖病况多",
      footerText: "终身保障",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=200&h=200&auto=format&fit=crop",
      clickable: false
    }
  ];

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-full bg-[#f8fafc] isolate">
      {/* 头部还原截图样式 */}
      <header className="h-14 flex items-center bg-white sticky top-0 z-[999] px-4 border-b border-gray-50">
        <button onClick={handleBack} className="p-1">
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </button>
        <div className="flex-1 text-center">
          <h1 className="text-lg font-bold text-gray-800">保险商城</h1>
        </div>
        <div className="flex space-x-1.5 items-center">
           <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
           <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
           <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
        </div>
      </header>

      {/* 3. 主分类切换 (可滑动) */}
      <div className="bg-white overflow-x-auto hide-scrollbar touch-pan-x">
        <div className="px-4 py-3 flex space-x-3 items-center min-w-max">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 4. 副标签 (可滑动) */}
      <div className="overflow-x-auto hide-scrollbar touch-pan-x">
        <div className="px-4 py-4 flex space-x-3 items-center min-w-max">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? '' : tag)}
              className={`px-5 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                activeTag === tag 
                  ? 'bg-gray-200 text-gray-800' 
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 5. 产品列表 */}
      <div className="px-4 space-y-4 pb-10">
        {products.map(product => (
          <div 
            key={product.id} 
            onClick={() => product.clickable && navigate('/product-detail')}
            className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50 flex flex-col transition-transform ${product.clickable ? 'active:scale-[0.98] cursor-pointer' : 'opacity-90'}`}
          >
            <div className="p-4 flex">
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-start">
                  <div className="space-y-0.5">
                    <h3 className="text-[16px] font-bold text-gray-900 leading-tight">{product.title}</h3>
                    <p className="text-sm text-gray-400 font-medium">{product.company}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${product.typeColor}`}>
                    {product.type}
                  </span>
                </div>
                <div className="mt-2 flex items-center space-x-2">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${product.featureColor}`}>
                    {product.featureTag}
                  </span>
                  <p className="text-[12px] text-gray-500 line-clamp-2 flex-1 font-medium leading-relaxed">{product.desc}</p>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 flex items-center justify-between border-t border-gray-50/50">
              <span className="text-xs text-gray-400 font-medium">{product.footerText}</span>
              <button className="bg-blue-600 text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-100 active:bg-blue-700 transition-colors">
                了解详情
              </button>
            </div>
          </div>
        ))}
        
        {/* 页脚提示 */}
        <div className="pt-6 pb-4 text-center space-y-2">
           <p className="text-[11px] text-gray-300">以上信息仅供参考，不构成任何投资或投保建议</p>
           <p className="text-[11px] text-gray-300">投保前请与持牌顾问充分沟通</p>
           <p className="text-[11px] text-gray-300">具体保障内容以保险合同条款为准</p>
        </div>
      </div>
    </div>
  );
};

export default InsuranceMall;
