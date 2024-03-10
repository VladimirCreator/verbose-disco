import React, { Children } from 'react'

import styles from './article.module.scss'

type Props = Readonly<{
	children?: React.ReactNode
}>

export function Article(props: Props) {
	const {
		children
	} = props

	return (
		<article className={styles.article}>
			{
				Children.map(
					children,
					(child) => {
						const className = ''
						if (typeof child === 'object') {
							// @ts-expect-error
							return React.cloneElement(child, { className })
						}
						return child
					}
				)
			}
		</article>
	)
}
