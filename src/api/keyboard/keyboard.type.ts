export interface IKeyboard {
  name: string;
  description: string;
  colors?: string[];
  price: number;
  battery: IBattery;
  images: IImage[];
  materials: IMaterials;
  profile: string;
  series: string;
  connectivity: string;
  size: number;
  features: string[];
  _id: string;
}

export interface IBattery {
  capacity: number;
  workingTimeLightsOn: number;
  workingTimeLightsOff: number;
}

export interface IImage {
  image: string;
  color?: string;
}

export interface IMaterials {
  frame: string;
  bottomCase: string;
  keycap: string;
}
