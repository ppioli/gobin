import {BingoCard} from "../bingoCard/BingoCard";
import {useSelector} from "react-redux";
import tokensSlice, {selectTokens, selectTokensIds, selectTokensMap} from "../tokens/tokensSlice";
import {selectOptionValue} from "../options/optionsSlice";

import classNames from "classnames";
import {ErrorBoundary} from "../../helpers/ErrorBoundary";
import {UserError} from "../../helpers/UserError";
import {BingoCardValueGenerator} from "../bingoCard/BingoCardValueGenerator";
import {useEffect, useState} from "react";
import seedrandom from "seedrandom";
import {ErrorComponent} from "../../helpers/ErrorComponent";
import {MessageComponent} from "../../helpers/MessageComponent";

const BingoCardPreviewInner = ({className, ...props}) => {

    const optionsValid = useSelector( state => state.options.valid );
    const tokens = useSelector( selectTokensMap );

    const rows = useSelector( selectOptionValue('rows'))
    const columns = useSelector( selectOptionValue('columns'))
    const bingoStyle = useSelector( selectOptionValue('bingoStyle'))
    const bingoCellStyle = useSelector( selectOptionValue('bingoCellStyle'))
    const [values, setValues] = useState([])

    useEffect( () => {
        setValues(BingoCardValueGenerator.generate(Object.keys(tokens), rows, columns))
    }, [rows, tokens, columns ])

    if( Object.values(tokens).length === 0 ) {
        return <MessageComponent title={'There are no tokens'} subtitle={'Add some tokens to see a preview of the card'} />;
    }

    if( !optionsValid ) {
        return <MessageComponent title={'Invalid options'} subtitle={'Fix them to see a preview of the bingo card'} />;
    }


    const cardProps = {
        tokens,
        rows,
        columns,
        bingoStyle,
        bingoCellStyle,
        values
    }

    const randomize = () => {
        setValues( BingoCardValueGenerator.generate(Object.keys(tokens), rows, columns) );
    }

    return <div className={'d-flex flex-column'} onClick={randomize}>
        <BingoCard { ...cardProps } />
        <small className={'text-muted text-center'}>Click to randomize</small>
    </div>

}

const BingoCardPreview = ({className, ...props}) => {

    return <div className={classNames('card', className)}>
        <div className={'card-header h4 m-0'}>
            Preview
        </div>
        <div className={'card-body d-flex flex-column align-items-center justify-content-center'} {...props} >
            <ErrorBoundary>
                <BingoCardPreviewInner />
            </ErrorBoundary>
        </div>
    </div>
}

export { BingoCardPreview }
