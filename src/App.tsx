import { useState, useRef } from 'react';

function App() {
  // State to track the value of the first input
  const [firstInput, setFirstInput] = useState('');
  
  // Create a ref for the second input
  const secondInputRef = useRef(null);

  // Handle change in the first input
  const handleFirstInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    
    // Only allow numbers in the input
    if (/^\d*$/.test(value)) {
      setFirstInput(value);
      
      // Check if the first input has 1 character, then focus on the second input
      if (value.length === 1 && secondInputRef.current) {
        (secondInputRef.current as HTMLInputElement).focus();
      }
    }
  };

  return (
    <div>
      <h1>Test Autofocus between Numeric Inputs</h1>
      <input 
        inputMode="numeric"
        value={firstInput} 
        onChange={handleFirstInputChange} 
        maxLength={1} 
        placeholder="Enter 1 digit" 
      />
      <input 
        ref={secondInputRef} 
        inputMode="numeric"
        placeholder="Focus will move here after 1st input" 
      />
    </div>
  );
}

export default App;
