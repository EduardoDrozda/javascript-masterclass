import database from "../database.json" assert { type: "json" };
import Person from "./person.js";
import TerminalController from "./terminalController.js";
import { save } from "./repository.js";

const DEFAULT_LANG = "pt-BR";
const STOP_TERM = ":q";

const terminalController = new TerminalController();
terminalController.initalizeTerminal(database, DEFAULT_LANG);

async function mainLoop() {
  try {
    const answer = await terminalController.question(
      "What do you want to do? "
    );

    if (answer === STOP_TERM) {
      terminalController.closeTerminal();
      console.log("Process finished!");
      return;
    }

    const person = Person.generateInstaceFromString(answer);
    const data = terminalController.updateTable(person.formatted(DEFAULT_LANG));
    await save(data);
    return mainLoop();
  } catch (error) {
    console.error("Error: ", error);

    return mainLoop();
  }
}

await mainLoop();
