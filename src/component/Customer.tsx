import pic1 from "../assets/customer 1.avif";
import pic2 from "../assets/customer 2.avif";
import pic3 from "../assets/customer 3.avif";
import pic4 from "../assets/customer 4.avif";
import pic5 from "../assets/customer 5.avif";
import pic6 from "../assets/customer 6.avif";
import pic7 from "../assets/customer 7.avif";
import pic8 from "../assets/customer 8.avif";

const clothes = [
  {
    id: 1,
    name: "Nigeria X Brazil Football Shorts",
    color: "Green",
    price: "$184.00",
    link: "https://google.com",
    image: pic1,
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Nigeria X Brazil T-Shirt",
    color: "Off White",
    price: "$153.00",
    link: "https://google.com",
    image: pic2,
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Ashluxe Contrast Sport Jersey",
    color: "Blue White",
    price: "$214.00",
    link: "https://google.com",
    image: pic3,
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Ashluxe Festac Festac 77 Zig Jersey",
    color: "Black",
    price: "$133.00",
    link: "https://google.com",
    image: pic4,
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Ashluxe Festac Festac 77 Zig Jersey",
    color: "Multi Green Yellow",
    price: "$133.00",
    link: "https://google.com",
    image: pic5,
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Ashluxe Double Zero Jersey",
    color: "Yellow",
    price: "$138.00",
    link: "https://google.com",
    image: pic6,
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Ashluxe Festac Festac 77 Zig Jersey",
    color: "Cream Pink",
    price: "$133.00",
    link: "https://google.com",
    image: pic7,
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Ashluxe Cycling Jersey",
    color: "Yellow Blue",
    price: "$174.00",
    link: "https://google.com",
    image: pic8,
    size: ["S", "M", "L", "XL"],
  },
];

const Customer = () => {
  return (
    <div>
      <div className="min-h-max w-full max-w-screen mx-auto border p-1 lg:p-20 pt-10 lg:pt-0">
        <div>
          <h1 className="text-xl pt-5 pl-5 lg:pl-0 font-medium">
            Customers also viewed
          </h1>
          <div className="flex overflow-x-auto space-x-4 no-scrollbar pt-10">
            {clothes.map((cloth) => (
              <div
                key={cloth.id}
                onClick={() => (window.location.href = cloth.link)}
                className="lg:min-w-[300px] rounded-lg p-2 cursor-pointer text-sm lg:text-lg group"
              >
                <div className="relative w-36 lg:w-64 h-48 lg:h-80 overflow-hidden rounded-lg">
                  <img
                    src={cloth.image}
                    alt=""
                    className="bg-[#EFEFF0] rounded-xl mb-5 w-full h-full object-cover transition-opacity duration-500 group-hover:scale-110"
                  />
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

export default Customer;
