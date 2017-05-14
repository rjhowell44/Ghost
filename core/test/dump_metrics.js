var heapMetrics = require( 'heap-metrics' );

describe('DumpHeapMetrics', function(){
  it('should return true', function(){
    console.log(heapMetrics.GetHeapMetrics());
    assert(heapMetrics.DumpHeapMetrics());
  });
})
