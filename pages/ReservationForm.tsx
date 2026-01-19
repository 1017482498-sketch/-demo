
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, HelpCircle, Calendar, ChevronDown } from 'lucide-react';

const ReservationForm: React.FC = () => {
  const navigate = useNavigate();

  // 显式返回逻辑
  const handleBack = () => {
    navigate('/product-detail');
  };

  return (
    <div className="flex flex-col min-h-full bg-white pb-32 isolate">
      {/* 头部导航 */}
      <header className="h-14 flex items-center bg-white sticky top-0 z-[999] border-b border-gray-100 px-0">
        <button 
          onClick={handleBack}
          className="w-20 h-full flex items-center justify-center cursor-pointer active:bg-gray-100 transition-colors z-[1000]"
        >
          <ArrowLeft className="w-6 h-6 text-gray-800" />
          <span className="text-sm font-bold ml-1 text-gray-800">返回</span>
        </button>
        <div className="flex-1 flex justify-center">
          <h1 className="text-base font-bold text-gray-800">保单预约信息</h1>
        </div>
        <div className="w-20 h-full flex items-center justify-center pr-2">
          <button className="p-2 text-gray-400">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* 步骤条 */}
      <div className="px-6 py-8 bg-white">
        <div className="relative flex justify-between">
          <div className="absolute top-4 left-4 right-4 h-[2px] bg-gray-100 z-0"></div>
          <div className="absolute top-4 left-4 w-[15%] h-[2px] bg-blue-600 z-0"></div>
          
          <StepItem number="1" label="投保人" active />
          <StepItem number="2" label="受保人" />
          <StepItem number="3" label="受益人" />
        </div>
      </div>

      {/* 表单容器 */}
      <div className="px-5 space-y-10">
        <h2 className="text-[22px] font-bold text-gray-900">持有人信息（投保人）</h2>

        {/* 模块1：基本证件信息 */}
        <section className="space-y-5">
          <SectionTitle title="基本证件信息" />
          <InputField label="身份证号码" placeholder="请输入身份证号码" required />
          <InputField label="通行证或护照（入关证件号）" placeholder="请输入通行证或护照号码" required />
          <InputField label="身份证上地址" placeholder="请输入身份证上的地址" required />
          <InputField label="出生日期" placeholder="请选择出生日期" required icon={<Calendar className="w-4 h-4" />} />
        </section>

        {/* 模块2：个人基本信息 */}
        <section className="space-y-5">
          <SectionTitle title="个人基本信息" />
          <InputField label="身份证姓名" placeholder="请输入身份证上的姓名" required />
          <InputField label="英文姓名（和证件一致）" placeholder="请输入英文姓名" required />
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">性别 <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-2 gap-4">
              <RadioOption label="男" name="gender" />
              <RadioOption label="女" name="gender" />
            </div>
          </div>
          <InputField label="通讯地址" placeholder="请输入通讯地址" required />
        </section>

        {/* 模块3：职业与财务信息 */}
        <section className="space-y-5">
          <SectionTitle title="职业与财务信息" />
          <InputField label="工作单位" placeholder="请输入工作单位名称" required />
          <InputField label="公司地址" placeholder="请输入公司地址" />
          <InputField label="工作职位" placeholder="请输入工作职位" required />
          <SelectField label="行业类别" placeholder="请选择行业类别" required />
          
          <div className="grid grid-cols-2 gap-4">
            <SelectField label="月收入" placeholder="请选择" required />
            <SelectField label="支出" placeholder="请选择" required />
          </div>
          
          <SelectField label="总流动资金" placeholder="请选择" required />
          <InputField label="联系电话" placeholder="请输入联系电话" required />
          <InputField label="E-mail" placeholder="请输入电子邮箱" required />

          <div className="grid grid-cols-2 gap-4">
            <SelectField label="教育程度" placeholder="请选择" required />
            <SelectField label="婚姻状况" placeholder="请选择" required />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">是否吸烟 <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-2 gap-4">
              <RadioOption label="是" name="smoke" />
              <RadioOption label="否" name="smoke" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <InputField label="身高(cm)" placeholder="请输入身高" required />
            <InputField label="体重(kg)" placeholder="请输入体重" required />
          </div>
        </section>

        {/* 模块4：产品与预约信息 */}
        <section className="space-y-5">
          <SectionTitle title="产品与预约信息" />
          <InputField label="咨询产品名称" placeholder="请选择产品信息" required />
          <InputField label="保险金额 (元)" placeholder="请输入保险金额" required />
          <InputField label="保险费用 (元/年)" placeholder="请输入保险费用" required />
          <SelectField label="保险年期 (年)" placeholder="请选择保险年期" required />
          <InputField label="预约时间" placeholder="请选择预约时间" required icon={<Calendar className="w-4 h-4" />} />
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">受保人是否为儿童 <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-2 gap-4">
              <RadioOption label="是" name="isChild" />
              <RadioOption label="否" name="isChild" />
            </div>
          </div>
        </section>

        {/* 页面底部空白 */}
        <div className="h-10"></div>
      </div>

      {/* 底部悬浮按钮 */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-white border-t border-gray-100 z-50">
        <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-100 active:bg-blue-700 transition-colors">
          下一步：受保人信息
        </button>
      </div>
    </div>
  );
};

// --- 子组件 ---

const StepItem: React.FC<{ number: string, label: string, active?: boolean }> = ({ number, label, active }) => (
  <div className="flex flex-col items-center z-10">
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
      active ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-400'
    }`}>
      {number}
    </div>
    <span className={`text-[11px] mt-2 font-bold ${active ? 'text-gray-800' : 'text-gray-300'}`}>
      {label}
    </span>
  </div>
);

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <h3 className="text-base font-bold text-gray-800 pt-2">{title}</h3>
);

const InputField: React.FC<{ label: string, placeholder: string, required?: boolean, icon?: React.ReactNode }> = ({ label, placeholder, required, icon }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <input 
        type="text" 
        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm placeholder:text-gray-300 focus:outline-none focus:border-blue-500 transition-colors" 
        placeholder={placeholder} 
      />
      {icon && <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
    </div>
  </div>
);

const SelectField: React.FC<{ label: string, placeholder: string, required?: boolean }> = ({ label, placeholder, required }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <div className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-300 flex justify-between items-center cursor-pointer">
        <span>{placeholder}</span>
        <ChevronDown className="w-4 h-4 text-gray-300" />
      </div>
    </div>
  </div>
);

const RadioOption: React.FC<{ label: string, name: string }> = ({ label, name }) => (
  <label className="flex items-center justify-start space-x-3 px-4 py-3.5 border border-gray-100 rounded-xl cursor-pointer active:bg-gray-50 transition-colors">
    <div className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center">
      <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
    </div>
    <span className="text-sm text-gray-700 font-medium">{label}</span>
    <input type="radio" name={name} className="hidden" />
  </label>
);

export default ReservationForm;
