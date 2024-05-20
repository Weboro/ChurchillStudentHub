import React from "react";
import { PoliciesDetails } from "@/components";

const Policies = ({ params }) => {
  const { slug } = params;
  return (
    <main className="min-h-[80vh]">
      <PoliciesDetails slug={slug} />
    </main>
  );
};

export default Policies;
