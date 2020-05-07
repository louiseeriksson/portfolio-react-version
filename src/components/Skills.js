import React from 'react'

export const Skills = () => {
  return (
    <section className="portfolio-section beige">
      <h3 className="bold-color">
        SKILLS
      </h3>

      <div className="skills-wrapper">
        <div className="skills">
          <p className="smaller-bold-text">
            CODE
          </p>
          <p>
            HTML5
          </p>
          <p>
            CSS3
          </p>
          <p>
            Flexbox
          </p>
          <p>
            JavaScript ES6
          </p>
          <p>
            React
          </p>
          <p>
            Redux
          </p>
          <p>
            GitHub
          </p>
          <p>
            Node.js
          </p>
        </div>

        <div className="skills">
          <p className="smaller-bold-text">
            TOOLBOX
          </p>
          <p>
            VS Code
          </p>
          <p>
            Atom
          </p>
          <p>
            Postman
          </p>
          <p>
            Slack
          </p>
        </div>

        {/* <div class="skills">
          <p class="smaller-bold-text">
            UPCOMING
          </p>

        </div> */}

        <div className="skills">
          <p className="smaller-bold-text">
            MORE
          </p>
          <p>
            Agile methodology
          </p>
          <p>
            Creative mindset
          </p>
          <p>
            Social skills
          </p>
          <p>
            Teamplayer
          </p>
        </div>
      </div>
    </section>
  )
}