// credits to Joren https://stackoverflow.com/a/1506337
import _ from 'lodash'
import {factorial} from "./factorial";
export class PermutationHelper {
    identity;
    elements;
    base;
    max;

    constructor(elements) {
        this.elements = elements;
        this.base = elements.length;
        this.max = factorial( this.base );
        this.identity = _.range(0, this.base);
    }

    createPermutation(index) {
        // create a permutation based on an index
        const operation = this.decodeIndex(index);
        // create an empty array to build the permutation on top
        const permutation = _.times( this.base, _.constant(null))
        // just for convenience  - 1;
        // iterate over each value on the operation
        for (let i = this.base-1; i >= 0; i--)
        {
            let s = operation[i];

            // iterate over each value on the permutation we are building.
            for (let j = 0; j <  this.base; j++)
            {
                // if the value is set, the value is occupied, so we skip it.
                if (permutation[j] != null) continue;
                // we discount one from our distance and check if we have arrived at the correct position
                if( s === 0) {
                    permutation[j] = this.elements[i];
                    break;
                } else {
                    s--;
                }
            }
        }

        return permutation;
    }

    decodeIndex(index) {
        if( index > this.max ) {
            throw new Error(`Invalid index. Max number of combinations is ${this.max}.`)
        }
        const values = [0];
        let base = 2
        for (let k = 0; k < this.base-1; k++)
        {
            values.push(index % base);
            index = Math.floor(index / base);

            base++; // b[k+1] = b[k] + 1
        }
        return values;
    }

}

