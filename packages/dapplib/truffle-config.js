require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remain solid hover arctic tail thing'; 
let testAccounts = [
"0x799ac06ad9e818f037b4d1bd8cd25f456a55a4aa0813b9f06b3c80ec695fb295",
"0x42a4c20004ca9538850982417c97be62182c6fce98034f97194e7f57edf1e437",
"0x3e61bf945bbfc4ea3bea276a69f42e0eacc1354cc4f04ea397796d9c23361ddb",
"0x1da1001bb9e9ba428fb7c8209cea4439f17d675d28b9f2b310c8f8e069d5b7a3",
"0xcd6f07c755f5ebb1df1f5f335f47f52c5818d3246e40513aeebf980e7b9ca16c",
"0x5d85c40218b2b1ac4ba1730812e4229c107823cba0007868a64c7a8af0027d8a",
"0x05d93186d1dc5537ed2821862d6757450f18cbd338deead74e688727ee5dea85",
"0x2384c5062f31006a12faee546cffd9b4474428c218191087038ca85821e21f3a",
"0x6168cda812ea52de6febf5f88329d425d7a891aa5c4bce4ee15bd0cd46520139",
"0xb9a34ebd31a3f6367969494af7feabb31289c46f643c5a3b25961531389ccada"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

