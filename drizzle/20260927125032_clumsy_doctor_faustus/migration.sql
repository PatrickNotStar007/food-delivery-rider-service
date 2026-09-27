CREATE TYPE "rider_statuses" AS ENUM('dispatched');--> statement-breakpoint
CREATE TABLE "dispatches" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"order_id" uuid NOT NULL,
	"customerName" varchar(100) NOT NULL,
	"item" varchar(100) NOT NULL,
	"rider_status" "rider_statuses" DEFAULT 'dispatched'::"rider_statuses" NOT NULL,
	"created_at" timestamp DEFAULT now()
);
