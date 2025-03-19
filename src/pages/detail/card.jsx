import millify from "millify";

const Card = ({ item }) => {
  return (
    <div className="p-5 border text-black shadow rounded-md">
    <p className="text-sm font-semibold mb-2 capitalize">{item[0]}</p>
    <p className="text-lg">
      {item[0] !== "tests"&&item[0] !== "population"&&item[0] !== "deaths"&&item[0] !== "cases" ? item[1] : millify(item[1])}
    </p>
  </div>
  );
};

export default Card;
