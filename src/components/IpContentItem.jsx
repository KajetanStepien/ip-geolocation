export function IpContentItem({ title, content }) {
  return (
    <div className="min-h-[25%] lg:min-w-[25%] lg:p-10 flex flex-col items-center">
      <span className="text-sm md:text-md text-lightgray font-[500] tracking-tight my-4">
        {title}
      </span>
      <h2 className="text-darkgray font-[700] text-md md:text-lg lg:text-3xl text-center whitespace-normal">
        {content}
      </h2>
    </div>
  );
}
