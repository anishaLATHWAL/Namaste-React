/**
 * 
 *  <div id="parent">
 *      <div id="child">
 *          <h1> I am H1 tag <h1>
 *          <h2> I am H1 tag <h1> // siblings => create array of the third argument inside squared brackets
 *      </div>
 *      <div id="child">
 *          <h1> I am H1 tag <h1>
 *          <h2> I am H1 tag <h1> // siblings => create array of the third argument inside squared brackets
 *      </div>
 *  </div>  
 */

 const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", null, "I am H1 tag"), React.createElement("h2", null, "I am H2 tag")]
    ),
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", null, "I am H1 tag"), React.createElement("h2", null, "I am H2 tag")]
    )
]
);

// const heading = React.createElement("h1", {id : "heading"}, "Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent); // heading is actually a Javascript object here....React element

root.render(parent); // render method is actually converting object to heading tag

