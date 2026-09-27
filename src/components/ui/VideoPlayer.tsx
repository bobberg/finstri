import { Play } from "lucide-react";
import { useRef, useState } from "react";

type VideoPlayerProps = {
  className?: string;
  label: string;
  poster: string;
  src: string;
  captions?: string;
};

function VideoPlayer({
  captions,
  className = "",
  label,
  poster,
  src,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const start = () => {
    setHasStarted(true);
    videoRef.current?.play();
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-cloud ${className}`}
    >
      <video
        ref={videoRef}
        className="block h-full w-full"
        controls={hasStarted}
        playsInline
        poster={poster}
        preload="metadata"
        onPlay={() => setHasStarted(true)}
      >
        <source src={src} type="video/mp4" />
        {captions ? (
          // Not default-on: the video already carries burned-in subtitles, so
          // this track exists for users who switch it on deliberately.
          <track
            kind="captions"
            label="Nederlands"
            src={captions}
            srcLang="nl"
          />
        ) : null}
      </video>

      {hasStarted ? null : (
        <button
          className="group absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-200 hover:bg-ink/10"
          onClick={start}
          type="button"
        >
          <span className="sr-only">{label}</span>
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-white shadow-soft-xl transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
            <Play aria-hidden="true" className="ml-0.5 h-6 w-6 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}

export default VideoPlayer;
