import '../styles/fillfieldisplay.css'
export default function File({data})  {
    return (
    <div id='style'>
    <p>Your name: {data.personal.first}</p>
    <p>Your email:{data.personal.second}</p>
    <p>Your number: {data.personal.third}</p>
    <hr></hr>
    <p>School name: {data.education.first}</p>
    <p>Title of study: {data.education.second}</p>
    <p>Date of study: {data.education.third}</p>
    <hr></hr>
    <p>Company name: {data.experience.first}</p>
    <p>Position title: {data.experience.second}</p>
    <p>Main responsibilities: {data.experience.third}</p>
    </div>



    )
}