import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoDownload } from 'react-icons/io5';

const PhotoCard = ({photo}) => {
    return (
        <Card className='rounded-lg border'>
            <div className="relative w-full aspect-square ">
                <Image
                src={photo.imageUrl}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover rounded-lg'
                />
                <Chip size='sm' color='accent' className='absolute right-3 top-3'>{photo.category}</Chip>
            </div>
            <h1 className='text-xl font-semibold'>{photo.title}</h1>
            <div className="flex items-center gap-3 border rounded-lg py-2 px-4 justify-between">
                <div className="flex items-center gap-1.5">
                    <FaHeart />
                    <p>{photo.likes}</p>
                </div>
                <Separator orientation='vertical'/>
                <div className="flex items-center gap-1.5">
                    <IoDownload />
                    <p>{photo.downloads}</p>
                </div>
            </div>
            <Link href={`/all-photos/${photo.id}`}>
            <Button variant='outline' className={'w-full'}>Show Details</Button>
            </Link>
        </Card>
    );
};

export default PhotoCard;