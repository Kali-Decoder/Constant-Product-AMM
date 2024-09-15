// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract TokenB is ERC20, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    constructor() ERC20("TokenB", "TokenB") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }
    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE){
        _mint(to, amount);
    }

}