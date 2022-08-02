pragma solidity =0.5.16;

import '../MyTeamCoinERC20.sol';

contract ERC20 is MyTeamCoinERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
