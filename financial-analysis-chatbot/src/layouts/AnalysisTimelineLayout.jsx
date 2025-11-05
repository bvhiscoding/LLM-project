import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import { Clock, ChevronDown, ChevronUp, Calendar, Building2, FileText, TrendingUp } from 'lucide-react';
import Badge from '../components/Badge';

const AnalysisTimelineLayout = ({ 
  timelineItems = [],
  onItemClick,
  milestones = []
}) => {
  const [expandedItems, setExpandedItems] = useState([]);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  
  const breadcrumbs = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Phân tích', href: '/analysis' },
    { name: 'Lịch sử', href: '/analysis/timeline' }
  ];
  
  const toggleExpand = (id) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };
  
  const defaultItems = timelineItems.length > 0 ? timelineItems : [
    {
      id: 1,
      date: '2024-01-15',
      company: 'Vinamilk',
      type: 'trend',
      title: 'Phân tích xu hướng tăng trưởng Q4 2023',
      findings: 'Doanh thu tăng 15% so với cùng kỳ năm trước. Biên lợi nhuận cải thiện đáng kể.',
      metrics: ['Doanh thu: +15%', 'Lợi nhuận: +22%', 'ROE: 18.5%']
    },
    {
      id: 2,
      date: '2024-01-10',
      company: 'FPT',
      type: 'comparison',
      title: 'So sánh hiệu suất với đối thủ cạnh tranh',
      findings: 'FPT dẫn đầu trong phân khúc dịch vụ công nghệ với tốc độ tăng trưởng vượt trội.',
      metrics: ['Tăng trưởng: +28%', 'Thị phần: 35%', 'P/E: 16.2']
    },
    {
      id: 3,
      date: '2024-01-05',
      company: 'Vietcombank',
      type: 'ratio',
      title: 'Phân tích tỷ số tài chính năm 2023',
      findings: 'Các chỉ số thanh khoản và khả năng sinh lời đều ở mức tốt.',
      metrics: ['ROA: 1.8%', 'ROE: 21.3%', 'Nợ xấu: 0.9%']
    }
  ];
  
  const defaultMilestones = milestones.length > 0 ? milestones : [
    { date: '2024-01-01', label: 'Đầu năm 2024' },
    { date: '2023-12-31', label: 'Kết thúc năm 2023' }
  ];
  
  const getTypeConfig = (type) => {
    const configs = {
      trend: { icon: TrendingUp, color: 'blue', label: 'Xu hướng' },
      comparison: { icon: Building2, color: 'purple', label: 'So sánh' },
      ratio: { icon: FileText, color: 'green', label: 'Tỷ số' },
      performance: { icon: TrendingUp, color: 'orange', label: 'Hiệu suất' }
    };
    return configs[type] || configs.trend;
  };
  
  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Clock className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Lịch sử phân tích</h1>
            <p className="text-gray-600 mt-1">Xem lại các phân tích theo thời gian</p>
          </div>
        </div>
        
        {/* Date Range Filter */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Lọc theo ngày:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Từ ngày"
              />
              <span className="self-center text-gray-500">-</span>
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Đến ngày"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Áp dụng
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        
        {/* Timeline Items */}
        <div className="space-y-6">
          {defaultItems.map((item) => {
            const isExpanded = expandedItems.includes(item.id);
            const typeConfig = getTypeConfig(item.type);
            const TypeIcon = typeConfig.icon;
            
            return (
              <div key={item.id} className="relative pl-20">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-5 h-5 rounded-full bg-${typeConfig.color}-500 border-4 border-white shadow-md`}></div>
                
                {/* Content Card */}
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div
                    className="p-4 cursor-pointer"
                    onClick={() => toggleExpand(item.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`p-1.5 bg-${typeConfig.color}-100 rounded`}>
                            <TypeIcon className={`h-4 w-4 text-${typeConfig.color}-600`} />
                          </div>
                          <Badge variant="gray">
                            <Calendar className="h-3 w-3 inline mr-1" />
                            {item.date}
                          </Badge>
                          <Badge variant="info">{typeConfig.label}</Badge>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Building2 className="h-4 w-4" />
                          <span>{item.company}</span>
                        </div>
                      </div>
                      
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        {isExpanded ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                    
                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="mb-3">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Phát hiện chính:</h4>
                          <p className="text-sm text-gray-700 leading-relaxed">{item.findings}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Chỉ số quan trọng:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.metrics.map((metric, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                              >
                                {metric}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-4 flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onItemClick && onItemClick(item);
                            }}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                          >
                            Xem chi tiết
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Milestones */}
          {defaultMilestones.map((milestone, index) => (
            <div key={index} className="relative pl-20">
              <div className="absolute left-5 w-7 h-7 rounded-full bg-yellow-400 border-4 border-white shadow-md flex items-center justify-center">
                <span className="text-white text-xs font-bold">★</span>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm font-semibold text-yellow-800">{milestone.label}</p>
                <p className="text-xs text-yellow-600">{milestone.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalysisTimelineLayout;
