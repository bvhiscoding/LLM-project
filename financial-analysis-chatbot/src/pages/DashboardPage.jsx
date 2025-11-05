import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Card from '../components/Card';
import { TrendingUp, Building2, FileText, CheckCircle } from 'lucide-react';

const DashboardPage = () => {
  const stats = [
    {
      icon: Building2,
      label: 'Tổng công ty',
      value: '25',
      trend: '+12%',
      trendUp: true
    },
    {
      icon: FileText,
      label: 'Tổng báo cáo',
      value: '148',
      trend: '+8%',
      trendUp: true
    },
    {
      icon: CheckCircle,
      label: 'Báo cáo tháng này',
      value: '23',
      trend: '+23%',
      trendUp: true
    },
    {
      icon: TrendingUp,
      label: 'Tỷ lệ thành công',
      value: '95%',
      trend: '+2%',
      trendUp: true
    }
  ];
  
  const breadcrumbs = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Dashboard', href: '/dashboard' }
  ];
  
  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Tổng quan về hệ thống phân tích tài chính</p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <p className={`text-sm font-medium ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.trend} so với tháng trước
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      
      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card title="Hoạt động gần đây">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <p className="font-medium text-gray-900">Báo cáo Q3 2024 - Vinamilk</p>
                <p className="text-sm text-gray-500">Đã phân tích thành công</p>
              </div>
              <span className="text-sm text-gray-500">2 giờ trước</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <p className="font-medium text-gray-900">Báo cáo Q3 2024 - FPT</p>
                <p className="text-sm text-gray-500">Đang xử lý</p>
              </div>
              <span className="text-sm text-gray-500">5 giờ trước</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-gray-900">Báo cáo Q2 2024 - Viettel</p>
                <p className="text-sm text-gray-500">Đã hoàn thành</p>
              </div>
              <span className="text-sm text-gray-500">1 ngày trước</span>
            </div>
          </div>
        </Card>
        
        <Card title="Thông báo">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="font-medium text-blue-900">Cập nhật hệ thống</p>
              <p className="text-sm text-blue-700 mt-1">Phiên bản mới với nhiều tính năng cải tiến</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="font-medium text-green-900">Báo cáo hoàn thành</p>
              <p className="text-sm text-green-700 mt-1">23 báo cáo đã được phân tích trong tháng này</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
