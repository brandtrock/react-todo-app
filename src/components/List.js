import React from 'react';
import Header from './Header';
import AddItem from './AddItem';
import ListGroup from './ListGroup';
import './List.css';

export default class List extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        { key: 0, value: 'First Item', isComplete: false },
        { key: 1, value: 'Second Item', isComplete: false },
        { key: 2, value: 'Third Item', isComplete: false }
      ],
      currentItem: {
        key: '',
        name: '',
        isComplete: false
      }
    };
    this.handleInput = this.handleInput.bind(this); // ADD ITEM: THIS HAPPENS FIRST
    this.addItem = this.addItem.bind(this); // ADD ITEM: THIS HAPPENS SECOND
    this.removeItem = this.removeItem.bind(this);
    this.itemCheckbox = this.itemCheckbox.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        key: Date.now(),
        value: e.target.value
      }
    });
  }

  addItem(e) {
    e.preventDefault();

    const newItem = this.state.currentItem;
    console.log('newItem: ', newItem);
    if (newItem.value !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          key: '',
          value: '',
          isComplete: false
        }
      });
    }
  }

  removeItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }

  itemCheckbox(key) {
    const tempItems = [...this.state.items]; // make a shallow copy of the items
    const tempItem = {...tempItems[key]}; // make a shallow copy of the item to mutate
    tempItem.isComplete = !tempItem.isComplete; // mutate the property
    tempItems[key] = tempItem; // put the item back into the array
    this.setState({
      items: tempItems
    }); // Set state with the new copy
  }

  render() {
    return(
      <div className="list">
        <Header />
        <AddItem
          addItem={this.addItem}
          currentItem={this.state.currentItem}
          handleInput={this.handleInput}
        />
        <ListGroup
          items={this.state.items}
          itemCheckbox={this.itemCheckbox}
          removeItem={this.removeItem}
        />
      </div>
    );
  }

}