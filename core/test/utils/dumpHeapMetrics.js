var heapMetrics = require('heap-metrics'),
    expect = require('expect');

describe('DumpHeapMetrics', function () {
    it('should return true', function () {
        expect((heapMetrics.DumpHeapMetrics())).to.equal(true);
    });
});
