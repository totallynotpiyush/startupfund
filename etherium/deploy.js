const { interfaces } = require('mocha');
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json')

const provider = new HDWalletProvider(
    'come slow super history large defense drift stone one fat escape good', 
    'https://rinkeby.infura.io/v3/8eca61ae2a994437b4b6c199d9772b3f'
);
const web3 = new Web3(provider);

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account',accounts[0]);

    const result = await new web3.eth.Contract(
        JSON.parse(compiledFactory.interface)
    )        
     .deploy({data: '0x' + compiledFactory.bytecode }) // add 0x bytecode
     .send({ gas: '2500000', from: accounts[0]});

    console.log('contract deploy to ', result.options.address);
};
deploy();