package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Artist;
import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link Artist}.
 */
public interface ArtistService {
    /**
     * Save a artist.
     *
     * @param artist the entity to save.
     * @return the persisted entity.
     */
    Artist save(Artist artist);

    /**
     * Updates a artist.
     *
     * @param artist the entity to update.
     * @return the persisted entity.
     */
    Artist update(Artist artist);

    /**
     * Partially updates a artist.
     *
     * @param artist the entity to update partially.
     * @return the persisted entity.
     */
    Optional<Artist> partialUpdate(Artist artist);

    /**
     * Get all the artists.
     *
     * @return the list of entities.
     */
    List<Artist> findAll();

    /**
     * Get the "id" artist.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Artist> findOne(Long id);

    /**
     * Delete the "id" artist.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
