import { SceneResponse } from "../types/data";

const wait = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

export const generateScenes = async (
  prompt: string
): Promise<SceneResponse> => {
  console.info("aibackend: generate scene");
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
