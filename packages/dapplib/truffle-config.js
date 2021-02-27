require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember protect just private bottom symptom'; 
let testAccounts = [
"0xfd477da2a0a110743cb55cb6ecf1dae78d7ea0d6f7562d9ee33ecf44a45d85ad",
"0x6f452f565cc596fc5fff199acb33ef2e48025898e4d2e995e92dc03442097ad0",
"0xdba9d3d6b242845f841d54c404dd4833dc92c7a586bb9d8748dfd139805b1950",
"0xa7026798bd54d7ef707ceb77f2b030ecbe7773eadb3fbf8b731dcfb0cb4fe7ca",
"0xb51e504b5b92e5892bfb15dc0d5b8aeb773f0fa27fb6981007b8df4a7d1bba37",
"0x822d698a04048e4c9147d777fa71f41c70138578be5cfebcd837791a559c41f1",
"0x73f5d229e17c3029b9858223d67e2f6836b099f7e8e25093e2c70d6df316296f",
"0x2ee25c19d33d626e829305bd4a4693715f6856d1e984bb89e619ee60db972e67",
"0x52716271847e78a262822e7a5c77ac553ecc1f4489603f3f6ec8d5a04c7d2063",
"0x09469b23fd368ee7f5f974c81ccd13a7e5255a2fab294868181490a1b853d1d1"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
