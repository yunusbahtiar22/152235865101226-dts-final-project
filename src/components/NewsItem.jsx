import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const NewsItem = ({ news }) => {
  return (
    <div className="w-[350px] bg-[#181818] rounded-md border border-gray-500 cursor-pointer">
      <figure className="w-[98%] rounded-md mx-auto mt-1 mb-3">
        <img
          src={news?.image_url}
          alt={news?.title}
          width="340px"
          height="191px"
        />
        <figcaption className="p-5">
          <p className="text-white">
            {news?.source_id} &middot; {dayjs(news?.pubDate).fromNow()}
          </p>
          <a href={news?.link} rel="noreferrer" target="_blank">
            <h4 className="text-white font-bold">{news?.title}</h4>
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default NewsItem;
