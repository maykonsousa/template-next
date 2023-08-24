import { render } from '@testing-library/react';
import { HomePage } from './homePage';

const createComponent = () => render(<HomePage />);

describe('HomePage', () => {
  it('should render', () => {
    const { container } = createComponent();
    expect(container).toBeDefined();
  });
});
