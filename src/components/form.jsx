import { useState } from 'react';
import '../styles/form.css'

function Input({name,type, onChange,isHidden,value}) {

    return (isHidden && (<> <p>
        {name}</p><input type={type} onChange={onChange} value={value}></input>
   </> )
    )
}

export default function Form({setName,setTel,setEmail,first,second,third,onChange,types}) {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputTel, setInputTel] = useState("");
    const [isHidden,setisHidden] = useState(true);
  const [data, setData] = useState({
    first: '',
    second: '',
    third: ''
  });
  const handleChange = (key, value) => {
    const updated = { ...data, [key]: value };
    setData(updated);
    onChange(updated); 
  };
return (
    <div className='form-div'>
<form>
    <Input key={1} name={first} type={types?.[0]} onChange={(e)=> {setInputName(e.target.value);handleChange('first', e.target.value)  }} isHidden= {isHidden} value={inputName}></Input>
    <Input key={2} name={second} type={types?.[1]} onChange={(e)=> {setInputEmail(e.target.value);handleChange('second', e.target.value)  } } isHidden= {isHidden}value={inputEmail} ></Input>
    <Input key={3} name={third} type={types?.[2]} onChange={(e)=> {setInputTel(e.target.value);handleChange('third', e.target.value) }} isHidden= {isHidden} value={inputTel}></Input>
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