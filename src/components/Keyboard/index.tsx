import React from 'react';
import { useDispatch } from 'react-redux';
import {
  push,
  Operator,
  calculate,
  showResult,
  eliminateLastDigit,
  clearCurrentValue,
  allClear,
} from '../../redux/modules/calculator';
import { NumericKey } from '../NumericKey';
import { OperationalKey } from '../OperationalKey';
import styles from './index.module.scss';

export const Keyboard: React.VFC = () => {
  const dispatch = useDispatch();

  const handlePushNumber = (value: number) => {
    dispatch(push(value));
  };

  const handleCalculate = (operator: Operator) => {
    dispatch(calculate(operator));
  };

  const handleShowResult = () => {
    dispatch(showResult());
  };

  const handleEliminateLastDigit = () => {
    dispatch(eliminateLastDigit());
  };

  const handleClearCurrentValue = () => {
    dispatch(clearCurrentValue());
  };

  const handleAllClear = () => {
    dispatch(allClear());
  };

  return (
    <div className={styles.root}>
      <OperationalKey label="AC" argument={null} method={handleAllClear} />
      <OperationalKey label="C" argument={null} method={handleClearCurrentValue} />
      <OperationalKey label="▶︎" argument={null} method={handleEliminateLastDigit} />
      <OperationalKey label="÷" argument="/" method={handleCalculate} />
      <NumericKey label={7} method={handlePushNumber} />
      <NumericKey label={8} method={handlePushNumber} />
      <NumericKey label={9} method={handlePushNumber} />
      <OperationalKey label="x" argument="*" method={handleCalculate} />
      <NumericKey label={4} method={handlePushNumber} />
      <NumericKey label={5} method={handlePushNumber} />
      <NumericKey label={6} method={handlePushNumber} />
      <OperationalKey label="-" argument="-" method={handleCalculate} />
      <NumericKey label={1} method={handlePushNumber} />
      <NumericKey label={2} method={handlePushNumber} />
      <NumericKey label={3} method={handlePushNumber} />
      <OperationalKey class="long" label="+" argument="+" method={handleCalculate} />
      <NumericKey label={0} method={handlePushNumber} />
      <OperationalKey label="." argument={null} method={console.log} disabled />
      <OperationalKey label="=" argument={null} method={handleShowResult} />
    </div>
  );
};
