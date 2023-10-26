---
title: Presentation
---

import ReactPlayer from "react-player"

# Arduino: Presentation

:::tip

Due to the requirements of our project, we have decided to use the **STM32** and **ESP32** minimal development boards
after intense internal discussions. This means that we are **unable to use [TinkerCad](https://www.tinkercad.com/)** for
simulation, because **we don't use any Arduino Board & Arduino IDE**. Instead, we will provide more photos of physical
objects.

What's more, we will be completing **all** the Arduino related assignments here.

:::

## Arduino Basic & Output

### Video

This is our demo video, we use the `STM32F103C8T6` development board to control the LED light and motor, and display
some
information on the OLED screen.

<div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }}>
    <ReactPlayer width="360px" height="480px"  controls url="https://cdn.littleor.cn/assert/202310251012413.mp4" />
</div>

### Image

Since we don't use an Arduino, we can't provide [TinkerCad](https://www.tinkercad.com/) screenshots, so we've provided
some photos of the real thing.

<p style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
}}>
    <img style={{height: 460}} src="https://cdn.littleor.cn/assert/202310251121492.png"/>
</p>

## Arduino IoT & Input

### Video

This is our demo video, we use the `ESP32-S` development board to control the LED light, RGB light, and get indoor
environment information. Besides, we developed a **[web page](https://iot-demo.littleor.cn/)** to **remote control** the
LED light and RGB light, and get the indoor
environment information.

<div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }}>
    <ReactPlayer width="360px" height="480px"  controls url='https://cdn.littleor.cn/assert/202310251056606.mp4' />
</div>

### Image

Since we don't use an Arduino, we can't provide [TinkerCad](https://www.tinkercad.com/) screenshots, so we've provided
some photos of the real thing.

<p style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
}}>
    <img style={{height: 460, marginRight: "20px"}} src="https://cdn.littleor.cn/assert/202310251127002.png"/>
    <img style={{height: 460}}  src="https://cdn.littleor.cn/assert/202310251128945.PNG"/>
</p>


## More Detail

Please refer to the following pages for more details:
* [Arduino Basic](/works/arduino/basic)
* [Arduino Output](/works/arduino/output)

[//]: # (* [Arduino IoT]&#40;/works/arduino/iot&#41;)
[//]: # (* [Arduino Input]&#40;/works/arduino/input&#41;)
