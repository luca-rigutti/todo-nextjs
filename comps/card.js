import { useContext } from 'react';
import { EventContext } from '../pages/index'; // Import the context

function Card({title,id,description}){
    const handleCardEvent = useContext(EventContext);

  const handleClick = () => {
    handleCardEvent(id); // Send the id back to Home component
  };
    return (
        <div className="row g-0">
            <div className="col-md-10">
                <div className="card mb-10">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
            </div>
            <div className="col-md-2">
                {id}
                <button onClick={handleClick}>Delete</button>
            </div>
        </div>
        
    )
}

export default Card;
