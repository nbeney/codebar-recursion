const MAX_FRAMES = 7;
const FRAME_WIDTH = 250;
const FRAME_HEIGHT = 50;
const COMMENT_GAP = 15;
const COMMENT_WIDTH = 150;
const ARROW_WIDTH = 25;

const PALETTE = [
  "#001219ff",
  "#005f73ff",
  "#0a9396ff",
  "#94d2bdff",
  "#e9d8a6ff",
  "#ee9b00ff",
  "#ca6702ff",
  "#bb3e03ff",
  "#ae2012ff",
  "#9b2226ff",
];

let sim;

function setup() {
  createCanvas(
    FRAME_WIDTH + COMMENT_GAP + COMMENT_WIDTH,
    MAX_FRAMES * FRAME_HEIGHT
  );
  rectMode(CENTER);
  frameRate(1);
  noStroke();
  sim = new Simulation();
  saveGif("factorial.gif", 17);
}

function draw() {
  if (!sim.hasNext()) return;

  background(255);
  translate(FRAME_WIDTH / 2, height - FRAME_HEIGHT / 2);

  stack = sim.next();
  console.log(stack.join(" / "));
  for (const [idx, frame] of stack.entries()) {
    fill(PALETTE[idx + 1]);
    rect(0, -idx * FRAME_HEIGHT, FRAME_WIDTH, FRAME_HEIGHT);

    fill(0);
    textStyle(BOLD);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(frame.text, 0, -idx * FRAME_HEIGHT);

    if (frame.result) {
      if (frame.isReturn) {
        push();
        translate(FRAME_WIDTH / 2 + 10, -idx * FRAME_HEIGHT);

        textAlign(LEFT, CENTER);
        text(frame.result, ARROW_WIDTH + COMMENT_GAP, FRAME_HEIGHT / 2);

        stroke(0);
        strokeWeight(3);
        line(0, 0, ARROW_WIDTH, 0);
        line(ARROW_WIDTH, 0, ARROW_WIDTH, FRAME_HEIGHT);
        line(ARROW_WIDTH, FRAME_HEIGHT, 0, FRAME_HEIGHT);
        triangle(0, FRAME_HEIGHT, 5, FRAME_HEIGHT + 5, 5, FRAME_HEIGHT - 5);

        pop();
      } else {
        push();
        translate(FRAME_WIDTH / 2 + COMMENT_GAP, -idx * FRAME_HEIGHT);
        textAlign(LEFT, CENTER);
        text(frame.result, 0, 0);
        pop();
      }
    }
  }
}

class Simulation {
  constructor() {
    this.history = [];
    this.stack = [];
    this.run();
  }

  run() {
    this.enter("main");
    const result = this.fact(5);
    this.annotate(result);
  }

  hasNext() {
    return this.history.length > 0;
  }

  next() {
    return this.history.shift();
  }

  enter(text) {
    this.stack.push(new Frame(text));
    this.history.push([...this.stack]);
  }

  leave(text) {
    const frame = this.stack.pop();
    this.stack.push(new Frame(frame.text, text, true));
    this.history.push([...this.stack]);
    this.stack.pop();
    this.history.push([...this.stack]);
  }

  annotate(text) {
    const frame = this.stack.pop();
    this.stack.push(new Frame(frame.text, text));
    this.history.push([...this.stack]);
  }

  fact(n) {
    this.enter(`fact(${n})`);
    if (n == 0) {
      this.leave(`${1}`);
      return 1;
    } else {
      const temp = this.fact(n - 1);
      const result = n * temp;
      this.leave(`${result} = ${n} * ${temp}`);
      return result;
    }
  }
}

class Frame {
  constructor(text, result, isReturn) {
    this.text = text;
    this.result = result;
    this.isReturn = isReturn || false;
  }

  toString() {
    if (this.result) {
      return this.text + " " + this.result;
    } else {
      return this.text;
    }
  }
}
