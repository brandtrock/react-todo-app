import React, { Component } from 'react';
import Header from './Header';
import AddItem from './AddItem';
import ListGroup from './ListGroup';
import './List.css';

class List extends Component {

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
        value: '',
        isComplete: false
      }
    };
    this.handleInput = this.handleInput.bind(this); // ADD ITEM: THIS HAPPENS FIRST
    this.addItem = this.addItem.bind(this); // ADD ITEM: THIS HAPPENS SECOND
    this.removeItem = this.removeItem.bind(this);
    this.itemCheckbox = this.itemCheckbox.bind(this);
  }

  handleInput(e) {
    if (e.target.value !== '') {
      this.setState({
        currentItem: {
          key: Date.now(),
          value: e.target.value
        }
      });
    }
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.value !== '') {
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
    // Find the element in the array of objects
    const itemsIndex = this.state.items.findIndex(item => item.key === key);
    // Create a copy of the state arry
    let tempItemsArray = [...this.state.items];
    // Update the one value
    tempItemsArray[itemsIndex] = {
      ...tempItemsArray[itemsIndex],
      isComplete: !tempItemsArray[itemsIndex].isComplete
    };
    // Set State
    this.setState({
      items: tempItemsArray
    });
  }

  render() {
    return(
      <div className='list'>
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

export default List;