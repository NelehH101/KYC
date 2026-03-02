import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KycHome from './Pages/KycHome';
import KycVerification from './Pages/KycVerificaton'; // Watch for that 'i' typo in the filename!

function App() {
  return (
    <Router>
      {/* The Routes component acts as a switch */}
      <Routes>
        {/* URL: yoursite.com/ */}
        <Route path="/" element={<KycHome />} />
        
        {/* URL: yoursite.com/verify */}
        <Route path="/verify" element={<KycVerification />} />
      </Routes>
    </Router>
  );
}

export default App;