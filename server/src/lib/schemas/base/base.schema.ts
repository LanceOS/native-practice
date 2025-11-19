import { boolean, text, timestamp, uuid } from "drizzle-orm/pg-core";


export const base = {
    id: uuid("id").primaryKey(),
    type: text("type").notNull(),
    isDeleted: boolean("isDeleted").default(false).notNull(),
    createdAt: timestamp("createdAt").defaultNow(),
    updatedAt: timestamp("updatedAt").defaultNow().$onUpdate(() => new Date()),
}