import React from 'react';
import HeroSection from '../components/HeroSection';
import InformationSection from '../components/InformationSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import Project from '../components/Project';



export default function Home() {
  return (
    <div>
      <HeroSection />
      <InformationSection />
      <Project />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />

    </div>
  );
}
