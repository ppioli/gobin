import React from "react";

const ErrorComponent = ({displayMessage, helpMessage}) => {
    return <div className={'text-muted text-center'}>
        <h3>Error: {displayMessage} </h3>
        { helpMessage && <h4>{helpMessage}</h4>}
    </div>
};

export {ErrorComponent}