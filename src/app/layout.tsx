import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'MAKE WPG | Calendar',description:'A calendar of what is happening. An archive of what has happened.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
