import React from 'react';
import { Icon } from 'semantic-ui-react';

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

    return <div>
    <Icon name={nameIcon} size='huge' />
    <h1>{display}</h1>
    <Icon name={nameIcon} size='huge' />
    </div>
};

export default SeasonDisplay;