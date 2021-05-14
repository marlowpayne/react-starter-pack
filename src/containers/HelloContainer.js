import React from "react";
import Visual from "../visuals/Hello";

export default class Hello extends React.Component {
  state = {
    name: "World",
    newName: "",
  };

  updateName = () => {
    if (this.state.newName !== "") {
      this.setState({
        name: this.state.newName,
      });
    }
  };

  changeNewName = (e) => {
    this.setState({
      newName: e.target.value,
    });
  };

  render() {
    const { name } = this.state;
    return (
      <>
        <Visual {...{ name }} />
        <input type="text" placeholder="New name" onChange={this.changeNewName} />
        <button onClick={this.updateName}>Update Name</button>
      </>
    );
  }
}
