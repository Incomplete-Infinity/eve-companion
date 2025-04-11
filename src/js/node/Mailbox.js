const ESI = require('eve_swagger_interface');

class Mailbox {
  constructor(characterId, accessToken) {
    this.characterId = characterId;
    this.headers = [];
    this.mails = new Map();
    this.labels = this.getLabels();
    this.subscriptions = [];

    const client = ESI.ApiClient.instance;
    client.authentications.evesso.accessToken = accessToken;

    this.api = new ESI.CharacterApi();
  }

  getHeaders = (callback) => {
    const opts = { datasource: 'tranquility' };

    this.api.getCharactersCharacterIdMail(this.characterId, opts, (err, data) => {
      if (err) return callback?.(err);

      this.headers = data
        .map(h => new Mail(h))
        .sort((a, b) => b.timestamp.localeCompare(a.timestamp));

      callback?.(null, this.headers);
    });
  }

  get = (mailId, callback) => {
    let mail = this.headers.find(m => m.mailId === mailId) || this.mails.get(mailId);
    if (!mail) return callback?.(new Error('Mail not found'));

    if (mail.isPartial) {
      const opts = { datasource: 'tranquility' };

      this.api.getCharactersCharacterIdMailMailId(this.characterId, mailId, opts, (err, data) => {
        if (err) return callback?.(err);

        mail.update(data);
        mail.read = true;
        this.mails.set(mailId, mail);
        callback?.(null, mail);
      });
    } else {
      callback?.(null, mail);
    }
  }

  putMetaData = (mailId, metadata, callback) => {
    const opts = {
      datasource: 'tranquility',
      mailMetadata: metadata
    };

    this.api.putCharactersCharacterIdMailMailId(this.characterId, mailId, opts, (err, _) => {
      if (err) return callback?.(err);
      callback?.(null, true);
    });
  }

  delete = (mailId, callback) => {
    const opts = { datasource: 'tranquility' };

    this.api.deleteCharactersCharacterIdMailMailId(this.characterId, mailId, opts, (err, _) => {
      if (err) return callback?.(err);
      this.headers = this.headers.filter(m => m.mailId !== mailId);
      this.mails.delete(mailId);
      callback?.(null, true);
    });
  }

  getLabels = (callback) => {
    const opts = { datasource: 'tranquility' };

    this.api.getCharactersCharacterIdMailLabels(this.characterId, opts, (err, data) => {
      if (err) return callback?.(err);

      this.labels = data.labels.map(l => new Label(l));
      callback?.(null, this.labels);
    });
  }

  postLabel = (labelData, callback) => {
    const opts = {
      datasource: 'tranquility',
      label: labelData
    };

    this.api.postCharactersCharacterIdMailLabels(this.characterId, opts, (err, label) => {
      if (err) return callback?.(err);

      const newLabel = new Label(label);
      this.labels.push(newLabel);
      callback?.(null, newLabel);
    });
  }

  deleteLabel = (labelId, callback) => {
    const opts = { datasource: 'tranquility' };

    this.api.deleteCharactersCharacterIdMailLabelsLabelId(this.characterId, labelId, opts, (err, _) => {
      if (err) return callback?.(err);

      this.labels = this.labels.filter(l => l.labelId !== labelId);
      callback?.(null, true);
    });
  }

  getMailSubscriptions = (callback) => {
    const opts = { datasource: 'tranquility' };

    this.api.getCharactersCharacterIdMailLists(this.characterId, opts, (err, data) => {
      if (err) return callback?.(err);

      this.subscriptions = data;
      callback?.(null, this.subscriptions);
    });
  }
}

module.exports = Mailbox;
