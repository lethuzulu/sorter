import React, { Component } from "react";
import "./Toolbar.css";

import { connect } from "react-redux";

import { setArray } from "../../redux/reducers/array/array";
import { setAlgorithm } from "../../redux/reducers/algorithm/algorithm";
import { setCurrentSorted } from "../../redux/reducers/sorted/sorted";

import { setRunning } from "../../redux/reducers/running/running";

import bubbleSort from "../../algorithms/bubbleSort";
import quickSort from "../../algorithms/quickSort";
import heapSort from "../../algorithms/heapSort";
import mergeSort from "../../algorithms/mergeSort";

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { generateArray } = this.props;

    generateArray(100);
    document.getElementById("changeSize").value = 30;
  }

  handleClick(algorithm) {
    const { updateAlgorithm } = this.props;

    updateAlgorithm(algorithm);
  }

  handleChange(evt) {
    const { generateArray } = this.props;

    generateArray(Math.floor((parseInt(evt.target.value) + 3) * 1.65));
  }

  render() {
    const { array, algorithm, generateArray, sort, isRunning } = this.props;

    const speed =
      570 - Math.pow(array.length, 2) > 0 ? 570 - Math.pow(array.length, 2) : 0;

    const color = isRunning ? "rgba(214, 29, 29, 0.8)" : "white";

    const cursor = isRunning ? "auto" : "pointer";

    return (
      <div id="toolbar">
        <div
          id={!isRunning ? "generateArray" : "generateArrayX"}
          style={{ color: color, cursor: cursor }}
          onClick={!isRunning ? () => generateArray(array.length) : null}
        >
          Generate New Array
        </div>
        <div className="separator"></div>
        <div id="arraySize" style={{ color: color }}>
          Change Array Size & Sorting Speed
        </div>
        <input
          id="changeSize"
          type="range"
          min="0"
          max="60"
          style={{ background: color, cursor: cursor }}
          disabled={isRunning ? "disabled" : null}
          onChange={this.handleChange}
        />
        <div className="separator"></div>
        <div
          className={
            algorithm === "mergeSort"
              ? "currentAlgorithmButton"
              : "algorithmButton"
          }
          onClick={() => this.handleClick("mergeSort")}
        >
          Merge Sort
        </div>
        <div
          className={
            algorithm === "quickSort"
              ? "currentAlgorithmButton"
              : "algorithmButton"
          }
          onClick={() => this.handleClick("quickSort")}
        >
          Quick Sort
        </div>
        <div
          className={
            algorithm === "heapSort"
              ? "currentAlgorithmButton"
              : "algorithmButton"
          }
          onClick={() => this.handleClick("heapSort")}
        >
          Heap Sort
        </div>
        <div
          className={
            algorithm === "bubbleSort"
              ? "currentAlgorithmButton"
              : "algorithmButton"
          }
          onClick={() => this.handleClick("bubbleSort")}
        >
          Bubble Sort
        </div>
        <div className="separator"></div>
        {algorithm ? (
          <div
            id="sort"
            style={{ color: color, cursor: cursor }}
            onClick={!isRunning ? () => sort(algorithm, array, speed) : null}
          >
            Sort!
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ array, algorithm, isRunning }) => ({
  array,
  algorithm,
  isRunning,
});

const mapDispatchToProps = () => (dispatch) => ({
  generateArray: (length) => {
    let array = [];
    while (array.length < length) {
      array.push(Math.floor(Math.random() * 500) + 10);
    }
    dispatch(setArray(array));
    dispatch(setCurrentSorted([]));
  },

  updateAlgorithm: (algorithm) => {
    dispatch(setAlgorithm(algorithm));
  },

  sort: (algorithm, array, speed) => {
    let doSort =
      algorithm === "bubbleSort"
        ? bubbleSort
        : algorithm === "quickSort"
        ? quickSort
        : algorithm === "heapSort"
        ? heapSort
        : algorithm === "mergeSort"
        ? mergeSort
        : null;
    dispatch(setCurrentSorted([]));
    dispatch(setRunning(true));
    doSort(array, dispatch, speed);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
