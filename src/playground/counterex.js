console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Atib',
  age: 26,
  location: 'Philadelphia'
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  renderCountApp();
  console.log('addOne', count);
  
}
const minusOne = () => {
  count--;
  renderCountApp();
  console.log('minusOne', count);
}
const reset = () => {
  count=0;
  renderCountApp();
  console.log('resetClick');
}

const appRoot = document.getElementById('app');


const renderCountApp = () => {
    const templateThree = (
      <div>
        <h1> Count : {count} </h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
    
    );
  ReactDOM.render(templateThree, appRoot);
}

renderCountApp();


