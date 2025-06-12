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
