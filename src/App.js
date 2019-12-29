import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

/* React: Basics */
function ListItem(props) {
    return (
      <li onClick={props.onClick}>
        {props.item}
      </li>
    );
  }
  
  class ShoppingList extends React.Component {
    constructor() {
      super();
      this.state = {
        list: ['unicycle', 'juggling clubs', 'stilts']
      };
    }

    addItem() {
      var item = document.getElementById("listItem").value;
      document.getElementById("listItem").value = "";
      var newList = this.state.list.slice();
      newList.push(item);
      this.setState({list: newList});
    }  
    
    enterPressed(event) {
      var code = event.keyCode || event.which;
      if(code === 13) { //13 is the enter keycode
        var item = document.getElementById("listItem").value;
        document.getElementById("listItem").value = "";
        var newList = this.state.list.slice();
        newList.push(item);
        this.setState({list: newList});
      } 
  }
    
    onClick(index) {
      var newList = this.state.list.slice();
      newList.splice(index, 1);
      this.setState({list: newList});
    }
    
    render() {
      var listItems = [];
      this.state.list.forEach((item, i) => {
        listItems.push(<ListItem item={item} onClick={() => this.onClick(i)} />)
      });
      return (
        <div className="shopping-list">
          <h1>Shopping List</h1>
           <input 
              type="text"
              id="listItem" 
              placeholder="Add item"
              onKeyPress={this.enterPressed.bind(this)}
          />
          <button className='btn'type="button" onClick={() => this.addItem()}>Add</button>
          <ul className='listItems'>
            {listItems}
          </ul>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <ShoppingList />,
    document.getElementById('root')
  );

export default ShoppingList;
