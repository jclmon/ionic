import { Component, Prop, Listen, State, h } from "@stencil/core";
import { format } from "../../utils/utils";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true
})
export class MyComponent {
  // /**
  //  * The first name
  //  */
  // @Prop() first: string;

  // /**
  //  * The middle name
  //  */
  // @Prop() middle: string;

  // /**
  //  * The last name
  //  */
  // @Prop() last: string;

  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  // render() {
  //   return <div>Hello, World! I'm {this.getText()}</div>;
  // }

  timer: number;

  @State() time: number = Date.now();
  @State() timeZone: number = 0;

  @Listen("timeZoneChanged")
  timeZoneChangedHandler(event: CustomEvent) {
    this.timeZone = event.detail;
  }

  componentDidLoad() {
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 250);
  }

  componentDidUnload() {
    clearInterval(this.timer);
  }

  get hour(): number {
    return new Date(this.time).getHours();
  }

  get minute(): number {
    return new Date(this.time).getMinutes();
  }

  get second(): number {
    return new Date(this.time).getSeconds();
  }

  render() {
    return (
      <div>
        <clock-face
          hour={this.hour + this.timeZone}
          minute={this.minute}
          second={this.second}
        />
        <time-zone-slider offset={this.timeZone} />
      </div>
    );
  }
}
