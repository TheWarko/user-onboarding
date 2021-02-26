import { render,fireEvent } from '@testing-library/react';
import PriceInput from '../components/Priceinput'


describe('Price input', () => {

    test('price should has special format', () => {
        const fromChanged = (event) => {
            fireEvent.change(getByPlaceholderText('$0,00'), { target: { value: event.target.value } })
        }
        const {getByPlaceholderText} = render(<PriceInput value={1000} onChange={fromChanged} />
        )
        // fireEvent.focus(getByPlaceholderText('$0,00'))
        // fireEvent.change(getByPlaceholderText('$0,00'), { target: { value: '1000' } })
        // fireEvent.blur(getByPlaceholderText('$0,00'))
        expect(getByPlaceholderText('$0,00').value).toBe('$1,000.00') //permits numbers
    })

})