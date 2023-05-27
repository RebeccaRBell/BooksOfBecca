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


        Book book1 = new Book("Pride and Prejudice", "Jane Austen","https://images.squarespace-cdn.com/content/v1/58c180edff7c50dd0e51a2ad/1596042032039-IN7LLXRVDKGVC854LVHE/9780241375273.jpg", new ArrayList<>(), new ArrayList<Review>(), 5);
        book1.addGenre(GenreType.FICTION);
        book1.addGenre(GenreType.ROMANCE);
        bookRepository.save(book1);
        Book book2 = new Book("To Kill a Mockingbird", "Harper Lee", "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg", new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book2.addGenre(GenreType.FICTION);
        bookRepository.save(book2);
        Book book3 = new Book("1984", "George Orwell",  "https://images.booksense.com/images/935/262/9780452262935.jpg", new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book3.addGenre(GenreType.FICTION);
        book3.addGenre(GenreType.DYSTOPIAN);
        bookRepository.save(book3);
        Book book4 = new Book("Moby-Dick", "Herman Melville", "https://cdn.waterstones.com/bookjackets/large/9781/8402/9781840228304.jpg", new ArrayList<GenreType>(),new ArrayList<Review>(), 5 );
        book4.addGenre(GenreType.FICTION);
        bookRepository.save(book4);
        Book book5 = new Book("Jane Eyre", "Charlotte Brontë", "https://almabooks.com/wp-content/uploads/2016/10/9781847493736.jpg", new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book5.addGenre(GenreType.ROMANCE);
        book5.addGenre(GenreType.FICTION);
        bookRepository.save(book5);
        Book book6 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "https://kbimages1-a.akamaihd.net/bb4ae37a-8370-4c31-aea8-55a51ba734b7/353/569/90/False/the-great-gatsby-the-original-1925-edition-a-f-scott-fitzgerald-classic-novel.jpg",new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book6.addGenre(GenreType.FICTION);
        bookRepository.save(book6);
        Book book7 = new Book("The Catcher in the Rye", "J.D Salinger", "https://cdn.waterstones.com/bookjackets/large/9780/2419/9780241984758.jpg",new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book7.addGenre(GenreType.FICTION);
        bookRepository.save(book7);
        Book book8 = new Book("Wuthering Heights", "Emily Brontë", "https://cdn.waterstones.com/bookjackets/large/9780/5713/9780571337118.jpg", new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book8.addGenre(GenreType.FICTION);
        book8.addGenre(GenreType.GOTHIC_FICTION);
        bookRepository.save(book8);
        Book book9 = new Book("Frankenstein", "Mary Shelley", "https://cdn.waterstones.com/bookjackets/large/9780/1413/9780141393391.jpg", new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book9.addGenre(GenreType.FICTION);
        book9.addGenre(GenreType.GOTHIC_FICTION);
        book9.addGenre(GenreType.SCIENCE_FICTION);
        bookRepository.save(book9);
        Book book10 = new Book("The Adventures of Huckleberry Finn", "Mark Twain","https://cdn.waterstones.com/bookjackets/large/9780/1995/9780199536559.jpg", new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book10. addGenre(GenreType.FICTION);
        book10.addGenre(GenreType.ADVENTURE);
        bookRepository.save(book10);
        Book book11 = new Book("Alice's Adventures in Wonderland", "Lewis Carroll", "https://cdn.waterstones.com/bookjackets/large/9781/4472/9781447279990.jpg", new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book11.addGenre(GenreType.FICTION);
        book11.addGenre(GenreType.FANTASY);
        bookRepository.save(book11);
        Book book12 = new Book("The Picture of Dorian Gray", "Oscar Wilde", "https://cdn.waterstones.com/bookjackets/large/9781/4351/9781435139435.jpg",new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book12.addGenre(GenreType.FICTION);
        book12.addGenre(GenreType.GOTHIC_FICTION);
        bookRepository.save(book12);
        Book book13 = new Book("The Silent Patient", "Alex Michaelides", "https://cdn.waterstones.com/bookjackets/large/9781/4091/9781409181637.jpg", new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book13.addGenre(GenreType.FICTION);
        book13.addGenre(GenreType.THRILLER);
        bookRepository.save(book13);
        Book book14 = new Book("Where the Crawdads Sing", "Delia Owens","https://pictures.abebooks.com/isbn/9781472154668-uk.jpg", new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book14.addGenre(GenreType.FICTION);
        Book book15 = new Book("Circe", "Madeline Miller", "https://cdn.waterstones.com/bookjackets/large/9781/4088/9781408890080.jpg",new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book15.addGenre(GenreType.FICTION);
        book15.addGenre(GenreType.FANTASY);
        bookRepository.save(book15);
        Book book16 = new Book("Educated", "Tara Westover", "https://cdn.waterstones.com/bookjackets/large/9780/0995/9780099511021.jpg",new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book16.addGenre(GenreType.NON_FICTION);
        book16.addGenre(GenreType.MEMOIR);
        bookRepository.save(book16);
        Book book17 = new Book("Normal People", "Sally Rooney", "https://cdn.waterstones.com/override/v6/large/9780/5713/9780571354054.jpg",new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book17.addGenre(GenreType.FICTION);
        bookRepository.save(book17);
        Book book18 = new Book("The Dutch House", "Ann Patchett","https://cdn.waterstones.com/bookjackets/large/9781/5266/9781526614971.jpg", new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book18.addGenre(GenreType.FICTION);
        bookRepository.save(book18);
        Book book19 = new Book("The Seven Husbands of Evenlyn Hugo", "Taylor Jenkins Reid","https://cdn.waterstones.com/bookjackets/large/9781/3985/9781398515697.jpg", new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book19.addGenre(GenreType.FICTION);
        bookRepository.save(book19);
        Book book20 = new Book("The Nightingale", "Kristin Hannah","https://cdn.waterstones.com/bookjackets/large/9781/5098/9781509898411.jpg", new ArrayList<GenreType>(), new ArrayList<Review>(), 5);
        book20.addGenre(GenreType.FICTION);







        User user1 = new User("Dianne Smith", "d.smith@gmail.com", "dianne", "21 Baker Street, London, W1U 8EQ", new ArrayList<Book>());
        user1.addBook(book1);
        userRepository.save(user1);

        Review review1 = new Review("A classic for a reason.", "Shaun Brookes", 5, book1.getId());
        reviewRepository.save(review1);

        book1.addReview(review1);
        bookRepository.save(book1);


    }
}
