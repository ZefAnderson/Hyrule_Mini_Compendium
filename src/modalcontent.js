import { useContext } from "react";
import { isRouteErrorResponse } from "react-router-dom";
import { CompendiumContext } from "./CompendiumContext";

export default function ModalContent ({onClose, modalProp}) {
    const compendium = useContext(CompendiumContext);
    const modalItem = compendium.data?.treasure.find((data) => data.id === modalProp);
    console.log(modalItem);
    if (!modalItem) {
        return null;
    }
    return (
        <ul className="Modal">
            <div>
                <li key={modalItem.name}>{modalItem.name}</li>
                <br />
                <li key={modalItem.description}>{modalItem.description}</li>
                <br />
                <li key={modalItem.common_locations}>Common Locations: {modalItem.common_locations}</li>
                <br />
                <li key={modalItem.drops}>Drops: {modalItem.drops}</li>
                 <button className="modalButton" onClick={onClose}>I'm Good</button>
            </div>
        </ul>
    );
}