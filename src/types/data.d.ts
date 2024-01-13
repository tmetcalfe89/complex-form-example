export interface BulletPoint {
  text: string;
}

export interface Scene {
  title: string;
  narration: string;
  bulletPoints: BulletPoint[];
  backgrounds?: Background[];
  selectedBackground?: string;
}

export interface Background {
  url: string;
}