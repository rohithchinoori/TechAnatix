import "./index.css";

import Header from "../Header";
import Footer from "../Footer";
const destination = [
  {
    id: 1,
    name: "New Delhi",
    img:
      "https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg",
  },
  {
    id: 2,
    name: "Mumbai",
    img:
      "https://tse2.mm.bing.net/th?id=OIP.l3rZmv55E6mhsilaRDrUuwHaEK&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    name: "Goa",
    img:
      "https://tse4.mm.bing.net/th?id=OIP.ZGfpTeUA81kVkjltNXLh2QHaFd&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    name: "PortBlair",
    img:
      "https://tse2.mm.bing.net/th?id=OIP.66fcGVy7H6QloaDpNt1J6gHaE8&pid=Api&P=0&h=180",
  },
  {
    id: 5,
    name: "Paris",
    img:
      "https://tse4.mm.bing.net/th?id=OIP.bRj4izFFhxNenwjolaX0tAHaFj&pid=Api&P=0&h=180",
  },
  {
    id: 6,
    name: "New York",
    img:
      "https://tse1.mm.bing.net/th?id=OIP.RNNFsmko6NTL1Ez_Nkyc2wHaE7&pid=Api&rs=1&c=1&qlt=95&w=149&h=99",
  },
  {
    id: 7,
    name: "Maldives",
    img:
      "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    name: "Dubai",
    img:
      "https://i.pinimg.com/originals/bf/7b/48/bf7b48f812ad2ed9dceb860f49d7c803.jpg",
  },
  {
    id: 9,
    name: "SriLanka",
    img:
      "https://tse3.mm.bing.net/th?id=OIP.7P43E_IRQY24a7cF0gwPngHaE7&pid=Api&P=0&h=180",
  },
];

const Home = () => (
  <div>
    <Header />
    <div>
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-travel-twitter-header_23-2149123013.jpg?w=1380&t=st=1700444219~exp=1700444819~hmac=b357cb9f51c3030f616c72d4524f48d21b2302e30047fde73f9209872fa559da"
        alt="banner"
        className="banner"
      />
    </div>
    <h1 className="dest-head">Top Destinations</h1>
    <ul className="dest-list">
      {destination.map((eachItem) => (
        <div className="card">
          <img src={eachItem.img} alt={eachItem.name} className="tour-image" />
          <p className="name">{eachItem.name}</p>
          <button type="button" className="view-but">
            View Details
          </button>
        </div>
      ))}
    </ul>
    <Footer />
  </div>
);

export default Home;
