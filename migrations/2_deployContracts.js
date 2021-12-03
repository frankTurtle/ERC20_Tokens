const FitnessToken = artifacts.require("./FitnessToken.sol");

module.exports = async function (deployer) {
    await deployer.deploy(FitnessToken, 1000000000);
};
