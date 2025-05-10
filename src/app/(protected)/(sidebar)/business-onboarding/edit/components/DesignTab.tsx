import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ImageIcon, UploadIcon, HelpCircle } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Preview } from "./Preview";

export const DesignTab = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Label>Type</Label>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <RadioGroup defaultValue="single" className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="single" id="single" />
                  <Label htmlFor="single">Single Reward</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="multi" id="multi" />
                  <Label htmlFor="multi">Multi Reward</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label>Images</Label>
              <div className="grid gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Label className="text-sm">Icon</Label>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-center p-6 border border-dashed rounded-lg cursor-pointer hover:border-purple-600 transition-colors">
                    <div className="flex flex-col items-center gap-2">
                      <UploadIcon className="h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Upload Icon
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Recommended size: 87x87 pixels. Must be square.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Label className="text-sm">Logo</Label>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-center p-6 border border-dashed rounded-lg cursor-pointer hover:border-purple-600 transition-colors">
                    <div className="flex flex-col items-center gap-2">
                      <UploadIcon className="h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Upload Logo
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Recommended size: 480x150 pixels. Should have a minimum
                        height of 150px and a maximum width of (height x 3.2).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Label>Number of Stamps</Label>
              <Input
                type="number"
                defaultValue={10}
                min={1}
                max={20}
                className="mt-2"
              />
            </div>

            <div className="space-y-4">
              <Label>Stamped Image</Label>
              <div className="grid gap-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <Input placeholder="Select stamped image..." />
                  <Button variant="outline" size="icon">
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-center p-6 border border-dashed rounded-lg cursor-pointer hover:border-purple-600 transition-colors">
                  <div className="flex flex-col items-center gap-2">
                    <UploadIcon className="h-8 w-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Upload Stamped Image
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Minimum square resolution of 200 x 200 px
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Unstamped Image</Label>
              <div className="grid gap-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <Input placeholder="Select unstamped image..." />
                  <Button variant="outline" size="icon">
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-center p-6 border border-dashed rounded-lg cursor-pointer hover:border-purple-600 transition-colors">
                  <div className="flex flex-col items-center gap-2">
                    <UploadIcon className="h-8 w-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Upload Unstamped Image
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Minimum square resolution of 200 x 200 px
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="use-stamped" />
                  <Label htmlFor="use-stamped">
                    Use stamped image for unstamped state
                  </Label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Colors</Label>
              <div className="grid gap-4">
                <div>
                  <Label className="text-sm">Card Background</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-8 h-8 rounded border bg-[rgb(255,109,0)]"></div>
                    <Input defaultValue="rgb(255,109,0)" />
                  </div>
                </div>
                <div>
                  <Label className="text-sm">Text Color</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-8 h-8 rounded border bg-[rgb(255,255,255)]"></div>
                    <Input defaultValue="rgb(255,255,255)" />
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
