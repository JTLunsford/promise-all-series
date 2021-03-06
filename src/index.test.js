
import { expect } from 'chai'

import { PromiseAllSeries } from './index'

describe('promise-series-all', () => {
    it('should take an array of promises and produce an array of results', () =>
        PromiseAllSeries([
            x => Promise.resolve(x),
            (x, y) => Promise.resolve(x + y),
            () => Promise.resolve(2)
        ])([
            [ 0 ],
            [ 2, -1 ],
            []
        ]).then(arr => {
            expect(arr).to.be.an('array')
            expect(arr.length).to.be.equal(3)
            expect(arr[0][0]).to.be.equal(0)
            expect(arr[1][0]).to.be.equal(1)
            expect(arr[2][0]).to.be.equal(2)
        })
    )
})
