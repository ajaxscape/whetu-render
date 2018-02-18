const Game = require('./src/models/Game')

module.exports = {
  updatePlayer: (...args) => Game.updatePlayer(...args),
  updateBody: (...args) => Game.updateBody(...args),
  render: (...args) => Game.render(...args)
}
