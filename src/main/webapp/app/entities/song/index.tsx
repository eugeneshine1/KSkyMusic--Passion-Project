import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Song from './song';
import SongDetail from './song-detail';
import SongUpdate from './song-update';
import SongDeleteDialog from './song-delete-dialog';

const SongRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Song />} />
    <Route path="new" element={<SongUpdate />} />
    <Route path=":id">
      <Route index element={<SongDetail />} />
      <Route path="edit" element={<SongUpdate />} />
      <Route path="delete" element={<SongDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default SongRoutes;
