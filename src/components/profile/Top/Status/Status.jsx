import React from "react";

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  editModeToggle(toggle) {
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
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, this.props);
    console.log(this.props);
    if (prevProps.status !== this.props.status)
      this.setState({ status: this.props.status });
  }

  onStatusUpdate = (e) => {
    this.setState({
      status: e.target.value
    });
  };
  render() {
    if (this.state.editMode)
      return (
        <input
          onChange={(e) => this.onStatusUpdate(e)}
          autoFocus={true}
          onBlur={() => this.editModeToggle(false)}
          type='text'
          value={this.state.status}
        />
      );
    return (
      <span onDoubleClick={(e) => this.editModeToggle(true)}>
        {this.props.status}
      </span>
    );
  }
}

export default Status;
