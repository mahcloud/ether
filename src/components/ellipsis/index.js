import React from "react";

class Ellipsis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dots: ""
    };

    this._interval = setInterval(() => this.updateDots(), 500);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  updateDots() {
    this.setState({
      dots: (this.state.dots.length >= 3) ? "" : this.state.dots + "."
    });
  }

  render() {
    return(
      <span className="ellipsis">
        {this.props.children}{this.state.dots}
      </span>
    );
  }
}

Ellipsis.defaultProps = {
  children: "Loading"
};

export default Ellipsis;
