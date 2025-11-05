import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

const UploadLayout = ({ 
  children,
  currentStep = 1,
  totalSteps = 3,
  onBack,
  onNext,
  onCancel,
  isNextDisabled = false,
  isLastStep = false,
  showProgress = true
}) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {onCancel && (
                <button
                  onClick={onCancel}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span className="hidden sm:inline">Hủy</span>
                </button>
              )}
              <div>
                <h1 className="text-xl font-bold text-gray-900">Tải lên báo cáo tài chính</h1>
                <p className="text-sm text-gray-600 hidden sm:block">
                  Bước {currentStep} / {totalSteps}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content - Centered Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        {showProgress && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div
                    className={`
                      flex items-center justify-center w-10 h-10 rounded-full font-semibold
                      ${
                        step < currentStep
                          ? 'bg-green-500 text-white'
                          : step === currentStep
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }
                    `}
                  >
                    {step < currentStep ? '✓' : step}
                  </div>
                  {step < totalSteps && (
                    <div
                      className={`
                        flex-1 h-1 mx-2
                        ${step < currentStep ? 'bg-green-500' : 'bg-gray-200'}
                      `}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
        
        {/* Step Indicator Labels */}
        <div className="flex justify-between mb-6 text-sm">
          <div className={`flex-1 text-center ${currentStep === 1 ? 'font-semibold text-blue-600' : 'text-gray-600'}`}>
            Chọn công ty
          </div>
          <div className={`flex-1 text-center ${currentStep === 2 ? 'font-semibold text-blue-600' : 'text-gray-600'}`}>
            Tải file lên
          </div>
          <div className={`flex-1 text-center ${currentStep === 3 ? 'font-semibold text-blue-600' : 'text-gray-600'}`}>
            Xác nhận
          </div>
        </div>
        
        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            {children}
          </div>
          
          {/* Footer with Navigation Buttons */}
          <div className="bg-gray-50 px-8 md:px-12 py-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                {onBack && currentStep > 1 && (
                  <Button
                    variant="outline"
                    onClick={onBack}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Quay lại
                  </Button>
                )}
              </div>
              
              <div className="flex gap-3">
                {onCancel && (
                  <Button variant="ghost" onClick={onCancel}>
                    Hủy
                  </Button>
                )}
                {onNext && (
                  <Button
                    onClick={onNext}
                    disabled={isNextDisabled}
                    className="min-w-[120px]"
                  >
                    {isLastStep ? 'Hoàn thành' : 'Tiếp tục'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Helper Text */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Cần hỗ trợ? <a href="/help" className="text-blue-600 hover:text-blue-700">Liên hệ chúng tôi</a></p>
        </div>
      </div>
    </div>
  );
};

export default UploadLayout;
