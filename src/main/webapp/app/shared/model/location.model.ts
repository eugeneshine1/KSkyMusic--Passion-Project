import { ISong } from 'app/shared/model/song.model';
import { WeatherType } from 'app/shared/model/enumerations/weather-type.model';

export interface ILocation {
  id?: number;
  streetAddress?: string;
  postalCode?: string;
  city?: string;
  stateProvince?: string;
  weatherType?: WeatherType;
  songs?: ISong[] | null;
}

export const defaultValue: Readonly<ILocation> = {};
