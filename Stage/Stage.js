/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("декор 1", "./Stage/costumes/декор 1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("декор 2", "./Stage/costumes/декор 2.svg", {
        x: 392.36114501953125,
        y: -97
      }),
      new Costume("декор 3", "./Stage/costumes/декор 3.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("пук", "./Stage/sounds/пук.wav")];

    this.triggers = [];
  }
}
