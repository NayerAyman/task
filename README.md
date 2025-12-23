# Frontend Task – Next.js  
### Authentication Flow & UI Implementation

A Next.js frontend task focused on implementing a complete authentication flow, correct API integration, and a fully responsive UI based on a provided design mockup.

---

## 📌 Authentication Flow

The following authentication pages are implemented using Next.js:

### 🔐 Register Page
- Full Name  
- Email  
- Password  
- Phone Number  
- Country Code  

### 🔑 Login Page
- Email  
- Password  

### ✅ Verify Account Page
- Verification code input  
- Correct verification code for testing: **123456**

### 🏠 Post-Login Behavior
- Authentication token is stored in `localStorage`
- User is redirected to a Dashboard page displaying:

**Welcome, [User Name]**

---

## 🎨 UI Implementation

- UI implemented according to the provided mockup  
- Pixel-perfect layout, spacing, typography, and colors  
- Fully responsive across desktop and mobile devices  

---

## 🔗 API Integration

- Integrated with the provided Postman Collection  
- Implemented endpoints:
  - Register  
  - Login  
  - Verify Account  
- API requests handled using **Axios**  
- Proper success and error handling implemented  

---

## 🧰 Tech Stack

### Core
- Next.js 16  
- React 19  
- TypeScript  

### Styling
- Tailwind CSS  

### Forms & Validation
- React Hook Form  
- Zod  

### Utilities & UI
- Axios  
- SweetAlert2  
- Swiper  
- React Icons  

---

## ⚙️ Project Scripts

Available npm scripts:

- `dev` – Run the development server  
- `build` – Create a production build  
- `start` – Run the production build  
- `lint` – Run ESLint checks  

---

## 🚀 Setup Instructions

1. Install project dependencies  
2. Run the development server  
3. Open the application in the browser  

---

## 📝 Notes

- Register and Login pages are evaluated mainly on API integration  
- UI implementation is evaluated on design accuracy and responsiveness  
- Task completed within the required **48-hour timeframe**  
