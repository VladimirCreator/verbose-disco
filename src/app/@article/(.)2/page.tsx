import Image from 'next/image'
import Markdown from 'react-markdown'

import styles from '../article.module.scss'
import {
	content2,
	content5,
	content6,
	content7
} from '@/assets/markdown'
import {
	Card, CardCollection
} from '@/lib/react'

export default function Two() {
	const children = [content5, content6, content7].map(
		(content) => (
			<Card orientation='portrait' intent='secondary'>
				<Markdown children={content} />
			</Card>
		)
	)

	return (
		<article className={styles.article}>
			<Markdown children={content2} />
			<h1>Пятилетняя выживаемость пациентов</h1>
			<CardCollection orientation='landscape'
			// @ts-expect-error
			style={{textAlign: 'center'}}
			>
				{children}
			</CardCollection>
		</article>
	)
}
