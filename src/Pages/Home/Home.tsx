import { ExampleComponent } from '../../Components/ExampleComponent';

export const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <ExampleComponent componentName="Exemplo">
        <h1>Exemplo de componente</h1>
      </ExampleComponent>
    </div>
  );
};
