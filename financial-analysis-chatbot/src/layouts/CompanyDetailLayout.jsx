import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import { ArrowLeft, Edit, Trash2, Building2 } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const CompanyDetailLayout = ({ 
  children,
  company,
  onEdit,
  onDelete,
  activeTab = 'reports',
  onTabChange
}) => {
  const navigate = useNavigate();
  
  const breadcrumbs = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Công ty', href: '/companies' },
    { name: company?.name || 'Chi tiết', href: '#' }
  ];
  
  const tabs = [
    { id: 'reports', name: 'Báo cáo', icon: '📊' },
    { id: 'analysis', name: 'Phân tích', icon: '📈' },
    { id: 'settings', name: 'Cài đặt', icon: '⚙️' }
  ];
  
  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      {/* Header with Back Button */}
      <div className="mb-6">
        <button
          onClick={() => navigate('/companies')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Quay lại danh sách công ty
        </button>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            {company?.logo ? (
              <img src={company.logo} alt={company.name} className="h-16 w-16 rounded-lg object-cover" />
            ) : (
              <div className="h-16 w-16 rounded-lg bg-blue-100 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
            )}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{company?.name || 'Công ty'}</h1>
              <p className="text-gray-600 mt-1">{company?.code || 'N/A'} • {company?.industry || 'N/A'}</p>
            </div>
          </div>
          
          <div className="flex gap-2 mt-4 md:mt-0">
            {onEdit && (
              <Button variant="outline" onClick={onEdit} className="flex items-center gap-2">
                <Edit className="h-4 w-4" />
                Chỉnh sửa
              </Button>
            )}
            {onDelete && (
              <Button variant="danger" onClick={onDelete} className="flex items-center gap-2">
                <Trash2 className="h-4 w-4" />
                Xóa
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Company Info */}
        <div className="lg:col-span-1">
          <Card title="Thông tin công ty">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Mã công ty</p>
                <p className="font-semibold text-gray-900">{company?.code || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Ngành</p>
                <p className="font-semibold text-gray-900">{company?.industry || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Địa chỉ</p>
                <p className="font-semibold text-gray-900">{company?.address || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Năm thành lập</p>
                <p className="font-semibold text-gray-900">{company?.established || 'N/A'}</p>
              </div>
            </div>
          </Card>
          
          {/* Quick Stats */}
          <Card title="Thống kê nhanh" className="mt-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Tổng báo cáo</span>
                <span className="font-bold text-gray-900">{company?.totalReports || 0}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Hoàn thành</span>
                <span className="font-bold text-green-600">{company?.completedReports || 0}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Đang xử lý</span>
                <span className="font-bold text-yellow-600">{company?.processingReports || 0}</span>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Main Content Area */}
        <div className="lg:col-span-3">
          {/* Tabs Navigation */}
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex gap-8 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange && onTabChange(tab.id)}
                    className={`
                      py-4 px-1 border-b-2 font-medium text-sm transition-colors
                      ${
                        activeTab === tab.id
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }
                    `}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Tab Content */}
          <div>
            {children}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CompanyDetailLayout;
