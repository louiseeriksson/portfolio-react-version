import React from 'react'
// import profilePic from './public/assets/profile'

export const Header = () => {
  return (
    <header>
      <div className="icons">
        <a className="icon" href="https://www.linkedin.com/in/louise-eriksson/">
          <img src="assets/linkedin.svg" alt="LinkedIn logo"></img>
        </a>
        <a className="icon" href="https://github.com/louiseeriksson">
          <img src="assets/github.svg" alt="GitHub logo"></img>
        </a>
        <a className="icon" href="https://stackoverflow.com/users/story/12700892?newreg=c03c8ca18af04a4582392b794da8b34a&_=1">
          <img src="assets/stack.svg" alt="StackOverflow logo"></img>
        </a>
      </div>
      <div className="header-intro">
        <p>PORTFOLIO: LOUISE ERIKSSON</p>
        <h1>junior frontend developer</h1>
        <h2>+ teamplayer</h2>
      </div>
      <img className="profile-pic" src={process.env.PUBLIC_URL + './assets/profile-pic.jpeg'} alt="Louise"></img>
    </header >
  )
}


