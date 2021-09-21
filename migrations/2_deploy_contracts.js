const ProofOfExistence1 = artifacts.require('./ProofOfExistence1.sol');
const ProofOfExistence2 = artifacts.require('./ProofOfExistence2.sol');

module.exports = function(deployer) {
    [ProofOfExistence1, ProofOfExistence2].forEach(item => deployer.deploy(item));
};