import { expect } from 'chai';
import * as data from "../data.js";

describe("data.js module", () => {
    it("returns requested getItem()", function() {
        let result = data.getItem("Tree");
        expect(result).to.deep.equal({name: "Tree", benefit: "balance", ability: "easy", symbol: "universe"});
    });

    it("returns no items from getItem()", function() {
        let result = data.getItem("blah");
        expect(result).to.be.undefined;
    });

    it("returns addItem result was added result", function() {
        let result = data.addItem({name: "test", benefit: "test", ability: "test", symbol: "test"});
        expect(result).to.deep.equal({result: "test pose has been added!"});
    });

    it("returns addItem already exists result", function() {
        let theItem = data.addItem({name: "test", benefit: "test", ability: "test", symbol: "test"});
        let result = data.addItem({name: "test", benefit: "test", ability: "test", symbol: "test"});
        expect(result).to.deep.equal({result: "test pose already exists!"});
    });

    it("returns deleteItem is successful", function() {
        let result = data.deleteItem({name: "Tree"});
        expect(result).to.deep.equal({result: "Tree pose was deleted!"});
    })

    it("returns deleteItem was not found", function() {
        let result = data.deleteItem({name: "blah", benefit: "test", ability: "test", symbol: "test"});
        expect(result).to.deep.equal({result: "blah pose was not found!"});
    })
});
