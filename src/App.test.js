import { render, screen } from '@testing-library/react';
import SignIn from './Pages/SignIn/SignIn';
import { BrowserRouter} from 'react-router-dom';

test('header render with react testing', async () => {
  render(<BrowserRouter><SignIn/></BrowserRouter>);
  const linkElement = screen.getByText(/Use Your Fundoo Account/i);
  expect(linkElement).toBeInTheDocument();
});
