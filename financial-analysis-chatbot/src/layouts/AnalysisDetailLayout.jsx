import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import { ArrowLeft, Share2, Download, Printer, Trash2, RefreshCw } from 'lucide-react';
import Button from '../components/Button';
import Badge from '../components/Badge';

const AnalysisDetailLayout = ({ 
  children,
  analysis,
  onShare,
  onExport,
  onPrint,
  onDelete,
  onRegenerate,
  relatedAnalyses,
  tableOfContents
}) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const breadcrumbs = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Phân tích', href: '/analysis' },
    { name: analysis?.title || 'Chi tiết', href: '#' }
  ];
  
  const getTypeBadge = (type) => {
    const config = {
      trend: { variant: 'info', text: 'Xu hướng' },
      comparison: { variant: 'warning', text: 'So sánh' },
      ratio: { variant: 'success', text: 'Tỷ số' },
      performance: { variant: 'info', text: 'Hiệu suất' }
    };
    const { variant, text } = config[type] || { variant: 'gray', text: type };
    return <Badge variant={variant}>{text}</Badge>;
  };
  
  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      {/* Sticky Header */}
      <div className="sticky top-16 z-10 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 mb-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/analysis')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-3 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Quay lại danh sách phân tích
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">
                  {analysis?.title || 'Phân tích tài chính'}
                </h1>
                {analysis?.type && getTypeBadge(analysis.type)}
              </div>
              <p className="text-gray-600 text-sm">
                {analysis?.companies?.join(', ')} • {analysis?.date} • {analysis?.period}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {onShare && (
                <Button variant="outline" onClick={onShare} size="sm" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Chia sẻ
                </Button>
              )}
              {onExport && (
                <Button variant="outline" onClick={onExport} size="sm" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Xuất
                </Button>
              )}
              {onPrint && (
                <Button variant="outline" onClick={onPrint} size="sm" className="flex items-center gap-2">
                  <Printer className="h-4 w-4" />
                  In
                </Button>
              )}
              {onRegenerate && (
                <Button variant="outline" onClick={onRegenerate} size="sm" className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Tạo lại
                </Button>
              )}
              {onDelete && (
                <Button variant="danger" onClick={onDelete} size="sm" className="flex items-center gap-2">
                  <Trash2 className="h-4 w-4" />
                  Xóa
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Table of Contents */}
        {tableOfContents && sidebarOpen && (
          <div className="lg:col-span-1">
            <div className="sticky top-40">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Mục lục</h3>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="lg:hidden text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>
                <nav className="space-y-2">
                  {tableOfContents}
                </nav>
              </div>
            </div>
          </div>
        )}
        
        {/* Main Content */}
        <div className={sidebarOpen && tableOfContents ? 'lg:col-span-3' : 'lg:col-span-4'}>
          {!sidebarOpen && tableOfContents && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="mb-4 text-sm text-blue-600 hover:text-blue-700"
            >
              Hiển thị mục lục
            </button>
          )}
          
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 space-y-8 print:p-0">
              {children}
            </div>
          </div>
          
          {/* Related Analyses Section */}
          {relatedAnalyses && relatedAnalyses.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Phân tích liên quan</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedAnalyses.map((relatedAnalysis, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => navigate(`/analysis/${relatedAnalysis.id}`)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">
                          {relatedAnalysis.title}
                        </h3>
                        <p className="text-xs text-gray-600">{relatedAnalysis.date}</p>
                        <div className="mt-2">
                          {getTypeBadge(relatedAnalysis.type)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalysisDetailLayout;
