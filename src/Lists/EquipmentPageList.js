import { useContext } from 'react';
import { CompendiumContext } from '../CompendiumContext';

export default function EquipmentPageList() {
    const compendium = useContext(CompendiumContext);
    return (
        <ul>
            {compendium.data?.equipment.map((data) => (
                <div className="listItems"> 
                    <li key={data.id}>{data.name}</li>
                    <img 
                        src={data.image}
                        alt="API made an oopsie"
                    /> 
                </div>
            ))}
            </ul>  
    );
};