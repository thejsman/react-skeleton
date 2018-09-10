let React = require('react');
let ListItem = require('./ListItem');
var createReactClass = require('create-react-class');

let ingredients = [
  { "id": 1, "text": "Chicken" },
  { "id": 2, "text": "Rice" },
  { "id": 3, "text": "Butter" }
];
let List = createReactClass({
  render: function() {
    let listItems  =ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} />
    })
    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;