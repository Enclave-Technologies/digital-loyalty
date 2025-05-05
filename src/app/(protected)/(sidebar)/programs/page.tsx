import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function ProgramsPage() {
  return (
    <div className="container mx-auto py-10 gap-2">
      <Sheet>
        <SheetTrigger>
          <Button className="mb-4">+ New</Button>
        </SheetTrigger>
        <SheetContent className="w-[800px] sm:w-[800px]">
          <SheetHeader>
            <SheetTitle>Create New Program</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <DataTable
        columns={columns}
        data={[
          {
            id: "lp1",
            name: "Loyalty Program 1",
            description: "Receive 1 free coffee for every 10 purchased.",
            customers_enrolled: 100,
          },
          {
            id: "lp2",
            name: "Loyalty Program 2",
            description:
              "Refer a friend and receive 10% off your next purchase.",
            customers_enrolled: 100,
          },
        ]}
      />
    </div>
  );
}
