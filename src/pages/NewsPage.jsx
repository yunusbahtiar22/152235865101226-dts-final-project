import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsItem from "../components/NewsItem";
import { useGetLatestNewsQuery } from "../services/requestNewsAPI";

const NewsPage = () => {
  const {
    data: newsData,
    isLoading,
    isError,
  } = useGetLatestNewsQuery({ page: 1 });
  // let news = [...newsData.results];
  // const handleClick = () => {
  //   if (page <= 10) {
  //     setDisable(true);
  //   } else {
  //     setPage((page) => page + 1);
  //     news = news.concat(newsData.results);
  //   }
  // };
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen my-10">
        <div className="w-[90%] mx-auto justify-center my-4 flex flex-wrap gap-2">
          {isError && (
            <p className="text-white text-lg text-center">
              Something went wrong
            </p>
          )}
          {isLoading && (
            <p className="text-white text-lg text-center">Loading...</p>
          )}
          {newsData?.results?.map((item) => (
            <NewsItem news={item} />
          ))}
        </div>
        {/* {disable && (
          <div className="w-max mx-auto">
            <button className="rounded-xl p-1 bg-gray-500 text-white">
              Load More
            </button>
          </div>
        )} */}
      </main>
      <Footer />
    </>
  );
};

export default NewsPage;
