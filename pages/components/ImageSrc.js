const ImageSrc = (props) => {
  const { src, alt, className } = props;

  return <img src={src} className={className} alt={alt} />;
};
export default ImageSrc;
