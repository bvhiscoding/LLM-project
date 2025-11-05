import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnalysisLayout from '../layouts/AnalysisLayout';
import AnalysisFiltersSidebar from '../layouts/AnalysisFiltersSidebar';
import AnalysisHeader from '../layouts/AnalysisHeader';
import AnalysisContentGrid from '../layouts/AnalysisContentGrid';
import AnalysisInsightsPanel from '../layouts/AnalysisInsightsPanel';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { TrendingUp, Building2, Calendar, ArrowRight } from 'lucide-react';

const AnalysisPage = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('latest');
  const [loading, setLoading] = useState(false);
  
  // Mock analyses data
  const mockAnalyses = [
    {
      id: 1,
      title: 'Phân tích xu hướng tăng trưởng Q4 2024',
      type: 'trend',
      company: 'Vinamilk',
      companies: ['Vinamilk'],
      date: '2024-01-15',
      period: 'Q4 2024',
      summary: 'Doanh thu tăng 15% so với cùng kỳ, biên lợi nhuận cải thiện đáng kể nhờ tối ưu hóa chi phí.',
      revenue: '5.2B',
      profit: '850M',
      roe: '18.5%',
      pe: '15.2',
      status: 'completed',
      metrics: {
        revenue: '+15%',
        profit: '+22%',
        roe: '18.5%',
        roa: '12.3%'
      }
    },
    {
      id: 2,
      title: 'So sánh hiệu suất ngành công nghệ',
      type: 'comparison',
      company: 'FPT, VNG, CMC',
      companies: ['FPT', 'VNG', 'CMC'],
      date: '2024-01-12',
      period: 'Q4 2024',
      summary: 'FPT dẫn đầu với tốc độ tăng trưởng 28%, vượt trội so với các đối thủ cạnh tranh trong cùng phân khúc.',
      revenue: '8.5B',
      profit: '1.2B',
      roe: '22.3%',
      pe: '16.8',
      status: 'completed',
      metrics: {
        revenue: '+28%',
        profit: '+32%',
        roe: '22.3%',
        marketShare: '35%'
      }
    },
    {
      id: 3,
      title: 'Phân tích tỷ số tài chính Vietcombank',
      type: 'ratio',
      company: 'Vietcombank',
      companies: ['Vietcombank'],
      date: '2024-01-10',
      period: 'Năm 2024',
      summary: 'Các chỉ số thanh khoản và khả năng sinh lời đều ở mức tốt. ROE đạt 21.3%, cao hơn trung bình ngành.',
      revenue: '45.8B',
      profit: '12.5B',
      roe: '21.3%',
      pe: '12.5',
      status: 'completed',
      metrics: {
        roa: '1.8%',
        roe: '21.3%',
        npl: '0.9%',
        car: '12.5%'
      }
    },
    {
      id: 4,
      title: 'Dự báo tăng trưởng Hòa Phát 2025',
      type: 'performance',
      company: 'Hòa Phát',
      companies: ['Hòa Phát'],
      date: '2024-01-08',
      period: 'Dự báo 2025',
      summary: 'Triển vọng tích cực với sự phục hồi của ngành thép. Dự kiến tăng trưởng doanh thu 20-25%.',
      revenue: '120B',
      profit: '15B',
      roe: '16.8%',
      pe: '8.5',
      status: 'in-progress',
      metrics: {
        revenue: '+20-25%',
        profit: '+18%',
        capacity: '8M tấn',
        export: '+35%'
      }
    },
    {
      id: 5,
      title: 'Phân tích ngành bán lẻ Việt Nam',
      type: 'trend',
      company: 'Mobile World, FPT Retail',
      companies: ['Mobile World', 'FPT Retail'],
      date: '2024-01-05',
      period: 'Q4 2024',
      summary: 'Ngành bán lẻ điện tử phục hồi mạnh sau đại dịch. Mobile World duy trì vị thế dẫn đầu thị trường.',
      revenue: '32B',
      profit: '2.8B',
      roe: '24.5%',
      pe: '18.2',
      status: 'completed',
      metrics: {
        revenue: '+18%',
        stores: '3000+',
        marketShare: '45%',
        online: '+65%'
      }
    },
    {
      id: 6,
      title: 'Đánh giá tác động lạm phát lên doanh nghiệp',
      type: 'comparison',
      company: 'Đa ngành',
      companies: ['Vinamilk', 'FPT', 'Hòa Phát', 'Vietcombank'],
      date: '2024-01-03',
      period: 'Q3-Q4 2024',
      summary: 'Phân tích tác động của lạm phát đến biên lợi nhuận và chiến lược định giá của các doanh nghiệp.',
      revenue: '180B',
      profit: '25B',
      roe: '19.2%',
      pe: '14.8',
      status: 'completed',
      metrics: {
        inflation: '4.5%',
        costIncrease: '+8%',
        priceAdjust: '+6%',
        marginImpact: '-1.2%'
      }
    }
  ];
  
  const handleApplyFilters = (filters) => {
    console.log('Applied filters:', filters);
    // Apply filters logic here
  };
  
  const handleClearFilters = () => {
    console.log('Filters cleared');
    // Clear filters logic here
  };
  
  const handleGenerateAnalysis = () => {
    navigate('/analysis/new');
  };
  
  const getTypeBadge = (type) => {
    const config = {
      trend: { variant: 'info', text: 'Xu hướng' },
      comparison: { variant: 'warning', text: 'So sánh' },
      ratio: { variant: 'success', text: 'Tỷ số' },
      performance: { variant: 'info', text: 'Hiệu suất' }
    };
    const { variant, text } = config[type] || { variant: 'gray', text: type };
    return <Badge variant={variant}>{text}</Badge>;
  };
  
  const getStatusBadge = (status) => {
    const config = {
      completed: { variant: 'success', text: 'Hoàn thành' },
      'in-progress': { variant: 'warning', text: 'Đang xử lý' },
      pending: { variant: 'gray', text: 'Chờ xử lý' }
    };
    const { variant, text } = config[status] || { variant: 'gray', text: status };
    return <Badge variant={variant}>{text}</Badge>;
  };
  
  return (
    <>
      <AnalysisLayout
        showFilters={true}
        filtersSidebar={
          <AnalysisFiltersSidebar
            onApplyFilters={handleApplyFilters}
            onClearFilters={handleClearFilters}
          />
        }
      >
        <AnalysisHeader
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onGenerateAnalysis={handleGenerateAnalysis}
          sortBy={sortBy}
          onSortChange={setSortBy}
          stats={{
            total: '48',
            thisMonth: '12',
            avgPerformance: '85%'
          }}
        />
        
        <AnalysisContentGrid
          loading={loading}
          isEmpty={mockAnalyses.length === 0}
          layout={viewMode === 'grid' ? 'grid' : 'masonry'}
          columns={2}
        >
          {mockAnalyses.map((analysis) => (
            <Card
              key={analysis.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/analysis/${analysis.id}`)}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                    </div>
                    {getTypeBadge(analysis.type)}
                    {getStatusBadge(analysis.status)}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {analysis.title}
                </h3>
                
                <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    <span>{analysis.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{analysis.date}</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                  {analysis.summary}
                </p>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(analysis.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 capitalize">{key}</p>
                      <p className="text-lg font-bold text-gray-900">{value}</p>
                    </div>
                  ))}
                </div>
                
                {/* Action */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/analysis/${analysis.id}`);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium"
                >
                  Xem chi tiết
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Card>
          ))}
        </AnalysisContentGrid>
      </AnalysisLayout>
      
      {/* AI Insights Panel */}
      <AnalysisInsightsPanel
        insights={{
          opportunities: [
            'Biên lợi nhuận gộp tăng 3% so với quý trước',
            'Tỷ lệ tăng trưởng doanh thu vượt trung bình ngành 5%',
            'Dòng tiền hoạt động kinh doanh mạnh mẽ, tăng 18% YoY'
          ],
          risks: [
            'Tỷ lệ nợ/vốn chủ sở hữu cao hơn mức trung bình ngành',
            'Chi phí vận hành tăng nhanh hơn tốc độ tăng trưởng doanh thu'
          ],
          trends: [
            'Xu hướng tăng trưởng ổn định trong 4 quý gần nhất',
            'P/E ratio đang tiệm cận mức trung bình ngành'
          ]
        }}
        keyMetrics={[
          { label: 'Doanh thu', value: '15.2B', change: '+12%', trend: 'up' },
          { label: 'Lợi nhuận', value: '3.8B', change: '+18%', trend: 'up' },
          { label: 'ROE', value: '18.5%', change: '+2.3%', trend: 'up' },
          { label: 'Nợ/Vốn', value: '1.2', change: '-0.1', trend: 'down' }
        ]}
        onCompare={() => navigate('/analysis/compare')}
        onShare={() => console.log('Share')}
        onSave={() => console.log('Save')}
        hasNewInsights={true}
      />
    </>
  );
};

export default AnalysisPage;
