
import FeelingsList from './FeelingsList';
import './Garfield.css'

function Garfield(props) {
    const image  ="https://s3.amazonaws.com/accsoftwarebootcamp.com/garfield-1.jpg"

    return(
        <div className= "theImage">
            <h1 className= "name">Garfield's Life</h1>
            <img src= {image} alt="Garfield Comic" />
            <h1>How does he feel?</h1>
            <feelingsList feelings = {props.feelings} />
        </div>
    );
}

export default Garfield;