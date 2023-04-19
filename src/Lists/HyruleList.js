import { useContext, useState } from 'react';
// import { createPortal } from 'react-dom';
import { CompendiumContext } from '../CompendiumContext';
import ModalContent from '../modalcontent';

export default function HyruleList() {
    const [selectedItem, setSelectedItem] = useState(null);
    const compendium = useContext(CompendiumContext);
    console.log('compendium', compendium)
    return (
        <ul>
            {compendium.data?.treasure.map((data) => (
                <div className="listItems" key={data.id}> 
                    <li>{data.name}</li>
                    <img 
                        key={data.id}
                        src={data.image}
                        alt="API made an oopsie"
                        onClick={() => setSelectedItem(data)}
                    /> 
                </div>
            ))}
            {selectedItem && 
                <ModalContent onClose={() => setSelectedItem(null)} item={selectedItem} />
            }
        </ul>  
    );
};
