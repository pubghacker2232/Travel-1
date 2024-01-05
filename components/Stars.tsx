"use client";
import Image from "next/image";

const Stars = () => {
  return (
    <>
      {Array(5)
        .fill(1)
        .map((_, index) => (
          <Image src="/star.svg" alt="stars" width={24} height={24} key={index} />
        ))}
    </>
  );
};

export default Stars;
