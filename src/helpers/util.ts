import { Children, ReactNode, ComponentType } from 'react';

const isEmptyChildren = (children: ReactNode) => Children.count(children) === 0;

const isFunction = <T extends Function>(value: any): value is T =>
  typeof value === 'function';

const getComponentName = (component: ComponentType<any>) =>
  component.displayName || (component as any).name;

const getHocComponentName = (hocName: string, component: ComponentType<any>) =>
  `${hocName}(${getComponentName(component)})`;

export default {
  isEmptyChildren,
  isFunction,
  getComponentName,
  getHocComponentName,
};
