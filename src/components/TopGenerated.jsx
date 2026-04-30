import PhotoCard from '@/UI/PhotoCard';
import React from 'react';


const TopGenerated = async() => {
    const res = await fetch('https://generated-ai-images.vercel.app/data.json');
    const photos = await res.json();
    const topPhotos = photos.slice(0, 8)
    return (
        <div className='space-y-4'>
            <h1 className='text-2xl font-bold'>Top Generated Images...</h1>

            <div className="grid grid-cols-4 gap-5">
                {
                    topPhotos.map(photo=> <PhotoCard key={photo.id} photo={photo}/>)
                }
            </div>
        </div>
    );
};

export default TopGenerated;