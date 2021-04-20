import React from "react";

const MessageComponent = ({title, subtitle}) => {
    return <div className={'text-muted text-center'}>
        <h3>{title} </h3>
        { subtitle && <h4>{subtitle}</h4>}
    </div>
};

export {MessageComponent}