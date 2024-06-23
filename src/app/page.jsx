import Image from "next/image";
import styles from "./page.module.css";
import Finder from "./finder/page";

export default function Home() {
  return (
    <div>
      <Finder />
    </div>
  );
}
