import "./index.css";
import Heading from "../heading";
import ListItem from "../list-item";
import Box from "../box";
import { Fragment } from "react";


export default function Clients_profiles({
    list
 }) {
     return ( 
        <div className="room__block">
        <Heading border> Типи номерiв</Heading>

        <div className="room__list">
            {list.map(({id, ...rest}) => (
                <Fragment key={id}>
                    <Item {...rest} />
                </Fragment>
            ))}
        </div>
    </div>
    );
}

function Item({id, rating, review, guestName}) {
    return (
        <Box className="room room_1">
            <div className="div">
            <span className="room__title">{guestName} </span> 
           <span> Рейтинг: {rating}</span> 
            
            </div>
   
            <span className="room__info">{review}</span>
            <span className="room__price">
            
            </span>
        </Box>
     )
 }