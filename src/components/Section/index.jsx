import React from 'react';

import './Section.scss'

const Section = ({children}) => {
  console.log(children)
    return ( 
        <section className="section">
          {children}
        </section>
     );
}
 
export default Section;