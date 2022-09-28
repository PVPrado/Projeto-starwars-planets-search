import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('', () => {
  it('Testa os elementos na tela inicial', () => {
    render(<App />);
    const title = screen.getByRole('heading', { level: 1, name:/Planets/i });
    expect(title).toBeInTheDocument();

    const inputSearch = screen.getByPlaceholderText(/Buscar/i);
    expect(inputSearch).toBeInTheDocument();

    const btnFilter = screen.getByRole('button', { name: /filtrar/i });
    expect(btnFilter).toBeInTheDocument();
  });

  it('Testa a filtragem do maior que', () => {
    render(<App />)

    const btnFilter = screen.getByRole('button', { name: /filtrar/i });
    userEvent.click(btnFilter);
    const spanText = screen.getByText(/population maior que 0/i)
  })
})

