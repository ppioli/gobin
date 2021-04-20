import {PermutationHelper} from "../../helpers/PermutationHelper";
import {factorial} from "../../helpers/factorial";
import _ from 'lodash';
import seedrandom from "seedrandom";

export class BingoCardValueGenerator {
    max;
    permutationHelper;

    constructor( elementsIds, rows, cols ) {
        this.permutationHelper = new PermutationHelper( elementsIds )
        this.count = rows * cols;
        this.max = factorial( elementsIds.length )
    }

    generate( ix ) {
        if( ix === undefined ) {
            ix = Math.round(seedrandom()() * this.max);
        }
        if( ix > this.max ) {
            throw new Error('The index of the card exceeds the maximum amount of cards that can be generated')
        }
        const values = this.permutationHelper.createPermutation( ix );
        return _.takeRight( values, this.count )
    }

    static generate( elementsIds, rows, cols ) {
        const h = new BingoCardValueGenerator( elementsIds, rows, cols );
        return h.generate()
    }


}