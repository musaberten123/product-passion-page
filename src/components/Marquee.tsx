const Marquee = () => {
  const items = [
    "COMFORT",
    "RELIEF",
    "TECHNOLOGY",
    "WELLNESS",
    "COMFORT",
    "RELIEF",
    "TECHNOLOGY",
    "WELLNESS",
  ];

  return (
    <div className="overflow-hidden bg-primary py-2.5 md:py-4">
      <div className="flex whitespace-nowrap animate-[marquee_5s_linear_infinite]">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-4 md:mx-8 text-primary-foreground font-bold text-sm md:text-lg tracking-wider flex-shrink-0"
          >
            {item} ✦
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
