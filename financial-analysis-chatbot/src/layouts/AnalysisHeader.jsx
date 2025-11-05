import React from 'react';
import { Grid, List, BarChart3, Download, Plus, TrendingUp, Activity, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const AnalysisHeader = ({ 
  viewMode = 'grid',
  onViewModeChange,
  onGenerateAnalysis,
  sortBy = 'latest',
  onSortChange,
  stats
}) => {
  const viewModes = [
    { id: 'grid', icon: Grid, label: 'Lưới' },
    { id: 'chart', icon: BarChart3, label: 'Biểu đồ' },
    { id: 'table', icon: List, label: 'Bảng' }
  ];
  
  const sortOptions = [
    { value: 'latest', label: 'Mới nhất' },
    { value: 'top', label: 'Hiệu suất cao' },
    { value: 'worst', label: 'Hiệu suất thấp' },
    { value: 'custom', label: 'Tùy chỉnh' }
  ];
  
  const exportOptions = ['PDF', 'Excel', 'CSV'];
  
  const defaultStats = [
    { icon: Activity, label: 'Tổng phân tích', value: stats?.total || '48', color: 'blue' },
    { icon: TrendingUp, label: 'Tháng này', value: stats?.thisMonth || '12', color: 'green' },
    { icon: CheckCircle, label: 'Trung bình', value: stats?.avgPerformance || '85%', color: 'purple' }
  ];
  
  return (
    <div className="space-y-4 mb-6">
      {/* Stats Summary Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {defaultStats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: 'bg-blue-100 text-blue-600',
            green: 'bg-green-100 text-green-600',
            purple: 'bg-purple-100 text-purple-600'
          };
          
          return (
            <Card key={index} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${colorClasses[stat.color]}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      
      {/* Controls Bar */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Left Section - View Mode & Sort */}
          <div className="flex flex-wrap gap-3 items-center">
            {/* View Mode Toggles */}
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              {viewModes.map((mode) => {
                const Icon = mode.icon;
                return (
                  <button
                    key={mode.id}
                    onClick={() => onViewModeChange && onViewModeChange(mode.id)}
                    className={`
                      p-2 rounded-lg transition-colors
                      ${viewMode === mode.id 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                      }
                    `}
                    title={mode.label}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                );
              })}
            </div>
            
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => onSortChange && onSortChange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  Sắp xếp: {option.label}
                </option>
              ))}
            </select>
            
            {/* Export Dropdown */}
            <div className="relative">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none pr-10">
                <option value="">Xuất file</option>
                {exportOptions.map((format) => (
                  <option key={format} value={format.toLowerCase()}>
                    Xuất {format}
                  </option>
                ))}
              </select>
              <Download className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
          
          {/* Right Section - Generate Button */}
          <div>
            <Button 
              onClick={onGenerateAnalysis}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <Plus className="h-5 w-5" />
              Tạo phân tích mới
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisHeader;
