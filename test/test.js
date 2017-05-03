var expect = require("chai").expect;
var objectarrayindexof = require('../src/index.js')

var arr1 = [
    {
        "a": "21"
    },
    {
        "a": "1",
        "b": "2"
    },
    {
        "a": "3",
        "b": "5"
    }
    ,
    {
        "a": "1",
        "b": "2"
    },
    {
        "a": "45"
    },
    {
        "a": "3",
        "b": "5"
    },
    {
        "a": "98"
    }
]

describe("firstIndexOf function", function () {
    it("with out keys positive", function () {
        expect(objectarrayindexof.firstIndexOf(arr1, { "a": "3", "b": "5" })).to.deep.equal(2)
    });
    it("with out keys negative", function () {
        expect(objectarrayindexof.firstIndexOf(arr1, { "a": "1", "b": "5" })).to.deep.equal(-1)
    });
    it("with keys positive", function () {
        expect(objectarrayindexof.firstIndexOf(arr1, { "a": "8", "b": "5" }, ["b"])).to.deep.equal(2)
    });
    it("with keys negative", function () {
        expect(objectarrayindexof.firstIndexOf(arr1, { "a": "8", "b": "9" }, ["b"])).to.deep.equal(-1)
    });
    it("small object in array", function () {
        expect(objectarrayindexof.firstIndexOf(arr1, { "a": "8", "b": "98" }, ["a", "b"])).to.deep.equal(-1)
    });
});

describe("lastIndexOf function", function () {
    it("with out keys positive", function () {
        expect(objectarrayindexof.lastIndexOf(arr1, { "a": "3", "b": "5" })).to.deep.equal(5)
    });
    it("with out keys negative", function () {
        expect(objectarrayindexof.lastIndexOf(arr1, { "a": "1", "b": "5" })).to.deep.equal(-1)
    });
    it("with keys positive", function () {
        expect(objectarrayindexof.lastIndexOf(arr1, { "a": "8", "b": "5" }, ["b"])).to.deep.equal(5)
    });
    it("with keys negative", function () {
        expect(objectarrayindexof.lastIndexOf(arr1, { "a": "8", "b": "9" }, ["b"])).to.deep.equal(-1)
    });
    it("small object in array", function () {
        expect(objectarrayindexof.lastIndexOf(arr1, { "a": "8", "b": "98" }, ["a", "b"])).to.deep.equal(-1)
    });

});


describe("allIndexesOf function", function () {
    it("with out keys positive", function () {
        expect(objectarrayindexof.allIndexesOf(arr1, { "a": "3", "b": "5" })).to.deep.equal([2, 5])
    });
    it("with out keys negative", function () {
        expect(objectarrayindexof.allIndexesOf(arr1, { "a": "1", "b": "5" })).to.deep.equal([])
    });
    it("with keys positive", function () {
        expect(objectarrayindexof.allIndexesOf(arr1, { "a": "8", "b": "5" }, ["b"])).to.deep.equal([2, 5])
    });
    it("with keys negative", function () {
        expect(objectarrayindexof.allIndexesOf(arr1, { "a": "8", "b": "9" }, ["b"])).to.deep.equal([])
    });
    it("small object in array", function () {
        expect(objectarrayindexof.allIndexesOf(arr1, { "a": "8", "b": "98" }, ["a", "b"])).to.deep.equal([])
    });

});