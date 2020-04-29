import React from 'react'
import { Header } from 'components/Header'
import { Intro } from 'components/Intro'
import { TechSection } from 'components/TechSection'
import { ProjectsSection } from 'components/ProjectsSection'
import { ThoughtsSection } from 'components/ThoughtsSection'
import { Skills } from 'components/Skills'
import { More } from 'components/More'
import { Footer } from 'components/Footer'

export const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <TechSection />
      <ProjectsSection />
      <ThoughtsSection />
      <Skills />
      <More />
      <Footer />
    </div>
  )
}
