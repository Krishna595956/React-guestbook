import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Map() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {data.length > 0 ? (
        data.map((todo) => (
          <li key={todo.id}>
            {todo.id},{todo.title}
          </li>
        ))
      ) : (
<div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
      )}
    </div>
  );
}
