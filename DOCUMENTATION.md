# MiniStoreX - Features & Technical Documentation

> **Version**: 1.0.0  
> **Last Updated**: February 2026  
> **Status**: In Development

---

## 📋 Table of Contents

1. [Project Overview](#-project-overview)
2. [Features Implemented](#-features-implemented)
3. [Technical Architecture](#-technical-architecture)
4. [Database Schema](#-database-schema)
5. [API Layer](#-api-layer)
6. [UI Components](#-ui-components)
7. [Authentication & Authorization](#-authentication--authorization)
8. [Future Roadmap](#-future-roadmap)

---

## 🎯 Project Overview

**MiniStoreX** is a modern Shop Management System designed for small and medium businesses in Sri Lanka. The application provides comprehensive tools for managing day-to-day retail operations.

### Technology Stack

| Layer             | Technology              | Purpose                         |
| ----------------- | ----------------------- | ------------------------------- |
| **Frontend**      | Next.js 15 (App Router) | Server-side rendering, routing  |
| **Language**      | TypeScript              | Type-safe development           |
| **Styling**       | Tailwind CSS            | Utility-first CSS               |
| **UI Library**    | Shadcn UI               | Pre-built accessible components |
| **Animations**    | Framer Motion           | Smooth transitions              |
| **Backend**       | Supabase                | PostgreSQL database, Auth, RLS  |
| **Icons**         | Lucide React            | Consistent iconography          |
| **Notifications** | Sonner                  | Toast notifications             |

---

## ✨ Features Implemented

### 1. Authentication System

| Feature              | Status  | Description                       |
| -------------------- | ------- | --------------------------------- |
| Email/Password Login | ✅ Done | Secure login with Supabase Auth   |
| User Registration    | ✅ Done | New user sign-up flow             |
| Forgot Password      | ✅ Done | Password reset via email          |
| Password Update      | ✅ Done | Authenticated password change     |
| Session Management   | ✅ Done | Cookie-based session handling     |
| Protected Routes     | ✅ Done | Middleware-based route protection |

**Files:**

- `app/auth/login/page.tsx`
- `app/auth/sign-up/page.tsx`
- `app/auth/forgot-password/page.tsx`
- `components/login-form.tsx`
- `components/sign-up-form.tsx`
- `lib/supabase/middleware.ts`

---

### 2. Dashboard

| Feature          | Status  | Description                                 |
| ---------------- | ------- | ------------------------------------------- |
| Welcome Banner   | ✅ Done | Personalized greeting with alerts           |
| Stats Cards      | ✅ Done | Today's sales, revenue, customers, products |
| Recent Sales     | ✅ Done | Latest transactions list                    |
| Quick Actions    | ✅ Done | Shortcuts to common operations              |
| Low Stock Alerts | ✅ Done | Products needing restock                    |
| Credit Overview  | ✅ Done | Outstanding customer dues (Naya)            |

**Files:**

- `app/dashboard/page.tsx`

---

### 3. Store Management (Admin)

| Feature            | Status  | Description                              |
| ------------------ | ------- | ---------------------------------------- |
| List Stores        | ✅ Done | View all stores with search & pagination |
| Create Store       | ✅ Done | Add new store with full details          |
| View Store Details | ✅ Done | Display store information                |
| Edit Store         | ✅ Done | Update store settings                    |
| Delete Store       | ✅ Done | Soft delete (deactivate)                 |
| Store Options      | ✅ Done | Enable/disable Credit & Stock modules    |

**Files:**

- `app/dashboard/admin/stores/page.tsx` - List
- `app/dashboard/admin/stores/new/page.tsx` - Create
- `app/dashboard/admin/stores/[id]/page.tsx` - View
- `app/dashboard/admin/stores/[id]/edit/page.tsx` - Edit

---

### 4. Location Management (Admin)

| Feature               | Status  | Description                      |
| --------------------- | ------- | -------------------------------- |
| List Locations        | ✅ Done | View locations across stores     |
| Create Location       | ✅ Done | Add branch/warehouse to a store  |
| View Location Details | ✅ Done | Display location information     |
| Edit Location         | ✅ Done | Update location settings         |
| Delete Location       | ✅ Done | Soft delete (deactivate)         |
| Parent Store Link     | ✅ Done | Each location belongs to a store |

**Files:**

- `app/dashboard/admin/locations/page.tsx` - List
- `app/dashboard/admin/locations/new/page.tsx` - Create
- `app/dashboard/admin/locations/[id]/page.tsx` - View
- `app/dashboard/admin/locations/[id]/edit/page.tsx` - Edit

---

### 5. Layouts & Navigation

| Feature            | Status  | Description                              |
| ------------------ | ------- | ---------------------------------------- |
| Responsive Sidebar | ✅ Done | Collapsible navigation with hover expand |
| Mobile Sidebar     | ✅ Done | Slide-out menu for mobile devices        |
| Header             | ✅ Done | User menu, theme toggle                  |
| Dashboard Layout   | ✅ Done | Consistent layout wrapper                |
| Theme Switching    | ✅ Done | Light/Dark mode support                  |

**Files:**

- `components/layout/sidebar.tsx`
- `components/layout/header.tsx`
- `components/layout/dashboard-layout.tsx`
- `components/theme-switcher.tsx`

---

## 🏗️ Technical Architecture

### Project Structure

```
ministorex/
├── app/                          # Next.js App Router
│   ├── auth/                     # Authentication pages
│   │   ├── login/
│   │   ├── sign-up/
│   │   ├── forgot-password/
│   │   ├── confirm/
│   │   └── callback/
│   ├── dashboard/                # Protected dashboard area
│   │   ├── admin/
│   │   │   ├── stores/           # Store CRUD
│   │   │   │   ├── new/
│   │   │   │   └── [id]/
│   │   │   │       └── edit/
│   │   │   └── locations/        # Location CRUD
│   │   │       ├── new/
│   │   │       └── [id]/
│   │   │           └── edit/
│   │   └── page.tsx              # Main dashboard
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
│
├── components/
│   ├── layout/                   # Layout components
│   │   ├── sidebar.tsx
│   │   ├── header.tsx
│   │   └── dashboard-layout.tsx
│   ├── ui/                       # Shadcn UI components (16 total)
│   │   ├── alert.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── checkbox.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── progress.tsx
│   │   ├── scroll-area.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── skeleton.tsx
│   │   ├── toaster.tsx
│   │   └── tooltip.tsx
│   └── providers/                # Context providers
│       └── auth-provider.tsx
│
├── lib/
│   ├── api/                      # API wrapper functions
│   │   └── stores.ts             # Store & Location CRUD
│   ├── supabase/                 # Supabase configuration
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   ├── types/                    # TypeScript definitions
│   │   └── database.ts
│   ├── permissions.ts            # RBAC helpers
│   └── utils.ts                  # Utility functions
│
├── supabase/
│   └── migrations/               # Database migrations (6 files)
│       ├── 001_create_stores_and_locations.sql
│       ├── 002_create_rbac_tables.sql
│       ├── 003_seed_initial_data.sql
│       ├── 004_create_super_admin.sql
│       ├── 005_add_stores_locations_screens.sql
│       └── 006_fix_rls_recursion.sql
│
└── public/
    ├── image/                    # Screenshots
    └── logo/                     # App logo
```

---

## 🗄️ Database Schema

### Core Tables

#### `stores`

| Column                    | Type       | Description        |
| ------------------------- | ---------- | ------------------ |
| `id`                      | UUID       | Primary key        |
| `code`                    | VARCHAR    | Unique store code  |
| `name`                    | VARCHAR    | Store name         |
| `business_type`           | VARCHAR    | Type of business   |
| `address`                 | TEXT       | Physical address   |
| `city`                    | VARCHAR    | City/Town          |
| `phone`                   | VARCHAR    | Contact number     |
| `currency`                | VARCHAR(3) | Default: LKR       |
| `enable_credit`           | BOOLEAN    | Enable Naya module |
| `enable_stock_management` | BOOLEAN    | Enable inventory   |
| `is_active`               | BOOLEAN    | Soft delete flag   |
| `created_at`              | TIMESTAMP  | Creation time      |
| `created_by`              | UUID       | Creator user ID    |
| `modified_at`             | TIMESTAMP  | Last update time   |
| `modified_by`             | UUID       | Modifier user ID   |

#### `locations`

| Column        | Type      | Description           |
| ------------- | --------- | --------------------- |
| `id`          | UUID      | Primary key           |
| `store_id`    | UUID      | Foreign key to stores |
| `code`        | VARCHAR   | Location code         |
| `name`        | VARCHAR   | Location name         |
| `address`     | TEXT      | Physical address      |
| `is_active`   | BOOLEAN   | Soft delete flag      |
| `created_at`  | TIMESTAMP | Creation time         |
| `created_by`  | UUID      | Creator user ID       |
| `modified_at` | TIMESTAMP | Last update time      |
| `modified_by` | UUID      | Modifier user ID      |

### RBAC Tables

| Table                | Purpose                                     |
| -------------------- | ------------------------------------------- |
| `roles`              | Define user roles (Admin, Manager, Cashier) |
| `permissions`        | Define granular permissions                 |
| `role_permissions`   | Map roles to permissions                    |
| `user_roles`         | Assign roles to users                       |
| `user_store_access`  | Grant users access to specific stores       |
| `screens`            | Define UI screens for menu                  |
| `role_screen_access` | Control role access to screens              |

---

## 🔌 API Layer

### Store & Location API (`lib/api/stores.ts`)

| Function                   | Method | Description              |
| -------------------------- | ------ | ------------------------ |
| `getStores(options)`       | GET    | List stores with filters |
| `getStoreById(id)`         | GET    | Get single store         |
| `createStore(data)`        | POST   | Create new store         |
| `updateStore(id, data)`    | PUT    | Update store             |
| `deleteStore(id)`          | DELETE | Soft delete store        |
| `getLocations(options)`    | GET    | List locations           |
| `getLocationById(id)`      | GET    | Get single location      |
| `createLocation(data)`     | POST   | Create new location      |
| `updateLocation(id, data)` | PUT    | Update location          |
| `deleteLocation(id)`       | DELETE | Soft delete location     |

### API Features

- ✅ Pagination support (`limit`, `offset`)
- ✅ Search filtering (`search`)
- ✅ Active-only filtering (`onlyActive`)
- ✅ Store-specific filtering for locations (`storeId`)
- ✅ Automatic user tracking (`created_by`, `modified_by`)
- ✅ Soft deletes (sets `is_active = false`)

---

## 🎨 UI Components

### Shadcn UI Components Installed (16)

| Component      | Usage                  |
| -------------- | ---------------------- |
| `Alert`        | Warning/info messages  |
| `Avatar`       | User profile images    |
| `Badge`        | Status indicators      |
| `Button`       | Actions and navigation |
| `Card`         | Content containers     |
| `Checkbox`     | Toggle options         |
| `DropdownMenu` | Action menus           |
| `Input`        | Form text inputs       |
| `Label`        | Form labels            |
| `Progress`     | Stock level bars       |
| `ScrollArea`   | Scrollable regions     |
| `Separator`    | Visual dividers        |
| `Sheet`        | Slide-out panels       |
| `Skeleton`     | Loading placeholders   |
| `Toaster`      | Toast notifications    |
| `Tooltip`      | Hover hints            |

### Custom Layout Components

| Component         | Description                     |
| ----------------- | ------------------------------- |
| `Sidebar`         | Animated collapsible navigation |
| `MobileSidebar`   | Touch-friendly slide menu       |
| `Header`          | Top bar with user actions       |
| `DashboardLayout` | Main layout wrapper             |

---

## 🔐 Authentication & Authorization

### Authentication Flow

1. User visits protected route → Middleware checks session
2. No session → Redirect to `/auth/login`
3. User logs in → Supabase creates session cookie
4. Session cookie validated on each request
5. Logged-in user visits auth pages → Redirect to `/dashboard`

### Session Handling

- Cookie-based sessions using `@supabase/ssr`
- Automatic token refresh
- Secure HTTP-only cookies

### Row Level Security (RLS)

- All database tables have RLS enabled
- Policies ensure users only access authorized data
- Fixed infinite recursion in RLS policies (migration 006)

---

## 🚀 Future Roadmap

### Phase 2 - Core Modules

| Module              | Priority | Status     |
| ------------------- | -------- | ---------- |
| Products            | High     | 🔜 Planned |
| Customers           | High     | 🔜 Planned |
| Point of Sale (POS) | High     | 🔜 Planned |
| Credit/Naya Ledger  | High     | 🔜 Planned |

### Phase 3 - Advanced Features

| Feature           | Priority | Status     |
| ----------------- | -------- | ---------- |
| Sales Reports     | Medium   | 🔜 Planned |
| Inventory Reports | Medium   | 🔜 Planned |
| User Management   | Medium   | 🔜 Planned |
| Role Management   | Medium   | 🔜 Planned |

### Phase 4 - Enhancements

| Feature                        | Priority | Status     |
| ------------------------------ | -------- | ---------- |
| Multi-language (Sinhala/Tamil) | Low      | 🔜 Planned |
| Receipt Printing               | Low      | 🔜 Planned |
| Barcode Scanning               | Low      | 🔜 Planned |
| Offline Mode                   | Low      | 🔜 Planned |

---

## 📊 Summary Statistics

| Category                | Count |
| ----------------------- | ----- |
| **Pages**               | 15+   |
| **UI Components**       | 16    |
| **Layout Components**   | 4     |
| **API Functions**       | 10    |
| **Database Migrations** | 6     |
| **Database Tables**     | 8+    |

---

<p align="center">
  <strong>MiniStoreX</strong> - Built with ❤️ for Sri Lankan Small Businesses
</p>
