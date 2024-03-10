/** @type {import('next').NextConfig} */
export default { images: { remotePatterns: [{ protocol: 'https', hostname: 'figma-alpha-api.s3.us-west-2.amazonaws.com', port: '', pathname: '/images/**' }] },
	webpack: (config) =>{
		config.module.rules.push({
			test: /.md$/, type: 'asset/source'
		})
		return config
	}
}
