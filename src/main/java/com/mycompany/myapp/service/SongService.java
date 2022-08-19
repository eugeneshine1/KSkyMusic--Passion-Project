package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Song;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link Song}.
 */
public interface SongService {
    /**
     * Save a song.
     *
     * @param song the entity to save.
     * @return the persisted entity.
     */
    Song save(Song song);

    /**
     * Updates a song.
     *
     * @param song the entity to update.
     * @return the persisted entity.
     */
    Song update(Song song);

    /**
     * Partially updates a song.
     *
     * @param song the entity to update partially.
     * @return the persisted entity.
     */
    Optional<Song> partialUpdate(Song song);

    /**
     * Get all the songs.
     *
     * @return the list of entities.
     */
    List<Song> findAll();

    /**
     * Get all the songs with eager load of many-to-many relationships.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Song> findAllWithEagerRelationships(Pageable pageable);

    /**
     * Get the "id" song.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Song> findOne(Long id);

    /**
     * Delete the "id" song.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
