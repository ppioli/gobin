export function getProperty(obj, path) {
    const paths = path.split('.')
    let current = obj;

    for (let ix = 0; ix < paths.length; ix++) {
        if (current[paths[ix]] === undefined) {
            return undefined;
        } else {
            current = current[paths[ix]];
        }
    }
    return current;
}

export function setProperty(obj, path, value) {
    const pathArray = path.split(".");
    let pointer = obj; // points to the current nested object
    for (let i = 0, len = pathArray.length; i < len; i++) {
        let path = pathArray[i];
        if (pointer.hasOwnProperty(path)) {
            if (i === len - 1) { // terminating condition
                pointer[path] = value;
            } else {
                pointer = pointer[path];
            }
        } else {
            throw new Error('Invalid path ' + path );
        }
    }
}