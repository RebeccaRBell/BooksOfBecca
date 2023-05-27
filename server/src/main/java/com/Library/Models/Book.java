package com.Library.Models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="books")
public class Book{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name="title")
    private String title;
    @Column(name="author")
    private String author;
    @Column(name="genre")
    private List<GenreType> genre;

    @Column(name="synopsis")
    private String synopsis;

    @Column(name="image")
    private String image;

    @Column (name="reviews")
    @OneToMany(targetEntity = Review.class)
    private List<Review> reviews;

    @Column (name="available")
    private int number_available;


    public Book(String title, String author, List<GenreType> genre, String synopsis, String image, List<Review> reviews, int number_available){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.synopsis = synopsis;
        this.image = image;
        this.reviews = reviews;
        this.number_available = number_available;

    }
    public Book() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }


    public String getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getNumber_available() {
        return number_available;
    }

    public void setNumber_available(int number_available) {
        this.number_available = number_available;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public void addReview(Review review){
        this.reviews.add(review);
    }

    public List<GenreType> getGenre() {
        return genre;
    }

    public void setGenre(List<GenreType> genre) {
        this.genre = genre;
    }

    public void addGenre(GenreType genre) {
        this.genre.add(genre);
    }

}
