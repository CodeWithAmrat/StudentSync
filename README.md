# StudentSync 🎓

A comprehensive MERN stack web application designed to help students manage their academic progress, calculate GPAs, and provide feedback. StudentSync combines modern technology with student-friendly features to streamline academic management.

---

## ✨ Features

### Core Features
- **SGPA Calculator** - Calculate semester GPA based on course grades and credits
- **Grade Improver** - Determine required SGPA to achieve target CGPA
- **Feedback System** - Submit bug reports and suggestions for platform improvement
- **Quick Links** - Easy access to important resources like VTOP Portal
- **Responsive UI** - Fully responsive design that works on all devices

### Student Management Tools
- Dynamic course entry with real-time SGPA calculation
- Support for standard grading scale (S=10, A=9, B=8, C=7, D=6, E=5, F=0)
- Target CGPA tracking with feasibility analysis
- Email notifications for feedback submission

### Technical Features
- RESTful API backend
- MongoDB database with Mongoose ODM
- CORS-enabled for cross-origin requests
- Environment-based configuration
- Production-ready deployment setup

---

## 🛠 Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Programming language

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

### Deployment
- **Vercel** - Frontend hosting
- **Render** - Backend hosting
- **MongoDB Atlas** - Cloud database

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher) - [Download here](https://nodejs.org/)
- npm or yarn - Comes with Node.js
- Git - [Download here](https://git-scm.com/)
- MongoDB (Local or MongoDB Atlas account) - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/CodeWithAmrat/StudentSync.git
cd StudentSync
```

### 2. Backend Setup

Navigate to the server directory:
```bash
cd server
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the `server` directory:
```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/studentsync
NODE_ENV=development
```

Start the backend server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm install -g nodemon
nodemon server.js
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

In a new terminal, navigate to the client directory:
```bash
cd client
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the `client` directory:
```bash
VITE_API_URL=http://localhost:5000
```

Start the development server:
```bash
npm run dev
```

The frontend will typically run on `http://localhost:5173`

---

## 🔐 Environment Variables

### Backend Environment Variables (`.env` in `/server`)

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port number | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/studentsync` or `mongodb+srv://user:password@cluster.mongodb.net/studentsync` |
| `NODE_ENV` | Environment mode | `development` or `production` |

### Frontend Environment Variables (`.env` in `/client`)

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:5000` (dev) or `https://studentsync-ob3k.onrender.com` (production) |

---

## 📦 Project Structure

```
StudentSync/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── QuickLinks.jsx
│   │   │   ├── SGPACalculator.jsx
│   │   │   ├── GradeImprover.jsx
│   │   │   └── FeedbackForm.jsx
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── .env                # Environment variables
│   └── package.json
│
├── server/                 # Express backend
│   ├── models/             # Mongoose schemas
│   │   └── Feedback.js
│   ├── routes/             # API routes
│   │   └── feedbackRoutes.js
│   ├── server.js           # Main server file
│   ├── .env                # Environment variables
│   └── package.json
│
└── README.md
```

---

## 🔌 API Documentation

### Feedback Endpoints

#### POST `/api/feedback`
Submit new feedback to the system.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "issueType": "Bug",
  "message": "The SGPA calculator is showing incorrect results"
}
```

**Response (Success - 201):**
```json
{
  "message": "Feedback saved successfully",
  "feedback": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "issueType": "Bug",
    "message": "The SGPA calculator is showing incorrect results",
    "createdAt": "2026-04-09T10:30:00.000Z",
    "updatedAt": "2026-04-09T10:30:00.000Z"
  }
}
```

#### GET `/api/feedback`
Retrieve all feedback submissions.

**Response (Success - 200):**
```json
{
  "count": 5,
  "feedback": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "issueType": "Bug",
      "message": "The SGPA calculator is showing incorrect results",
      "createdAt": "2026-04-09T10:30:00.000Z",
      "updatedAt": "2026-04-09T10:30:00.000Z"
    }
    // ... more feedback
  ]
}
```

#### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is healthy"
}
```

---

## 📱 Features Overview

### SGPA Calculator
- Add multiple courses dynamically
- Input course names, credits, and grades
- Automatic SGPA calculation
- Real-time GPA updates
- Support for decimal credits

### Grade Improver
- Track current CGPA and completed credits
- Set target CGPA
- Calculate required SGPA for upcoming semester
- Feasibility analysis (impossible SGPAs > 10)
- Clear messaging for achievable goals

### Feedback System
- Submit bug reports or suggestions
- Optional email for follow-up
- Form validation and error handling
- Success confirmation messages
- Real-time feedback storage

### Quick Links
- VTOP Portal access (https://vtop.vitbhopal.ac.in/vtop/open/page)
- Library resources
- Student dashboard
- Feedback submission
- Hover effects and smooth transitions

---

## 🌐 Deployment

### Deploy Frontend to Vercel

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and select your GitHub repository
4. Set build command: `npm run build`
5. Set output directory: `dist`
6. Add environment variable: `VITE_API_URL=https://your-backend-url.onrender.com`
7. Click "Deploy"

### Deploy Backend to Render

1. Push code to GitHub
2. Go to [Render](https://render.com)
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Set build command: `npm install`
6. Set start command: `node server.js`
7. Add environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `PORT`: 5000
   - `NODE_ENV`: production
8. Click "Create Web Service"

### Set Up MongoDB Atlas

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create database user
4. Get connection string
5. Update `MONGODB_URI` in backend `.env`

---

## 🧪 Testing

### Test Locally

1. Start backend: `cd server && npm start`
2. Start frontend: `cd client && npm run dev`
3. Open browser: `http://localhost:5173`
4. Test SGPA Calculator
5. Test Grade Improver
6. Test Feedback Form (should submit to backend)

### Test Production URLs

- Frontend: https://studentsync-plum.vercel.app/
- Backend: https://studentsync-ob3k.onrender.com

---

## 📝 Available Scripts

### Backend (from `/server`)
```bash
npm start           # Start server
npm install         # Install dependencies
npm run dev         # Start with nodemon (auto-reload)
```

### Frontend (from `/client`)
```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
```

---

## 🐛 Troubleshooting

### Backend Issues

**MongoDB Connection Error**
- Ensure MongoDB is running locally or connection string is correct
- Check MongoDB Atlas IP whitelist (allow 0.0.0.0/0 for development)
- Verify credentials in `MONGODB_URI`

**CORS Error**
- Ensure frontend URL matches `cors` origin in `server.js`
- Check that production URLs are properly configured

**Port Already in Use**
- Change `PORT` in `.env` file
- Kill existing process using port 5000

### Frontend Issues

**API Not Connecting**
- Verify `VITE_API_URL` in `.env`
- Check that backend is running
- Ensure CORS is properly configured on backend

**Build Fails**
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear `.vite` cache
- Check for syntax errors in components

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 Author

**Code With Amrat**
- GitHub: [@CodeWithAmrat](https://github.com/CodeWithAmrat)
- Project: [StudentSync Repository](https://github.com/CodeWithAmrat/StudentSync)

---

## 💬 Support

If you encounter any issues or have questions, please [open an issue](https://github.com/CodeWithAmrat/StudentSync/issues) on this repository.

For bug reports and feature requests, you can also use the built-in feedback form directly within the StudentSync application!
For bug reports and feature requests, use the feedback form in the StudentSync application!

---

## 🙏 Acknowledgments

- React and Vite communities for excellent tools
- Tailwind CSS for beautiful styling
- MongoDB for reliable database
- Express.js documentation and community support

---

**Made with ❤️ by Amrat**

Last Updated: April 9, 2026
