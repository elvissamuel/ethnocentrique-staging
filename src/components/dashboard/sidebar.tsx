"use client";

import { BaseSyntheticEvent } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { type Link, SidebarItem } from ".";

interface SidebarProps {
  title?: string;
  links: Link[];
  logout: (e: BaseSyntheticEvent) => void;
  hideLogout?: boolean;
}

export function Sidebar ({ logout, links, title, hideLogout }: SidebarProps) {
  return (
    <div className="flex grow flex-col justify-between bg-white relative px-3 py-4">
      <div className="space-y-3">
        <div className="px-4 pb-4 border-b border-border bg-gray-800 lg:hidden">
          <img
            src={"/logo.svg"}
            alt="Ethnocentrique"
            className="h-8 w-auto"
          />
        </div>
        <div className="px-4">
          {
            title && (
              <h2 className="text-lg font-semibold">
                {title}
              </h2>
            )
          }
        </div>
        <div className="space-y-1">
          {links.map((item, i) => (
            <SidebarItem
              key={`${item.name}-${i}`}
              href={item.url}
              name={item.name}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <div className="space-y-1">
        {
          !hideLogout && (
            <SidebarItem
              href="#"
              name="Logout"
              icon={<IoLogOutOutline className="mr-2 w-6 h-6 text-orange-600" />}
              onClick={logout}
            />
          )
        }
      </div>
    </div>
  );
}
