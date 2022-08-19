import { ISong } from 'app/shared/model/song.model';

export interface IArtist {
  id?: number;
  name?: string;
  songs?: ISong[] | null;
}

export const defaultValue: Readonly<IArtist> = {};
