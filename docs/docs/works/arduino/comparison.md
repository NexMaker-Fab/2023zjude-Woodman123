---
title: "Open Source Comparison"
---

# Open Source Comparison

## Open Source Project: Spinning Night Light

This [open-source project](https://www.tinkerhobby.com/arduino-rgb-led-spinning-night-light/), hosted by Tinker Hobby,
guides users through the creation of a spinning night light controlled
by an Arduino microcontroller. The project is divided into multiple parts, each focusing on different aspects of the
build.

![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401021914488.jpg)

### Overview

- **Goal:** Create a dynamic night light with a spinning feature, using an Arduino to control both the motor and RGB
  LED.
- **Components:** The project utilizes an Arduino board, RGB LED, NPN transistor (2N3904), diodes (1N914), resistors (
  100 Ohm, 150 Ohm, 82 Ohm), soldering iron, heat shrink tubing, jumper wires, white paper, a jar lid, and mounting
  tape.

### Assembly

1. **Wiring & Soldering:** Connect wires to the motor terminals and cover with heat-shrink tubing. Solder RGB LED leads
   to long wires and cover connections.
2. **Circuit Construction:** Build the circuit on a mini breadboard, following a schematic.
3. **Diffuser Preparation:** Create a paper diffuser and attach it to the jar lid using mounting tape.
4. **Motor Mounting:** Attach the motor to the breadboard using mounting tape.
5. **LED Securing:** Bundle the LED wires together and secure them in place using a prop, such as a lollipop stick.

### Programming

- **Arduino Sketch:** Write a program that uses PWM to control the motor speed and LED color transitions.
- **Color Transition:** Implement a fade effect from aqua to magenta and back, using PWM to adjust the LED colors.

### Motor Control

- **Single Transistor Circuit:** Control the motor's basic operation, including on/off and speed control with PWM.
- **Back EMF Protection:** Use a diode (kickback diode) to protect the circuit from voltage spikes produced by the
  motor's inductor.

## Comparison

|                 | Spinning Night Light | Ours                |
|-----------------|----------------------|---------------------|
| **Chip**        | Arduino Uno          | ESP32-S             |
| **Development** | Arduino IDE          | CLion + PlatformIO  |
| **IoT**         | No                   | Yes                 |
| **Input**       | No                   | Vibration + Network |
| **Output**      | LED + Motor          | RGB LED             |

