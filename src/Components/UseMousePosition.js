/* import { useState, useEffect } from 'react';
const UseMousePosition = () => {
    const [position, setPosition] = useState({
        clientX: 0,
        clientY: 0,
    })
    const UpdatePosition = event => {
        const { pageX, pageY, clientX, clientY } = event;

        setPosition({
            clientX,
            clientY,
        });
    };

    useEffect(() => {
        document.addEventListener("mousemove", UpdatePosition, false);
        document.addEventListener("mouseenter", UpdatePosition, false);

        return() => {
            document.removeEventListener("mousemove", UpdatePosition);
            document.removeEventListener("mousemove", UpdatePosition);
        };
    }, []);
    return position;
};
 
export {UseMousePosition}; */