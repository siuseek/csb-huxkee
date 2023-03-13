/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_4/costumes/костюм 1.svg", {
        x: 134.9869635314812,
        y: 111.1185066753434
      })
    ];

    this.sounds = [new Sound("пук", "./_4/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "3" }, this.whenIReceive3)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("3");
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *whenIReceive3() {
    this.visible = true;
  }
}
