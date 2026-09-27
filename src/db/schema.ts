import { pgEnum, pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const riderStatusEnum = pgEnum('rider_statuses', ['dispatched']);

export const dispatchesTable = pgTable('dispatches', {
  id: uuid('id').primaryKey().defaultRandom(),
  orderId: uuid('order_id').notNull(),
  customerName: varchar('customerName', { length: 100 }).notNull(),
  item: varchar('item', { length: 100 }).notNull(),
  riderStatus: riderStatusEnum('rider_status').notNull().default('dispatched'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const Dispatch = typeof dispatchesTable.$inferSelect;
export const NewDispatch = typeof dispatchesTable.$inferInsert;
