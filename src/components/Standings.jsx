import React from "react";

const Standings = () => {
  return (
    <section className="w-3/6 bg-[#181818] mx-auto my-4 rounded-md border border-gray-500 h-min">
      <table className="table-auto text-white">
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
          </tr>
        </thead>
      </table>
    </section>
  );
};

export default Standings;
