import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let password = ''

    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeSpecialChars) chars += '!@#$%^&*()_+[]{}|;:,.<>?'

    if (includeNumbers) chars += '0123456789'

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length)
      password += chars[randomIndex]
    }

    console.log('Password generated: ' + password)
    setPassword(password)
  }, [length, includeSpecialChars, includeNumbers])

  // Fn to copy password to clipboard
  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    console.info('Password copied to clipboard! ' + passwordRef.current?.value);
  }

  useEffect(() => {
    generatePassword()
  }, [length, includeSpecialChars, includeNumbers])

  return (
    <div className="bg-red-100 w-full h-screen duration-1000 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center h-min w-fit p-4 shadow-lg rounded-md bg-red-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 drop-shadow-lg">Password Generator</h1>
        {/* ======================================
        Input field and copy button for password 
        ======================================*/}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={() => {
              copyPasswordToClipboard();
            }}
          >
            copy
          </button>
        </div>
        {/* ======================================
         Range slider for password length 
        ======================================*/}
        <div className='flex flex-row items-center mt-4'>
          <input
            type="range"
            min="1"
            max="20"
            className="h-2 cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value)
            }}
          />
          <label className='ml-4 text-gray-800' htmlFor='length'>Length : {length}</label>
        </div>
        <div className='flex flex-row items-center'>
          {/* Checkbox for including special characters */}
          <div className='flex flex-row items-center'>
            <input type="checkbox" id="includeSpecialChars" className='mr-1' onChange={
              (e) => setIncludeSpecialChars(e.target.checked)
            } />
            <label htmlFor='includeSpecialChars' className='text-gray-800'>Special Characters</label>
          </div>
          {/* Checkbox for including numbers */}
          <div className='flex flex-row items-center ml-2'>
            <input type="checkbox" id='includeNumbers' className='mr-1' onChange={
              (e) => setIncludeNumbers(e.target.checked)
            } />
            <label htmlFor='includeNumbers' className='text-gray-800'>Numbers</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
