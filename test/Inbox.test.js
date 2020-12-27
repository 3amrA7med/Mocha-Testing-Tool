const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
const INITIAL_MESSAGE = 'INBOX SMART CONTRACT';


describe('Module Test: Inbox', () => {
    beforeEach(async () => {
        accounts = await web3.eth.getAccounts();
        // Use one of those accounts to deploy the contract 
        inbox = await new web3.eth.Contract(JSON.parse(interface))
            .deploy({ data: bytecode, arguments: [INITIAL_MESSAGE] })
            .send({ from: accounts[0], gas: '1000000' });
        inbox.setProvider(provider);
        
    })
    afterEach(async () => {
        let message = await inbox.methods.message().call();
        console.log("\tMessage in the contract: ", message);
    })
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    })

    it('deployed contract has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, INITIAL_MESSAGE);
    })

    it('can change the message in the deployed contract', async () => {
        await inbox.methods.setMessage('Changed')
            .send({ from: accounts[0], gas: '1000000' });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Changed');
    })

    // Pending test
    it('change state of the message from unseen to seen');
})