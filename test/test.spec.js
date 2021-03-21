import { expect } from "chai";
import converter from "array-converter-test-task";

describe("converter", () => {
	it("should convert [1,2,3,4,5,6,7,8] to '1-8'", done => {
		converter([1, 2, 3, 4, 5, 6, 7, 8]).then(result => {
			expect(result).to.equal('1-8');
			done();
		});
	});

	it("should convert [1,3,4,5,6,7,8] to '1,3-8'", done => {
		converter([1, 3, 4, 5, 6, 7, 8]).then(result => {
			expect(result).to.equal('1,3-8');
			done();
		});
	});

	it("should convert [1,3,4,5,6,7,8,10,11,12] to '1,3-8,10-12'", done => {
		converter([1, 3, 4, 5, 6, 7, 8, 10, 11, 12]).then(result => {
			expect(result).to.equal('1,3-8,10-12');
			done();
		});
	});

	it("should convert [1,2,3] to '1-3'", done => {
		converter([1, 2, 3]).then(result => {
			expect(result).to.equal('1-3');
			done();
		});
	});

	it("should convert [1,2] to '1,2'", done => {
		converter([1, 2]).then(result => {
			expect(result).to.equal('1,2');
			done();
		});
	});

	it("should convert [1,2,4] to '1,2,4'", done => {
		converter([1, 2, 4]).then(result => {
			expect(result).to.equal('1,2,4');
			done();
		});
	});

	it("should convert [1,2,4,5,6] to '1,2,4-6'", done => {
		converter([1, 2, 4, 5, 6]).then(result => {
			expect(result).to.equal('1,2,4-6');
			done();
		});
	});

	it("should convert [1,2,3,7,8,9,15,17,19,20,21] to '1-3,7-9,15,17,19-21'", done => {
		converter([1, 2, 3, 7, 8, 9, 15, 17, 19, 20, 21]).then(result => {
			expect(result).to.equal('1-3,7-9,15,17,19-21');
			done();
		});
	});

	it("should convert [1,2,3,4,5,6,100,1091,1999,2000,2001,2002] to '1-6,100,1091,1999-2002'", done => {
		converter([1, 2, 3, 4, 5, 6, 100, 1091, 1999, 2000, 2001, 2002]).then(result => {
			expect(result).to.equal('1-6,100,1091,1999-2002');
			done();
		});
	});

	it("should convert [1] to '1'", done => {
		converter([1]).then(result => {
			expect(result).to.equal('1');
			done();
		});
	});

	it("should convert [1,3,5,7,9,11] to '1,3,5,7,9,11'", done => {
		converter([1, 3, 5, 7, 9, 11]).then(result => {
			expect(result).to.equal('1,3,5,7,9,11');
			done();
		});
	});

	it("should convert [1,2,3,5,6] to '1-3,5,6'", done => {
		converter([1, 2, 3, 5, 6]).then(result => {
			expect(result).to.equal('1-3,5,6');
			done();
		});
	});

	it("should convert [] to ''", done => {
		converter([]).then(result => {
			expect(result).to.equal('');
			done();
		});
	});
});