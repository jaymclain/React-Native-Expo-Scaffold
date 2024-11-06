import { render, screen } from '@testing-library/react-native';
import App from '../App';

test('renders App component', () => {
    render(<App />);
    const textElement = screen.getByText('Open up App.js to start working on your app!');
    expect(textElement).toBeTruthy();
});