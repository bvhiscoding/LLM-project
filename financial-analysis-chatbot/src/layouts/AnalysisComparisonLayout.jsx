import React, { useState, useEffect, useRef } from 'react';
import DashboardLayout from './DashboardLayout';
import { GitCompare, ArrowUpDown } from 'lucide-react';
import Button from '../components/Button';
import Badge from '../components/Badge';

const AnalysisComparisonLayout = ({ 
  analyses = [],
  onAnalysisSelect,
  maxComparisons = 4
}) => {
  const [selectedAnalyses, setSelectedAnalyses] = useState(analyses);
  const [orientation, setOrientation] = useState('vertical'); // 'vertical' | 'horizontal'
  const [syncScroll, setSyncScroll] = useState(true);
  const scrollRefs = useRef([]);
  
  const breadcrumbs = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Phân tích', href: '/analysis' },
    { name: 'So sánh', href: '/analysis/compare' }
  ];
  
  // Synchronized scrolling
  const handleScroll = (index) => (e) => {
    if (!syncScroll) return;
    
    const scrollTop = e.target.scrollTop;
    const scrollLeft = e.target.scrollLeft;
    
    scrollRefs.current.forEach((ref, i) => {
      if (ref && i !== index) {
        ref.scrollTop = scrollTop;
        ref.scrollLeft = scrollLeft;
      }
    });
  };
  
  const getDifferenceIndicator = (value1, value2) => {
    if (!value1 || !value2) return null;
    
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    
    if (isNaN(num1) || isNaN(num2)) return null;
    
    const diff = num1 - num2;
    const percentDiff = ((diff / num2) * 100).toFixed(1);
    
    if (Math.abs(diff) < 0.01) {
      return <Badge variant="gray">Same</Badge>;
    }
    
    return (
      <Badge variant={diff > 0 ? 'success' : 'danger'}>
        {diff > 0 ? '↑' : '↓'} {Math.abs(percentDiff)}%
      </Badge>
    );
  };
  
  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <GitCompare className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">So sánh phân tích tài chính</h1>
              <p className="text-gray-600 mt-1">
                So sánh {selectedAnalyses.length} phân tích
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={orientation === 'vertical' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setOrientation('vertical')}
            >
              Dọc
            </Button>
            <Button
              variant={orientation === 'horizontal' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setOrientation('horizontal')}
            >
              Ngang
            </Button>
            <Button
              variant={syncScroll ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSyncScroll(!syncScroll)}
              className="flex items-center gap-2"
            >
              <ArrowUpDown className="h-4 w-4" />
              {syncScroll ? 'Đang đồng bộ' : 'Đồng bộ'}
            </Button>
          </div>
        </div>
        
        {/* Selection Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm font-medium text-gray-700">
              Chọn để so sánh (tối đa {maxComparisons}):
            </span>
            {selectedAnalyses.map((analysis, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-2 bg-blue-50 border border-blue-200 rounded-lg">
                <span className="text-sm font-medium text-blue-900">{analysis.title}</span>
                <button
                  onClick={() => {
                    const newSelected = selectedAnalyses.filter((_, i) => i !== index);
                    setSelectedAnalyses(newSelected);
                    onAnalysisSelect && onAnalysisSelect(newSelected);
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </div>
            ))}
            {selectedAnalyses.length < maxComparisons && (
              <Button variant="outline" size="sm">
                + Thêm phân tích
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Split-Screen Comparison */}
      {selectedAnalyses.length >= 2 ? (
        <div 
          className={`
            grid gap-4
            ${orientation === 'vertical' 
              ? `grid-cols-${Math.min(selectedAnalyses.length, 4)}` 
              : 'grid-cols-1'
            }
          `}
        >
          {selectedAnalyses.map((analysis, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Analysis Header */}
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h3 className="font-bold text-gray-900">{analysis.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {analysis.company} • {analysis.period}
                </p>
              </div>
              
              {/* Scrollable Content */}
              <div
                ref={(el) => (scrollRefs.current[index] = el)}
                onScroll={handleScroll(index)}
                className="p-4 max-h-[600px] overflow-y-auto"
              >
                {/* Key Metrics */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-700">Doanh thu</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">{analysis.revenue}</span>
                      {index > 0 && getDifferenceIndicator(analysis.revenue, selectedAnalyses[0].revenue)}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-700">Lợi nhuận</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">{analysis.profit}</span>
                      {index > 0 && getDifferenceIndicator(analysis.profit, selectedAnalyses[0].profit)}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-700">ROE</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">{analysis.roe}</span>
                      {index > 0 && getDifferenceIndicator(analysis.roe, selectedAnalyses[0].roe)}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-700">P/E Ratio</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">{analysis.pe}</span>
                      {index > 0 && getDifferenceIndicator(analysis.pe, selectedAnalyses[0].pe)}
                    </div>
                  </div>
                </div>
                
                {/* Summary */}
                <div className="mt-6 p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2 text-sm">Tóm tắt</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {analysis.summary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <GitCompare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Chọn ít nhất 2 phân tích để so sánh
          </h3>
          <p className="text-gray-600">
            Sử dụng thanh chọn ở trên để thêm phân tích vào so sánh
          </p>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AnalysisComparisonLayout;
