pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FitnessToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Fitness Token", "SWOLE") public {
        _mint(msg.sender, initialSupply);
    }
}
