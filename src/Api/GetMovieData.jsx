//It is a function //


export const getMovieData = async ({params}) => {
   
const id = params.movieID


    const api = `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    try {
        const responce = await fetch(api)
        const data = await responce.json()
        return data;

    } catch (error) {
        console.log(error);
    }
}
