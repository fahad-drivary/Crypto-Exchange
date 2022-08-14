require ('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://ropsten.infura.io/v3/7f21364022534cf7bc7f5c63220c94c0',
      accounts: ['78c02aa2b2099cf702045c023611de813ff641a10e23b82f21344f22b62d6fbc'],
    },
  },
};