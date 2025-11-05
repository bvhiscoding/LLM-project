import React, { useState } from 'react';
import ReportsLayout from '../layouts/ReportsLayout';
import Input from '../components/Input';
import Table from '../components/Table';
import Badge from '../components/Badge';
import { Search } from 'lucide-react';

const ReportsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('table');
  
  // Mock data
  const reports = [
    { id: 1, company: 'Vinamilk', period: 'Q3 2024', uploadDate: '15/10/2024', status: 'completed', fileName: 'VNM_Q3_2024.pdf' },
    { id: 2, company: 'FPT', period: 'Q3 2024', uploadDate: '14/10/2024', status: 'processing', fileName: 'FPT_Q3_2024.xlsx' },
    { id: 3, company: 'Viettel', period: 'Q2 2024', uploadDate: '12/10/2024', status: 'completed', fileName: 'VTL_Q2_2024.pdf' },
    { id: 4, company: 'Hòa Phát', period: 'Q3 2024', uploadDate: '10/10/2024', status: 'completed', fileName: 'HPG_Q3_2024.pdf' },
    { id: 5, company: 'Vietcombank', period: 'Q3 2024', uploadDate: '08/10/2024', status: 'error', fileName: 'VCB_Q3_2024.xlsx' },
  ];
  
  const stats = {
    total: '148',
    thisMonth: '23',
    completed: '132',
    processing: '12'
  };
  
  const getStatusBadge = (status) => {
    const config = {
      completed: { variant: 'success', text: 'Hoàn thành' },
      processing: { variant: 'warning', text: 'Đang xử lý' },
      error: { variant: 'danger', text: 'Lỗi' }
    };
    const { variant, text } = config[status] || { variant: 'info', text: status };
    return <Badge variant={variant}>{text}</Badge>;
  };
  
  const columns = [
    { header: 'Công ty', accessor: 'company' },
    { header: 'Kỳ báo cáo', accessor: 'period' },
    { header: 'Ngày tải lên', accessor: 'uploadDate' },
    { 
      header: 'Trạng thái', 
      render: (row) => getStatusBadge(row.status)
    },
    { header: 'File', accessor: 'fileName' }
  ];
  
  const filteredReports = reports.filter(report =>
    report.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.period.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const searchBar = (
    <Input
      placeholder="Tìm kiếm báo cáo..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      icon={Search}
    />
  );
  
  const filterSection = (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <option value="">Tất cả công ty</option>
        <option value="vinamilk">Vinamilk</option>
        <option value="fpt">FPT</option>
        <option value="viettel">Viettel</option>
      </select>
      
      <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <option value="">Tất cả kỳ</option>
        <option value="q3">Q3 2024</option>
        <option value="q2">Q2 2024</option>
        <option value="q1">Q1 2024</option>
      </select>
      
      <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <option value="">Tất cả năm</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
      </select>
      
      <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <option value="">Tất cả trạng thái</option>
        <option value="completed">Hoàn thành</option>
        <option value="processing">Đang xử lý</option>
        <option value="error">Lỗi</option>
      </select>
    </div>
  );
  
  return (
    <ReportsLayout
      searchBar={searchBar}
      filterSection={filterSection}
      onUploadReport={() => alert('Mở trang upload')}
      stats={stats}
      viewMode={viewMode}
      onViewModeChange={setViewMode}
    >
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-4 text-sm text-gray-600">
          Hiển thị {filteredReports.length} / {reports.length} báo cáo
        </div>
        
        {viewMode === 'table' ? (
          <Table 
            columns={columns} 
            data={filteredReports}
            onRowClick={(row) => alert(`Xem chi tiết báo cáo: ${row.company} - ${row.period}`)}
          />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredReports.map((report) => (
              <div key={report.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{report.company}</h3>
                    <p className="text-sm text-gray-600">{report.period}</p>
                  </div>
                  {getStatusBadge(report.status)}
                </div>
                <p className="text-sm text-gray-600 mb-2">{report.fileName}</p>
                <p className="text-xs text-gray-500">Tải lên: {report.uploadDate}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </ReportsLayout>
  );
};

export default ReportsPage;
