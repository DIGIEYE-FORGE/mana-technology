import React from "react";

function YoutubeComponent({
  url,
  className,
  title,
  ...props
}: {
  url: string;
  className?: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
} & React.HTMLProps<HTMLIFrameElement>) {
  return (
    <iframe
      {...props}
      className={`h-full w-full rounded-lg border-none bg-black ${className}`}
      width="100%"
      height="100%"
      src={url}
      title={title}
      loading="lazy"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}

export default YoutubeComponent;
