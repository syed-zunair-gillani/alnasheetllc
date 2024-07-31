import React from "react";
import ListScopeOfWork from "./ListScopeOfWork";
import CardScopeOfWork from "./CardScopeOfWork";

const ScopeOfWork = ({ data, background }: any) => {
  return (
    <section className={`${background && 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 items-center py-16 pt-12 ">
        <h2 className="text-[30px] text-center mb-10 tracking-tight font-semibold text-[#172554]">
          {data?.benefits_title}
        </h2>
        <div className={`grid grid-col-1 gap-5 md:grid-cols-2 `}>
          <ListScopeOfWork data={data} />
        </div>
      </div>
    </section>
  );
};

export default ScopeOfWork;
