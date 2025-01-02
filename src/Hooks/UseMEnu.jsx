import { useEffect, useState } from "react";

const useMenu = () => {
  const [popularMenu, setPopularMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(popularMenu);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setPopularMenu(data);
        console.log(data);
        // setLoading(false);
      });
  }, []);

  return [popularMenu, loading];
};

export default useMenu;
