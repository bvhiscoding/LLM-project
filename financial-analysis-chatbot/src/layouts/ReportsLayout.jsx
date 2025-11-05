import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import { Upload, Grid, List, FileText, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const ReportsLayout = ({ 
  children, 
  searchBar,
  filterSection,
  onUploadReport,
  stats,
  viewMode = 'table',
  onViewModeChange
}) => {
  const breadcrumbs = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Báo cáo', href: '/reports' }
  ];
  
  const defaultStats = [
    { icon: FileText, label: 'Tổng báo cáo', value: stats?.total || '0', color: 'blue' },
    { icon: Clock, label: 'Tháng này', value: stats?.thisMonth || '0', color: 'purple' },
    { icon: CheckCircle, label: 'Hoàn thành', value: stats?.completed || '0', color: 'green' },
    { icon: AlertCircle, label: 'Đang xử lý', value: stats?.processing || '0', color: 'yellow' }
  ];
  
  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Báo cáo tài chính</h1>
          <p className="text-gray-600 mt-1">Quản lý và phân tích báo cáo tài chính</p>
        </div>
        <div className="mt-4 md:mt-0">
          {onUploadReport && (
            <Button onClick={onUploadReport} className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Tải lên báo cáo
            </Button>
          )}
        </div>
      </div>
      
      {/* Stats Summary Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {defaultStats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: 'bg-blue-100 text-blue-600',
            purple: 'bg-purple-100 text-purple-600',
            green: 'bg-green-100 text-green-600',
            yellow: 'bg-yellow-100 text-yellow-600'
          };
          
          return (
            <Card key={index} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${colorClasses[stat.color]}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      
      {/* Action Bar with Search and View Toggle */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 w-full md:w-auto">
            {searchBar}
          </div>
          
          {/* View Mode Toggle */}
          {onViewModeChange && (
            <div className="flex gap-2">
              <button
                onClick={() => onViewModeChange('table')}
                className={`p-2 rounded-lg ${
                  viewMode === 'table' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
              <button
                onClick={() => onViewModeChange('grid')}
                className={`p-2 rounded-lg ${
                  viewMode === 'grid' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Filters Section */}
      {filterSection && (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          {filterSection}
        </div>
      )}
      
      {/* Main Content */}
      <div className="w-full">
        {children}
      </div>
    </DashboardLayout>
  );
};

export default ReportsLayout;
