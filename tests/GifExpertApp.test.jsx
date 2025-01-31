import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

    const newCategory = 'Saitama';

    test('Debe de agregar una nueva categoría', () => {

        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: newCategory} } );
        fireEvent.submit( form );
        
        expect( screen.getAllByRole('heading', {level: 3}).length ).toBe(2);

    });

    test('No debe de agregar una nueva categoría cuando ya existe', () => {

        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: newCategory} } );
        fireEvent.submit( form );

        fireEvent.input( input, { target: {value: newCategory} } );
        fireEvent.submit( form );

        expect( screen.getAllByRole('heading', {level: 3}).length ).toBe(2);

    });

});