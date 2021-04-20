import {useDispatch} from 'react-redux';
import {tokensAdded} from "./tokensSlice";

const ImageUploader = () => {
    let fileInput = null;

    const dispatch = useDispatch()

    const handleFilesSelected = (files) => {
        // create a token list with the new items
        const addedTokens = Object.values(files).map( f => {
            return {
                label: f.name,
                image: URL.createObjectURL(f)
            }
        })
        dispatch( tokensAdded(addedTokens) );
    }

    return <div>
        <button className="btn btn-primary" onClick={() => fileInput.click()}>Add image</button>
            <div className="row">
            <div className="d-none">
                <input type="file" ref={input => fileInput = input } multiple accept="image/*" onChange={ (evt) => handleFilesSelected( evt.target.files ) } />
            </div>
        </div>
    </div>


}

export { ImageUploader };