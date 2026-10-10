import ProfileCard from '../components/ProfileCard';

export function HomePage() {
  return (
    <ProfileCard 
      name="Ramazan Abdyashim" 
      role="Student / Developer" 
      avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Wm55Pe4Lbvyp2ut6eG-epj5qcYFHpA34CvQ3GC1L292XzGJ8a0tLowSY&s=10"
      bio="Hello, I am a developer learning React and TypeScript."
      skills={[
        { id: 1, label: 'HTML / CSS' },
        { id: 2, label: 'JavaScript' },
        { id: 3, label: 'React' },
        { id: 4, label: 'GO' }
      ]}
    />
  );
}