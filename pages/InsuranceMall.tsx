
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const InsuranceMall: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('全部');
  const [activeTag, setActiveTag] = useState('');

  const categories = ['全部', '重疾险', '医疗险', '储蓄险', '寿险', '年金险', '意外险'];
  const tags = ['为孩子投保', '成人保障', '家庭保障', '高端医疗'];

  const products = [
    {
      id: 1,
      title: "某某重疾保障计划",
      company: "XX人寿",
      type: "重疾险",
      typeColor: "text-orange-400 bg-orange-50",
      featureTag: "成人保障",
      featureColor: "text-blue-500 bg-blue-50",
      desc: "覆盖多种重大疾病，提供长期保障",
      footerText: "支持顾问 1对1咨询",
      btnText: "咨询顾问",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "百万医疗保险计划",
      company: "平安保险",
      type: "医疗险",
      typeColor: "text-blue-400 bg-blue-50",
      featureTag: "家庭保障",
      featureColor: "text-emerald-500 bg-emerald-50",
      desc: "高额医疗费用报销，住院门诊全覆盖",
      footerText: "0免赔额，100%报销",
      btnText: "了解详情",
      image: "https://images.unsplash.com/photo-1576091160550-2173dad99a01?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "稳健成长储蓄险",
      company: "泰康人寿",
      type: "储蓄险",
      typeColor: "text-purple-400 bg-purple-50",
      featureTag: "长期理财",
      featureColor: "text-amber-500 bg-amber-50",
      desc: "稳健增值，长期保障，财富传承",
      footerText: "保证利率3.5%，复利增值",
      btnText: "咨询顾问",
      image: "https://images.unsplash.com/photo-1579621970795-87f967f16c5a?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "综合意外保障计划",
      company: "太平洋保险",
      type: "意外险",
      typeColor: "text-red-400 bg-red-50",
      featureTag: "全民适用",
      featureColor: "text-indigo-500 bg-indigo-50",
      desc: "意外身故、伤残、医疗全方位保障",
      footerText: "含猝死保障，24小时生效",
      btnText: "了解详情",
      image: "https://images.unsplash.com/photo-1516733968668-dbdce39c46ef?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  // 显式返回：从商城返回必然是回到首页
  const handleBack = () => {
    navigate('/');
  };

  const handleProductClick = () => {
    navigate('/product-detail');
  };

  return (
    <div className="flex flex-col min-h-full bg-[#f8fafc] isolate">
      {/* 头部：显式返回逻辑和 3 栏布局 */}
      <header className="h-14 flex items-center bg-white sticky top-0 z-[999] border-b border-gray-50 shadow-sm px-0">
        <button 
          onClick={handleBack}
          className="w-20 h-full flex items-center justify-center cursor-pointer active:bg-gray-100 transition-colors z-[1000]"
        >
          <ArrowLeft className="w-6 h-6 text-gray-800" />
          <span className="text-sm font-bold ml-1 text-gray-800">返回</span>
        </button>
        <div className="flex-1 flex justify-center">
          <h1 className="text-base font-bold text-gray-800">保险商城</h1>
        </div>
        <div className="w-20 h-full"></div>
      </header>

      {/* Primary Category Switcher */}
      <div className="bg-white overflow-x-auto hide-scrollbar border-b border-gray-50">
        <div className="px-4 py-3 flex space-x-3 items-center min-w-max">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-100' 
                  : 'bg-gray-50 text-gray-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Secondary Tags */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="px-4 py-4 flex space-x-3 items-center min-w-max">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? '' : tag)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTag === tag 
                  ? 'bg-gray-200 text-gray-800' 
                  : 'bg-white text-gray-400 border border-gray-100 shadow-sm'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Product List */}
      <div className="px-4 space-y-4 pb-10">
        {products.map(product => (
          <div 
            key={product.id} 
            onClick={handleProductClick}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50 flex flex-col transition-transform active:scale-[0.98] cursor-pointer"
          >
            <div className="p-4 flex">
              <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-start">
                  <div className="space-y-0.5">
                    <h3 className="text-[15px] font-bold text-gray-900 leading-tight">{product.title}</h3>
                    <p className="text-xs text-gray-400 font-medium">{product.company}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${product.typeColor}`}>
                    {product.type}
                  </span>
                </div>
                <div className="mt-2 flex items-center space-x-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${product.featureColor}`}>
                    {product.featureTag}
                  </span>
                  <p className="text-[11px] text-gray-500 line-clamp-1 flex-1 font-medium">{product.desc}</p>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50/50 flex items-center justify-between border-t border-gray-50">
              <span className="text-[11px] text-gray-400 font-medium">{product.footerText}</span>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg shadow-blue-100">
                {product.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceMall;
