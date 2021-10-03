const assert = require('assert');
const Math = require('../test/math');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

/*Version 1
describe('Math class', function() {
    it('Sum two numbers', function() {
        const math = new Math();
        
        try {
            assert.equal(math.sum(5, 5), 10);
        } catch(err) {
            console.log(err);
        }
    });
});
*/

//Version 2
describe('Math class', function() {

    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);
        
        value = 5;

        math.sum(value, 5, value => {
            expect(value).to.equal(10);
            done();
        });
    });

    
    it('Multiply two numbers', function() {
        const math = new Math();
        const obj = {
            name: 'Celso Henrique'
        };

        const obj2 = obj;

        const obj3 = {
            name: 'Celso Henrique'
        };
        
        //assert
        //assert.equal(math.multiply(value, 5), 0);
        
        //expect
        //expect(math.multiply(value, 5)).to.equal(0);

        expect(obj).to.have.property('name').equal('Celso Henrique');
        expect(obj).to.equal(obj2);
        expect(obj).to.deep.equal(obj3);
    });

    it.only('Call req with sum and index values', function() {
        const req = {};
        const res = {
            load: function load() {
                console.log('Called!');
            }
        };

        //sinon.spy(res, 'load');
        sinon.stub(res, 'load').returns('xpto');

        const math = new Math();

        math.printSum(req, res, 5, 5);

        //expect(res.load.calledOnce).to.be.true;
        expect(res.load.args[0][0]).to.equal('index');
    });
});

