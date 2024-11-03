import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../Utilities/addToDb";
// import Book from "../Book/Book";
import ReadListDetail from "../ReadListDetail/ReadListDetail";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);

  // Ideally we will directly get the read book lists from the database

  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    // not the best way to get stored data
    console.log(storedReadList, allBooks, storedReadListInt);

    //
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  return (
    <div className="mt-10 mb-10">
      <h3 className="text-3xl my-8">Listed Books</h3>

      <Tabs>
        <TabList>
          <Tab>Read Lists</Tab>
          <Tab>Wishlists</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I Read: {readList.length}</h2>
          <div className="">
            {readList.map((book) => (
              <ReadListDetail book={book} key={book.bookId}></ReadListDetail>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
