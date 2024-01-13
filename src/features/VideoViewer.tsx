import Section from "../components/Section";

interface VideoViewerProps {
  url: string;
}

export default function VideoViewer({ url }: VideoViewerProps) {
  return (
    <Section>
      <iframe
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Section>
  );
}
