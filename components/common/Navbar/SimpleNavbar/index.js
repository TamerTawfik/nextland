import { Fragment } from 'react';
import tw, { styled } from "twin.macro";
import { Popover, Transition } from '@headlessui/react'
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { Nav, PanelMenu } from "./SimpleNavbar.style";

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function SimpleNavbar() {
    return (
        <Popover as="header" tw="relative">
            <div tw="bg-gray-900 pt-6">
                <Nav
                    aria-label="Global"
                >
                    <div className="navLinksWrapper">
                        <div className="logo">
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <img
                                    tw="h-8 w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg"
                                    alt=""
                                />
                            </a>
                            <div className="navMenu">
                                <Popover.Button className="menuButton">
                                    <span className="sr-only">Open main menu</span>
                                    <FaBars tw="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="links">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="linkItem">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="ctaWrapper">
                        <a href="#" className="linkItem">
                            Log in
              </a>
                        <a
                            href="#"
                            className="ctaButton"
                        >
                            Start free trial
              </a>
                    </div>
                </Nav>
            </div>

            <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus tw="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
                    <PanelMenu>
                        <div className="panelWrapper">
                            <div>
                                <img
                                    tw="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg"
                                    alt=""
                                />
                            </div>
                            <div tw="-mr-2">
                                <Popover.Button className="panelButton">
                                    <span className="sr-only">Close menu</span>
                                    <FaRegWindowClose tw="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div tw="pt-5 pb-6">
                            <div tw="px-2 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="linkItem"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div tw="mt-6 px-5">
                                <a
                                    href="#"
                                    className="ctaButton"
                                >
                                    Start free trial
                  </a>
                            </div>
                            <div tw="mt-6 px-5">
                                <p className="text">
                                    Existing customer?{' '}
                                    <a href="#" tw="text-gray-900 hover:underline">
                                        Login
                    </a>
                                </p>
                            </div>
                        </div>
                    </PanelMenu>
                </Popover.Panel>
            </Transition>
        </Popover>

    )
}