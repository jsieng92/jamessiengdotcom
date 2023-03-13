import React from 'react';

const RequestAnExpert = (props) => {

    return (  
        [
            <svg width={props.width} height={props.height}>
            <g>

               
            <rect x="0" y="0" width={props.width} height={props.height} rx="25" 
            style={{"fill": "#704060", "stroke-width":"1", "stroke":"#162449", 
            "stroke-opacity":"0.9","opacity":"0.9"}}></rect>
            <text x="50%" y="50%" fill="#FFFFFF" dominant-baseline="middle" text-anchor="middle" opacity="0.9">REQUEST AN EXPERT</text>
            </g>
         </svg>
        ]
    );
}
 
export {RequestAnExpert};