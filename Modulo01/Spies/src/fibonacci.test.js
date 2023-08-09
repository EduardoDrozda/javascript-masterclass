const Fibonacci = require("./finonacci");

describe("Fibonacci", () => {
  it("should call console.time once", () => {
    const spy = jest.spyOn(console, "time");
    Fibonacci(5);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should call console.time with Fibonacci", () => {
    const spy = jest.spyOn(console, "time");
    Fibonacci(5);
    expect(spy).toHaveBeenCalledWith("Fibonacci");
  });

  it("should call console.time once", () => {
    const spy = jest.spyOn(console, "timeEnd");
    Fibonacci(5);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should call console.time with Fibonacci", () => {
    const spy = jest.spyOn(console, "timeEnd");
    Fibonacci(5);
    expect(spy).toHaveBeenCalledWith("Fibonacci");
  });
});
