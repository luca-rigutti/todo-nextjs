function Card({title,description}){
    return (
        <div className="card mb-10">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Button</a>
            </div>
        </div>
    )
}

export default Card;