import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../App'
import Headbar from '../components/Headbar'
import Navbar from '../components/Navbar'
import Arrowlink from '../components/Arrowlink'


describe('Step events', () => {
    
    test('Step should increment',() => {
        const { getByTestId } = render(<App><Headbar /><Navbar /></App>)
        fireEvent.click( getByTestId('nextStep') )
        expect( getByTestId('stepOf') ).toHaveTextContent('STEP 2 OF 3')
    })
    
    test('Step should decrement',() => {
        const { getByTestId } = render(<App><Headbar /><Navbar><Arrowlink /></Navbar></App>)
        fireEvent.click( getByTestId('nextStep') )
        fireEvent.click( getByTestId('prevStep') )
        expect( getByTestId('stepOf') ).toHaveTextContent('STEP 1 OF 3')
    })

})
