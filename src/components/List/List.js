import React from 'react';

export default class List extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        { key: 0, value: 'First Item' },
        { key: 1, value: 'Second Item' },
        { key: 2, value: 'Third Item' }
      ],
      currentItem: {
        key: '',
        name: ''
      }
    };
    this.handleInput = this.handleInput.bind(this); // ADD ITEM: THIS HAPPENS FIRST
    this.addItem = this.addItem.bind(this); // ADD ITEM: THIS HAPPENS SECOND
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
          value: ''
        }
      });
    }
  }

  render() {
    return(
      <div className="list">
        <h1>My Todo App</h1>
        <form onSubmit={this.addItem}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Add item . . ."
              value={this.state.currentItem.value}
              onChange={this.handleInput}
            />
          </div>
        </form>
        <ul className="list-group">
          {this.state.items.map((item) => (
            <li className="list-group-item" key={item.key}>
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }

}