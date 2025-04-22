
async function generateFactionInfographics() {
    const fwApi = new ESI.FactionWarfareApi();
    const fwStats = await fwApi.getFwStats({ datasource: "tranquility" });
    await Faction.getAll();
  
    const infographicData = fwStats.map(fwStat => {
      const factionDetails = Faction.registry.get(fwStat.faction_id);
      return {
        name: factionDetails.name,
        description: factionDetails.description,
        sizeFactor: factionDetails.sizeFactor,
        stationCount: factionDetails.stationCount,
        stationSystemCount: factionDetails.stationSystemCount,
        kills: fwStat.kills,
        pilots: fwStat.pilots,
        systemsControlled: fwStat.systems_controlled,
        victoryPoints: fwStat.victory_points
      };
    });
  
    // Display or return data for infographic
    console.log(infographicData);
  }
  
  // Example Usage:
  (async () => {
    await generateFactionInfographics();
  })();