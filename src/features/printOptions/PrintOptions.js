import {Link} from "react-router-dom";
import {selectPrintOptionValue, updatePrintOption } from "./printOptionsSlice";
import {useDispatch, useSelector} from "react-redux";


const PrintOptions = () => {
    const dispatch = useDispatch();

    const handleChange = ( path ) => ( evt ) => {
        dispatch(updatePrintOption({path, value: evt.target.value }))
    }

    return <div className={'card'}>
        <div className={'card-header h4 m-0'}>
            Print
        </div>
        <div className={'card-body'}>
            <div className={'row'}>
                <div className={'col'}>
                    <label>Count</label>
                    <input className={'form-control'} type={'number'}
                           value={useSelector(selectPrintOptionValue('count'))}
                           onChange={handleChange('count')} />
                </div>
                <div className={'col'}>
                    <label>Columns</label>
                    <input className={'form-control'} type={'number'}
                           value={useSelector(selectPrintOptionValue('columns'))}
                           onChange={handleChange('columns')} />
                </div>
                <div className={'col-auto'}>
                    <Link to="/print">
                        <button style={{height: '100%'}} className={'btn btn-primary '}>
                            Print
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    </div>
}
export { PrintOptions }