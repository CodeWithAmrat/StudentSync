import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import QuickLinks from './components/QuickLinks'
import LibraryDirectory from './components/LibraryDirectory'
import SGPACalculator from './components/SGPACalculator'
import GradeImprover from './components/GradeImprover'
import FeedbackForm from './components/FeedbackForm'
import './App.css'

// ScrollHandler ensures the page starts at the top when navigating to a new route
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollHandler />
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-8 pb-12">
          <Routes>
            {/* Route 1: The Main Homepage (Quick Links & Feedback) */}
            <Route path="/" element={
              <>
                <QuickLinks />
                <FeedbackForm />
              </>
            } />

            {/* Route 2: The Directory Page */}
            <Route path="/directory" element={
              <div className="py-8">
                <LibraryDirectory />
              </div>
            } />

            {/* Route 3: SGPA Calculator Page */}
            <Route path="/sgpa-calculator" element={
              <div className="py-8">
                <SGPACalculator />
              </div>
            } />

            {/* Route 4: GPA Target Planner Page */}
            <Route path="/gpa-improver" element={
              <div className="py-8">
                <GradeImprover />
              </div>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App