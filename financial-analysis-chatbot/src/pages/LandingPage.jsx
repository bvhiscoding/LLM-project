import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';
import Card from '../components/Card';
import { TrendingUp, BarChart3, FileText, Zap } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Phân tích AI mạnh mẽ',
      description: 'Công nghệ AI tiên tiến giúp phân tích báo cáo tài chính một cách chính xác và nhanh chóng.'
    },
    {
      icon: BarChart3,
      title: 'Tập trung vào doanh nghiệp Việt',
      description: 'Tối ưu hóa cho các công ty Việt Nam với hiểu biết sâu về thị trường địa phương.'
    },
    {
      icon: FileText,
      title: 'Báo cáo toàn diện',
      description: 'Nhận được phân tích chi tiết với các chỉ số tài chính và khuyến nghị cụ thể.'
    },
    {
      icon: Zap,
      title: 'Tải lên dễ dàng',
      description: 'Giao diện đơn giản, chỉ cần tải lên file và nhận kết quả ngay lập tức.'
    }
  ];
  
  const stats = [
    { number: '500+', label: 'Báo cáo đã phân tích' },
    { number: '50+', label: 'Công ty' },
    { number: '95%', label: 'Độ chính xác' },
    { number: '24/7', label: 'Hỗ trợ' }
  ];
  
  const steps = [
    { number: '01', title: 'Tải lên báo cáo tài chính', description: 'Upload file PDF hoặc Excel của báo cáo tài chính' },
    { number: '02', title: 'AI xử lý dữ liệu', description: 'Hệ thống tự động trích xuất và phân tích dữ liệu' },
    { number: '03', title: 'Nhận phân tích chi tiết', description: 'Xem các chỉ số và đánh giá toàn diện' },
    { number: '04', title: 'Đưa ra quyết định sáng suốt', description: 'Sử dụng insights để đưa ra chiến lược kinh doanh' }
  ];
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
            Phân tích Báo cáo Tài chính Tự động
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sử dụng công nghệ AI để phân tích báo cáo tài chính của doanh nghiệp Việt Nam 
            một cách nhanh chóng, chính xác và toàn diện.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/dashboard">
              <Button size="lg">Bắt đầu ngay</Button>
            </Link>
            <Button variant="outline" size="lg">Tìm hiểu thêm</Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tính năng nổi bật</h2>
          <p className="text-lg text-gray-600">Những gì làm cho chúng tôi khác biệt</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center hover:scale-105 transition-transform">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cách thức hoạt động</h2>
          <p className="text-lg text-gray-600">4 bước đơn giản để phân tích báo cáo</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="mb-4 inline-block">
                  <span className="text-6xl font-bold text-blue-200">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-blue-300" />
              )}
            </div>
          ))}
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Sẵn sàng để bắt đầu?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Hãy trải nghiệm sức mạnh của phân tích tài chính tự động ngay hôm nay
        </p>
        <Link to="/dashboard">
          <Button size="lg">Bắt đầu phân tích ngay</Button>
        </Link>
      </section>
    </MainLayout>
  );
};

export default LandingPage;
