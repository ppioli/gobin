import {useDispatch, useSelector} from "react-redux";
import {optionUpdate, selectOptionValue} from "./optionsSlice";
import {ValidationError} from "./ValidationError";
import React from "react";
import {ColorPicker} from "../../helpers/ColorPicker";



const StyleSelector = ({ parent }) => {

    const dispatch = useDispatch();

    const handleChange = ( path ) => ( evt ) => {
        dispatch(optionUpdate({ path: path, value: evt.target.value }))
    }

    const handleColorChange = ( path ) => ( color, evt ) => {
        dispatch(optionUpdate({ path: path, value: color }))
    }

    const buildPath = ( current ) => {
        return [ ...parent, current ].join('.');
    }

    return  <div className={'row'}>
        <div className={'col-6 form-group'}>
            <label>Border width(px)</label>
            <input className={'form-control'}
                   value={useSelector(selectOptionValue(buildPath('borderWidth')))}
                   onChange={handleChange(buildPath('borderWidth')) }  />
            <ValidationError path={buildPath('borderWidth')}/>
        </div>
        <div className={'col-6 form-group'}>
            <label>Border style</label>
            <select className={'form-control'}
                    value={useSelector(selectOptionValue(buildPath('borderStyle')))}
                    onChange={handleChange(buildPath('borderStyle'))} >
                <option value="none">none</option>
                <option value="dotted">dotted</option>
                <option value="dashed">dashed</option>
                <option value="solid">solid</option>
                <option value="double">double</option>
            </select>
            <ValidationError path={'bingoStyle.borderStyle'}/>
        </div>
        <div className={'col-6 form-group'}>
            <label>Border radius (px)</label>
            <input className={'form-control'}
                   value={useSelector(selectOptionValue(buildPath('borderRadius')))}
                   onChange={handleChange(buildPath('borderRadius'))}  />
            <ValidationError path={buildPath('borderRadius')}/>
        </div>
        <div className={'col-6 form-group'}>
            <label>Padding (px)</label>
            <input className={'form-control'}
                   value={useSelector(selectOptionValue(buildPath('padding')))}
                   onChange={handleChange(buildPath('padding'))}  />
            <ValidationError path={buildPath('padding')}/>
        </div>
        <div className={'col-6 form-group'}>
            <label>Border color</label>
            <ColorPicker
                value={useSelector(selectOptionValue(buildPath('borderColor')))}
                onChange={handleColorChange(buildPath('borderColor'))}
            />
        </div>
        <div className={'col-6 form-group'}>
            <label>Background color</label>
            <ColorPicker
                value={useSelector(selectOptionValue(buildPath('backgroundColor')))}
                onChange={handleColorChange(buildPath('backgroundColor'))}
            />
        </div>
    </div>
}

export {StyleSelector}