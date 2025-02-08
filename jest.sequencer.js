const Sequencer = require('@jest/test-sequencer').default;

class CustomSequencer extends Sequencer {
  sort(tests) {
    // Return a new array with tests ordered by size (smallest first)
    return tests.sort((testA, testB) => {
      // Run smaller test files first
      const lengthA = testA.path.length;
      const lengthB = testB.path.length;
      return lengthA - lengthB;
    });
  }
}

module.exports = CustomSequencer;
