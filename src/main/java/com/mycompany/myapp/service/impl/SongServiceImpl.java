package com.mycompany.myapp.service.impl;

import com.mycompany.myapp.domain.Song;
import com.mycompany.myapp.repository.SongRepository;
import com.mycompany.myapp.service.SongService;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Song}.
 */
@Service
@Transactional
public class SongServiceImpl implements SongService {

    private final Logger log = LoggerFactory.getLogger(SongServiceImpl.class);

    private final SongRepository songRepository;

    public SongServiceImpl(SongRepository songRepository) {
        this.songRepository = songRepository;
    }

    @Override
    public Song save(Song song) {
        log.debug("Request to save Song : {}", song);
        return songRepository.save(song);
    }

    @Override
    public Song update(Song song) {
        log.debug("Request to save Song : {}", song);
        return songRepository.save(song);
    }

    @Override
    public Optional<Song> partialUpdate(Song song) {
        log.debug("Request to partially update Song : {}", song);

        return songRepository
            .findById(song.getId())
            .map(existingSong -> {
                if (song.getSongType() != null) {
                    existingSong.setSongType(song.getSongType());
                }
                if (song.getTitle() != null) {
                    existingSong.setTitle(song.getTitle());
                }
                if (song.getTimeDuration() != null) {
                    existingSong.setTimeDuration(song.getTimeDuration());
                }

                return existingSong;
            })
            .map(songRepository::save);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Song> findAll() {
        log.debug("Request to get all Songs");
        return songRepository.findAll();
    }

    public Page<Song> findAllWithEagerRelationships(Pageable pageable) {
        return songRepository.findAllWithEagerRelationships(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Song> findOne(Long id) {
        log.debug("Request to get Song : {}", id);
        return songRepository.findOneWithEagerRelationships(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Song : {}", id);
        songRepository.deleteById(id);
    }
}
