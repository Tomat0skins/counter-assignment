import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const message = screen.getByText(/Counter/i);
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const value = screen.getByText(/0/i);
  expect(value).toBeInTheDocument();
});

test('clicking + increments the count', async () => {
  const user = userEvent.setup();

  await user.click(screen.getByText('+'));
  const value = screen.getByText(/1/i);
  expect(value).toBeInTheDocument();
});
test('clicking - decrements the count', async () => {
  const user = userEvent.setup();
  
  await user.click(screen.getByText('-'));
  const value = screen.getByText(/-1/i);
  expect(value).toBeInTheDocument();
});
