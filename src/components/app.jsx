import { useState } from 'react';
import Parent from './parent.jsx'
import File from './fullfiledisplay.jsx'
export default function App() {
      const [parentData, setParentData] = useState({
    personal: { first: '', second: '', third: '' },
    education: { first: '', second: '', third: '' },
    experience: { first: '', second: '', third: '' },
  });
  const onChange= (section, data) => {
    setParentData(prev => ({ ...prev, [section]: data }))
  }
    return (
         <div className='content'>
         <div className='flex'>
           <div className='flexitem'>
           <Parent first='name' second='email' third='tel' 
           onChange={(data) => {onChange("personal",data)}}
           types={['text','email','tel']}
           key={1}
            />
           </div>
           <div className='flexitem'>
           <Parent first='school name' second='title of study' third='date of study'
           onChange={(data) => {onChange("education",data)}}
          types={['text','text','date']}
          key={2}
           />
           </div>
           <div className='flexitem'>
           <Parent first='company name' second='position title' third='main responsibilities'
           onChange={(data) => {onChange("experience",data)}}
          types={['text','text','textarea']}
          key={3}
           />
           </div>
         </div>
         <div>
         <File data={parentData}/>
         </div>
         </div>
    )
}