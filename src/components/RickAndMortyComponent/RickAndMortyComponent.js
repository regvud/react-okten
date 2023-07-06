const RickAndMortyComponent = (props) => {
    const {id, name, status, species, gender, image} = props;
    return (
        <div>
            <h5>ID: {id} Name: {name} Status: {status} Species: {species} Gender: {gender}</h5>
            <img src={image} alt="image"/>
        </div>
    )

}

export default RickAndMortyComponent;
