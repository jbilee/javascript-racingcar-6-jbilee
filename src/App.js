import RaceHandler from './controller/RaceHandler.js';

class App {
  async play() {
    const raceHandler = new RaceHandler();
    await raceHandler.setNewGame();
    raceHandler.playRounds();
  }
}

export default App;
