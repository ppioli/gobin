
export function aggregateError( errors ) {
    const result = {};
    for ( let error of errors ) {
        if( error.inner.length > 0 ) {
            result[error.path] = aggregateError( error.inner )
        } else {
            result[error.path] = error.errors;
        }
    }
    return result;
}