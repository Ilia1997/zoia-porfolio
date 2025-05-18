import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/client";

interface Props {
  asset: SanityImageSource;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  link?: string;
  blank?: string;
  sizes?: string;
}

export const SanityImage = (props: Props) => {
  const { asset, alt, caption, className, priority, link, blank, sizes } =
    props;
  const imageProps = useNextSanityImage(client, asset);

  if (!imageProps) return null;

  return (
    <figure>
      {priority && (
        <Image
          {...imageProps}
          alt={alt}
          className={className}
          priority={priority}
          sizes={sizes}
        />
      )}
      {!priority && link && (
        <a href={link} target={blank ? "_blank" : "_self"}>
          <Image
            {...imageProps}
            alt={alt}
            placeholder="blur"
            blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMiAuXAwADcAE1fMudSAAAAABJRU5ErkJggg==`}
          />
        </a>
      )}
      {!priority && !link && (
        <Image
          {...imageProps}
          alt={alt}
          placeholder="blur"
          blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMiAuXAwADcAE1fMudSAAAAABJRU5ErkJggg==`}
        />
      )}

      {caption && (
        <figcaption className="mt-2 text-center italic text-sm text-gray-500 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
