import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISong } from 'app/shared/model/song.model';
import { getEntities } from './song.reducer';

export const Song = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const songList = useAppSelector(state => state.song.entities);
  const loading = useAppSelector(state => state.song.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  return (
    <div>
      <h2 id="song-heading" data-cy="SongHeading">
        <Translate contentKey="kSkyMusicApp.song.home.title">Songs</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="kSkyMusicApp.song.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/song/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="kSkyMusicApp.song.home.createLabel">Create new Song</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {songList && songList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="kSkyMusicApp.song.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="kSkyMusicApp.song.songType">Song Type</Translate>
                </th>
                <th>
                  <Translate contentKey="kSkyMusicApp.song.title">Title</Translate>
                </th>
                <th>
                  <Translate contentKey="kSkyMusicApp.song.timeDuration">Time Duration</Translate>
                </th>
                <th>
                  <Translate contentKey="kSkyMusicApp.song.album">Album</Translate>
                </th>
                <th>
                  <Translate contentKey="kSkyMusicApp.song.location">Location</Translate>
                </th>
                <th>
                  <Translate contentKey="kSkyMusicApp.song.artist">Artist</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {songList.map((song, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/song/${song.id}`} color="link" size="sm">
                      {song.id}
                    </Button>
                  </td>
                  <td>{song.songType}</td>
                  <td>{song.title}</td>
                  <td>{song.timeDuration}</td>
                  <td>{song.album ? <Link to={`/album/${song.album.id}`}>{song.album.title}</Link> : ''}</td>
                  <td>{song.location ? <Link to={`/location/${song.location.id}`}>{song.location.weatherType}</Link> : ''}</td>
                  <td>
                    {song.artists
                      ? song.artists.map((val, j) => (
                          <span key={j}>
                            <Link to={`/artist/${val.id}`}>{val.id}</Link>
                            {j === song.artists.length - 1 ? '' : ', '}
                          </span>
                        ))
                      : null}
                  </td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/song/${song.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/song/${song.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/song/${song.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="kSkyMusicApp.song.home.notFound">No Songs found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Song;
