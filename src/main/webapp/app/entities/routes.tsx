import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Location from './location';
import Artist from './artist';
import Album from './album';
import Song from './song';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="location/*" element={<Location />} />
        <Route path="artist/*" element={<Artist />} />
        <Route path="album/*" element={<Album />} />
        <Route path="song/*" element={<Song />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
