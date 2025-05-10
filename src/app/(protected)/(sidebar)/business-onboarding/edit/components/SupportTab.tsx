import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Preview } from "./Preview";

export const SupportTab = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
          <div className="space-y-8">
            {/* Terms & Conditions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Label>Terms & Conditions</Label>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center gap-2">
                  <Label htmlFor="enabled" className="text-sm">
                    Enabled
                  </Label>
                  <Switch id="enabled" />
                </div>
              </div>
              <Textarea
                className="min-h-[200px]"
                placeholder="Enter your terms and conditions..."
                defaultValue={`1. Get 1 stamp for every regular sized coffee purchased.
2. Collect 10 stamps to receive a free coffee.
3. Stamps and rewards cannot be exchanged, refunded, replaced or redeemed for cash.
4. We reserve the right of final decisions in case of any disputes.`}
              />
            </div>

            {/* Link to full terms */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Label>Link to full terms and conditions (optional)</Label>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input placeholder="http://www.yourbusiness.com/termsandconditions" />
            </div>

            {/* Card Issuer Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Card Issuer Details
                </h3>
                <p className="text-sm text-muted-foreground">
                  Please provide contact information for customers who have
                  queries, complaints, or claims with respect to your digital
                  stamp card.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label>Business Name</Label>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input placeholder="Adex Group" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label>Email</Label>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input placeholder="pease@enclave.live" type="email" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label>Phone</Label>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input placeholder="+1 (555) 123-4567" type="tel" />
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
