import { useContext, useState } from 'react';
import { CompendiumContext } from '../CompendiumContext';
import EquipmentModal from '../Modals/equipmentModal';

export default function HyruleList() {
    const [modalData, setModalData] = useState(null);
    const compendium = useContext(CompendiumContext);
    return (
        <>
            <ul>
                {compendium.data?.equipment.map((data) => (
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
                <EquipmentModal onClose={() => setModalData(null)} item={modalData} />
            }
        </>       
    );
};