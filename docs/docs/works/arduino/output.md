---
title: Output
---

import ReactPlayer from "react-player"

# Arduino: Output

:::tip

Due to the requirements of our project, we have decided to use the **STM32** minimal development boards after intense
internal discussions.

This post will be relatively short because we have already provided a detailed introduction to our project coding method
in **[Arduino Basic](/works/arduino/basic)**, and we will elaborate on our development process
in **[Arduino IoT](/works/arduino/iot)**.

:::

## Introduction

In this post, We'll introduce a project where we leverage an STM32 microcontroller to control various external
devices, including LED, OLED display, and a motor. The project is designed to showcase the capabilities of the STM32
microcontroller and its real-time communication with the OLED display to visualize the motor's angle.

## Demo

In the "Demo" section, we'll showcase the project in action. We'll provide a video or detailed description of how the
STM32 effectively controls the LED and motor, while the OLED display accurately reflects the motor's angle in real time.
This demonstration will serve as a visual representation of the project's functionality, allowing readers to grasp the
practical application of our code and hardware setup.


<div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }}>
    <ReactPlayer width="360px" height="560px"  controls url="https://cdn.littleor.cn/assert/202310251012413.mp4" />
</div>

## Hardware

For this project, we utilize the following hardware components:

* **STM32**: We employ the [STM32F103C8T6](https://www.st.com/resource/en/datasheet/stm32f103c8.pdf) mini development
  board, which is equipped with an integrated `ST-Link` for
  program downloading.
* **OLED**: We make use of a 0.96-inch OLED screen, establishing a communication link with the STM32 via the `I2C`
  interface.
* **LED**: We primarily utilize the built-in LED light on the STM32 development board, making it a handy indicator for
  various system states.
* **Motor**: A small motor is incorporated into the project to demonstrate the Pulse Width Modulation (PWM)
  functionality of the STM32. This showcases the microcontroller's ability to control the motor's speed and position.
* **Breadboard**: To facilitate the connection between the motor and the STM32, we employ a breadboard, offering a
  convenient platform for wiring and prototyping.
* **Jumper Wires**: Jumper wires are used to establish connections between the STM32, motor, and breadboard, allowing
  for flexible and reliable electrical connections.
* **USB Cable**: A USB cable is used to connect the STM32 development board to a computer for programming and power
  supply. This is a crucial element in the development and debugging process.

![Img](https://cdn.littleor.cn/assert/202310251121492.png)

## Code

To achieve the project's goals, we've written custom code to control the LED light, manage the motor's behavior, and
display pertinent information on the OLED screen. Let's dive into the different sections of the codebase.

### OLED

In the "OLED" section of the code, we address the OLED display's initialization, rendering, and interaction with the
STM32. We'll explore how we set up the communication channel with the OLED screen and send data to be displayed in real
time.

```cpp
#include "oled.h"

Adafruit_SSD1306 display(OLED_WIDTH, OLED_HEIGHT, &Wire);

/**
 * OLED Init
 */
void OLED_Init() {
    delay(500);
    // Init with 3.3v
    if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) { // Address 0x3D for 128x64
        for (;;) {
            digitalToggle(PC13);
            delay(500);
        }
    }
    display.clearDisplay();

    display.drawLine(10, 10, 10, 20, SSD1306_WHITE);
    display.display();
}
```

### Main

The "Main" section of our code is where the magic happens. We delve into the core logic of the project, discussing how
the STM32 interacts with the various hardware components. This section is pivotal to understanding how we control the
LED, motor, and OLED display simultaneously while maintaining real-time updates on the motor's angle.

```cpp
#include <Arduino.h>
#include "oled.h"
#include <Servo.h>

extern Adafruit_SSD1306 display;
uint64_t i = 0;
Servo servo;

void displayContent() {
    display.clearDisplay();
    
    // Show our team name
    display.setTextColor(SSD1306_WHITE);
    display.setTextSize(1);
    display.setCursor(0, 0);
    display.print("Woodman 123");
  
    // Show the angle of motor
    display.setTextSize(2);
    display.setCursor(12, 12);
    display.print("Angle:");
    display.print(i++ * 10 % 190);
    display.display();
}


void setup() {
    pinMode(LED_BUILTIN, OUTPUT);
    OLED_Init();
    servo.attach(PB1);
}

void loop() {
    displayContent();
    servo.write(i * 10 % 190);
    delay(500);
}
```
