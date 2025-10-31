import pic1 from "../assets/recent 1.avif";
import pic2 from "../assets/recent 2.avif";
import pic3 from "../assets/recent 3.avif";
import pic4 from "../assets/recent 4.avif";
import pic5 from "../assets/recent 5.avif";
import pic6 from "../assets/recent 6.avif";
import pic7 from "../assets/recent 7.avif";
import pic8 from "../assets/recent 8.avif";

const clothes = [
  {
    id: 1,
    name: "Ashluxe Ribbed Turtleneck Tee",
    color: "Black",
    price: "$133.00",
    link: "https://google.com",
    image: pic1,
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Ashluxe Classic Satin Logo Swimshort",
    color: "Navy",
    price: "$153.00",
    link: "https://google.com",
    image: pic2,
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Ashluxe Pixel Ruched Female Jersey",
    color: "Blue Black",
    price: "$102.00",
    link: "https://google.com",
    image: pic3,
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Ashluxe Threaded Tank Top",
    color: "White Black",
    price: "$62.00",
    link: "https://google.com",
    image: pic4,
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Flame T-shirt",
    color: "Black",
    price: "$153.00",
    link: "https://google.com",
    image: pic5,
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Ashluxe Festac Heritage Tee",
    color: "Green",
    price: "$211.00",
    link: "https://google.com",
    image: pic6,
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Ashluxe Digital Print Sport Jersey",
    color: "Black",
    price: "$221.00",
    link: "https://google.com",
    image: pic7,
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Ash American 24 Jersey",
    color: "Black",
    price: "$184.00",
    link: "https://google.com",
    image: pic8,
    size: ["S", "M", "L", "XL"],
  },
];

const Recent = () => {
  return (
    <div>
      <div className="min-h-max w-full max-w-screen mx-auto border p-20">
        <div>
          <h1 className="text-xl pt-5 font-medium">Recently viewed</h1>
          <div className="flex overflow-x-auto space-x-4 no-scrollbar pt-10">
            {clothes.map((cloth) => (
              <div
                key={cloth.id}
                onClick={() => (window.location.href = cloth.link)}
                className="min-w-[300px] rounded-lg p-2 cursor-pointer group"
              >
                <div className="relative w-64 h-80 overflow-hidden rounded-lg">
                  <img
                    src={cloth.image}
                    alt=""
                    className="bg-[#EFEFF0] rounded-xl mb-5 w-full h-full object-cover transition-opacity duration-500 group-hover:scale-110"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Text on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-white text-lg font-semibold bg-black/60 px-3 py-1 rounded-lg">
                      Shop Now
                    </span>
                  </div>
                </div>
                <h1 className="font-semibold pt-5">{cloth.name}</h1>
                <h1>{cloth.color}</h1>
                <b>{cloth.price}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
