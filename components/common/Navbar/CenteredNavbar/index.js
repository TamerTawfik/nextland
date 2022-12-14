import Link from "next/link";
import { useEffect, useState } from 'react';
import tw from "twin.macro";
import { Dialog } from '@headlessui/react'
import { HiBars2, HiOutlineXMark } from "react-icons/hi2";
import { NavContainer, Logo, Nav, DialogButton, NavLinks, NavButton, MobileNav } from "./CenteredNavbar.style";
import LogoSVG from "../../LogoSVG";
import navigation from "./centeredNavbar.data";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', updatePosition);

        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return scrollPosition;
};

export default function SimpleCentered() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const scrollPosition = useScrollPosition();

    return (
        <NavContainer
            className={classNames(
                scrollPosition > 70 ? 'border-b border-accents_2' : '',
                'transition-border'
            )}
        >
            <Nav aria-label="Global">
                <Logo aria-label="Global">
                    <Link href="/">
                        <span className="sr-only">Nextland</span>
                        <LogoSVG />
                        <span className="ml-1 text-foreground text-2xl">Nextland</span>
                    </Link>
                </Logo>
                <DialogButton>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <HiBars2 tw="h-6 w-6 text-foreground" aria-hidden="true" />
                    </button>
                </DialogButton>
                <NavLinks>
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                            {item.name}
                        </Link>
                    ))}
                </NavLinks>
                <NavButton>
                    <span className="login">
                        <Link href="#">Login</Link>
                    </span>
                    <Link href="#" className="CTA">
                        Sign Up
                    </Link>
                </NavButton>
            </Nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <Dialog.Panel focus="true" tw="fixed inset-0 z-30 overflow-y-auto bg-background px-6 py-6 lg:hidden">
                    <div tw="flex h-9 items-center justify-between">
                        <div tw="flex">
                            <Link href="#" tw="-m-1.5 p-1.5">
                                <span className="sr-only">Nextland</span>
                                <LogoSVG />
                                <span className="ml-1 text-foreground text-2xl">Nextland</span>

                            </Link>
                        </div>
                        <div className="flex">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <HiOutlineXMark className="h-6 w-6 text-foreground" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <MobileNav>
                        <div className="wrapper">
                            <div tw="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div tw="py-6">
                                <span className="">
                                    <Link href="#">Login</Link>
                                </span>
                                <Link href="#">
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </MobileNav>
                </Dialog.Panel>
            </Dialog>
        </NavContainer>

    )
}