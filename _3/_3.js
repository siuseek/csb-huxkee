/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_3/costumes/костюм 1.svg", {
        x: 133.07652000000002,
        y: 183.0820529843903
      })
    ];

    this.sounds = [new Sound("пук", "./_3/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("съобщение1");
  }

  *whenIReceive2() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }
}
