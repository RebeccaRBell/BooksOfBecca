package com.Library.Models;

import jakarta.persistence.*;

@Entity
@Table (name="reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column (name="review")
    private String review;
    @Column(name="author")
    private String author;
    @Column(name="rating")
    private int rating;

    @JoinTable(
            name="books",
            joinColumns = {@JoinColumn(name="id")}
    )
    private Long book_id;


    public Review(String review, String author, int rating, Long book_id){
        this.review = review;
        this.author = author;
        this.rating = rating;
        this.book_id = book_id;
    }

    public Review() {
    }

    public Long getId(){
        return this.id;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public Long getBook_id() {
        return book_id;
    }

    public void setBook_id(Long book_id) {
        this.book_id = book_id;
    }
}
