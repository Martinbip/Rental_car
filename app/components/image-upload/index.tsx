import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { set } from "date-fns";
declare global {
  var cloundinary: any;
}

interface IImageUploadProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const ImageUpload = ({ value, onChange }: IImageUploadProps) => {
  const [isUploading, setIsUploading] = useState<boolean>(true);
  const handleUpload = useCallback(
    (result: any) => {
      console.log(result);
      const secureUrl = result.info.secure_url as string;
      onChange([...value, secureUrl]);
    },
    [onChange, value]
  );
  const handleBatchStart = useCallback(() => {
    setIsUploading(true);
  }, []);

  const handleBatchComplete = useCallback(() => {
    setIsUploading(false);
  }, []);
  return (
    <>
      <CldUploadWidget
        onUpload={handleUpload}
        uploadPreset="rentalcar"
        options={{ maxFiles: 5 }}
        onOpen={handleBatchStart}
        onClose={handleBatchComplete}
      >
        {({ open }) => {
          return (
            <div
              onClick={() => open?.()}
              className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 border-neutral-200 p-20 flex flex-col justify-center items-center gap-4 text-neutral-600"
              style={{ pointerEvents: isUploading ? "auto" : "none" }}
            >
              {isUploading && <TbPhotoPlus size={50} />}
              <div className="font-semibold text-lg">{isUploading ?  'Click to Upload' : 'Upload Successfully'}</div>
            </div>
          );
        }}
      </CldUploadWidget>
      {/* { !isUploading && (
        <div className="absolute inset-0 w-50
         h-full">
          <Carousel>
            <CarouselContent>
              {value.map((url,index) => (  
                <CarouselItem key={index} className="relative h-[20vh]">
                  <Image
                    src={url}
                    alt="Upload"
                    width={100}
                    height={100}
                    style={{ objectFit: "cover" }}
                  />
                </CarouselItem>)
              )}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-50" />
            <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-50" />

          </Carousel>
        </div>
      )} */}
    </>
  );
};

export default ImageUpload;
