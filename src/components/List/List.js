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

  }

  render() {
    return(
      <div className="list">
        <h1>My Todo App</h1>
        <form>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Add item . . ." />
          </div>
        </form>
        <ul className="list-group">
          {this.state.items.map((item) => (
            <li className="list-group-item">
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }

}