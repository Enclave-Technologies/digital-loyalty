import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { HelpCircle, Plus, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Preview } from "./Preview";

export const CustomTab = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
          <div className="space-y-8">
            {/* Add Custom Fields */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Add Custom Fields</h3>
              <p className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                Personalize your customers&apos; cards by adding custom fields.
              </p>

              {/* Custom Fields Table */}
              <div className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-[1fr,1fr] gap-4 items-center bg-purple-600 text-white p-3">
                  <div className="flex items-center gap-2">
                    <Label className="text-white">Label</Label>
                    <HelpCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Label className="text-white">Field to Display</Label>
                    <HelpCircle className="h-4 w-4 text-white" />
                  </div>
                </div>

                <div className="p-4 space-y-4">
                  <div className="grid grid-cols-[1fr,1fr] gap-4 items-start">
                    <Input defaultValue="STAMPS REQUIRED UNTIL NEXT REWARD" />
                    <div className="flex gap-2">
                      <Select defaultValue="stamps-required">
                        <SelectTrigger>
                          <SelectValue placeholder="Select field" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stamps-required">
                            Stamps required until next reward
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="ghost" size="icon" className="shrink-0">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Field
              </Button>
            </div>

            {/* Card Labels */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Card Labels</h3>
                  <p className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                    How to change card label text
                  </p>
                </div>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="space-y-6">
                {/* Labels Table */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="grid grid-cols-2 gap-4 items-center bg-purple-600 text-white p-3">
                    <Label className="text-white">Original Label Text</Label>
                    <Label className="text-white">New Label Text</Label>
                  </div>

                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        STAMPS REQUIRED UNTIL NEXT REWARD
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        LATEST UPDATES
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        HOW TO COLLECT STAMPS
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        REWARD DETAILS
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        REWARDS EARNED
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        USEFUL LINKS
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        TERMS & CONDITIONS
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        Read detailed terms and conditions
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        QUESTIONS ABOUT THIS CARD? CONTACT
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        Tap ... for details
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        Please enter your details
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        I have read and agree to the terms and conditions
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        Join Now!
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        We are busy generating your personal stamp card. Please
                        be patient...
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        You must agree to our terms and conditions to proceed.
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        Thank you for enrolling...
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        View your card in your Wallet
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        Didn&apos;t see your card?
                      </div>
                      <Input />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded text-foreground">
                        Tap to add it again
                      </div>
                      <Input />
                    </div>
                  </div>
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
