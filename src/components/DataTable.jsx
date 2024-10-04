/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({columns,rows}) => {

  return (
    <div >
      <DataGrid 
        rows={rows}
        columns={columns}
        hideFooter
        autoHeight 
        rowHeight={70}
        pageSizeOptions={[5]}
        getRowId={(row) => row.timestamp}
        disableColumnResize
        disableRowSelectionOnClick
        disableColumnMenu 
        sx={{ 
            fontFamily:'cairo',
            fontSize:17,
            '& .css-1qb993p-MuiDataGrid-columnHeaderTitle': {
                        color: 'grey', 
                        fontSize: '17px', 
                        fontWeight: 'bold', 
                         
                    },
                         
                  
        }}
      />
    </div>
  );
};

export default DataTable;
