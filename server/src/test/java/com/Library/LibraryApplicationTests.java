package com.Library;

import com.Library.Models.Book;
import com.Library.Models.GenreType;
import com.Library.Repositories.BookRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class LibraryApplicationTests {


	@Autowired
	private BookRepository bookRepository;

	@Test
	void contextLoads() {
	}



}
