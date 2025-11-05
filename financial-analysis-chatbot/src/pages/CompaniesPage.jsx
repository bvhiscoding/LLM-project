import React, { useState } from 'react';
import CompaniesLayout from '../layouts/CompaniesLayout';
import Input from '../components/Input';
import Card from '../components/Card';
import Badge from '../components/Badge';
import EmptyState from '../components/EmptyState';
import { Search, Building2, MapPin } from 'lucide-react';

const CompaniesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  
  // Mock data
  const companies = [
    { id: 1, name: 'Vinamilk', code: 'VNM', industry: 'Thực phẩm', address: 'TP.HCM', established: 1976 },
    { id: 2, name: 'Viettel', code: 'VTL', industry: 'Viễn thông', address: 'Hà Nội', established: 1989 },
    { id: 3, name: 'FPT Corporation', code: 'FPT', industry: 'Công nghệ', address: 'Hà Nội', established: 1988 },
    { id: 4, name: 'Hòa Phát', code: 'HPG', industry: 'Thép', address: 'Hà Nội', established: 1992 },
    { id: 5, name: 'Vietcombank', code: 'VCB', industry: 'Ngân hàng', address: 'Hà Nội', established: 1963 },
    { id: 6, name: 'Masan Group', code: 'MSN', industry: 'Tiêu dùng', address: 'TP.HCM', established: 2000 },
  ];
  
  const industries = ['all', 'Công nghệ', 'Thực phẩm', 'Ngân hàng', 'Viễn thông', 'Thép', 'Tiêu dùng'];
  
  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || company.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });
  
  const searchBar = (
    <Input
      placeholder="Tìm kiếm theo tên hoặc mã công ty..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      icon={Search}
    />
  );
  
  const filterSection = (
    <div className="flex gap-4 items-center">
      <span className="text-sm font-medium text-gray-700">Lọc theo ngành:</span>
      <div className="flex gap-2 flex-wrap">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => setSelectedIndustry(industry)}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${selectedIndustry === industry
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {industry === 'all' ? 'Tất cả' : industry}
          </button>
        ))}
      </div>
    </div>
  );
  
  return (
    <CompaniesLayout
      searchBar={searchBar}
      filterSection={filterSection}
      onAddCompany={() => alert('Mở modal thêm công ty')}
    >
      {filteredCompanies.length === 0 ? (
        <EmptyState
          icon={Building2}
          title="Không tìm thấy công ty"
          description="Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm"
        />
      ) : (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Hiển thị {filteredCompanies.length} / {companies.length} công ty
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <Card key={company.id} className="hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{company.name}</h3>
                      <p className="text-sm text-gray-600">{company.code}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="info">{company.industry}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    {company.address}
                  </div>
                  <div className="text-sm text-gray-600">
                    Thành lập: {company.established}
                  </div>
                </div>
                
                <button className="w-full py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium">
                  Xem chi tiết
                </button>
              </Card>
            ))}
          </div>
        </>
      )}
    </CompaniesLayout>
  );
};

export default CompaniesPage;
