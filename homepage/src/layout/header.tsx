import React, {useState} from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";

const HeaderBar = styled.header`
  background: ${({theme}) => theme.background};
  color: ${({theme}) => theme.text};
  transition: 0.25s background ease-in-out;
  position: sticky;
  width: 100%;
  left: 0;
  padding: 1rem;
  top: 0;
  z-index: 5000;
`;

const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  font-weight: 600;

  li {
    margin-right: 2vw;
    padding: 0.25rem 0.5rem;
    border-radius: 7px;

    &:hover {
      background: ${({theme}) => theme.isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(0, 0, 0, 0.05)'};
    }
  }

  li:last-of-type {
    margin-right: 0;
  }
`;
type MobileMenuContainer = {
    isOpen?: boolean
};

const MobileMenuContainer = styled.ul<MobileMenuContainer>`
  list-style: none;
  font-weight: 600;
  height: ${({isOpen}) => isOpen ? `${4 * MENU_ITEMS.length}rem` : 0};
  transition: 0.5s height ease;
  overflow: hidden;

  li {
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  li:last-of-type {
    border-bottom: none;
  }
`;

const MENU_ITEMS = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "/about"
    },
    // {
    //     label: "Projects",
    //     href: "/projects"
    // },
    {
        label: "Team",
        href: "/team"
    },
    // {
    //     label: "Achievements",
    //     href: "/achievements"
    // },
    {
        label: "Projects",
        href: "https://github.com/Littleor"
    },
    {
        label: "Docs",
        href: "https://design-engineering.littleor.cn/docs/"
    }
]

const MenuItem = ({href, label}) => (
    <li>
        <Link href={href} passHref>
            <a className="text-lg">{label}</a>
        </Link>
    </li>
);

const Header = ({
                    isDarkTheme, setDarkTheme = (_b) => {
    }
                }) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <React.Fragment>
            <HeaderBar>
                <div className="flex justify-center">
                    <div style={{width: '1100px', maxWidth: '100%'}}>
                        <div className="flex flex-wrap mx-0">
                            <div className="w-1/2 lg:w-1/4 flex items-center px-2">
                                <Link passHref href="/">
                                    <a>
                                        <Image style={{
                                            filter: isDarkTheme ? 'invert(0%)' : 'invert(100%)'
                                        }} alt="Woodman 123 Team" src="/dark-logo.svg" width={106} height={106}/>
                                    </a>
                                </Link>
                            </div>
                            <div className="w-1/2 lg:w-3/4 flex items-center justify-end px-2">
                                <div className="hidden flex items-center md:block">
                                    <MenuContainer>
                                        {MENU_ITEMS.map((i) => (
                                            <MenuItem key={i.href} {...i} />
                                        ))}
                                        <button className="ml-4 flex items-center text-sm"
                                                onClick={() => setDarkTheme(!isDarkTheme)}>
                                            <Image
                                                alt="Switch Theme"
                                                src={isDarkTheme ? "/icons/sun.svg" : "/icons/moon.svg"}
                                                width={30}
                                                height={30}
                                            />
                                        </button>
                                    </MenuContainer>
                                </div>
                                <div className="flex items-center md:hidden">
                                    <button className="mr-3 flex items-center text-sm"
                                            onClick={() => setDarkTheme(!isDarkTheme)}>
                                        <Image
                                            alt="Switch Theme"
                                            src={isDarkTheme ? "/icons/sun.svg" : "/icons/moon.svg"}
                                            width={30}
                                            height={30}
                                        />
                                    </button>
                                    <button className="flex items-center" onClick={() => setOpen(!isOpen)}>
                                        <Image alt="menu" src="/icons/bars.svg" width={25} height={25}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <MobileMenuContainer isOpen={isOpen} className={isOpen && "py-3"}>
                            {MENU_ITEMS.map((i) => (
                                <MenuItem key={i.href} {...i} />
                            ))}
                        </MobileMenuContainer>
                    </div>
                </div>
            </HeaderBar>
        </React.Fragment>
    );
}

export default Header;
