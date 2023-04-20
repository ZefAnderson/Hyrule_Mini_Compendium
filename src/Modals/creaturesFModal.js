export default function CreaturesFModal ({onClose, item}) {
    return (
        <ul className="Modal">
            <div>
                <li>{item.name}</li>
                <br />
                <li>{item.description}</li>
                <br />
                <li>Common Locations: {item.common_locations}</li>
                <br />
                <li>Cooking Effect: {item.cooking_effect}</li>
                <br />
                <li>Hearts Recovered: {item.hearts_recovered}</li>
                <br />
                <img
                    className="modalImg"
                    key={item.id}
                    src={item.image}
                    alt="API made an oopsie"
                />
            </div>
            <button className="modalButton" onClick={onClose}>Done</button>
        </ul>
    );
}