var heapMetrics = require('heap-metrics');
var assert = require('assert');

describe('DumpHeapMetrics', function(){
  it('should return true', function(){
    console.log(heapMetrics.GetHeapMetrics());
    assert(heapMetrics.DumpHeapMetrics());
  });
})
