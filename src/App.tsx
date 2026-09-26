import './style.css'; 

import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header 
        name="Ramazan Abdyashim" 
        tagline="Aspiring Web Developer" 
      />
      
      <ProfileCard 
        name="Ramazan Abdyashim"
        role="Aspiring Web Developer"
        avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Wm55Pe4Lbvyp2ut6eG-epj5qcYFHpA34CvQ3GC1L292XzGJ8a0tLowSY&s=10"
        bio="Hello! I am Ramazan. I am a 3rd year student and I am currently learning web development. I hope to get a solid foundation in frontend development and practical experience building real websites from this course."
      />
      
      <Footer 
        year={2026} 
        name="Ramazan" 
      />
    </>
  );
}

export default App;