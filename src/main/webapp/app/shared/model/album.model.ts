import { IArtist } from 'app/shared/model/artist.model';

export interface IAlbum {
  id?: number;
  songType?: string;
  title?: string;
  timeDuration?: number;
  artist?: IArtist | null;
}

export const defaultValue: Readonly<IAlbum> = {};
