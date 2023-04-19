import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { CompendiumContext } from '../CompendiumContext';
import ModalContent from '../modalcontent';

export default function HyruleList() {
    const [showModal, setShowModal] = useState(false);
    const compendium = useContext(CompendiumContext);
    return (
        <ul>
            {compendium.data?.treasure.map((data) => (
                <div className="listItems"> 
                    <li>{data.name}</li>
                    <img 
                        key={data.id}
                        src={data.image}
                        alt="API made an oopsie"
                        onClick={() => setShowModal(true)}
                    /> 
                    {showModal && createPortal(
                        <ModalContent onClose={() => setShowModal(false)} />,
                        document.body
                    )}
                </div>
            ))}
        </ul>  
    );
};