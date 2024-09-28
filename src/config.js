export const token = {
	name: 'TON',
	symbol: 'TON',
	currencyIconFileName: 'ton.png'
}

const getEnvVariable = (name) => {
	if (import.meta.env[name]) {
		return import.meta.env[name]
	}
	throw new Error(`Environment variable ${name} is not defined`)
}

export const links = {
	app: getEnvVariable('VITE_LINK_APP'),
	demo: getEnvVariable('VITE_LINK_DEMO'),
	docs: getEnvVariable('VITE_LINK_DOCS'),
	roadmap: getEnvVariable('VITE_LINK_ROADMAP'),
	privacyPolicy: getEnvVariable('VITE_LINK_PRIVACY_POLICY'),
	termsOfUse: getEnvVariable('VITE_LINK_TERMS_OF_USE'),
	telegram: getEnvVariable('VITE_LINK_TELEGRAM'),
	twitter: getEnvVariable('VITE_LINK_TWITTER'),
	github: getEnvVariable('VITE_LINK_GITHUB'),
	oracle: getEnvVariable('VITE_LINK_ORACLE')
}
