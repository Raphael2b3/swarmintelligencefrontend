"use client";

import { motion } from "framer-motion";
import { Button } from "@radix-ui/themes";
import { X } from "lucide-react";
import Link from "next/link";
import styles from "./SideNav.module.scss";
import { ROUTES } from "@/app/constants";

interface ISideNav {
  enableOverlay?: boolean;
  isOpen?: boolean;
  setIsOpen?: () => void;
}

export default function SideNav({ enableOverlay, isOpen, setIsOpen }: ISideNav) {
  return (
    <>
      <motion.div
        initial={{ width: 0, padding: 0 }}
        animate={{ width: isOpen ? "250px" : "0px" }}
        transition={{ type: "spring", stiffness: 130, damping: 20 }}
        className={styles.sidebar}>
        <Button onClick={setIsOpen} className={styles.menuButton}>
          <X size={24} />
        </Button>
        <nav className={styles.navLinks}>
          {Object.keys(ROUTES).map((key, index) => {
            const route = Object.values(ROUTES)[index];
            return (
              <Link key={key} href={route.href} className={styles.navItem} onClick={setIsOpen}>
                {route?.icon}
                {route.label}
              </Link>
            );
          })}
        </nav>
      </motion.div>

      {isOpen && enableOverlay && <div className={styles.overlay} onClick={setIsOpen} />}
    </>
  );
}
