const { caesarCipher, textConvert } = require("../scripts/caesar.js");

test("input m offset 3 should be p", () => {
  expect(caesarCipher("m", 3)).toBe("p");
});

//test for edge cases
test("input homeflow offset 3 should be krphiorz", () => {
  expect(caesarCipher("", 3)).toBe("");
});

//Test the looping case
test("input marion offset 3 should be pdulrq", () => {
  expect(textConvert("marion", 3)).toBe("pdulrq");
});

//Mix case characters
test("input MarIon offset 3 should be pdulrq", () => {
  expect(textConvert("MarIon", 3)).toBe("pdulrq");
});
//All capital
test("input MARION offset 3 should be pdulrq", () => {
  expect(textConvert("MarIon", 3)).toBe("pdulrq");
});

// Adding a negative offset 
test("input MARION offset -1 should be lqhnm", () => {
  expect(textConvert("MARION", -1)).toBe("lqhnm");
});
