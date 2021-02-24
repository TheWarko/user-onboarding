import { render } from '@testing-library/react';
import Step1 from '../components/Step1'


test('input should be a number', () => {

    // const {getByLabelText} = render(<Step1 />)
    // fireEvent.change(getByLabelText('phone'), { target: { value: '123' } })
    const {findByRole} = render(<Step1 />)
    // fireEvent.change(getByRole('textbox',{name:'phone'}), { target: { value: '123' } })
    // fireEvent.change(getByLabelText('phone'), { target: { value: 'lorem' } })
    expect(findByRole('textbox',{name:'phone'})).toBe('123') //only numbers

})