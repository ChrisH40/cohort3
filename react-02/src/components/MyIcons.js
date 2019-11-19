import React from 'react';
import explosionIcon from './images/explosion-icon.svg';
import houseIcon from './images/house-icon.svg';
import nuclearAtomIcon from './images/nuclear-atom-icon.svg';
import nuclearRadiationIcon from './images/nuclear-radiation-icon.svg';
import reactIcon from './images/react-icon.svg';


class Icons extends React.Component {

    imageMapper = () => {
        const images = [nuclearAtomIcon, explosionIcon, reactIcon, houseIcon, nuclearRadiationIcon];
        return images.map((image, i) => <img key={i} name={image} src={image} tabIndex={i} className={`icon ${image}`} alt={`icon ${image}`}/>);  
    }

    render() {
        return (
            <div className="nav">
                {this.imageMapper()}
            </div>
        )
    }
}

export default Icons;