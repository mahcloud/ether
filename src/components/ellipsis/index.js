import React from "react";

class LoadingEllipsis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this._interval = setInterval(() => this.updateDots(), 500);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  updateDots() {
    let count = (this.state.count >= 3) ? 0 : this.state.count + 1;
    this.setState({count: count});
  }

  render() {
    let dots = "";
    for(let i = 0; i < this.state.count; i++) {
      dots += ".";
    }

    return(
      <span className="loading-ellipsis">
        {this.props.children || "Loading"}
        <span className="dots">{dots}</span>
      </span>
    );
  }
}

export default LoadingEllipsis;
