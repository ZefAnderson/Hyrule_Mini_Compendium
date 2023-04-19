export default function ModalContent ({onClose, item}) {
    console.log("item", item);
    return (
        <div className="modal">
            <div className="modal-content">
                <ul>
                    <div className="listItems"> 
                        <li>{item.name}</li>
                        <li>{item.description}</li>
                        <li>{item.common_locations}</li>
                        <img
                            key={item.id} 
                            src={item.image}
                            alt="API made an oopsie"
                        /> 
                    </div>
                    <button onClick={onClose}>I'm Good</button>
                </ul>  
            </div>
        </div>
    );
}
