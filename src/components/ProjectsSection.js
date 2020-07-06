import React from 'react'
import { FeaturedProject } from 'components/FeaturedProject'
import { OtherProject } from 'components/OtherProject'

export const ProjectsSection = () => {
  return (
    <section className="portfolio-section beige">
      <h3 className="bold-color">
        FEATURED PROJECTS
      </h3>
      <div className="featured-projects-wrapper">
        <FeaturedProject
          projectLink='https://github.com/louiseeriksson/project-happy-thoughts'
          img={process.env.PUBLIC_URL + './assets/happy-thoughts.png'}
          alt='happy thoughts'
          name='HAPPY THOUGHTS'
          info='A happy-twitter built in React using our own API' />
        <FeaturedProject
          projectLink='https://github.com/louiseeriksson/project-movies'
          img='./assets/movies.png'
          alt='popular movies'
          name='MOVIES'
          info='Fetching popular movies from an API. Using React useState, useEffect, useParams, Browserrouter, Link and Route' />
        <FeaturedProject
          projectLink='https://github.com/louiseeriksson/project-todos'
          img='assets/todo.png'
          alt='get shit done'
          name='GET SHIT DONE'
          info='Built a to-do-web-app where you can add tasks, tic them off as done and remove them when you want to clear the list' />
        {/* //add redux as lang!!! */}
        <FeaturedProject
          projectLink='https://github.com/louiseeriksson/final-project-frontend'
          img='assets/vaxt.nu.png'
          alt='växt.nu'
          name='VÄXT.NU'
          info='Combined my two biggest hobbies - plants and programming in to this webshop were I built the backend in Express and in the frontend I focused on the design and styling.'
        // add redux?
        />
      </div>
      <h3 className="bold-color">
        MORE PROJECTS
        </h3>
      <div className="other-projects-wrapper">
        <OtherProject
          link='https://github.com/louiseeriksson/tic-tac-toe-redux-codealong'
          name='TIC-TAC-TOE'
          info='The classic game "tre-i-rad" using Redux'
        />
        <OtherProject
          link='https://github.com/louiseeriksson/project-redux-quiz-elephants'
          name='FLAG QUIZ'
          info='Made a Redux quiz as a groupproject'
        />
        <OtherProject
          link='https://github.com/louiseeriksson/project-auth'
          name='AUTHENTICATION'
          info='Register and Login'
        />
        <OtherProject
          link='https://github.com/louiseeriksson/redux-store'
          name='REDUX STORE'
          info='A small webshop'
        />
        <OtherProject
          link='https://github.com/louiseeriksson/project-nutrition'
          name='FOOD SCANNER'
          info='Scan your product to see if its vegan-friendly'
        />
        <OtherProject
          link='https://github.com/louiseeriksson/project-react-native-app'
          name='PUT A SMILE ON YOUR FACE'
          info='This react native app shows a random image of a cute dog'
        />
        <OtherProject
          link='https://github.com/louiseeriksson/project-survey'
          name='CANDY'
          info='Take this survey to find out how much of a sugaraddict you are'
        />
        <OtherProject
          link='https://github.com/louiseeriksson/project-music-releases'
          name='MUSIC RELEASES'
          info='A spotify-lookalike-page where we list the newest songs right now'
        />
        <OtherProject
          link='https://github.com/louiseeriksson/project-food-elephants'
          name='BURGERJOINTS'
          info='Find your favorite burger in Sydney'
        />
        <OtherProject
          link='https://github.com/louiseeriksson/project-weather-app'
          name='WEATHER APP'
          info='Whats the weather in Stockholm today?'
        />
        <OtherProject
          link='https://github.com/louiseeriksson/project-cluedo'
          name='CLUEDO'
          info='Who did the crime?'
        />
        <OtherProject
          link='https://github.com/louiseeriksson/project-pizza-bot'
          name='PIZZA BOT'
          info='Order a pizza from our pizzeria'
        />
        <OtherProject
          link='https://github.com/louiseeriksson/project-business-site'
          name='THE BEAN'
          info='Business site for my pretend coffee roastery'
        />

      </div>
    </section>
  )
}