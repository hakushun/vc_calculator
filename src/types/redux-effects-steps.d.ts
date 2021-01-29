/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
declare module 'redux-effects-steps' {
  import { Middleware } from 'redux';
  import { AnyAction } from 'typescript-fsa';

  interface ActionCreator<A = any> {
    (args: A): AnyAction;
  }

  type SuccessOrFailure<Succ = any, Err = any> = [ActionCreator<Succ>, ActionCreator<Err>];

  type PromisableFunction<A = any> = (args: A) => Promise<any>;

  export declare const EFFECT_STEPS: 'EFFECT_STEPS';

  type StepItem =
    | SuccessOrFailure
    | PromisableFunction
    | ActionCreator
    | Array<Promise<any> | PromisableFunction>
    | AnyAction;

  export declare type StepAction<A = AnyAction> = {
    type: typeof EFFECT_STEPS;
    payload: A;
    meta: {
      steps: Array<StepItem>;
    };
  };

  export declare function steps<R = any>(
    ...args: [AnyAction | Array<Promise<any> | PromisableFunction>, ...Array<StepItem>]
  ): StepAction;

  export default function <S = any>(store: MiddlewareAPI<any>): ReturnType<Middleware>;
}
