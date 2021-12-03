const Token = artifacts.require("FitnessToken.sol");
const chai = require("chai");
const BN = web3.utils.BN;
const chaiBN = require('chai-bn')(BN);
chai.use(chaiBN);

const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const expect = chai.expect;

contract("SWOLE Token Test", async accounts => {
    const [initialHolder, recipient, anotherAccount] = accounts;

    it("All tokens should be in my account", async () => {
        const instance = await Token.deployed();
        const totalSupply = await instance.totalSupply();

        await expect(instance.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(totalSupply);
    });
});
