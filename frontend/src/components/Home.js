import React, { useEffect, useState } from "react";
import Card from "./Card";

function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/records");
    const output = await response.json();

    setData(output);
    console.log(output);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home">
        {
            data && data?.response?.map((item) => (
                 <Card item={item} fetchData={fetchData}/>
            ))
        }
    </div>
    );
}

export default Home;
