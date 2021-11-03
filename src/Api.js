import axios from 'axios'


export const api = {
    getCharacterByName: async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character')

        return response
    }
}