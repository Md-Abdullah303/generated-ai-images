export const getPhotos = async()=>{
    const res = await fetch("https://generated-ai-images.vercel.app/data.json");
    return await res.json();
}

export const getCategory = async()=>{
    const res = await fetch("https://generated-ai-images.vercel.app/category.json");
    return await res.json()
}