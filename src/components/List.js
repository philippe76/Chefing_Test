import React, { Component } from "react";

class List extends Component {
  state = {};
  // render props data in displayed list
  render() {
    return (
      <div className="list">
        <div className="kind">
          <h2 className="list_title">{this.props.newlist.kind}</h2>
          <ul>
            {this.props.newlist.list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
