import { render } from '@testing-library/react';

import { describe, expect, test } from 'vitest';
import { ExampleComponent } from '.';

describe('Example Component Test', () => {
  test('Should be able to see the initial text on screen', () => {
    const title = 'Exemplo';
    const { getByText } = render(<ExampleComponent>{title}</ExampleComponent>);
    const text = getByText(title);
    expect(text).toBeInTheDocument();
  });
});
