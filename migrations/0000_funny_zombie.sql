CREATE TABLE "todo" (
	"id" serial PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"done" boolean DEFAULT false NOT NULL
);
