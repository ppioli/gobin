import {TokensList} from "./TokensList";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {selectTokensIds, tokenAdded} from "./tokensSlice";
import {ImageUploader} from "./ImageUploader";


const TokensEdit = ({className, ...props}) => {
    const tokensIds = useSelector( selectTokensIds )
    const dispatch = useDispatch();

    return <div className={classNames(className, 'card')} {...props}>
        <div className={'card-header h4 m-0'}>
            Tokens
        </div>

        { tokensIds.length === 0 ?
            <div className={'d-flex flex-column align-items-center justify-content-center text-muted'} style={{height: '100%'}}>
                <h3>There are no tokens added</h3>
                <h4>Use the button below to add some tokens</h4>
            </div> :
            <TokensList style={{overflowY: 'scroll', height: '100%'}} tokensIds={tokensIds} />
        }

        <div className={'card-footer d-flex flex-row-reverse'}>
            <button className={'btn btn-info'} onClick={() => dispatch(tokenAdded({ label: 'New token' }))} >
                Add
            </button>
            <ImageUploader />
        </div>
    </div>
}

export { TokensEdit }