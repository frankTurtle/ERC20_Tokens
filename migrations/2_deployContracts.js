const FitnessToken = artifacts.require("./FitnessToken.sol");
const KYCContract = artifacts.require("./KYC.sol");

module.exports = async function (deployer) {
    await deployer.deploy(FitnessToken, 1000000000);
    await deployer.deploy(KYCContract);
};
