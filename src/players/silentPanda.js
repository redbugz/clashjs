import {
    makeRandomMove,
    calculateHeading,
    findClosestAmmo,
    threatsFacingMe,
    canMoveForward,
    enemiesInRange,
    isActionSafe,
    sameColumn,
    sameRow,
    oppositeDirection,
    calculateDistance,
    calculateNewPosition
  } from "../lib/helpers";
  
  import debug from "debug";
  const log = debug("clashjs:bot:silentPanda");


  const perpendicularDirection = function (direction) {
    switch (direction) {
      case 'north':
        return 'east';
      case 'south':
        return 'west';
      case 'west':
        return 'north';
      case 'east':
        return 'south';
      default:
        return undefined;
    }
  };

  const findClosestTarget = function (player, targets) {
    const positions = [];
    targets.forEach(target => { positions.push(target.position); });
    // log("### ammo, player, game", player, game);
    const sortedTargets = positions
      .map((targetPos) => ({
        position: targetPos,
        distance: calculateDistance(player.position, targetPos),
      }))
      .sort((target1, target2) => target1.distance - target2.distance);
  
    return sortedTargets.length > 0 ? sortedTargets[0].position : null;
  };

  const withinRange = function (val, low, high) {
    if ( (val >= low) && (val <= high) ) {
      return true;
    } else {
      return false;
    }
  };

  const getThreats = function (player, enemies) {
    if (!enemies.length) return [];
    var { position } = player;
    const threats = enemies.filter(
      (e) =>
        e.isAlive &&
        e.ammo > 0 &&
        (sameRow(position, e.position) || sameColumn(position, e.position))
    );
    return threats;
  };

  const checkForAsteroids = function (playerPosition, asteroids, detonateIn) {
    for (let i = 0; i < asteroids.length; i++) {
      // log('col', sameColumn(playerPosition, asteroids[i].position) )
      // log('row', sameRow(playerPosition, asteroids[i].position) )
      // log('detonateIn', detonateIn)
      if (sameColumn(playerPosition, asteroids[i].position) && sameRow(playerPosition, asteroids[i].position) && asteroids[i].detonateIn === detonateIn) return true;
    }
  }


  const isActionReallySafe = function (player, action, enemies, game) {
    // log('isActionReallySafe')
    var { position: futureState } = player;

    if (action === 'move') {
      futureState = calculateNewPosition(player, game);
      // log(futureState)
    }

    const noThreats = threatsFacingMe({ position: futureState }, enemies).length === 0;
    let safeFromAsteroids = true;
    if(game.asteroids && game.asteroids.length > 0) {
      safeFromAsteroids = !checkForAsteroids(futureState, game.asteroids, 0);
    }
    // log('noThreats', noThreats, 'safeFromAsteroids', safeFromAsteroids)
    return noThreats && safeFromAsteroids;
};

  const getSafeDirection = function (player, enemies, game, possibleDirections) {
    const possibleNewDirections = possibleDirections.filter(dir => dir !== player.direction);
    const playerWithNewDirection = JSON.parse(JSON.stringify(player))
    let newDirection = '';
    possibleNewDirections.forEach(direction => {
      playerWithNewDirection.direction = direction;
      if (isActionReallySafe(playerWithNewDirection, 'move', enemies, game)) newDirection = direction;
    })
    // log('safe direction', newDirection.toLowerCase())
   return newDirection.toLowerCase();
  }

  const mayBeInDangerNextTurn = function (player, enemies, game) {
    // log('check for possible danger')
    let nextMove = '';
    // for each of the enemies that are alive
    enemies.forEach(enemy => {
      // see if there are any in the same column, regardless of direction
      if (sameColumn(player.position, enemy.position)) {
        // move perpendicular to that
        // log('same column: move perpendicular');
        if (player.direction === 'east' || player.direction === 'west') nextMove = 'move';
        nextMove = getSafeDirection(player, enemies, game, ['EAST', 'WEST']);
      }

      // see if there are any in the same row, regardless of direction
      else if (sameRow(player.position, enemy.position)) {
        // move perpendicular to that
        // log('same row: move perpendicular');
        if (player.direction === 'north' || player.direction === 'south') nextMove = 'move';
        nextMove = getSafeDirection(player, enemies, game, ['NORTH', 'SOUTH']);
      }
      
      // // see if any in adjacent column
      // else if (withinRange(player.position[0], enemy.position[0]-1, enemy.position[0]+1)) {
      //   log('enemy in adjacent column');
      //   // traveling toward my column

        
      // }
      
      // // // see if any in adjacent row
      // else if (withinRange(player.position[1], enemy.position[1]-1, enemy.position[1]+1)) {
      //   log('enemy in adjacent row');
      //   // traveling towards my row

      // }
      return nextMove;
      
    });
  };

  export default {
    info: {
      name: "silentPanda",
      style: 49,
      team: 1,
    },
    ai: function (player, enemies, game) {
      // log("START TURN", player, enemies, game);
      const { ammo, direction, position, asteroids } = player;

     // If asteroids, move
     if (asteroids && asteroids.length > 0) {
       // if in danger now, move
       if (checkForAsteroids(player.position, asteroids, 0)) {
        // log('in danger of asteroid: MOVE') 
        return 'move';
       }
       // if in danger in future, turn
       if (checkForAsteroids(player.position, asteroids, 1)) {
        // log('in danger of asteroid: TURN', getSafeDirection(player, enemies, game, ['NORTH', 'SOUTH', 'EAST', 'WEST'])) 
          return getSafeDirection(player, enemies, game, ['NORTH', 'SOUTH', 'EAST', 'WEST'])
       }

       // if in danger in future, turn
       if (checkForAsteroids(player.position, asteroids, 2)) {
        // log('in danger of asteroid: TURN', getSafeDirection(player, enemies, game, ['NORTH', 'SOUTH', 'EAST', 'WEST'])) 
          return getSafeDirection(player, enemies, game, ['NORTH', 'SOUTH', 'EAST', 'WEST'])
       }

     }

      // If enemy is facing you: MOVE
      const currentThreats = getThreats(player, enemies);
      if (currentThreats.length > 0) {
        // log('currentThreats', currentThreats)
        return 'move'
      }

      // If enemy can face you: MOVE
      const possibleDanger = mayBeInDangerNextTurn(player, enemies, game);
      if (possibleDanger) return possibleDanger;
      // log('no possible danger')

      // If ammo: FIND ENEMY
      const targets = enemiesInRange(player, enemies);
      if (ammo > 0 && targets.length > 0) return "shoot";


      if (ammo) {
        // log('has ammo');
        const closestTarget = findClosestTarget(player, enemies);
        if (closestTarget) {
          // log('found closest target');
          const targetDir = calculateHeading(player.position, closestTarget);
          if (targetDir === player.direction && isActionReallySafe(player, 'move', enemies, game)) return 'move';
          const safeDirection = getSafeDirection(player, enemies, game, [targetDir]) || getSafeDirection(player, enemies, game, ['NORTH', 'SOUTH', 'EAST', 'WEST']);
          if (safeDirection && player.direction !== safeDirection) return safeDirection;
          return 'move';
        }
      }

      // If no ammo and no enemy: GET AMMO
      const closestAmmo = findClosestAmmo(player, game);
      if (closestAmmo) {
        // log("discovered some ammo", closestAmmo);
        const ammoDir = calculateHeading(player.position, closestAmmo);
        if (ammoDir === player.direction && isActionReallySafe(player, 'move', enemies, game)) return "move";
        return ammoDir;
      }

      // If ammo available: GET AMMO
      // Else: MOVE TO EDGE
      // log('nothing else to do: move')
      return getSafeDirection(player, enemies, game, ['NORTH', 'SOUTH', 'EAST', 'WEST']);
    }
  };