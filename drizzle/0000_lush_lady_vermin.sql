CREATE TABLE "books" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"author" text NOT NULL,
	"year" integer,
	"added_at" timestamp DEFAULT now() NOT NULL
);
