class IndecisionApp extends React.Component{
    render(){
        return(
          <div>
  
        <Header />
        <Action />
        <Options />
        <AddOption />
  
          </div>
  
        );
    }
  }
  
  
  class Header extends React.Component {
    
    render(){
      return (
        <div>
          <h1>Indecision</h1>
          <h2>Puts your life in of an computer</h2>
        </div>
  
      );
    }
  
  }
  
  class Action extends React.Component{
  
    render(){
      return (
  
        <div>
          <button>What Should I do?</button>
        </div>
  
      );
    }
  }
  
  class Options extends React.Component{
    render(){
      return (
        <div>
          Options goes here
          <Option />
        </div>
  
      );
    }
  }
  
  class Option extends React.Component{
     render(){
       return(
        <div>
          <li>Test option</li>
          <li>Test option 2</li>
          <li>Test option 3</li>
        </div>
       );
     }
  }
  
   class AddOption extends React.Component{
     render(){
  
      return(
        <div>AddOption Component here</div>
      );
     }
   }
  
  const jsx = (
    <div>
      <Header />
      <Action />
      <Options />
      <AddOption />
    </div>
  );
  
  
  ReactDOM.render(<IndecisionApp />,document.getElementById('app'));