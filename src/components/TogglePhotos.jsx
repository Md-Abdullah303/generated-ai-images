"use client";
import PhotoCard from "@/UI/PhotoCard";
import { Chip } from "@heroui/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const TogglePhotos = ({ photos, category }) => {
  const [filterPhotos, setFilterPhotos] = useState([...photos]);
  const [tab, setTap] = useState("all-photos");

  // console.log(category);

  const handleToggle = (toggle) => {
    console.log(toggle);
    if (toggle === "all-photos") {
      setFilterPhotos([...photos]);
    }
    if (toggle !== "all-photos") {
      const newFilterPhotos = photos.filter((photo) => photo.category == tab);
      setFilterPhotos(newFilterPhotos);
      toast.success(`${tab} images`);
    }
  };


  return (
    <div>
      <div className="flex items-center gap-4 pb-10">
        <Chip
          className="cursor-pointer"
          onClick={() => {
            setTap("all-photos");
            return handleToggle("all-photos");
          }}
          color="accent"
        >
          All Photos
        </Chip>
        {category.map((cat, ind) => (
          <Chip
            className="cursor-pointer"
            onClick={() => {
              setTap(cat.name);
              return handleToggle(cat.name);
            }}
            color="accent"
            key={ind}
          >
            {cat.name}
          </Chip>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filterPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TogglePhotos;
