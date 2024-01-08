import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('Not found page', () => {
  test('Not found', () => {
    render(<NotFound />);
    const homeElement = screen.getByText('The page you are looking for not found!');
    expect(homeElement).toBeInTheDocument();
  });
});

// "cy:run": "npx cypress run --e2e && npx nyc report && npx nyc report --reporter=text-summary",
// "cy:open": "cypress open --e2e --browser chrome",
// "cy": "npx nyc instrument --compact=false src instrumented",
// "cy:comp": "cypress run component",
