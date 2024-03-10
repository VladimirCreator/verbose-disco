import React, { Children } from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

import styles from './card.module.scss'

const card = cva(
	styles.card,
	{
		variants: {
			intent: {
				primary: styles.primary,
				secondary: styles.secondary,
				tertiary: styles.tertiary
			},
			orientation: {
				landscape: styles.landscape, portrait: styles.portrait
			}
		},
		defaultVariants: {
			intent: 'primary', orientation: 'landscape'
		}
	}
)

type Props = {
	children: React.ReactNode
} & VariantProps<typeof card>

export function Card(props: Props) {
	const {
		intent, orientation,
		children
	} = props

	return (
		<article className={card({ intent, orientation })}>
			{
				Children.map(
					children,
					(child, index) => {
						const className = ''
						if (typeof child === 'object') {
							// @ts-expect-error
							return React.cloneElement(child, { key: index, className })
						}
						return child
					}
				)
			}
		</article>
	)
}
