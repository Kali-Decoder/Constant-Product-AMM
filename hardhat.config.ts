import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";

const ACCOUNTS = process.env.DEPLOYER_ACCOUNT_PRIV_KEY
  ? [`${process.env.DEPLOYER_ACCOUNT_PRIV_KEY}`]
  : [];

module.exports = {
  defaultNetwork: "hardhat",
  gasReporter: {
    enabled: false,
  },
  networks: {
    hardhat: { chainId: 31337 },
    rootstock: {
      chainId: 31,
      url: "https://public-node.testnet.rsk.co",
      accounts: ACCOUNTS,
    }
  },
  etherscan: {
    apiKey: {
      rootstock: "xxxx-xxx-xx-xx-xxxxx",
    },
    customChains: [
      {
        network: "rootstock",
        chainId: 8822,
        urls: {
          apiURL: "https://explorer.evm.iota.org/api",
          browserURL: "https://explorer.evm.iota.org",
        },
      },
      
    ],
  },
  sourcify: {
    enabled: false,
  },
  solidity: {
    version: "0.8.22",
    settings: {
      evmVersion: "paris",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};