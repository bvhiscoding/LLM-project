import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { ChevronRight } from 'lucide-react';

const DashboardLayout = ({ children, breadcrumbs }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <main 
        className={`
          pt-16 min-h-screen transition-all duration-300
          ${sidebarOpen ? 'lg:pl-64' : 'lg:pl-20'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          {breadcrumbs && (
            <nav className="flex mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
                    )}
                    <a
                      href={crumb.href}
                      className={`
                        text-sm font-medium
                        ${
                          index === breadcrumbs.length - 1
                            ? 'text-gray-700'
                            : 'text-gray-500 hover:text-gray-700'
                        }
                      `}
                    >
                      {crumb.name}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          
          {/* Content */}
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
