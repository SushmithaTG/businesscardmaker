//rafce  [react arrow function components with export]

import React, { useState } from 'react'
import Header from './Header';
import Preview from './Preview';
import Form from './Form';
const App = () => {
  const [Name, setName] = useState("");
  const [Destination, setDestination] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const Values={
    Name,
    Destination,
    Phone,
    Email
  };
  {/* HOT module replacement --> when you savee file it automaticaly applied in chrome page in react called HMR */}
  
  const handleChange=(e)=>{
    // Objects
    const setField = {
      setName,
      setDestination,
      setPhone,
      setEmail

    }
    setField["set" + e.target.name](e.target.value);
    
  }
  // Div block is caalled as JSX
  return(
      <div className="App">
        <Header Dark={true}> Professional Card Maker</Header>
        <main>
          <Form Values={Values} onChange={handleChange} />
          <Preview Values={Values} />
        </main>
      </div>
  );
  //--------------> header>(h1>a{Logo})*nav>ul>li*4>a{Link $}
}

export default App;