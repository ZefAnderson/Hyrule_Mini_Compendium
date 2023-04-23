export default function MonstersModal ({onClose, item}) {
    console.log(item)

    let locations = "";
    if (item.common_locations === null) {
        locations += "N/A";
    } else {
        for (let i = 0; i < item.common_locations.length -2; i++) {
            locations += item.common_locations[i] + ", "
        }
        if (item.common_locations.length > 1) {
            let secondToLast = item.common_locations[item.common_locations.length - 2];
            locations += " " + secondToLast + " ";
            let last = item.common_locations[item.common_locations.length - 1];
            locations += "and " + last;
        } if (item.common_locations.length === 1) {
            let last = item.common_locations[item.common_locations.length - 1];
            locations += last;
        } if (item.common_locations.length === 0) {
            locations += "N/A"
        }
    }
    
    let drops = "";
    if (item.drops === null) {
        drops += "N/A";
    } else {
        for (let i = 0; i < item.drops.length -2; i++) {
            drops += item.drops[i] + ", "
        }
        if (item.drops.length > 1) {
            let secondToLast = item.drops[item.drops.length - 2];
            drops += " " + secondToLast + " ";
            let last = item.drops[item.drops.length - 1];
            drops += "and " + last;
        } if (item.drops.length === 1) {
            let last = item.drops[item.drops.length - 1];
            drops += last;
        } if (item.drops.length === 0) {
            drops += "None";
        }
    }
    return (
        <div className="modalBackground">
            <ul className="modal">
                <div className="modalContent">
                    <li>{item.name}</li>
                    <br />
                    <li>{item.description}</li>
                    <br />
                    <li>Common Locations: {locations}</li>
                    <br />
                    <li>Drops: {drops}</li>
                    <br />
                    <img
                        className="modalImg"
                        key={item.id}
                        src={item.image}
                        alt="API made an oopsie"
                    />
                    <button className="modalButton" onClick={onClose}>Done</button>
                </div>
            </ul>
        </div>
    );
}