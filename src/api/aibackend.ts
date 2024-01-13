import { Scene, Background } from "../types/data";

export interface SceneResponse {
  title: string;
  scenes: Scene[];
}

export interface VideoRequest {
  title: string;
  scenes: Scene[];
}

const wait = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

export const generateScenes = async (
  prompt: string
): Promise<SceneResponse> => {
  console.info("aibackend: generate scene", { prompt });
  await wait(1000);
  return {
    title: `Title: ${prompt}`,
    scenes: new Array(3).fill(0).map((_e, i) => ({
      title: `${prompt}-${i}`,
      narration: `This is some narration about ${prompt}-${i}`,
      bulletPoints: [
        {
          text: "Points",
        },
        {
          text: "About",
        },
        {
          text: `${prompt}-${i}`,
        },
      ],
    })),
  };
};

interface BackgroundResponse {
  backgrounds: Background[];
}

const getRandom = (max: number, min: number | undefined = 0) => Math.floor(Math.random() * (max - min)) + min;

export const suggestBackgrounds = async (prompt: string): Promise<BackgroundResponse> => {
  console.info("aibackend: suggest videos", { prompt });
  await wait(1000);
  return {
    backgrounds: [
      {
        url: `https://picsum.photos/id/${getRandom(100)}/200/200`,
      },
      {
        url: `https://picsum.photos/id/${getRandom(100)}/200/200`,
      },
      {
        url: `https://picsum.photos/id/${getRandom(100)}/200/200`,
      },
    ],
  };
};

export const generateVideo = async (data: VideoRequest) => {
  console.info("aibackend: generate video", data);
  await wait (1000);
  return {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=YwArzi9TsmQtryg6"
  }
}
