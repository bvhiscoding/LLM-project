import React, { useState } from 'react';
import { Sparkles, ChevronUp, ChevronDown, TrendingUp, AlertTriangle, Lightbulb, Share2, Bookmark, X } from 'lucide-react';
import Badge from '../components/Badge';
import Button from '../components/Button';

const AnalysisInsightsPanel = ({ 
  insights = [],
  keyMetrics = [],
  onCompare,
  onShare,
  onSave,
  hasNewInsights = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('opportunities');
  
  const tabs = [
    { id: 'opportunities', label: 'Cơ hội', icon: TrendingUp, color: 'green' },
    { id: 'risks', label: 'Rủi ro', icon: AlertTriangle, color: 'red' },
    { id: 'trends', label: 'Xu hướng', icon: Sparkles, color: 'blue' }
  ];
  
  const defaultInsights = insights.length > 0 ? insights : {
    opportunities: [
      'Biên lợi nhuận gộp tăng 3% so với quý trước, cho thấy khả năng kiểm soát chi phí tốt',
      'Tỷ lệ tăng trưởng doanh thu vượt trung bình ngành 5%',
      'Dòng tiền hoạt động kinh doanh mạnh mẽ, tăng 18% YoY'
    ],
    risks: [
      'Tỷ lệ nợ/vốn chủ sở hữu cao hơn mức trung bình ngành',
      'Chi phí vận hành tăng nhanh hơn tốc độ tăng trưởng doanh thu',
      'Hàng tồn kho tăng 12%, cần theo dõi vòng quay hàng tồn kho'
    ],
    trends: [
      'Xu hướng tăng trưởng ổn định trong 4 quý gần nhất',
      'P/E ratio đang tiệm cận mức trung bình ngành',
      'ROE có xu hướng cải thiện liên tục qua các kỳ'
    ]
  };
  
  const defaultMetrics = keyMetrics.length > 0 ? keyMetrics : [
    { label: 'Doanh thu', value: '15.2B', change: '+12%', trend: 'up' },
    { label: 'Lợi nhuận', value: '3.8B', change: '+18%', trend: 'up' },
    { label: 'ROE', value: '18.5%', change: '+2.3%', trend: 'up' },
    { label: 'Nợ/Vốn', value: '1.2', change: '-0.1', trend: 'down' }
  ];
  
  return (
    <>
      {/* Notification Dot - Always Visible */}
      {!isOpen && hasNewInsights && (
        <div className="fixed bottom-24 right-8 z-40 animate-pulse">
          <div className="relative">
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
          </div>
        </div>
      )}
      
      {/* Panel Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed bottom-6 right-8 z-40
          flex items-center gap-2 px-4 py-3 
          bg-gradient-to-r from-blue-600 to-purple-600 
          text-white rounded-full shadow-lg 
          hover:shadow-xl transition-all duration-300
          ${isOpen ? 'scale-95' : 'scale-100 hover:scale-105'}
        `}
      >
        <Sparkles className="h-5 w-5" />
        <span className="font-medium">AI Insights</span>
        {isOpen ? (
          <ChevronDown className="h-5 w-5" />
        ) : (
          <ChevronUp className="h-5 w-5" />
        )}
      </button>
      
      {/* Slide-up Panel */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 z-30
          bg-white border-t-2 border-gray-200 shadow-2xl
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}
        `}
        style={{ maxHeight: '70vh' }}
      >
        {/* Panel Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">AI-Powered Insights</h2>
                <p className="text-sm text-blue-100">Phân tích thông minh từ AI</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onCompare}
                className="bg-white bg-opacity-10 border-white text-white hover:bg-white hover:bg-opacity-20"
              >
                So sánh
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onShare}
                className="bg-white bg-opacity-10 border-white text-white hover:bg-white hover:bg-opacity-20"
              >
                <Share2 className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onSave}
                className="bg-white bg-opacity-10 border-white text-white hover:bg-white hover:bg-opacity-20"
              >
                <Bookmark className="h-4 w-4" />
              </Button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors ml-2"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Panel Content */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(70vh - 80px)' }}>
          <div className="max-w-7xl mx-auto p-6">
            {/* Key Metrics Carousel */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Chỉ số quan trọng</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {defaultMetrics.map((metric, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <div className={`flex items-center gap-1 mt-1 text-sm ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.trend === 'up' ? '↑' : '↓'}
                      <span>{metric.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tabs */}
            <div className="mb-4">
              <div className="flex gap-2 border-b border-gray-200">
                {tabs.map((tab) => {
                  const TabIcon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        flex items-center gap-2 px-4 py-3 font-medium transition-colors
                        ${activeTab === tab.id
                          ? `text-${tab.color}-600 border-b-2 border-${tab.color}-600`
                          : 'text-gray-600 hover:text-gray-900'
                        }
                      `}
                    >
                      <TabIcon className="h-5 w-5" />
                      {tab.label}
                      <Badge variant={activeTab === tab.id ? tab.color : 'gray'}>
                        {defaultInsights[tab.id].length}
                      </Badge>
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Insights List */}
            <div className="space-y-3">
              {defaultInsights[activeTab].map((insight, index) => {
                const activeTabConfig = tabs.find(t => t.id === activeTab);
                const InsightIcon = activeTabConfig.icon;
                const colorClasses = {
                  green: 'bg-green-100 text-green-600 border-green-200',
                  red: 'bg-red-100 text-red-600 border-red-200',
                  blue: 'bg-blue-100 text-blue-600 border-blue-200'
                };
                
                return (
                  <div
                    key={index}
                    className={`
                      flex gap-3 p-4 rounded-lg border-l-4
                      ${colorClasses[activeTabConfig.color]}
                      bg-opacity-50
                    `}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <InsightIcon className="h-5 w-5" />
                    </div>
                    <p className="text-sm text-gray-800 leading-relaxed flex-1">
                      {insight}
                    </p>
                  </div>
                );
              })}
            </div>
            
            {/* Quick Actions */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Hành động nhanh</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">Tạo báo cáo</Button>
                <Button variant="outline" size="sm">Xuất dữ liệu</Button>
                <Button variant="outline" size="sm">Đặt cảnh báo</Button>
                <Button variant="outline" size="sm">Chia sẻ với team</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default AnalysisInsightsPanel;
