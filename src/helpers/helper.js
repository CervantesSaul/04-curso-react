export const getGifs = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&offset=0&key=AuKiagKF8bAy0med5fR5e884FSZAyWgP`;
        
        const resp = await fetch(url);
        const { data} = await resp.json();
        
        return data.map((img)=>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
}