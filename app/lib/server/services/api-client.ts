interface ApiClientOptions {
	baseUrl: string;
}

export class ApiClient {
	private static _instance: ApiClient | undefined = undefined;
	private static _options: ApiClientOptions | undefined = undefined;

	private constructor(private options: ApiClientOptions) {}

	public static get instance() {
		if (!ApiClient._instance) {
			if (!ApiClient._options) {
				throw new ReferenceError(
					'Failed to initialize ApiClient. An option must be provided using ApiClient.use(options) first'
				);
			}
			ApiClient._instance = new ApiClient(ApiClient._options);
			ApiClient._options = undefined;
		}
		return ApiClient._instance;
	}

	public static use(options: ApiClientOptions) {
		ApiClient._options = options;
	}
}
