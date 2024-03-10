import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

import styles from './cardcollection.module.scss'

const cardcollection = cva(
	styles.collection,
	{
		variants: {
			orientation: {
				landscape: styles.landscape, portrait: styles.portrait
			}
		},
		defaultVariants: { orientation: 'landscape' }
	}
)

type Props = Readonly<{
	children: React.ReactNode
}> & VariantProps<typeof cardcollection>

export function CardCollection(props: Props) {
	const {
		orientation,
		children,
		...rest
	} = props
	return (
		<div {...rest} className={cardcollection({ orientation })}>
			{children}
		</div>
	)
}
