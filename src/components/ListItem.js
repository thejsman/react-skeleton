let React = require('react');
var createReactClass = require('create-react-class');



let ListItem = createReactClass({
  render: function() {
    return (
      <li>
        <h4>{this.props.ingredients}</h4>
      </li>
    )
  }
});

module.exports = ListItem;