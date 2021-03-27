'use strict';

const Benchmark = require('benchmark');
const CleanCSS = require('..');

const input = '@import url(test/fixtures/bench/complex.css);';
const suite = new Benchmark.Suite({
  async: true,
  initCount: 10,
  minSamples: 100,
  maxTime: 30,
  minTime: 10
});

for (let level = 0; level < 3; level++) {
  suite.add(`CleanCSS level ${level}`, () => {
    new CleanCSS({ level }).minify(input);
  });
}

suite.on('cycle', event => {
  console.log(String(event.target));
});

suite.run();
