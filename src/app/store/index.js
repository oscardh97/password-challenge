import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';

const dbPath = "./db.json";
class Store {
    constructor() {
        this.data = [];
        this.loadData();
    }
    async loadData() {
        try {
            if (existsSync(dbPath)) {
                const data = await readFile(dbPath);
                const dataString = data.toString();
        
                this.data = JSON.parse(dataString);
            }
        } catch (err) {
            throw new Error("There was an error when trying to load the database");
        }
    }

    async create(row) {
        try {
            const newRow = {
                ...row,
                id: uuidv4()
            };

            this.data.push(newRow);

            await this.syncDb();

            return newRow;
        } catch (err) {
            throw new Error("There was an error when trying to write in the database");
        }
    }
    
    async syncDb() {
        await writeFile(dbPath, JSON.stringify(this.data));
    }

    read(query) {
        if (!query) {
            return this.data;
        }

        const result = [];
        try {
            for (let i = 0; i < this.data.length; i++) {
                let match = true;
                for (let FILTER in query) {
                    if (query[FILTER] !== this.data[i][FILTER]) {
                        match = false;
                    }
                }

                if (match) {
                    result.push(this.data[i]);
                }
            }

            return result;
        } catch (err) {
            throw new Error("There was an error when trying to write in the database");
        }
    }

    readOne(query) {
        try {
            for (let i = 0; i < this.data.length; i++) {
                let match = true;
                for (let FILTER in query) {
                    if (query[FILTER] !== this.data[i][FILTER]) {
                        match = false;
                    }
                }

                if (match) {
                    return this.data[i];
                }
            }

        } catch (err) {
            throw new Error("There was an error when trying to write in the database");
        }
    }

    async update(id, data) {
        try {
            for (let i = 0; i < this.data.length; i++) {
                if (this.data[i].id === id) {
                    this.data[i] = {
                        ...this.data[i],
                        ...data
                    };
                    await this.syncDb();

                    return this.data[i];
                }
            }

            throw new Error("Object not found");
        } catch (err) {
            throw new Error(err.message || "There was an error when trying to write in the database");
        }
    }

    async delete(id) {
        try {
            for (let i = 0; i < this.data.length; i++) {
                if (this.data[i].id === id) {
                    this.data.splice(i, 1);
                    await this.syncDb();
                }
            }
            throw new Error("Object not found");
        } catch (err) {
            throw new Error(err.message || "There was an error when trying to write in the database");
        }
    }
}

export default new Store();