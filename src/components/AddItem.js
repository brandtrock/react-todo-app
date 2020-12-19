import React, { Component } from "react";

const ADD_TEXT = "Add";
const ADD_ITEM_TEXT = "Add item . . .";

class AddItem extends Component {
  render() {
    return (
      <form onSubmit={this.props.addItem}>
        <div className="input-group col-md-8" style={{ marginLeft: "15%" }}>
          <input
            className="form-control"
            type="text"
            placeholder={ADD_ITEM_TEXT}
            value={this.props.currentItem.value}
            onChange={this.props.handleInput}
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">
              {ADD_TEXT}
            </button>
          </span>
        </div>
      </form>
    );
  }
}

export default AddItem;
