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
          src='assets/balloons.jpeg'
          link='https://www.linkedin.com/pulse/final-countdown-louise-eriksson/'
          name='FINAL COUNTDOWN'
          text="June is here and I just started on my final project for this course (woop woop 🎉). It will be a fullstack project (both frontend and backend) where I will build a web shop using Redux and fetching my products from my own database..." />

        <Thought
          src='assets/coffeecup.jpg'
          link='https://www.linkedin.com/pulse/cheers-future-louise-eriksson/'
          name='CHEERS TO THE FUTURE'
          text="I can’t believe it’s already May! In January I jumped on this huge rollercoaster to change my career. I’ts been so fun and at the same time so difficult. With a new project every week I constantly feel like I'm lost..." />

        <Thought
          src='assets/rollercoaster.jpeg'
          link='https://www.linkedin.com/pulse/2020-louise-eriksson/'
          name='JAN 2020'
          text='We’re 6 weeks in to the new decade. That means 5 weeks in to the Technigo Bootcamp - and that means first sprint is already finished. If you told me 6 months ago that 2020 really would be this new-year-new-me-journey I would...' />
      </div>

      <h3 className="bold-color">
        MORE THOUGHTS
      </h3>

      <div className="more-thoughts-wrapper">
        <OtherThought
          link='https://www.linkedin.com/pulse/turns-out-im-same-age-html-louise-eriksson/'
          name='#HTML'
          text='I just recently started coding and actually don’t know much about ”computer-stuff” in general, so I thought I should read up on some of the most obvious things I will work with as a developer, stuff I take for...' />
      </div>
    </section>
  )
}