import {useState} from "react";
import {BingoCard} from "../bingoCard/BingoCard";


const ImageUploader = () => {
    const [ selectedFiles, setSelectedFiles] = useState([]);
    const [ elements, setElements ] = useState([]);

    const addElements = (event) => {
        const addedElements = Object.values(selectedFiles).map( f => {
            return {
                label: f.name,
                image: URL.createObjectURL(f)
            }
        })

        setElements( [...elements, ...addedElements] )
    }

    return <div>
        <div className="row">
            <div className="col-8">
                <label className="btn btn-default p-0">
                    <input type="file" multiple accept="image/*" onChange={ (evt) => setSelectedFiles( evt.target.files ) } />
                </label>
            </div>

            <div className="col-4">
                <button className="btn btn-success btn-sm" onClick={addElements} >
                    Upload
                </button>
            </div>
        </div>

        <BingoCard rows={3} cols={3} elements={elements} layout={[1,2,3,4,5,6,1,2,3]} />

        {elements && (
            <div>
                {elements.map((element, i) => {
                    return <img className="preview" src={element.image} alt={element.label}  key={i}/>;
                })}
            </div>
        )}
    </div>


}

export { ImageUploader };