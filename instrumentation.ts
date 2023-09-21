import { ApiClient } from './app/lib/server/services/api-client';

export async function register() {
	if (process.env.NEXT_RUNTIME === 'nodejs') {
		if (!process.env.API_BASE_URL) {
			throw new ReferenceError(
				'API_BASE_URL environment variable must be provided'
			);
		}

		ApiClient.use({
			baseUrl: process.env.API_BASE_URL,
		});
	}
}
