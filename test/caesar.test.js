const { caesarCipher } = require("../scripts/caesar");

test("input homeflow offset 3 should be krphiorz", () => {
  expect(caesarCipher("homeflow", 3)).toBe("krphiorz");
});

