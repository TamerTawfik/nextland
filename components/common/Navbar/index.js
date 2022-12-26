import { useEffect, useState } from 'react';
import Link from "next/link";
import tw from "twin.macro";
import { Dialog } from '@headlessui/react'
import { motion } from "framer-motion";
import { HiBars2, HiOutlineXMark } from "react-icons/hi2";

import LogoSVG from "../LogoSVG";

import { NavContainer, Logo, Nav, DialogButton, NavLinks, NavButton, MobileNav } from "./navbar.style";

const navigation = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonilas', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
]

// Add classes based on Boolean for the Navbar
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

// Add event listener to window to detect scrolling position
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

const Navbar = ({
    logo = "Nextland",
    logoUrl = "/",
    primaryLinkText = "Login",
    primaryLinkUrl = "#",
    secondaryLinkText = "Sign Up",
    secondaryLinkUrl = "#",
}) => {
    // Toggle Mobile Menu
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // Call scroll detection posotion
    const scrollPosition = useScrollPosition();

    return (
        <NavContainer
            className={classNames(
                scrollPosition > 70 ? 'shadow-sm shadow-accents_2' : '',
                'transition-shadow'
            )}
        >
            <Nav aria-label="Global">
                <Logo aria-label="Global">
                    <Link href={logoUrl}>
                        <span className="sr-only">{logo}</span>
                        <LogoSVG />
                        <span className="ml-1 text-foreground text-2xl">{logo}</span>
                    </Link>
                </Logo>
                {/* Mobile Menu Toggle Button */}
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
                        <Link key={item.name} href={item.href} scroll={false}>
                            {item.name}
                        </Link>
                    ))}
                </NavLinks>
                <NavButton>
                    <span className="login">
                        <Link href={primaryLinkUrl} >{primaryLinkText}</Link>
                    </span>
                    <Link href={secondaryLinkUrl} className="CTA">
                        {secondaryLinkText}
                    </Link>
                </NavButton>
            </Nav>
            {/* Mobile Menu */}
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <Dialog.Panel focus="true" tw="fixed inset-0 z-30 overflow-y-auto bg-background px-6 py-6 lg:hidden">
                    <div tw="flex h-9 items-center justify-between">
                        <div tw="flex">
                            <Link href={logoUrl} tw="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                                <span className="sr-only">{logo}</span>
                                <LogoSVG />
                                <span className="ml-1 text-foreground text-2xl">{logo}</span>

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
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="wrapper">
                            <div tw="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        onClick={() => setMobileMenuOpen(false)}
                                        key={item.name}
                                        href={item.href}
                                        scroll={false}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div tw="py-6">
                                <span className="">
                                    <Link href={primaryLinkUrl} onClick={() => setMobileMenuOpen(false)}>{primaryLinkText}</Link>
                                </span>
                                <Link href={secondaryLinkUrl} onClick={() => setMobileMenuOpen(false)}>
                                    {secondaryLinkText}
                                </Link>
                            </div>
                        </motion.div>
                    </MobileNav>
                </Dialog.Panel>
            </Dialog>
        </NavContainer>
    )
};

export default Navbar;