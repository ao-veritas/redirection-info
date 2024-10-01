// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IDaiDsrManager {
    function daiBalance(address usr) external returns (uint256 wad);
    function join(address dst, uint256 wad) external;
    function exit(address dst, uint256 wad) external;
}
