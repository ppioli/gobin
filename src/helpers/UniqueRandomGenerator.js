import _ from 'lodash';

export class UniqueRandomGenerator {
    _bucketsCount;
    _bucketSize;

    _maxValue;

    _rng;

    constructor( bucketSize, maxValue, rng ) {
        this._bucketSize = bucketSize;
        this._maxValue = maxValue;
        this._bucketsCount = Math.ceil( this._maxValue / this._bucketSize )
        this._rng = rng;
    }

    generate( count ) {
        if( count > this._maxValue ) {
            throw new Error( 'Cannot produce more numbers than the size')
        }

        let numbers = [];
        const generated = [];
        let ix, part, bucket, number;

        // TODO fix this algorithm.
        while( count > 0) {

            //TODO should not reset pool withing the same buckets
            if( numbers.length === 0 ) {
                // refill the pool if it's empty
                numbers = _.range(this._bucketSize)
            }
            // pick a number
            ix = Math.floor( this._rng() * numbers.length )
            part = numbers[ix];
            numbers.splice( ix, 1);
            //pick a bucket
            bucket = Math.round( this._rng() * this._bucketsCount );
            //conform the number with bucket + number
            number = part + bucket * this._bucketSize;
            // if the value is greater than the max value, we drop it.
            // this happens when the generated values lands on the last bucket
            if( number > this._maxValue ) continue;
            generated.push(number)
            count--;
        }

        return generated;
    }

}