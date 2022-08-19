import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IAlbum } from 'app/shared/model/album.model';
import { getEntities as getAlbums } from 'app/entities/album/album.reducer';
import { ILocation } from 'app/shared/model/location.model';
import { getEntities as getLocations } from 'app/entities/location/location.reducer';
import { IArtist } from 'app/shared/model/artist.model';
import { getEntities as getArtists } from 'app/entities/artist/artist.reducer';
import { ISong } from 'app/shared/model/song.model';
import { getEntity, updateEntity, createEntity, reset } from './song.reducer';

export const SongUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const albums = useAppSelector(state => state.album.entities);
  const locations = useAppSelector(state => state.location.entities);
  const artists = useAppSelector(state => state.artist.entities);
  const songEntity = useAppSelector(state => state.song.entity);
  const loading = useAppSelector(state => state.song.loading);
  const updating = useAppSelector(state => state.song.updating);
  const updateSuccess = useAppSelector(state => state.song.updateSuccess);

  const handleClose = () => {
    navigate('/song');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getAlbums({}));
    dispatch(getLocations({}));
    dispatch(getArtists({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...songEntity,
      ...values,
      artists: mapIdList(values.artists),
      album: albums.find(it => it.id.toString() === values.album.toString()),
      location: locations.find(it => it.id.toString() === values.location.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...songEntity,
          album: songEntity?.album?.id,
          location: songEntity?.location?.id,
          artists: songEntity?.artists?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="kSkyMusicApp.song.home.createOrEditLabel" data-cy="SongCreateUpdateHeading">
            <Translate contentKey="kSkyMusicApp.song.home.createOrEditLabel">Create or edit a Song</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="song-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('kSkyMusicApp.song.songType')}
                id="song-songType"
                name="songType"
                data-cy="songType"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('kSkyMusicApp.song.title')}
                id="song-title"
                name="title"
                data-cy="title"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('kSkyMusicApp.song.timeDuration')}
                id="song-timeDuration"
                name="timeDuration"
                data-cy="timeDuration"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                  validate: v => isNumber(v) || translate('entity.validation.number'),
                }}
              />
              <ValidatedField id="song-album" name="album" data-cy="album" label={translate('kSkyMusicApp.song.album')} type="select">
                <option value="" key="0" />
                {albums
                  ? albums.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.title}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="song-location"
                name="location"
                data-cy="location"
                label={translate('kSkyMusicApp.song.location')}
                type="select"
              >
                <option value="" key="0" />
                {locations
                  ? locations.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.weatherType}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                label={translate('kSkyMusicApp.song.artist')}
                id="song-artist"
                data-cy="artist"
                type="select"
                multiple
                name="artists"
              >
                <option value="" key="0" />
                {artists
                  ? artists.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/song" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SongUpdate;
