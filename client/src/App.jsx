import Navbar from './components/Navbar'
import Footer from './components/Footer'
import QuickLinks from './components/QuickLinks'
import SGPACalculator from './components/SGPACalculator'
import GradeImprover from './components/GradeImprover'
import FeedbackForm from './components/FeedbackForm'
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <QuickLinks />
        <SGPACalculator />
        <GradeImprover />
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
