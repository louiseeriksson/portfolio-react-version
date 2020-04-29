import React from 'react'

export const OtherThought = (props) => {
  return (
    <a className="article-link" href={props.link}>
      <p>
        <span className="smaller-bold-text">
          {props.name}.&nbsp;
        </span>
        {props.text}
        <span className="smaller-bold-text">
          &nbsp;>>
        </span>
      </p>
    </a>
  )
}