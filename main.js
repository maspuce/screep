//require('config');
//require('protptype.creep');
require('role.harvester');

//Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );

module.exports.loop = function() {
  console.log(roleHarvester.role);
  for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
    }
}
