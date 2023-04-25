import { useContext, useState } from 'react';
import { CompendiumContext } from '../CompendiumContext';
import TreasureModal from '../Modals/treasureModal';

export default function HyruleList() {
    const [modalData, setModalData] = useState(null);
    const compendium = useContext(CompendiumContext);
    return (
        <>
            <ul>
                {/* Here is where the fetched data is mapped and displayed*/}
                {compendium.data?.treasure.map((data) => (
                    <div 
                    className="listItems" 
                    key={data.id}>
                        <li>{data.name}</li>
                        <img 
                            key={data.id}
                            src={data.image}
                            alt="API made an oopsie"
                            // this will trigger the modal to appear
                            onClick={() => setModalData(data)}
                        /> 
                    </div>
                ))}
            </ul>
              {/*This will trigger the modal to disappear  */}
            {modalData && 
                <TreasureModal onClose={() => setModalData(null)} item={modalData} />
            }       
        </>
    );
};