import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Settings2,
  FileText,
  HelpCircle,
  Database,
  Palette,
} from "lucide-react";
import { DesignTab } from "../components/DesignTab";
import { DetailsTab } from "../components/DetailsTab";
import { SupportTab } from "../components/SupportTab";
import { DataTab } from "../components/DataTab";
import { CustomTab } from "../components/CustomTab";

interface PageProps {
  params: {
    templateId: string;
  };
}

const TemplateEditPage = ({ params }: PageProps) => {
  console.log(params);

  return (
    <div className="container max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Edit Template</h1>
        <div className="flex gap-2">
          <Button variant="outline">Save</Button>
          <Button
            variant="default"
            className="bg-purple-600 hover:bg-purple-700"
          >
            Save & Preview
          </Button>
        </div>
      </div>

      <Tabs defaultValue="design" className="space-y-6">
        <TabsList className="w-full justify-start border-b rounded-none bg-transparent p-0 h-auto">
          <TabsTrigger
            value="design"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
          >
            <Palette className="h-4 w-4 mr-2" />
            Design
          </TabsTrigger>
          <TabsTrigger
            value="details"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
          >
            <FileText className="h-4 w-4 mr-2" />
            Details
          </TabsTrigger>
          <TabsTrigger
            value="support"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
          >
            <HelpCircle className="h-4 w-4 mr-2" />
            Support
          </TabsTrigger>
          <TabsTrigger
            value="data"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
          >
            <Database className="h-4 w-4 mr-2" />
            Data
          </TabsTrigger>
          <TabsTrigger
            value="custom"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
          >
            <Settings2 className="h-4 w-4 mr-2" />
            Custom
          </TabsTrigger>
        </TabsList>

        <TabsContent value="design">
          <DesignTab />
        </TabsContent>

        <TabsContent value="details">
          <DetailsTab />
        </TabsContent>

        <TabsContent value="support">
          <SupportTab />
        </TabsContent>

        <TabsContent value="data">
          <DataTab />
        </TabsContent>

        <TabsContent value="custom">
          <CustomTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TemplateEditPage;
