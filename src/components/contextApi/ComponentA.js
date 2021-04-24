import React, { createContext } from 'react';
import ComponentB from './ComponentB';

const data = createContext();

const ComponentA = () => {
    return (
            <data.Provider value={"Ashish"}>
                <ComponentB/>
            </data.Provider>
        
    )
}

export default ComponentA;
export {data};
