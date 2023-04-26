DEV NOTES:

- I had a hard time dwitching over to vanilla Javascript, and an issue with using Sass because of how new I am to it. The important thing is to keep going and be resilient and to be hungry for a solution, and know that there is one that is aquirable.

As I am still very new to SASS, I am still learning and this is proving to teach me a lot about using it. Here are my notes on the matter:

- Using BEM style helps.

- Use one media query at the bottom of the origional curly braces.

- Dont nest more than three levels. Utilize BEM by adding a class name and selecting the element that way.

- Maps are a lot to type out each time, so instead of using maps for variables that are accessed frequently (such as colors), use a regular variable, but name it in a way that it is easy to remember and access them all together. Like "$color-primary" or "$color-red".

- For mobile-first development, start around the smallest viewport, I choose 280px, which is the galaxy fold folded. A very small phone.

- Inspiration can come from anywhere :)

- Get smooth scrolling to work by setting it to the html selector like html{scroll-behavior:smooth}

- Again. Google is your best friend. To prevent an element that is covering another element from preventing pointer events for an element beneath it, use pointer-events:none on the covering element.

Credits:
- I used ezgif.com to create the gif and https://deviceshots.com/ to get the mockups. This site exports the svg's with lots of white space at the top :( so I used negative margin-top to negate it (thanks stack overflow user!!)

- Illustration from blush.design

- Created the favicon with canva, cropped to a 16 x 16 image using [imageresizeonline](https://www.imageresizeonline.com/convert-image-to-16x16-pixels.php) and then converted to a .ico file using [convertio](https://convertio.co/jpeg-ico/)

Accomplishments:
- Researched in order to ensure that my software conplied with different standards.

REMEMBER:
- To compile SASS `sass --watch src\sass\index.scss src\index.css`

Before posting:
- replace resume with updated one
- 