import location from 'app/entities/location/location.reducer';
import artist from 'app/entities/artist/artist.reducer';
import album from 'app/entities/album/album.reducer';
import song from 'app/entities/song/song.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  location,
  artist,
  album,
  song,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
