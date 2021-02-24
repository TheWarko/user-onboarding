import { render, cleanup } from '@testing-library/react';
import App from '../App'
import Headbar from '../components/Headbar'
import StepContext from '../contexts/StepContext'



describe('Step should be 1', () => {

    test('Step should be 1 - first mode', () => {
        const { getByTestId } = render(<App><Headbar /></App>); 
        expect(getByTestId('stepOf')).toHaveTextContent('STEP 1 OF 3')
    });
    

    test('Step should be 1 - second mode - loading Context', () => {
        const { getByTestId } = renderWithContext(<Headbar />)
        expect(getByTestId('stepOf')).toHaveTextContent('STEP 1 OF 3')
    })
    const renderWithContext = (
        component) => {
        return {
          ...render(
              <App value={StepContext}>
                  {component}
              </App>)
        }
    }

}) 
