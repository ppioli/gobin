import _ from 'lodash';
import {BingoCard} from "../features/bingoCard/BingoCard";
import {useSelector} from "react-redux";
import {selectTokensMap} from "../features/tokens/tokensSlice";
import {selectOptionValue} from "../features/options/optionsSlice";
import seedrandom from "seedrandom";
import {UniqueRandomGenerator} from "../helpers/UniqueRandomGenerator";
import {BingoCardValueGenerator} from "../features/bingoCard/BingoCardValueGenerator";
import {selectPrintOptionsState, selectPrintOptionValue} from "../features/printOptions/printOptionsSlice";

const Print = () => {
    const state = useSelector( selectPrintOptionsState() )
    const { valid, values: { count, columns }} = state;
    const tokens = useSelector( selectTokensMap );
    const bingoRows = useSelector( selectOptionValue('rows'))
    const bingoColumns = useSelector( selectOptionValue('columns'))
    const bingoStyle = useSelector( selectOptionValue('bingoStyle'))
    const bingoCellStyle = useSelector( selectOptionValue('bingoCellStyle'))

    const bingoGenerator = new BingoCardValueGenerator(Object.keys(tokens), bingoRows, bingoColumns );

    const uniqueRng = new UniqueRandomGenerator( 1000, bingoGenerator.max, seedrandom())
    const bingos = uniqueRng.generate(count);

    const style = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${Math.ceil(count/columns)}, 1fr)`,
    }

    const rowStyle = {
        pageBreakInside: 'avoid'
    }

    const tdStyle = {
        border: '1px dotted #e4e4e4',
        padding: '10px'
    }

    let currentBingo = 0;
    const renderedRows = [];
    while( currentBingo < count ) {
        let currentRow = [];
        while( true ) {
            const cardProps = {
                tokens,
                rows: bingoRows,
                columns: bingoColumns,
                bingoStyle,
                bingoCellStyle,
                values: bingoGenerator.generate(bingos[currentBingo])
            }
            currentRow.push( <td style={tdStyle} key={`card_${currentBingo}`}>
                {count >= 0 && <BingoCard {...cardProps}/>}
            </td>)
            currentBingo++;
            // reset row
            if( currentBingo % columns === 0){
                break;
            }
        }

        renderedRows.push( <tr key={`row_${Math.floor(currentBingo/columns)}`} style={rowStyle}>
            {currentRow}
        </tr> )
    }

    return <table className={'w-100'} style={{borderCollapse: 'collapse'}} >
        <tbody>
            {renderedRows}
        </tbody>
    </table>
}

export { Print }