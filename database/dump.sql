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
    "eventsId" integer NOT NULL,
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

COPY public.entries ("entryId", "moodId", "eventsId", note, participants, "time") FROM stdin;
86	1	1	Went out to coffee with Zack and he just told me about this new app called Moodometry.  He said it's a great way to track your daily moods and activities	Zack	2020-11-01 12:25:15.367456-08
87	2	6	Grabbed some drinks with Austin and showed him Moodometry.  He was looking for something just like this.	Austin	2020-11-01 18:45:15.367456-08
88	4	11	Man... Drank too much with Austin last night... I guess I made a huge feast last night and left a mess	Me	2020-11-02 09:30:15.367456-08
89	3	7	Feeling pretty hungover still, but I gotta work on this crazy ass Wicked Sales project... It's gonna be rough	Me	2020-11-02 13:11:15.367456-08
90	2	8	Was struggling with Wicked Sales.  I hit up Tim for help, but he was playing Smash.  Jk he helped me out	Tim	2020-11-03 13:15:47.367456-08
91	1	9	Decided to take a break from coding and learn how to use Ableton from Austin during lunch	Austin	2020-11-04 13:30:47.367456-08
92	1	8	Back on the grind.  Troubleshooting our Wicked Sales Code with Austin and Zack in Google Meets	Zack, Austin	2020-11-04 17:07:47.367456-08
93	5	7	My neck is killing me.  I'm not sure if I slept on it wrong or I'm stressed out... or both	Me	2020-11-05 08:27:47.367456-08
94	2	4	It's Fridayyy thennn~ It's Saturday, Sunday, WHAT?!  Goin snowboarding with the fam!	Me, Dad, Jake, Blake	2020-11-06 04:59:47.367456-08
95	3	10	Haven't done laundry in a month.  Someone forgot about their clothes and its all mildewy	Me, Bad Roommate	2020-11-07 11:37:47.367456-08
96	4	5	Lost my team the round by a shoulder peeking awper during a lag spike.	Me, bad internet	2020-11-08 20:09:47.367456-08
97	3	8	Back on the coding grind.  Why is backend so confusing...  This is for some nerds!	LFZ Crew	2020-11-09 10:05:47.367456-08
98	5	7	My UberEats came and I asked for no cheese in my crunchwrap supreme cause I have IBS, but they put it in and now I'm paying the price	Me, TacoBell	2020-11-09 12:59:47.367456-08
99	2	1	Can't have enough coffee.  Decided to re-energize and meet up with Scott at Starbucks for some social distanced coffee convos	Scott	2020-11-09 18:19:47.367456-08
100	3	2	Crazy roommate came in with a White Claw and said whoever finishes last has to buy the next pack.  It's not even noon...	Eddy	2020-11-10 11:23:47.367456-08
101	4	11	My sister came to visit with her dog Mochi and he $#!* on the rug!	Ronnie, Mochi	2020-11-10 14:14:47.367456-08
102	5	12	My roommate threw a dinner party and left all the dishes and trash out, then went out of town... sick bro.  What a Chad.	Chad	2020-11-11 08:13:47.367456-08
103	1	1	Nothin' like a fresh pot of coffee!~	Me	2020-11-11 17:39:47.367456-08
104	2	8	Burnin' the midnight oil tonight.  Gotta finish this feature up!	Me	2020-11-11 23:39:47.367456-08
105	1	8	Senior project timeee, oh lawd.  Figma, we meet again...	Me	2020-11-10 10:39:47.367456-08
106	3	9	I spent a long time on this beat and then Austin told me it's straight CHEEKZ	Austin, My destroyed ego	2020-11-09 10:11:47.367456-08
107	1	3	Got a lunch date with a Michelle.  We met through a mutual friend at a get-together, hope it goes well!	Michelle	2020-11-12 10:11:47.367456-08
108	4	3	Got back from the disaster of a date.  Things were going well but then she told me she uses spaces instead of tabs.  Deleting her number	Michelle	2020-11-12 10:13:13.367456-08
109	2	3	Michelle realized told me she see's why I think tabs are supreme, and she said she's gonna make a macro that uses tab instead of space.	Michelle	2020-11-12 15:29:13.367456-08
110	3	10	I guess it's about time to do something about this heaping pile of dirty underwear... or flip em' inside out? hmm	Me	2020-11-13 09:29:13.367456-08
111	1	4	Found out Jason and Zack are into snowboarding! We boutta be shred buddies!  ;)	Zack, Jason	2020-11-13 20:00:13.367456-08
112	2	6	I'm really tired, but John just came home super drunk and is making me drink with him	John	2020-11-13 23:22:13.367456-08
113	3	7	Our fridge just broke down and we're too cheap to get someone to fix it... We're all on Reddit and Youtube trying to find a way	John, Eddy, Melissa	2020-11-14 09:50:13.367456-08
115	1	5	Been a while since I fragged with the boys.  Got my gaming socks on.  Apex Legends let's goooo!	Me, Jon, Tyler, Alex, Tom	2020-11-14 21:31:13.367456-08
117	1	8	Presenting our senior project!!	Austin, Zack, Keenan, and all of LFZ	2020-11-16 11:19:17.023-08
124	2	6	Got a new bottle of wine!	Mel	2020-12-01 18:56:11.264-08
129	5	8	HardStuck	Keenan	2020-12-02 20:23:15.248-08
128	2	11	Cleaning Up Bugs!!!	Keenan Ng	2020-12-02 19:56:38.119-08
131	1	8	Finished User Can Update Entry!!	Keenan Ng	2020-12-03 22:54:45.5-08
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

SELECT pg_catalog.setval('public."entries_entryId_seq"', 133, true);


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
    ADD CONSTRAINT entries_fk1 FOREIGN KEY ("eventsId") REFERENCES public.events("eventsId");


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

