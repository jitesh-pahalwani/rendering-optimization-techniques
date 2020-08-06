# rendering-optimization-techniques
This repository aims to demonstrate the several ways to optimise the UI rendering on screen.

The first problem demonstrated here is that of Forced Synchronous Layout (or Layout Thrashing).

When the size of the boxes are changed using the first text input, the sizes increase in an unoptimized way. The Performance Timeline screenshot below shows the FSL caused during the update.

![Forced Synchronous Layout Performance Timeline Screenshot](./readme_images/FSL_Screenshot.png?raw=true "Forced Synchronous Layout Performance Timeline Screenshot")

On contrary, when the sizes are changed using the second text input, the sizes increase in an otimized manner, solving the FSL problem. The Performance Timeline shows how fast the rendering becomes.

![Forced Synchronous Layout Solution Performance Timeline Screenshot](./readme_images/FSL_Solution_Screenshot.png?raw=true "Forced Synchronous Layout Solution Performance Timeline Screenshot")