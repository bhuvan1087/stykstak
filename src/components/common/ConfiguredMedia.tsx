import type { MediaAsset } from "../../types/site";
import { siteData } from "../../data/site-data";

const images = siteData.assets.images as Record<string, string>;
const videos = siteData.assets.videos as Record<string, string>;

function resolveMediaSrc(media: MediaAsset) {
  if (media.src) {
    return media.src;
  }

  if (media.type === "video" && media.videoKey) {
    return videos[media.videoKey] ?? "";
  }

  if (media.imageKey) {
    return images[media.imageKey] ?? "";
  }

  return "";
}

function resolvePoster(media: MediaAsset) {
  if (media.poster) {
    return media.poster;
  }

  if (media.posterKey) {
    return images[media.posterKey];
  }

  return undefined;
}

export function ConfiguredMedia({
  media,
  className,
}: {
  media: MediaAsset;
  className?: string;
}) {
  const src = resolveMediaSrc(media);

  if (media.type === "video") {
    return (
      <video
        className={className}
        aria-label={media.alt}
        poster={resolvePoster(media)}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={src} />
      </video>
    );
  }

  return <img className={className} src={src} alt={media.alt ?? ""} />;
}

export function MediaPanel({
  media,
  className,
}: {
  media: MediaAsset;
  className: string;
}) {
  return (
    <div className={`media-frame ${className}`}>
      <ConfiguredMedia media={media} />
    </div>
  );
}
