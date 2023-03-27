
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./datasource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction flex items-center gap-[20px]">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton pl-[5px] pr-[5px] pt-[2px] pb-[2px] rounded-[5px] text-blue-800 border-dotted border-[1px] border-[rgba(0, 0, 139, 0.596)] cursor-pointer">View</div>
            </Link>
            <div
              className="deleteButton pl-[5px] pr-[5px] pt-[2px] pb-[2px] rounded-[5px] text-red-800 border-dotted border-[1px] border-[rgba(220, 20, 60, 0.6)] cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
  <div className="datatable h-[600px] p-[30px]">

      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
  </div>
  
  );
};

export default Datatable;