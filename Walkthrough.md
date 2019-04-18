# induction demo of A-Frame

## Part 1 - Setting up
    - Create HTML file
    - Include Reference to A-Frame

| step | snippet | description |
|:---:| --- | --- |
| 1 | | Add a new file "index.html" to the project |
| 2 |html:5 | Create the basic html file |
| 3 |demo-aframe:src | Add the script reference to the Head section |

## Part 2 - Create a Scene
    - Add A-Scene element
    - Add A-Box + A-Sphere with
        - position
        - color
    - Add A-Sky

| step | snippet | description |
|:---:| --- | --- |
| 1 |  | Add a _a-scene_ to the body|
| 2 |  | Add _a-box_ to scene |
| 3 |  | set color to _red_ |
| 4 |  | set position to _1 0 -5_ |
| 5 |  | Add _a-sphere_ to the scene |
| 6 |  | set position to _-1 0 -5_ |
| 7 |  | set color to _33FF88_ |
| 8 |  | Add _a-sky_ to the scene |
| 9 |  | set color to _55bbff_ |

## Part 3 - Textures
    - Add texture asset to the scene
    - Add texture to the box

| step | snippet | description |
|:---:| --- | --- |
| 1 | demo-aframe:assets | Add the assets block to the top to the scene |
| 2 | | Add _src="#crate-texture"_ and remove color |

## Part 4 - Inspector
    - Show inspector

| step |  description |
|:---:| --- |
| 1 |  Hit crtl-shift-alt + I |
| 2 | Have a look around |

## Part 5 - Create a Component
    - Add Cursor
    - Create component to change color of the sphere on click
| step | snippet | description |
|:---:| --- | --- |
| 1 | | Add a _a-camera_ to the scene at position _0 1.6 0_ |
| 2 | demo-aframe:cursor | Add cursor to the camera |
| 3 | | create _component.js_ |
| 4 | demo-aframe:component | add basic component |
| 5 | demo-aframe:click-component | replace with an example component |
| 6 | | add the component to the sphere _s-click="color:violet"_ |

## notes

- To start the project run from a command prompt
    - npm install
    - npm start
- Browse to http://localhost:1234 to view



