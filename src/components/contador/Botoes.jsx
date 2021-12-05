/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
    return (
        <div>
            {/* "props.onIncrementar" também pode usar "e => props.onIncrementar(e)" */}
            <button onClick={props.onIncrementar}>+</button>
            <button onClick={props.onDecrementar}>-</button>
        </div>
    );
};
