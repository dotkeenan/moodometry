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

ALTER TABLE IF EXISTS ONLY public."entryCategories" DROP CONSTRAINT IF EXISTS "entryCategories_fk1";
ALTER TABLE IF EXISTS ONLY public."entryCategories" DROP CONSTRAINT IF EXISTS "entryCategories_fk0";
ALTER TABLE IF EXISTS ONLY public.entries DROP CONSTRAINT IF EXISTS entries_fk1;
ALTER TABLE IF EXISTS ONLY public.entries DROP CONSTRAINT IF EXISTS entries_fk0;
ALTER TABLE IF EXISTS ONLY public.moods DROP CONSTRAINT IF EXISTS moods_pk;
ALTER TABLE IF EXISTS ONLY public.events DROP CONSTRAINT IF EXISTS events_pk;
ALTER TABLE IF EXISTS ONLY public.entries DROP CONSTRAINT IF EXISTS entries_pk;
ALTER TABLE IF EXISTS ONLY public.categories DROP CONSTRAINT IF EXISTS categories_pk;
ALTER TABLE IF EXISTS public.moods ALTER COLUMN "moodId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.events ALTER COLUMN "eventsId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.entries ALTER COLUMN "entryId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.categories ALTER COLUMN "categoryId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."moods_moodId_seq";
DROP TABLE IF EXISTS public.moods;
DROP SEQUENCE IF EXISTS public."events_eventsId_seq";
DROP TABLE IF EXISTS public.events;
DROP TABLE IF EXISTS public."entryCategories";
DROP SEQUENCE IF EXISTS public."entries_entryId_seq";
DROP TABLE IF EXISTS public.entries;
DROP SEQUENCE IF EXISTS public."categories_categoryId_seq";
DROP TABLE IF EXISTS public.categories;
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
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    "categoryId" integer NOT NULL,
    label text NOT NULL
);


--
-- Name: categories_categoryId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."categories_categoryId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_categoryId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."categories_categoryId_seq" OWNED BY public.categories."categoryId";


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
-- Name: entryCategories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."entryCategories" (
    "entryId" integer NOT NULL,
    "categoryId" integer NOT NULL
);


--
-- Name: events; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.events (
    "eventsId" integer NOT NULL,
    label text NOT NULL,
    "imageUrl" text NOT NULL
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
-- Name: categories categoryId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN "categoryId" SET DEFAULT nextval('public."categories_categoryId_seq"'::regclass);


--
-- Name: entries entryId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.entries ALTER COLUMN "entryId" SET DEFAULT nextval('public."entries_entryId_seq"'::regclass);


--
-- Name: events eventsId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events ALTER COLUMN "eventsId" SET DEFAULT nextval('public."events_eventsId_seq"'::regclass);


--
-- Name: moods moodId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.moods ALTER COLUMN "moodId" SET DEFAULT nextval('public."moods_moodId_seq"'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.categories ("categoryId", label) FROM stdin;
\.


--
-- Data for Name: entries; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.entries ("entryId", "moodId", "eventId", note, participants, "time") FROM stdin;
\.


--
-- Data for Name: entryCategories; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."entryCategories" ("entryId", "categoryId") FROM stdin;
\.


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.events ("eventsId", label, "imageUrl") FROM stdin;
\.


--
-- Data for Name: moods; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.moods ("moodId", label, "imageUrl") FROM stdin;
\.


--
-- Name: categories_categoryId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."categories_categoryId_seq"', 1, false);


--
-- Name: entries_entryId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."entries_entryId_seq"', 1, false);


--
-- Name: events_eventsId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."events_eventsId_seq"', 1, false);


--
-- Name: moods_moodId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."moods_moodId_seq"', 1, false);


--
-- Name: categories categories_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pk PRIMARY KEY ("categoryId");


--
-- Name: entries entries_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.entries
    ADD CONSTRAINT entries_pk PRIMARY KEY ("entryId");


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
-- Name: entryCategories entryCategories_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."entryCategories"
    ADD CONSTRAINT "entryCategories_fk0" FOREIGN KEY ("entryId") REFERENCES public.entries("entryId");


--
-- Name: entryCategories entryCategories_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."entryCategories"
    ADD CONSTRAINT "entryCategories_fk1" FOREIGN KEY ("categoryId") REFERENCES public.categories("categoryId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

