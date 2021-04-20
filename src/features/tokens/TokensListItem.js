import {useDispatch, useSelector} from "react-redux";
import {selectTokenById, tokenRemoved, tokenUpdate} from "./tokensSlice";


const TokensListItem = ({id}) => {
    const token = useSelector( state => selectTokenById( state, id ));
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch( tokenUpdate({id, label: event.target.value }))
    }

    const handleDelete = () => {
        dispatch( tokenRemoved(id))
    }

    return <li className="list-group-item p-0">
        <div className={'d-flex'}>
            <div className={'d-flex align-items-center p-1 border border-rounded'} style={{minWidth: 62, minHeight: 62}}>
                { token.image && <img style={{ maxWidth: '100%', maxHeight: '100%'}} alt={token.label} src={token.image} /> }
            </div>
                <textarea type={'text'} className={'form-control'} value={token.label} onChange={handleChange}/>
            <button className={'btn btn-danger'} onClick={handleDelete}>
                <img src={'/icons/trash-outline.svg'} height={24} width={24} style={{filter: 'brightness(0) invert(1)'}}/>
            </button>
        </div>


    </li>
}

export {TokensListItem}