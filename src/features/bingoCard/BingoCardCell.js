const BingoCardCell = ({token, cellStyle}) => {
    const img = token?.image;
    const label = token?.label ?? '';

    const style = {
        width: '100%',
        height: '100%',
        borderColor: cellStyle?.borderColor,
        borderWidth: cellStyle?.borderWidth + 'px',
        borderRadius: cellStyle?.borderRadius + 'px',
        borderStyle: cellStyle?.borderStyle,
        backgroundColor: cellStyle?.backgroundColor,
        padding: cellStyle?.padding + 'px',
        aspectRatio: 1,
    }

    return <div className={'d-flex justify-content-center align-items-center'} style={style}>
        { img && <img style={{width: '100%'}} src={img} alt={label} /> }
        { label && !img && <div style={{ position: 'relative', width: '100%', height:'100%'}} >
            <div style={{position:'absolute', top: 0, left: 0, width: '100%', height:'100%'}}>
                <div style={{maxHeight: '100%', height: '100%'}} className={'text-truncate text-wrap text-center d-flex flex-column justify-content-around'}>
                    <div>{label}</div>
                </div>
            </div>
        </div>}
    </div>
}

export {BingoCardCell}