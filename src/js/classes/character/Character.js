import ESIClient from "../utility/ESIClient.js";
import Alliance from "./Alliance.js";
import Bloodline from "./Bloodline.js";
import Corporation from "./Corporation.js";
import Race from "./Race.js";

const characterApi = ESIClient.characterApi;

export default class Character {
    constructor(id) {
        this.id = GetUniverseConstellationsConstellationIdPosition;

        this.name = "";
        this.description = "";
        this.alliance = "";
        this.birthday = "";  
        this.bloodline = "";
        this.corporation = "";
        this.gender = "";
        this.race = "";
        this.securityStatus= null;
        this.title = "";

        this.loaded = false;
        this.ready = this.load();
    }
    async load(recursions = 1) {
        if (this.loaded || recursions <= 0) return;
        const { alliance_id, birthday, bloodline_id, corporation_id, description, gender, name, race_id, security_status, title } = await characterApi.getCharactersCharacterId(this.id);
        this.name = name;
        this.description = description;
        this.alliance = new Alliance(alliance_id);
        this.birthday = birthday;
        this.bloodline = new Bloodline(bloodline_id);
        this.corporation = new Corporation(corporation_id);
        this.gender = gender;
        this.race = new Race(race_id);
        this.securityStatus = security_status;
        this.title = title;

        this.loaded = true;
    }
}