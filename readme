# FRONTEND TASKS - Chi Tiết Từng Bước

## **PHASE 1: SETUP DỰ ÁN**
- [ ] Tạo folder `src/components/` (chứa các component tái sử dụng)
- [ ] Tạo folder `src/pages/` (chứa các trang)
- [ ] Tạo folder `src/layouts/` (chứa layout components)
- [ ] Tạo folder `src/services/` (chứa API calls)
- [ ] Tạo folder `src/utils/` (chứa helper functions)
- [ ] Tạo folder `src/context/` (chứa Context API)
- [ ] Tạo folder `src/assets/` (chứa images, icons)
- [ ] Tạo folder `src/data/` (chứa mock data)

---

## **PHASE 2: COMPONENTS CƠ BẢN**

### Task 2.1: Tạo Button Component
- [ ] Tạo file `src/components/Button.jsx`
- [ ] Tạo component nhận props: children, variant (primary/secondary/danger), size (sm/md/lg), disabled, onClick
- [ ] Style với Tailwind cho từng variant
- [ ] Thêm hover effects và transitions
- [ ] Export component

### Task 2.2: Tạo Input Component
- [ ] Tạo file `src/components/Input.jsx`
- [ ] Props: type, placeholder, value, onChange, label, error, required
- [ ] Hiển thị label phía trên input
- [ ] Hiển thị error message màu đỏ phía dưới (nếu có)
- [ ] Style border màu đỏ khi có error
- [ ] Thêm icon bên trong input (optional)

### Task 2.3: Tạo Card Component
- [ ] Tạo file `src/components/Card.jsx`
- [ ] Props: children, title, className
- [ ] Style: background trắng, shadow, rounded corners, padding
- [ ] Nếu có title thì hiển thị ở header của card
- [ ] Support custom className để override styles

### Task 2.4: Tạo Loading Spinner
- [ ] Tạo file `src/components/LoadingSpinner.jsx`
- [ ] Tạo animated spinner với CSS hoặc SVG
- [ ] Props: size (sm/md/lg), color
- [ ] Center spinner trong container

### Task 2.5: Tạo Modal Component
- [ ] Tạo file `src/components/Modal.jsx`
- [ ] Props: isOpen, onClose, title, children, footer
- [ ] Overlay tối phía sau modal
- [ ] Modal xuất hiện giữa màn hình
- [ ] Nút X để đóng modal
- [ ] Click outside để đóng modal
- [ ] Prevent scroll khi modal mở

### Task 2.6: Tạo Table Component
- [ ] Tạo file `src/components/Table.jsx`
- [ ] Props: columns (array), data (array), onRowClick
- [ ] Render table headers từ columns
- [ ] Render table rows từ data
- [ ] Style: borders, zebra striping, hover effects
- [ ] Responsive: scroll horizontal trên mobile

### Task 2.7: Tạo Toast Notification Setup
- [ ] Tạo file `src/components/ToastProvider.jsx`
- [ ] Wrap app với Toaster từ react-hot-toast
- [ ] Tạo custom toast styles
- [ ] Export helper functions: showSuccess, showError, showWarning

### Task 2.8: Tạo Empty State Component
- [ ] Tạo file `src/components/EmptyState.jsx`
- [ ] Props: icon, title, description, action (button)
- [ ] Hiển thị icon lớn ở giữa
- [ ] Hiển thị message
- [ ] Optional: button để thực hiện action

### Task 2.9: Tạo Badge Component
- [ ] Tạo file `src/components/Badge.jsx`
- [ ] Props: children, variant (success/warning/danger/info)
- [ ] Style: rounded, padding nhỏ, colors theo variant
- [ ] Use case: hiển thị status

### Task 2.10: Tạo Pagination Component
- [ ] Tạo file `src/components/Pagination.jsx`
- [ ] Props: currentPage, totalPages, onPageChange
- [ ] Buttons: Previous, numbers, Next
- [ ] Highlight trang hiện tại
- [ ] Disable buttons khi ở đầu/cuối

---

## **PHASE 3: LAYOUT COMPONENTS**

### Task 3.1: Tạo Header Component
- [ ] Tạo file `src/layouts/Header.jsx`
- [ ] Sticky header ở top
- [ ] Logo bên trái (text hoặc image)
- [ ] Navigation menu ở giữa: Home, Dashboard, Companies, Reports
- [ ] User menu/settings icon bên phải
- [ ] Responsive: hamburger menu cho mobile

### Task 3.2: Tạo Sidebar Component
- [ ] Tạo file `src/layouts/Sidebar.jsx`
- [ ] Fixed sidebar bên trái
- [ ] Menu items với icons: Dashboard, Companies, Reports, Analysis, Settings
- [ ] Highlight menu item đang active
- [ ] Collapsible sidebar (có thể thu gọn)
- [ ] Responsive: hide trên mobile, show khi click hamburger

### Task 3.3: Tạo Footer Component
- [ ] Tạo file `src/layouts/Footer.jsx`
- [ ] Copyright text
- [ ] Links: About, Contact, Terms
- [ ] Social media icons (optional)
- [ ] Stick to bottom nếu content ngắn

### Task 3.4: Tạo MainLayout Component
- [ ] Tạo file `src/layouts/MainLayout.jsx`
- [ ] Combine: Header + Sidebar + Content Area + Footer
- [ ] Content area có padding và max-width
- [ ] Responsive layout
- [ ] Export để wrap các pages

### Task 3.5: Tạo DashboardLayout Component
- [ ] Tạo file `src/layouts/DashboardLayout.jsx`
- [ ] Similar MainLayout nhưng với Sidebar luôn hiển thị
- [ ] Grid layout cho dashboard content
- [ ] Breadcrumbs navigation

Task 3.6: Tạo Companies Page Layout Component

 Tạo file src/layouts/CompaniesLayout.jsx
 Header section với title "Companies Management"
 Container với max-width và center alignment
 Grid layout area cho companies cards
 Sidebar filters (optional) hoặc top filters bar
 Action bar với search và "Add Company" button
 Breadcrumb integration
 Export component để wrap companies pages

Task 3.7: Tạo Reports Page Layout Component

 Tạo file src/layouts/ReportsLayout.jsx
 Header section với title "Financial Reports"
 Filters section ở top: Company, Period, Year, Status
 Main content area cho table hoặc grid view
 Toggle view button: Table view / Card view
 Action bar với search và "Upload Report" button
 Stats summary bar: Total reports, This month, Completed, Processing
 Export component để wrap reports pages

Task 3.8: Tạo Company Detail Layout Component

 Tạo file src/layouts/CompanyDetailLayout.jsx
 Two-column layout: Sidebar (company info) + Main (reports/content)
 Sidebar: Company logo, basic info, quick stats
 Main area: Tabs navigation (Reports, Analysis, Settings)
 Header với company name và action buttons
 Back button to companies list
 Responsive: stack columns trên mobile

Task 3.9: Tạo Report Detail Layout Component

 Tạo file src/layouts/ReportDetailLayout.jsx
 Full-width layout cho detailed view
 Sticky header với report info và actions
 Content sections với proper spacing
 Sidebar cho navigation (optional): Jump to sections
 Print-friendly layout considerations
 Export button section
 Related reports section ở bottom

Task 3.10: Tạo Upload Report Layout Component

 Tạo file src/layouts/UploadLayout.jsx
 Centered card layout
 Max-width container (không full-width)
 Step indicator component ở top
 Progress bar showing completion
 Form sections với clear separation
 Footer với navigation buttons (Back/Next/Submit)
 Background với subtle pattern hoặc gradient

 Task 3.11: Tạo Analysis Page Layout Component

 Tạo file src/layouts/AnalysisLayout.jsx
 Header section với title "Financial Analysis Dashboard"
 Breadcrumb integration: Home > Analysis
 Container với max-width và proper spacing
 Two-column layout: Filters sidebar (25%) + Main content (75%)
 Sticky filters sidebar khi scroll
 Responsive: stack columns trên mobile (filters collapse)
 Export component để wrap analysis pages

Task 3.12: Tạo Analysis Filters Sidebar Component

 Tạo file src/layouts/AnalysisFiltersSidebar.jsx
 Section "Filter Options" với collapsible groups
 Filter group: Time Period (Quarter, Year, Date Range)
 Filter group: Companies (Multi-select với search)
 Filter group: Industry Sectors (Checkboxes)
 Filter group: Metrics (ROE, ROA, Revenue Growth, Profit Margin)
 Filter group: Analysis Type (Trend, Comparison, Ratio Analysis, Performance)
 "Apply Filters" và "Clear All" buttons ở bottom
 Show active filters count badge
 Collapsible trên mobile với toggle button

Task 3.13: Tạo Analysis Header Section Component

 Tạo file src/layouts/AnalysisHeader.jsx
 Page title với icon
 Subtitle: "AI-powered insights and trends"
 View mode toggles: Grid View / Chart View / Table View
 Sort dropdown: Latest, Top Performing, Worst Performing, Custom
 Export options dropdown: PDF, Excel, CSV
 "Generate New Analysis" button (primary CTA)
 Stats summary bar: Total Analyses, This Month, Avg Performance
 Responsive: wrap buttons trên mobile

Task 3.14: Tạo Analysis Content Grid Component

 Tạo file src/layouts/AnalysisContentGrid.jsx
 Grid layout: 2 columns desktop, 1 column mobile
 Support multiple content types: Cards, Charts, Tables
 Masonry layout option cho varied height cards
 Loading skeleton placeholders
 Empty state với illustration và CTA
 Infinite scroll hoặc pagination support
 Smooth transitions khi filter changes

Task 3.15: Tạo Analysis Detail Layout Component

 Tạo file src/layouts/AnalysisDetailLayout.jsx
 Full-width layout với sidebar toggle
 Sticky header với analysis title và metadata
 Header: Analysis type badge, date, company/companies involved
 Action bar: Share, Export, Print, Delete, Regenerate
 Three-section layout:

Summary (Executive Summary card)
Detailed Analysis (Multiple sections với tabs)
Visualizations (Charts gallery)


 Sidebar: Table of Contents (jump links)
 Back button to analysis list
 Related analyses section ở bottom
 Responsive: collapse sidebar, stack sections

Task 3.16: Tạo Analysis Comparison Layout Component

 Tạo file src/layouts/AnalysisComparisonLayout.jsx
 Header: "Compare Financial Analyses"
 Selection bar: Choose 2-4 analyses to compare
 Split-screen layout cho selected analyses
 Synchronized scrolling option
 Comparison controls: Align by metrics, Highlight differences
 Side-by-side cards cho each analysis
 Difference indicators (arrows, colors, percentages)
 Export comparison report button
 Toggle between vertical/horizontal comparison
 Responsive: horizontal scroll trên mobile

Task 3.17: Tạo Analysis Visualization Section Component

 Tạo file src/layouts/AnalysisVisualizationSection.jsx
 Container cho multiple charts
 Grid layout: 2x2 charts
 Chart types: Line, Bar, Pie, Scatter, Heatmap
 Chart controls: Zoom, Pan, Fullscreen, Download
 Legend positioning options
 Responsive chart sizing
 Chart loading states
 Empty chart state với message
 Chart title và description area
 Switch between different chart types

Task 3.18: Tạo Analysis Timeline Layout Component

 Tạo file src/layouts/AnalysisTimelineLayout.jsx
 Vertical timeline cho historical analyses
 Timeline items: Date, Company, Analysis type, Key findings
 Expandable timeline entries
 Visual connection lines giữa events
 Filter by date range slider
 Milestone markers cho significant events
 Scroll to specific date functionality
 Compact view option
 Responsive: simplify timeline trên mobile

Task 3.19: Tạo Analysis Insights Panel Component

 Tạo file src/layouts/AnalysisInsightsPanel.jsx
 Fixed bottom panel (slide up)
 AI-generated insights section
 Key metrics carousel
 Quick actions: Compare, Share, Save, Follow-up
 Minimize/maximize toggle
 Notification dot khi có new insights
 Insights categories tabs: Opportunities, Risks, Trends, Recommendations
 Swipeable trên mobile

Task 3.20: Tạo Analysis Export Preview Layout Component

 Tạo file src/layouts/AnalysisExportPreview.jsx
 Modal layout cho export preview
 Paper-like preview area với margins
 Content sections preview: Cover, Summary, Charts, Tables, Appendix
 Customization options sidebar:

Include/exclude sections (checkboxes)
Logo và branding options
Page orientation (Portrait/Landscape)
Color theme (Color/Grayscale)


 Format selection: PDF, Word, PowerPoint
 Filename input với auto-suggestions
 Download và Cancel buttons
 Loading state khi generating export
 Preview pagination for multi-page exports
---

## **PHASE 4: MOCK DATA**

### Task 4.1: Tạo Mock Data - Companies
- [ ] Tạo file `src/data/mockCompanies.js`
- [ ] Export array 10-15 công ty với fields: id, name, code, industry, address, logo, established
- [ ] Dùng tên công ty Việt Nam thực (VD: Vinamilk, Viettel, FPT)

### Task 4.2: Tạo Mock Data - Financial Reports
- [ ] Tạo file `src/data/mockReports.js`
- [ ] Export array 20 báo cáo với fields: id, companyId, period, year, quarter, uploadDate, status, fileName
- [ ] Status: "processing", "completed", "error"
- [ ] Link với companies qua companyId

### Task 4.3: Tạo Mock Data - Analysis Results
- [ ] Tạo file `src/data/mockAnalysis.js`
- [ ] Export object chứa analysis results cho mỗi report
- [ ] Fields: reportId, summary, detailedAnalysis, financialRatios (ROE, ROA, currentRatio, debtRatio), insights, recommendations
- [ ] Viết content bằng tiếng Việt

### Task 4.4: Tạo Mock Data - Financial Metrics
- [ ] Tạo file `src/data/mockMetrics.js`
- [ ] Export time series data cho biểu đồ
- [ ] Revenue, profit, assets qua các quý/năm
- [ ] Format cho Recharts: array of objects với x, y values

---

## **PHASE 5: PAGES - LANDING & HOME**

### Task 5.1: Tạo Landing Page - Hero Section
- [ ] Tạo file `src/pages/LandingPage.jsx`
- [ ] Hero section với gradient background
- [ ] Heading lớn: "Automated Financial Statement Analysis"
- [ ] Subheading: giải thích ngắn gọn về dự án
- [ ] CTA buttons: "Get Started", "Learn More"
- [ ] Hero image hoặc illustration bên phải

### Task 5.2: Landing Page - Features Section
- [ ] Section "Key Features"
- [ ] Grid 3 columns (responsive)
- [ ] Mỗi feature: icon, title, description
- [ ] Features: "AI-Powered Analysis", "Vietnamese Firms Focus", "Comprehensive Reports", "Easy Upload"
- [ ] Animations khi scroll (optional)

### Task 5.3: Landing Page - How It Works
- [ ] Section "How It Works"
- [ ] 4 steps với numbers
- [ ] Step 1: Upload financial statements
- [ ] Step 2: AI processes data
- [ ] Step 3: Get detailed analysis
- [ ] Step 4: Make informed decisions
- [ ] Visual flow hoặc timeline

### Task 5.4: Landing Page - Stats Section
- [ ] Section với background khác biệt
- [ ] 3-4 số liệu impressive: "500+ Reports Analyzed", "50+ Companies", "95% Accuracy"
- [ ] Animated numbers (counting up effect)

### Task 5.5: Landing Page - CTA & Footer
- [ ] Final CTA section: "Ready to start?"
- [ ] Large button "Start Analyzing Now"
- [ ] Include Footer component
- [ ] Smooth scroll giữa các sections

---

## **PHASE 6: PAGES - DASHBOARD**

### Task 6.1: Dashboard - Stats Cards
- [ ] Tạo file `src/pages/DashboardPage.jsx`
- [ ] Use DashboardLayout
- [ ] Grid 4 cards ở top
- [ ] Cards: Total Companies, Total Reports, Reports This Month, Success Rate
- [ ] Mỗi card: icon, number lớn, label, trend indicator (+/-)
- [ ] Dùng mock data để fill numbers

### Task 6.2: Dashboard - Recent Reports Section
- [ ] Section "Recent Reports"
- [ ] Table component hiển thị 5 reports mới nhất
- [ ] Columns: Company, Period, Upload Date, Status
- [ ] Status badge với colors
- [ ] "View All" button link đến Reports page

### Task 6.3: Dashboard - Chart: Revenue Overview
- [ ] Section "Revenue Overview"
- [ ] Line chart hoặc area chart với Recharts
- [ ] Hiển thị revenue qua 12 tháng
- [ ] Legend, tooltip
- [ ] Responsive chart

### Task 6.4: Dashboard - Chart: Top Companies
- [ ] Section "Top Performing Companies"
- [ ] Bar chart horizontal
- [ ] 5 công ty có ROE cao nhất
- [ ] Company names, ROE values
- [ ] Click bar để xem chi tiết (optional)

### Task 6.5: Dashboard - Quick Actions
- [ ] Sidebar hoặc card "Quick Actions"
- [ ] Buttons: "Upload New Report", "Add Company", "View Analysis"
- [ ] Icons cho mỗi action
- [ ] Navigate đến pages tương ứng khi click

---

## **PHASE 7: PAGES - COMPANIES**

### Task 7.1: Companies Page - Layout & Search
- [ ] Tạo file `src/pages/CompaniesPage.jsx`
- [ ] Page title "Companies Management"
- [ ] Search bar ở top với icon
- [ ] Button "Add New Company" bên phải
- [ ] Use MainLayout hoặc DashboardLayout

### Task 7.2: Companies Page - Filters
- [ ] Filter dropdown: Industry (All, Technology, Finance, Retail, etc.)
- [ ] Filter dropdown: Sort by (Name, Date Added, Industry)
- [ ] Implement filter logic với mock data
- [ ] Show count: "Showing X of Y companies"

### Task 7.3: Companies Page - Companies Grid
- [ ] Grid layout 3-4 columns
- [ ] Mỗi card: company logo (placeholder), name, code, industry
- [ ] Hover effect
- [ ] Click card để xem details
- [ ] Responsive: 1 column trên mobile

### Task 7.4: Companies Page - Add Company Modal
- [ ] Modal với form
- [ ] Fields: Company Name (required), Company Code, Industry (select), Address, Established Year
- [ ] Validation: required fields
- [ ] Cancel và Save buttons
- [ ] Khi save: show toast success, thêm vào mock data (in-memory), đóng modal

### Task 7.5: Company Detail Page
- [ ] Tạo file `src/pages/CompanyDetailPage.jsx`
- [ ] Route: `/companies/:id`
- [ ] Lấy company từ mock data theo id
- [ ] Hiển thị: logo, name, code, industry, address, established
- [ ] Section "Financial Reports" list reports của company này
- [ ] Table với reports
- [ ] Button "Upload New Report" cho company này

### Task 7.6: Company Detail - Edit & Delete
- [ ] Button "Edit Company" mở modal edit
- [ ] Modal edit pre-fill data hiện tại
- [ ] Button "Delete Company" với confirmation
- [ ] Confirmation modal: "Are you sure?"
- [ ] Sau delete: redirect về Companies page

---

## **PHASE 8: PAGES - UPLOAD REPORT**

### Task 8.1: Upload Page - Layout
- [ ] Tạo file `src/pages/UploadReportPage.jsx`
- [ ] Page title "Upload Financial Report"
- [ ] Center content trong page
- [ ] Multi-step wizard layout (3 steps)

### Task 8.2: Upload Page - Step 1: Select Company
- [ ] Step indicator ở top (1/3)
- [ ] Dropdown select company từ list
- [ ] Hoặc option "Add New Company" mở modal
- [ ] Next button (disabled nếu chưa chọn)

### Task 8.3: Upload Page - Step 2: Upload File
- [ ] Step indicator (2/3)
- [ ] Drag & drop zone
- [ ] Hoặc click to browse file
- [ ] Accept: .pdf, .xlsx, .csv
- [ ] Preview file name sau khi chọn
- [ ] File size validation (max 10MB)
- [ ] Remove file button
- [ ] Back và Next buttons

### Task 8.4: Upload Page - Step 3: Report Details
- [ ] Step indicator (3/3)
- [ ] Select Period: Quarter (Q1/Q2/Q3/Q4) hoặc Annual
- [ ] Select Year (dropdown 2020-2025)
- [ ] Optional notes textarea
- [ ] Summary review: Company, File, Period
- [ ] Back và Submit buttons

### Task 8.5: Upload Page - Submission & Success
- [ ] Khi submit: show loading spinner
- [ ] Simulate upload với setTimeout (2-3s)
- [ ] Success: show success modal hoặc toast
- [ ] Success message: "Report uploaded successfully!"
- [ ] Button "View Report" navigate đến report detail
- [ ] Button "Upload Another"

---

## **PHASE 9: PAGES - REPORTS LIST**

### Task 9.1: Reports Page - Layout & Filters
- [ ] Tạo file `src/pages/ReportsPage.jsx`
- [ ] Page title "Financial Reports"
- [ ] Filters: Company (dropdown), Period (All/Q1/Q2/Q3/Q4/Annual), Year, Status
- [ ] Search bar
- [ ] Button "Upload New Report"

### Task 9.2: Reports Page - Table View
- [ ] Table component
- [ ] Columns: ID, Company, Period, Year, Upload Date, Status, Actions
- [ ] Status badge: processing (blue), completed (green), error (red)
- [ ] Actions: View, Delete icons
- [ ] Sort by clicking column headers
- [ ] Pagination at bottom

### Task 9.3: Reports Page - Loading & Empty States
- [ ] Show loading spinner khi "loading"
- [ ] Empty state khi không có reports: icon, message "No reports found", button "Upload First Report"
- [ ] Empty state khi filter không match: "No results", button "Clear Filters"

### Task 9.4: Reports Page - Delete Functionality
- [ ] Click delete icon mở confirmation modal
- [ ] Modal: "Delete this report?", warning message
- [ ] Cancel và Confirm buttons
- [ ] Sau delete: remove từ list, show toast success

---

## **PHASE 10: PAGES - REPORT DETAIL & ANALYSIS**

### Task 10.1: Report Detail Page - Header
- [ ] Tạo file `src/pages/ReportDetailPage.jsx`
- [ ] Route: `/reports/:id`
- [ ] Breadcrumb: Reports > Report Details
- [ ] Company name và logo ở header
- [ ] Report period và year
- [ ] Upload date
- [ ] Status badge

### Task 10.2: Report Detail - Actions Bar
- [ ] Action buttons bar
- [ ] Button "Download PDF"
- [ ] Button "Export Analysis"
- [ ] Button "Compare" (navigate to compare page)
- [ ] Button "Delete Report"

### Task 10.3: Report Detail - Financial Data Section
- [ ] Section "Financial Data"
- [ ] Tabs: Balance Sheet, Income Statement, Cash Flow
- [ ] Table hiển thị các line items và numbers
- [ ] Mock data cho financial statements
- [ ] Format numbers: thêm commas, VND suffix

### Task 10.4: Report Detail - Key Metrics Cards
- [ ] Section "Key Financial Ratios"
- [ ] Grid 4 cards
- [ ] Cards: ROE, ROA, Current Ratio, Debt/Equity Ratio
- [ ] Mỗi card: metric name, value, comparison với industry average (higher/lower)
- [ ] Color coding: green (good), red (bad)

### Task 10.5: Report Detail - Analysis Summary
- [ ] Section "AI Analysis Summary"
- [ ] Card với icon
- [ ] Paragraph text: tóm tắt tình hình tài chính
- [ ] Dùng mock data analysis summary
- [ ] Readable formatting

### Task 10.6: Report Detail - Detailed Analysis
- [ ] Section "Detailed Analysis"
- [ ] Subsections: Revenue Analysis, Profitability, Liquidity, Solvency
- [ ] Mỗi subsection: heading và paragraph analysis
- [ ] Dùng mock data
- [ ] Expandable sections (optional)

### Task 10.7: Report Detail - Insights & Recommendations
- [ ] Section "Key Insights"
- [ ] Bullet list với icon bullets
- [ ] 5-7 insights từ mock data
- [ ] Section "Recommendations"
- [ ] Numbered list recommendations
- [ ] Highlighting important text

### Task 10.8: Report Detail - Charts
- [ ] Chart: Revenue & Profit Trend (line chart)
- [ ] Show 4 quarters hoặc years
- [ ] Chart: Asset Composition (pie chart)
- [ ] Current Assets vs Fixed Assets
- [ ] Responsive charts

### Task 10.9: Report Detail - Related Reports
- [ ] Section "Related Reports" ở bottom
- [ ] Show 3-4 reports cùng company hoặc cùng period
- [ ] Small cards với basic info
- [ ] Click to navigate

---

## **PHASE 11: PAGES - COMPARE REPORTS**

### Task 11.1: Compare Page - Selection
- [ ] Tạo file `src/pages/CompareReportsPage.jsx`
- [ ] Page title "Compare Financial Reports"
- [ ] Interface chọn 2-3 reports
- [ ] Dropdowns hoặc search autocomplete
- [ ] Pre-select reports nếu đến từ report detail
- [ ] Button "Compare" (disabled nếu chưa đủ 2)

### Task 11.2: Compare Page - Side by Side Info
- [ ] Hiển thị info 2-3 reports cạnh nhau
- [ ] Columns: Report 1, Report 2, (Report 3)
- [ ] Rows: Company, Period, Year, Status
- [ ] Visual separation giữa columns

### Task 11.3: Compare Page - Metrics Comparison Table
- [ ] Section "Financial Metrics Comparison"
- [ ] Table với metrics ở rows
- [ ] Values cho mỗi report ở columns
- [ ] Metrics: Revenue, Net Profit, Total Assets, ROE, ROA, Debt Ratio
- [ ] Highlight best value (green) và worst value (red/yellow)
- [ ] Percentage difference giữa reports

### Task 11.4: Compare Page - Trend Chart
- [ ] Section "Trend Comparison"
- [ ] Multi-line chart
- [ ] Mỗi report là 1 line với different color
- [ ] Show revenue hoặc profit qua time
- [ ] Legend, tooltip
- [ ] Toggle metrics: Revenue/Profit/Assets

### Task 11.5: Compare Page - Analysis Comparison
- [ ] Section "AI Analysis Comparison"
- [ ] Side by side paragraphs
- [ ] Summary analysis cho mỗi report
- [ ] Highlight key differences trong text

---

## **PHASE 12: PAGES - SETTINGS**

### Task 12.1: Settings Page - Layout
- [ ] Tạo file `src/pages/SettingsPage.jsx`
- [ ] Page title "Settings"
- [ ] Tabs: General, API Configuration, Preferences

### Task 12.2: Settings - General Tab
- [ ] Form với fields
- [ ] Application Name (readonly)
- [ ] User Name (editable)
- [ ] Email (editable)
- [ ] Save button

### Task 12.3: Settings - API Configuration Tab
- [ ] Explanation text: "Configure your LLM API"
- [ ] Input: API Provider (dropdown: OpenAI, Anthropic, Custom)
- [ ] Input: API Key (password field)
- [ ] Input: Model (dropdown)
- [ ] Test Connection button
- [ ] Save button

### Task 12.4: Settings - Preferences Tab
- [ ] Language selection: Vietnamese, English
- [ ] Theme: Light, Dark (optional)
- [ ] Default currency format
- [ ] Date format
- [ ] Save button

### Task 12.5: Settings - Save & Toast
- [ ] Save button saves to localStorage hoặc state
- [ ] Show toast success: "Settings saved"
- [ ] Load saved settings khi mount

---

## **PHASE 13: CONTEXT & STATE MANAGEMENT**

### Task 13.1: App Context - Setup
- [ ] Tạo file `src/context/AppContext.jsx`
- [ ] Create Context và Provider
- [ ] State: companies, reports, analysisResults
- [ ] Load mock data vào state khi init
- [ ] Export useApp hook

### Task 13.2: App Context - Companies Methods
- [ ] addCompany(company)
- [ ] updateCompany(id, data)
- [ ] deleteCompany(id)
- [ ] getCompanyById(id)
- [ ] Filter/search companies methods

### Task 13.3: App Context - Reports Methods
- [ ] addReport(report)
- [ ] deleteReport(id)
- [ ] getReportById(id)
- [ ] getReportsByCompany(companyId)
- [ ] updateReportStatus(id, status)

### Task 13.4: Settings Context
- [ ] Tạo file `src/context/SettingsContext.jsx`
- [ ] State: apiKey, language, theme, preferences
- [ ] Load từ localStorage
- [ ] Save to localStorage methods
- [ ] Export useSettings hook

### Task 13.5: Wrap App với Contexts
- [ ] Mở `src/main.jsx` hoặc `src/App.jsx`
- [ ] Wrap app với AppProvider
- [ ] Wrap với SettingsProvider
- [ ] Wrap với ToastProvider
- [ ] Test contexts hoạt động

---

## **PHASE 14: ROUTING & NAVIGATION**

### Task 14.1: Setup All Routes
- [ ] Mở `src/router/index.jsx`
- [ ] Define routes cho tất cả pages
- [ ] `/` - LandingPage
- [ ] `/dashboard` - DashboardPage
- [ ] `/companies` - CompaniesPage
- [ ] `/companies/:id` - CompanyDetailPage
- [ ] `/reports` - ReportsPage
- [ ] `/reports/:id` - ReportDetailPage
- [ ] `/reports/upload` - UploadReportPage
- [ ] `/compare` - CompareReportsPage
- [ ] `/settings` - SettingsPage
- [ ] 404 Not Found page

### Task 14.2: Navigation Links
- [ ] Update Header component với NavLinks
- [ ] Active link styling
- [ ] Update Sidebar với NavLinks
- [ ] Test navigation giữa các pages

### Task 14.3: Protected Routes (Optional)
- [ ] Nếu có auth: tạo ProtectedRoute component
- [ ] Redirect to login nếu chưa auth
- [ ] Wrap dashboard routes

### Task 14.4: Breadcrumbs Component
- [ ] Tạo `src/components/Breadcrumbs.jsx`
- [ ] Auto-generate từ current route
- [ ] Hiển thị trong layout
- [ ] Clickable links

---

## **PHASE 15: API SERVICE LAYER**

### Task 15.1: API Config
- [ ] Tạo file `src/services/api.js`
- [ ] Setup axios instance
- [ ] Base URL từ env variable
- [ ] Setup interceptors: request (add token), response (handle errors)

### Task 15.2: Companies API Service
- [ ] Tạo file `src/services/companiesService.js`
- [ ] Methods: fetchCompanies(), fetchCompanyById(id), createCompany(data), updateCompany(id, data), deleteCompany(id)
- [ ] Hiện tại return mock data wrapped trong Promise
- [ ] setTimeout để simulate network delay

### Task 15.3: Reports API Service
- [ ] Tạo file `src/services/reportsService.js`
- [ ] Methods: fetchReports(filters), fetchReportById(id), uploadReport(formData), deleteReport(id)
- [ ] Return mock data với delays

### Task 15.4: Analysis API Service
- [ ] Tạo file `src/services/analysisService.js`
- [ ] Methods: fetchAnalysis(reportId), compareReports(reportIds)
- [ ] Return mock analysis data

### Task 15.5: Use API Services in Components
- [ ] Update pages để use API services thay vì direct mock data
- [ ] Add loading states
- [ ] Add error handling với try-catch
- [ ] Show errors với toast

---

## **PHASE 16: ENHANCEMENTS & POLISH**

### Task 16.1: Loading States
- [ ] Review tất cả pages có API calls
- [ ] Add loading spinner khi fetching
- [ ] Skeleton loading cho tables/cards (optional)
- [ ] Disable buttons khi loading

### Task 16.2: Error Handling
- [ ] Wrap API calls với try-catch
- [ ] Show error toasts với meaningful messages
- [ ] Error boundary component cho React errors
- [ ] Fallback UI khi error

### Task 16.3: Form Validation
- [ ] Review tất cả forms
- [ ] Add validation rules: required, format, length
- [ ] Show error messages below fields
- [ ] Disable submit khi có errors

### Task 16.4: Responsive Design Review
- [ ] Test trên mobile (375px)
- [ ] Test trên tablet (768px)
- [ ] Test trên desktop (1920px)
- [ ] Fix layout issues
- [ ] Hide/adapt components cho mobile

### Task 16.5: Animations & Transitions
- [ ] Add page transition animations
- [ ] Hover effects cho buttons, cards
- [ ] Modal slide-in animation
- [ ] Toast slide-in animation
- [ ] Smooth scroll

### Task 16.6: Accessibility
- [ ] Add alt text cho images
- [ ] Proper heading hierarchy (h1, h2, h3)
- [ ] Focus states cho interactive elements
- [ ] Keyboard navigation
- [ ] ARIA labels where needed

### Task 16.7: Performance Optimization
- [ ] Lazy load pages với React.lazy
- [ ] Memoize expensive components với React.memo
- [ ] Optimize images (compress, webp)
- [ ] Code splitting
- [ ] Remove console.logs

### Task 16.8: Dark Mode (Optional)
- [ ] Add dark mode toggle in settings
- [ ] Define dark color palette
- [ ] Use Tailwind dark: classes
- [ ] Persist preference
- [ ] Smooth transition

---

## **PHASE 17: TESTING & QA**

### Task 17.1: Manual Testing - User Flows
- [ ] Flow: Landing -> Dashboard -> Upload Report -> View Analysis
- [ ] Flow: Add Company -> Upload Report cho company đó
- [ ] Flow: View Reports -> Compare 2 reports
- [ ] Flow: Edit Company -> Delete Company
- [ ] Test tất cả filters, search, pagination

### Task 17.2: Cross-browser Testing
- [ ] Test trên Chrome
- [ ] Test trên Firefox
- [ ] Test trên Safari
- [ ] Test trên Edge
- [ ] Fix compatibility issues

### Task 17.3: Bug List & Fixes
- [ ] Tạo list bugs phát hiện được
- [ ] Prioritize: Critical, High, Medium, Low
- [ ] Fix từng bug
- [ ] Re-test sau fix

### Task 17.4: UI/UX Review
- [ ] Kiểm tra consistency: colors, fonts, spacing
- [ ] Alignment issues
- [ ] Text readability
- [ ] Button sizes, clickable areas
- [ ] Feedback khi user actions
- [ ] Polish UI issues

---

## **PHASE 18: DOCUMENTATION & DEPLOYMENT**

### Task 18.1: Code Documentation
- [ ] Add comments cho complex logic
- [ ] JSDoc comments cho functions
- [ ] Document component props
- [ ] Document context usage


### Task 18.3: Environment Variables
- [ ] Tạo file `.env.example`
- [ ] Document tất cả env variables cần thiết
- [ ] `VITE_API_BASE_URL`
- [ ] `VITE_APP_NAME`
- [ ] Instructions để setup .env

### Task 18.4: Build for Production
- [ ] Chạy `npm run build`
- [ ] Test production build locally: `npm run preview`
- [ ] Check bundle size
- [ ] Verify tất cả assets load correctly
- [ ] Check console for errors

### Task 18.5: Deploy to Vercel
- [ ] Tạo account Vercel (nếu chưa có)
- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Chạy `vercel` trong project folder
- [ ] Follow prompts để deploy
- [ ] Configure environment variables trên Vercel dashboard
- [ ] Test deployed site

### Task 18.6: Deploy to Netlify (Alternative)
- [ ] Tạo account Netlify
- [ ] Connect GitHub repo hoặc drag & drop build folder
- [ ] Configure build settings: `npm run build`, publish: `dist`
- [ ] Add environment variables
- [ ] Deploy và test

### Task 18.7: Custom Domain (Optional)
- [ ] Mua domain nếu muốn
- [ ] Configure DNS settings
- [ ] Add custom domain trong Vercel/Netlify
- [ ] Enable HTTPS

---

## **PHASE 19: ADDITIONAL FEATURES (NICE TO HAVE)**

### Task 19.1: Search Functionality Enhancement
- [ ] Tạo global search component
- [ ] Search bar trong header
- [ ] Search across companies, reports
- [ ] Show suggestions dropdown
- [ ] Navigate to results

### Task 19.2: Data Visualization Dashboard
- [ ] Thêm page "Analytics Dashboard"
- [ ] Industry comparison charts
- [ ] Financial ratios trends
- [ ] Company performance rankings
- [ ] Export charts as images

### Task 19.3: Export Functionality
- [ ] Export report analysis to PDF
- [ ] Export financial data to Excel
- [ ] Use libraries: jsPDF, xlsx
- [ ] Format exported documents nicely
- [ ] Download with proper filename

### Task 19.4: Notifications System
- [ ] Bell icon in header
- [ ] Notifications dropdown
- [ ] Mock notifications: "Report processed", "New company added"
- [ ] Mark as read functionality
- [ ] Notification badge count

### Task 19.5: User Profile Page
- [ ] Page `/profile`
- [ ] Display user info
- [ ] Upload avatar (with preview)
- [ ] Edit profile form
- [ ] Change password section
- [ ] Activity history

### Task 19.6: Advanced Filters
- [ ] Date range picker cho reports
- [ ] Multi-select filters
- [ ] Save filter presets
- [ ] Clear all filters button
- [ ] Show active filters as chips

### Task 19.7: Drag & Drop Reorder
- [ ] Trong dashboard: drag to reorder widgets
- [ ] Use react-beautiful-dnd library
- [ ] Save layout preference
- [ ] Reset to default layout option

### Task 19.8: Keyboard Shortcuts
- [ ] Define shortcuts: Ctrl+K (search), Ctrl+U (upload), etc.
- [ ] Keyboard shortcuts modal (? key)
- [ ] List all shortcuts
- [ ] Implement shortcuts handlers

### Task 19.9: Tour Guide (Product Tour)
- [ ] First-time user tour
- [ ] Use library: react-joyride
- [ ] Highlight key features
- [ ] Step-by-step guide
- [ ] Skip option

### Task 19.10: Localization (i18n)
- [ ] Setup react-i18next
- [ ] Create translation files: en.json, vi.json
- [ ] Wrap text strings với t() function
- [ ] Language switcher in settings
- [ ] Persist language preference

---

## **PHASE 20: ADVANCED UI COMPONENTS**

### Task 20.1: Tabs Component
- [ ] Tạo `src/components/Tabs.jsx`
- [ ] Props: tabs (array), activeTab, onChange
- [ ] Render tab buttons
- [ ] Underline animation cho active tab
- [ ] Render tab content

### Task 20.2: Accordion Component
- [ ] Tạo `src/components/Accordion.jsx`
- [ ] Expandable/collapsible sections
- [ ] Props: items (array with title, content)
- [ ] Chevron icon rotation
- [ ] Smooth height transition

### Task 20.3: Tooltip Component
- [ ] Tạo `src/components/Tooltip.jsx`
- [ ] Hover to show tooltip
- [ ] Props: children, text, position (top/bottom/left/right)
- [ ] Use CSS or library (tippy.js)

### Task 20.4: Progress Bar Component
- [ ] Tạo `src/components/ProgressBar.jsx`
- [ ] Props: percentage, color, showLabel
- [ ] Animated fill
- [ ] Use for upload progress

### Task 20.5: Dropdown Menu Component
- [ ] Tạo `src/components/DropdownMenu.jsx`
- [ ] Click to toggle menu
- [ ] Props: trigger (button), items (array)
- [ ] Close khi click outside
- [ ] Keyboard navigation

### Task 20.6: File Upload Component (Advanced)
- [ ] Tạo `src/components/FileUpload.jsx`
- [ ] Multiple files support
- [ ] Progress bar per file
- [ ] Preview thumbnails
- [ ] Remove individual files
- [ ] File type/size validation

### Task 20.7: Date Picker Component
- [ ] Tạo `src/components/DatePicker.jsx`
- [ ] Calendar popup
- [ ] Use library: react-datepicker
- [ ] Props: value, onChange, minDate, maxDate
- [ ] Format display

### Task 20.8: Rich Text Editor (Optional)
- [ ] Tạo component cho notes/comments
- [ ] Use library: react-quill hoặc slate
- [ ] Basic formatting: bold, italic, lists
- [ ] Save as HTML

---

## **PHASE 21: PERFORMANCE & OPTIMIZATION**

### Task 21.1: Code Splitting Routes
- [ ] Wrap routes với React.lazy
- [ ] Add Suspense với loading fallback
- [ ] Test lazy loading works
- [ ] Check network tab for chunks

### Task 21.2: Memoization
- [ ] Identify expensive computations
- [ ] Use useMemo for calculations
- [ ] Use React.memo for child components
- [ ] Prevent unnecessary re-renders

### Task 21.3: Virtual Scrolling (Optional)
- [ ] Cho long lists (reports, companies)
- [ ] Use library: react-window
- [ ] Render only visible items
- [ ] Improve performance significantly

### Task 21.4: Image Optimization
- [ ] Compress all images
- [ ] Convert to WebP format
- [ ] Use responsive images (srcset)
- [ ] Lazy load images below fold
- [ ] Use library: react-lazy-load-image-component

### Task 21.5: Bundle Analysis
- [ ] Install: `npm install --save-dev vite-plugin-bundle-analyzer`
- [ ] Configure trong vite.config.js
- [ ] Analyze bundle size
- [ ] Identify large dependencies
- [ ] Consider alternatives or code splitting

### Task 21.6: Lighthouse Audit
- [ ] Run Lighthouse in Chrome DevTools
- [ ] Check Performance score
- [ ] Check Accessibility score
- [ ] Check Best Practices score
- [ ] Check SEO score
- [ ] Fix issues reported

---

## **PHASE 22: SECURITY & BEST PRACTICES**

### Task 22.1: Input Sanitization
- [ ] Review all user inputs
- [ ] Sanitize HTML to prevent XSS
- [ ] Use DOMPurify library
- [ ] Validate file types properly

### Task 22.2: Environment Variables Security
- [ ] Never commit .env file
- [ ] Add .env to .gitignore
- [ ] Use VITE_ prefix for exposed variables
- [ ] Document sensitive vs public variables

### Task 22.3: Error Boundaries
- [ ] Tạo `src/components/ErrorBoundary.jsx`
- [ ] Wrap app hoặc major sections
- [ ] Display user-friendly error page
- [ ] Log errors to console (or service)

### Task 22.4: PropTypes or TypeScript (Optional)
- [ ] Add PropTypes to components
- [ ] Install: `npm install prop-types`
- [ ] Define prop types cho mỗi component
- [ ] Or migrate to TypeScript

### Task 22.5: Code Linting
- [ ] Setup ESLint: `npm install eslint --save-dev`
- [ ] Configure .eslintrc
- [ ] Run lint: `npm run lint`
- [ ] Fix linting errors
- [ ] Add pre-commit hook (optional)

### Task 22.6: Git Best Practices
- [ ] Meaningful commit messages
- [ ] Branch strategy: main, develop, feature branches
- [ ] .gitignore: node_modules, .env, dist
- [ ] Small, focused commits
- [ ] Pull requests for features (if team)

---

## **PHASE 23: FINAL TESTING & POLISH**

### Task 23.1: Complete User Journey Testing
- [ ] Test như end-user mới
- [ ] Clear browser cache và localStorage
- [ ] Go through entire flow từ đầu
- [ ] Note any confusion points
- [ ] Fix UX issues

### Task 23.2: Stress Testing
- [ ] Test với large datasets (100+ companies, 500+ reports)
- [ ] Check performance
- [ ] Test pagination với nhiều pages
- [ ] Test filters với nhiều options

### Task 23.3: Edge Cases Testing
- [ ] Empty states: no companies, no reports
- [ ] Error states: failed API calls
- [ ] Long text: company names, descriptions
- [ ] Special characters trong inputs
- [ ] Network offline scenarios

### Task 23.4: Mobile Testing Deep Dive
- [ ] Test trên real mobile devices
- [ ] Touch interactions
- [ ] Scrolling performance
- [ ] Hamburger menu functionality
- [ ] Form inputs on mobile keyboard

### Task 23.5: Final UI Polish
- [ ] Review màu sắc consistency
- [ ] Check spacing (margins, paddings)
- [ ] Font sizes hierarchy
- [ ] Icon consistency
- [ ] Hover states
- [ ] Focus states

### Task 23.6: Content Review
- [ ] Spelling và grammar check
- [ ] Consistent terminology
- [ ] Error messages clear và helpful
- [ ] Empty state messages encouraging
- [ ] Button labels clear

### Task 23.7: Performance Metrics
- [ ] Check page load time
- [ ] Check Time to Interactive
- [ ] Check First Contentful Paint
- [ ] Optimize if needed
- [ ] Target: <3s load time

---

## **PHASE 24: HANDOFF & DOCUMENTATION**

### Task 24.1: Component Documentation
- [ ] Tạo file `COMPONENTS.md`
- [ ] Document each reusable component
- [ ] Props explanation
- [ ] Usage examples
- [ ] Screenshots

### Task 24.2: State Management Documentation
- [ ] Document AppContext structure
- [ ] Available state values
- [ ] Available methods
- [ ] How to use contexts
- [ ] Examples

### Task 24.3: Styling Guide
- [ ] Tạo file `STYLING.md`
- [ ] Color palette với hex codes
- [ ] Typography scale
- [ ] Spacing system
- [ ] Component patterns
- [ ] Tailwind utilities used

### Task 24.4: API Mock Documentation
- [ ] Document mock data structure
- [ ] Explain how to replace với real APIs
- [ ] API endpoints needed từ backend
- [ ] Request/response formats expected

### Task 24.5: Deployment Guide
- [ ] Step-by-step deployment instructions
- [ ] Environment variables needed
- [ ] Build commands
- [ ] Troubleshooting common issues
- [ ] Rollback procedures

### Task 24.6: Future Enhancements List
- [ ] Tạo file `ROADMAP.md`
- [ ] List features chưa implement
- [ ] Backend integration todos
- [ ] Nice-to-have features
- [ ] Known limitations

### Task 24.7: Video Demo (Optional)
- [ ] Record screen walkthrough
- [ ] 5-10 minute demo
- [ ] Show major features
- [ ] Upload to YouTube hoặc Loom
- [ ] Add link to README

---
