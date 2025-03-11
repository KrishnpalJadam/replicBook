import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Sallessupoortchatboard from "./Userpages/Sallessupoortchatboard";

const Library = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      category: "Strategic Thinking",
      books: [
        { id: 1, title: "Educational Videos 1", image: "https://i.ibb.co/svcNtqb2/1.png" },
        { id: 2, title: "Educational Videos 2", image: "https://i.ibb.co/svcNtqb2/1.png" },
      ],
    },
    {
      category: "Financial Freedom",
      books: [
        { id: 3, title: "Financial Freedom 1", image: "https://i.ibb.co/VYbJhZSY/98bb78b2-9aba-458a-a564-6aeb3d0c547a.jpg" },
        { id: 4, title: "Financial Freedom 2", image: "https://i.ibb.co/VYbJhZSY/98bb78b2-9aba-458a-a564-6aeb3d0c547a.jpg" },
      ],
    },
    {
      category: "Healthy Habits",
      books: [
        { id: 5, title: "Healthy Habits 1", image: "https://i.ibb.co/0Lv2snc/3.png" },
        { id: 6, title: "Healthy Habits 2", image: "https://i.ibb.co/0Lv2snc/3.png" },
      ],
    },
    {
      category: "Mastering Relationships",
      books: [
        { id: 7, title: "Mastering Relationships 1", image: "https://i.ibb.co/V00PdBGp/4.png" },
        { id: 8, title: "Mastering Relationships 2", image: "https://i.ibb.co/V00PdBGp/4.png" },
      ],
    },
    {
      category: "Inspirational Biographies",
      books: [
        { id: 9, title: "Inspirational Biographies 1", image: "https://i.ibb.co/KjPb57tg/5.png" },
        { id: 10, title: "Inspirational Biographies 2", image: "https://i.ibb.co/KjPb57tg/5.png" },
      ],
    },
    {
      category: "Personal Development",
      books: [
        { id: 11, title: "Personal Development 1", image: "https://i.ibb.co/chfGcpmZ/6.png" },
        { id: 12, title: "Personal Development 2", image: "https://i.ibb.co/chfGcpmZ/6.png" },
      ],
    },
  ];

  return (
    <div className="library-page" style={{ paddingTop: "70px" }}>
      {/* Sales Support Button aligned to the right */}
   {/* <Sallessupoortchatboard/> */}


      {categories.map((categoryData, index) => (
        <section key={index} className="books-section p-3 rounded-4" style={{ border: "1px solid #fcd34d" }}>
          <h2>{categoryData.category}</h2>

          {/* Horizontal Scroll Container */}
          <div className="horizontal-scroll-container">
            {categoryData.books.map((book) => (
              <Link to="/bookDetails">
              <div className="book-card-wrapper" key={book.id}>
                <div className="book-card">
                  <img src={book.image} alt={book.title} />
                  <div className="book-title-overlay">{book.title}</div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Library;
