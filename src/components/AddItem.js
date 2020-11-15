import React, { Component } from 'react';

class AddItem extends Component {

  render() {
    return(
      <form onSubmit={this.props.addItem}>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Add item . . ."
            value={this.props.currentItem.value}
            onChange={this.props.handleInput}
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Add</button>
          </span>
        </div>
      </form>
    );
  }
}

export default AddItem;