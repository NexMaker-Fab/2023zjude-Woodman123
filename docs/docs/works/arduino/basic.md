---
title: Basic
---

import ReactPlayer from "react-player"

# Arduino: Basic

:::tip

Due to the requirements of our project, we have decided to use the **STM32** and **ESP32** minimal development boards
after intense internal discussions. This means that we are **unable to use [TinkerCad](https://www.tinkercad.com/)** for
simulation, because **we don't use any Arduino Board & Arduino IDE**. Instead, we will provide more photos of physical
objects.

:::

## Open Source Project: LittleAR

LittleAR is an open-source DIY AR glasses project designed for makers, students, and enthusiasts. It is a versatile and
easy-to-use device that allows users to create their own augmented reality glasses. This project is divided into two
main parts: OSAR and LittleAR.
<p>
<iframe src="//player.bilibili.com/player.html?aid=954467995&bvid=BV1JW4y1X7Uz&cid=1154721281&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" style={{width: '100%', height: "600px"}} allowfullscreen="true"></iframe>
</p>

### Introduction

LittleAR is a more accessible and beginner-friendly version of the AR glasses. It is designed for makers and students
who are new to DIY projects and want to get started with AR technology. LittleAR is easy to build and offers a range of
features, such as:

1. Navigation
2. Learning and memorizing vocabulary
3. Creating reminders

![LittleAR](https://cdn.littleor.cn/assert/202310261428268.jpg)

### Our Focus

* The AR is a interesting interaction between the real world and the virtual world.
* The AR glasses are designed to be affordable, making them accessible to a wide range of users.

### Conclusion

LittleAR is an exciting and accessible project that allows users to explore the world of augmented reality. Whether
you're a seasoned maker or just starting out, this project offers a fun and educational way to dive into the world of AR
technology.

## Code Method: PlatformIO

### Introduction

[PlatformIO](https://PlatformIO.org) is a powerful and open-source ecosystem for IoT (Internet of Things) and embedded
systems development. It is
designed to simplify the process of building, testing, and deploying code for various microcontrollers and development
boards. The platform supports a wide range of popular boards and microcontrollers, making it an ideal choice for
developers working on diverse projects.

![PlatformIO](https://cdn.littleor.cn/assert/202310261427488.jpg)

### Install

To get started with PlatformIO, you'll need to install it on your computer. The installation process is straightforward
and can be done using the following steps:

1. Install Python: PlatformIO requires Python 3.6 or higher. You can download the latest version of Python from the
   official website (https://www.python.org/downloads/).

2. Install PlatformIO: Open a terminal or command prompt and run the following command to install PlatformIO:

```bash
pip install platformio
```

3. Verify the installation: To ensure that PlatformIO is installed correctly, run the following command:

```bash
pio --version
```

You should see the version number of PlatformIO displayed in the terminal.

![](https://cdn.littleor.cn/assert/202310261431419.png)

### Usage

Once PlatformIO is installed, you can start using it to manage your projects. Here's a brief overview of the key
features and how to use them:

1. Create a new project: To create a new project, navigate to the desired directory in your terminal or command prompt
   and run the following command:

```bash
pio init --board <board_name>
```

Replace `<board_name>` with the name of the development board you're using (e.g., `arduino_uno`, `esp32`, etc.).
PlatformIO will generate a new project structure for you.

2. Build and upload code: To build and upload your code to the development board, run the following command:

```bash
pio run -t upload
```

This command will compile your code, verify it, and upload it to the board.

3. Monitor serial output: To monitor the serial output from your development board, run the following command:

```bash
pio device monitor
```

This command will open a serial terminal, allowing you to view and interact with the output from your board.

4. Customize settings: PlatformIO allows you to customize various settings for your project, such as board-specific
   options, compiler flags, and libraries. You can modify these settings in the `platformio.ini` file located in your
   project directory.

### Conclusion

PlatformIO is a versatile and user-friendly tool that simplifies the development process for IoT and embedded systems
projects. Its extensive support for various boards and microcontrollers, combined with its powerful features, make it an
excellent choice for developers working on diverse projects. Give PlatformIO a try and experience the benefits it offers
for your next embedded systems project.

## Water Light Program

### Introduction

We use the Arduino IDE to write the program, and the program is uploaded to the development board through the USB cable.
And we will present the program in the form of a video, the lights will display one after another.

### Preview

#### TinkerCAD

![](https://cdn.littleor.cn/assert/202310261459008.png)

#### Video

<div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }}>
    <ReactPlayer width="100%" height="auto"  controls url="https://cdn.littleor.cn/assert/202310261459879.mp4" />
</div>

### Code

```cpp
#include "Arduino.h"

#define BUTTON_PIN 2
#define FIRST_LED_PIN 8
#define LED_NUM 6

boolean state = LOW;

void setup() {
    pinMode(BUTTON_PIN, INPUT);
    for (int i = FIRST_LED_PIN; i < FIRST_LED_PIN + LED_NUM; i++) {
        pinMode(i, OUTPUT);
    }
}

void loop() {
    if (digitalRead(BUTTON_PIN) == HIGH) {
        state = !state;
    }
    
    if (state == HIGH) {
        for (int i = FIRST_LED_PIN; i < FIRST_LED_PIN + LED_NUM; i++) {
            for (int j = FIRST_LED_PIN; j < FIRST_LED_PIN + LED_NUM; j++) {
                digitalWrite(j, LOW);
            }
            digitalWrite(i, HIGH);
            delay(1000);
        }
    }
}
```
