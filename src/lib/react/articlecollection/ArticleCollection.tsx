import styles from './articlecollection.module.scss'

type Props = Readonly<{
	children?: React.ReactNode
}>

export function ArticleCollection(props: Props) {
	const { children } = props

	return (
		<article className={styles.articleCollection}>
			{children}
		</article>
	)
}
