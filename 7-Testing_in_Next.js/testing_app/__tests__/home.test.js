import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

test('renders homepage', () => {
  render(<Home />);
  
  const heading = screen.getByText(/welcome to next.js course/i);

  expect(heading).toBeInTheDocument();
});