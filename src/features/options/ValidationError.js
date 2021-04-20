import {useSelector} from "react-redux";
import {selectOptionError, selectOptionValid} from "./optionsSlice";
import classNames from "classnames";


const ValidationError = ({path}) => {
    const errors = useSelector( selectOptionError(path) )
    const error = errors && errors.length > 0 ? errors[0] : null;
    return <small className={classNames({ 'd-none': error == null, 'text-danger': true })}>
        {error && error.charAt(0).toUpperCase() + error.slice(1)}
    </small>
}

export {ValidationError}