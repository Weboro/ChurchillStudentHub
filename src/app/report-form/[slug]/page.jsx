import { ReportFormSection } from "@/components";
import React from "react";

const ReportForm = ({ params }) => {
  const { slug } = params;  

  return (
    <main>
     <ReportFormSection slug={slug}/>
    </main>
  );
};

export default ReportForm;
