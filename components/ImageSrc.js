import Image from "next/image";

const ImageSrc = ({ src, alt, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={180}
      height={180}
      unoptimized
      className={className}
    />
  );
};

export default ImageSrc;
