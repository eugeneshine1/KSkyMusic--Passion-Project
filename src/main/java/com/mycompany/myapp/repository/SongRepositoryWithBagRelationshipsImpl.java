package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Song;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.hibernate.annotations.QueryHints;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

/**
 * Utility repository to load bag relationships based on https://vladmihalcea.com/hibernate-multiplebagfetchexception/
 */
public class SongRepositoryWithBagRelationshipsImpl implements SongRepositoryWithBagRelationships {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Optional<Song> fetchBagRelationships(Optional<Song> song) {
        return song.map(this::fetchArtists);
    }

    @Override
    public Page<Song> fetchBagRelationships(Page<Song> songs) {
        return new PageImpl<>(fetchBagRelationships(songs.getContent()), songs.getPageable(), songs.getTotalElements());
    }

    @Override
    public List<Song> fetchBagRelationships(List<Song> songs) {
        return Optional.of(songs).map(this::fetchArtists).orElse(Collections.emptyList());
    }

    Song fetchArtists(Song result) {
        return entityManager
            .createQuery("select song from Song song left join fetch song.artists where song is :song", Song.class)
            .setParameter("song", result)
            .setHint(QueryHints.PASS_DISTINCT_THROUGH, false)
            .getSingleResult();
    }

    List<Song> fetchArtists(List<Song> songs) {
        HashMap<Object, Integer> order = new HashMap<>();
        IntStream.range(0, songs.size()).forEach(index -> order.put(songs.get(index).getId(), index));
        List<Song> result = entityManager
            .createQuery("select distinct song from Song song left join fetch song.artists where song in :songs", Song.class)
            .setParameter("songs", songs)
            .setHint(QueryHints.PASS_DISTINCT_THROUGH, false)
            .getResultList();
        Collections.sort(result, (o1, o2) -> Integer.compare(order.get(o1.getId()), order.get(o2.getId())));
        return result;
    }
}
