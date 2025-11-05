import React from 'react';
import ReportDetailLayout from '../layouts/ReportDetailLayout';
import Card from '../components/Card';

const ReportDetailPage = () => {
  const report = {
    title: 'Báo cáo tài chính Q3 2024',
    company: 'Vinamilk',
    period: 'Q3 2024',
    uploadDate: '15/10/2024',
    status: 'completed'
  };
  
  const relatedReports = [
    { id: 2, title: 'Báo cáo Q2 2024', period: 'Q2 2024' },
    { id: 3, title: 'Báo cáo Q1 2024', period: 'Q1 2024' },
    { id: 4, title: 'Báo cáo Q4 2023', period: 'Q4 2023' }
  ];
  
  const sidebarNav = (
    <>
      <a href="#summary" className="block py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100">
        Tóm tắt
      </a>
      <a href="#financials" className="block py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100">
        Số liệu tài chính
      </a>
      <a href="#ratios" className="block py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100">
        Chỉ số tài chính
      </a>
      <a href="#analysis" className="block py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100">
        Phân tích
      </a>
      <a href="#recommendations" className="block py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100">
        Khuyến nghị
      </a>
    </>
  );
  
  return (
    <ReportDetailLayout
      report={report}
      onDownload={() => alert('Tải xuống báo cáo')}
      onPrint={() => window.print()}
      onShare={() => alert('Chia sẻ báo cáo')}
      relatedReports={relatedReports}
      sidebarNav={sidebarNav}
    >
      {/* Summary Section */}
      <section id="summary">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tóm tắt</h2>
        <Card>
          <p className="text-gray-700 leading-relaxed">
            Báo cáo tài chính quý 3 năm 2024 của Vinamilk cho thấy sự tăng trưởng ổn định với doanh thu 
            đạt 16,234 tỷ VNĐ, tăng 2.1% so với quý trước. Lợi nhuận sau thuế đạt 2,456 tỷ VNĐ, 
            tăng 3.5% so với cùng kỳ năm trước. Các chỉ số tài chính chính đều ở mức tích cực, 
            cho thấy sức khỏe tài chính tốt của công ty.
          </p>
        </Card>
      </section>
      
      {/* Financial Data Section */}
      <section id="financials">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Số liệu tài chính chính</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Kết quả kinh doanh">
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-600">Doanh thu thuần</span>
                <span className="font-bold text-gray-900">16,234 tỷ VNĐ</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-600">Lợi nhuận gộp</span>
                <span className="font-bold text-gray-900">4,567 tỷ VNĐ</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-600">Lợi nhuận sau thuế</span>
                <span className="font-bold text-green-600">2,456 tỷ VNĐ</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">EPS</span>
                <span className="font-bold text-gray-900">4,230 VNĐ</span>
              </div>
            </div>
          </Card>
          
          <Card title="Cân đối kế toán">
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-600">Tổng tài sản</span>
                <span className="font-bold text-gray-900">45,678 tỷ VNĐ</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-600">Nợ phải trả</span>
                <span className="font-bold text-gray-900">15,234 tỷ VNĐ</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-600">Vốn chủ sở hữu</span>
                <span className="font-bold text-blue-600">30,444 tỷ VNĐ</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Vốn điều lệ</span>
                <span className="font-bold text-gray-900">17,416 tỷ VNĐ</span>
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Financial Ratios Section */}
      <section id="ratios">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Chỉ số tài chính</h2>
        <Card>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-blue-600 mb-2">18.5%</p>
              <p className="text-sm text-gray-600 font-medium">ROE</p>
              <p className="text-xs text-gray-500 mt-1">Suất sinh lời vốn CSH</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-3xl font-bold text-green-600 mb-2">12.3%</p>
              <p className="text-sm text-gray-600 font-medium">ROA</p>
              <p className="text-xs text-gray-500 mt-1">Suất sinh lời tổng TS</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-3xl font-bold text-purple-600 mb-2">2.1</p>
              <p className="text-sm text-gray-600 font-medium">Current Ratio</p>
              <p className="text-xs text-gray-500 mt-1">Tỷ số thanh toán hiện hành</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <p className="text-3xl font-bold text-orange-600 mb-2">0.35</p>
              <p className="text-sm text-gray-600 font-medium">Debt Ratio</p>
              <p className="text-xs text-gray-500 mt-1">Tỷ số nợ</p>
            </div>
          </div>
        </Card>
      </section>
      
      {/* Analysis Section */}
      <section id="analysis">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Phân tích chi tiết</h2>
        <Card>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Điểm mạnh:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Doanh thu tăng trưởng ổn định qua các quý</li>
                <li>Biên lợi nhuận gộp cao (28.1%)</li>
                <li>Tỷ số thanh toán tốt, đảm bảo thanh khoản</li>
                <li>ROE và ROA ở mức cao so với ngành</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Điểm cần cải thiện:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Chi phí vận hành tăng nhẹ</li>
                <li>Cần đa dạng hóa nguồn doanh thu</li>
                <li>Tồn kho tăng so với quý trước</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>
      
      {/* Recommendations Section */}
      <section id="recommendations">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Khuyến nghị</h2>
        <Card>
          <div className="space-y-3">
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
              <p className="font-semibold text-green-900 mb-1">📈 Đầu tư</p>
              <p className="text-sm text-gray-700">
                Với các chỉ số tài chính tích cực và triển vọng tăng trưởng tốt, 
                đây là thời điểm phù hợp để xem xét đầu tư dài hạn.
              </p>
            </div>
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="font-semibold text-blue-900 mb-1">💡 Lưu ý</p>
              <p className="text-sm text-gray-700">
                Theo dõi sát biến động giá nguyên liệu đầu vào và cạnh tranh thị trường 
                có thể ảnh hưởng đến biên lợi nhuận trong các quý tới.
              </p>
            </div>
          </div>
        </Card>
      </section>
    </ReportDetailLayout>
  );
};

export default ReportDetailPage;
