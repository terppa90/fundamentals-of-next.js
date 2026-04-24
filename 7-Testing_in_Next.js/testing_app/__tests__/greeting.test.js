import { render, screen } from '@testing-library/react';
import Greeting from '@/app/components/Greeting';

test('renders greeting with name', () => {
  render(<Greeting name="Next.js" />);
  expect(screen.getByText('Hello, Next.js!')).toBeInTheDocument();
});