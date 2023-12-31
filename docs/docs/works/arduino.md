---
title: Arduino - ALL IN ONE
---

import ReactPlayer from "react-player"

# Arduino: ALL IN ONE

:::tip

Due to the requirements of our project, we have decided to use the **STM32** and **ESP32** minimal development boards
after intense internal discussions. This means that we are **unable to use [TinkerCad](https://www.tinkercad.com/)** for
simulation, because **we don't use any Arduino Board & Arduino IDE**. Instead, we will provide more photos of physical
objects.

What's more, we will be completing **all** the Arduino related assignments here.

:::

## Preview

### Arduino Basic & Output

#### Video

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

#### Image

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

### Arduino IoT & Input

#### Video

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

#### Image

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

## Arduino Basic

### Open Source Project: LittleAR

LittleAR is an open-source DIY AR glasses project designed for makers, students, and enthusiasts. It is a versatile and
easy-to-use device that allows users to create their own augmented reality glasses. This project is divided into two
main parts: OSAR and LittleAR.

#### Introduction

LittleAR is a more accessible and beginner-friendly version of the AR glasses. It is designed for makers and students
who are new to DIY projects and want to get started with AR technology. LittleAR is easy to build and offers a range of
features, such as:

1. Navigation
2. Learning and memorizing vocabulary
3. Creating reminders

#### Our Focus

* The AR is a interesting interaction between the real world and the virtual world.
* The AR glasses are designed to be affordable, making them accessible to a wide range of users.

#### Conclusion

LittleAR is an exciting and accessible project that allows users to explore the world of augmented reality. Whether
you're a seasoned maker or just starting out, this project offers a fun and educational way to dive into the world of AR
technology.

### Code Method - Platform IO

#### Introduction

PlatformIO is a powerful and open-source ecosystem for IoT (Internet of Things) and embedded systems development. It is
designed to simplify the process of building, testing, and deploying code for various microcontrollers and development
boards. The platform supports a wide range of popular boards and microcontrollers, making it an ideal choice for
developers working on diverse projects.

#### Install

To get started with PlatformIO, you'll need to install it on your computer. The installation process is straightforward
and can be done using the following steps:

1. Install Python: PlatformIO requires Python 3.6 or higher. You can download the latest version of Python from the
   official website (https://www.python.org/downloads/).

2. Install PlatformIO: Open a terminal or command prompt and run the following command to install PlatformIO:

```
pip install platformio
```

3. Verify the installation: To ensure that PlatformIO is installed correctly, run the following command:

```
pio --version
```

You should see the version number of PlatformIO displayed in the terminal.

#### Usage

Once PlatformIO is installed, you can start using it to manage your projects. Here's a brief overview of the key
features and how to use them:

1. Create a new project: To create a new project, navigate to the desired directory in your terminal or command prompt
   and run the following command:

```
pio init --board <board_name>
```

Replace `<board_name>` with the name of the development board you're using (e.g., `arduino_uno`, `esp32`, etc.).
PlatformIO will generate a new project structure for you.

2. Build and upload code: To build and upload your code to the development board, run the following command:

```
pio run -t upload
```

This command will compile your code, verify it, and upload it to the board.

3. Monitor serial output: To monitor the serial output from your development board, run the following command:

```
pio device monitor
```

This command will open a serial terminal, allowing you to view and interact with the output from your board.

4. Customize settings: PlatformIO allows you to customize various settings for your project, such as board-specific
   options, compiler flags, and libraries. You can modify these settings in the `platformio.ini` file located in your
   project directory.

#### Conclusion

PlatformIO is a versatile and user-friendly tool that simplifies the development process for IoT and embedded systems
projects. Its extensive support for various boards and microcontrollers, combined with its powerful features, make it an
excellent choice for developers working on diverse projects. Give PlatformIO a try and experience the benefits it offers
for your next embedded systems project.

## Arduino Output

> We will come as soon as possible.

## Arduino Input

> We will come as soon as possible.

## Arduino IoT

> We will come as soon as possible.
