//profileCard component with handling props to view different properties
function ProfileCard({title, handle, image, description}) {
   
    return(
        <div className="card">
            <div class="card-image">
            <figure class="image is-1by1">
                <img src={image} alt="pda logo"/>
            </figure>
            </div>
            
            <div class="card-content">
                <div class="media-content">
                <p className="title is-4">{ title }</p>
                <p className="subtitle is-6">{ handle }</p>
                </div>
                <div className="content">{description}</div>
            </div>
            
        </div>
    )
}

export default ProfileCard;