import { render, screen, waitFor } from '@testing-library/react';
import UserCard from '@/app/components/UserCard';

// Mockataan globaali fetch-funktio
global.fetch = jest.fn();

describe('UserCard Component with Mocking', () => {
  // Nollataan jokaisen testin jälkeen
  beforeEach(() => {
    fetch.mockClear();
  });

  it('displays the user name from a mocked API call', async () => {
    // Määritetään, mitä fetch palauttaa tässä testissä
    fetch.mockResolvedValueOnce({
      json: async () => ({ name: 'Matti Meikäläinen' }),
    });

    render(<UserCard />);

    // Tarkistetaan ensin lataustila
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Käytetään waitFor-funktiota, koska fetch on asynkroninen
    await waitFor(() => {
      expect(screen.getByText('User: Matti Meikäläinen')).toBeInTheDocument();
    });

    // Varmistetaan, että fetch-kutsu tapahtui ainoastaan kerran oikeaan osoitteeseen
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
  });
});