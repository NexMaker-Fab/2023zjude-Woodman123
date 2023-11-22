---
title: CNC
---

# CNC(Computer Numerical Control)

**Computer numerical control (CNC)** is a technology that utilizes computer-controlled numerical instructions to drive
machine tools for machining operations. It is widely used in industrial manufacturing to achieve high accuracy,
efficiency and flexibility in machining processes. In this chapter, the principles, applications, advantages, and use
cases of CNC technology in different industries will be introduced in
detail.
> 参考文献: 
> * [https://techtarget.com/searcherp/definition/computer-numerical-control-CNC](https://techtarget.com/searcherp/definition/computer-numerical-control-CNC)
> * [https://en.wikipedia.org/wiki/Numerical_control](https://en.wikipedia.org/wiki/Numerical_control) 

## I.Principles and basic concepts of CNC technology

### 1.Define

CNC technology is a technology that realizes automated machining by controlling the movement and operation of machine
tools through computers. Its development can be traced back to the 1940s, and with the advancement of computer
technology, CNC technology has been widely used and developed.

### 2.Composition and working principle of CNC system

**CNC system** is composed of program, input and output devices, computer numerical control device (CNC device),
programmable logic controller (PLC), spindle drive and servo drive and other components. The computer is responsible for
receiving, parsing and processing the machining program, the controller converts the instructions into electrical
signals and sends them to the drive, which controls the movement and operation of the machine
tool.<br />![截屏2023-11-21 21.35.10.png](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/%E6%88%AA%E5%B1%8F2023-11-21%2021.35.10.png)

### 3.Schematic diagram of CNC machine

A CNC machine tool usually consists of a bed (bed frame), a spindle, a table, a tool magazine, and a control console.
The bed supports the entire structure of the machine, the spindle rotates the tools, the table holds the workpiece, the
tool magazine holds the tools, and the console is used to set up and operate the CNC
system.<br />![截屏2023-11-22 09.40.52.png](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/%E6%88%AA%E5%B1%8F2023-11-22%2009.40.52.png)

### 4.CNC Programming and Instruction Systems

**CNC programming** is the process of translating a machining process into instructions that the machine can understand.
Common CNC programming languages include G-code and M-code, with G-code defining the trajectory and machining method and
M-code defining the auxiliary functions and operations of the machine.<br />**G-code** is an instruction language
commonly used in CNC programming to define the trajectory and machining method of the machine tool. The following is a
simple G-code example:<br />Some standard CNC G codes are:

- G：Provide start and stop commands to the tool
- N：Provides the line number
- F：Provides the feed speed
- X, Y, and Z: provide Cartesian coordinates for the position
- S：Provides the spindle speed
- T：indicates the type of tool to be used
- R：provides the radius of the circle for the cutting tool

Each command can have a further sub-command. For example, some positioning commands are:

- G00：Reach the specified position quickly
- G01：Linear motion to a specified position
- G02：Create a clockwise arc of the specified radius
- G03：Creates a counterclockwise arc of the specified radius

![截屏2023-11-21 21.44.49.png](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/202311221026557.png)<br />
**M-code**, which is typically used to control auxiliary functions and additional operations of a machine tool that do
not involve direct machining motion. Below are some examples of common M-codes:<br />Here are some examples of commonly
used M-codes:

- M00：Pause in the middle of program execution
- M01：Optional pause in program execution
- M02：End of program
- M08：Starts coolant flow
- M09：Stop coolant flow

### 5.Machining Processes

CNC Milling, CNC Turning, CNC Machining, CNC Electrical Discharge Machining (EDM), CNC Laser Cutting, CNC Water Jet
Cutting, CNC Punching, CNC Plasma Cutting, CNC Welding, 3D Printing

#### 3D Printing

3DThe 3D printing process is used to manufacture polymer parts.CNC machining controls a nozzle that melts the polymer
filament and molds it into the desired design. Ease of handling and scalable sizes make CNC 3D printing possible in
small shops and large-scale manufacturing processes. 3D printing is only available for thermoplastics.

### 6.CNC Software

There are two main types of CNC machine software:

#### Computer Aided Design (CAD)

Computer-aided design (CAD) software has the capability to design the final product. The design can be done in both 2D
and 3D formats. 2D shapes are designed using vector-based drawings. 3D shapes are designed using solid and surface
modeling. Some common features are:

- The ability to add cable routing to a design.
- Automatic generation of generic design elements
- Evaluation of the quality characteristics of the final part
- Visualization

#### Computer-aided Manufacturing (CAM)

Computer-aided manufacturing (CAM) software programs allow control of CNC machines without the need for manual labor.
The language of these programs matches the embedded language of the CNC software. Modern CAM software programs include
additional features such as collecting feedback data from the CNC tool. This data can identify problems and help
increase productivity.

#### Computer Aided Engineering (CAE)

CAE software programs are not as common as CAM and CAD software. However, CAE is essential for complex engineered
products, and CAE software helps evaluate the mechanical properties of parts. Manufacturers can use CAE to visualize
thermal properties, strength, stress, and physical characteristics.

### 7.Type of Machine and Range of Application

CNC technology is applicable to a wide range of machine tool types, including milling machines, lathes, drilling
machines, grinding machines, and more. Different types of machine tools allow for different kinds of machining
operations to meet the needs of different industries and applications. Below are some detailed examples of common
machine tool types and their applicability to CNC technology:

#### CNC Milling Machine

CNC Milling Machines are used to perform flat milling, contour milling, holemaking, etc. CNC technology allows CNC
Milling Machines to be programmed to control the precise movement of the tool in multiple axes and machining. For
example, CNC milling machines can easily machine complex three-dimensional curved parts, engraved details, slotting,
etc. through CNC technology.

#### CNC Turning Machine

数控车床适用于加工旋转对称的工件，例如轴类零件、螺纹零件等。CNC技术使得数控车床能够控制刀具在工件上进行精确的切削操作。通过CNC技术，数控车床可以实现自动化的车削过程，包括外圆车削、内圆车削、螺纹加工等。

#### CNC Drilling Machine

CNC Drilling Machine is suitable for hole machining operations, including single hole, multiple holes, deep holes, etc.
CNC technology enables CNC Drilling Machine to accurately control the feed and position of the tool, realizing efficient
and precise drilling operations. With CNC technology, CNC drilling machines can automate the drilling sequence while
controlling machining parameters such as feed rate, coolant usage, etc.

#### CNC Grinding Machine

CNC Grinding Machines are suitable for high precision grinding operations such as surface grinding, cylindrical
grinding, internal and external cylindrical grinding, etc. CNC technology enables CNC Grinding Machines to control the
position, speed and feed of the grinding wheels to realize high precision grinding operations. CNC technology enables
CNC grinding machines to automate the grinding process while realizing grinding tasks for complex shapes.

#### CNC Turning-Milling Center

CNC Turning-Milling Centers combine the functions of a lathe with those of a milling machine and are suitable for the
comprehensive machining of complex parts, and CNC technology enables CNC Turning-Milling Centers to realize a wide range
of machining operations, such as turning, milling, and drilling, on the same machine. Through CNC technology, CNC
turning and milling machine tools can automate the processing of multiple processes to improve productivity and
machining accuracy.

## II. Application areas of CNC technology

![image.png](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/202311221026076.png)

### 1.Applications in the Manufacturing Field

- CNC technology is widely used in the manufacturing industry, including automobile manufacturing, aerospace, electronic
  equipment, medical devices and other industries. It can realize the machining of complex parts, high-precision
  machining and mass production, and improve production efficiency and product quality.

### 2.Applications in Art and Creative Fields

- CNC technology is also used in artistic and creative fields, such as engraving, three-dimensional printing, and mold
  making. It provides more design freedom and creative possibilities for complex artwork and personalized product
  production.

### 3.Applications in Education and Research

- CNC technology is widely used in education and research fields for developing students' creative and practical skills.
  It can be used for research and experiments in fields such as mechanical engineering, materials science, and computer
  science.

### 4.Applications in Other Fields

- CNC technology is also used in the fields of stage lighting, stage machinery, furniture manufacturing, and modeling.
  It enables precise, customized and complex machining needs to meet the demands of different industries and fields.

## III. Advantages of CNC technology

- **High efficiency and productivity: **CNC technology can realize automated machining process, reducing the need for
  manual operation. Due to the fast calculation and response ability of computer, CNC system can realize high-speed
  movement and machining, which improves productivity and machining speed.
- **High accuracy and repeatability: **CNC technology enables highly accurate machining operations through a digitized
  control system. Machine movements and operations are controlled by precise numerical commands, eliminating the
  influence of human factors and thus improving machining accuracy and repeatability.
- **Flexibility and programmability: **CNC systems can be programmed to meet different machining needs, enabling
  flexible machining operations. By modifying the machining program and parameters, different machining tasks can be
  quickly switched and adapted to meet diversified production needs.
- **Complex shapes and multi-axis machining: **CNC technology can realize the machining of complex shapes, including
  curves, contours, concave and convex surfaces. Through multi-axis control, simultaneous machining in different
  directions is possible, realizing the machining of complex parts and the improvement of machining efficiency.
- **Monitoring and quality control:** The CNC system can monitor the machining process in real time and make adjustments
  and controls through sensors and feedback mechanisms. This helps to improve the stability and consistency of machining
  and ensures that product quality is controlled and meets specifications.

## IV. Future development of CNC technology

- **Intelligence and automation:** With the development of artificial intelligence and machine learning, CNC technology
  will become more intelligent and automated. Machines can optimize the machining process through learning and adaptive
  algorithms, and achieve autonomous decision-making and optimization to improve productivity and quality.
- **Networking and remote monitoring:** CNC systems will be integrated with the Internet and data communication
  technologies to enable networking and remote monitoring between machines. Manufacturers will be able to monitor
  equipment status, troubleshoot and maintain in real time through remote monitoring and diagnostics, improving
  equipment utilization and productivity.
- **3D printing and additive manufacturing: **The combination of CNC technology with 3D printing and additive
  manufacturing technology will further expand the possibilities of manufacturing. By combining traditional cutting and
  emerging additive manufacturing technologies, more complex and high-performance parts can be manufactured.
- **Environmentally friendly and sustainable development: **The development of CNC technology will also focus on
  environmentally friendly and sustainable development. By optimizing the machining process and material utilization,
  waste and energy consumption will be reduced to achieve efficient use of resources and environmental sustainability.



