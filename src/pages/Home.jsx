// import { useEffect, useState } from "react";
import Form from "../components/Form";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  // if (data.length === 0) {
  //   return (
  //     <>
  //       <h1>No data found!</h1>
  //     </>
  //   );
  // }

  return (
    <section className="bg-gray-900 text-white">
      {/* {data.length > 0 ? ( */}
      <div>
        <h2>Data Found!</h2>
        {data.map((item) => (
          <div key={item.phone}>
            {item.gender} {item.email}
          </div>
        ))}
      </div>
      ) : (
      <div>
        {""}
        <h2>No data found!</h2>
      </div>
      )}
    </section>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(() => count + 1);
  }
  return (
    <>
      <button onClick={handleCount} className="btn mt-10">
        Increase Count {count}
      </button>
      <div>
        <div className="size-96 mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl">Count Value: {count}</h2>
          <button onClick={handleCount} className="btn mt-10">
            Increase Count
          </button>
        </div>
      </div>
      <div>
        <Counter />
        <Form />
      </div>
    </>
  );
}
