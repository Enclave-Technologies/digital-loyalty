"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Program = {
  id: string;
  name: string;
  description: string;
  customers_enrolled: number;
};

export const columns: ColumnDef<Program>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "users_enrolled",
    header: "Users Enrolled",
  },
];
