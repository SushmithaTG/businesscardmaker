import { computeHeadingLevel } from '@testing-library/dom'
import React, { Children } from 'react'


// probs -->the  data that need to be passed from parent to childeren
const Header = ({ Dark,children}) => {
  return (
    // Before "_Dark" space need to be given else wont appear
    <header className={"Header" + (Dark ? " Dark" : "")}>
      <h1>
      {children}
      </h1>
    </header>
);
}

export default Header
