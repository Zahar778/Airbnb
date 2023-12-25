import "./index.css";
import Heading from "../heading";
import img from "./img.svg";

export default function Contact_info({
    name,
    response_rate,
    response_time,
    info,
    phone
 }) {
     return ( 
    <div>
    <div className="contact_info">
   
        <img src={img} alt={name} className="img"></img>
         <Heading className="header">Господар – {name}</Heading>
         
         <div className="title__sub-block title__sub-block_2 ">
                <sapn className="title__sub-value"> {phone} </sapn>

                <sapn className="title__sub-value">{response_time} </sapn>
                
                <sapn className="title__sub-value">{response_rate}% відсотків швидкості відгуку</sapn>
         
            </div>
            
         </div>
         <div className="info_info"> {info}</div>
         </div>
         )
 }