---
title: CAD
---

# CAD

import ReactPlayer from "react-player"

## 1 Build design project

#### 1.1 Create a new folder

* Create a new folder in the root directory and right-click the folder to rename it
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/1-1.png)
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/1-5.png)
* Create a new design and save it in the new fold
  ![Fig 3](https://cdn.littleor.cn/assert/design-engineering/1-2.png)
  ![Fig 4](https://cdn.littleor.cn/assert/design-engineering/1-3.png)
  ![Fig 5](https://cdn.littleor.cn/assert/design-engineering/1-4.png)

## 2 Design the first 3D model

> The content of this section is the core of CAD drawing, and the division of labor of members is also included here.
> Section 2.2.5 reflects some detailed steps of model drawing.

#### 2.1 A transmission model

* The motor outputs rotational power, which is converted into translational motion by means of a drive wheel and
  connecting rod.
* The horizontal connecting rod moves up and down to open and close the blade.
* The whole model is composed of five parts: **base**,**slide rod**, **transmission wheel**, **tool holder**, **tool
  head**.
* The specific model components and division of labor are shown in the figure below, and different parts have been
  distinguished by color.
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/2-8.png)
  link: [Fig 10](https://a360.co/3Mzg0XT)

#### 2.2 Model drawing procedure

###### 2.2.1 Base(Lv Ke)

1. Determine the base size and stretch out the base thickness.
2. Pull out the fixed frame of the slide rod in the appropriate position.
3. Calculate the height of the fixed slide rod and dig out the hole.
4. Select the right position to fix the cutter head and dig out the hole.

###### 2.2.2 Slide rod(Yao Jiayi)

1. Stretch out the structure to fit the drive wheel
2. Determine the overall length of the slide bar according to the position of the tool head
3. Stretch out the structure to fit the cutter head
4. Round the corners for the joints and edges

###### 2.2.3 Tool holder(Zhang Dengming)

1. Determine the height of the tool head and stretch out the rough shape
2. Open the slot for placing the tool head
3. Drill holes corresponding to the holes on the base to secure the tool head

###### 2.2.4 Tool head(You Jiaxiang)

1. Draw the tool head shape
2. Determine the slot position and size of the tool head
3. Stretch out the entity
4. Dig a hole in the corresponding position to secure the tool head
5. Symmetry out the other side of the blade
6. Create a slot in the position where the blade is installed
7. Draw the blade cross section and stretch out the blade

###### 2.2.5 Transmission wheel(Gao Ao)

1. Determine the drive wheel diameter and stretch out the overall shape
   ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/2-2.png)
2. Determine the position of the main shaft and eccentric shaft
   ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/2-3.png)
   ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/2-4.png)
3. Hollow structure design to reduce weight
   ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/2-5.png)
   ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/2-6.png)
4. Round the corners
   ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/2-7.png)

#### 2.3 Assemble and establish connections

###### 2.3.1 Create connections

1. Connect the base and slide rod. Select the cylindrical surface of the slide rod and the cylindrical hole wall on the
   base, and use the sliding connection.(Detailed steps are shown here)
   ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/2-10.png)
   ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/2-11.png)
2. Use rigid motion to connect the tool holder and base.
   ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/2-12.png)
3. Use rotary motion to connect the transmission wheel to the base.
   ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/2-13.png)
4. Use rotary motion to connect the tool head to the tool holder.
   ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/2-14.png)
5. Use rigid motion to connect blades, tool heads, screws, pins, etc.
   ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/2-15.png)

###### 2.3.2 Tangent relation

1. Connect the tool head and the slide rod
   ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/2-17.png)
2. Connect the transmission wheel and slide rod
   ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/2-16.png)

* Use the tangent relation to handle the need for two surfaces to be tangent and allow for sliding. In other cases, the
  tangent relationship is miscalculated when the drag structure is moving (for example, the shaft falls out of the gap).
  Ours mechanical structure also has such problems, especially between the slide rod and the transmission wheel. The
  method adopted is to establish the tangent relationship between the two faces of the cylinder and the slot, and this
  method is only applicable to the case of the same diameter of the cylinder and the width of the slot. However, when
  the second tangent relationship is established, it will still be suggested that it may be contradictory with other
  tangent relationships, which is ignored in the current method.

#### 2.4 Complete demonstration of  modeling and assembly steps

<div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }}>
    <ReactPlayer width="720px" height="480px"  controls url="https://cdn.littleor.cn/assert/design-engineering/making%20steps%20video.mp4" />
</div>


## 3 Simple parameter design practice

#### The practice of parametric design in dimensional design

* Parametric design is a design method that relies on parameters and rules to create and adjust designs. In parametric
  design, design elements and features are defined as parameters, while design rules and constraints are defined as
  rules. These parameters and rules can be interrelated and adjusted to generate various design concepts or variations.
* Here we use parametric design idea to draw sketches.
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/3-1.png)
* In the sketch, the distance from the short side of the rectangle to the center axis is 1/2 of the long side to ensure
  that the rectangle is centered.
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/3-2.png)
* Set the chamfer side length to 1/4 of the short side.
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/3-3.png)
* The final results are presented here.
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/3-4.png)

## 4 Test contact set/motion link and show GIF

#### Contact test

* The details of assembling and setting up connections are presented in section 2.3, this section only shows the final
  transmission effect
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/Transmission_test.gif)

## 5 Try one plug-ins and used in the design

#### 5.1 Download and install **Custom Screw Creator**

* Search the website for the plugin name you need
* Click the appropriate plugin
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/5-1.png)
* Click Download in the plugin details to find out how to use it
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/5-2.png)
* Run the downloaded .msi package file
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/5-6.png)
* Click "Install"
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/5-5.png)

#### 5.2 Use **Custom Screw Creator** to generate screws

* In the Insert field of fusion 360, you can click the plug-in icon to use it
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/5-3.png)
* Select the appropriate parameters and click OK
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/5-4.png)

#### 5.3 Modified screws feature

* Custom Screw Creator is very useful for generating screws, but the adjustable generation parameters are still limited
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/5-7.png)
* You can modify the automatically generated part steps to control more details, such as materialized thread effects
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/5-8.png)

## 6 Engineering Drawing for **Transmission Wheel**

#### 6.1 Create drawings from design

* Create engineering drawings from designs
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/6-1.png)
* Change the reference content
* Choose the parts to be drawn
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/6-2.png)

#### 6.2 Place the desired view from each Angle

* Select the appropriate viewing Angle as the base view (main view)
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/6-3.png)
* Create a projection from the main view to present other views of the part
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/6-4.png)
* General parts engineering drawing using three views. In order to present the structure clearly, and considering that
  the body of the part is cylindrical, a rotating cutting view is used to present the structure. Create a cutting view
  from the base view and select the cutting plane
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/6-5.png)

#### 6.3 Dimensioning and technical requirements

* Distribute appropriate locations for dimensioning
* Note technical requirements according to part requirements
  ![Fig 1](https://cdn.littleor.cn/assert/design-engineering/6-6.png)

## 7 Simple introduce another CAD software or experience

#### Autodesk Inventor

Inventor is a 3D visualization entity simulation software Autodesk Inventor Professional (AIP) launched by the American
AutoDesk company, and the latest version AIP2020 has been released.

Autodesk Inventor Professional includes Autodesk Inventor 3D design software; AutoCAD Mechanical, a 2D mechanical
drawing and detailed drawing software developed based on the AutoCAD platform; and professional functional modules for
cable and harness design, pipeline design, and PCB IDF file input. It also adds FEA function supported by ANSYS
technology, which can directly perform stress analysis in Autodesk Inventor software. On this basis, the integrated data
management software Autodesk Vault is used to securely manage design data in progress.

Autodesk Inventor is a comprehensive design tool that can be used to create and validate complete digital prototypes,
helping manufacturers reduce physical prototype investment.

Here are the pros and cons of Inventor:

**Pros:**

1.The Inventor software interface is user-friendly and easy to understand the software operation logic through the
interactive interface.
2.Inventor comes with a large number of standard parts libraries.
3.The modeling logic of Inventor is relatively intuitive.
4.Inventor’s top-down design scheme can conveniently adjust the size and assembly relationship between a large number of
parts from a sketch.
5.Inventor comes with commonly used transmission design solvers.
6.Inventor’s structural component generator is very useful.
7.Inventor’s motion simulation function can basically solve 99% of the kinematics problems encountered in your daily
work.
8.Inventor has a dedicated pipeline design module that allows you to easily design complex piping systems.
9.Inventor’s engineering drawing conforms to GB.

**Cons:**

1.Inventor is more suitable for designs based on standard geometric shapes, but it is more difficult to handle
curves/surfaces.
2.Inventor is slightly more complex in terms of cooperation.
3.Inventor’s motion simulation is difficult to get started with, and there are too many things to define.
4.The operation logic of Inventor’s pipeline designer is a bit rigid.
5.Inventor cannot automatically recognize parameters such as cylinders.
