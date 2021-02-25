import { render,fireEvent } from '@testing-library/react';
import App from '../App'
import Step1 from '../components/Step1'
import StepContext from '../contexts/StepContext'


const renderWithContext = (
    component) => {
    return {
    ...render(
        <App value={StepContext}>
            {component}
        </App>)
    }
}

describe('Phone input', () => {

    test('phone should be a number', () => {
        const {getByTestId} = renderWithContext(<Step1 />)
        fireEvent.change(getByTestId('phone'), { target: { value: '123' } })
        expect(getByTestId('phone').value).toBe('123') //permits numbers
        fireEvent.change(getByTestId('phone'), { target: { value: '' } })
        fireEvent.change(getByTestId('phone'), { target: { value: 'ABCabc!?' } })
        expect(getByTestId('phone').value).toBe('') //not permits chars
    })

})

describe('Name input', () => {
    test('name shoud be only chars', () => {
        const {getByTestId} = renderWithContext(<Step1 />)
        fireEvent.change(getByTestId('fullname'), { target: { value: 'ABC def' } })
        expect(getByTestId('fullname').value).toBe('ABC def') //permits chars
        fireEvent.change(getByTestId('fullname'), { target: { value: '' } })
        fireEvent.change(getByTestId('fullname'), { target: { value: '123!?' } })
        expect(getByTestId('fullname').value).toBe('') //not permits numbers and special chars
    })

})