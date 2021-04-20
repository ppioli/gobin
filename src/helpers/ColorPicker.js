import React, {useState} from 'react'
import { SketchPicker } from 'react-color'

const ColorPicker = ({ value, onChange }) => {
    const [color, setColor] = useState(value);
    const [ visible, setVisible ] = useState(false);

    const handleClick = () => {
        setVisible(!visible)
    };

    const handleClose = () => {
        setVisible( false );
    };

    const handleChange = (color) => {
        setColor(color.hex);
        onChange( color.hex );
    };



    const styles = {
        color: {
            width: '100%',
            height: '100%',
            borderRadius: '.25rem',
            background: color,
            border: '1px solid gray',
            maxWidth: '2.5rem'
        },
        popover: {
            position: 'absolute',
            zIndex: '2',
        },
        cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        },
    };

    return (
        <div>
            <div className={'form-control d-flex'} onClick={ handleClick }>
                <div style={ styles.color } />
                <div className={'text-center w-100'}>{color}</div>
            </div>
            { visible ? <div style={ styles.popover }>
                <div style={ styles.cover } onClick={ handleClose }/>
                <SketchPicker color={ color } onChange={ handleChange } />
            </div> : null }
        </div>
    )

}

export {ColorPicker}