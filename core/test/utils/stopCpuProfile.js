var cpuMetrics = require('cpu-metrics'),
    assert = require('assert');

describe('StopProfiling', function () {
    it('should return true', function () {
        assert(cpuMetrics.StopProfiling());
    });
});
