# Cox's SeaSide Bike

![Logo](https://i.ibb.co/pwXGxFY/logo-no-background.png)

## Overview

Cox's SeaSide Bike is a comprehensive platform for bike rentals in the Cox's Bazar area. It provides users with an easy way to browse, book, and manage bike rentals. The platform is designed with both regular users and administrators in mind, offering a seamless experience for all.

## Core Features

### 1. Navbar & Footer

- **Navbar:**
  - Logo linked to the home page.
  - Menu items: Home, About Us, Bike List, Manage Bikes (Admin), User Profile.
  - Authentication links: "Login/Sign Up" for guests, "Logout" for logged-in users.
- **Footer:**
  - Social media icons linking to the platform's profiles.
  - Website links: Privacy Policy, Terms of Service, Contact Us.

### 2. Home Page

- **Hero Section:**
  - Background image or video related to bikes.
  - Call-to-action and search bar for bike availability.
- **Featured Section:**
  - Displays available bikes with images, brand names, and a "View Detail" button.
- **Why Choose Us:**
  - Highlights competitive pricing, wide selection, and excellent customer service.
- **Testimonials:**
  - Quotes from satisfied customers.
- **Coupons & Discounts:**
  - Showcases current promotions, discounts, and coupon codes.

### 3. User Authentication

- **Sign Up & Login Pages:**
  - Users can create an account or log in.
  - Role-based access control with default "USER" and an initial "ADMIN" role.
- **Protected Routes:**
  - Certain pages are accessible only to logged-in users or admins.

### 4. User Profile Management

- **Profile Page:**
  - Displays user details like Name, Email, Phone, and Address.
  - Allows users to update their profile information.

### 5. Bike Management

- **Bike Listing Page:**
  - Lists available bikes with details like brand, model, price, and availability.
  - Includes filters to narrow down bike options.
- **Bike Detail Page:**
  - Detailed information about selected bikes.
  - "Book Now" button redirects to the booking process.

### 6. Rental Management

- **Booking Process:**
  - Users can book bikes by selecting a start time.
  - Payment via AmarPay with an advance payment of Tk 100.
  - Successful payment confirms the booking and updates bike availability.
- **My Rentals Page:**
  - Users can view and manage rentals with "Paid" and "Unpaid" tabs.
  - The "Pay" button for unpaid rentals redirects to AmarPay.

### 7. Admin Features (Private for Admin Only)

- **Bike Management:**
  - Admins can create, update, or delete bikes with prefilled forms for editing.
- **User Management:**
  - Admins can delete users or promote them to "ADMIN" role.
- **Return Bike:**
  - Admins can manage the return process and update rental statuses.
- **Coupon Management (Bonus):**
  - Admins can create and manage coupon codes.

### 8. Payment Integration

- **AmarPay:**
  - Integrated AmarPay as the payment gateway for processing payments securely.

## Tech Stack

### Client

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Server

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)
![mongoose](https://img.shields.io/badge/Mongoose-563D7C?style=for-the-badge&logo=mongoose&logoColor=white)

## Backend Repository

- [Cox's SeaSide Bike Backend](https://github.com/Abir191197/Bike-rental-service-Backend)

## Deployment

To run this project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/your-repo-link.git

# Navigate to the project directory
cd coxs-seaside-bike

# Install dependencies
npm install

# Run the development server
npm run dev
```

## Support

For support, email ardhrubo908@gmail.com

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
