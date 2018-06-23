require('config');
require('protptype.creep');
require('role.harvester');

module.exports.loop = function() {
  console.log(roleHarvester.role);
  for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
    }
}
