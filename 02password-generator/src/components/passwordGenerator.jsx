import { useEffect, useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";


function PasswordGenerator() {

    let [length,setLength] = useState(8);
    let [allowNum,setNum] = useState(false);
    let [allowChar,setChar] = useState(false);
    let [password,setPassword] = useState(null)

    let passValue = useRef(password)

    const passGen = useCallback(()=>{
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if(allowChar) str += '!`~@#$%^&*;:';
        if(allowNum) str += '0123456789';

        for (let i = 1; i <= length; i++) {
               let char = Math.floor(Math.random() * str.length +1)
               pass += str.charAt(char)         
        }
        setPassword(pass)

} ,[length,allowChar,allowNum,setPassword])


    useEffect(()=>{
        passGen()
    },[length,allowChar,allowNum,passGen,setPassword])

    const copyValue = ()=>{
        passValue.current.select()
        window.navigator.clipboard.writeText(password)
    }

    return (
      <>
        <div className="h-screen flex bg-black justify-center items-center">
          <div className="bg-gray-800 p-8 rounded-md text-orange-500">
            <h1 className="text-white text-3xl mb-4 font-bold">Password Generator</h1>
            <div className="mb-4">
              <label htmlFor="password" className="text-white block mb-1">Password:</label>
              <input type="text" id="password" ref={passValue} defaultValue={password}  readOnly  className="bg-gray-700 text-white py-2 px-3 rounded-md w-full focus:outline-none" />
            </div>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-orange-600 transition duration-300 ease-in-out focus:outline-none" onClick={copyValue}>Copy</button>
            <div className="mb-4">
              <label htmlFor="length" className="text-white block mb-1">Length:({length})</label>
              <input type="range" id="length"value={length} min={1} max={50} className="bg-gray-700 text-white py-2 px-3 rounded-md w-full focus:outline-none" onChange={(e)=>setLength(e.target.value)} />
            </div>
            <div className="mb-4">
              <input type="checkbox" id="num" className="mr-2" defaultChecked={allowNum} onChange={()=>{setNum(prev=>!prev)}} />
              <label htmlFor="num" className="text-white">Include Numbers</label>
            </div>
            <div className="mb-4">
              <input type="checkbox" id="char" className="mr-2" defaultChecked={allowChar} onChange={()=>{setChar(prev=>!prev)}}/>
              <label htmlFor="char" className="text-white">Include Special Characters</label>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default PasswordGenerator;
  