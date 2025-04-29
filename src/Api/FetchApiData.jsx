export const FetchApiData = async () => {
    
    // const api = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=superman`
    // const api = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=avengers`
    const api = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=batman`
    try {
        const responce = await fetch(api)
        const data = await responce.json()
        return data;

    } catch (error) {
        console.log(error);
    }
}
