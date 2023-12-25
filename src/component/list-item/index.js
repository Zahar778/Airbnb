import "./index.css";

export default function ListItem({ children, imageSrc, title}) {
    return (
        <li className="lsit-item">
            <div className="list-item_img"> 
            {imageSrc && <img height={24} width={24} src={imageSrc} alt="Icon"></img>}
            
            <div className="list-item__block">
                {title && <strong className="list-item__title">{title}</strong>}
                <div className="list-item__content">{children}</div>
            </div>
            </div>
        </li>
    )
}