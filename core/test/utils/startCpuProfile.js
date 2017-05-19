var cpuMetrics = require('cpu-metrics'),
    assert = require('assert');

describe('StartProfiling', function () {
    it('should return true', function () {
        assert(cpuMetrics.StartProfiling());
    });
});
