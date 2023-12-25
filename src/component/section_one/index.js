import "./index.css";

import Heading from "../heading";

import Box from "../box";

import ListItem from "../list-item";

import guestsss from "./guestsss.svg";

import bedroomsss from "./bedroomsss.svg";

import bedsss from "./bedsss.svg";

import bathss from "./bathss.svg";

export default function Section({guests, bedrooms, beds, baths}) {
    return (
        <div className="section">
        <Box shadow >
            <Heading border className="section__header">Деталі властивості:</Heading>
                <ul className="section_list">        
            <ListItem imageSrc={guestsss}>
            <span> {guests} гостi </span> 
             </ListItem>
                <ListItem imageSrc={bedroomsss}>
                <span className="section__value">{bedrooms} спальня</span>
                </ListItem>
                <ListItem imageSrc={bedsss}>
                    <span className="section__value">{beds} ліжко</span>
                </ListItem>
                <ListItem imageSrc={bathss}>
                <span className="section__value">{baths} ванна кімната</span>
                </ListItem>
                </ul>

        </Box>
        </div>
    )
}