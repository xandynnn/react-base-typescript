import { IExampleComponentProps } from './ExampleComponent.types';

export const ExampleComponent = ({ children }: IExampleComponentProps) => {
  return <h1>{children}</h1>;
};
