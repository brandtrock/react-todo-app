import React from 'react';
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
    // TODO: Finish getting this to work, maybe just use React Hooks?
    const tempItems = [...this.state.items]; // make a shallow copy of the items
    const tempItem = {...tempItems[key]}; // make a shallow copy of the item to mutate

    tempItem.isComplete = true; // mutate the property
    tempItems[key] = tempItem; // put the item back into the array

    this.setState({
      items: tempItems
    }); // Set state with the new copy
    console.log('state 2: ', this.state);
  }

  render() {
    return(
      <div className="list">
        <h1>My Todo App</h1>
        <form onSubmit={this.addItem}>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Add item . . ."
              value={this.state.currentItem.value}
              onChange={this.handleInput}
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">Add</button>
            </span>
          </div>
        </form>
        <ul className="list-group row">
          {this.state.items.map((item) => (
            <li className="list-group-item col-md-8" key={item.key}>
              <span className="item-checkbox">
                <input type="checkbox" onClick={() => this.itemCheckbox(item.key)} />
              </span>
              <span className="list-item">{item.value}</span>
              <span
                onClick={() => this.removeItem(item.key)}
                className="badge remove-item"
              >{"X"}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

}