"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  
  const isMenuActive = (menu = menuItems[3]) => {
    let isActive = false;
    if (menu.href !== "#") {
      if (pathname.split("/")[1] === menu.href?.split("/")[1]) {
        isActive = true;
      }
    }
    if (menu.subMenu) {
      menu.subMenu.forEach((el) => {
        if (el.href !== "#") {
          if (pathname.split("/")[1] === el.href?.split("/")[1]) {
            isActive = true;
          }
        }
        if (el.subMenu) {
          el.subMenu.forEach((elm) => {
            if (elm.href !== "#") {
              if (pathname.split("/")[1] === elm.href?.split("/")[1]) {
                isActive = true;
              }
            }
          });
        }
      });
    }
    return isActive;
  };

  return (
    <>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={item.subMenu ? "menu-item-has-children" : ""}
        >
          <Link
            scroll={false}
            href={item.href}
            style={{
              color: isMenuActive(item) ? "#4660ff" : "inherit",
              fontWeight: isMenuActive(item) ? "bold" : "normal",
            }}
          >
            {item.title}
          </Link>
          {item.subMenu && (
            <ul className="sub-menu">
              {item.subMenu.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className={subItem.subMenu ? "menu-item-has-children" : ""}
                >
                  <Link
                    scroll={false}
                    href={subItem.href}
                    style={{
                      color: isMenuActive(subItem) ? "#304eff" : "inherit",
                      fontWeight: isMenuActive(subItem) ? "bold" : "normal",
                    }}
                  >
                    {subItem.title}
                  </Link>
                  {subItem.subMenu && (
                    <ul className="sub-menu">
                      {subItem.subMenu.map((subSubItem, subSubIndex) => (
                        <li key={subSubIndex}>
                          <Link
                            scroll={false}
                            href={subSubItem.href}
                            style={{
                              color: isMenuActive(subSubItem) ? "#304eff" : "inherit",
                              fontWeight: isMenuActive(subSubItem) ? "bold" : "normal",
                            }}
                          >
                            {subSubItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
}
