# Build a React info site
For this lesson, we are going to build a simple static info webpage.

## Topics

### Writing our first line in React
1. Set up:
    * via CDN (easy way to set up React, not for production):
        <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> <!-- pulling in React library, gives you access to a global variable 'ReactDOM' -->

    * pull in Babel:
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

        add to <body>:
            <script src="index.js" type="text/babel"></script>


2. Write your first line in index.js
<!-- (WHAT you want to render, WHERE you want to render it) -->
```javascript
ReactDOM.createRoot(document.getElementById("root")).render(<h1>My first line in React!</h1>)

// alternative way to write this (as in documentation)
const root = ReactDOM.createRoot(document.getElementById("root")) // create root first
root.render(<h1>My first line in React!</h1>) 
```

### Now write a multi-element line
```javascript
ReactDOM.createRoot(document.getElementById("root")).render(
    <ul><li>List item 1</li><li>List item 2</li></ul>
)
```

### Why we care about React
#### It's composable!
React allows us to write composible code.

An analogy for 'composible' would mean like sculpting a lego statue - the lego blocks work together with the goal of creating something.

### Create your own custom React component
```javascript
function MainContent() { 
    return ( // return content you want to show on page
        <h1>I created my first React component!</h1>  
    )
}

ReactDOM.createRoot(document.getElementById("root")).render( // render component
    <div>
        <MainContent />
    </div>,
)
```

#### It's declarative!
* Declarative - can tell pc what to do & it'll figure out what to do. React allows us to do this. As you can see this is the easier way to write code.
```javascript
ReactDOM.createRoot(document.getElementById("root")).render(<h1 className="header">"This is an declarative way to program</h1>)
```

* for comparison, opposite is Imperative - describing every step on how to do something the pc
    ```javascript
    const h1 = document.createElement("h1") // create element
    h1.textContent = "This is an imperative way to program" // insert text content
    h1.className = "header" // give it a class name 
    document.getElementByID("root").append(h1) // append it as a child of div #root
    ```

* Declarative example: "Make me a peanut butter sandwich"
* Imperative example: "To make a peanut butter sandwich, first get the bread and a knife, then..."

### JSX
React with JSX creates JS objects
Example 1 logging it to the console
```javascript
const element = <h1 className="header">This is JSX</h1>
console.log(element)
/* console:
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX" 
    }, 
    _owner: null, 
    _store: {}
}
```
Example 2 logging it to the webpage
```javascript
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

console.log(page)

ReactDOM.createRoot(document.getElementById("root")).render(
    page
)
```

JSX Challenge: 
Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
```javascript
const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.createRoot(document.getElementById("root")).render(navbar)
```

### (side note) How to deploy your project to the web using Netlify so that you can share them with others
1. Make an account at Netlify.com - create account and scroll down to set up and continue
2. Drag your whole folder into app.netlify.com/drop
3. Netlify will automatically create URL for your site so that anyone can view it if they have the link

### Important note to remember about JSX
```js
document.getElementById("root").append(JSON.stringify(page))
```
* Remember JSX returns plain JS objects.
    Console:
    {"type":"div","key":null,"ref":null,"props":{"children":[{"type":"h1","key":null,"ref":null,"props":{"children":"My awesome website in React"},"_owner":null,"_store":{}},

* You have to render it for React to take these js objects and turn them into real DOM elements that the browser can recognize like this:
    Webpage displays:
    "My awesome website in React"

### Challenge: Starting from scratch, build and render the HTML for our section project.
```js
const page = ( // side note: this isn't the usual convention which we will cover in an upcoming lesson
    <div>
        <img src="./react-logo.png" width="40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.createRoot(document.getElementById("root")).render(page)
```

### Quiz time!
1. Why do we need to `import React from "react"` in our files?
- Because the JSX syntax is defined in React. So in order to use JSX we need to import React.

2. If I were to console.log(page) in index.js, what would show up?
- Because it's JSX, it will show a JS object with properties. These are React elements that describe what React should eventually add to the real DOM for us.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
- The JSX code has 2 sibling elements (h1 and p). We need our JSX to be nested under a single parent element (such as div).


4. What does it mean for something to be "declarative" instead of "imperative"?
- Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.
- Writing code declaratively is a much better developer experience and leads to much cleaner code and less bugs.

5. What does it mean for something to be "composable"?\
- General definition: We have small pieces that we can put together to make something
larger/greater than the individual pieces.
- In web development, it means taking pieces of my user interface (UI) and put them into their own components and piece those components together to build my page 

### Creating your own custom components
```js
// Create a function that returns react elements and render it
function TemporaryName() { // For function names, use Pascal case instead of camelCase
    return (
        <div>
            <img src="./react-logo.png" width="40px" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<TemporaryName />) // Instead of calling function with (), wrap function in angle brackets similar to an HTML element </>
```

#### Practice this:
```javascript
function MyPage() {
    return (
        <div> // because there's more than one tag you need to put it in a div
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" /> // don't forget this is how you close the img tag
                </nav>
            </header>
            <h1>Why I'm excited to learn React!</h1>
            <ol>
                <li>It's the most downloaded framework via npm, therefore it's very popular</li>
                <li>It's a good skill to have for employability</li>
                <li>It's going to make my developer experience easier</li>
            </ol>
            <footer>© 20xx Mul development. All rights reserved.</footer>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<MyPage />)
```

#### Custom Components Quiz
1. What is a React component?
- A function that returns React elements (UI). React elements are the objects that get created when we return JSX (looks like html). The component can be used over an over by rending the element again '<element />'.

2. What's wrong with this code?
```js
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
- The function name should be written in PascalCase so that it's 'MyComponent.'

3. What's wrong with this code?
```js
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(Header())
```
- Instead of calling the function by adding (), with function components in React you should surround it with angle brackets '<Header />'. This is how you call / create an instance of your component.

### Parent/Child Components
Within a function, you can only return a single element that acts as the parent element (e.g., 1 <div></div> which contains everything). That element may have children elements.
```js
/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() { // Page is the parents component
    return (
        <div> 
            <Header /> // These are the children components
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))

```

### Styling with Classes
To add styling to the HTML, use classes
```js

function Header() {
    return (
        <header>
            <nav className="nav"> {/* added class name */}
                <img src="./react-logo.png" className="nav-logo" /> {/* added class name */}
                <ul className="nav-items"> {/* added class name */}
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
```

```css
.nav {
    display: flex;
    justify-content: space-between; /* to push 'pricing, about, contact' items to far right */
    align-items: center; /* logo was stretched so this fixed the aspect ratio */
}

.nav-logo {
    width: 60px;
}

.nav-items {
    list-style: none; /* removed bullet points */
    display: flex; /* put items in a row instead of one under another */
}

.nav-items > li { /* directly targeted element */
    padding: 10px; /* added space in between items */
}
```

### Organize components
To organize the code, you should put the functions in their own files.

For example you would have files such as:
* Header.js
* MainContent.js
* Footer.js

Then you would also have a file that compiles all these together
* App.js OR Page.js
This is where you'll put the 'function Page()' as well as all the imports of header, main content, footer etc. So that you can use their tags <>. A common convention is to call this file App.

He suggests using Pascal Case for React file names just like you would for React function names.

```js Header.js

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

// can alternatively just put the export here instead of as part of the function
// export default Header
```

```js index.js
// add the file to the index.js under you React imports
import Header from "./Header"
```

### Run React locally with Vite
First you need to install:
- node (type 'node -v' in terminal to check if you have it/the version you have)
- npm (type 'npm -v' in terminal to check if you have it/the version you have)

1. Install from here:
https://nodejs.org/en

2. Open Command prompt to check it installed correctly (simple installation):
It should display version information:
    C:\Users\Kirsten College>node -v
    v18.16.1

    C:\Users\Kirsten College>npm -v
    9.5.1

3. Now we're ready to use Vite

4. Open terminal & type: npm create vite@latest
Source: https://vitejs.dev/guide/
It will use Vite to ask a couple questions about your project:
    * Project name:
    * Select a Framework: React
    * Select a variant: React (without typescript)

5. Once it's done it will give you instructions to type in
- just 3 lines to type
    cd vite-project
    npm install
    npm run dev
Now it will install all packages with React app and get things up and running.

6. If you click 'http://localhost....' in a browser you will see the default app pop up. 

INSTALLED! You'll see a default project folder 'vite-project' (or whatever you named it) with some boilerplate code for that default app. Use this as the folder you work in.

To open the webpage again you won't use 'go live'. Instead you must open the terminal and run 'npm run dev'.

### Let's Build Our Project!

#### Quick Mental Outline of Project
With React, having a mental outline of the structure of the code is very helpful.

For our project we will have:
```js
<div.container>
    <nav>
        <img />
        <h3></h3>
        <h4></h4>
    </nav>
    <main>
        <h1></h1>
        <ul>
            <li></li> (x5)
        </ul>
    </main>
</div.container>
```

#### Project Setup
Challenge: Project setup

- Create a `components` folder
- Create the following components in separate files inside
  the components folder.  In each one, just render an `h1` 
  with the name of the component (e.g. return <h1>Navbar goes here</h1>):
    - Navbar
    - Main
- Create an App component outside the components folder (sibling to
  the index.js file)
    - Have App render the Navbar and Main components
- Import and render the App component inside of index.js using ReactDOM
    - At this point you should have your "Navbar goes here" etc. showing up
      in the mini-browser.
- Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
  Put the links to those fonts ABOVE the style.css link in index.html (Use
  the `<link/>` elements instead of the @import or npm options for getting
  the fonts. You may need to do some extra research to figure out how this 
  works if you haven't done it before)


### Figma walkthrough 
Figma is useful for developers as it can be used to:
- find an elements fonts, size, color etc.
- find out the spacing between elements
- copy and paste the css
- export individual elements (icons)

To hide other users comments and cursors, click the far top right icon (the number) to do this. Uncheck 'comments' and 'multiplayer cursors'.



