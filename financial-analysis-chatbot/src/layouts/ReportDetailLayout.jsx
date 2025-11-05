import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import { ArrowLeft, Download, Printer, Share2, FileText } from 'lucide-react';
import Button from '../components/Button';
import Badge from '../components/Badge';

const ReportDetailLayout = ({ 
  children,
  report,
  onDownload,
  onPrint,
  onShare,
  relatedReports,
  sidebarNav
}) => {
  const navigate = useNavigate();
  
  const breadcrumbs = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Báo cáo', href: '/reports' },
    { name: report?.title || 'Chi tiết', href: '#' }
  ];
  
  const getStatusVariant = (status) => {
    const variants = {
      completed: 'success',
      processing: 'warning',
      error: 'danger'
    };
    return variants[status] || 'info';
  };
  
  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      {/* Sticky Header */}
      <div className="sticky top-16 z-10 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 mb-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/reports')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-3 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Quay lại danh sách báo cáo
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">
                  {report?.title || 'Chi tiết báo cáo'}
                </h1>
                {report?.status && (
                  <Badge variant={getStatusVariant(report.status)}>
                    {report.status === 'completed' && 'Hoàn thành'}
                    {report.status === 'processing' && 'Đang xử lý'}
                    {report.status === 'error' && 'Lỗi'}
                  </Badge>
                )}
              </div>
              <p className="text-gray-600">
                {report?.company} • {report?.period} • Tải lên: {report?.uploadDate}
              </p>
            </div>
            
            <div className="flex gap-2 mt-4 md:mt-0">
              {onDownload && (
                <Button variant="outline" onClick={onDownload} className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Tải xuống
                </Button>
              )}
              {onPrint && (
                <Button variant="outline" onClick={onPrint} className="flex items-center gap-2">
                  <Printer className="h-4 w-4" />
                  In
                </Button>
              )}
              {onShare && (
                <Button variant="outline" onClick={onShare} className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Chia sẻ
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation (Optional) */}
        {sidebarNav && (
          <div className="lg:col-span-1">
            <div className="sticky top-40">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Nội dung</h3>
                <nav className="space-y-2">
                  {sidebarNav}
                </nav>
              </div>
            </div>
          </div>
        )}
        
        {/* Main Content */}
        <div className={sidebarNav ? 'lg:col-span-3' : 'lg:col-span-4'}>
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 space-y-8 print:p-0">
              {children}
            </div>
          </div>
          
          {/* Related Reports Section */}
          {relatedReports && relatedReports.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Báo cáo liên quan</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedReports.map((relatedReport, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => navigate(`/reports/${relatedReport.id}`)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">
                          {relatedReport.title}
                        </h3>
                        <p className="text-xs text-gray-600">{relatedReport.period}</p>
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

export default ReportDetailLayout;
