import { Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoDownload } from "react-icons/io5";

const PhotosDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://generated-ai-images.vercel.app/data.json");
  const photos = await res.json();
  const photo = photos.find((p) => p.id == id);
  return (
    <Card className="mt-20 flex flex-row items-start gap-5 border rounded-lg">
      <div className="relative w-150 aspect-square ">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          fill
          className="rounded-xl object-cover"
        />
        <Chip size="sm" color="accent" className="absolute top-3 right-3">
          {photo.category}
        </Chip>
      </div>
      <div className=" space-y-3">
        <h1 className="text-3xl font-bold">Name : {photo.title}</h1>
        <p className="text-lg text-gray-600">Prompt : {`'${photo.prompt}'`}</p>
        <p className="text-lg text-gray-600">Resolution : {photo.resolution}</p>
        <p className="text-lg text-gray-600">Created : {photo.createdAt}</p>
        <div className="flex items-center gap-3 border rounded-lg py-4 px-10 justify-between">
          <div className="flex items-center text-2xl gap-1.5">
            <FaHeart />
            <p>{photo.likes}</p>
          </div>
          <Separator orientation="vertical" />
          <div className="flex items-center text-2xl gap-1.5">
            <IoDownload />
            <p>{photo.downloads}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
            {
                photo.tags.map((t, ind)=> <Chip color="success" size="sm" key={ind}>{t}</Chip>)
            }
        </div>
      </div>
    </Card>
  );
};

export default PhotosDetailsPage;
