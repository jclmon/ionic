import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import "@ionic/core";

@Component({
  tag: "time-zone-slider"
})
export class TimeZoneSlider {
  @Prop() offset: number;
  @Event() timeZoneChanged: EventEmitter;

  positionChanged(event: CustomEvent) {
    this.timeZoneChanged.emit(event.detail.value);
  }

  render() {
    return (
      <ion-range
        debounce={500}
        max={12}
        min={-12}
        pin={true}
        snaps={true}
        step={1}
        value={this.offset}
        onIonChange={event => this.positionChanged(event)}
      >
        <ion-label slot="start">-12</ion-label>
        <ion-label slot="end">12</ion-label>
      </ion-range>
    );
  }
}
