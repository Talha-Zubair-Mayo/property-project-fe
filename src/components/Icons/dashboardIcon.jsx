import React from 'react'

function DashboardIcon(isActive) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none" className={`${isActive ? 'fill-skin-brown' : ''}`}>
            <path d="M25.0006 11.6798V3.51996C25.0006 1.71999 24.2326 1 22.3246 1H17.4767C15.5688 1 14.8008 1.71999 14.8008 3.51996V11.6798C14.8008 13.4798 15.5688 14.1998 17.4767 14.1998H22.3246C24.2326 14.1998 25.0006 13.4798 25.0006 11.6798Z" stroke="#B5B5B5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25.0006 22.4796V20.3197C25.0006 18.5197 24.2326 17.7997 22.3246 17.7997H17.4767C15.5688 17.7997 14.8008 18.5197 14.8008 20.3197V22.4796C14.8008 24.2796 15.5688 24.9996 17.4767 24.9996H22.3246C24.2326 24.9996 25.0006 24.2796 25.0006 22.4796Z" stroke="#B5B5B5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.1998 14.3198V22.4796C11.1998 24.2796 10.4318 24.9996 8.52387 24.9996H3.67595C1.76799 24.9996 1 24.2796 1 22.4796V14.3198C1 12.5198 1.76799 11.7998 3.67595 11.7998H8.52387C10.4318 11.7998 11.1998 12.5198 11.1998 14.3198Z" stroke="#B5B5B5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.1998 3.51996V5.67992C11.1998 7.47989 10.4318 8.19987 8.52387 8.19987H3.67595C1.76799 8.19987 1 7.47989 1 5.67992V3.51996C1 1.71999 1.76799 1 3.67595 1H8.52387C10.4318 1 11.1998 1.71999 11.1998 3.51996Z" stroke="#B5B5B5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg >

    )
}

export default DashboardIcon