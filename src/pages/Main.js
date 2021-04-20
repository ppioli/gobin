import {TokensEdit} from "../features/tokens/TokensEdit";
import {Options} from "../features/options/Options";
import {BingoCardPreview} from "../features/bingoCardPreview/BingoCardPreview";
import {PrintOptions} from "../features/printOptions/PrintOptions";


const Main = () => {

    const height = 'calc(100vh - 100px)'

    return <div className={'container p-2'}>
        <div className={'row no-gutters'} >
            <div className={'col-lg-4 col-md-6 col-12 d-flex flex-column'}>
                <TokensEdit className={'flex-grow-1'} style={{height: height}}/>
            </div>
            <div className={'col-lg-8 col-md-6 col-12 d-flex flex-column'}>
                <Options />
                <BingoCardPreview className={'flex-grow-1'}/>
                <PrintOptions />
            </div>
        </div>
    </div>
}

export {Main}