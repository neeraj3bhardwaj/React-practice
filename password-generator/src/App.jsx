import { useState, useCallback, useRef, useEffect} from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const copyButtonUse = useCallback(() => {
    if (password) {
      navigator.clipboard.writeText(password)
        .then(() => alert('Password copied successfully!'))
        .catch(() => alert('Failed to copy password. Please allow clipboard access.'));
    }
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyz"
    let pass = ""

    if(includeUppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(includeNumbers) str += "1234567890";
    if(includeSymbols) str += "._-@#$%&!";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str[index];
    }

    setPassword(pass);

  },[length,includeNumbers,includeUppercase,includeSymbols,setPassword])

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    passwordGenerator(); 
  }, [length, includeNumbers, includeUppercase, includeSymbols]);

    
  return (
    <>
      <div className='h-screen w-screen bg-black flex items-center justify-center'>
        <div className="border border-white rounded-xl shadow shadow-blue-200 p-4 bg-gray-700 w-fit h-fit ">
            <div className='flex m-4 p-2 gap-x-1 justify-center'>
                <input
                  type="text"
                  placeholder='password'
                  className="bg-white w-64"
                  value={password}
                  readOnly
                  maxLength={length}
                  ref={passwordRef}
                />

              <button className="bg-blue-500 text-white cursor-pointer px-2 py-1"
              onClick={copyButtonUse}
              >Copy</button>
            </div>

            <div className='flex flex-wrap m-2 items-center gap-2 text-white'>
              <input type="range" min={8} max={15} className="cursor-pointer"
              value={length}
              onChange={(e)=>setLength(Number(e.target.value))} />
              <label htmlFor="length">Length : {length}</label>

              <input 
              type="checkbox" 
              id="uppercase" 
              className="cursor-pointer"
              onChange={() => setIncludeUppercase(prev => !prev)}
              />
              <label htmlFor="uppercase">Uppercase</label>

              <input type="checkbox"
              id="numbers"
              className="cursor-pointer"
              onChange={()=>setIncludeNumbers(prev => !prev)}
              />
              <label htmlFor="numbers">Numbers</label>

              <input type="checkbox"
              id="symbols"
              className="cursor-pointer"
              onChange={()=>setIncludeSymbols(prev => !prev)}
              />
              <label htmlFor="symbols">Symbols</label>
            </div>

            <div className='flex justify-center'>
              <button className='cursor-pointer'
              onClick={passwordGenerator}
              style={{backgroundColor: 'orange',color: 'white',padding:'2px'}}>Generate password</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
