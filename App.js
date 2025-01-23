console.log ("hello from react ");
//creating tag using js 
// let root=document.getElementById("root");
// const heading=document.createElement("h1");
// heading.innerHTML="hello world from java script";
// root.appendChild(heading);

/**  que: create a structure like: 
 * <div id=parent > 
 * <div id=child 1>
 * <h1> this is heading in 1st inner div tag <h1>
 * <div>
 * <div id= child 2>
 * <h1> this is heading in 2nd inner div tag<h1>
 * <div>
 * <div> 
 */
//answer:
const root=ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement('div',
    { id:"parent"},
    [ React.createElement("div",
        {id:"child1"},
        [React.createElement("h1",{},"this is 1st heading in 2nd div tag"),
        React.createElement("h2",{},"this is 2nd heading in 2nd div tag")] 
    ),
    React.createElement("div",
        {id:"child2"},
        [React.createElement("h1",{},"this is 1st heading in 2nd div tag"),
        React.createElement("h2",{},"this is 2nd heading in 2nd div tag")]     
    )
    ]);
setTimeout( ()=>{root.render(parent)},5000) ;

