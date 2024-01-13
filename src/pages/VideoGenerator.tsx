import { useCallback, useState } from "react";
import PromptEditor from "../features/PromptEditor";
import {
  generateScenes,
  generateVideo,
  suggestBackgrounds,
} from "../api/aibackend";
import ScenesEditor from "../features/ScenesEditor";
import { Scene } from "../types/data";
import VideoViewer from "../features/VideoViewer";

export default function VideoGenerator() {
  const [loading, setLoading] = useState(false);

  const [prompt, setPrompt] = useState<string>("");
  const [scenes, setScenes] = useState<Scene[] | null>(null);
  const [video, setVideo] = useState<string | null>(null);

  const handlePromptConfirm = useCallback(async () => {
    setLoading(true);
    setScenes(null);
    setVideo(null);
    const { title, scenes: fetchedScenes } = await generateScenes(prompt);
    const scenesBackgrounds = await Promise.all(
      fetchedScenes.map(({ title }) => suggestBackgrounds(title))
    );
    setScenes(
      fetchedScenes.map((scene, i) => ({
        ...scene,
        backgrounds: scenesBackgrounds[i].backgrounds,
        selectedBackground: scenesBackgrounds[i].backgrounds[0].url,
      }))
    );
    setPrompt(title);
    setLoading(false);
  }, [prompt]);

  const handleChangeScene = useCallback((i: number, k: string, v: unknown) => {
    setScenes(
      (p) =>
        p?.map((scene, j) => (i === j ? { ...scene, [k]: v } : scene)) || null
    );
  }, []);

  const handleSuggestNewVideos = useCallback(
    async (i: number) => {
      if (!scenes) return;
      setLoading(true);
      setScenes(
        (p) =>
          p?.map((scene, j) =>
            i === j
              ? {
                  ...scene,
                  backgrounds: undefined,
                  selectedBackground: undefined,
                }
              : scene
          ) || null
      );
      const sceneBackgrounds = await suggestBackgrounds(scenes[i].title);
      setScenes(
        (p) =>
          p?.map((scene, j) =>
            i === j
              ? {
                  ...scene,
                  backgrounds: sceneBackgrounds.backgrounds,
                  selectedBackground: sceneBackgrounds.backgrounds[0].url,
                }
              : scene
          ) || null
      );
      setLoading(false);
    },
    [scenes]
  );

  const handleGenerateVideo = useCallback(async () => {
    if (!scenes) return;
    const { url } = await generateVideo({ title: prompt, scenes });
    setVideo(url);
  }, [prompt, scenes]);

  return (
    <div className="section page column">
      <PromptEditor
        prompt={prompt}
        onPromptChange={setPrompt}
        onPromptConfirm={handlePromptConfirm}
        disabled={loading}
      />
      {scenes != null && (
        <>
          <ScenesEditor
            scenes={scenes}
            onChangeScene={handleChangeScene}
            onSuggestNewVideos={handleSuggestNewVideos}
          />
          <button onClick={handleGenerateVideo}>Generate Video</button>
        </>
      )}
      {video && <VideoViewer url={video} />}
    </div>
  );
}
