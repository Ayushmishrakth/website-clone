import Image from "next/image";

const PromoShowcase = () => {
  const promos = [
    {
      id: 1,
      src: "/images/halloween-handouts.png",
      title: "Priced to Thrill",
      subtitle: "Halloween Handouts starting at $2.79",
    },
    {
      id: 2,
      src: "/images/stem-kits.png",
      title: "STEM Education Craft Kits",
      subtitle: "Shop Now",
    },
    {
      id: 3,
      src: "/images/fall-crafts.png",
      title: "Score on Football Essentials",
      subtitle: "Starting at $2.79",
    },
    {
      id: 4,
      src: "/images/football-essentials.png",
      title: "Fall Crafts",
      subtitle: "Shop Now",
    },
    {
      id: 5,
      src: "/images/grandparents.png",
      title: "Grandparents Day",
      subtitle: "Starting at $6.79",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {promos.map((promo) => (
          <div
            key={promo.id}
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={promo.src}
                alt={promo.title}
                width={600}
                height={400}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white transform group-hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-lg font-bold group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
                {promo.title}
              </h3>
              <p className="text-sm opacity-90">{promo.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoShowcase;
