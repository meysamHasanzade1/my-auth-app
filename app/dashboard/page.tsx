"use client";
import styles from "./Dashboard.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Chart from "../components/ui/chart/chart";
import Searchbar from "../components/ui/searchbar/Searchbar";
import Card from "../components/ui/card/Card";
import Link from "next/link";

type User = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};
export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) {
      router.push("/auth");
    } else {
      setUser(JSON.parse(stored));
      console.log(JSON.parse(stored));
    }
  }, []);
  // اگر یوزر وجود نداشته باشه و مستقیم ازش دیتا بخوایم برنامه کرش میکنه با این کد پایین جلوش میگیریم
  if (!user) return null;

  return (
    <div className={styles.container}>
      <Searchbar />
      <div className={styles.profile}>
        <img src={user.picture.large} />
        <h1>
          {user.name.first} {user.name.last}
        </h1>
      </div>
      <div className={styles.components}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>

        <Chart />
      </div>
      <div className={styles.footer}>
        <Link className={styles.link} href="/auth">
          {" "}
          Log out
        </Link>
      </div>
    </div>
  );
}
