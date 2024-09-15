import { ethers } from 'hardhat'

const ConstantProductAMM_Contract_Name = 'ConstantProductAMM'
const tokenA="0xbC3E6978e86cBE779E820784ff703bC0851CdFF1";
const tokenB="0xB6E01FE5184Bd310802B33461660BD12dF0b20F2";
async function deployERC20() {
    const contractOwner: string = await ethers.getSigners().then((res) => res[0].address)
    const constantProductContract = await ethers.deployContract(ConstantProductAMM_Contract_Name,[
        tokenA,
        tokenB
    ]);
    await constantProductContract.waitForDeployment()
    console.log('Deployed Constant Product AMM contract address:', await constantProductContract.getAddress())
}

async function main() {
    await deployERC20();
}

main().catch((error) => {
    console.error(error)
    process.exit(1)
})