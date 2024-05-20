import { ReportFormSection } from "@/components";
import React from "react";

const ReportForm = ({ params }) => {
  const { slug } = params;  

  return (
    <main className="min-h-[80vh]">
     <ReportFormSection slug={slug}/>
    </main>
  );
};

export default ReportForm;
