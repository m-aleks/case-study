import { useEffect, useReducer } from "react";
import dataFetchReducer from "../reducers/dataFetchReducer";
import axios from "axios";
import { productApi } from "../config";

export const useProductsFetch = initialData => {
  const url = productApi;
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(url);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE" });
      }
    };
    fetchData();
  }, [url]);
  return [state];
};
