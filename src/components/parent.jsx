import { useState } from "react"
import Form from './form.jsx'
import DisplayFormBox from './formInHtml.jsx'
export default function Parent({first,second,third,onChange,types}) {
    const [name,setName] = useState('');
    const [tel,setTel] = useState('');
    const [email,setEmail] = useState('');
    return (

        <>
           <Form 
           setName={setName} setTel={setTel} setEmail={setEmail} imie={name} tel={tel} email={email}
           first={first} second={second} third={third}
           onChange={onChange}
           types={types}
           
           />
           <DisplayFormBox 
           nameDisplay={name} telDisplay={tel} emailDisplay={email}
           first={first}
           second={second}
           third={third}
           />
        </>
    )
}