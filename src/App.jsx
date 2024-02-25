import React, { useState } from 'react';
import FormInput from './components/FormInput';
import './App.css'
function App() {
  const[values,setValues] = useState({
    username : "",
    email: "",
    fullname:"",
    password:""
  });

  const inputs =[
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"john123",
      label:"Username"
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"johndoe@gmail.com",
      label:"Email"
    },
    {
      id:3,
      name:"fullname",
      type:"text",
      placeholder:"John Doe",
      label:"Full Name"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"*****",
      label:"Password"
    }
  ]
  return (
    <div className='app'>
      <form>
        {inputs.map((input)=>{
          <FormInput key={input.id} name={input.name} type={input.type} placeholder={input.placeholder} label={input.label}/>
        })}
      </form>
    </div>
  );
}

export default App;
