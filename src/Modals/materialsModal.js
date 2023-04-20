export default function MaterialsModal ({onClose, item}) {
    console.log(item)

    let cookingEffect = "";
    if (item.cooking_effect === "") {
        cookingEffect = "N/A";
    } else {
        cookingEffect = item.cooking_effect; 
    }

    let locations = "";
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

    return (
        <ul className="Modal">
            <div>
                <li>{item.name}</li>
                <br />
                <li>{item.description}</li>
                <br />
                <li>Common Locations: {locations}</li>
                <br />
                <li>Cooking Effect: {cookingEffect}</li>
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