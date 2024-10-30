// src/App.tsx
import  { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationExperience from './components/EducationExperience';
import PracticalExperience from './components/PracticalExperience';
import CVDisplay from './components/CVDisplay';
import  '../src/styles/App.css';

// Define types for the state
interface GeneralInfoType {
  name: string;
  email: string;
  phone: string;
}

interface EducationExperienceType {
  school: string;
  title: string;
  date: string;
}

interface PracticalExperienceType {
  company: string;
  position: string;
  responsibilities: string;
  dateFrom: string;
  dateTo: string;
}

function App() {
  const [generalInfo, setGeneralInfo] = useState<GeneralInfoType | null>(null);
  const [educationExperience, setEducationExperience] = useState<EducationExperienceType | null>(null);
  const [practicalExperience, setPracticalExperience] = useState<PracticalExperienceType | null>(null);

  return (
    <div>
      <h1>CV Builder</h1>
      <GeneralInfo onSubmit={setGeneralInfo} initialData={generalInfo} />
      <EducationExperience onSubmit={setEducationExperience} initialData={educationExperience} />
      <PracticalExperience onSubmit={setPracticalExperience} initialData={practicalExperience} />
      
      {generalInfo && educationExperience && practicalExperience && (
        <CVDisplay data={{ generalInfo, educationExperience, practicalExperience }} />
      )}
    </div>
  );
}

export default App;
