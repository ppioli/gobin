import {TokensListItem} from "./TokensListItem.js";

const TokensList = ({tokensIds, ...props}) => {

    const renderedItems = tokensIds.map((elementId) => {
        return <TokensListItem id={elementId} key={elementId} />
    })

    return  <div className={'list-group'} {...props}>
        {renderedItems}
    </div>
}

export { TokensList }

