import { useContext, useState } from 'react';
import { CompendiumContext } from '../CompendiumContext';
import MonstersModal from '../Modals/monstersModal';

export default function HyruleList() {
    const [modalData, setModalData] = useState(null);
    const compendium = useContext(CompendiumContext);
    return (
        <>
            <ul>
                {compendium.data?.monsters.map((data) => (
                    <div 
                    className="listItems" 
                    key={data.id}>
                        <li>{data.name}</li>
                        <img 
                            key={data.id}
                            src={data.image}
                            alt="API made an oopsie"
                            onClick={() => setModalData(data)}
                        /> 
                    </div>
                ))}
            </ul>
            {modalData && 
                <MonstersModal onClose={() => setModalData(null)} item={modalData} />
            }       
        </>
    );
};