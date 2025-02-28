//rafce  [react arrow function components with export]

import React from 'react'
import Header from './Header';
import Preview from './Preview';
import Form from './Form';
const App = () => {
  {/* HOT module replacement --> when you savee file it automaticaly applied in chrome page in react called HMR */}
  
  // Div block is caalled as JSX
  return(
      <div className="App">
        <Header Dark={true}> Professional Card Maker</Header>
        <main>
          <Form />
          <Preview />
        </main>
      </div>
  );
  //--------------> header>(h1>a{Logo})*nav>ul>li*4>a{Link $}
}

export default App;