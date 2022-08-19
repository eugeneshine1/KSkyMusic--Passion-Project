import { IAlbum } from 'app/shared/model/album.model';
import { ILocation } from 'app/shared/model/location.model';
import { IArtist } from 'app/shared/model/artist.model';

export interface ISong {
  id?: number;
  songType?: string;
  title?: string;
  timeDuration?: number;
  album?: IAlbum | null;
  location?: ILocation | null;
  artists?: IArtist[] | null;
}

export const defaultValue: Readonly<ISong> = {};
