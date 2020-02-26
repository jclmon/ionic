import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "clock-face"
})
export class ClockFace {
  @Prop() hour: number;
  @Prop() minute: number;
  @Prop() second: number;

  hourToDegrees(): number {
    return Math.floor(this.minute / 2) + this.hour * 30;
  }

  minuteToDegrees(): number {
    return Math.floor(this.second / 10) + this.minute * 6;
  }

  secondToDegrees(): number {
    return this.second * 6;
  }

  render() {
    return (
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="100"
          cy="100"
          r="95"
          stroke-width="10"
          stroke="black"
          fill="transparent"
        />
        <line
          id="hour-hand"
          transform={`rotate(${this.hourToDegrees()}, 100, 100)`}
          x1="100"
          y1="100"
          x2="100"
          y2="60"
          stroke="black"
          stroke-width="10"
          stroke-linecap="round"
        />
        <line
          id="minute-hand"
          transform={`rotate(${this.minuteToDegrees()}, 100, 100)`}
          x1="100"
          y1="100"
          x2="100"
          y2="30"
          stroke="black"
          stroke-width="8"
          stroke-linecap="round"
        />
        <line
          id="second-hand"
          transform={`rotate(${this.secondToDegrees()}, 100, 100)`}
          x1="100"
          y1="100"
          x2="100"
          y2="30"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    );
  }
}
