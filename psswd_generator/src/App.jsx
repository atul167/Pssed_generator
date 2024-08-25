import { useCallback, useState } from 'react'
import { useEffect } from 'react';
function App() {
  const [length, setLength] = useState(5);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === "number") {
      if (checked)
        setNumber(true);
      else
        setNumber(false);
    } else if (name === "character") {
      if (checked)
        setCharacter(true);
      else
        setCharacter(false);
    }
  };
  const copytoClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  },[password]);
 useEffect(() => {
   function generate_Password() {
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
     let pass = "";
     if (number) {
       str += "0123456789";
     }
     if (character) {
       str += "@#$%!~";
     }
       for (var i = 0; i < length; i++) {
         const z = Math.floor(Math.random() * str.length);
         const ele = str[z];
         pass += ele;
     }
     setPassword(pass);
   }
   generate_Password();
  }, [length, number, character]);
  return (
    <>
      <div className="flex flex-row items-center justify-center min-h-screen bg-gray-100 space-x-6 ">
      
        <div className="text-2xl">
        <input type="text" placeholder="Length"  onChange={(e) => {
            const newValue = parseInt(e.target.value);
            // Check if newValue is a number and update state
            if (!isNaN(newValue)) {
              setLength(newValue);
            }
          }} 
            className="border border-gray-300 p-2 rounded" /> Length is {length} </div>
            <div className="text-2xl flex items-center">
          <input
            type="checkbox"
            name="number"
            checked={number}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          Number
        </div>
        <div className="text-2xl flex items-center">
          <input
            type="checkbox"
            name="character"
            checked={character}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          Character
        </div>
        <button onClick={copytoClipboard}>Copy</button>
        <div className="text-2xl">Password is {password} </div>
        </div>
      
    </>
  )
}

export default App
