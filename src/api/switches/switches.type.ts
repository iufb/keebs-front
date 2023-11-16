export interface ISwitches {
  name: string;
  compatibility: string;
  price: number;
  images: string[];
  count: number;
  type: string;
  travelDistance: TravelDistance;
  force: Force;
  mountingPins: number;
  materials: Materials;
  spring: string;
  factoryLubed: boolean;
  _id: string;
}

export interface TravelDistance {
  preTravel: string;
  totalTravel: string;
}

export interface Force {
  operationForce: string;
  endForce: string;
}

export interface Materials {
  stem: string;
  topHousing: string;
  bottomHousing: string;
}
