import { useState } from "react";
import { Link } from "react-router-dom";
import tableData from "../TableData";

 function ListProjects() {
  const [data, setData] = useState(tableData);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.ID !== id);
    setData(updatedData);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="container">
        <div className="py-4">
          <table className="table table-bordered table-hover shadow">
            <thead>
              <tr>
                <th scope="col" className="text-center" style={{ width: "1%" }}>ID</th>
                <th scope="col" className="text-center" style={{ width: "10%" }}>Name</th>
                <th scope="col" className="text-center" style={{ width: "35%" }}>Description</th>
                <th scope="col" className="text-center" style={{ width: "5%" }}>Start Date</th>
                <th scope="col" className="text-center" style={{ width: "5%" }}>End Date</th>
                <th scope="col" className="text-center" style={{ width: "15%" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.ID}>
                  <td>{item.ID}</td>
                  <td>{item.Name}</td>
                  <td>{item.Description}</td>
                  <td>{item.StartDate}</td>
                  <td>{item.EndDate}</td>
                  <td>
                    <Link className="btn btn-primary mx-2">View</Link>
                    <Link className="btn btn-outline-primary mx-2">Edit</Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => handleDelete(item.ID)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListProjects;