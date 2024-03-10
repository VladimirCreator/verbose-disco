import Image from 'next/image'
import Markdown from 'react-markdown'

import styles from '../article.module.scss'
import { content1 } from '@/assets/markdown'

export default function One() {
	return (
		<article className={styles.article}>
			<Markdown children={content1} />
			<Image width={1211} height={389} src='https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/972a9890-36e9-485c-9efa-7a3dc6dae2f9' alt='A diagram.' />
		</article>
	)
}
