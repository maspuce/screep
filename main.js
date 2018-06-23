//require('config');
require('protptype.creep');
//harvester: require('role.harvester');

//Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );

var spawn = Game.spawns['Spawn1'];

module.exports.loop = function() {
  if (Game.creeps.length == 0) {
    console.log('spawn the creep');
    Creep.spawn(harvester.role, spawn, 'Harvester1');
  }

  for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            harvester.run(creep);
        }
    }
}
