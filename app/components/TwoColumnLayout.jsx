"use client";
import Image from 'next/image';
import ResourceCards from './ResourcesCards';

const TwoColumnLayout = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-900 to-green-300 z-0">
      
      <a
        href="/"
       
        className="absolute top-4 left-4 z-10"
      >
        <Image
          src="/logo-white.png"
          alt="Logo BEĨ"
          width={70}
          height={70}
          className="mx-8"
        />
      </a>

      <ResourceCards className="z-100"/>
    </div>
  );
};

export default TwoColumnLayout;





