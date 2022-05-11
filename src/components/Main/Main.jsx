import "./Main.css";
import Body from "../Body/Body";
import Toolbar from "../Toolbar/Toolbar";
import { connect } from "react-redux";

import { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Main">
        <Toolbar />
        <Body />
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = () => (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
