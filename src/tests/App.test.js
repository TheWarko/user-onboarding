import { render, cleanup } from '@testing-library/react';
import App from '../App';


afterEach(cleanup)
 
xtest('take a snapshot', () => {
    const { asFragment } = render(<App />)
    expect(asFragment(<App />)).toMatchSnapshot()
})
