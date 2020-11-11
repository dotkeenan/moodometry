--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.events DROP CONSTRAINT IF EXISTS events_fk0;
ALTER TABLE IF EXISTS ONLY public.entries DROP CONSTRAINT IF EXISTS entries_fk1;
ALTER TABLE IF EXISTS ONLY public.entries DROP CONSTRAINT IF EXISTS entries_fk0;
ALTER TABLE IF EXISTS ONLY public.moods DROP CONSTRAINT IF EXISTS moods_pk;
ALTER TABLE IF EXISTS ONLY public.events DROP CONSTRAINT IF EXISTS events_pk;
ALTER TABLE IF EXISTS ONLY public."eventTypes" DROP CONSTRAINT IF EXISTS "eventTypes_pk";
ALTER TABLE IF EXISTS ONLY public.entries DROP CONSTRAINT IF EXISTS entries_pk;
ALTER TABLE IF EXISTS public.moods ALTER COLUMN "moodId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.events ALTER COLUMN "eventsId" DROP DEFAULT;
ALTER TABLE IF EXISTS public."eventTypes" ALTER COLUMN "eventTypeId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.entries ALTER COLUMN "entryId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."moods_moodId_seq";
DROP TABLE IF EXISTS public.moods;
DROP SEQUENCE IF EXISTS public."events_eventsId_seq";
DROP TABLE IF EXISTS public.events;
DROP SEQUENCE IF EXISTS public."eventTypes_eventTypeId_seq";
DROP TABLE IF EXISTS public."eventTypes";
DROP SEQUENCE IF EXISTS public."entries_entryId_seq";
DROP TABLE IF EXISTS public.entries;
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: entries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.entries (
    "entryId" integer NOT NULL,
    "moodId" integer NOT NULL,
    "eventId" integer NOT NULL,
    note text NOT NULL,
    participants text NOT NULL,
    "time" timestamp with time zone NOT NULL
);


--
-- Name: entries_entryId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."entries_entryId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: entries_entryId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."entries_entryId_seq" OWNED BY public.entries."entryId";


--
-- Name: eventTypes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."eventTypes" (
    "eventTypeId" integer NOT NULL,
    label text NOT NULL
);


--
-- Name: eventTypes_eventTypeId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."eventTypes_eventTypeId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: eventTypes_eventTypeId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."eventTypes_eventTypeId_seq" OWNED BY public."eventTypes"."eventTypeId";


--
-- Name: events; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.events (
    "eventsId" integer NOT NULL,
    label text NOT NULL,
    "imageUrl" text NOT NULL,
    "eventTypeId" integer NOT NULL
);


--
-- Name: events_eventsId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."events_eventsId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: events_eventsId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."events_eventsId_seq" OWNED BY public.events."eventsId";


--
-- Name: moods; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.moods (
    "moodId" integer NOT NULL,
    label text NOT NULL,
    "imageUrl" text NOT NULL
);


--
-- Name: moods_moodId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."moods_moodId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: moods_moodId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."moods_moodId_seq" OWNED BY public.moods."moodId";


--
-- Name: entries entryId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.entries ALTER COLUMN "entryId" SET DEFAULT nextval('public."entries_entryId_seq"'::regclass);


--
-- Name: eventTypes eventTypeId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."eventTypes" ALTER COLUMN "eventTypeId" SET DEFAULT nextval('public."eventTypes_eventTypeId_seq"'::regclass);


--
-- Name: events eventsId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events ALTER COLUMN "eventsId" SET DEFAULT nextval('public."events_eventsId_seq"'::regclass);


--
-- Name: moods moodId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.moods ALTER COLUMN "moodId" SET DEFAULT nextval('public."moods_moodId_seq"'::regclass);


--
-- Data for Name: entries; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.entries ("entryId", "moodId", "eventId", note, participants, "time") FROM stdin;
1	3	8	I am coding and stretching and feeling meh	zack	2020-11-10 20:20:37.124398-08
\.


--
-- Data for Name: eventTypes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."eventTypes" ("eventTypeId", label) FROM stdin;
1	social
2	hobbies
3	productivity
4	chores
\.


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.events ("eventsId", label, "imageUrl", "eventTypeId") FROM stdin;
1	drinking coffee	/images/events/coffee-solid.svg	1
2	partying	/images/events/glass-cheers-solid.svg	1
3	date	/images/events/heart-solid.svg	1
4	snowboarding	/images/events/snowboarding-solid.svg	2
5	gaming	/images/events/gamepad-solid.svg	2
6	drinking	/images/events/flask-solid.svg	2
7	studying	/images/events/pencil-alt-solid.svg	3
8	coding	/images/events/laptop-code-solid.svg	3
9	making beats	/images/events/drum-solid.svg	3
10	laundry	/images/events/outline-local-laundry-service.svg	4
11	cleaning	/images/events/broom-solid.svg	4
12	trash	/images/events/trash-solid.svg	4
\.


--
-- Data for Name: moods; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.moods ("moodId", label, "imageUrl") FROM stdin;
1	ecstatic	/images/moods/laugh-beam-regular.svg
2	happy	/images/moods/smile-regular.svg
3	meh	/images/moods/meh-regular.svg
4	bad	/images/moods/frown-regular.svg
5	terrible	/images/moods/angry-regular.svg
\.


--
-- Name: entries_entryId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."entries_entryId_seq"', 1, true);


--
-- Name: eventTypes_eventTypeId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."eventTypes_eventTypeId_seq"', 4, true);


--
-- Name: events_eventsId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."events_eventsId_seq"', 12, true);


--
-- Name: moods_moodId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."moods_moodId_seq"', 5, true);


--
-- Name: entries entries_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.entries
    ADD CONSTRAINT entries_pk PRIMARY KEY ("entryId");


--
-- Name: eventTypes eventTypes_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."eventTypes"
    ADD CONSTRAINT "eventTypes_pk" PRIMARY KEY ("eventTypeId");


--
-- Name: events events_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pk PRIMARY KEY ("eventsId");


--
-- Name: moods moods_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.moods
    ADD CONSTRAINT moods_pk PRIMARY KEY ("moodId");


--
-- Name: entries entries_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.entries
    ADD CONSTRAINT entries_fk0 FOREIGN KEY ("moodId") REFERENCES public.moods("moodId");


--
-- Name: entries entries_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.entries
    ADD CONSTRAINT entries_fk1 FOREIGN KEY ("eventId") REFERENCES public.events("eventsId");


--
-- Name: events events_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_fk0 FOREIGN KEY ("eventTypeId") REFERENCES public."eventTypes"("eventTypeId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

