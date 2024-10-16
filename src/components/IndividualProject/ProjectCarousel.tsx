import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ProjectCarouselProps {
  images: string[];
  videos: string[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  images,
  videos,
}) => {
  return (
    <Carousel
      className="w-full sm:w-[94%] md:w-[87%] lg:w-[70%]"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {videos && videos.length > 0 && (
          <CarouselItem>
            <video className="w-full" controls>
              <source src={videos[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </CarouselItem>
        )}

        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img src={image} alt={`Project image ${index}`} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="text-black bg-red-500 border-none left-5 hover:bg-red-700" />
      <CarouselNext className="text-black right-5 bg-red-500 border-none hover:bg-red-700" />
    </Carousel>
  );
};

export default ProjectCarousel;
