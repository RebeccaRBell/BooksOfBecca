package com.Library.Components;

import com.Library.Models.Book;
import com.Library.Models.GenreType;
import com.Library.Models.Review;
import com.Library.Models.User;
import com.Library.Repositories.BookRepository;
import com.Library.Repositories.ReviewRepository;
import com.Library.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Profile("!Test")
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    BookRepository bookRepository;
    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception{


        Book book1 = new Book("Pride and Prejudice", "Jane Austen", new ArrayList<>(), "Through witty dialogue and sharp social commentary, Austen explores themes of love, marriage, and class.", "https://images.squarespace-cdn.com/content/v1/58c180edff7c50dd0e51a2ad/1596042032039-IN7LLXRVDKGVC854LVHE/9780241375273.jpg", new ArrayList<Review>(), 5);
        book1.addGenre(GenreType.FICTION);
        book1.addGenre(GenreType.ROMANCE);
        bookRepository.save(book1);
        Book book2 = new Book("To Kill a Mockingbird", "Harper Lee", new ArrayList<GenreType>(), "Set in the 1930s in a racially divided Alabama town, we follow Scout Finch and her brother Jem. Through Scout's innocent perspective, Lee addresses themes of racial injustice, morality, and the loss of innocence.", "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg", new ArrayList<Review>(), 5);
        book2.addGenre(GenreType.FICTION);
        bookRepository.save(book2);
        Book book3 = new Book("1984", "George Orwell", new ArrayList<GenreType>(),"In a totalitarian society ruled by the omnipresent Party, Winston Smith rebels against the oppressive regime by engaging in a forbidden love affair and questioning the government's manipulation of truth.", "https://images.booksense.com/images/935/262/9780452262935.jpg", new ArrayList<Review>(), 5);
        book3.addGenre(GenreType.FICTION);
        book3.addGenre(GenreType.DYSTOPIAN);
        bookRepository.save(book3);
        Book book4 = new Book("Moby-Dick", "Herman Melville", new ArrayList<GenreType>(), "This epic tale follows the obsessive Captain Ahab as he leads his crew on a harrowing quest to seek revenge against the elusive white whale, Moby Dick. Melville delves into themes of obsession, fate, and the complexities of the human spirit.", "https://cdn.waterstones.com/bookjackets/large/9781/8402/9781840228304.jpg", new ArrayList<Review>(), 5 );
        book4.addGenre(GenreType.FICTION);
        bookRepository.save(book4);




        User user1 = new User("Dianne Smith", "d.smith@gmail.com", "dianne", "21 Baker Street, London, W1U 8EQ", new ArrayList<Book>());
        user1.addBook(book1);
        userRepository.save(user1);

        Review review1 = new Review("A classic for a reason.", "Shaun Brookes", 5, book1.getId());
        reviewRepository.save(review1);

        book1.addReview(review1);
        bookRepository.save(book1);


    }
}
