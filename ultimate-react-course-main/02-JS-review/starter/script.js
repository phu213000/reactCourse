const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// // Destructuring
// const book = getBook(2);
// // const title = book.title;
// // const author = book.author;

// const { title, author, publicationDate, genres, hasMovieAdaptation, pages } =
//   book;

// // author;
// console.log(author, title, genres);
// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];
// const [primaryGenre, ...otherGenres] = genres;
// console.log(primaryGenre, otherGenres);

// const newGenres = ["epic fanasty", ...genres];
// newGenres;

// const upDateBook = {
//   // Adding a new property to the object
//   ...book,
//   // Overwriting an existing property
//   moviePublication: "2024-12-17",
//   pages: 1500,
// };
// upDateBook;

// // Template literals

// const summary = `${title},  a ${pages}-pages long book , was written by ${author} and published on ${getYear(
//   publicationDate
// )}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted into a movie.`;
// summary;

// const pagesRange = pages > 1000 ? "Over 1000 pages" : "Less than 1000 pages";
// pagesRange;

// function getYear(str) {
//   return str.split("-")[0];
// }
// console.log(getYear(publicationDate));
// console.log(true && "somestring");
// console.log(false && "somestring");
// console.log(hasMovieAdaptation && "this book has been adapted into a movie");

// //false , null, undefined, 0, NaN, "", -0

// console.log("phu" && "somestring");
// console.log(0 && "somestring");

// console.log(true || "somestring");
// console.log(false || "somestring");

// // console.log(book.translations.spanish || "No translation available");

// // const spanishTranslation =
// //   book.translations.spanish || "No translation available";

// // console.log(book.reviews.librarything.reviewsCount);

// // const countWrong = book.reviews.librarything.reviewsCount || "No data";

// // const count = book.reviews.librarything.reviewsCount ?? "No data";

// // console.log(count);
// // console.log(countWrong);

// function getTotalReviewCount(book) {
//   const goodRead = book.reviews?.goodreads?.reviewsCount;
//   const libraryThing = book.reviews?.librarything?.reviewsCount ?? 0;
//   libraryThing;
//   return goodRead + libraryThing;
// }

// console.log(getTotalReviewCount(book));

const book = getBook(2);
const x = [12, 23, 34].map((el) => el * 2);
console.log(x);

const titles = data.map((book) => book.title);
titles;

const essentialData = data.map((book) => {
  return {
    title: book.title,
    author: book.author,
    publicationDate: book.publicationDate,
    genres: book.genres,
  };
});
console.log(essentialData);

const longBooks = data
  .filter((book) => book.pages > 1000)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooks);

const adventureBooks = data
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

const pagesAllBooks = data.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);

const arr = [1, 7, 5, 4, 7];
const sorted = arr.sort((a, b) => a - b);
sorted;

const arr1 = [1, 7, 5, 4, 7];
const sorted1 = arr1.slice().sort((a, b) => b.pages - a.pages);
sorted1;
