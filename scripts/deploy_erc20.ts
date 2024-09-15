import { ethers } from 'hardhat'

const ERC20_CONTRACT_NAME = 'TokenB'

async function deployERC20() {
    const contractOwner: string = await ethers.getSigners().then((res) => res[0].address)
    const myERC20Contract = await ethers.deployContract(ERC20_CONTRACT_NAME);
    await myERC20Contract.waitForDeployment()
    console.log('Deployed TokenA contract address:', await myERC20Contract.getAddress())
}

async function main() {
    await deployERC20();
}

main().catch((error) => {
    console.error(error)
    process.exit(1)
})