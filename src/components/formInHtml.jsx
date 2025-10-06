export default function DisplayFormBox({nameDisplay,emailDisplay,telDisplay,first,second,third}) {


return (
    <div>
    <h1>Your {first} = {nameDisplay}</h1>
    <h1>Your {second} = {emailDisplay}</h1>
    <h1>Your {third} = {telDisplay}</h1>
    </div>
)
    
}