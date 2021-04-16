import logo from "../../logo.svg";
import _ from 'lodash';
const BingoCard = ({cols, rows, elements, layout}) => {
    const style = {
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
    }

    return <div style={style}>
        {layout.map((i) => <img src={elements[i]?.image ?? undefined} className="App-logo" alt="logo"/>)}
    </div>
}

export { BingoCard }