class AviaService {
  async getFlights() {
    const response = await fetch(
      `https://66fa4a0aafc569e13a9b101d.mockapi.io/api/items`
    );
    if (!response.ok) {
      throw new Error(`Error fetching flights: ${response.statusText}`);
    }
    return response.json();
  }
}

export default new AviaService();
