import { useContext } from "react";
import { DBContext } from "../context/DBContext";

export default function useDB() {
  const context = useContext(DBContext);

  if (!context) {
    throw new Error("useDB muss innerhalb eines DBProvider verwendet werden.");
  }

  return context;
}