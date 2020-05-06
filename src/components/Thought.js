import React from 'react'

export const Thought = (props) => {
  return (
    <div className="my-thoughts">
      <a className="article-link" href={props.link}>
        <img className="my-thoughts-img" src={props.src} alt={props.name}></img>
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
    </div>
  )
}