'use strict';

import Foo from '../scripts/Foo';

describe("A suite", () => {
  const instance = new Foo();
  it("contains spec with an expectation", () => {
    expect(instance.bar).toBe(true);
  });
});