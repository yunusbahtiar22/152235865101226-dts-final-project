import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetMatchByIdQuery,
  useGetRefereeByIdQuery,
} from "../services/requestFootballAPI";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

const Info = () => {
  const { matchId: id } = useParams();
  const { data: match } = useGetMatchByIdQuery({ id });
  const { data: referee } = useGetRefereeByIdQuery({
    id: `${match?.data?.referee_id}`,
  });

  return (
    <section className="w-5/6 bg-[#181818] mx-auto my-4 rounded-md border border-gray-500 h-min">
      <div className="w-[100%] border-b border-b-gray-500 text-white min-h-[3rem] p-3">
        <span>📅 Date : {dayjs(match?.data?.match_start).format("lll")}</span>
      </div>
      <div className="w-[100%] border-b border-b-gray-500 text-white min-h-[3rem] p-3">
        <span>🏁 Referee : {referee?.data?.name}</span>
      </div>
      <div className="w-[100%] text-white min-h-[3rem] p-3">
        <span>
          📍 Stadium : {match?.data?.venue?.name} &middot;{" "}
          {match?.data?.venue?.city}
        </span>
      </div>
    </section>
  );
};

export default Info;
