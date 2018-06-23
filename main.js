//require('config');
//require('protptype.creep');
//harvester: require('role.harvester');

//Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );

var spawn = Game.spawns['Spawn1'];

module.exports.loop = function() {
  console.log("=== Tick Start ===");
  if (Game.creeps.length == 0 || Game.creeps.length = undefined) {
    console.log('spawn the creep');
    Creep.spawn(spawn, [WORK, CARRY, MOVE], 'Harvester1');
  }
  /*
  for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            harvester.run(creep);
        }
    }
    */
    console.log("=== Tick END ===");
}
