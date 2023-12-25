import "./index.css";
import Heading from "../heading";
import ListItem from "../list-item";


export default function Additional_power({
    house_rules,
    cancellation_policy,
    local_transportation,
    host_languages,
    special_offers,
    check_in_instructions
 }) {
     return ( 
        <div className="additional_power">
        <Heading> Додаткові властивості</Heading>
        <ul>
            <span className="h1_title">Правила дому</span>
            <ListItem>{house_rules}</ListItem>
        </ul>
        <ul>
            <span className="h1_title">Політика скасування</span>
            <ListItem>{cancellation_policy}</ListItem>
        </ul>
        <ul>
            <span className="h1_title">Місцевий транспорт</span>
            <ListItem>{local_transportation}</ListItem>
        </ul>
        <ul>
            <span className="h1_title">Мови хоста</span>
            <ListItem>{host_languages}</ListItem>
        </ul>
        <ul>
            <span className="h1_title">Спеціальні пропозиції:</span>
            <ListItem>{special_offers}</ListItem>
        </ul>
        <ul>
            <span className="h1_title">Інструкції щодо реєстрації</span>
            <ListItem>{check_in_instructions}</ListItem>
        </ul>
        </div>
     )
 }