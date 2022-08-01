import React from "react";
import { useParams } from "react-router-dom";
import { useGetMatchByIdQuery } from "../services/requestFootballAPI";

const Summary = () => {
  const { matchId: id } = useParams();
  const { data: match } = useGetMatchByIdQuery({ id });

  return (
    <section className="w-5/6 bg-[#181818] mx-auto my-4 rounded-md border border-gray-500 h-min">
      {match?.data?.match_events?.map((event) => {
        if (event.type === "back from injury") {
          return (
            <div
              className={`w-[100%] border-b border-b-gray-500 text-white min-h-[3rem] p-3 text-${
                event.team_id === match?.data?.home_team?.team_id
                  ? "left"
                  : "right"
              }`}>
              <span className="text-lg">
                {`${event?.minute + event?.extra_minute}' `}
                {event.player_name}
                {" 🩹 "}
                {event.result}
              </span>
            </div>
          );
        }
        if (event.type === "yellowcard") {
          return (
            <div
              className={`w-[100%] border-b border-b-gray-500 text-white min-h-[3rem] p-3 text-${
                event.team_id === match?.data?.home_team?.team_id
                  ? "left"
                  : "right"
              }`}>
              <span className="text-lg">
                {`${event?.minute + event?.extra_minute}' `}
                {event?.player_name}
                {" 🟨 "}
                {event?.result}
              </span>
            </div>
          );
        }
        if (event.type === "redcard") {
          return (
            <div
              className={`w-[100%] border-b border-b-gray-500 text-white min-h-[3rem] p-3 text-${
                event.team_id === match?.data?.home_team?.team_id
                  ? "left"
                  : "right"
              }`}>
              <span className="text-lg">
                {`${event?.minute + event?.extra_minute}' `}
                {event?.player_name}
                {" 🟥 "}
                {event?.result}
              </span>
            </div>
          );
        }
        if (event.type === "goal") {
          return (
            <div
              className={`w-[100%] border-b border-b-gray-500 text-white min-h-[3rem] p-3 text-${
                event.team_id === match?.data?.home_team?.team_id
                  ? "left"
                  : "right"
              }`}>
              <span className="text-lg">
                {`${event?.minute + event?.extra_minute}' `}
                {event?.player_name}
                {" ⚽ "}
                {event?.result}
              </span>
            </div>
          );
        }
        if (event.type === "substitution") {
          return (
            <div
              className={`w-[100%] border-b border-b-gray-500 text-white min-h-[3rem] p-3 text-${
                event.team_id === match?.data?.home_team?.team_id
                  ? "left"
                  : "right"
              }`}>
              <span className="text-lg">
                {`${event?.minute + event?.extra_minute}' `}
                {event?.player_name}
                {" 🔄 "}
                {event.related_player_name}
                {event?.result}
              </span>
            </div>
          );
        }
        if (event.type === "injury") {
          return (
            <div
              className={`w-[100%] border-b border-b-gray-500 text-white min-h-[3rem] p-3 text-${
                event.team_id === match?.data?.home_team?.team_id
                  ? "left"
                  : "right"
              }`}>
              <span className="text-lg">
                {`${event?.minute + event?.extra_minute}' `}
                {event?.player_name}
                {" 🤕 "}
                {event?.result}
              </span>
            </div>
          );
        }
      }) || (
        <span className="text-white text-lg inline-block mx-auto p-4">
          No data to show ! either because the game has not started yet or there
          was no description available
        </span>
      )}
    </section>
  );
};

export default Summary;
