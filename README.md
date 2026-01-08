# 🎭 Seat Booking System

A production-ready seat booking system built with React frontend and Node.js/Express backend with MongoDB persistence. This project implements a complete booking flow with seat selection, validation, real-time price calculation, and data persistence.

## 📋 Project Overview

This is a technical assessment project for **GreenStitch Technologies** that implements a comprehensive seat booking system with:

- **8×10 Seat Grid** with Premium, Standard, and Economy tiers
- **Real-time Validation** with seat continuity rule and max 8 seats limit
- **Tiered Pricing**: Premium (₹1000), Standard (₹750), Economy (₹500)
- **Data Persistence** across page refreshes using MongoDB
- **Modern UI/UX** with premium aesthetics and smooth animations

## 🏗️ Architecture

### Frontend (React)
- **Components**: SeatGrid, BookingModal, StatsPanel
- **State Management**: React hooks (useState, useEffect)
- **Validation**: Seat continuity logic, max seats check
- **Styling**: Modern CSS with gradients, glassmorphism, animations
- **API Integration**: Axios for backend communication

### Backend (Node.js/Express)
- **Database**: MongoDB Atlas
- **Models**: Booking schema with validation
- **Routes**: GET, POST, DELETE endpoints for bookings
- **Middleware**: CORS, error handling, request logging

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Installation

1. **Clone or extract the project**
   ```bash
   cd GreenStitch-Assessment
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure Environment Variables**
   
   The backend `.env` file is already configured with the MongoDB connection:
   ```
   PORT=5000
   MONGO_URI=mongodb+srv://yashamanmeena1:
   NODE_ENV=development
   ```

### Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm start
   ```
   Server will run on http://localhost:5000

2. **Start Frontend (in new terminal)**
   ```bash
   cd frontend
   npm start
   ```
   App will open automatically at http://localhost:3000

## 📖 Features

### Core Functionality
- ✅ Seat selection with visual feedback (Available, Selected, Booked)
- ✅ Real-time price calculation based on seat tiers
- ✅ Live counters for available, selected, and booked seats
- ✅ Maximum 8 seats per booking validation
- ✅ Seat continuity rule enforcement
- ✅ Booking confirmation modal
- ✅ Data persistence across page refreshes
- ✅ Clear selection functionality
- ✅ Reset all bookings

### UI/UX Features
- 🎨 Premium design with modern gradients
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 🎯 Intuitive seat selection interface
- 💡 Real-time feedback and error messages
- 🔄 Loading states during API calls

## 🎯 Validation Rules

### Seat Continuity Rule
Users cannot leave an available seat isolated between selected/booked seats.

**Invalid Pattern**: `[Selected] [Available] [Selected]`
**Valid Pattern**: `[Selected] [Booked] [Selected]` (gaps due to booked seats are allowed)

### Maximum Seats
Users can book a maximum of 8 seats in a single transaction.

## 🛠️ Technical Implementation

### Pricing Logic
```javascript
Premium (Rows A-C): ₹1000 per seat
Standard (Rows D-F): ₹750 per seat
Economy (Rows G-H): ₹500 per seat
```

### API Endpoints
- `GET /api/bookings` - Fetch all booked seats
- `POST /api/bookings` - Create new bookings
- `DELETE /api/bookings/reset` - Reset all bookings
- `GET /api/health` - Health check endpoint

### Database Schema
```javascript
{
  seatId: String (unique),
  row: String,
  column: Number,
  price: Number,
  bookedAt: Date,
  timestamps: true
}
```

## 🧪 Testing

The application includes data-testid attributes for automated Playwright testing as required by GreenStitch's assessment.

### Manual Testing Checklist
- [ ] Seat selection and deselection
- [ ] Price calculation accuracy
- [ ] Real-time counter updates
- [ ] 8-seat limit validation
- [ ] Seat continuity rule enforcement
- [ ] Booking confirmation flow
- [ ] Data persistence after refresh
- [ ] Clear selection functionality
- [ ] Reset all bookings
- [ ] Responsive design on mobile

## 📦 Project Structure

```
GreenStitch-Assessment/
├── backend/
│   ├── models/
│   │   └── Booking.js
│   ├── routes/
│   │   └── bookings.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SeatGrid.jsx
│   │   │   ├── BookingModal.jsx
│   │   │   └── StatsPanel.jsx
│   │   ├── styles/
│   │   │   ├── SeatBooking.css
│   │   │   ├── SeatGrid.css
│   │   │   ├── BookingModal.css
│   │   │   └── StatsPanel.css
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   └── validation.js
│   │   ├── SeatBooking.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── .gitignore
└── README.md
```

## 🎨 Design Decisions

1. **Component Architecture**: Separated concerns with reusable components (SeatGrid, Modal, Stats)
2. **Validation Logic**: Centralized in utils for maintainability and testability
3. **State Management**: Used React hooks for simplicity and performance
4. **Styling**: Custom CSS with CSS variables for consistency and theming
5. **Error Handling**: User-friendly messages with auto-dismiss notifications
6. **API Design**: RESTful endpoints with proper HTTP status codes
7. **Database**: MongoDB for flexible schema and easy scalability

## 🔐 Production Readiness

- ✅ Environment variables for sensitive data
- ✅ Error handling and logging
- ✅ Loading states for async operations
- ✅ Input validation on frontend and backend
- ✅ Responsive design for all devices
- ✅ Graceful database connection handling
- ✅ CORS configuration for security
- ✅ Clean code with comments

## 🙏 Acknowledgments

Created as part of the Frontend Technical Assessment for **GreenStitch Technologies PVT. LTD.**

---

**Note**: This project is part of a technical assessment and should not be uploaded to any public repository as per the assessment guidelines.
