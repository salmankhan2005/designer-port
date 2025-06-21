import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import LearningExperience from './components/homepage/courses';
import ContactForm from './components/homepage/contact/contact-form';
import EducationSection from "./components/homepage/education";
import DesignExperienceSection from "./components/homepage/experience";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <DesignExperienceSection />
      <EducationSection />
      <Skills />
      <Projects />
      <LearningExperience />
      <ContactForm />
    </div>
  )
};