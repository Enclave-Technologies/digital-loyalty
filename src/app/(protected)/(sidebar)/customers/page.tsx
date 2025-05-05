import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function CustomersPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      {/* <TableActions /> */}
      <DataTable
        columns={columns}
        data={[
          {
            id: "lp1",
            name: "Avishek Majumder",
            phone: "+852 59291909",
            created_at: new Date().toISOString(),
            created_by: "John Doe",
          },
        ]}
      />
    </div>
  );
}
