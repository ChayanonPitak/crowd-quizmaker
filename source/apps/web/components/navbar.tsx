import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { Fragment, useContext, useEffect, useState } from 'react'
import { clearToken, haveToken, logout } from '../utils/storage'
import UserContext from '../utils/UserContext'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [{ name: 'Log out', href: '#' }]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useContext(UserContext)

  useEffect(() => {
    console.log(user)
  }, [])

  const onLogout = async () => {
    await logout()
    setCurrentUser(null)
    router.push('/login')
  }

  return (
    <>
      <Disclosure as="nav" className="bg-transparent w-full">
        {({ open }) => (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-black text-3xl font-semibold">
                  Crowd Quiz Maker
                </div>
              </div>
              {currentUser ? (
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6 z-50">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <Menu.Button className="max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 z-50 bg-neutral-800 p-2">
                        <span className="sr-only">Open user menu</span>
                        <div>
                          <UserIcon
                            className="w-6 h-6 text-neutral-400"
                            fill="currentColor"
                          />
                        </div>
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 top-2 -z-10 mt-2 w-48 origin-top-right rounded-md bg-neutral-500 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="text-center text-white my-2">
                            Username
                          </div>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={classNames(
                                  active ? 'bg-neutral-700' : '',
                                  'block mx-auto my-3 px-4 py-2 text-sm text-white text-center',
                                  'rounded-md'
                                )}
                                onClick={() => {
                                  onLogout()
                                }}
                              >
                                Log out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </Disclosure>
    </>
  )
}

export default Navbar
