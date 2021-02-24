--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: num; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.num (
    id integer NOT NULL,
    state1 integer NOT NULL,
    state2 integer NOT NULL
);


ALTER TABLE public.num OWNER TO postgres;

--
-- Name: num_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.num_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.num_id_seq OWNER TO postgres;

--
-- Name: num_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.num_id_seq OWNED BY public.num.id;


--
-- Name: voltin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.voltin (
    id integer NOT NULL,
    voltin1 integer NOT NULL,
    voltin2 integer NOT NULL
);


ALTER TABLE public.voltin OWNER TO postgres;

--
-- Name: voltin_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.voltin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.voltin_id_seq OWNER TO postgres;

--
-- Name: voltin_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.voltin_id_seq OWNED BY public.voltin.id;


--
-- Name: num id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.num ALTER COLUMN id SET DEFAULT nextval('public.num_id_seq'::regclass);


--
-- Name: voltin id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voltin ALTER COLUMN id SET DEFAULT nextval('public.voltin_id_seq'::regclass);


--
-- Data for Name: num; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.num (id, state1, state2) FROM stdin;
1	0	0
\.


--
-- Data for Name: voltin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.voltin (id, voltin1, voltin2) FROM stdin;
1	120	140
\.


--
-- Name: num_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.num_id_seq', 1, true);


--
-- Name: voltin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.voltin_id_seq', 1, true);


--
-- Name: num num_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.num
    ADD CONSTRAINT num_pkey PRIMARY KEY (id);


--
-- Name: voltin voltin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voltin
    ADD CONSTRAINT voltin_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

