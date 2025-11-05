import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import { ChevronRight, Plus } from 'lucide-react';
import Button from '../components/Button';

const CompaniesLayout = ({ 
  children, 
  title = "Quản lý công ty",
  searchBar,
  onAddCompany,
  filterSection,
  actionBar
}) => {
  const breadcrumbs = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Công ty', href: '/companies' }
  ];
  
  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-600 mt-1">Quản lý thông tin các công ty</p>
        </div>
        <div className="mt-4 md:mt-0">
          {onAddCompany && (
            <Button onClick={onAddCompany} className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Thêm công ty mới
            </Button>
          )}
        </div>
      </div>
      
      {/* Action Bar */}
      {(searchBar || actionBar) && (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {searchBar && <div className="flex-1 w-full md:w-auto">{searchBar}</div>}
            {actionBar && <div className="flex gap-2">{actionBar}</div>}
          </div>
        </div>
      )}
      
      {/* Filters Section */}
      {filterSection && (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          {filterSection}
        </div>
      )}
      
      {/* Main Content - Grid Layout */}
      <div className="w-full">
        {children}
      </div>
    </DashboardLayout>
  );
};

export default CompaniesLayout;
