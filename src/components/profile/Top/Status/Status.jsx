import React from "react";

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  editModeToggle = toggle => {
    // debugger;
    if (toggle)
      this.setState({
        editMode: true
      });
    else {
      this.setState({
        editMode: false
      });
      this.props.setMyStatus(this.state.status);
    }
  };

  onStatusUpdate = e => {
    this.setState({
      status: e.target.value
    });
  };
  render() {
    if (this.state.editMode)
      return (
        <input
          onChange={this.onStatusUpdate}
          autoFocus={true}
          onBlur={() => this.editModeToggle(false)}
          type='text'
          value={this.state.status}
        />
      );
    return (
      <span onDoubleClick={() => this.editModeToggle(true)}>
        {this.props.status}{" "}
      </span>
    );
  }
}

export default Status;
