import PhotoCard from "@/UI/PhotoCard";

const page = async() => {
    const res = await fetch('https://generated-ai-images.vercel.app/data.json');
    const photos = await res.json();

    return (
        <div className="space-y-5">
            <h1 className="pt-7 text-3xl font-bold">All Photos</h1>

            <div className="grid grid-cols-4 gap-5">
                {
                    photos.map(photo => <PhotoCard key={photo.id} photo={photo}/>)
                }
            </div>
        </div>
    );
};

export default page;