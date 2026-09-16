import { useState } from "react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  // Self-hosted poster (an imported asset). On desktop the hero poster is the
  // LCP element, so fetching it from i.ytimg.com added a third-party
  // connection to LCP. Falls back to YouTube's thumbnail when omitted.
  poster?: string;
  className?: string;
}

// Shows the video's thumbnail and loads the real player only on click. An
// embedded player costs ~1 MB of YouTube scripts (plus ad and tracking
// requests) on page load, and a lazy iframe does not help in the hero: it
// sits inside Chrome's lazy-load distance, so it loaded on every mobile visit.
const YouTubeFacade = ({ videoId, title, poster, className = "" }: YouTubeFacadeProps) => {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={className}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className={`group relative block bg-black ${className}`}
    >
      <img
        src={poster ?? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        width={poster ? 1024 : 480}
        height={poster ? 576 : 360}
        decoding="async"
        className="h-full w-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-20 items-center justify-center rounded-2xl bg-red-600/90 shadow-lg transition-transform group-hover:scale-105 group-focus-visible:scale-105">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-1 h-7 w-7 fill-white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
};

export default YouTubeFacade;
