import React from 'react'
import { Icon } from 'components/Icon'

export const More = () => {
  return (
    <section class="portfolio-section for-more">
      <h3 class="bold-color">
        FOR MORE
     </h3>

      <div class="for-more-icons">
        <Icon
          link='https://www.linkedin.com/in/louise-eriksson/'
          src=''
          alt='LinkedIn logo'
          text='LINKEDIN' />
        <Icon
          link='https://github.com/louiseeriksson'
          src=''
          alt='GitHub logo'
          text='GITHUB' />
        <Icon
          link='https://stackoverflow.com/users/story/12700892?newreg=c03c8ca18af04a4582392b794da8b34a&_=1'
          src=''
          alt='StackOverflow logo'
          text='STACKOVERFLOW' />
      </div>
    </section>
  )
}