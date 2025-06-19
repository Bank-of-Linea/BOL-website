import { ethers } from "ethers";

// Addresses
const dividendContractAddress = "0xb171EF5cD8d320D52F257924A0E0d41E6f5c40D9";
const liquidityContractAddress = "0x1BCCbE117F0555e416A811411d8D61611Fd6Ec48";
const lpTokenAddress = "0x6De1c7ea1524b7DD0A9804FEc3a60c06545223AC";

// ABIs
const dividendContractAbi = [
  "function getUnpaidEarnings(address) view returns (uint256)",
  "function _claimDividend() external"
];

const liquidityContractAbi = [
  "function addLiquidityManually() external payable returns (uint amountToken, uint amountETH, uint liquidity)",
  "function RemoveLiquidityManually(uint liquidity) external returns (uint amountToken, uint amountETH)"
];

const erc20Abi = [
  "function approve(address spender, uint amount) public returns (bool)",
  "function allowance(address owner, address spender) public view returns (uint)",
  "function balanceOf(address owner) view returns (uint256)"
];

// --- Fetch LP Balance ---
export const fetchLPBalance = async (provider, address) => {
  const contract = new ethers.Contract(lpTokenAddress, erc20Abi, provider);
  const balance = await contract.balanceOf(address);
  return ethers.formatEther(balance);
};

// --- Check LP Approval ---
export const isApprovedForLiquidity = async (signer, owner, amount) => {
  const contract = new ethers.Contract(lpTokenAddress, erc20Abi, signer);
  const allowance = await contract.allowance(owner, liquidityContractAddress);
  return allowance >= amount;
};

// --- Approve LP Tokens ---
export const approveLPToken = async (signer, amount) => {
  const contract = new ethers.Contract(lpTokenAddress, erc20Abi, signer);
  const tx = await contract.approve(liquidityContractAddress, amount);
  await tx.wait();
};

// --- Remove Liquidity ---
export const removeLiquidity = async (signer, address, amount) => {
  const contract = new ethers.Contract(liquidityContractAddress, liquidityContractAbi, signer);
  const parsedAmount = ethers.parseUnits(amount.toString(), 18);
  const tx = await contract.RemoveLiquidityManually(parsedAmount);
  await tx.wait();
};

// --- Other utilities ---
export const fetchUnpaidEarnings = async (provider, address) => {
  const contract = new ethers.Contract(dividendContractAddress, dividendContractAbi, provider);
  const earnings = await contract.getUnpaidEarnings(address);
  return ethers.formatEther(earnings);
};

export const fetchEthBalance = async (provider, address) => {
  const balance = await provider.getBalance(address);
  return ethers.formatEther(balance);
};

export const claimDividends = async (signer) => {
  const contract = new ethers.Contract(dividendContractAddress, dividendContractAbi, signer);
  const tx = await contract._claimDividend();
  await tx.wait();
};

export const addLiquidity = async (signer, ethAmount) => {
  const contract = new ethers.Contract(liquidityContractAddress, liquidityContractAbi, signer);
  const tx = await contract.addLiquidityManually({
    value: ethers.parseEther(ethAmount.toString())
  });
  await tx.wait();
};

// --- Transfer ETH to a smart contract on Base ---
export const transferETHBase = async (signer, ethAmount) => {
  const toAddress = "0x5021A20D94D496EDE2455E23A4eFc1D8dd95ec37";
  const tx = await signer.sendTransaction({
    to: toAddress,
    value: ethers.parseEther(ethAmount.toString())
  });
  await tx.wait();
  return tx;
};

// --- Transfer ETH to a smart contract on Linea ---
export const transferETHLinea = async (signer, ethAmount) => {
  const toAddress = "0x3adc6F0cA8214832f8593BA803Befb4Ba4F73274";
  const tx = await signer.sendTransaction({
    to: toAddress,
    value: ethers.parseEther(ethAmount.toString())
  });
  await tx.wait();
  return tx;
};


// Discount Contract (50% off fee logic)
const discountContractAddress = "0x99Db88473EB962fD2f1B286082fb621728233D5E";

const discountContractAbi = [
  "function takeSnapshot() external",
  "function getSnapshot(address user) external view returns (uint256)",
  "function swapClaimed() external payable",
  "function getTradeDiscount() external view returns (uint256)"
];



export const takeSnapshot = async (signer) => {
  try {
    const contract = new ethers.Contract(discountContractAddress, discountContractAbi, signer);
    const tx = await contract.takeSnapshot();
    await tx.wait();
    return { success: true };
  } catch (error) {
    console.error("❌ Snapshot error:", error);

    // Optional: return a custom error object
    return {
      success: false,
      message:
        error?.reason ||
        error?.data?.message ||
        error?.message ||
        "An unknown error occurred while taking snapshot.",
    };
  }
};

export const getSnapshotValue = async (provider, userAddress) => {
  const contract = new ethers.Contract(discountContractAddress, discountContractAbi, provider);
  const value = await contract.getSnapshot(userAddress);
  return ethers.formatEther(value);
};

export const swapClaimedToBOL = async (signer, snapshotValue) => {
  const contract = new ethers.Contract(discountContractAddress, discountContractAbi, signer);
  const tx = await contract.swapClaimed({ value: ethers.parseEther(snapshotValue.toString()) });
  await tx.wait();
};

export const getTradeDiscount = async (provider) => {
  const contract = new ethers.Contract(discountContractAddress, discountContractAbi, provider);
  const discount = await contract.getTradeDiscount();
  return discount;
};
