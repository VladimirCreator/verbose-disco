import { Noto_Sans } from 'next/font/google'
import type { Metadata } from 'next'

import './index.scss'
import '@/lib/sass/index.scss'

type Props = Readonly<{
	children: React.ReactNode
}>

const inter = Noto_Sans(
	{
		subsets: ['latin']
	}
)

export const metadata: Metadata = {
	title: 'Verbose Disco'
}

export default function RootLayout(props: Props) {
	const { children } = props
	return (
		<html lang='ru'>
			<body className={inter.className}>
				{children}
			</body>
		</html>
	)
}
