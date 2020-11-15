import React from 'react';

export default class AddItem extends React.Component {

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