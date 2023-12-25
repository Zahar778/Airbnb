import ListItem from "../list-item";
import "./index.css";
import Box from "../box";
import test from "./test.svg";


export default function Price({
    price,
    discount,
    currency,
    ...rest
}) {
    return (<Box className='price'>
        <div className="price__header">
            <span
            className={`price__value ${
                discount ? "price__value--has-discount" : ""
            }`}
            >
                {currency}
                {price}
            </span>
            {discount && (
                <span className={`price__value`}>
                    {currency}
                    {discount}
                </span>
            )}
        </div>
        <List {...rest} currency={currency}/>
    </Box>
    );
}
function List({currency,cleaning,service,checkin,checkout}) {
return (
    <ul className="price__list">
       <ListItem imageSrc={test}>
            <span>Плата за прибирання:</span>
            <span>
                {currency}
                {cleaning}
            </span>
        </ListItem>
        <ListItem>
            <span>Сервiсний збiр:</span>
            <span>
                {currency}
                {service}
            </span>
            </ListItem>
            <ListItem>
            <span>Дата прибуття:</span>
            <span>
                {checkin}
            </span>
            </ListItem>
            <ListItem>
            <span>Дата вiд`iзду:</span>
            <span>
                {checkout}
            </span>
            </ListItem>
    </ul>
)
}