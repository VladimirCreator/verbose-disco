import Link from 'next/link'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import {
	content1,
	content2,
	content3,
	content4,
	inhalationAnticholinergic,
	inhalationBeta2Agonist,
	inhalationGlucocorticosteroidIgcs
} from '@/assets/markdown/'

import {
	Article, ArticleCollection,
	Badge,
	Card, CardCollection
} from '@/lib/react'

export function Root() {
	return (
		<ArticleCollection>
			<Article>
				<h1>ХОБЛ: мифы и реальность</h1>
				<CardCollection orientation='portrait'>
					<Card intent='tertiary' orientation='landscape'>
						<Badge size='md' shape='unknown' pattern='fade'>
							<img width={39.32} height={37.86} src='https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f637786b-6f4f-401f-b2ca-03bcdb1370ed' alt='.' />
						</Badge>
						<Markdown>
							ХОБЛ болеют **преимущественно мужчины?**
						</Markdown>
						<Markdown rehypePlugins={[rehypeRaw]} children={content1} />
						<Link href='/1'>
							<Badge size='sm' shape='circle' alignment='topRight' pattern='blue'>
								<img width={23.1} height={31.32} src='https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0454488d-b948-4cec-b9f9-25c2e4e0935b' alt='.' />
							</Badge>
						</Link>
					</Card>
					<Card intent='tertiary' orientation='landscape'>
						<Badge size='md' shape='unknown' pattern='fade'>
							<img width={39.32} height={37.86} src='https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b099a69-2d40-41fc-8995-dd0073f3e3c6' alt='.' />
						</Badge>
						<Markdown>
							**Опасно** не наличие заболевания, а обострения?
						</Markdown>
						<Markdown rehypePlugins={[rehypeRaw]} children={content2} />
						<Link href='/2'>
							<Badge size='sm' shape='circle' alignment='topRight' pattern='green'>
								<img width={23.1} height={31.32} src='https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0454488d-b948-4cec-b9f9-25c2e4e0935b' alt='.' />
							</Badge>
						</Link>
					</Card>
				</CardCollection>
			</Article>
			<Article>
				<h1>Терапия ХОБЛ: что в фокусе?</h1>
				<aside>
					<p>
						Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
					</p>
				</aside>
				<p>
					Приоритетные направления фармакотерапевтической стратегии при ХОБЛ¹:
				</p>
				<CardCollection
					// @ts-expect-error
					style={{marginBottom: 4, textAlign: 'center'}}
				>
					{
						[inhalationAnticholinergic, inhalationBeta2Agonist, inhalationGlucocorticosteroidIgcs].map(
							(content, index) => (
								<Card intent='primary' orientation='portrait'>
									<div style={{position: 'relative'}}>
										<img style={{position: 'absolute', left: 0}} width={125.2} height={105.18} src='https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e8b0e1c-b95b-41b0-a72d-f5c6721448d9' alt='.' />
										<Badge size='md' alignment='bottomRight' pattern='fade'>
											{index+1}
										</Badge>
									</div>
									<Markdown rehypePlugins={[rehypeRaw]} children={content} />
								</Card>
							)
						)
					}
				</CardCollection>
				<div style={{marginBottom: 22}}>
					<div style={{ display: 'inline-block', textAlign: 'right', width: '48.91472868%' }}>
						<img src='https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e31e2e8a-a807-4a91-a028-c62891331350' />
					</div>
					<div style={{ display: 'inline-block', width: '2.17054264%' }}></div>
					<div style={{ display: 'inline-block', textAlign: 'left', width: '48.91472868%' }}>
					<img src='https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e31e2e8a-a807-4a91-a028-c62891331350' />
					</div>
				</div>
				<CardCollection>
					{
						[content3, content4].map(
							(content) => (
								<Card intent='primary'>
									<Markdown rehypePlugins={[rehypeRaw]} children={content} />
								</Card>
							)
						)
					}
				</CardCollection>
			</Article>
		</ArticleCollection>
	)
}
