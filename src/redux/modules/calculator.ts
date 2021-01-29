import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';

/**
 * type definitions
 */
export type Operator = '+' | '-' | '*' | '/';

type Calculator = {
  accumulator: number;
  currentValue: number;
  operator?: Operator;
  isResultShown: boolean;
};

/**
 * actions
 */
const actionCreator = actionCreatorFactory();

export const push = actionCreator<number>('PUSH_NUMBER');
export const calculate = actionCreator<Operator>('CALCULATE');
export const showResult = actionCreator('SHOW_RESULT');
export const eliminateLastDigit = actionCreator('ELIMINATE_LAST_DIGIT');
export const clearCurrentValue = actionCreator('CLEAR_CURRENT_VALUE');
export const allClear = actionCreator('ALL_CLEAR');

/**
 * initial state
 */
const INITIAL_STATE: Calculator = {
  accumulator: 0,
  currentValue: 0,
  isResultShown: false,
};

const getCalculationResult = (state: Calculator) => {
  let result = state.currentValue;
  switch (state.operator) {
    case '+':
      result = state.accumulator + state.currentValue;
      break;
    case '-':
      result = state.accumulator - state.currentValue;
      break;
    case '*':
      result = state.accumulator * state.currentValue;
      break;
    case '/':
      if (state.currentValue === 0) {
        result = 0;
        break;
      }
      result = state.accumulator / state.currentValue;
      break;
    default:
      break;
  }
  return result;
};

/**
 * reducer
 */
const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(push, (state, payload) => {
    const value = state.currentValue.toString() + payload.toString();
    return {
      ...state,
      currentValue: parseInt(value, 10),
      isResultShown: false,
    };
  })
  .case(calculate, (state, payload) => {
    if (!state.operator) {
      return {
        ...state,
        accumulator: state.currentValue,
        currentValue: 0,
        operator: payload,
        isResultShown: true,
      };
    }
    return {
      ...state,
      currentValue: 0,
      accumulator: getCalculationResult(state),
      operator: payload,
      isResultShown: true,
    };
  })
  .case(showResult, (state) => {
    if (!state.operator) {
      return {
        ...state,
        accumulator: state.currentValue,
        currentValue: 0,
        isResultShown: true,
      };
    }
    return {
      ...state,
      currentValue: 0,
      accumulator: getCalculationResult(state),
      isResultShown: true,
    };
  })
  .case(eliminateLastDigit, (state) => {
    const stringValue = state.currentValue.toString();
    const newStringValue = stringValue.slice(0, stringValue.length - 1);
    return {
      ...state,
      currentValue: parseInt(newStringValue, 10) || 0,
    };
  })
  .case(clearCurrentValue, (state) => ({
    ...state,
    currentValue: 0,
    isResultShown: false,
  }))
  .case(allClear, () => ({ ...INITIAL_STATE }));

export default reducer;

/**
 * selectors
 */
export const selectDisplayedValue = createSelector(
  [
    (state: RootState) => state.ui.calculator.currentValue,
    (state: RootState) => state.ui.calculator.accumulator,
    (state: RootState) => state.ui.calculator.isResultShown,
  ],
  (currentValue, accumulator, isResultShown) => (isResultShown ? accumulator : currentValue),
);
