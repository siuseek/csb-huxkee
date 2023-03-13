import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import _1 from "./_1/_1.js";
import _2 from "./_2/_2.js";
import _3 from "./_3/_3.js";
import _4 from "./_4/_4.js";
import _5 from "./_5/_5.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  _1: new _1({
    x: 2,
    y: -5,
    direction: 90,
    costumeNumber: 13,
    size: 1500,
    visible: true,
    layerOrder: 4
  }),
  _2: new _2({
    x: 26.00000063578284,
    y: -32.99999482896635,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  _3: new _3({
    x: -92.99999179840142,
    y: 17.00000093248147,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  _4: new _4({
    x: -96.99999154408825,
    y: 18.000000847710425,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  _5: new _5({
    x: -79.99999262491906,
    y: -21.999995761447824,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
