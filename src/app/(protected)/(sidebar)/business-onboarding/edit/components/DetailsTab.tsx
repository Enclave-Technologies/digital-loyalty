import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HelpCircle, Plus } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Preview } from "./Preview";

export const DetailsTab = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Label>Card description</Label>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input placeholder="Loyalty Rewards Card" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Label>How your customers earn 1 stamp</Label>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <Textarea
                placeholder="Get 1 stamp for every regular sized coffee purchased."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Label>Business Name</Label>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input placeholder="Adex Group" />
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium">Reward Details</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Label>Reward Name</Label>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input placeholder="Coffee" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Label>Description</Label>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </div>
                <Textarea
                  placeholder="Get a free coffee of your choice after collecting all stamps."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Label>Stamp success message</Label>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input placeholder="[#] more stamps until your free coffee!" />
                <p className="text-sm text-muted-foreground">
                  You must include [#] in your stamp success message. This is a
                  placeholder for the number of stamps.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Label>Reward success message</Label>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input placeholder="Congrats! Your next coffee is on the house." />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Label>Expiry</Label>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <RadioGroup defaultValue="none" className="space-y-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="none" id="none" />
                  <Label htmlFor="none">None</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fixed-date" id="fixed-date" />
                  <Label htmlFor="fixed-date">Fixed date</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fixed-period" id="fixed-period" />
                  <Label htmlFor="fixed-period">
                    Fixed period after signup
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Useful Links</Label>
                  <p className="text-sm text-muted-foreground">
                    Tip: add a{" "}
                    <button className="text-blue-600 hover:text-blue-700">
                      link to your address
                    </button>{" "}
                    and make it easy for customers to find your business.
                  </p>
                </div>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-[1fr,1fr,auto] gap-4 items-center bg-purple-600 text-white p-3 rounded-t-lg">
                  <Label className="text-white">Text</Label>
                  <Label className="text-white">Link</Label>
                  <Label className="text-white">Type</Label>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-[1fr,1fr,auto] gap-4 items-center">
                    <Input placeholder="Follow us on Facebook" />
                    <Input placeholder="https://facebook.com/yourbusiness" />
                    <Select defaultValue="url">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="url">URL</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="address">Address</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Link
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:border-l lg:pl-8">
            <Preview />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
