import { add } from '../examples/add.mjs';
import assert from 'assert';

describe('Native Es Module', function() {
  it('should add two numbers from an es module', () => {
    assert.equal(add(3, 5), 8);
  });
  })