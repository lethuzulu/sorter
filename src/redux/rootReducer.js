import { combineReducers } from "redux";
import { array } from "./reducers/array/array";
import { algorithm } from "./reducers/algorithm/algorithm";
import { currentBubbleTwo } from "./reducers/bubblesort/bubbleSort";
import { currentQuickTwo, pivot } from "./reducers/quicksort/quickSort";
import { currentSwappers } from "./reducers/swappers/swappers";
import { currentHeapThree } from "./reducers/heapsort/heapSort";
import { currentSorted } from "./reducers/sorted/sorted";
import { currentMergeX } from "./reducers/mergesort/mergeSort";
import { isRunning } from "./reducers/running/running";

export default combineReducers({
  array,
  algorithm,
  currentBubbleTwo,
  currentQuickTwo,
  pivot,
  currentSwappers,
  currentHeapThree,
  currentSorted,
  currentMergeX,
  isRunning,
});
