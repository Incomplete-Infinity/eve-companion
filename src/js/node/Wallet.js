const ESI = require('eve_swagger_interface');

class Wallet {
  constructor(characterId, auth) {
    this.characterId = characterId;
    this.auth = auth;
    this.api = new ESI.WalletApi();

    this.balance = null;
    this.journal = [];
    this.transactions = [];
  }

  async ensureAuth() {
    if (!this.auth) throw new Error('Wallet access requires authentication');
    await this.auth.ensureValidToken();
  }

  async loadBalance() {
    await this.ensureAuth();
    this.balance = await this.api.getCharactersCharacterIdWallet(this.characterId, {
      datasource: 'tranquility'
    });
    return this.balance;
  }

  async loadJournal() {
    await this.ensureAuth();
    this.journal = await this.api.getCharactersCharacterIdWalletJournal(this.characterId, {
      datasource: 'tranquility'
    });
    return this.journal;
  }

  async loadTransactions() {
    await this.ensureAuth();
    this.transactions = await this.api.getCharactersCharacterIdWalletTransactions(this.characterId, {
      datasource: 'tranquility'
    });
    return this.transactions;
  }

  toJSON() {
    return {
      balance: this.balance,
      journal: this.journal,
      transactions: this.transactions
    };
  }
}

module.exports = Wallet;
