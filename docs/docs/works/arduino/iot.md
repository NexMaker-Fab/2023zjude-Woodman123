---
title: IoT & Input
---

import ReactPlayer from "react-player"

# Arduino: IoT (Including Input)

:::tip

Due to the requirements of our project, we have decided to use the **STM32** minimal development boards
after intense internal discussions. This means that we are **unable to use [TinkerCad](https://www.tinkercad.com/)** for
simulation, because **we don't use any Arduino Board & Arduino IDE**. Instead, we will provide more photos of physical
objects.

:::

## Introduction

In this post, we will discuss a project that utilizes the ESP32-S to create an IoT environmental monitoring station.
This device is capable of obtaining indoor environmental information using the DHT11 sensor, controlling RGB and onboard
LED lights, and connecting to the [Aliyun IoT Platform](https://www.aliyun.com/product/iot). Additionally, we have
developed a control webpage using [NiceGUI](https://nicegui.io/) to allow users to view device status, environmental
parameters, and control RGB and LED lights online.

## Demo

Now that we've covered the hardware, code, and integration with the Aliyun IoT platform and web interface, let's see the
IoT Environmental Monitoring Station in action. We'll provide a demonstration of how you can interact with the device
and monitor your indoor environment from anywhere.

<div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }}>
    <ReactPlayer width="360px" height="560px"  controls url="https://cdn.littleor.cn/assert/202310251056606.mp4" />
</div>

## Hardware

For this project, we utilize the following hardware components:

* **ESP32**: We employ the [ESP32-S](https://www.espressif.com/en/products/socs/esp32-s) mini development board, which
  can use WiFi and Bluetooth.
* **OLED**: We make use of a 0.96-inch OLED screen, establishing a communication link with the ESP32 via the `I2C`
  interface.
* **LED**: We primarily utilize the built-in LED light on the ESP32 development board, making it a handy indicator for
  various system states.
* **Button**: We use a button to control the LED light.
* **RGB LED**: We use a RGB LED to show the indoor environment information.
* **DHT11**: We use a DHT11 to get the indoor environmental information.
* **Breadboard**: To facilitate the connection between the ESP32 and others, we employ a breadboard, offering a
  convenient platform for wiring and prototyping.
* **Jumper Wires**: Jumper wires are used to establish connections between the ESP32 and others, allowing for flexible
  and reliable electrical connections.

![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401021716861.png)

![](https://cdn.littleor.cn/assert/202310251127002.png)

## Steps

### Get Indoor Environment Information

#### DHT111

The DHT111 sensor plays a crucial role in collecting indoor environment information. It provides temperature and
humidity data that will be displayed and used for various applications.

![DHT111](https://cdn.littleor.cn/assert/202310261806307.jpg)

#### Code

> The OLED code please refer to [Arduino Basic](/works/arduino/output##oled)

We've developed code to read data from the DHT111 sensor and process it for display on the OLED screen and control of
the RGB LED.

```cpp
#include "DHT11.h"

DHT dht(T9, DHTTYPE);
float currentTemperature = 0;
float currentHumidity = 0;

void dht11Init() {
    dht.begin();
};

float readTemperature() {
    currentTemperature = dht.readTemperature();
    return currentTemperature;
}

float readHumidity() {
    currentHumidity = dht.readHumidity();
    return currentHumidity;
};

void updateDHT() {
    currentTemperature = dht.readTemperature();
    currentHumidity = dht.readHumidity();
}
```

### Connection to the Internet

#### ESP32-S

Our ESP32-S is responsible for connecting to the internet, allowing us to access the Alibaba Cloud IoT platform and our
control web interface. It leverages Wi-Fi capabilities for internet connectivity.

![ESP32-S](https://cdn.littleor.cn/assert/202310261808017.jpg)

#### Code

We've implemented the code necessary for the ESP32-S to establish a connection to the internet.

```cpp

// Get Wifi Signal
uint8_t getWiFiSignal() {
    int32_t rssi = WiFi.RSSI();
    if (rssi > -50) {
        return 4;
    } else if (rssi > -60) {
        return 3;
    } else if (rssi > -70) {
        return 2;
    } else if (rssi > -80) {
        return 1;
    } else {
        return 0;
    }
}


// Read to state
void readWiFiSignal() {
    currentWiFiSignal = getWiFiSignal();
}


// Connect to WiFi
void iotInit(const char *ssid, const char *passphrase) {
    WiFi.mode(WIFI_STA);
    WiFi.begin(ssid, passphrase);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
    }
    readWiFiSignal();
    // other things ... 
}
```

### Connection to Aliyun IoT Platform

#### Create a Product

To get our IoT station on the Alibaba Cloud IoT platform, we've created a product within our Alibaba Cloud account. This
product serves as a container for devices.
![](https://cdn.littleor.cn/assert/202310261821963.jpeg)

#### Function Definition

In order to control our IoT station remotely, we've defined our properties and functions within the product we created.

![](https://cdn.littleor.cn/assert/202310261822146.jpeg)

#### Create a Device

Next, we've registered our ESP32-S as a device within the product we created. This step is crucial for connecting the
hardware to the cloud platform.

![](https://cdn.littleor.cn/assert/202310261824193.jpeg)

#### Connect to Aliyun IoT Platform

We've configured the Aliyun IoT platform to allow our ESP32-S to connect to the cloud platform. Now we need write some
code to make our ESP32-S connect to the Aliyun IoT platform.

##### Install Dependencies

```bash
# Just use `pio` cli to install
pio lib install "AliyunIoTSDK"
pio lib install "bblanchon/ArduinoJson@^6.21.3"
pio lib install "knolleary/PubSubClient"
```

##### Configure the MQTT

We need to change the `PubSubClient.h` to make the MQTT work. The file is located
in `~/.platformio/packages/framework-arduinoespressif32/libraries/PubSubClient/src/PubSubClient.h`.

Change the `MQTT_MAX_PACKET_SIZE` to `1024` and `MQTT_KEEPALIVE` to `60` to make it work.

```cpp
// MQTT_MAX_PACKET_SIZE : Maximum packet size. Override with c().
#ifndef MQTT_MAX_PACKET_SIZE
#define MQTT_MAX_PACKET_SIZE 1024
#endif

// MQTT_KEEPALIVE : keepAlive interval in Seconds. Override with setKeepAlive()
#ifndef MQTT_KEEPALIVE
#define MQTT_KEEPALIVE 60
#endif

```

##### Code

```cpp
// Init
void iotInit(const char *ssid, const char *passphrase) {
    
    //See above...

    AliyunIoTSDK::begin(espClient, PRODUCT_KEY, DEVICE_NAME, DEVICE_SECRET, REGION_ID);
    AliyunIoTSDK::bindData("LightSwitch", iotLedCallBack);
    AliyunIoTSDK::bindData("colorR", iotRGBRedCallBack);
    AliyunIoTSDK::bindData("colorG", iotRGBGreenCallBack);
    AliyunIoTSDK::bindData("colorB", iotRGBBlueCallBack);
}

// LED Callback
void iotLedCallBack(JsonVariant p) {
    uint8_t lightSwitch = p["LightSwitch"];
    if (lightSwitch == 1) {
        digitalWrite(BUILTIN_LED, HIGH);
    }
    if (lightSwitch == 0) {
        digitalWrite(BUILTIN_LED, LOW);
    }
}

// Loop send data
void iotLoop() {
    readWiFiSignal();
    char jsonString[64];
    sprintf(jsonString, "{\"r\":%d, \"g\":%d, \"b\":%d}", currentR, currentG, currentB);

    AliyunIoTSDK::loop();
    AliyunIoTSDK::send("IndoorTemperature", currentTemperature);
    AliyunIoTSDK::send("Humidity", currentHumidity);
    AliyunIoTSDK::send("LightSwitch", digitalRead(BUILTIN_LED));
    AliyunIoTSDK::send("colorR", currentR);
    AliyunIoTSDK::send("colorG", currentG);
    AliyunIoTSDK::send("colorB", currentB);
}

```

#### Final Result

![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401021858504.png)

### Develop our Control Website

We use Python to develop our control website, and we use the [NiceGUI](https://nicegui.io/) to develop the UI.

#### Aliyun IoT Platform SDK

The Aliyun IoT platform offers an SDK that we've utilized to communicate with our registered device. This SDK enables
interaction between the IoT platform and our ESP32-S.

Now we need to install it:

```bash
pip install aliyun-python-sdk-core
pip install alibabacloud_tea_openapi
pip install alibabacloud_iot20180120
```

And just with the following Class to get and control our device:

```python
import json
import os
import time

from aliyunsdkcore.auth.credentials import AccessKeyCredential
from aliyunsdkcore.client import AcsClient
from aliyunsdkiot.request.v20180120.QueryDevicePropertyStatusRequest import QueryDevicePropertyStatusRequest
from aliyunsdkiot.request.v20180120.SetDevicePropertyRequest import SetDevicePropertyRequest
from dotenv import load_dotenv


class IOTManager:
    client = None
    online = False

    def __init__(self):
        load_dotenv()
        credentials = AccessKeyCredential(os.environ['ACCESS_KEY_ID'],
                                          os.environ['ACCESS_KEY_SECRET'])
        self.client = AcsClient(region_id='cn-shanghai', credential=credentials)
        self.iot_instance_id = os.environ['IOT_INSTANCE_ID']
        self.product_key = os.environ['PRODUCT_KEY']
        self.device_name = os.environ['DEVICE_NAME']

    def get_request(self, request_type):
        request = request_type()
        request.set_accept_format('json')
        request.set_IotInstanceId(self.iot_instance_id)
        request.set_ProductKey(self.product_key)
        request.set_DeviceName(self.device_name)
        return request

    def do_request(self, request) -> dict:
        response: bytes = self.client.do_action_with_exception(request)
        return json.loads(str(response, encoding='utf-8'))

    def get_device_info(self):
        request = self.get_request(QueryDevicePropertyStatusRequest)
        response = self.do_request(request)
        if response['Success']:
            last_update_time = int(response['Data']['List']['PropertyStatusInfo'][0]['Time'])
            now = int(round(time.time() * 1000))
            self.online = now - last_update_time < 3 * 60 * 1000
        return response

    def set_device_property(self, params: dict):
        request = self.get_request(SetDevicePropertyRequest)
        request.set_Items(json.dumps(params))
        return self.do_request(request)
```

#### NiceGUI

For a user-friendly control interface, we've created a web-based control panel using NiceGUI. This interface allows
users to monitor device status, view environmental parameters, and control the RGB LED and onboard LED light remotely.

```python
import time

from nicegui import ui
from nicegui.events import ValueChangeEventArguments

from iot import IOTManager

if __name__ == '__main__':
    with ui.column():
        ui.label('Woodman 123 Online').classes('text-4xl font-medium text-black')
        last_update_time = int(device_info[0]['Time']) / 1000
        with ui.row():
            ui.label('Online' if iot_manager.online else 'Offline').classes(
                'font-medium text-' + ('green' if iot_manager.online else 'red')
            )
            ui.label('Last Update: ' + time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(last_update_time)))

    grid = ui.grid(columns=2)
    with grid:
        for info in device_info:
            if info['Identifier'].startswith('color'):
                continue
            with ui.card().style('width: 45vw; min-height: 100px; max-width: 350px;'):
                with ui.row().classes('items-center space-x-2'):
                    with ui.column().classes('items-center').style('width: 100px;'):
                        if info['Identifier'] == 'IndoorTemperature':
                            ui.icon('thermostat', color='primary').classes('text-4xl')
                        elif info['Identifier'] == 'Humidity':
                            ui.icon('water', color='primary').classes('text-4xl')
                        elif info['Identifier'] == 'LightSwitch':
                            ui.icon('lightbulb', color='blue' if info['Value'] == '1' else 'gray').classes('text-4xl')
                        elif info['Identifier'] == 'RGB':
                            ui.icon('lightbulb', color='rgb({},{},{})'.format(r, g, b)).classes('text-4xl')

                        ui.label(info['Name']).classes('text-xl font-medium text-black')
                    with ui.column().classes('items-center'):
                        if info['Identifier'] == 'LightSwitch':
                            ui.switch(on_change=on_light_switch, value=info['Value'] == '1').classes(
                                'text-4xl font-medium text-black')
                            continue
                        if info['Identifier'] == 'RGB':
                            with ui.button(icon='colorize') as button:
                                def on_color_pick(e):
                                    # 将 Hex to RGB
                                    rgb_color = e.color.lstrip('#')
                                    rgb_color = tuple(int(rgb_color[i:i + 2], 16) for i in (0, 2, 4))
                                    r, g, b = rgb_color
                                    iot_manager.set_device_property({
                                        'colorR': r,
                                        'colorG': g,
                                        'colorB': b
                                    })

                                    print(e)
                                    button.style(f'background-color:{e.color}!important')

                                # RGB to Hex
                                button.style(f'background-color:#{r:02x}{g:02x}{b:02x}!important')
                                ui.color_picker(on_pick=on_color_pick)
                            continue
                        ui.label(info['Value'] + unit_dict[info['Identifier']]).classes(
                            'text-4xl font-medium text-black')
    ui.run(port=7901)
```

![](https://cdn.littleor.cn/assert/202310261845852.png)
