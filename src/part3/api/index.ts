type method = "GET" | "POST" | "PUT" | "DELETE";

type OptionalOptions = {
    body?: BodyInit;
    signal?: AbortSignal;
};

type Params = {
    endPoint: `/${string}`; // url should start with a /
    method?: method;
    filter?: string;
} & OptionalOptions;

type Options = {
    headers: {};
    method: method;
} & OptionalOptions;

export default async ({ endPoint, method = "GET", filter, body, signal }: Params) => {
    let url = "https://jsonplaceholder.typicode.com" + endPoint;
    if (filter) {
        url += `?${filter}`;
    }

    const options: Options = {
        headers: {
            "Content-Type": "application/json",
        },
        method: method,
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    if (signal) {
        options.signal = signal;
    }

    try {
        const res = await fetch(url, { ...options });

        if (!res.ok) {
            throw new Error(`Something went wrong. Status: ${res.status}`);
        }

        return await res.json();
    } catch (err: unknown) {
        if (err instanceof Error) {
            if (err?.message.includes("abort")) {
                return;
            }

            throw err;
        }
    }
};
