import React from 'react';
import DropdownMenu from './DropdownMenu';
import createOptionsList from "./utils"

function App() {
  const inputOptions = ['Option 1', 'Option 2', 'Option 3'];
  const options = createOptionsList(inputOptions); 

  return (
    <div className="App">
      <h1>Dropdown Menu Example</h1>
      <div>
        <h3>Multi Select</h3>
        <DropdownMenu options={options} multiSelect={true} />
      </div>
      <div>
        <h3>Single Select</h3>
        <DropdownMenu options={options} multiSelect={false}/>
      </div>
    </div>
  );
}

export default App;