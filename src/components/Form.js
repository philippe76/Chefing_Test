import React, { Component } from "react";
import List from "./List";

class Form extends Component {
  state = {
    kind: "",
    product: "",
    list: [],
  };

  // functions to add data from select and input to Form state
  handleChange = (e) => {
    this.setState({
      kind: e.target.value,
    });
  };

  handleChange2 = (e) => {
    this.setState({
      product: e.target.value,
    });
  };

  addProduct = (e) => {
    e.preventDefault();
    const toBuy_List = this.state.list;
    toBuy_List.push(this.state.product);
    this.setState({
      list: toBuy_List,
    });
    document.querySelector("input").value = "";
  };

  render() {
    return (
      <>
        <form>
          <label>What list do you want to write?</label>
          <select name="kind" id="kind-select" onChange={this.handleChange}>
            <option value="fruits">fruits</option>
            <option value="vegetables">vegetables</option>
            <option value="cereals">cereals</option>
            <option value="other">other</option>
          </select>
          <label>What do you need to buy?</label>
          <input
            type="text"
            placeholder="- - - - - - - - - - - - - - -"
            onChange={this.handleChange2}
          />
          <button type="submit" onClick={this.addProduct}>
            Add
          </button>
        </form>
        {/* add state infos to child component */}
        {/* do not display if list array is empty */}
        {/* {this.state.list[0] ? <List newlist={this.state} /> : null} */}
        {this.state.list[0] && <List newlist={this.state} />}
      </>
    );
  }
}

export default Form;
