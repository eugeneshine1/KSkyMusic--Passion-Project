package com.mycompany.myapp.service.impl;

import com.mycompany.myapp.domain.Artist;
import com.mycompany.myapp.repository.ArtistRepository;
import com.mycompany.myapp.service.ArtistService;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Artist}.
 */
@Service
@Transactional
public class ArtistServiceImpl implements ArtistService {

    private final Logger log = LoggerFactory.getLogger(ArtistServiceImpl.class);

    private final ArtistRepository artistRepository;

    public ArtistServiceImpl(ArtistRepository artistRepository) {
        this.artistRepository = artistRepository;
    }

    @Override
    public Artist save(Artist artist) {
        log.debug("Request to save Artist : {}", artist);
        return artistRepository.save(artist);
    }

    @Override
    public Artist update(Artist artist) {
        log.debug("Request to save Artist : {}", artist);
        return artistRepository.save(artist);
    }

    @Override
    public Optional<Artist> partialUpdate(Artist artist) {
        log.debug("Request to partially update Artist : {}", artist);

        return artistRepository
            .findById(artist.getId())
            .map(existingArtist -> {
                if (artist.getName() != null) {
                    existingArtist.setName(artist.getName());
                }

                return existingArtist;
            })
            .map(artistRepository::save);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Artist> findAll() {
        log.debug("Request to get all Artists");
        return artistRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Artist> findOne(Long id) {
        log.debug("Request to get Artist : {}", id);
        return artistRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Artist : {}", id);
        artistRepository.deleteById(id);
    }
}
