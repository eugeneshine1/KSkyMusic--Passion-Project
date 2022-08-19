package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Song;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Song entity.
 *
 * When extending this class, extend SongRepositoryWithBagRelationships too.
 * For more information refer to https://github.com/jhipster/generator-jhipster/issues/17990.
 */
@Repository
public interface SongRepository extends SongRepositoryWithBagRelationships, JpaRepository<Song, Long> {
    default Optional<Song> findOneWithEagerRelationships(Long id) {
        return this.fetchBagRelationships(this.findOneWithToOneRelationships(id));
    }

    default List<Song> findAllWithEagerRelationships() {
        return this.fetchBagRelationships(this.findAllWithToOneRelationships());
    }

    default Page<Song> findAllWithEagerRelationships(Pageable pageable) {
        return this.fetchBagRelationships(this.findAllWithToOneRelationships(pageable));
    }

    @Query(
        value = "select distinct song from Song song left join fetch song.album left join fetch song.location",
        countQuery = "select count(distinct song) from Song song"
    )
    Page<Song> findAllWithToOneRelationships(Pageable pageable);

    @Query("select distinct song from Song song left join fetch song.album left join fetch song.location")
    List<Song> findAllWithToOneRelationships();

    @Query("select song from Song song left join fetch song.album left join fetch song.location where song.id =:id")
    Optional<Song> findOneWithToOneRelationships(@Param("id") Long id);
}
