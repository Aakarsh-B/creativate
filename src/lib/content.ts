import { promises as fs } from "fs";
import path from "path";

// Local replacement for the old WordPress REST API.
// Content lives in src/content as JSON with the same shape WordPress returned,
// so every page and component keeps rendering exactly as before.

const CONTENT_DIR = path.join(process.cwd(), "src/content");
const DEFAULT_PER_PAGE = 10; // WordPress default when per_page is not given

async function readCollection(name: string): Promise<any[]> {
	const dir = path.join(CONTENT_DIR, name);
	const stat = await fs.stat(dir).catch(() => null);

	if (stat?.isDirectory()) {
		const files = (await fs.readdir(dir)).filter((f) => f.endsWith(".json"));
		const items = await Promise.all(
			files.map(async (f) =>
				JSON.parse(await fs.readFile(path.join(dir, f), "utf8"))
			)
		);
		// WordPress default ordering: newest first
		return items.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
		);
	}

	return JSON.parse(await fs.readFile(`${dir}.json`, "utf8"));
}

// Accepts the same paths the old WordPress calls used,
// e.g. "/our-blog?acf_format=standard&per_page=100" or "/pages?slug=home".
export async function getContent(query: string): Promise<any[]> {
	const [rawPath, search = ""] = query.split("?");
	const name = rawPath.replace(/^\/|\/$/g, "");
	const params = new URLSearchParams(search);

	let items = await readCollection(name);

	const slug = params.get("slug");
	if (slug) {
		items = items.filter((item) => item.slug === slug);
	}

	const perPage = Number(params.get("per_page")) || DEFAULT_PER_PAGE;
	return items.slice(0, perPage);
}
