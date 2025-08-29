export default function BrandInfoCard({item,index}) {
    return (
      <>
        <div
          key={index}
          className="flex flex-col items-center text-center gap-2 p-3 md:p-4 border rounded-2xl shadow-sm"
        >
          {item.icon}
          <h3 className="text-base md:text-lg font-semibold text-[#111827]">
            {item.title}
          </h3>
          <p className="text-xs md:text-sm text-[#4B5563]">
            {item.Description}
          </p>
        </div>
      </>
    );
}