import React, { useState } from 'react';
import CompanyDetailLayout from '../layouts/CompanyDetailLayout';
import Table from '../components/Table';
import Badge from '../components/Badge';
import Card from '../components/Card';

const CompanyDetailPage = () => {
  const [activeTab, setActiveTab] = useState('reports');
  
  // Mock company data
  const company = {
    id: 1,
    name: 'Vinamilk',
    code: 'VNM',
    industry: 'Thực phẩm & Đồ uống',
    address: '10 Tân Trào, P. Tân Phú, Q.7, TP.HCM',
    established: 1976,
    totalReports: 24,
    completedReports: 22,
    processingReports: 2
  };
  
  // Mock reports data
  const reports = [
    { id: 1, period: 'Q3 2024', uploadDate: '15/10/2024', status: 'completed', revenue: '16,234' },
    { id: 2, period: 'Q2 2024', uploadDate: '15/07/2024', status: 'completed', revenue: '15,892' },
    { id: 3, period: 'Q1 2024', uploadDate: '15/04/2024', status: 'completed', revenue: '14,567' },
  ];
  
  const getStatusBadge = (status) => {
    const config = {
      completed: { variant: 'success', text: 'Hoàn thành' },
      processing: { variant: 'warning', text: 'Đang xử lý' }
    };
    const { variant, text } = config[status];
    return <Badge variant={variant}>{text}</Badge>;
  };
  
  const columns = [
    { header: 'Kỳ báo cáo', accessor: 'period' },
    { header: 'Ngày tải lên', accessor: 'uploadDate' },
    { 
      header: 'Trạng thái', 
      render: (row) => getStatusBadge(row.status)
    },
    { header: 'Doanh thu (tỷ VNĐ)', accessor: 'revenue' }
  ];
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'reports':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Danh sách báo cáo</h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Tải lên báo cáo mới
              </button>
            </div>
            <Table 
              columns={columns} 
              data={reports}
              onRowClick={(row) => alert(`Xem chi tiết: ${row.period}`)}
            />
          </div>
        );
      
      case 'analysis':
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Phân tích tổng quan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Doanh thu qua các quý">
                <div className="h-64 flex items-center justify-center text-gray-500">
                  [Biểu đồ doanh thu]
                </div>
              </Card>
              <Card title="Lợi nhuận qua các quý">
                <div className="h-64 flex items-center justify-center text-gray-500">
                  [Biểu đồ lợi nhuận]
                </div>
              </Card>
              <Card title="Chỉ số tài chính" className="md:col-span-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">18.5%</p>
                    <p className="text-sm text-gray-600">ROE</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">12.3%</p>
                    <p className="text-sm text-gray-600">ROA</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">2.1</p>
                    <p className="text-sm text-gray-600">Current Ratio</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">0.35</p>
                    <p className="text-sm text-gray-600">Debt Ratio</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Cài đặt công ty</h2>
            <Card>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tên công ty</label>
                  <input 
                    type="text" 
                    defaultValue={company.name}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mã công ty</label>
                  <input 
                    type="text" 
                    defaultValue={company.code}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ngành</label>
                  <input 
                    type="text" 
                    defaultValue={company.industry}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="pt-4">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Lưu thay đổi
                  </button>
                </div>
              </div>
            </Card>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <CompanyDetailLayout
      company={company}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onEdit={() => alert('Chỉnh sửa công ty')}
      onDelete={() => confirm('Bạn có chắc muốn xóa công ty này?')}
    >
      {renderTabContent()}
    </CompanyDetailLayout>
  );
};

export default CompanyDetailPage;
