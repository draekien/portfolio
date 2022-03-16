/** @jsxImportSource theme-ui */
import Image from "next/image";

export interface CoverPhotoProps {
  src: string;
  alt: string;
}

export const CoverPhoto: React.FC<CoverPhotoProps> = ({ src, alt }) => {
  return (
    <div sx={{ height: ["10em", "15em", "20em"], width: "100%", backgroundColor: "p-300" }}>
      <div sx={{ position: "relative", height: "100%", width: "100%", marginTop: "md" }}>
        <Image src={src} alt={alt} layout="fill" objectFit="none" objectPosition="50% 0%" priority />
      </div>
    </div>
  );
};

export default CoverPhoto;
