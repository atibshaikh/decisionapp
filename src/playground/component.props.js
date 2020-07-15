class IndecisionApp extends React.Component{
    render(){
  
      const title = 'Indceision';
      const subtitle = 'Puts your life in the hand of an computer';
      const options = ['Option 1','Option 2','Option 3' , 'Other Option'];
      
        return(
          <div>
  
          <Header title={title} subtitle = {subtitle}/>
          <Action />
          <Options options = {options}/>
          <AddOption />
  
          </div>
  
        );
    }
  }
  
  
  class Header extends React.Component {
    
    render(){
  
      //console.log(this.props);
  
      return (
        <div>
          <h1>{ this.props.title }</h1>
          <h2> {this.props.subtitle} </h2>
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
          
          { this.props.options.map( (option) => <Option key = {option} optionText = {option} /> ) }
          {/* <Option /> */}
  
        </div>
  
      );
    }
  }
  
  class Option extends React.Component{
     render(){
       return(
        <div>
          Option : {this.props.optionText}
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