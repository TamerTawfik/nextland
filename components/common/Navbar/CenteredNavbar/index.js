import { useState } from 'react'
import tw from "twin.macro";
import { Dialog } from '@headlessui/react'
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { Nav, MobileNav } from "./CenteredNavbar.style";

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]


export default function SimpleCentered() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div tw="px-6 pt-6 lg:px-8">
            <div>
                <Nav aria-label="Global">
                    <div className="logoWrapper" aria-label="Global">
                        <a href="#">
                            <span className="sr-only">Your Company</span>
                            <img tw="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                        </a>
                    </div>
                    <div tw="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <FaBars tw="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="navLinks">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="navButton">
                        <a href="#">
                            Log in
                    </a>
                    </div>
                </Nav>
                <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <Dialog.Panel focus="true" tw="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                        <div tw="flex h-9 items-center justify-between">
                            <div tw="flex">
                                <a href="#" tw="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        tw="h-8"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="flex">
                                <button
                                    type="button"
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <FaRegWindowClose className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <MobileNav>
                            <div className="wrapper">
                                <div tw="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div tw="py-6">
                                    <a href="#">
                                        Log in
                                </a>
                                </div>
                            </div>
                        </MobileNav>
                    </Dialog.Panel>
                </Dialog>
            </div>
        </div>

    )
}