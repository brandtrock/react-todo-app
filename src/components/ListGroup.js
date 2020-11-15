import React, { Component } from 'react';

class ListGroup extends Component {
  render() {
    return(
      <ul className="list-group row">
        {this.props.items.map((item) => (
          <li className="list-group-item col-md-8" key={item.key}>
            <span className="item-checkbox">
              <input type="checkbox" onClick={() => this.props.itemCheckbox(item.key)} />
            </span>
            <span className={ item.isComplete ? "list-item complete" : "list-item"}>{item.value}</span>
            <span
              onClick={() => this.props.removeItem(item.key)}
              className="badge remove-item"
            >{"X"}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;