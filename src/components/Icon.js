import React from 'react'

export const Icon = (props) => {
  return (
    <a className="icon-red" href={props.link}>
      <div>
        <img src={props.src} alt={props.alt}></img>
      </div>
      <p class="smaller-bold-text">
        {props.text}
      </p>
    </a>
  )
}