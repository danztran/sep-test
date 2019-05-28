CREATE TABLE "USER" (
"ID" varchar(50) NOT NULL,
"USERNAME" varchar(50) NOT NULL,
"PASSWORD" varchar(50),
"EMAIL" varchar(320),
"NAME" varchar(50) NOT NULL,
PRIMARY KEY ("ID") ,
CONSTRAINT "UQ_USERNAME" UNIQUE ("USERNAME"),
CONSTRAINT "UQ_EMAIL" UNIQUE ("EMAIL")
)
WITHOUT OIDS;
CREATE UNIQUE INDEX "IDX_ID" ON "USER" USING hash ("ID");
CREATE UNIQUE INDEX "IDX_USERNAME" ON "USER" USING hash ("USERNAME");

CREATE TABLE "EVENT_ROLE" (
"USER_ID" varchar(50) NOT NULL,
"ROLE_ID" smallint NOT NULL,
"EVENT_ID" varchar(50) NOT NULL,
PRIMARY KEY ("USER_ID", "ROLE_ID", "EVENT_ID") 
)
WITHOUT OIDS;

ALTER TABLE "EVENT_ROLE" ADD CONSTRAINT "fk_EVENT_ROLE_USER_1" FOREIGN KEY ("USER_ID") REFERENCES "USER" ("ID");

