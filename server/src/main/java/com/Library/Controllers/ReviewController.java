package com.Library.Controllers;

import com.Library.Models.Review;
import com.Library.Repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping(value = "/reviews")
    public ResponseEntity<List<Review>> getAllReviews(){
        return new ResponseEntity<>(reviewRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/reviews/{id}")
    public ResponseEntity<Optional<Review>> getReview(@PathVariable Long id){
        return new ResponseEntity<>(reviewRepository.findById(id), HttpStatus.OK);
    }
 }
