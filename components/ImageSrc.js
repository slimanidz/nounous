import Image from "next/image";

const ImageSrc = (props) => {
  const { src, width, height, alt, className } = props;

  return (
    <Image
      src={src}
      width={width}
      height={height}
      className={className}
      alt={alt}
    />
  );
};
export default ImageSrc;
