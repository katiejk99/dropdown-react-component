import React from 'react';
import DropdownMenu from './DropdownMenu';

function App() {
  const options = ['Option 1', 'Option 2', 'Option 3'];

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