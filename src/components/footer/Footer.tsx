import React from 'react'

function Footer() {
    return (
        <footer className="mt-20 w-full py-10 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <div>
                    <a className="flex-none text-xl font-semibold text-black dark:text-white" href="/" aria-label="Brand">Håkon</a>
                </div>

                <div className="mt-3">
                    <p className="text-gray-500">Welcome to the <a className="font-semibold text-blue-500 hover:text-blue-700 dark:text-red-500  dark:hover:text-red-700" href="/">Matrix</a></p>
                    <p className="text-gray-500">©Preline. 2023 Håkon. All rights reserved.</p>
                </div>

                <div className="mt-3 space-x-2 text-gray-500">
                    <a className="inline-flex justify-center items-center w-10 h-10 text-center  hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="https://twitter.com/Haukaun">
                        <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                    </a>
                    <a className="inline-flex justify-center items-center w-10 h-10 text-center  hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="https://github.com/Haukaun">
                        <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                    <a className="inline-flex justify-center items-center w-10 h-10 text-center  hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="/https://gitlab.com/Haukaun">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='currentColor' viewBox="0 0 50 50">
                            <path d="M 38.011719 4 C 37.574219 3.996094 37.183594 4.273438 37.046875 4.691406 L 32.074219 20 L 17.925781 20 L 12.953125 4.691406 C 12.820313 4.289063 12.449219 4.011719 12.023438 4 C 11.597656 3.992188 11.214844 4.25 11.0625 4.648438 L 5.070313 20.640625 C 5.066406 20.640625 5.066406 20.644531 5.0625 20.648438 L 2.0625 28.648438 C 1.90625 29.070313 2.046875 29.542969 2.414063 29.808594 L 24.40625 45.800781 L 24.410156 45.808594 C 24.414063 45.808594 24.414063 45.808594 24.414063 45.8125 C 24.425781 45.820313 24.441406 45.828125 24.453125 45.835938 C 24.46875 45.84375 24.480469 45.855469 24.496094 45.863281 C 24.5 45.863281 24.5 45.867188 24.503906 45.867188 C 24.503906 45.867188 24.507813 45.871094 24.511719 45.871094 C 24.515625 45.875 24.519531 45.878906 24.527344 45.878906 C 24.53125 45.882813 24.539063 45.886719 24.542969 45.890625 C 24.5625 45.898438 24.585938 45.910156 24.609375 45.917969 C 24.609375 45.917969 24.609375 45.917969 24.609375 45.921875 C 24.632813 45.929688 24.65625 45.9375 24.675781 45.945313 C 24.679688 45.945313 24.679688 45.945313 24.683594 45.949219 C 24.699219 45.953125 24.714844 45.957031 24.734375 45.964844 C 24.742188 45.964844 24.75 45.96875 24.761719 45.96875 C 24.761719 45.972656 24.761719 45.972656 24.761719 45.96875 C 24.78125 45.976563 24.800781 45.980469 24.820313 45.984375 C 24.847656 45.988281 24.871094 45.992188 24.898438 45.996094 C 24.9375 45.996094 24.980469 46 25.019531 46 C 25.058594 45.996094 25.09375 45.996094 25.128906 45.988281 C 25.144531 45.988281 25.15625 45.988281 25.171875 45.984375 C 25.171875 45.984375 25.175781 45.984375 25.179688 45.984375 C 25.1875 45.980469 25.191406 45.980469 25.199219 45.980469 C 25.203125 45.980469 25.207031 45.976563 25.214844 45.976563 C 25.222656 45.972656 25.234375 45.972656 25.242188 45.96875 C 25.257813 45.964844 25.269531 45.960938 25.28125 45.957031 C 25.289063 45.957031 25.292969 45.957031 25.296875 45.953125 C 25.300781 45.953125 25.304688 45.953125 25.308594 45.953125 C 25.324219 45.945313 25.34375 45.9375 25.359375 45.933594 C 25.378906 45.925781 25.394531 45.917969 25.410156 45.910156 C 25.414063 45.910156 25.414063 45.910156 25.417969 45.90625 C 25.421875 45.90625 25.425781 45.90625 25.429688 45.902344 C 25.4375 45.898438 25.445313 45.894531 25.453125 45.890625 C 25.476563 45.878906 25.496094 45.867188 25.515625 45.855469 C 25.523438 45.851563 25.527344 45.847656 25.53125 45.84375 C 25.535156 45.84375 25.539063 45.839844 25.542969 45.839844 C 25.558594 45.828125 25.574219 45.820313 25.589844 45.808594 L 25.597656 45.796875 L 47.589844 29.808594 C 47.953125 29.542969 48.09375 29.070313 47.9375 28.648438 L 44.945313 20.675781 C 44.941406 20.667969 44.9375 20.65625 44.9375 20.648438 L 38.9375 4.648438 C 38.789063 4.261719 38.425781 4.003906 38.011719 4 Z M 11.933594 8.027344 L 15.824219 20 L 7.445313 20 Z M 38.066406 8.027344 L 42.558594 20 L 34.175781 20 Z M 8.066406 22 L 16.472656 22 L 22.328125 40.015625 Z M 18.578125 22 L 31.421875 22 L 25 41.765625 Z M 33.527344 22 L 41.933594 22 L 27.671875 40.015625 Z M 6.3125 23.007813 L 19.6875 39.902344 L 4.203125 28.640625 Z M 43.6875 23.007813 L 45.796875 28.640625 L 30.3125 39.902344 Z"></path>
                        </svg>
                    </a>
                    <a className="inline-flex justify-center items-center w-10 h-10 text-center  hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="https://www.linkedin.com/in/h%C3%A5kon-s%C3%A6tre-b31159254/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="16" height="16" viewBox="0 0 50 50">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer