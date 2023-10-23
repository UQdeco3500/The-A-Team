import React from 'react';

function DataTable() {
  // You can use your DataTable logic here
  return (
    <table id="leaderBoard" className="display">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Total Hours</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* Data rows will be populated here */}
      </tbody>
    </table>
  );
}

export default DataTable;
