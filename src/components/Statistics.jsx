import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function Statistics ({ employees }) {
  const rows = employees.map((emp) => ({
    id: emp.id,
    name: emp.name,
    title: emp.title,
    salary: emp.salary,
    phone: emp.phone,
    email: emp.email,
    animal: emp.animal,
    startDate: emp.startDate,
    location: emp.location,
    department: emp.department,
    skills: emp.skills?.join(", "),
  }));

  const columns = [
    { field: "id", headerName: "ID", width: 30 },
    { field: "name", headerName: "Name", width: 140 },
    { field: "title", headerName: "Title", width: 180 },
    { field: "salary", headerName: "Salary", width: 60 },
    { field: "phone", headerName: "Phone", width: 120 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "animal", headerName: "Animal", width: 100 },
    { field: "startDate", headerName: "Start Date", width: 100 },
    { field: "location", headerName: "Location", width: 110 },
    { field: "department", headerName: "Department", width: 150 },
    { field: "skills", headerName: "Skills", width: 240 },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          pagination: { paginationModel: { pageSize: 25 } },
          sorting: { sortModel: [{ field: "name", sort: "asc" }] },
        }}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}
