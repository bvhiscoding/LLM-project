# Financial Analysis Chatbot

Website phân tích báo cáo tài chính tự động sử dụng AI cho các doanh nghiệp Việt Nam.

## 🚀 Công nghệ sử dụng

- **React 18** - UI Library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - CSS Framework
- **React Router** - Routing
- **React Hot Toast** - Notifications
- **Lucide React** - Icons
- **Recharts** - Charts & Visualizations

## 📁 Cấu trúc dự án

```
src/
├── components/      # Components tái sử dụng
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Card.jsx
│   ├── Modal.jsx
│   ├── Table.jsx
│   ├── LoadingSpinner.jsx
│   ├── Badge.jsx
│   ├── Pagination.jsx
│   ├── EmptyState.jsx
│   └── ToastProvider.jsx
├── layouts/        # Layout components
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── Footer.jsx
│   ├── MainLayout.jsx
│   └── DashboardLayout.jsx
├── pages/          # Các trang
│   ├── LandingPage.jsx
│   └── DashboardPage.jsx
├── services/       # API calls
├── utils/          # Helper functions
├── context/        # Context API
├── assets/         # Images, icons
└── data/           # Mock data
```

## 🎯 Tính năng đã hoàn thành

### ✅ Phase 1: Setup dự án
- [x] Cấu trúc thư mục dự án
- [x] Cài đặt dependencies
- [x] Cấu hình Tailwind CSS

### ✅ Phase 2: Components cơ bản
- [x] Button Component (với variants: primary, secondary, danger, outline, ghost)
- [x] Input Component (với label, error validation, icons)
- [x] Card Component (với title và custom styles)
- [x] Loading Spinner (với sizes khác nhau)
- [x] Modal Component (với overlay, animations)
- [x] Table Component (với sorting, hover effects)
- [x] Toast Notifications (success, error, warning)
- [x] Empty State Component
- [x] Badge Component (với color variants)
- [x] Pagination Component

### ✅ Phase 3: Layout Components
- [x] Header Component (sticky, responsive, navigation menu)
- [x] Sidebar Component (collapsible, với icons)
- [x] Footer Component (links, social media)
- [x] MainLayout (cho landing pages)
- [x] DashboardLayout (với sidebar và breadcrumbs)

## 🛠️ Cài đặt & Chạy

```bash
# Di chuyển vào thư mục dự án
cd financial-analysis-chatbot

# Cài đặt dependencies (đã hoàn thành)
npm install

# Chạy development server
npm run dev
```

Sau khi chạy `npm run dev`, truy cập:
- **Local**: http://localhost:5173/
- **Landing Page**: http://localhost:5173/
- **Dashboard**: http://localhost:5173/dashboard

## 📝 Các trang đã xây dựng

1. **Landing Page** (`/`)
   - Hero section với CTA
   - Features section (4 tính năng chính)
   - How it works (4 bước)
   - Stats section
   - Final CTA

2. **Dashboard** (`/dashboard`)
   - Stats cards (4 chỉ số chính)
   - Recent activity
   - Notifications
   - Breadcrumbs navigation

## 🎨 Sử dụng Components

### Button
```jsx
import Button from './components/Button';

<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>
```

### Input
```jsx
import Input from './components/Input';

<Input 
  label="Email"
  type="email"
  placeholder="Enter email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={errors.email}
  required
/>
```

### Card
```jsx
import Card from './components/Card';

<Card title="Card Title">
  Content here
</Card>
```

### Modal
```jsx
import Modal from './components/Modal';

<Modal 
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  footer={<Button>Save</Button>}
>
  Modal content
</Modal>
```

### Toast
```jsx
import { showSuccess, showError } from './components/ToastProvider';

showSuccess('Operation completed!');
showError('Something went wrong!');
```

## 🔜 Các phase tiếp theo

- Phase 4: Mock Data (Companies, Reports, Analysis)
- Phase 5: Landing & Home Pages (hoàn chỉnh)
- Phase 6: Dashboard Pages (charts, widgets)
- Phase 7: Companies Management
- Phase 8: Upload Report
- Phase 9: Analysis Results
- Phase 10: Backend API Integration

## 📄 License

MIT License - Free to use for learning purposes.

## 👨‍💻 Developer

Built with ❤️ for Vietnamese businesses

