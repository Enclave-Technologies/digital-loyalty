import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle, Plus, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Preview } from "./Preview";

export const DataTab = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
          <div className="space-y-8">
            {/* Data Collection */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium">Data Collection</h3>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                Ask your customers to enter their details before installing your
                card. The fields you select below will appear on your enrollment
                page.
              </p>
              <Button
                variant="link"
                className="text-blue-600 hover:text-blue-700 p-0 h-auto"
              >
                Why collect data and what data should I collect?
              </Button>

              {/* Data Collection Table */}
              <div className="space-y-4 border rounded-lg overflow-hidden">
                <div className="grid grid-cols-[1fr,1fr,auto,auto] gap-4 items-center bg-purple-600 text-white p-3">
                  <Label className="text-white">Description</Label>
                  <Label className="text-white">Format</Label>
                  <Label className="text-white">Mandatory</Label>
                  <span></span>
                </div>

                {/* Field Rows */}
                <div className="space-y-4 p-4">
                  <div className="grid grid-cols-[1fr,1fr,auto,auto] gap-4 items-center">
                    <Input defaultValue="Name" />
                    <Select defaultValue="text">
                      <SelectTrigger>
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text">Text</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="tel">
                          Mobile/telephone number
                        </SelectItem>
                        <SelectItem value="date">Date</SelectItem>
                      </SelectContent>
                    </Select>
                    <Switch defaultChecked />
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-[1fr,1fr,auto,auto] gap-4 items-center">
                    <Input defaultValue="Email address" />
                    <Select defaultValue="email">
                      <SelectTrigger>
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text">Text</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="tel">
                          Mobile/telephone number
                        </SelectItem>
                        <SelectItem value="date">Date</SelectItem>
                      </SelectContent>
                    </Select>
                    <Switch defaultChecked />
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-[1fr,1fr,auto,auto] gap-4 items-center">
                    <Input defaultValue="Contact Number" />
                    <Select defaultValue="tel">
                      <SelectTrigger>
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text">Text</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="tel">
                          Mobile/telephone number
                        </SelectItem>
                        <SelectItem value="date">Date</SelectItem>
                      </SelectContent>
                    </Select>
                    <Switch />
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-[1fr,1fr,auto,auto] gap-4 items-center">
                    <Input defaultValue="Birthday" />
                    <Select defaultValue="date">
                      <SelectTrigger>
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text">Text</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="tel">
                          Mobile/telephone number
                        </SelectItem>
                        <SelectItem value="date">Date</SelectItem>
                      </SelectContent>
                    </Select>
                    <Switch />
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Field
              </Button>
            </div>

            {/* Country Selection */}
            <div className="space-y-4">
              <Label>Select a default country for phone number field(s)</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="gb">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  {/* Add more countries as needed */}
                </SelectContent>
              </Select>
            </div>

            {/* Unique Customer Enrollments */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Label>Unique Customer Enrollments</Label>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </div>
                <Switch />
              </div>
              <p className="text-sm text-muted-foreground">
                Enable automatic checks against unique customer field(s) to
                prevent the same customer from enrolling more than once. You can
                select a maximum of 3 unique fields.
              </p>
            </div>

            {/* Data Consent */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Data Consent</h3>
                <p className="text-sm text-muted-foreground">
                  Ask your customers to agree that their personal data may be
                  used for direct marketing purposes.
                </p>
                <Button
                  variant="link"
                  className="text-blue-600 hover:text-blue-700 p-0 h-auto"
                >
                  Why ask your customers to agree to sharing their personal
                  data?
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Label>Data Consent Landing Page Text</Label>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Label>Disabled</Label>
                    <Switch />
                  </div>
                </div>
                <Textarea
                  className="min-h-[100px]"
                  placeholder="I agree that my personal data can be used and provided for direct marketing purposes in accordance with _______________."
                />
                <div className="flex items-center gap-2">
                  <Switch />
                  <Label>
                    Have the data consent checkbox on the landing page checked
                    by default.
                  </Label>
                </div>
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
