import "./index.css";

import Heading from "../heading";

import Box from "../box";

import ListItem from "../list-item";

import asd from "./asd.svg";

import Gym from "./Gym.svg";

import hasFreeBreakfasttt from "./hasFreeBreakfasttt.svg";


import hasFreeWiFiii from "./hasFreeWiFiii.svg";
import hasParkinggg from "./hasParkinggg.svg";
import hasPetsAlloweddd from "./hasPetsAlloweddd.svg";
import hasAirportShuttleee from "./hasAirportShuttleee.svg";
import hasConciergeServiceee from "./hasConciergeServiceee.svg";
import hasRoomServiceee from "./hasRoomServiceee.svg";
import hasChildFriendlyyy from "./hasChildFriendly.svg";

export default function Section_two({hasPool,hasGym,hasFreeBreakfast,hasFreeWiFi,hasParking,hasPetsAllowed,hasAirportShuttle,hasConciergeService,hasRoomService,hasChildFriendly}) {

    return(
        <div className="section">
        <Box shadow >
            <Heading border className="section__header">Зручності</Heading>
            <div className="section__list">
                <ul>
            <ListItem imageSrc={asd}>
                <span>{hasPool} Басейн</span>
                </ListItem>
                <ListItem imageSrc={Gym}>
                <span >{hasGym} Спортивний зал</span>
                </ListItem>
                <ListItem imageSrc={hasFreeBreakfasttt}>
                <span>{hasFreeBreakfast} Безкоштовний сніданок</span>
                </ListItem>
                <ListItem imageSrc={hasFreeWiFiii}>
                <span >{hasFreeWiFi} Безкоштовний Wi-Fi</span>
                </ListItem>
                <ListItem imageSrc={hasParkinggg}>
                <span >{hasParking} Безкоштовний вуличний паркінг</span>
                </ListItem>
                <ListItem imageSrc={hasPetsAlloweddd}>
                <span >{hasPetsAllowed} Дозволено розміщення з домашніми тваринами</span>
                </ListItem>
                <ListItem imageSrc={hasAirportShuttleee}>
                <span >{hasAirportShuttle} Трансфер до/з аеропорту</span>
                </ListItem>
                <ListItem imageSrc={hasConciergeServiceee}>
                <span >{hasConciergeService} Консьєрж-сервіс</span>
                </ListItem>
                <ListItem imageSrc={hasRoomServiceee}>
                <span >{hasRoomService} Обслуговування номерів</span>
                </ListItem>
                <ListItem imageSrc={hasChildFriendlyyy}>
                <span >{hasChildFriendly} Підходить для дітей</span>
                </ListItem>
                </ul>
                </div>
        </Box>
        </div>
    )
    
}