/* global describe it */

const lib = require('./index')
const { expect } = require('chai')

describe('index', () => {
    it('has a noop function', () => {
        expect(typeof lib).to.equal('function')
    })
})
