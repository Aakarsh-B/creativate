import { promises as fs } from 'fs';

export const getData = async () => {
    const file = await fs.readFile(process.cwd() + '/utils/json/productList.json', 'utf8');

    return JSON.parse(file);
}