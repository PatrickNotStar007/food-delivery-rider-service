import { Injectable } from '@nestjs/common';
import { db } from './db/db';
import { dispatchesTable } from './db/schema';

const RIDERS = ['Ivan', 'Sirgay', 'Mikhail'];

@Injectable()
export class AppService {
  async dispatchRider(data: {
    orderId: string;
    customerName: string;
    item: string;
  }) {
    const rider = RIDERS[Math.floor(Math.random() * RIDERS.length)];

    const [dispatch] = await db
      .insert(dispatchesTable)
      .values({
        orderId: data.orderId,
        customerName: data.customerName,
        item: data.item,
        riderStatus: 'dispatched',
      })
      .returning();

    console.log(`Dispatch saved with ID: ${dispatch.id}`);
    console.log(
      `Rider ${rider} is on the way with ${data.item} for ${data.customerName}`,
    );
  }
}
