import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import LiquidEther from './LiquidEther';
import BubbleMenu from './BubbleMenu';
import BookingForm from './components/BookingForm';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ArticlesPage from './components/ArticlesPage';
import DecryptedText from './components/DecryptedText';
import Footer from './components/Footer';
import SEO from './components/SEO';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const isProjects = location.pathname === '/projects';
  const isArticles = location.pathname === '/articles';
  const showFooter = isHome || isAbout || isProjects || isArticles;

  return (
    <div className="app">
      <div className="liquid-background">
        <LiquidEther
          colors={['#C9A882', '#E8D5C4', '#9D7852']}
          mouseForce={15}
          cursorSize={80}
          isViscous={false}
          viscous={20}
          iterationsViscous={16}
          iterationsPoisson={16}
          resolution={0.25}
          isBounce={false}
          autoDemo
          autoSpeed={0.6}
          autoIntensity={2.2}
          takeoverDuration={0.2}
          autoResumeDelay={0}
          autoRampDuration={0.8}
        />
      </div>
      
      <Link to="/" className="site-logo">
        <img src="/Untitled_design__10_-removebg-preview.png" alt="Tavo Skriptas Logo" />
      </Link>

      {(isHome || isAbout || isProjects || isArticles) && (
        <BubbleMenu
          menuBg="rgba(232, 213, 196, 0.95)"
          menuContentColor="#2a1f15"
          useFixedPosition={true}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />
      )}

      <Routes>
        <Route path="/" element={
          <>
            <SEO 
              title="Tavo Skriptas - Web aplikacijų kūrimas ir IT sprendimai"
              description="Kuriame modernias web aplikacijas ir interaktyvius IT sprendimus, reaguojančius į vartotojo veiksmus."
              keywords="web aplikacijos, IT sprendimai, programavimas, web development, Lietuva, Tavo Skriptas, aplikacijų kūrimas, React, modernios technologijos"
            />
            <div className="content">
            <h1 className="title">
              Daugiau nei <span className="gradient-text">web aplikacijų</span>
              <br />
              kūrimas - tai skirtingos emocijos
            </h1>
            <p className="subtitle">
              <DecryptedText 
                text="Interaktyvūs sprendimai, reaguojantys į vartotojo veiksmus"
                animateOn="view"
                speed={70}
                sequential
                revealDirection="start"
              />
            </p>
            <div className="buttons">
              <Link to="/booking" className="btn star-button" aria-label="Susiskambinam">
                Susiskambinam
                <span className="star-1" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    viewBox="0 0 784.11 815.53"
                  >
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </svg>
                </span>
                <span className="star-2" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    viewBox="0 0 784.11 815.53"
                  >
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </svg>
                </span>
                <span className="star-3" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    viewBox="0 0 784.11 815.53"
                  >
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </svg>
                </span>
                <span className="star-4" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    viewBox="0 0 784.11 815.53"
                  >
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </svg>
                </span>
                <span className="star-5" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    viewBox="0 0 784.11 815.53"
                  >
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </svg>
                </span>
                <span className="star-6" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    viewBox="0 0 784.11 815.53"
                  >
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>

      {showFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

