const Marquee = () => {
  const items = [
    "COMFORT",
    "RELIEF",
    "TECHNOLOGY",
    "WELLNESS",
  ];

  const content = items.map((item, index) => (
    <span
      key={index}
      className="mx-4 md:mx-8 text-primary-foreground font-bold text-sm md:text-lg tracking-wider flex-shrink-0"
    >
      {item} ✦
    </span>
  ));

  return (
    <div className="overflow-hidden bg-primary py-2.5 md:py-4">
      <div className="flex">
        <div className="flex whitespace-nowrap animate-[scroll_8s_linear_infinite]">
          {content}{content}{content}{content}
        </div>
        <div className="flex whitespace-nowrap animate-[scroll_8s_linear_infinite]">
          {content}{content}{content}{content}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
