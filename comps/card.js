function Card({title,description}){
    return (
        <div class="card mb-10">
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <a href="#" class="btn btn-primary">Button</a>
            </div>
        </div>
    )
}

export default Card;