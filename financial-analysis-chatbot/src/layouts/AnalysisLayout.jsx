import React from 'react';
import DashboardLayout from './DashboardLayout';
import { TrendingUp } from 'lucide-react';

const AnalysisLayout = ({ 
  children, 
  filtersSidebar,
  showFilters = true
}) => {
  const breadcrumbs = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Phân tích', href: '/analysis' }
  ];
  
  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Bảng điều khiển phân tích tài chính</h1>
            <p className="text-gray-600 mt-1">AI-powered insights and trends</p>
          </div>
        </div>
      </div>
      
      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar - 25% */}
        {showFilters && filtersSidebar && (
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              {filtersSidebar}
            </div>
          </div>
        )}
        
        {/* Main Content - 75% */}
        <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
          {children}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalysisLayout;
