import React, { Children } from "react";

function MyComponentFunc (props) {

    return (
        <div>
            <h3>나는{props.name}</h3>
            {Children}
                        
        </div>
    );
}
export default MyComponentFunc;