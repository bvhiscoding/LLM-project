import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadLayout from '../layouts/UploadLayout';
import Card from '../components/Card';
import Input from '../components/Input';
import { Upload, FileText, CheckCircle } from 'lucide-react';

const UploadReportPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyId: '',
    file: null,
    period: '',
    year: ''
  });
  
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form
      alert('Báo cáo đã được tải lên thành công!');
      navigate('/reports');
    }
  };
  
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleCancel = () => {
    if (confirm('Bạn có chắc muốn hủy tải lên báo cáo?')) {
      navigate('/reports');
    }
  };
  
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.companyId !== '';
      case 2:
        return formData.file !== null;
      case 3:
        return true;
      default:
        return false;
    }
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <FileText className="h-12 w-12 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Chọn công ty</h2>
              <p className="text-gray-600">Chọn công ty mà bạn muốn tải báo cáo lên</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Công ty <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.companyId}
                  onChange={(e) => setFormData({ ...formData, companyId: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">-- Chọn công ty --</option>
                  <option value="1">Vinamilk (VNM)</option>
                  <option value="2">FPT Corporation (FPT)</option>
                  <option value="3">Viettel (VTL)</option>
                  <option value="4">Hòa Phát (HPG)</option>
                  <option value="5">Vietcombank (VCB)</option>
                </select>
              </div>
              
              <div className="pt-4">
                <button
                  className="w-full py-3 text-blue-600 hover:text-blue-700 font-medium"
                  onClick={() => alert('Mở modal thêm công ty mới')}
                >
                  + Thêm công ty mới
                </button>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div>
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Upload className="h-12 w-12 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Tải file lên</h2>
              <p className="text-gray-600">Hỗ trợ định dạng: PDF, Excel (.xlsx, .xls)</p>
            </div>
            
            <div className="space-y-4">
              {/* Drag & Drop Zone */}
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors cursor-pointer"
                onClick={() => document.getElementById('file-upload').click()}
              >
                {formData.file ? (
                  <div>
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900 mb-2">{formData.file.name}</p>
                    <p className="text-sm text-gray-600">Nhấp để chọn file khác</p>
                  </div>
                ) : (
                  <div>
                    <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900 mb-2">
                      Kéo thả file vào đây hoặc nhấp để chọn
                    </p>
                    <p className="text-sm text-gray-600">
                      Kích thước tối đa: 10MB
                    </p>
                  </div>
                )}
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept=".pdf,.xlsx,.xls"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setFormData({ ...formData, file: e.target.files[0] });
                    }
                  }}
                />
              </div>
              
              {/* Additional Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kỳ báo cáo
                  </label>
                  <select
                    value={formData.period}
                    onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">-- Chọn kỳ --</option>
                    <option value="Q1">Quý 1</option>
                    <option value="Q2">Quý 2</option>
                    <option value="Q3">Quý 3</option>
                    <option value="Q4">Quý 4</option>
                    <option value="YEAR">Cả năm</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Năm
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">-- Chọn năm --</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div>
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Xác nhận thông tin</h2>
              <p className="text-gray-600">Vui lòng kiểm tra lại thông tin trước khi tải lên</p>
            </div>
            
            <Card>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Công ty:</span>
                  <span className="text-gray-900">
                    {formData.companyId === '1' && 'Vinamilk (VNM)'}
                    {formData.companyId === '2' && 'FPT Corporation (FPT)'}
                    {formData.companyId === '3' && 'Viettel (VTL)'}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">File:</span>
                  <span className="text-gray-900">{formData.file?.name || 'N/A'}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Kỳ báo cáo:</span>
                  <span className="text-gray-900">{formData.period || 'N/A'}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-medium text-gray-700">Năm:</span>
                  <span className="text-gray-900">{formData.year || 'N/A'}</span>
                </div>
              </div>
            </Card>
            
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Lưu ý:</strong> Sau khi tải lên, báo cáo sẽ được hệ thống AI xử lý và phân tích. 
                Quá trình này có thể mất vài phút. Bạn sẽ nhận được thông báo khi hoàn thành.
              </p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <UploadLayout
      currentStep={currentStep}
      totalSteps={3}
      onBack={handleBack}
      onNext={handleNext}
      onCancel={handleCancel}
      isNextDisabled={!isStepValid()}
      isLastStep={currentStep === 3}
    >
      {renderStepContent()}
    </UploadLayout>
  );
};

export default UploadReportPage;
