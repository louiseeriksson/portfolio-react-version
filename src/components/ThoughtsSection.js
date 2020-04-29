import React from 'react'
import { Thought } from 'components/Thought'
import { OtherThought } from 'components/OtherThought'

export const ThoughtsSection = () => {
  return (
    <section className="portfolio-section">
      <h3 className="bold-color">
        MY THOUGHTS
      </h3>

      <div className="thoughts-wrapper">
        <Thought
          link='https://www.linkedin.com/pulse/2020-louise-eriksson/'
          name='JAN 2020'
          text='We’re 6 weeks in to the new decade. That means 5 weeks in to the Technigo Bootcamp - and that means first sprint is already finished. If you told me 6 months ago that 2020 really would be this new-year-new-me-journey I would...' />
        <Thought
          link='https://www.linkedin.com/pulse/turns-out-im-same-age-html-louise-eriksson/?trackingId=CCPRbfMCTW%2BE%2FZ1enRpTYA%3D%3D'
          name='#HTML'
          text='I just recently started coding and actually don’t know much about ”computer-stuff” in general, so I thought I should read up on some of the most obvious things I will work with as a developer, stuff I take for...' />
      </div>

      <h3 className="bold-color">
        MORE THOUGHTS
      </h3>

      <div className="more-thoughts-wrapper">
        <OtherThought
          link=''
          name='CFVGBUHNJMK,L'
          text='xcfgvhbjnkml' />
        <OtherThought
          link=''
          name='CFVGBUHNJMK,L'
          text='xcfgvhbjnkml' />
        <OtherThought
          link=''
          name='CFVGBUHNJMK,L'
          text='xcfgvhbjnkml' />
        <OtherThought
          link=''
          name='CFVGBUHNJMK,L'
          text='xcfgvhbjnkml' />
      </div>
    </section>
  )
}