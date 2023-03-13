import React from 'react';
import {RequestAnExpert} from '../Components/RequestAnExpert';
const Test = () => {
    return (  
        [
        <div className={"bg-red turquoise"}>Testimony from our expert witness has helped keep oil out of oceans,
        dangerous chemicals out of food, and led to safer skyscrapers.</div>,
        <br />,<br />,
        <div className={"bg-yellow"}>yellow</div>,
        <div className={"bg-whiteish"}>whiteishbackground</div>,
        <div className={"bg-blue"}>blueish bakcground</div>,
        <div className={"bg-darkblue"}>darkblue</div>,
        <div className={"bg-darkerblue"}>darkerblue</div>,
        <br />,<br />,
        <RequestAnExpert height="60" width="240" />,
        <RequestAnExpert height="50" width="210" />
        ] 
    );
}
 
export {Test};