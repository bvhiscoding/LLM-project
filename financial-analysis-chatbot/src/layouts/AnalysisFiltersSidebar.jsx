import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X, Filter } from 'lucide-react';
import Button from '../components/Button';
import Badge from '../components/Badge';

const AnalysisFiltersSidebar = ({ onApplyFilters, onClearFilters }) => {
  const [expandedGroups, setExpandedGroups] = useState({
    period: true,
    companies: true,
    industry: false,
    metrics: false,
    analysisType: false
  });
  
  const [filters, setFilters] = useState({
    period: '',
    companies: [],
    industries: [],
    metrics: [],
    analysisTypes: []
  });
  
  const toggleGroup = (group) => {
    setExpandedGroups(prev => ({ ...prev, [group]: !prev[group] }));
  };
  
  const activeFiltersCount = Object.values(filters).flat().filter(Boolean).length;
  
  const FilterGroup = ({ title, groupKey, children }) => (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => toggleGroup(groupKey)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">{title}</span>
        {expandedGroups[groupKey] ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {expandedGroups[groupKey] && (
        <div className="px-4 pb-4 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-700" />
            <h3 className="font-semibold text-gray-900">Bộ lọc</h3>
            {activeFiltersCount > 0 && (
              <Badge variant="info">{activeFiltersCount}</Badge>
            )}
          </div>
        </div>
      </div>
      
      {/* Filter Groups */}
      <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
        {/* Time Period */}
        <FilterGroup title="Khoảng thời gian" groupKey="period">
          <select 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
            value={filters.period}
            onChange={(e) => setFilters({ ...filters, period: e.target.value })}
          >
            <option value="">Tất cả</option>
            <option value="q1">Q1 2024</option>
            <option value="q2">Q2 2024</option>
            <option value="q3">Q3 2024</option>
            <option value="q4">Q4 2024</option>
            <option value="2024">Năm 2024</option>
            <option value="2023">Năm 2023</option>
          </select>
        </FilterGroup>
        
        {/* Companies */}
        <FilterGroup title="Công ty" groupKey="companies">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Tìm kiếm công ty..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
            />
            {['Vinamilk', 'FPT', 'Viettel', 'Hòa Phát', 'Vietcombank'].map((company) => (
              <label key={company} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-700">{company}</span>
              </label>
            ))}
          </div>
        </FilterGroup>
        
        {/* Industry Sectors */}
        <FilterGroup title="Ngành" groupKey="industry">
          <div className="space-y-2">
            {['Công nghệ', 'Thực phẩm', 'Ngân hàng', 'Viễn thông', 'Thép'].map((industry) => (
              <label key={industry} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-700">{industry}</span>
              </label>
            ))}
          </div>
        </FilterGroup>
        
        {/* Metrics */}
        <FilterGroup title="Chỉ số" groupKey="metrics">
          <div className="space-y-2">
            {['ROE', 'ROA', 'Tăng trưởng DT', 'Biên lợi nhuận', 'P/E Ratio', 'Nợ/Vốn'].map((metric) => (
              <label key={metric} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-700">{metric}</span>
              </label>
            ))}
          </div>
        </FilterGroup>
        
        {/* Analysis Type */}
        <FilterGroup title="Loại phân tích" groupKey="analysisType">
          <div className="space-y-2">
            {['Xu hướng', 'So sánh', 'Phân tích tỷ số', 'Hiệu suất', 'Dự báo'].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </FilterGroup>
      </div>
      
      {/* Action Buttons */}
      <div className="p-4 bg-gray-50 border-t border-gray-200 space-y-2">
        <Button 
          className="w-full" 
          onClick={() => onApplyFilters && onApplyFilters(filters)}
        >
          Áp dụng bộ lọc
        </Button>
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={() => {
            setFilters({
              period: '',
              companies: [],
              industries: [],
              metrics: [],
              analysisTypes: []
            });
            onClearFilters && onClearFilters();
          }}
        >
          Xóa tất cả
        </Button>
      </div>
    </div>
  );
};

export default AnalysisFiltersSidebar;
