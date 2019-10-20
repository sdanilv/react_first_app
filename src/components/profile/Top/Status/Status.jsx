import React from 'react';

class Status extends React.Component {
  state = {
    editMode: false
  }

  editModeToggle = (toggle) => {
    // debugger;
    this.setState({
      editMode: toggle
    })
  }
  render() {
    if (this.state.editMode)
      return (<input
        autoFocus={true}
        onBlur={() => this.editModeToggle(false)}
        type="text"
        value={this.props.status} />)
    return (<span onDoubleClick={() => this.editModeToggle(true)}>{this.props.status} </span>)
  }
}

export default Status