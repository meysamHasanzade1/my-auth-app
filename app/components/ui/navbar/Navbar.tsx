"use client";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import {
  MdDashboard,
  MdHome,
  MdLogout,
  MdMenu,
  MdSettings,
} from "react-icons/md";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(null);

  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) {
      router.push("/auth");
    } else {
      setUser(JSON.parse(stored));
    }
  }, []);

  if (!user) return null;
  return (
    <div className={`${styles.container}`}>
      <div className={styles.menu}>
        <MdMenu />
      </div>
      <div className={styles.profile}>
        <img alt="" width={40} height={40} src={user.picture.medium} />
        <p>
          {user.name.first} {user.name.last}
        </p>
      </div>
      <ul>
        <li>
          <Link className={styles.link} href="#">
            <MdHome /> Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="#">
            <MdSettings />
            settings
          </Link>
        </li>
        <li>
          <Link
            style={{ background: "#2e3649" }}
            className={styles.link}
            href="#"
          >
            <MdDashboard /> dashboard
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/auth">
            <MdLogout /> logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
