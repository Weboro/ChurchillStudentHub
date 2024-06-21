export const FilterComponent = ({ searchText, onSearchText }) => {
  return (
    <div className="px-4 py-6 rounded-xl bg-light-grey lg:w-[21rem] h-fit">
      <div className="flex flex-col gap-6">
        <h1
          className="font-extrabold text-xl lg:text-2xl pb-2 w-fit
        relative before:absolute before:bottom-0 before:left-0 before:w-1/3 before:h-1 before:bg-primary-orange before:transition-all
        "
        >
          Filter Dates
        </h1>
        <div className="flex relative bg-neutral-100 items-center rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search by Title"
            className="w-full h-full flex-1 px-2 py-4 transparent-background outline-none"
            value={searchText}
            onChange={(e) => onSearchText(e.target.value)}
          />

          <div className="absolute top-1/2 -translate-y-1/2 right-4 text-lg ">
            <i class="fi fi-br-search flex"></i>
          </div>
        </div>
        <button
          type="submit"
          className="px-6 py-4 bg-primary-orange rounded-md outline-none font-bold text-white hover:shadow-md "
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
