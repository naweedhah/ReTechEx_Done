# ReTechExchange

ReTechExchange is a full-stack circular electronics platform for collecting old devices, managing e-waste drop-offs, refurbishing reusable products, and reselling them through an online marketplace.

The project combines customer-facing shopping and appointment booking with admin and staff dashboards for inventory, orders, users, discounts, and operational reporting.

## Overview

Instead of treating unwanted electronics as waste immediately, ReTechExchange supports a longer product lifecycle:

- Customers book e-waste drop-off appointments
- Staff and admins manage incoming devices and branch activity
- Refurbished electronics are added to the marketplace
- Customers browse, wishlist, cart, and purchase reused devices
- The platform supports discounts, PDF reports, and email notifications

## Key Features

- Customer authentication with registration, login, OTP verification, and password reset
- E-waste drop-off appointment booking with branch, date, time slot, and item details
- Refurbished electronics marketplace with category filtering and search
- Product details, cart, wishlist, and checkout flow
- Customer order history and appointment history
- Admin dashboard for users, products, appointments, orders, discounts, and reports
- Staff dashboard for operational monitoring and inventory support
- Product image upload and profile image upload
- PDF generation for orders, appointments, and admin summary reports
- Email support for account and appointment-related flows

## Tech Stack

### Frontend

- React 18
- Vite
- React Router
- Axios
- Tailwind CSS
- Recharts

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT authentication
- Multer for uploads
- Nodemailer
- PDFKit

## Project Structure

```text
ReTechEx_Done/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/          # Customer, admin, and staff pages
│   │   ├── components/     # Shared UI components
│   │   ├── context/        # Auth context
│   │   ├── services/       # API layer
│   │   └── assets/         # Images and branding assets
├── server/                 # Express backend
│   ├── controllers/        # Request handlers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Auth, upload, error handling
│   ├── utils/              # Email, PDF, download helpers
│   └── config/             # Database connection
└── README.md
```

## Main Modules

### Customer Side

- Register and log in
- Edit profile
- Browse the marketplace
- View product details
- Add items to cart and wishlist
- Place orders
- Book and manage e-waste drop-off appointments

### Admin Side

- Manage users and staff
- Manage products and inventory
- Manage orders and appointments
- Create and manage discounts
- View dashboard stats and charts
- Download summary reports

### Staff Side

- Access dashboard stats
- Monitor appointments
- Support inventory and order operations

## Screenshots

Current repository assets include branding and visual preview images. These are being used here as project screenshots/placeholders until full app capture images are added.

### Landing / Brand Preview

![ReTechExchange Brand Preview](client/src/assets/logo.png)

### Marketplace / Promotional Preview

![Marketplace Preview](client/src/assets/pic1.png)

### Circular Tech / Refurbishment Preview

![Refurbishment Preview](client/src/assets/pic2.png)

### Contact / Support Preview

![Contact Preview](client/src/assets/contact_us.png)

If you want, these can later be replaced with actual UI screenshots from:

- Home page
- Marketplace page
- Product details page
- Book appointment page
- Admin dashboard
- Staff dashboard

## Getting Started

### Prerequisites

- Node.js 18 or newer recommended
- npm
- MongoDB running locally or a remote MongoDB connection string

### Installation

### 1. Clone the project

```bash
git clone <your-repository-url>
cd ReTechEx_Done
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Install frontend dependencies

```bash
cd ../client
npm install
```

## Environment Setup

Create a `.env` file inside `server/` based on `server/.env.example`.

Example:

```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/retechex
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:5173

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
EMAIL_FROM=ReTechEx <noreply@retechex.com>

MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads

ADMIN_EMAIL=admin@retechex.com
ADMIN_PASSWORD=admin123
ADMIN_NAME=System Admin
```

Optional frontend environment file in `client/.env`:

```env
VITE_API_URL=http://localhost:3000/api
```

If omitted, the frontend already defaults to `http://localhost:3000/api`.

## Running the Project

### Start the backend

From `server/`:

```bash
npm run dev
```

Backend default URL:

```text
http://localhost:3000
```

### Start the frontend

From `client/`:

```bash
npm run dev
```

Frontend default URL:

```text
http://localhost:5173
```

The Vite dev server proxies `/api` requests to the backend on port `3000`.

## Default Roles

The application supports three roles:

- `customer`
- `admin`
- `staff`

The backend also includes admin creation support through `server/createAdmin.js`.

## Core API Areas

- `/api/auth` for authentication and profile management
- `/api/products` for product browsing and product management
- `/api/cart` for cart operations
- `/api/orders` for customer and admin/staff order flows
- `/api/appointments` for e-waste appointment scheduling and management
- `/api/wishlist` for wishlist operations
- `/api/admin` for dashboard, users, reports, and discount administration
- `/api/staff` for staff dashboard access
- `/api/contact` for contact and support messages

## Notable Workflows

### E-Waste Appointment Flow

1. Customer logs in
2. Customer books a drop-off appointment
3. Staff or admin reviews and updates appointment status
4. Devices can be processed for recycling, repair, or resale

### Marketplace Flow

1. Admin adds refurbished products
2. Customers browse and search products
3. Customers add items to cart or wishlist
4. Orders are placed and tracked through the dashboard

## Output and Reports

The backend includes utilities for generating:

- Order PDFs
- Appointment reports
- Admin summary reports
