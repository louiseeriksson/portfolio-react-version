import React from 'react'

export const FeaturedProject = (props) => {
  return (
    <a className="project-link" href={props.projectLink}>
      <div className="featured-projects">
        <div className="project-wrapper">
          <img src={props.img} alt={props.alt}></img>
        </div>
        <div className="app-text-container">
          <p>
            <span className="smaller-bold-text">
              {props.name}.&nbsp;
              </span>
            {props.info}
            <span className="smaller-bold-text">
              &nbsp;>>
              </span>
          </p>
          <div className="languages-container">
            <p className="lang">
              HTML5
              </p>
            <p className="lang">
              CSS3
              </p>
            <p className="lang">
              JavaScript ES6
              </p>
            <p className="lang">
              React
              </p>
          </div>
        </div>
      </div>
    </a>
  )
}