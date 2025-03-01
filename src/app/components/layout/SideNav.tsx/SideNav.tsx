"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@radix-ui/themes";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import styles from "./SideNav.module.scss"; // Import CSS Module
import { ROUTES } from "@/app/constants";

interface ISideNav {
  enableOverlay?: boolean;
}

export default function SideNav({ enableOverlay }: ISideNav) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(Object.keys(ROUTES), Object.values(ROUTES)[0]);
  return (
    <>
      <Button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      <motion.div
        // animate={{ x: isOpen ? "0%" : "-100%" }}
        initial={{ width: 0, padding: 0 }}
        animate={{ width: isOpen ? "250px" : "0px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={styles.sidebar}>
        <nav className={styles.navLinks}>
          {Object.keys(ROUTES).map((key, index) => {
            const route = Object.values(ROUTES)[index];
            return (
              <Link
                key={key}
                href={route.href}
                className={styles.navItem}
                onClick={() => setIsOpen(false)}>
                {route?.icon}
                {route.label}
              </Link>
            );
          })}
        </nav>
      </motion.div>

      {isOpen && enableOverlay && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}
