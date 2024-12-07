import React, {useEffect, useState} from 'react';

export const ToggleSwitch = (props) => {
    const [switchstatus, setSwitchstatus] = useState(true);

    const buttonSwitchHandler = () => {
        setSwitchstatus(prevState => !prevState);
    }

    useEffect(() => {
        props.displayHandler(switchstatus);
    }, [switchstatus]);

    return(
        <div>
            <button onClick={buttonSwitchHandler}>{switchstatus? 'Hide': 'Show'}</button>
        </div>
    )
}
