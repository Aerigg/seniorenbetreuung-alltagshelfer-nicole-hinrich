"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageSlideshowProps {
  images: string[];
  interval?: number;
}

export default function ImageSlideshow({ images, interval = 5000 }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setNextIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 800);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto pb-10">
      {/* Decorative background frame */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-warm-orange/20 rounded-3xl transform rotate-6"></div>

      {/* Main container */}
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden aspect-square">
        {/* Current Image */}
        <div className="absolute inset-0 p-8">
          <div className="relative w-full h-full">
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className="object-contain transition-opacity duration-300"
              style={{ opacity: isTransitioning ? 0.3 : 1 }}
              priority={currentIndex === 0}
            />
          </div>
        </div>

        {/* Next Image - slides from behind */}
        <div
          className={`absolute inset-0 p-8 transition-all duration-800 ease-in-out ${
            isTransitioning
              ? 'translate-x-0 scale-100 opacity-100'
              : 'translate-x-full scale-95 opacity-0'
          }`}
        >
          <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={images[nextIndex]}
              alt={`Slide ${nextIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
              setNextIndex((idx + 1) % images.length);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex
                ? 'bg-primary-blue w-8'
                : 'bg-primary-blue/30 hover:bg-primary-blue/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
