import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import mockApi from '../helpers/mockAPI';

describe('', () => {
    beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockApi),
    });
  });

  it('Testa os elementos na tela inicial', () => {
    render(<App />);
    const title = screen.getByRole('heading', { level: 1, name:/Planets/i });
    expect(title).toBeInTheDocument();

    const inputSearch = screen.getByPlaceholderText(/Buscar/i);
    expect(inputSearch).toBeInTheDocument();

    const btnFilter = screen.getByRole('button', { name: /filtrar/i });
    expect(btnFilter).toBeInTheDocument();
  });

  it('Testa a filtragem quando digita no input de filtragem', () => {
    render(<App />)

    const inputSearch = screen.getByPlaceholderText(/Buscar/i);
    
  })

  it('Testa a filtragem do maior que', () => {
    render(<App />)

    const btnFilter = screen.getByRole('button', { name: /filtrar/i });
    userEvent.click(btnFilter);
    const spanText = screen.getByText(/population maior que 0/i)
  })
  
  it(`Testando se o valor digitado é renderizado`, async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen.getAllByRole('row')).toHaveLength(11);
    });

    const nomeDoPlaneta = 'Dagobah'
    const input = screen.getByTestId('name-filter')

    userEvent.type(input, nomeDoPlaneta);
    expect(input).toHaveValue(nomeDoPlaneta)

    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'igual a')
    expect(screen.getByTestId('comparison-filter')).toHaveValue('igual a')
  })
  
  it(`Testando se existem os filtros na tela`, async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen.getAllByRole('row')).toHaveLength(11);
    });
    expect(screen.getByTestId('comparison-filter')).toBeInTheDocument()
    expect(screen.getByTestId('comparison-filter')).toBeInTheDocument()
    expect(screen.getByTestId('value-filter')).toBeInTheDocument()
    expect(screen.getByTestId('button-filter')).toHaveTextContent('Filtrar')

    userEvent.selectOptions(screen.getByTestId('column-filter'), 'orbital_period')
    expect(screen.getByTestId('column-filter')).toHaveValue('orbital_period')

    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'menor que')
    expect(screen.getByTestId('comparison-filter')).toHaveValue('menor que')
    userEvent.type(screen.getByTestId('value-filter'), '10')
    expect(screen.getByTestId('value-filter')).toHaveValue(10)

    userEvent.click(screen.getByTestId('button-filter'))

  })

    it('Error', () => {
    render(<App />)

    userEvent.selectOptions(screen.getByTestId('column-filter'), 'population')
    expect(screen.getByTestId('column-filter')).toHaveValue('population')

    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'maior que')
    expect(screen.getByTestId('comparison-filter')).toHaveValue('maior que')

    expect(screen.getByTestId('value-filter')).toHaveValue(0)

    userEvent.click(screen.getByTestId('button-filter'))


    userEvent.selectOptions(screen.getByTestId('column-filter'), 'diameter')
    expect(screen.getByTestId('column-filter')).toHaveValue('diameter')

    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'igual a')
    expect(screen.getByTestId('comparison-filter')).toHaveValue('igual a')

    expect(screen.getByTestId('value-filter')).toHaveValue(0)

    userEvent.click(screen.getByTestId('button-filter'))

  })
})



