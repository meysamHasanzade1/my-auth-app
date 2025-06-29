"use client";
import styles from "./AuthForm.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

//مطمئن میشیم که شماره درست باشه
const isValidPhone = (phone: string) => /^9\d{9}$/.test(phone);

export default function AuthPage() {
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!isValidPhone(phone)) {
      setError("Invalid phone number");
      return;
    }

    const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
    const data = await res.json();
    const user = data.results?.[0];

    //اینجا برای لوکال استورج یوزر رو مشخص میکنیم
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    } else {
      setError("Failed to fetch user");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <div className={styles.phone}>
        <span>+98</span>
        <input
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <br />
      {error && <p className={styles.error}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
