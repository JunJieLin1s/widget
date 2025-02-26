import axios from 'axios'

const cryptoApiClient = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
})

export const fetchCryptoPrices = async () => {
  try {
    const response = await cryptoApiClient.get('/simple/price', {
      params: {
        ids: 'bitcoin,ethereum,litecoin',
        vs_currencies: 'usd',
      },
    })
    return response.data
  } catch (error) {
    console.error('Fout bij het ophalen van crypto prijzen:', error)
    return null
  }
}
