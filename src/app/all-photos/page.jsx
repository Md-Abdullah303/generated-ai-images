import TogglePhotos from "@/components/TogglePhotos";
import { getCategory, getPhotos } from "../../lib/data";

const AllPhotosPage = async () => {
  // const res = await fetch('https://generated-ai-images.vercel.app/data.json');
  // const photos = await res.json();
  const photos = await getPhotos(); // lib/data.js theke astase
  const category = await getCategory();

  return (
    <div className="space-y-5">
      <h1 className="pt-7 text-3xl font-bold">All Photos</h1>

      <TogglePhotos category={category} photos={photos} />
    </div>
  );
};

export default AllPhotosPage;
