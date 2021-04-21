// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should never return 'undefined' when called", function () {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should return "Hello, World" when called', function () {
        expect(sayHello()).toBe("Hello, World!")
    });
    it("should return 'true' when called", function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it("should return 'false' when called", function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
});
// describe("addOne", function () {
//     it('should be a defined function', function () {
//         expect(typeof addOne).toBe("function")
//     });
//     it('should return a number when called', function () {
//         expect(typeof addOne()).toBe("number")
//     });
//     it('should return the number 3 when passed the argument of the number 2', function () {
//         expect(addOne(2)).toBe(3)
//     });
//     it('should the number -43 when passed the argument -44', function () {
//         expect(addOne(-44)).toBe(-43)
//     });
//     it('should return NaN when passed the string "hakeem olajuwon', function () {
//         expect(isNaN(addOne("hakeem olajuwon"))).toBe(true)
//     });
//
// });