import Image from "next/image";
import styles from "./page.module.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export default function Home() {
  return <Theme appearance="dark"></Theme>;
}
