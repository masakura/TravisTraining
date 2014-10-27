(function () {
  'use strict';

  var exec = require('child_process').exec;

  describe('Test demo', function () {
    it('test1', function () {
      expect(3).toEqual(3);
    });

    it('test2', function (done) {
      exec('echo $PATH', done);
    });
  });
})();
