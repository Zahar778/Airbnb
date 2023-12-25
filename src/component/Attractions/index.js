import "./index.css";
import Heading from "../heading";
import ListItem from "../list-item";
import Box from "../box";
import { Fragment } from "react";


export default function Attractions({
    list
 }) {
     return (
        <div className="room__block">
 <Heading>Пам'ятки поблизу</Heading>

        <div className="room__list flex">
            {list.map(({id, ...rest}) => (
                <Fragment key={id}>
                    <Item {...rest} />
                </Fragment>
            ))}
        </div>
    </div>
    );
       
 }
 function Item({id, name, link}) {
    return (
         
 <ul>
     <ListItem >
         <a className="link" href={link}>{name}</a>
     </ListItem>
 </ul>

     )
 }


