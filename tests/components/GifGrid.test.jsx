import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({ images: [], isLoading: true });

        render( <GifGrid category={ category }/> );
        expect( screen.getByText('Cargando...') ).toBeTruthy();
        expect( screen.getByText(category) ).toBeTruthy();

    });

    test('Debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://one-punch/saitama.jpg',
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://dragon-ball/goku.jpg',
            },
        ]
        
        useFetchGifs.mockReturnValue({ images: gifs, isLoading: true });
        
        render( <GifGrid category={ category }/> );
        expect( screen.getAllByRole('img').length ).toBe(2);

    });

});