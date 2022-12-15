import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FetchLongSwords = () => {
  const [longSwords, setLongSwords] = useState([]);
  const [loadingLongSwords, toggleLongSwordsLoading] = useState(false);
  const navigate = useNavigate();

  // Gets all swords with type Long Sword.
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        toggleLongSwordsLoading(true);
        const res = await axios({
          method: "GET",
          url: "http://localhost:8080/api/sword/type/Long Sword",
        });
        console.log(res.data);
        toggleLongSwordsLoading(false);

        if (!loadingLongSwords) {
          setLongSwords(res.data);
        }
      } catch (error) {
        console.error(error);
        navigate("/error500");
      }
    };
    fetchProduct();
  }, []);
  // console.log(longSwords);

  return [longSwords, loadingLongSwords];
};

export default FetchLongSwords;
