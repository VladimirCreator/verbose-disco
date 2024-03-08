/** @type {import('next').NextConfig} */
export default {
	webpack: (config) =>{
		config.module.rules.push({
			test: /.md$/, type: 'asset/source'
		})
		return config
	}
}
