
declare namespace Payload {
  export interface Todo {
    id: number;
    title: string;
    completed: false;
  }
}

declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

declare type Constructor<T = {}> = new (...args: any[]) => T;

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}
