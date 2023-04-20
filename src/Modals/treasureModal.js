export default function TreasureModal ({onClose, item}) {
    console.log(item)
    return (
        <ul className="Modal">
            <div>
                <li>{item.name}</li>
                <br />
                <li>{item.description}</li>
                <br />
                <li>Common Locations: {item.common_locations}</li>
                <br />
                <li>Drops: {item.drops}</li>
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