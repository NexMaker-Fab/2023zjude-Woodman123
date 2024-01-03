---
title: Processing
---

import ReactPlayer from "react-player"

## Processing Experiment

### Introduction

Processing is a flexible software sketchbook and a language for learning how to code. Since 2001, Processing has
promoted software literacy within the visual arts and visual literacy within technology. There are tens of thousands of
students, artists, designers, researchers, and hobbyists who use Processing for learning and prototyping.
The purpose of this project is to create an interactive particle effect using Processing, using the PiexlFlow library.
The version of Processing used in this project is 3.5.4.
This project hopes to imitate the effect of mixed diffusion of smoke, and mouse click and drag to simulate the
disturbance of smoke. We found many instances of particle effects in Processing's PiexlFlow library. We modified the
code in PiexlFlow-Fluid2D to form our ideal effect.

### Materials

* Software：Processing3.5.4
* Library：[PixelFlow](https://github.com/diwi/PixelFlow)
* Interaction：Mouse

### Procedure

#### Install Library

Install the PixelFlow library via “Sketch” > “Import Library…” > “Manage Libraries”, search for “PixelFlow” and select
to download.

![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401031024783.png)
![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401031024556.png)

#### Review the sample code and select the appropriate example

Open the “Sample Program” from the file and find the sample code under “PiexlFlow”. Look at the effect of the example
code one by one and choose the appropriate example

![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401031025266.png)
![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401031025267.png)
![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401031025268.png)

#### Modify according to the sample code

Change the location, color, speed, size, and so on from the sample code. Adjust to the ideal effect to simulate the
effect of concentrated atmosphere diffusion mixing.

```java
import com.thomasdiewald.pixelflow.java.*;
import com.thomasdiewald.pixelflow.java.accelerationstructures.*;
import com.thomasdiewald.pixelflow.java.antialiasing.FXAA.*;
import com.thomasdiewald.pixelflow.java.antialiasing.GBAA.*;
import com.thomasdiewald.pixelflow.java.antialiasing.SMAA.*;
import com.thomasdiewald.pixelflow.java.dwgl.*;
import com.thomasdiewald.pixelflow.java.flowfieldparticles.*;
import com.thomasdiewald.pixelflow.java.fluid.*;
import com.thomasdiewald.pixelflow.java.geometry.*;
import com.thomasdiewald.pixelflow.java.imageprocessing.*;
import com.thomasdiewald.pixelflow.java.imageprocessing.filter.*;
import com.thomasdiewald.pixelflow.java.render.skylight.*;
import com.thomasdiewald.pixelflow.java.rigid_origami.*;
import com.thomasdiewald.pixelflow.java.sampling.*;
import com.thomasdiewald.pixelflow.java.softbodydynamics.*;
import com.thomasdiewald.pixelflow.java.softbodydynamics.constraint.*;
import com.thomasdiewald.pixelflow.java.softbodydynamics.particle.*;
import com.thomasdiewald.pixelflow.java.softbodydynamics.softbody.*;
import com.thomasdiewald.pixelflow.java.utils.*;
import com.thomasdiewald.pixelflow.java.DwPixelFlow;
import com.thomasdiewald.pixelflow.java.fluid.DwFluid2D;

import controlP5.Accordion;
import controlP5.ControlP5;
import controlP5.Group;
import controlP5.RadioButton;
import controlP5.Toggle;
import processing.core.*;
import processing.opengl.PGraphics2D;
import processing.opengl.PJOGL;


private class MyFluidData implements DwFluid2D.FluidData {

    // update() is called during the fluid-simulation update step.
    @Override
    public void update(DwFluid2D fluid) {

        float px, py, vx, vy, radius, vscale, r, g, b, intensity, temperature1, temperature2, temperature3;


        if ((fluid.simulation_step) % 80 == 0) {
            temperature1 = 40f;
            fluid.addTemperature(600, 50, 30, temperature1);//里层
        }
        if ((fluid.simulation_step) % 100 == 0) {
            temperature2 = 40f;
            fluid.addTemperature(600, 150, 40, temperature2);//中间
        }
        if ((fluid.simulation_step) % 120 == 0) {
            temperature3 = 40f;
            fluid.addTemperature(600, 250, 50, temperature3);//外层
        }

        //fluid.addDensity(px,py,半径，)
        fluid.addDensity(600, 0, 100, 1.0f, 0.0f, 0.0f, 3.0f);//最内层颜色
        fluid.addDensity(600, 0, 200, 0.0f, 1.0f, 0.0f, 4.0f);//中间层颜色
        fluid.addDensity(600, 0, 300, 0.0f, 0.0f, 1.0f, 5.0f);//最外层颜色


        boolean mouse_input = !cp5.isMouseOver() && mousePressed && !obstacle_painter.isDrawing();

        // add impulse: density + velocity
        if (mouse_input && mouseButton == LEFT) {
            radius = 15;
            vscale = 15;
            px = mouseX;
            py = height - mouseY;
            vx = (mouseX - pmouseX) * +vscale;
            vy = (mouseY - pmouseY) * -vscale;

            // fluid.addDensity(px, py, radius, 0.25f, 0.0f, 0.1f, 1.0f);
            fluid.addVelocity(px, py, radius, vx, vy);
        }

    }
}


int viewport_w = 1200;
int viewport_h = 800;
int viewport_x = 230;
int viewport_y = 0;
int fluidgrid_scale = 1;

int gui_w = 200;
int gui_x = 20;
int gui_y = 20;

DwFluid2D fluid;
ObstaclePainter obstacle_painter;

// render targets
PGraphics2D pg_fluid;
//texture-buffer, for adding obstacles
PGraphics2D pg_obstacles;

// some state variables for the GUI/display
int BACKGROUND_COLOR = 0;
boolean UPDATE_FLUID = true;
boolean DISPLAY_FLUID_TEXTURES = true;
boolean DISPLAY_FLUID_VECTORS = false;
int DISPLAY_fluid_texture_mode = 0;
boolean DISPLAY_PARTICLES = true;

public void settings() {
    size(viewport_w, viewport_h, P2D);
    smooth(2);
    PJOGL.profile = 3;
}

public void setup() {
    surface.setLocation(viewport_x, viewport_y);

    // main library context
    DwPixelFlow context = new DwPixelFlow(this);
    context.print();
    context.printGL();

    // fluid simulation
    fluid = new DwFluid2D(context, viewport_w, viewport_h, fluidgrid_scale);

    // set some simulation parameters
    fluid.param.dissipation_density = 0.999f;
    fluid.param.dissipation_velocity = 0.99f;
    fluid.param.dissipation_temperature = 0.80f;
    fluid.param.vorticity = 0.10f;

    // interface for adding data to the fluid simulation
    MyFluidData cb_fluid_data = new MyFluidData();
    fluid.addCallback_FluiData(cb_fluid_data);

    // pgraphics for fluid
    pg_fluid = (PGraphics2D) createGraphics(viewport_w, viewport_h, P2D);
    pg_fluid.smooth(4);
    pg_fluid.beginDraw();
    pg_fluid.background(BACKGROUND_COLOR);
    pg_fluid.endDraw();

    // pgraphics for obstacles
    pg_obstacles = (PGraphics2D) createGraphics(viewport_w, viewport_h, P2D);
    pg_obstacles.smooth(0);
    pg_obstacles.beginDraw();
    pg_obstacles.clear();
    // circle-obstacles
    pg_obstacles.strokeWeight(10);
    pg_obstacles.noFill();
    pg_obstacles.noStroke();
    pg_obstacles.fill(64);
    float radius;
    radius = 100;
    pg_obstacles.ellipse(1 * width / 3f, 2 * height / 3f, radius, radius);
    radius = 150;
    pg_obstacles.ellipse(2 * width / 3f, 2 * height / 4f, radius, radius);
    radius = 200;
    pg_obstacles.stroke(64);
    pg_obstacles.strokeWeight(10);
    pg_obstacles.noFill();
    pg_obstacles.ellipse(1 * width / 2f, 1 * height / 4f, radius, radius);
    pg_obstacles.rect(1 * width / 2f, 1 * height / 4f, radius, radius, 20);
    // border-obstacle
    pg_obstacles.strokeWeight(20);
    pg_obstacles.stroke(64);
    pg_obstacles.noFill();
    pg_obstacles.rect(0, 0, pg_obstacles.width, pg_obstacles.height);
    pg_obstacles.endDraw();

    fluid.addObstacles(pg_obstacles);

    // class, that manages interactive drawing (adding/removing) of obstacles
    obstacle_painter = new ObstaclePainter(pg_obstacles);

    createGUI();
    background(0);
    frameRate(60);
}


public void draw() {

    // update simulation
    if (UPDATE_FLUID) {
        fluid.addObstacles(pg_obstacles);
        fluid.update();
    }

    // clear render target
    pg_fluid.beginDraw();
    pg_fluid.background(BACKGROUND_COLOR);
    pg_fluid.endDraw();


    // render fluid stuff
    if (DISPLAY_FLUID_TEXTURES) {
        // render: density (0), temperature (1), pressure (2), velocity (3)
        fluid.renderFluidTextures(pg_fluid, DISPLAY_fluid_texture_mode);
    }

    if (DISPLAY_FLUID_VECTORS) {
        // render: velocity vector field
        fluid.renderFluidVectors(pg_fluid, 10);
    }


    // display
    image(pg_fluid, 0, 0);
    image(pg_obstacles, 0, 0);

    obstacle_painter.displayBrush(this.g);


    // info
    String txt_fps = String.format(getClass().getName() + "   [size %d/%d]   [frame %d]   [fps %6.2f]", fluid.fluid_w, fluid.fluid_h, fluid.simulation_step, frameRate);
    surface.setTitle(txt_fps);
}


public void mousePressed() {
    if (mouseButton == CENTER) obstacle_painter.beginDraw(1); // add obstacles
    if (mouseButton == RIGHT) obstacle_painter.beginDraw(2); // remove obstacles
}

public void mouseDragged() {
    obstacle_painter.draw();
}

public void mouseReleased() {
    obstacle_painter.endDraw();
}


public void fluid_resizeUp() {
    fluid.resize(width, height, fluidgrid_scale = max(1, --fluidgrid_scale));
}

public void fluid_resizeDown() {
    fluid.resize(width, height, ++fluidgrid_scale);
}

public void fluid_reset() {
    fluid.reset();
}

public void fluid_togglePause() {
    UPDATE_FLUID = !UPDATE_FLUID;
}

public void fluid_displayMode(int val) {
    DISPLAY_fluid_texture_mode = val;
    DISPLAY_FLUID_TEXTURES = DISPLAY_fluid_texture_mode != -1;
}

public void fluid_displayVelocityVectors(int val) {
    DISPLAY_FLUID_VECTORS = val != -1;
}

public void keyReleased() {
    if (key == 'p') fluid_togglePause(); // pause / unpause simulation
    if (key == '+') fluid_resizeUp();    // increase fluid-grid resolution
    if (key == '-') fluid_resizeDown();  // decrease fluid-grid resolution
    if (key == 'r') fluid_reset();       // restart simulation

    if (key == '1') DISPLAY_fluid_texture_mode = 0; // density
    if (key == '2') DISPLAY_fluid_texture_mode = 1; // temperature
    if (key == '3') DISPLAY_fluid_texture_mode = 2; // pressure
    if (key == '4') DISPLAY_fluid_texture_mode = 3; // velocity

    if (key == 'q') DISPLAY_FLUID_TEXTURES = !DISPLAY_FLUID_TEXTURES;
    if (key == 'w') DISPLAY_FLUID_VECTORS = !DISPLAY_FLUID_VECTORS;
}


ControlP5 cp5;

public void createGUI() {
    cp5 = new ControlP5(this);

    int sx, sy, px, py, oy;

    sx = 100;
    sy = 14;
    oy = (int) (sy * 1.5f);


    ////////////////////////////////////////////////////////////////////////////
    // GUI - FLUID
    ////////////////////////////////////////////////////////////////////////////
    Group group_fluid = cp5.addGroup("fluid");
    {
        group_fluid.setHeight(20).setSize(gui_w, 300)
                .setBackgroundColor(color(16, 180)).setColorBackground(color(16, 180));
        group_fluid.getCaptionLabel().align(CENTER, CENTER);

        px = 10;
        py = 15;

        cp5.addButton("reset").setGroup(group_fluid).plugTo(this, "fluid_reset").setSize(80, 18).setPosition(px, py);
        cp5.addButton("+").setGroup(group_fluid).plugTo(this, "fluid_resizeUp").setSize(39, 18).setPosition(px += 82, py);
        cp5.addButton("-").setGroup(group_fluid).plugTo(this, "fluid_resizeDown").setSize(39, 18).setPosition(px += 41, py);

        px = 10;

        cp5.addSlider("velocity").setGroup(group_fluid).setSize(sx, sy).setPosition(px, py += (int) (oy * 1.5f))
                .setRange(0, 1).setValue(fluid.param.dissipation_velocity).plugTo(fluid.param, "dissipation_velocity");

        cp5.addSlider("density").setGroup(group_fluid).setSize(sx, sy).setPosition(px, py += oy)
                .setRange(0, 1).setValue(fluid.param.dissipation_density).plugTo(fluid.param, "dissipation_density");

        cp5.addSlider("temperature").setGroup(group_fluid).setSize(sx, sy).setPosition(px, py += oy)
                .setRange(0, 1).setValue(fluid.param.dissipation_temperature).plugTo(fluid.param, "dissipation_temperature");

        cp5.addSlider("vorticity").setGroup(group_fluid).setSize(sx, sy).setPosition(px, py += oy)
                .setRange(0, 1).setValue(fluid.param.vorticity).plugTo(fluid.param, "vorticity");

        cp5.addSlider("iterations").setGroup(group_fluid).setSize(sx, sy).setPosition(px, py += oy)
                .setRange(0, 80).setValue(fluid.param.num_jacobi_projection).plugTo(fluid.param, "num_jacobi_projection");

        cp5.addSlider("timestep").setGroup(group_fluid).setSize(sx, sy).setPosition(px, py += oy)
                .setRange(0, 1).setValue(fluid.param.timestep).plugTo(fluid.param, "timestep");

        cp5.addSlider("gridscale").setGroup(group_fluid).setSize(sx, sy).setPosition(px, py += oy)
                .setRange(0, 50).setValue(fluid.param.gridscale).plugTo(fluid.param, "gridscale");

        RadioButton rb_setFluid_DisplayMode = cp5.addRadio("fluid_displayMode").setGroup(group_fluid).setSize(80, 18).setPosition(px, py += (int) (oy * 1.5f))
                .setSpacingColumn(2).setSpacingRow(2).setItemsPerRow(2)
                .addItem("Density", 0)
                .addItem("Temperature", 1)
                .addItem("Pressure", 2)
                .addItem("Velocity", 3)
                .activate(DISPLAY_fluid_texture_mode);
        for (Toggle toggle : rb_setFluid_DisplayMode.getItems()) toggle.getCaptionLabel().alignX(CENTER);

        cp5.addRadio("fluid_displayVelocityVectors").setGroup(group_fluid).setSize(18, 18).setPosition(px, py += (int) (oy * 2.5f))
                .setSpacingColumn(2).setSpacingRow(2).setItemsPerRow(1)
                .addItem("Velocity Vectors", 0)
                .activate(DISPLAY_FLUID_VECTORS ? 0 : 2);
    }


    ////////////////////////////////////////////////////////////////////////////
    // GUI - DISPLAY
    ////////////////////////////////////////////////////////////////////////////
    Group group_display = cp5.addGroup("display");
    {
        group_display.setHeight(20).setSize(gui_w, 50)
                .setBackgroundColor(color(16, 180)).setColorBackground(color(16, 180));
        group_display.getCaptionLabel().align(CENTER, CENTER);

        px = 10;
        py = 15;

        cp5.addSlider("BACKGROUND").setGroup(group_display).setSize(sx, sy).setPosition(px, py)
                .setRange(0, 255).setValue(BACKGROUND_COLOR).plugTo(this, "BACKGROUND_COLOR");

        cp5.addRadio("fluid_displayParticles").setGroup(group_display).setSize(18, 18).setPosition(px, py += (int) (oy * 1.5f))
                .setSpacingColumn(2).setSpacingRow(2).setItemsPerRow(1)
                .addItem("display particles", 0)
                .activate(DISPLAY_PARTICLES ? 0 : 2);
    }


    ////////////////////////////////////////////////////////////////////////////
    // GUI - ACCORDION
    ////////////////////////////////////////////////////////////////////////////
    cp5.addAccordion("acc").setPosition(gui_x, gui_y).setWidth(gui_w).setSize(gui_w, height)
            .setCollapseMode(Accordion.MULTI)
            .addItem(group_fluid)
            .addItem(group_display)
            .open(4);
}


public class ObstaclePainter {

    // 0 ... not drawing
    // 1 ... adding obstacles
    // 2 ... removing obstacles
    public int draw_mode = 0;
    PGraphics pg;

    float size_paint = 15;
    float size_clear = size_paint * 2.5f;

    float paint_x, paint_y;
    float clear_x, clear_y;

    int shading = 64;

    public ObstaclePainter(PGraphics pg) {
        this.pg = pg;
    }

    public void beginDraw(int mode) {
        paint_x = mouseX;
        paint_y = mouseY;
        this.draw_mode = mode;
        if (mode == 1) {
            pg.beginDraw();
            pg.blendMode(REPLACE);
            pg.noStroke();
            pg.fill(shading);
            pg.ellipse(mouseX, mouseY, size_paint, size_paint);
            pg.endDraw();
        }
        if (mode == 2) {
            clear(mouseX, mouseY);
        }
    }

    public boolean isDrawing() {
        return draw_mode != 0;
    }

    public void draw() {
        paint_x = mouseX;
        paint_y = mouseY;
        if (draw_mode == 1) {
            pg.beginDraw();
            pg.blendMode(REPLACE);
            pg.strokeWeight(size_paint);
            pg.stroke(shading);
            pg.line(mouseX, mouseY, pmouseX, pmouseY);
            pg.endDraw();
        }
        if (draw_mode == 2) {
            clear(mouseX, mouseY);
        }
    }

    public void endDraw() {
        this.draw_mode = 0;
    }

    public void clear(float x, float y) {
        clear_x = x;
        clear_y = y;
        pg.beginDraw();
        pg.blendMode(REPLACE);
        pg.noStroke();
        pg.fill(0, 0);
        pg.ellipse(x, y, size_clear, size_clear);
        pg.endDraw();
    }

    public void displayBrush(PGraphics dst) {
        if (draw_mode == 1) {
            dst.strokeWeight(1);
            dst.stroke(0);
            dst.fill(200, 50);
            dst.ellipse(paint_x, paint_y, size_paint, size_paint);
        }
        if (draw_mode == 2) {
            dst.strokeWeight(1);
            dst.stroke(200);
            dst.fill(200, 100);
            dst.ellipse(clear_x, clear_y, size_clear, size_clear);
        }
    }


}

```

### Demonstration

Here is a demonstration of the basic effects and interactive feedback.

<div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }}>
    <ReactPlayer width="70%" controls url="https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401031026601.mp4" />
</div>

## New Tool Introduction - CINDER

### Introduction

[CINDER](https://libcinder.org/) provides a powerful intuitive toolbox for programming graphics, audio, video, networking, image processing, and computational geometry. Cinder is cross-platform, and the same code often works on Mac OS X, Windows, and a growing number of other platforms (most recently iPhone and iPad).
Cinder is designed to take advantage of the platform's native capabilities as much as possible and relies on at least third-party libraries. This makes applications lighter and faster, and means Cinder applications receive free performance, security, and functionality upgrades while the operating system is running.

![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401031039004.png)

### Links
* https://libcinder.org/
* https://github.com/cinder/Cinder

## Processing with ESP32 (Arduino) - Color Control

### Overview

The purpose of this experiment is to explore how to utilize ESP32 and Processing to work together in our final project.
We use the Processing to control the color of the LED light on our ESP32 board, and show the signal of the WiFi on the
Processing.

### Materials

* Board: ESP32-WROOM-32D Light Board
* Software: Processing 4.3
* IDE: CLion + PlatformIO
* USB cable
* Battery

### Experimental Process

#### Hardware

As we use an integrated PCB board, we don't need to connect any wires. We just need to connect the board to the battery.

![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401031029645.jpg)

#### Programming WiFI Signal Display

We use the CLion + PlatformIO to program the ESP32. And we need make the ESP32 can connect to the WiFi, and send the
WiFI signal information to the Processing.



![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401031042023.png)

```cpp

void readWiFiSignal() {
    currentWiFiSignal = getWiFiSignal();
    Serial.write(currentWiFiSignal);
}

void iotInit(const char *ssid, const char *passphrase) {
    WiFi.mode(WIFI_STA);
    WiFi.begin(ssid, passphrase);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
    }
    readWiFiSignal();
}
```

With the WiFI signal information, we can use the Processing to show the signal.

```java
void drawWiFiSignal(int x, int y, int signalWidth, int signalGap) {
    fill(0);
    noStroke();
    for (int i = 0; i < signal; i++) {
        int signalHeight = (i + 1) * 10; // 信号条高度
        rect(x + i * (signalWidth + signalGap), y + 30 - signalHeight, signalWidth, signalHeight);
    }
}
```

#### Programming RGB Color Control

We use the Processing to control the color of the LED light on the ESP32 board. We use the serial port to send the
control command to the ESP32, and the ESP32 will receive the command and control the LED light.

For the Processing, we use the `Serial` library to send the command to the ESP32.

![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401031037793.png)

```java
void updateSelectedColor() {
    if (mousePressed) {
        if (mouseX > width - hueSliderWidth - 10 && mouseX < width - 10 &&
                mouseY > height / 2 - paletteHeight / 2 && mouseY < height / 2 + paletteHeight / 2) {
            hueValue = map(mouseY, height / 2 - paletteHeight / 2, height / 2 + paletteHeight / 2, 0, 255);
        }
        if (mouseX > width / 2 - paletteWidth / 2 && mouseX < width / 2 + paletteWidth / 2 &&
                mouseY > height / 2 - paletteHeight / 2 && mouseY < height / 2 + paletteHeight / 2) {
            selectedColor = get(mouseX, mouseY);
            colorCallback(hue(selectedColor), saturation(selectedColor), brightness(selectedColor));
        }
    }
}

int[] HSBtoRGB(float h, float s, float b) {
    colorMode(HSB, 255);
    color rgbColor = color(h, s, b);
    colorMode(RGB, 255); // 切回 RGB 模式，以便读取 RGB 值

    int r = int(red(rgbColor));
    int g = int(green(rgbColor));
    int blue = int(blue(rgbColor));
    colorMode(HSB, 255);
    return new int[]{r, g, blue};
}


void colorCallback(float h, float s, float b) {
    //println("Selected Color HSB: " + h + ", " + s + ", " + b);
    int[] rgb = HSBtoRGB(h, s, b);
    println("Selected Color RGB: " + rgb[0] + ", " + rgb[1] + ", " + rgb[2]);
    sendRGBCommand(rgb[0], rgb[1], rgb[2]);
}
```

With the command, the ESP32 need to parse the command and control the LED light, as the following code.

```cpp
void serialInputLoop() {
    if (Serial.available() > 0) {
        String input = Serial.readStringUntil('\n'); // 读取串行输入
        if (input.startsWith("rgb")) {
            int firstSpace = input.indexOf(' ', 3); // 找到"rgb"后的第一个空格
            int secondSpace = input.indexOf(' ', firstSpace + 1); // 找到下一个空格
            int thirdSpace = input.indexOf(' ', secondSpace + 1); // 找到下一个空格
            // 提取RGB值
            int red = input.substring(firstSpace + 1, secondSpace).toInt();
            int green = input.substring(secondSpace + 1, thirdSpace).toInt();

            int blue = input.substring(thirdSpace + 1).toInt();

            Serial.print("red: ");
            Serial.print(red);
            Serial.print(", green: ");
            Serial.print(green);
            Serial.print(", blue: ");
            Serial.println(blue);

            // 使用RGB值
            setRGB(red, green, blue);
        }
    }
}

void loop() {
    serialInputLoop();
    iotLoop();
}
```

#### Run

We first burn the program to the ESP32, and then run the Processing program.

![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401031036463.png)

### Demonstration

Here is a demonstration of the basic effects and interactive feedback.

<div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }}>
    <ReactPlayer width="70%" controls url="https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401031041473.mp4" />
</div>
