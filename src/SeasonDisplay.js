import React from 'react';
import { Icon } from 'semantic-ui-react';
import './SeasonDisplay.css';

const seasonConf = {
    summer: {
        display: 'Ow, that is hot',
        nameIcon: 'sun'
    },
    winter: {
        display: 'It is cold here',
        nameIcon: 'snowflake'
    }
}
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}
 
const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const { display, nameIcon } = seasonConf[season];

    return <div className={`season-display ${season}`}>
    <Icon className='icon-left' name={nameIcon} size='massive' />
    <h1>{display}</h1>
    <Icon className='icon-right' name={nameIcon} size='massive' />
    </div>
};

export default SeasonDisplay;