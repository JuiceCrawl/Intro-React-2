var React = require('react');
var ReactDom = require('react-dom');
//var Nav = require('./components/Nav');
//var Header = require('./components/Header');

var App = React.createClass({

  render: function(){
    return(
      <div>THIS IS THE REACT APP</div>
      );
  }

});

ReactDOM.render(<App />, document.GetElementByID('app'));