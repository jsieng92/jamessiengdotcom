import React from 'react';

const RequestAnExpert = (props) => {

    return (  
        [
            <svg width={props.width} height={props.height}>
            <g>

               
            <rect x="0" y="0" width={props.width} height={props.height} rx="25" 
            style={{"fill": "#1F76C0", "stroke-width":"2", "stroke":"#599EB4", 
            "stroke-opacity":"0.9","opacity":"0.9"}}></rect>
            <text x="50%" y="50%" fill="#EED7C6" dominant-baseline="middle" text-anchor="middle">REQUEST AN EXPERT</text>
            </g>
         </svg>
        ]
    );
}
 
export {RequestAnExpert};