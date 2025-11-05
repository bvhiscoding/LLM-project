import React, { useState } from 'react';
import { BarChart3, LineChart, PieChart, Maximize2, Download, ZoomIn, ZoomOut } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const AnalysisVisualizationSection = ({ 
  charts = [],
  title = "Trực quan hóa dữ liệu"
}) => {
  const [selectedChart, setSelectedChart] = useState(null);
  
  const chartTypes = [
    { id: 'line', icon: LineChart, label: 'Đường' },
    { id: 'bar', icon: BarChart3, label: 'Cột' },
    { id: 'pie', icon: PieChart, label: 'Tròn' }
  ];
  
  const defaultCharts = charts.length > 0 ? charts : [
    { id: 1, title: 'Doanh thu theo quý', type: 'line', data: [] },
    { id: 2, title: 'Phân bổ chi phí', type: 'pie', data: [] },
    { id: 3, title: 'So sánh lợi nhuận', type: 'bar', data: [] },
    { id: 4, title: 'Tỷ suất sinh lời', type: 'line', data: [] }
  ];
  
  const ChartCard = ({ chart }) => {
    const Icon = chartTypes.find(t => t.type === chart.type)?.icon || BarChart3;
    
    return (
      <Card className="relative group">
        {/* Chart Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900">{chart.title}</h3>
            </div>
            
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                title="Phóng to"
                onClick={() => setSelectedChart(chart)}
              >
                <Maximize2 className="h-4 w-4 text-gray-600" />
              </button>
              <button 
                className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                title="Tải xuống"
              >
                <Download className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Chart Content Area */}
        <div className="p-4">
          <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <Icon className="h-16 w-16 text-gray-300 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Biểu đồ {chart.type}</p>
              <p className="text-xs text-gray-400 mt-1">Dữ liệu sẽ hiển thị ở đây</p>
            </div>
          </div>
        </div>
        
        {/* Chart Controls */}
        <div className="px-4 pb-4 flex justify-center gap-2">
          <button 
            className="p-1.5 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            title="Phóng to"
          >
            <ZoomIn className="h-4 w-4 text-gray-600" />
          </button>
          <button 
            className="p-1.5 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            title="Thu nhỏ"
          >
            <ZoomOut className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </Card>
    );
  };
  
  return (
    <div>
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">Phân tích trực quan các chỉ số tài chính</p>
      </div>
      
      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {defaultCharts.map((chart) => (
          <ChartCard key={chart.id} chart={chart} />
        ))}
      </div>
      
      {/* Fullscreen Modal */}
      {selectedChart && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">{selectedChart.title}</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Tải xuống
                </Button>
                <button
                  onClick={() => setSelectedChart(null)}
                  className="p-2 hover:bg-gray-100 rounded transition-colors"
                >
                  <span className="text-2xl leading-none text-gray-600">×</span>
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              <div className="bg-gray-50 rounded-lg h-[60vh] flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                  <p className="text-lg text-gray-500">Biểu đồ toàn màn hình</p>
                  <p className="text-sm text-gray-400 mt-2">Dữ liệu sẽ hiển thị ở đây</p>
                </div>
              </div>
              
              <div className="mt-4 flex justify-center gap-2">
                <Button variant="outline" size="sm">
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <ZoomOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisVisualizationSection;
