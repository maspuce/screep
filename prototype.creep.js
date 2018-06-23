var roles = {
    harvester: require('role.harvester')
    //upgrader: require('role.upgrader'),
    //builder: require('role.builder'),
    //repairer: require('role.repairer'),
    //wallRepairer: require('role.wallRepairer'),
    //longDistanceHarvester: require('role.longDistanceHarvester'),
    //claimer: require('role.claimer'),
    //miner: require('role.miner'),
    //lorry: require('role.lorry')
};

/**
@function
@param {StructureSpawn} spawn
@param {array<string>} role
@param {string} name
**/
Creep.prototype.spawn = function(spawn, role, name) {
  spawn.spawnCreep( role, name );
};
