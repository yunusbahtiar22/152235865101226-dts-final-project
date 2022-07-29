import React from "react";
import dayjs from "dayjs";
import localizeFormat from "dayjs/plugin/localizedFormat";
import { FaStar } from "react-icons/fa";

dayjs.extend(localizeFormat);

const InfoCard = ({ data }) => {
  return (
    <div className="flex bg-[rgba(225,225,225,0.05)] h-min-[70px] mt-3 w-[99%] mx-auto rounded-md cursor-pointer">
      <div className="w-1/6 text-white p-2 flex justify-center items-center">
        <span className="font-semibold">
          {data?.status === "finished"
            ? "FT"
            : dayjs(data?.match_start).format("lll")}
        </span>
      </div>
      <div className="px-5 w-5/6">
        <div className="py-2">
          <img
            className="inline"
            width="30px"
            height="30px"
            src={data?.home_team?.logo}
            alt={data?.home_team?.name}
          />
          <span className="font-semibold ml-3 text-white text-xl">
            {data?.home_team?.name}
          </span>
        </div>
        <div className="py-2">
          <img
            className="inline"
            width="30px"
            height="30px"
            src={data?.away_team?.logo}
            alt={data?.away_team?.name}
          />
          <span className="font-semibold ml-3 text-white text-xl">
            {data?.away_team?.name}
          </span>
        </div>
      </div>
      <div className="w-1/6 p-1 text-white">
        <div className="py-2 text-right">
          <span className="font-bold text-lg">
            {data?.stats?.ft_score?.split("")[0] | 0}
          </span>
        </div>
        <div className="py-2 text-right">
          <span className="font-bold text-lg">
            {data?.stats?.ft_score?.split("")[2] | 0}
          </span>
        </div>
      </div>
      <div className="w-1/6 p-1 flex justify-center items-center">
        <button className="font-bold text-3xl hover:text-orange-500">
          <FaStar />
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
