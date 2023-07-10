import React, {useEffect, useState} from 'react';
import SwitchColors from "./SwitchColors";

const SwitchColorsContainer = () => {
    const [color, setColor] = useState(false)
    // useEffect(() => {
    //     setColor(true)
    // }, [])
    return <SwitchColors color={blue}/>
};

export default SwitchColorsContainer;