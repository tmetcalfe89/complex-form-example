export interface BulletPoint {
  text: string;
}

export interface Scene {
  title: string;
  narration: string;
  bulletPoints: BulletPoint[];
  backgrounds?: string[];
}

export interface SceneResponse {
  title: string;
  scenes: Scene[];
}