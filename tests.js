test("Example", function(assert) {
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-1");
});

test("TC-1: convertIntegerToRoman() with valid input", function(assert) {
  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: "", result: true}, "TC-1");
});

test("TC-2: convertIntegerToRoman() with invalid input (0)", function(assert) {
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: "Out of range (1-3999)", result: false}, "TC-2");
});

test("TC-3: convertIntegerToRoman() with invalid input (negative number)", function(assert) {
  assert.propEqual(convertIntegerToRoman(-10), {value: 0, message: "Please enter a valid integer", result: false}, "TC-3");
});

test("TC-4: convertIntegerToRoman() with invalid input (exceeding maximum value)", function(assert) {
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: "Out of range (1-3999)", result: false}, "TC-4");
});

test("TC-5: convertIntegerToRoman() with invalid input (non-integer)", function(assert) {
  assert.propEqual(convertIntegerToRoman(3.5), {value: 0, message: "Please enter a valid integer", result: false}, "TC-5");
});

test("TC-6: convertRomanToInteger() with valid input", function(assert) {
  assert.propEqual(convertRomanToInteger("X"), {value: 10, message: "", result: true}, "TC-6");
});

test("TC-7: convertRomanToInteger() with invalid input (invalid Roman numeral)", function(assert) {
  assert.propEqual(convertRomanToInteger("MMMM"), {value: 0, message: "Please enter a valid roman", result: false}, "TC-7");
});

test("TC-8: convertRomanToInteger() with invalid input (repeating invalid characters)", function(assert) {
  assert.propEqual(convertRomanToInteger("MMMCMCMC"), {value: 0, message: "Please enter a valid roman", result: false}, "TC-8");
});

test("TC-9: convertRomanToInteger() with invalid input (exceeding maximum value)", function(assert) {
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: "", result: true}, "TC-9");
});

test("TC-10: convertRomanToInteger() with empty string input", function(assert) {
  assert.propEqual(convertRomanToInteger(""), {value: 0, message: "Please enter a valid roman", result: false}, "TC-10");
});

