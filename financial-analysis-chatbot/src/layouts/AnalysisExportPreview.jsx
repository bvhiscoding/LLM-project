import React, { useState } from 'react';
import { X, FileText, Image as ImageIcon, BarChart3, Table as TableIcon, File, Download } from 'lucide-react';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';

const AnalysisExportPreview = ({ 
  isOpen,
  onClose,
  onExport,
  analysis
}) => {
  const [loading, setLoading] = useState(false);
  const [format, setFormat] = useState('pdf');
  const [filename, setFilename] = useState('Bao-cao-phan-tich');
  const [customization, setCustomization] = useState({
    includeCover: true,
    includeSummary: true,
    includeCharts: true,
    includeTables: true,
    includeAppendix: true,
    addLogo: false,
    orientation: 'portrait',
    theme: 'professional'
  });
  
  const formats = [
    { id: 'pdf', label: 'PDF', icon: FileText, extension: '.pdf' },
    { id: 'word', label: 'Word', icon: File, extension: '.docx' },
    { id: 'powerpoint', label: 'PowerPoint', icon: FileText, extension: '.pptx' }
  ];
  
  const themes = [
    { id: 'professional', label: 'Chuyên nghiệp', preview: 'bg-gray-900' },
    { id: 'modern', label: 'Hiện đại', preview: 'bg-blue-600' },
    { id: 'minimal', label: 'Tối giản', preview: 'bg-white border-2' }
  ];
  
  const handleExport = async () => {
    setLoading(true);
    try {
      // Simulate export process
      await new Promise(resolve => setTimeout(resolve, 2000));
      onExport && onExport({ format, filename, customization });
    } finally {
      setLoading(false);
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-white rounded-lg shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Xuất báo cáo phân tích</h2>
            <p className="text-sm text-gray-600 mt-1">Tùy chỉnh và xem trước báo cáo của bạn</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Preview Section - 60% */}
          <div className="flex-1 p-6 overflow-y-auto bg-gray-100">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Xem trước</h3>
              
              {/* Paper Preview */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Paper with margins */}
                <div className={`
                  ${customization.orientation === 'portrait' ? 'aspect-[210/297]' : 'aspect-[297/210]'}
                  p-12 bg-white
                `}>
                  {/* Cover Page Preview */}
                  {customization.includeCover && (
                    <div className="mb-8 text-center py-12 border-b-2 border-gray-200">
                      {customization.addLogo && (
                        <div className="w-24 h-24 bg-blue-600 rounded-lg mx-auto mb-6"></div>
                      )}
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {analysis?.title || 'Báo cáo phân tích tài chính'}
                      </h1>
                      <p className="text-lg text-gray-600">
                        {analysis?.company || 'Tên công ty'} • {analysis?.period || 'Q4 2024'}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {new Date().toLocaleDateString('vi-VN')}
                      </p>
                    </div>
                  )}
                  
                  {/* Summary Section */}
                  {customization.includeSummary && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FileText className="h-6 w-6" />
                        Tóm tắt điều hành
                      </h2>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Charts Section */}
                  {customization.includeCharts && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <BarChart3 className="h-6 w-6" />
                        Biểu đồ & Trực quan
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
                          <BarChart3 className="h-12 w-12 text-gray-400" />
                        </div>
                        <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
                          <BarChart3 className="h-12 w-12 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Tables Section */}
                  {customization.includeTables && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <TableIcon className="h-6 w-6" />
                        Bảng dữ liệu
                      </h2>
                      <div className="border border-gray-300 rounded">
                        <div className="grid grid-cols-3 gap-px bg-gray-300">
                          {[...Array(12)].map((_, i) => (
                            <div key={i} className="bg-gray-100 h-8"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Appendix Section */}
                  {customization.includeAppendix && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Phụ lục</h2>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Customization Sidebar - 40% */}
          <div className="w-96 border-l border-gray-200 p-6 overflow-y-auto bg-white">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tùy chỉnh</h3>
            
            <div className="space-y-6">
              {/* Format Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Định dạng file
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {formats.map((fmt) => {
                    const Icon = fmt.icon;
                    return (
                      <button
                        key={fmt.id}
                        onClick={() => setFormat(fmt.id)}
                        className={`
                          p-3 rounded-lg border-2 transition-colors flex flex-col items-center gap-2
                          ${format === fmt.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                          }
                        `}
                      >
                        <Icon className={`h-6 w-6 ${format === fmt.id ? 'text-blue-600' : 'text-gray-600'}`} />
                        <span className={`text-xs font-medium ${format === fmt.id ? 'text-blue-600' : 'text-gray-700'}`}>
                          {fmt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Filename */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tên file
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={filename}
                    onChange={(e) => setFilename(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <span className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-600">
                    {formats.find(f => f.id === format)?.extension}
                  </span>
                </div>
              </div>
              
              {/* Include/Exclude Sections */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nội dung bao gồm
                </label>
                <div className="space-y-2">
                  {[
                    { key: 'includeCover', label: 'Trang bìa', icon: FileText },
                    { key: 'includeSummary', label: 'Tóm tắt điều hành', icon: FileText },
                    { key: 'includeCharts', label: 'Biểu đồ', icon: BarChart3 },
                    { key: 'includeTables', label: 'Bảng dữ liệu', icon: TableIcon },
                    { key: 'includeAppendix', label: 'Phụ lục', icon: File }
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <label key={item.key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={customization[item.key]}
                          onChange={(e) => setCustomization({
                            ...customization,
                            [item.key]: e.target.checked
                          })}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <Icon className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{item.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
              
              {/* Logo */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={customization.addLogo}
                    onChange={(e) => setCustomization({
                      ...customization,
                      addLogo: e.target.checked
                    })}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <ImageIcon className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Thêm logo</span>
                </label>
              </div>
              
              {/* Orientation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hướng trang
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCustomization({ ...customization, orientation: 'portrait' })}
                    className={`
                      p-3 rounded-lg border-2 transition-colors
                      ${customization.orientation === 'portrait'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }
                    `}
                  >
                    Dọc
                  </button>
                  <button
                    onClick={() => setCustomization({ ...customization, orientation: 'landscape' })}
                    className={`
                      p-3 rounded-lg border-2 transition-colors
                      ${customization.orientation === 'landscape'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }
                    `}
                  >
                    Ngang
                  </button>
                </div>
              </div>
              
              {/* Theme */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chủ đề
                </label>
                <div className="space-y-2">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setCustomization({ ...customization, theme: theme.id })}
                      className={`
                        w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-colors
                        ${customization.theme === theme.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                        }
                      `}
                    >
                      <div className={`w-8 h-8 rounded ${theme.preview}`}></div>
                      <span className={`text-sm font-medium ${
                        customization.theme === theme.id ? 'text-blue-600' : 'text-gray-700'
                      }`}>
                        {theme.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <Button variant="outline" onClick={onClose}>
            Hủy
          </Button>
          <Button 
            onClick={handleExport}
            disabled={loading}
            className="flex items-center gap-2"
          >
            {loading ? (
              <>
                <LoadingSpinner size="sm" />
                Đang xuất...
              </>
            ) : (
              <>
                <Download className="h-5 w-5" />
                Xuất {formats.find(f => f.id === format)?.label}
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisExportPreview;
