"use client";

import { ColumnDef } from "@tanstack/react-table";

export type User = {
  id: string;
  name: string;
  phone: string;
  created_at: string;
  created_by: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
  },
  {
    accessorKey: "created_by",
    header: "Created By",
  },
];
