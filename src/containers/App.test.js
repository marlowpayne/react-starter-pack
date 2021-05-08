import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello World! text', () => {
  render(<App />);
  const helloWorldText = screen.getByText(/Hello World!/i);
  expect(helloWorldText).toBeInTheDocument();
});
