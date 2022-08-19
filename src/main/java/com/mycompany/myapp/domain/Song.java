package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Song.
 */
@Entity
@Table(name = "song")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Song implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "song_type", nullable = false)
    private String songType;

    @NotNull
    @Column(name = "title", nullable = false)
    private String title;

    @NotNull
    @Column(name = "time_duration", nullable = false)
    private Long timeDuration;

    @ManyToOne
    @JsonIgnoreProperties(value = { "artist" }, allowSetters = true)
    private Album album;

    @ManyToOne
    @JsonIgnoreProperties(value = { "songs" }, allowSetters = true)
    private Location location;

    @ManyToMany
    @JoinTable(name = "rel_song__artist", joinColumns = @JoinColumn(name = "song_id"), inverseJoinColumns = @JoinColumn(name = "artist_id"))
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "songs" }, allowSetters = true)
    private Set<Artist> artists = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Song id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSongType() {
        return this.songType;
    }

    public Song songType(String songType) {
        this.setSongType(songType);
        return this;
    }

    public void setSongType(String songType) {
        this.songType = songType;
    }

    public String getTitle() {
        return this.title;
    }

    public Song title(String title) {
        this.setTitle(title);
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getTimeDuration() {
        return this.timeDuration;
    }

    public Song timeDuration(Long timeDuration) {
        this.setTimeDuration(timeDuration);
        return this;
    }

    public void setTimeDuration(Long timeDuration) {
        this.timeDuration = timeDuration;
    }

    public Album getAlbum() {
        return this.album;
    }

    public void setAlbum(Album album) {
        this.album = album;
    }

    public Song album(Album album) {
        this.setAlbum(album);
        return this;
    }

    public Location getLocation() {
        return this.location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Song location(Location location) {
        this.setLocation(location);
        return this;
    }

    public Set<Artist> getArtists() {
        return this.artists;
    }

    public void setArtists(Set<Artist> artists) {
        this.artists = artists;
    }

    public Song artists(Set<Artist> artists) {
        this.setArtists(artists);
        return this;
    }

    public Song addArtist(Artist artist) {
        this.artists.add(artist);
        artist.getSongs().add(this);
        return this;
    }

    public Song removeArtist(Artist artist) {
        this.artists.remove(artist);
        artist.getSongs().remove(this);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Song)) {
            return false;
        }
        return id != null && id.equals(((Song) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Song{" +
            "id=" + getId() +
            ", songType='" + getSongType() + "'" +
            ", title='" + getTitle() + "'" +
            ", timeDuration=" + getTimeDuration() +
            "}";
    }
}
