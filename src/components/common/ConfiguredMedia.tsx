import type { MediaAsset } from "../../types/site";

export function ConfiguredMedia({
  media,
  className,
}: {
  media: MediaAsset;
  className?: string;
}) {
  if (media.type === "video") {
    return (
      <video
        className={className}
        aria-label={media.alt}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={media.src} />
      </video>
    );
  }

  return <img className={className} src={media.src} alt={media.alt ?? ""} />;
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
