import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {optionUpdate, selectOptionValue} from "./optionsSlice";
import {ValidationError} from "./ValidationError";
import {StyleSelector} from "./StyleSelector";

const Options = () => {

    const dispatch = useDispatch();

    const handleChange = ( path ) => ( evt ) => {
        dispatch(optionUpdate({ path: path, value: evt.target.value }))
    }

    return <div className={'card'}>
        <div className={'card-header h4 m-0'}>
            Options
        </div>
        <div className={'card-body'}>
            <h5>Layout</h5>
            <div className={'row'}>
                <div className={'col-6 form-group'}>
                    <label>Rows</label>
                    <input className={'form-control'}
                           value={useSelector(selectOptionValue('rows'))}
                           onChange={handleChange('rows')}  />
                    <ValidationError path={'rows'}/>
                </div>
                <div className={'col-6 form-group'}>
                    <label>Columns</label>
                    <input className={'form-control'}
                           value={useSelector(selectOptionValue('columns'))}
                           onChange={handleChange('columns')}  />
                    <ValidationError path={'columns'}/>
                </div>
            </div>
            <hr />
            <div className={'row'}>
                <div className={'col-12 col-lg-6'}>
                    <h5>Card Style</h5>
                    <StyleSelector parent={['bingoStyle']} />
                </div>
                <div className={'col-12 col-lg-6'}>
                    <h5>Card Cell Style</h5>
                    <StyleSelector parent={['bingoCellStyle']} />
                </div>
            </div>
        </div>
    </div>
}

export {Options}