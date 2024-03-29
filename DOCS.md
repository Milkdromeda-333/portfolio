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

- I had an issue with my svg's. They were pretty big, so I tried to upload them to cloudinary, but one of them were too big to upload, so I tried for two days to find a solution. It was 13MB and after running it through many svg optimizers, and attempting to convert it to gif, I figured it was as optimized as it would get, or something. I finally came upon the idea to change the contents of the svg, and it worked! Also, Firefox would not load my svgs for a while, so I turned them into pngs for firefox. 

Credits:
- I used ezgif.com to create the gif and https://deviceshots.com/ to get the mockups. This site exports the svg's with lots of white space at the top :( so I used negative margin-top to negate it (thanks stack overflow user!!)

- Illustration from blush.design

- Created the favicon with canva, cropped to a 16 x 16 image using [imageresizeonline](https://www.imageresizeonline.com/convert-image-to-16x16-pixels.php) and then converted to a .ico file using [convertio](https://convertio.co/jpeg-ico/)

Accomplishments:
- Researched in order to ensure that my software conplied with different standards.
- 

Repeated scripts:
- To compile SASS `sass --watch src\sass\index.scss src\index.css`

How to deploy:
- run `npm run build`
- run `npm run preview` and check the build to make sure everything looks right
- head to [netlify site deploys page](https://app.netlify.com/sites/anjanique-mackey/overview) and drop build folder into the file uploader
- check new deployed site!