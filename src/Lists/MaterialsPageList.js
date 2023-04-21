import { useContext, useState } from 'react';
import { CompendiumContext } from '../CompendiumContext';
import MaterialsModal from '../Modals/materialsModal';

export default function HyruleList() {
    const [modalData, setModalData] = useState(null);
    const compendium = useContext(CompendiumContext);
    return (
        <>
            <div className={`behindModal ${modalData ? 'blur' : ''}`}>
                <ul>
                    {compendium.data?.materials.map((data) => (
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
                <MaterialsModal onClose={() => setModalData(null)} item={modalData} />
            }       
        </>
    );
};