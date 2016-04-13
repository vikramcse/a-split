var expect = require('chai').expect;
var split = require('./index.js');

describe('tests for splitting an array by given given length', function() {
  it('should pass the test given the length to split by 2', function() {
    expect(split([1, 2, 3, 4, 5, 6], 2).length).to.be.eql(3);

    expect(split([1, 2, 3, 4, 5, 6], 2)[0]).to.eql([1, 2]);
    expect(split([1, 2, 3, 4, 5, 6], 2)[1]).to.eql([3, 4]);
    expect(split([1, 2, 3, 4, 5, 6], 2)[2]).to.eql([5, 6]);
  });

  it('should get odd length of last array', function() {
    expect(split([1, 2, 3, 4, 5, 6, 7], 2).length).to.be.eql(4);

    expect(split([1, 2, 3, 4, 5, 6, 7], 2)[0]).to.eql([1, 2]);
    expect(split([1, 2, 3, 4, 5, 6, 7], 2)[1]).to.eql([3, 4]);
    expect(split([1, 2, 3, 4, 5, 6, 7], 2)[2]).to.eql([5, 6]);
    expect(split([1, 2, 3, 4, 5, 6, 7], 2)[3]).to.eql([7]);
  });
});
