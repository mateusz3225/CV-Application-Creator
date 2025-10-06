import { useState } from 'react';
import '../styles/form.css'

function Input({name,type, onChange,isHidden,value}) {

    return (isHidden && (<> <p>
        {name}</p><input type={type} onChange={onChange} value={value}></input>
   </> )
    )
}

export default function Form({setName,setTel,setEmail,first,second,third}) {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputTel, setInputTel] = useState("");
    const [isHidden,setisHidden] = useState(true);
return (
    <div className='form-div'>
<form>
    <Input name={first} type="text" onChange={(e)=> setInputName(e.target.value)} isHidden= {isHidden} value={inputName}></Input>
    <Input name={second} type="email" onChange={(e)=> setInputEmail(e.target.value)} isHidden= {isHidden}value={inputEmail} ></Input>
    <Input name={third} type="tel" onChange={(e)=> setInputTel(e.target.value)} isHidden= {isHidden} value={inputTel}></Input>
</form>
{isHidden && (<button type='submit' onClick={
    (e) =>  {
        e.preventDefault();
        setName(inputName);
        setTel(inputTel);
        setEmail(inputEmail);
        setisHidden(false);
    }
}>SUBMIT</button>)}
{
!isHidden &&
<button onClick={
    () => {
       setisHidden(true);
    }
}>EDIT</button> }
</div>

)

}