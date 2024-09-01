import { Key } from "react";

export interface TBike {
  _id: Key | null | undefined;
  fullbike_name: string;
  PerHour: number;
  isAvailable?: boolean;
  isDelete: boolean;
  imgSrc: string[];
  make: string;
  model: string;
  year: string;
  type: string;
  engine: {
    type: string;
    displacement: string;
    power: string;
  };
  brakes: {
    front_brakes: string;
    rear_brakes: string;
  };
  fuel_and_lubrication: {
    fuel_capacity: string;
  };
  additional_features: {
    gearbox: string;
    transmission: string;
    clutch: string;
    frame: string;
    cooling: string;
    starter: string;
    electronic_aids: string;
  };
  weight: string;
}


  export interface ReturnBikeResponse  {
   success: boolean;
   statusCode: number;
   message: string;
 };
