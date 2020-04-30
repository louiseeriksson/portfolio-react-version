import React from 'react'

export const OtherProject = (props) => {
  return (
    <div className="app-text-container">
      <a className="project-link" href={props.link}>
        <p className='other-project-info'>
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
        </div>
      </a>
    </div>
  )
}