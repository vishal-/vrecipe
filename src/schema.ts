import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const requests = sqliteTable('requests', {
    id: text('id').primaryKey(),
    request_method: text('request_method').notNull(),
    request_time: text('request_time').notNull(),
})
