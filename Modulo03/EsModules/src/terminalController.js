import Draftlog from "draftlog";
import Person from "./person.js";
import chalk from "chalk";
import chalkTable from "chalk-table";
import readline from "readline";

export default class TerminalController {
  constructor() {
    this.print = {};
    this.data = [];
    this.terminal = {};
  }

  initalizeTerminal(database, language) {
    Draftlog(console).addLineListener(process.stdin);
    this.terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this.initializeTable(database, language);
  }

  initializeTable(database, language) {
    const data = database.map((person) => new Person(person).formatted());
    const table = chalkTable(this.getTableOptions(), data);

    this.print = console.draft(table);
    this.data = data;
  }

  updateTable(item) {
    this.data.push(item);
    this.print(chalkTable(this.getTableOptions(), this.data));
    return this.data;
  }

  question(msg = "") {
    return new Promise((resolve) => {
      this.terminal.question(msg, resolve);
    });
  }

  closeTerminal() {
    this.terminal.close();
  }

  getTableOptions() {
    return {
      leftPad: 2,
      columns: [
        { field: "id", name: chalk.cyan("ID") },
        { field: "vehicles", name: chalk.magenta("vehicles") },
        { field: "kmTravelled", name: chalk.cyan("Km Travelled") },
        { field: "from", name: chalk.cyan("From") },
        { field: "to", name: chalk.cyan("To") },
      ],
    };
  }
}
