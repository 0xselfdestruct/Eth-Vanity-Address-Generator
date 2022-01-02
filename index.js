const bip39 = require('bip39')
const HDWallet = require('ethereum-hdwallet')


const generate = async () => {
    let count = 0
    while (true) {
        const mnemonic = bip39.generateMnemonic(256)
        const hdwallet = HDWallet.fromMnemonic(mnemonic)
        const wallet = hdwallet.derive("m/44'/60'/0'/0/0")
        const address = wallet.getAddress().toString('hex')
        count++
        console.log(`generating: ${count}`)

        if (
            address.startsWith("000") ||
            address.startsWith("bad")
        ) {
            console.log("-------")
            console.log(`mnemonic: ${mnemonic}`)
            console.log(`address: 0x${address}`)
            console.log("-------")
            break
        }
    }

}

generate()