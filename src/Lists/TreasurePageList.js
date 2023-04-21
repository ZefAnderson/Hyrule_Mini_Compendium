import { useContext, useState } from 'react';
import { CompendiumContext } from '../CompendiumContext';
import TreasureModal from '../Modals/treasureModal';

export default function HyruleList() {
    const [modalData, setModalData] = useState(null);
    const compendium = useContext(CompendiumContext);
    return (
        <>
            <div className={`behindModal ${modalData ? 'blur' : ''}`}>
                <ul>
                    {compendium.data?.treasure.map((data) => (
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
            </div>
            {modalData && 
                <TreasureModal onClose={() => setModalData(null)} item={modalData} />
            }       
        </>
    );
};