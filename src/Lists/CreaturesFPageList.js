import { useContext, useState } from 'react';
import { CompendiumContext } from '../CompendiumContext';
import CreaturesFModal from '../Modals/creaturesFModal';

export default function CreaturesFPageList() {
    const [modalData, setModalData] = useState(null);
    const compendium = useContext(CompendiumContext);
    return (
        <>
            <div className={`behindModal ${modalData ? 'blur' : ''}`}>
                <ul>
                    {compendium.data?.creatures.food.map((data) => (
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
                <CreaturesFModal onClose={() => setModalData(null)} item={modalData} />
            }  
        </>
    );

};