import { useContext } from "react";
import { CompendiumContext } from "./CompendiumContext";

export default function ModalContent ({onClose}) {
    const compendium = useContext(CompendiumContext);
    console.log(compendium);
    compendium.data.treasure.map((data) => {
        if (data.name === data.name) {
            return (
                <ul>
                    <div className="listItems"> 
                        {<li>{data.name}</li>
                        /* <li key={data.id}>{data.description}</li>
                        <li key={data.id}>{data.common_locations}</li> */}
                    <img
                        key={data.id} 
                        src={data.image}
                        alt="API made an oopsie"
                    /> 
                    </div>
                    <button onClick={onClose}>I'm Good</button>
                </ul>  
            );
        } 
    })
}