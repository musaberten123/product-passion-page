const Marquee = () => {
  const items = [
    "RAHATLIK",
    "KONFOR",
    "TEKNOLOJİ",
    "SAĞLIK",
    "RAHATLIK",
    "KONFOR",
    "TEKNOLOJİ",
    "SAĞLIK",
  ];

  return (
    <div className="overflow-hidden bg-primary py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-8 text-primary-foreground font-bold text-lg tracking-wider"
          >
            {item} ✦
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
