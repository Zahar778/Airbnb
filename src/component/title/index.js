import "./index.css";
import Heading from "../heading";

export default function Title({
    title,
    rating,
    review,
    city,
    country,
    superhost,
}) {
    return (
        <div className="title">
            <Heading className="title_text">{title}</Heading>

            <div className="title__sub-block">
                <sapn className="title__sub-value"> {rating} Рейтинг </sapn>

                <sapn className="title__sub-value">{review} Отзыв </sapn>
                
                <sapn className="title__sub-value">{city}, {country} </sapn>

                {superhost && <span className="title__sub-value">Супер-Хост</span>}
            </div>
        </div>
    )
}