# MiniStoreX - Shop Management System

MiniStoreX is a comprehensive and modern Shop Management System designed specifically for small and medium businesses in Sri Lanka. It streamlines daily operations including Point of Sale (POS), inventory tracking, customer management, and credit (Naya) handling.

Built with performance and user experience in mind, MiniStoreX provides business owners with the tools they need to grow their business efficiently.

## 🚀 Key Features

- **Point of Sale (POS)**: Fast and intuitive billing interface for quick checkout.
- **Inventory Management**: Track stock levels, products, and receive low stock alerts.
- **Customer Management**: Maintain customer profiles and purchase history.
- **Credit (Naya) Ledger**: Built-in system to manage customer credit, payments, and outstanding balances – essential for local businesses.
- **Multi-Store & Multi-Location**: Manage multiple shops or branches from a single dashboard.
- **Reports & Analytics**: Visual insights into sales, revenue, and best-selling products.
- **Role-Based Access**: Secure access controls for Admins, Managers, and Cashiers.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **State Management**: React Hooks & Context
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm
- A Supabase project

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ministorex.git
   cd ministorex
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Configure Environment Variables**

   Create a `.env.local` file in the root directory and add your Supabase credentials:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
   ```

4. **Run Database Migrations**

   Ensure your Supabase database schema is up to date by running the SQL migrations found in `supabase/migrations`.

5. **Start the Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `/app`: Next.js App Router pages and layouts.
- `/components`: Reusable UI components (buttons, cards, inputs, etc.).
- `/lib`: Utility functions, API wrappers, and types.
- `/supabase`: Database migrations and configuration.
- `/public`: Static assets.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
