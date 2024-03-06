import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './index.scss'

type Props = Readonly<{
	children: React.ReactNode
}>

const inter = Inter(
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
