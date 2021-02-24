import { render, screen } from '@testing-library/react';
import Titletext from '../components/Titletext'


describe('Renders title and text', () => {

  test('Renders title and text - first mode', () => {
    const { getByText } = render( <Titletext title="Titolo" >Lorem ipsum dolor</Titletext> );
    expect( getByText('Titolo') ).toBeInTheDocument();
  });
  
  test('Renders title and text - second mode', () => {
    render(<Titletext title="Titolo" >Lorem ipsum dolor</Titletext>);
    const el = screen.getByText('Titolo');
    expect(el).toBeInTheDocument();
  });  

})
