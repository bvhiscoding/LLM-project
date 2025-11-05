import React from 'react';
import { FileText } from 'lucide-react';
import EmptyState from '../components/EmptyState';
import LoadingSpinner from '../components/LoadingSpinner';

const AnalysisContentGrid = ({ 
  children,
  loading = false,
  isEmpty = false,
  layout = 'grid', // 'grid' | 'masonry'
  columns = 2
}) => {
  if (loading) {
    return (
      <div className="space-y-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            <div className="mt-6 h-48 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }
  
  if (isEmpty) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-12">
        <EmptyState
          icon={FileText}
          title="Chưa có phân tích"
          description="Bắt đầu bằng cách tạo phân tích mới hoặc thay đổi bộ lọc của bạn"
          action={
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Tạo phân tích đầu tiên
            </button>
          }
        />
      </div>
    );
  }
  
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 lg:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };
  
  return (
    <div 
      className={`
        ${layout === 'masonry' ? 'columns-1 lg:columns-2 gap-6 space-y-6' : `grid ${gridClasses[columns]} gap-6`}
        transition-all duration-300
      `}
    >
      {children}
    </div>
  );
};

export default AnalysisContentGrid;
