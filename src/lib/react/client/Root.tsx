'use client'

import * as AlertDialog from '@radix-ui/react-alert-dialog'

type Props = Readonly<{
	children?: React.ReactNode
}>

export function Root(props: Props) {
	const { children } = props

	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger>

			</AlertDialog.Trigger>

			<AlertDialog.Portal>
				
			</AlertDialog.Portal>
		</AlertDialog.Root>
	)
}
