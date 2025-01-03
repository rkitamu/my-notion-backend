Deno.test("example test", () => {
  const x = 1 + 1;
  if (x !== 2) {
    throw new Error("Test failed");
  }
});
