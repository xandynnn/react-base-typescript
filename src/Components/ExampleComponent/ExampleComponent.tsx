import { StyledParagraph } from './ExampleComponent.styles';
import { IExampleComponentProps } from './ExampleComponent.types';
import { Box } from '@mui/material';

export const ExampleComponent = ({
  children,
  componentName,
}: IExampleComponentProps) => {
  return (
    <div>
      <Box>{children}</Box>
      {componentName && <p>Nome do componente: {componentName}</p>}
      <StyledParagraph variant="body2">StyledParagraph</StyledParagraph>
    </div>
  );
};
