import React, { useState, useEffect } from 'react'
import './Password.css'
const Password = () => {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [charAllowed, setCharAllowed] = useState(false);
    const [numAllowed, setNumAllowed] = useState(false);

    useEffect(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let char = "~!@#$%^&*()";
        let num = "1234567890";

        if (charAllowed) str += char;
        if (numAllowed) str += num;

        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, charAllowed, numAllowed])

    return (
        <div className='bg-slate-200 h-screen'>
            <h1 className='text-black text-center text-4xl'>Password Generator</h1>
            <div className='bg-red-100 w-60 absolute top-20 left-50'>
                <form >
                    <input type='text' readOnly value={password} />
                    <input type='range' min={1} max={20} value={length} onChange={(e) => setLength(e.target.value)} />
                    <span>{length}</span>
                    <br /> <br />
                    <input type='checkbox' defaultValue={numAllowed} onChange={() => { setNumAllowed((prev) => !prev) }} />
                    <span>Number</span>
                    <input type='checkbox' defaultValue={charAllowed} onChange={() => { setCharAllowed((prev) => !prev) }} />
                    <span>Character</span>
                </form>
            </div>
        </div>
    )
}

export default Password