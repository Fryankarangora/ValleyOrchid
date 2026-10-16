// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ValleyOrchid title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ValleyOrchid/i);
    expect(titleElement).toBeInTheDocument();
});
