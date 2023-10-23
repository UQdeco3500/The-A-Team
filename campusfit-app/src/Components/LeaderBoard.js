import React from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import dataSamples from '../Data/leaderboard.json';

const columns = [
  {
        name: 'Rank',
        id:'rank',
        selector: 'ranking',
        sortable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Total Hours',
    selector: 'total',
    sortable: true,
    cell: (row) => (
      <span>{formatHoursAndMinutes(row.total)}</span>
    ),
  },
  {
    name: 'Action',
    cell: (row) => (
      <Link to={`/userStats/${row.id}`} className="action-button">
        View
      </Link>
    ),
  },
];

function formatHoursAndMinutes(decimalValue) {
  const hours = Math.floor(decimalValue);
  const minutes = Math.round((decimalValue - hours) * 60);
  return `${hours} hours ${minutes} mins`;
}

function LeaderBoard() {
    return (
        <div>
            <h1 className='leaderboard-heading'>LEADERBOARD</h1>
            <DataTable
              title="Leaderboard"
              columns={columns}
              data={dataSamples}
                  noHeader
              defaultSortFieldId="rank"
              defaultSortAsc={true}
              customStyles={{
                  headRow: {
                    style:{ backgroundColor: 'rgb(108, 236, 105)',
                          fontWeight: 'bold',
                    }
                
                },

              }}
              pagination
              paginationComponentOptions={{
                rowsPerPageText: 'Rows per page:',
                  }}
              
                    />
        </div>
  );
}

export default LeaderBoard;
