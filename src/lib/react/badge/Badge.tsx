import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

import styles from './badge.module.scss'

const badge = cva(
	styles.badge,
	{
		variants: {
			size: {
				sm: styles.sm,
				md: styles.md
			},
			shape: {
				circle: styles.circle,
				unknown: styles.unknown
			},
			alignment: {
				auto: styles.auto,
				topRight: styles.topRight,
				bottomRight: styles.bottomRight
			},
			pattern: {
				fade: styles.fade,
				green: styles.green, blue: styles.blue,
			}
		},
		defaultVariants: {
			size: 'sm', shape: 'circle', alignment: 'auto',
			pattern: 'blue'
		}
	}
)

type Props = Readonly<{
	children?: React.ReactNode
}> &
	VariantProps<typeof badge>

export function Badge(props: Props) {
	const {
		size, shape, alignment,
		pattern,
		children
	} = props
	return (
		<div className={badge({ size, shape, alignment, pattern })}>
			{children}
		</div>
	)
}
