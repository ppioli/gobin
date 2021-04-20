import {BingoCardCell} from "./BingoCardCell";

const BingoCard = ({tokens, bingoStyle, bingoCellStyle, values, columns, rows }) => {

    const style = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0,1fr))`,
        borderStyle: bingoStyle?.borderStyle,
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        borderWidth: bingoStyle?.borderWidth + 'px',
        borderColor: bingoStyle?.borderColor,
        borderRadius: bingoStyle?.borderRadius + 'px',
        backgroundColor: bingoStyle?.backgroundColor,
        padding: bingoStyle?.padding + 'px'
    }

    return <div style={style}>
        {values.map(( tokenId, ix) => <BingoCardCell key={ix} token={tokens[tokenId]} cellStyle={bingoCellStyle} />) }
    </div>
}

export { BingoCard }