import React from "react";
import dayjs from "dayjs";
import localizeFormat from "dayjs/plugin/localizedFormat";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

dayjs.extend(localizeFormat);

const InfoCard = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${data?.match_id}`);
  };
  return (
    <div
      className="flex bg-[rgba(225,225,225,0.05)] h-min-[70px] mt-3 w-[99%] mx-auto rounded-md cursor-pointer"
      onClick={handleClick}>
      <div className="w-1/6 text-white p-2 flex justify-center items-center">
        <span className="font-semibold">
          {data?.status_code === 0 && "Not Started"}
          {data?.status_code === 1 && "Playing"}
          {data?.status_code === 11 && "HT"}
          {data?.status_code === 3 && "FT"}
          {data?.status_code === 12 && "Extra Time"}
          {data?.status_code === 13 && "Penalty"}
          {data?.status_code === 32 && "ET"}
          {data?.status_code === 31 && "PS"}
          {data?.status_code === 17 && dayjs(data?.match_start).format("lll")}
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
          <span className="font-bold text-lg">{data?.stats?.home_score}</span>
        </div>
        <div className="py-2 text-right">
          <span className="font-bold text-lg">{data?.stats?.away_score}</span>
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
