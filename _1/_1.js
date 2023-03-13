/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 4", "./_1/costumes/костюм 4.png", { x: 7, y: 15 }),
      new Costume("костюм 2", "./_1/costumes/костюм 2.png", { x: 7, y: 15 }),
      new Costume("костюм 5", "./_1/costumes/костюм 5.png", { x: 7, y: 15 }),
      new Costume("костюм 3", "./_1/costumes/костюм 3.png", { x: 7, y: 15 }),
      new Costume("костюм 6", "./_1/costumes/костюм 6.png", { x: 7, y: 7 }),
      new Costume("костюм 7", "./_1/costumes/костюм 7.png", { x: 7, y: 7 }),
      new Costume("костюм 9", "./_1/costumes/костюм 9.png", { x: 12, y: 1 }),
      new Costume("костюм 8", "./_1/costumes/костюм 8.png", { x: 12, y: 1 }),
      new Costume("костюм 13", "./_1/costumes/костюм 13.png", { x: 12, y: 5 }),
      new Costume("костюм 12", "./_1/costumes/костюм 12.png", { x: 12, y: 11 }),
      new Costume("костюм 18", "./_1/costumes/костюм 18.png", { x: 7, y: 15 }),
      new Costume("костюм 19", "./_1/costumes/костюм 19.png", { x: 7, y: 15 }),
      new Costume("костюм 11", "./_1/costumes/костюм 11.png", { x: 12, y: 14 }),
      new Costume("костюм 10", "./_1/costumes/костюм 10.png", { x: 12, y: 14 }),
      new Costume("костюм 14", "./_1/costumes/костюм 14.png", { x: 12, y: 14 }),
      new Costume("костюм 15", "./_1/costumes/костюм 15.png", { x: 12, y: 14 }),
      new Costume("костюм 16", "./_1/costumes/костюм 16.png", { x: 12, y: 11 }),
      new Costume("костюм 17", "./_1/costumes/костюм 17.png", { x: 12, y: 5 })
    ];

    this.sounds = [
      new Sound("Мяу", "./_1/sounds/Мяу.wav"),
      new Sound("Meow2", "./_1/sounds/Meow2.wav"),
      new Sound("Video Game 2", "./_1/sounds/Video Game 2.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "съобщение1" },
        this.whenIReceive1
      ),
      new Trigger(Trigger.BROADCAST, { name: "3" }, this.whenIReceive3),
      new Trigger(Trigger.BROADCAST, { name: "4" }, this.whenIReceive4)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "костюм 3";
    this.goto(2, -5);
  }

  *whenGreenFlagClicked2() {
    while (true) {
      null;
      yield;
    }
  }

  *whenIReceive1() {
    yield* this.wait(1);
    this.costume = "костюм 6";
    for (let i = 0; i < 5; i++) {
      yield* this.wait(1);
      this.costume = "костюм 7";
      yield* this.wait(1);
      this.costume = "костюм 6";
      yield;
    }
    this.broadcast("2");
    this.costume = "костюм 3";
  }

  *whenIReceive3() {
    yield* this.wait(1);
    this.costume = "костюм 9";
    yield* this.wait(1);
    this.costume = "костюм 8";
    yield* this.wait(0.5);
    for (let i = 0; i < 2; i++) {
      this.costume = "костюм 13";
      yield* this.wait(1);
      this.costume = "костюм 12";
      yield* this.wait(1);
      this.costume = "костюм 11";
      yield* this.wait(1);
      this.costume = "костюм 14";
      yield* this.wait(1);
      yield;
    }
    this.costume = "костюм 9";
    yield* this.wait(1);
    this.costume = "костюм 3";
  }

  *whenIReceive4() {
    this.costume = "костюм 5";
    yield* this.playSoundUntilDone("Meow2");
    this.costume = "костюм 3";
  }
}
