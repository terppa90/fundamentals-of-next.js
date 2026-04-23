'use client';
import styles from './home.module.css';
import Title from './components/Title';
import Button from './components/Button';
import Card from './components/Card';
import AppLayout from './components/AppLayout';
import Alert from './components/Alert';
import ProfileCard from './components/ProfileCard';

export default function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  
  return (
    <AppLayout>
      <main className={styles.container}>
        <Title text="Fundamentals of Next.js" />
        <p className={styles.description}>This is an application for studying Next.js</p>

        <Button label="Click Me!" onClick={handleClick} />
        
        <Card 
          title="Blue Card" 
          content="This card's background is blue" 
          bgColor="#dbeafe" 
        />

        <Card 
          title="Green Card" 
          content="This card's background is green" 
          bgColor="#dcfce7" 
        />

        <Card 
          title="Orange Card" 
          content="This card's background is orange" 
          bgColor="#ffedd5" 
        />

        <Alert 
          message="Alert!" 
        />

        <div className="flex flex-wrap gap-8 justify-center mt-10">
        
        <ProfileCard 
          name="John Doe" 
          role="Frontend Developer" 
          accentColor="#3b82f6" 
        />

        <ProfileCard 
          name="Jane Doe" 
          role="FullStack Developer" 
          accentColor="#a855f7" 
        />

        <ProfileCard 
          name="Donald Duck" 
          role="UX Designer" 
          accentColor="#f97316" 
        />
        
      </div>
      </main>
    </AppLayout>
  );
}
