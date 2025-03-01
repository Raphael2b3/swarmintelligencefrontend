"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { LogOut, Settings, User, Search, Menu } from "lucide-react";
import styles from "./Topbar.module.scss";
import SideNavStyles from "../SideNav/SideNav.module.scss";
import { Button, TextField } from "@radix-ui/themes";

interface ITopbar {
  isOpen: boolean;
  setIsOpen: () => void;
}

export default function Topbar({ isOpen, setIsOpen }: ITopbar) {
  return (
    <header className={styles.topbar}>
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          width: "90%",
        }}>
        {!isOpen && (
          <Button onClick={setIsOpen} className={SideNavStyles.menuButton}>
            <Menu size={24}></Menu>
          </Button>
        )}

        <TextField.Root
          style={{ height: 35, minWidth: 250, borderRadius: 8, marginRight: 10 }}
          placeholder="Search for statements">
          <TextField.Slot>
            <Search size={20} />
          </TextField.Slot>
        </TextField.Root>
      </div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Avatar className={styles.AvatarRoot}>
            <AvatarImage
              className={styles.AvatarImage}
              src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
              alt="Colm Tuite"
            />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className={styles.dropdownMenu}>
            <DropdownMenu.Group>
              <DropdownMenu.Item className={styles.dropdownItem}>
                <User size={16} />
                Profile
              </DropdownMenu.Item>
              <DropdownMenu.Item className={styles.dropdownItem}>
                <Settings size={16} />
                Settings
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item className={styles.dropdownItem}>
                <LogOut size={16} />
                Logout
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </header>
  );
}
