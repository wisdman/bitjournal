--
-- PostgreSQL database dump
--

-- Dumped from database version 10.1
-- Dumped by pg_dump version 10.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: coins; Type: TABLE; Schema: public; Owner: bitjournal
--

CREATE TABLE coins (
    symbol character varying(16) NOT NULL,
    enable boolean DEFAULT true NOT NULL,
    hot boolean DEFAULT false NOT NULL,
    title character varying(160) DEFAULT ''::character varying NOT NULL,
    "ogTitle" character varying(160) DEFAULT ''::character varying NOT NULL,
    description character varying(160) DEFAULT ''::character varying NOT NULL,
    "ogDescription" character varying(160) DEFAULT ''::character varying NOT NULL,
    founder text DEFAULT ''::text NOT NULL,
    "startDate" date,
    url text DEFAULT ''::text NOT NULL,
    algorithm text DEFAULT ''::text NOT NULL,
    "proofType" text DEFAULT ''::text NOT NULL,
    "maxSupply" numeric DEFAULT 0 NOT NULL,
    "availableSupply" numeric DEFAULT 0 NOT NULL,
    "blockReward" numeric DEFAULT 0 NOT NULL,
    "lastBlockTS" timestamp without time zone,
    "lastBlockNumber" numeric DEFAULT 0 NOT NULL,
    "hashRate" numeric DEFAULT 0 NOT NULL,
    "priceUSD" numeric DEFAULT 0 NOT NULL,
    "priceBTC" numeric DEFAULT 0 NOT NULL,
    "priceRUB" numeric DEFAULT 0 NOT NULL,
    histoday jsonb DEFAULT '{}'::jsonb NOT NULL,
    rating jsonb DEFAULT '{}'::jsonb NOT NULL,
    branding jsonb DEFAULT '{}'::jsonb NOT NULL,
    volume24h numeric DEFAULT 0 NOT NULL,
    change1h numeric DEFAULT 0 NOT NULL,
    change24h numeric DEFAULT 0 NOT NULL,
    change7d numeric DEFAULT 0 NOT NULL,
    CONSTRAINT coins__check__availablesupply CHECK (("availableSupply" >= (0)::numeric)),
    CONSTRAINT coins__check__blockreward CHECK (("blockReward" >= (0)::numeric)),
    CONSTRAINT coins__check__branding CHECK (((branding)::text ~ '^{'::text)),
    CONSTRAINT coins__check__hashrate CHECK (("hashRate" >= (0)::numeric)),
    CONSTRAINT coins__check__histoday CHECK (((histoday)::text ~ '^{'::text)),
    CONSTRAINT coins__check__lastblocknumber CHECK (("lastBlockNumber" >= (0)::numeric)),
    CONSTRAINT coins__check__maxsupply CHECK (("maxSupply" >= (0)::numeric)),
    CONSTRAINT coins__check__pricebtc CHECK (("priceBTC" >= (0)::numeric)),
    CONSTRAINT coins__check__pricerub CHECK (("priceRUB" >= (0)::numeric)),
    CONSTRAINT coins__check__priceusd CHECK (("priceUSD" >= (0)::numeric)),
    CONSTRAINT coins__check__rating CHECK (((rating)::text ~ '^{'::text)),
    CONSTRAINT coins__check__symbol CHECK (((symbol)::text ~ '^[A-Z0-9*@$]+$'::text)),
    CONSTRAINT coins__check__volume24h CHECK ((volume24h >= (0)::numeric))
);


ALTER TABLE coins OWNER TO bitjournal;

--
-- Data for Name: coins; Type: TABLE DATA; Schema: public; Owner: bitjournal
--

COPY coins (symbol, enable, hot, title, "ogTitle", description, "ogDescription", founder, "startDate", url, algorithm, "proofType", "maxSupply", "availableSupply", "blockReward", "lastBlockTS", "lastBlockNumber", "hashRate", "priceUSD", "priceBTC", "priceRUB", histoday, rating, branding, volume24h, change1h, change24h, change7d) FROM stdin;
JUDGE	t	f	JudgeCoin					\N	https://bitcointalk.org/index.php?topic=666335.40	X13	PoW/PoS	21600000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MARYJ	t	f	MaryJane Coin					\N	https://www.facebook.com/pages/Maryjanecoin/300461293471235	X15	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ROYAL	t	f	RoyalCoin					\N	-	X13	PoS	0	0	0	\N	0	0	0.00382575	0.00000023	0.2247061914	{}	{}	{}	144.401	-0.03	-0.78	16.2
ADA	t	t	Cardano					\N		Ouroboros	PoS	45000000000	25927070538	0	\N	0	0	0.512282	0.0000308	30.0889857264	{}	{}	{}	175757000	5.68	5.74	278.91
GMX	t	f	GoldMaxCoin					\N	http://www.gmxcoin.org/	Scrypt	PoW	84000000	0	0	\N	0	0	0.0114928	0.00000069	0.6750319066	{}	{}	{}	342.38	-0.03	97.12	601.48
KUBO	t	f	KubosCoin					\N	http://www.kuboscoin.usa.cc/	Scrypt	PoW/PoS	2940000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TEAM	t	f	TeamUp					\N	-	PoS	PoS	301000000	301000000	0	\N	0	0	0.000332674	0.00000002	0.0195396739	{}	{}	{}	43.2476	0.15	0	0
SCT	t	f	ScryptToken					\N	-	Scrypt	PoW/PoS	8842105	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LANA	t	f	LanaCoin					\N	-	SHA256D	PoW/PoS	7506000000	844565253.4993926	1070.26012015343	\N	194849	18192249489643	0.000499468	0.00000003	0.0293363529	{}	{}	{}	1524.07	0.46	10.82	26.42
ELE	t	f	Elementrem					\N	http://www.elementrem.org/	Ethash	PoW	0	25691537	0	\N	0	0	0.101466	0.0000061	5.9596258032	{}	{}	{}	14073.2	0.29	0	70.57
GCC	t	f	TheGCCcoin					\N	-	Scrypt	PoW	2400000000	20285537	0	\N	0	0	0.00598813	0.00000036	0.3517140132	{}	{}	{}	28.3596	0.13	-2.67	9.64
AND	t	f	AndromedaCoin					\N	-	X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
VEN	t	f	VeChain					\N		N/A	N/A	1000000000	277162633	0	\N	0	0	1.30098	0.00007966	76.2959721	{}	{}	{}	0	0	0	0
JPC	t	f	JackPotCoin					\N	http://jackpotcoin.info/	SHA3	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LIMX	t	f	LimeCoinX					\N	-	X11	PoW	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GLX	t	f	GalaxyCoin					\N	http://galaxy.cryptcoins.net/	Scrypt	PoW/PoS	538214400	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XLM	t	f	Stellar					\N	https://www.stellar.org/	N/A	N/A	100804167793	17858704790	0	\N	0	0	0.265046	0.00001593	15.5675298192	{}	{}	{}	230318000	4.62	12.82	74.19
HUGE	t	f	BigCoin					\N	http://www.hardforkcoin.org/	Blake	PoW	164429865	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MED	t	f	MediterraneanCoin					\N	http://www.mediterraneancoin.org/	HybridScryptHash256	PoW	200000000	40431856.9	20	\N	943763	0	0	0	0	{}	{}	{}	0	0	0	0
ZCC	t	f	ZCC Coin					\N	http://www.zccoin.org/?lang=en	Scrypt	PoW	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XRB	t	f	RaiBlocks					\N		Blake2b	PoW	133248290	133248290	0	\N	0	0	4.02703	0.0002421	236.528412456	{}	{}	{}	8282300	-2.18	23.87	58.52
XEL	t	f	Elastic					\N		N/A	PoW	100000000	88155288	0	\N	0	0	0.596983	0.00003589	35.0639159016	{}	{}	{}	3114400	-1.63	23.28	48.27
BNB	t	f	Binance Coin					\N		N/A	N/A	200000000	99014000	0	\N	0	0	5.26512	0.00031653	309.247876224	{}	{}	{}	41200700	1.51	-4.85	82.55
DGB	t	f	DigiByte					\N	http://www.digibyte.co/	Multiple	PoW	21000000000	9579380635	0	\N	0	0	0.0516391	0.0000031	3.0330328663	{}	{}	{}	104856000	-3.47	42.97	221.05
XMR	t	t	Monero					\N	http://getmonero.org/	CryptoNight	PoW	0	15503703	8.558746545183	\N	1469180	479563393.99167	458.246	0.0275493	26915.1704592	{}	{}	{}	462852000	-0.26	26.21	43.95
PIVX	t	f	PIVX					\N		Quark	PoW/PoS	0	55180060	0	\N	0	0	8.67299	0.00052141	509.409802248	{}	{}	{}	7714590	0.39	22.44	70.21
QTUM	t	f	Qtum					\N		POS 3.0	PoS	100000000	73748056	0	\N	0	0	66.9927	0.00402753	3934.82963304	{}	{}	{}	1064670000	-0.21	8.56	275.91
SALT	t	f	SALT					\N		N/A	N/A	120000000	51573556	0	\N	0	0	9.09717	0.00054691	534.324099384	{}	{}	{}	24734300	0.14	-1.12	18.66
XEM	t	t	NEM					\N	http://www.nem.io/	N/A	PoI	8999999999	8999999999	0	\N	0	0	0.97675	0.00005872	57.3696066	{}	{}	{}	121009000	-1.38	11.73	82.98
ALT	t	f	Altcoin					\N				0	122175	0	\N	0	0	22.9783	0.00138143	1349.63504616	{}	{}	{}	7419.37	0.15	22.07	15.56
LSK	t	f	Lisk					\N	https://lisk.io	DPoS	DPoS	159918400	116148120	0	\N	0	0	19.9546	0.00119965	1172.03742192	{}	{}	{}	112332000	1.55	21.55	106.54
BTS	t	f	BitShares					\N	https://bitshares.org/	SHA-512	PoS	3600570502	2605600000	0	\N	0	0	0.62773	0.00003774	36.869847096	{}	{}	{}	143717000	-4.94	46.18	156
BCN	t	f	Bytecoin					\N	https://bytecoin.org/	CryptoNight	PoW	184470000000	183253534612	3291.68390878	\N	1423869	5263813.5916667	0.00523271	0.00000031	0.3073442684	{}	{}	{}	14957300	1.14	27.25	101.09
STCN	t	f	Stakecoin					\N		PoS	PoS	0	6000000	0	\N	0	0	2.19993	0.00018963	129.213328536	{}	{}	{}	0	0	0	0
XAS	t	f	Asch					\N		N/A	N/A	100000000	91261601	0	\N	0	0	1.49506	0.00008988	87.812648112	{}	{}	{}	8697410	1.36	7.14	105.1
GBYTE	t	f	Byteball Bytes					\N		N/A	N/A	1000000	645222	0	\N	0	0	708.666	0.0426042	41623.6392432	{}	{}	{}	5360820	2.69	30.09	146.75
POWR	t	f	Power Ledger					\N		N/A	N/A	1000000000	355736229	0	\N	0	0	1.23776	0.00007441	72.700081152	{}	{}	{}	85105300	6.07	30.14	89.37
VET	t	f	VeChain					\N				0	277162633	0	\N	0	0	1.52801	0.00009186	89.747972952	{}	{}	{}	54602900	-1.19	13.56	182.36
FRK	t	f	Franko					\N	http://frankos.org/	Scrypt	PoW	11235813	930767	0.249989755939987	\N	0	0	0.280521	0.00001517	16.4764570392	{}	{}	{}	0	-32.23	0	-31.84
SLM	t	f	Slimcoin					\N	-	N/A	PoB	0	14937439	0	\N	0	0	0.00736113	0.00000039	0.4323574428	{}	{}	{}	0	16.92	0	17.63
FCT	t	f	Factom					\N	http://factom.org/	N/A	N/A	8753873	8745102	0	\N	0	0	45.4755	0.00273394	2671.0125876	{}	{}	{}	22530800	0.8	19.41	60.49
WTC	t	f	Walton					\N		N/A	N/A	100000000	24898178	0	\N	0	0	15.6575	0.00094131	919.646394	{}	{}	{}	29260600	-5.2	30.33	108
PAY	t	f	TenX					\N		N/A	N/A	205218255.9485	104661310	0	\N	0	0	3.67835	0.00022114	216.04862292	{}	{}	{}	18645700	2.56	18.7	53.83
DRGN	t	f	Dragonchain					\N		N/A	N/A	433494437	238421940	0	\N	0	0	0.986629	0.00005931	57.9498516408	{}	{}	{}	2909440	0.79	7.41	121.87
TYC	t	f	Tyrocoin					\N				0	0	0	\N	0	0	0.016085	0.0000009	0.944755692	{}	{}	{}	0	0	0	0
FID	t	f	BITFID					\N				0	0	0	\N	0	0	0.189042	0.00001	11.1034196784	{}	{}	{}	0	0	0	0
CLINT	t	f	Clinton					\N	http://myclint.us/	SHA256	PoW	2421227	0	0	\N	0	0	0.01266	0.00000069	0.743587632	{}	{}	{}	0	-3.28	0	-2.69
CAIX	t	f	CAIx					\N	-	Scrypt	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CLR	t	f	CopperLark					\N	http://copperlark.com/	SHA256	PoW	27200000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BUK	t	f	CryptoBuk					\N	http://cryptobuck.com/	Scrypt	PoW/PoS	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CMC	t	f	CosmosCoin					\N	-	Scrypt	PoW/PoS	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BTCD	t	f	BitcoinDark					\N	http://bitcoindark.com/	SHA256	PoW/PoS	22000000	1288862	0.000958259915933013	\N	1634129	0	289.732	0.0174184	17017.4669664	{}	{}	{}	1154430	0.39	46.71	91.99
CAP	t	f	BottleCaps					\N	-	Scrypt	PoW/PoS	47433600	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CIN	t	f	CinderCoin					\N	-	Multiple	PoW/PoS	114000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EXE	t	f	ExeCoin					\N	-	Scrypt	PoW	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CNL	t	f	ConcealCoin					\N	-	X11	PoW	8500000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GIVE	t	f	GiveCoin					\N	http://givecoin.info/	X11	PoW	500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AERO	t	f	Aero Coin					\N	-	X13	PoS	7000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
YBC	t	f	YbCoin					\N	http://www.ybcoin.com/en/	Multiple	N/A	200000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CXC	t	f	CheckCoin					\N	http://www.cxc.bid/home/index.html	N/A	PoS	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
COMM	t	f	Community Coin					\N	-	Scrypt	PoW/PoS	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
COOL	t	f	CoolCoin					\N	-	Scrypt	PoS	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CRACK	t	f	CrackCoin					\N	-	X11	PoW	6000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DRKC	t	f	DarkCash					\N	-	X11	PoW/PoS	3720000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ALN	t	f	AlienCoin					\N	-	Scrypt	PoW	200000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DSB	t	f	DarkShibe					\N	https://bitcointalk.org/index.php?topic=833133.0	Scrypt	PoW	2043962	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BEN	t	f	Benjamins					\N	-	SHA256	PoW	12800000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BTG*	t	f	BitGem					\N	http://www.bitgem.pw/	Scrypt	PoW/PoS	1500000	59584.039165	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CRAIG	t	f	CraigsCoin					\N	http://craigscoin.info/	X11	PoS	30000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WEC	t	f	Wowecoin					\N				0	0	0	\N	0	0	0.102	0.00000692	5.9901438	{}	{}	{}	0	0	0	0
SIC	t	f	Swisscoin					\N				0	0	0	\N	0	0	0.000122905	0.00000001	0.0072178296	{}	{}	{}	0	0	0	0
XBS	t	f	Bitstake					\N	https://bitstake.info/	X11	PoW/PoS	1300000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DANK	t	f	DarkKush					\N	-	X13	PoW/PoS	3000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ADK	t	f	Aidos Kuneen					\N				0	0	0	\N	0	0	32.6786	0.00190002	1919.38410672	{}	{}	{}	0	0	0	0
DT	t	f	DarkToken					\N	-	NIST5	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CETI	t	f	CETUS Coin					\N	http://cetuscoin.cc/	Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SUP	t	f	Supcoin					\N	-	N/A	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MAGE	t	f	MagicCoin					\N				0	0	0	\N	0	0	13.6224	0.0009005	800.11438848	{}	{}	{}	0	0	0	0
CINNI	t	f	CINNICOIN					\N	http://www.cinnicoin.com/	Scrypt	PoW	15000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BIXC	t	f	BIXC					\N				0	0	0	\N	0	0	6.9319	0.00040078	407.14653288	{}	{}	{}	0	1.43	0	3.74
XYLO	t	f	XYLO					\N				0	0	0	\N	0	0	0.880311	0.0000531	51.7052426472	{}	{}	{}	0	0	0	0
CHASH	t	f	CleverHash					\N	http://www.cleverhash.com/	N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NXTI	t	f	NXTI					\N	-	N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WOLF	t	f	Insanity Coin					\N	-	X11	PoW	50000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
2015	t	f	2015 coin					\N	-	X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EZC	t	f	EZCoin					\N	http://www.ezcoin.org/	Scrypt	PoW	84000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ALF	t	f	AlphaCoin					\N	https://alphacoin.wordpress.com/	Scrypt	PoW	210182000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AGS	t	f	Aegis					\N	-	X13	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AMC	t	f	AmericanCoin					\N	-	Scrypt	PoW	168000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
APEX	t	f	ApexCoin					\N	-	X13	PoW/PoS	6000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ARCH	t	f	ArchCoin					\N	https://www.archcoin.co/	Scrypt	PoS	16403135	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AXR	t	f	AXRON					\N	-	N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HVC	t	f	HeavyCoin					\N	http://heavycoin.github.io/	Multiple	PoW	128000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BQC	t	f	BQCoin					\N	http://bbqcoin.org/	Scrypt	PoW	88000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ICB	t	f	IceBergCoin					\N	http://www.icebergcoin.com/	NIST5	PoW/PoS	8750000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
JBS	t	f	JumBucks Coin					\N	http://getjumbucks.com/	X11	PoW/PoS	3293010	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LSD	t	f	LightSpeedCoin					\N	-	NIST5	PoW/PoS	900000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LTCD	t	f	LitecoinDark					\N	http://www.litecoindark.com/	Scrypt	PoW	82003200	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NMB	t	f	Nimbus Coin					\N	-	X15	PoW/PoS	25000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RT2	t	f	RotoCoin					\N	-	Scrypt-n	PoW/PoS	288000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MAID	t	f	MaidSafeCoin					\N	https://maidsafe.net/	N/A	N/A	452552412	452552412	0	\N	0	0	0.792119	0.00004762	46.5252678888	{}	{}	{}	9723580	1.5	17.16	39.67
FIBRE	t	f	FIBRE					\N	http://www.fibrecoin.com/	NIST5	PoW/PoS	624000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FRAC	t	f	FractalCoin					\N	http://fractalco.in/	X11	PoW	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GDC	t	f	GrandCoin					\N	http://grandcoin.org/	Scrypt	PoW	1420609614	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LTCX	t	f	LitecoinX					\N	https://bitcointalk.org/index.php?topic=624378.0#post_	X11	PoW	84000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LXC	t	f	LibrexCoin					\N	http://www.librexcoin.com/	X11	PoW/PoS	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GLYPH	t	f	GlyphCoin					\N	-	X11	PoW/PoS	7000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GUE	t	f	GuerillaCoin					\N	http://guerillacoin.com/	X11	PoW/PoS	19500000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
JKC	t	f	JunkCoin					\N	-	Scrypt	PoW	107000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KDC	t	f	Klondike Coin					\N	-	Scrypt	PoW	20000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KEY	t	f	KeyCoin					\N	-	X13	PoW/PoS	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LAB*	t	f	CoinWorksCoin					\N	-	Multiple	PoW	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KGC	t	f	KrugerCoin					\N	http://krugercoin.co/main/	Scrypt	PoW	265420800	151447649.8	16	\N	5318276	1309719	0	0	0	{}	{}	{}	0	0	0	0
LGD*	t	f	Legendary Coin					\N	-	Scrypt	PoW/PoS	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LK7	t	f	Lucky7Coin					\N	http://lucky7coin.co.nf/	Scrypt	PoW/PoS	99792000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NRB	t	f	NoirBits					\N	http://www.noirbits.com/	SHA256	PoW	50000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NRS	t	f	NoirShares					\N	-	Scrypt	PoW/PoS	5000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LYC	t	f	LycanCoin					\N	http://lyccoin.org/	Scrypt	PoW	4950000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MIN	t	f	Minerals Coin					\N	-	X11	PoW/PoS	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MN	t	f	Cryptsy Mining Contract					\N	https://www.cryptsy.com	SHA256	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MRY	t	f	MurrayCoin					\N	https://www.murraycoin.org/	Scrypt	PoW	58000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MYST*	t	f	MysteryCoin					\N	https://mysterium.network/	X11	PoW	32433366	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NAN	t	f	NanoToken					\N	-	Scrypt	PoW	80000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RYC	t	f	RoyalCoin					\N	http://royalcoin.org/	Scrypt	PoW	140000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NAUT	t	f	Nautilus Coin					\N	http://www.nautiluscoin.com/	Scrypt	PoS	16180000	16180000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NBL	t	f	Nybble					\N	-	Scrypt	PoW	210000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NEC	t	f	NeoCoin					\N	http://neocoin.org/	Scrypt	PoW/PoS	80000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
OSC	t	f	OpenSourceCoin					\N	https://bitcointalk.org/index.php?topic=268705.0	SHA256	PoW/PoS	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
POINTS	t	f	Cryptsy Points					\N	https://www.cryptsy.com	N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PSEUD	t	f	PseudoCash					\N	-	X13	PoW/PoS	2200000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PTS*	t	f	Protoshares					\N	https://bitsharestalk.org/index.php?board=1.0	SHA256	PoW	2000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RIPO	t	f	RipOffCoin					\N	-	Scrypt	PoW	12000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RZR	t	f	RazorCoin					\N	http://ww2.razorcoin.com/?folio=9POR7JU99	Scrypt	PoW	4000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SAT2	t	f	Saturn2Coin					\N	http://saturn2.co.in/	Scrypt	PoW	15000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SHADE	t	f	ShadeCoin					\N	-	Scrypt	PoW/PoS	2000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SHLD	t	f	ShieldCoin					\N	-	X15	PoW/PoS	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TAK	t	f	TakCoin					\N	-	SHA256	PoW/PoS	7515187520	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SILK	t	f	SilkCoin					\N	http://silk-coin.com/	Scrypt	PoW/PoS	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ULTC	t	f	Umbrella					\N	http://www.umbrella.holdings/	SHA256	PoW	2625000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
UTIL	t	f	Utility Coin					\N	-	X13	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XCASH	t	f	Xcash					\N	http://www.xgenstudios.com/xcash/	Scrypt	PoW/PoS	2400000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XLB	t	f	LibertyCoin					\N	http://libertycoins.co/	X11	PoW/PoS	16500000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TMC	t	f	TimesCoin					\N	http://www.btc38.com/altcoin/tmc/	N/A	N/A	16000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SOLE	t	f	SoleCoin					\N	-	X15	PoW/PoS	1200000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XCR	t	f	Crypti					\N	http://crypti.me/	Multiple	PoS	0	100000000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NBT	t	f	NuBits					\N	https://nubits.com/	SHA256	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XSI	t	f	Stability Shares					\N	-	Scrypt	PoW/PoS	15000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MMXIV	t	f	MaieutiCoin					\N	-	SHA256	PoS	2014	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XPB	t	f	Pebble Coin					\N	-	CryptoNight	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
VTC	t	f	Vertcoin					\N	https://vertcoin.org/	Lyra2RE	PoW	84000000	42128650	0	\N	0	0	8.46656	0.000509	497.285094912	{}	{}	{}	20121100	-0.15	4.17	4.08
SPA	t	f	SpainCoin					\N	http://spaincoin.org/en/	Scrypt-n	PoW	50000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SSV	t	f	SSVCoin					\N	https://bitcointalk.org/index.php?topic=661043.0	X13	PoW	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
VOOT	t	f	VootCoin					\N	http://www.vootcoin.net/	X11	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XAI	t	f	SapienceCoin					\N	http://www.blockchainsingularity.com/	X11	PoB/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XXX	t	f	XXXCoin					\N	http://xxxcoin.info/	Scrypt	PoW/PoS	50000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ZED	t	f	ZedCoins					\N	-	Scrypt	PoW	120000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
007	t	f	007 coin					\N	-	Scrypt	PoW	989800	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TRON	t	f	Positron					\N	-	SHA256	PoW/PoS	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CELL	t	f	SolarFarm					\N	http://asset.cryptomining.farm/	N/A	PoW	1000000000	1000000000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EBS	t	f	EbolaShare					\N	https://ebolashare.github.io/	N/A	PoS	2100000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AM	t	f	AeroMe					\N	http://www.aerome.org/	X13	PoW/PoS	12000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
VDO	t	f	VidioCoin					\N	http://www.vidioshare.me/	X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ZRC*	t	f	ZiftrCoin					\N	https://www.ziftrcoin.com/	X11	PoW	450000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GHS	t	f	Giga Hash					\N	https://cex.io/	N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KTK	t	f	KryptCoin					\N	http://kryptkoin.com/	Scrypt	PoS	17000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GEMZ	t	f	Gemz Social					\N	http://getgems.org/	N/A	PoW	90000000	88125475	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SSD	t	f	Sonic Screw Driver Coin					\N	http://www.sonic-coin.com/	SHA256	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XTC	t	f	TileCoin					\N	https://www.tilepay.org/	N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XDQ	t	f	Dirac Coin					\N	-	Blake	PoW	2272800	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EKN	t	f	Elektron					\N	https://www.elektronfoundation.com/	X13	PoW/PoS	3000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NKT	t	f	NakomotoDark					\N	http://nakamotodark.com/	X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GHC	t	f	GhostCoin					\N	-	Scrypt	PoW/PoS	750000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DTC*	t	f	DayTrader Coin					\N	-	X13	PoW/PoS	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MTR	t	f	MasterTraderCoin					\N	http://mastertradercoin.com/	X11	PoW/PoS	10110000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SMAC	t	f	Social Media Coin					\N	http://www.smac.io/	X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GSM	t	f	GSM Coin					\N	http://gsmcoin.info/	X11	PoW/PoS	1800000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
U	t	f	Ucoin					\N	http://ucoin.name/	X11	PoS	20000000	2689812	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
OC	t	f	OrangeCoin					\N	-	Scrypt	PoW/PoS	200000000	1759000	50	\N	50157	0	0	0	0	{}	{}	{}	0	0	0	0
FSC2	t	f	FriendshipCoin					\N	http://friendshipcoins.com/	Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GRID*	t	f	GridPay					\N	http://www.gridpay.net/	N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SWARM	t	f	SwarmCoin					\N	https://swarmcorp.com/	N/A	N/A	100000000	100000000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BTCRY	t	f	BitCrystal					\N	-	N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BCR	t	f	BitCredit					\N	http://bitcredit.wikia.com/wiki/Bitcredit_Wiki	Momentum	PoW	210000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NXTTY	t	f	NXTTY					\N	http://nxtty.com/	N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GMC	t	f	Gridmaster					\N	http://gridmaster.co/	Scrypt	PoW	84000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MMC	t	f	MemoryCoin					\N	http://memorycoin.org/	Multiple	PoW	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GSX	t	f	GlowShares					\N	http://www.glowshares.com/	N/A	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
OCTO	t	f	OctoCoin					\N	http://www.theoctoparty.com/	N/A	N/A	88000000	88000000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MSC	t	f	MasterCoin					\N	http://mastercoin.org/	Scrypt	PoW	619478	619478	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CAM	t	f	Camcoin					\N	-	X11	PoW/PoS	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GIG	t	f	GigCoin					\N	http://gigcoin.com/manager/home	X11	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XMS	t	f	Megastake					\N	-	X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LTBC	t	f	LTBCoin					\N	http://ltbcoin.com/	N/A	PoP/PoV/PoQ	0	493863915	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BUCKS*	t	f	GorillaBucks					\N	http://www.gorillastake.com/	N/A	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
VIOR	t	f	ViorCoin					\N	http://viorcoin.com/	Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SIGU	t	f	Singular					\N	-	Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XG	t	f	XG Sports					\N	-	XG Hash	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CHILD	t	f	ChildCoin					\N	http://www.x-children.org/	X11	PoW	2000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BOOM	t	f	BOOM Coin					\N	http://cleverhash.com/boom/	X13	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ICASH	t	f	ICASH					\N	-	X11	PoW	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ROS	t	f	ROS Coin					\N	http://roscoin.com/	X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
UNAT	t	f	Unattanium					\N	-	SHA256	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
VMC	t	f	VirtualMining Coin					\N	http://virtualminingcoin.org/	Scrypt-n	PoW	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MRS	t	f	MarsCoin					\N	http://marscoin.org/	X11	PoW	33000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
VIRAL	t	f	Viral Coin					\N	https://bitcointalk.org/index.php?topic=1041025.0	Scrypt	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EQM	t	f	Equilibrium Coin					\N	https://bitcointalk.org/index.php?topic=1064310	SHA256	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XWT	t	f	World Trade Funds					\N	http://worldtradefunds.com/	X15	PoW/PoS	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NODE	t	f	Node					\N	http://nodecoin.com/	Curve25519	PoA	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BTMI	t	f	BitMiles					\N	http://bitmiles.org/	Scrypt	PoW	4832660000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EVENT	t	f	Event Token					\N	http://www.event-hub.co/	Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BTX*	t	f	BitcoinTX					\N	-	X11	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DCC	t	f	DarkCrave					\N	-	SHA256	PoW/PoS	277500	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
M1	t	f	SupplyShock					\N	-	X13	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DB	t	f	DarkBit					\N	-	Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XNA	t	f	DeOxyRibose					\N	-	X11	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
1CR	t	f	1Credit					\N	http://www.1creditcoin.org/	Scrypt	PoW	92000000000	88213	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SKB	t	f	SkullBuzz					\N	-	SHA256	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FCS	t	f	CryptoFocus					\N	http://cryptofocus.info/	X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TWLV	t	f	Twelve Coin					\N	-	T-Inside	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EAGS	t	f	EagsCoin					\N	http://eagscurrency.com/	X11	PoW/PoS	20445500	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MWC	t	f	MultiWallet Coin					\N	http://mwc.pw/	X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DRZ	t	f	Droidz					\N	-	QUAIT	PoW/PoS	5060000	8385734.74528525	0.19253573887464073	\N	559121	0	0	0	0	{}	{}	{}	0	0	0	0
DRKT	t	f	DarkTron					\N	-	SHA256	PoW/PoS	1500000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CIRC	t	f	CryptoCircuits					\N	-	vDPOS	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XCE	t	f	Cerium					\N	-	SHA256	PoW/PoS	2307925	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EDGE	t	f	EdgeCoin					\N	-	SHA256	PoW/HiPoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LUX*	t	f	BitLux					\N	-	X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GLOBE	t	f	Global					\N	http://www.globalcurrencycoin.com/	N/A	PoS	90000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TAM	t	f	TamaGucci					\N	-	Scrypt	PoW/PoS/PoC	5300000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MRP	t	f	MorpheusCoin					\N	-	X11	PoW	3400000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XFC	t	f	Forever Coin					\N	http://forevercoin.us/	X11	PoS	210000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NANAS	t	f	BananaBits					\N	http://www.bananabits.website/	Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AE	t	f	Aeternity					\N		N/A	PoW/PoS	273685831	233020472	0	\N	0	0	1.52347	0.00009159	89.481315144	{}	{}	{}	4928010	1.03	6.93	132.37
VERSA	t	f	Versa Token					\N	-	N/A	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SQL	t	f	Squall Coin					\N	-	X11	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
POLY	t	f	PolyBit					\N	-	Scrypt	PoW	150000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
STR*	t	f	StarCoin					\N	-	Scrypt	PoW/PoS	227334008	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ETN	t	f	Electroneum					\N		N/A	N/A	21000000000	4997507466	0	\N	0	0	0.077702	0.00000467	4.5638425104	{}	{}	{}	8176060	-0.9	-0.39	5.01
CHA	t	f	Charity Coin					\N	-	Scrypt	PoW	500000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GRAV	t	f	Graviton					\N	http://www.graviton.ninja/	SHA256	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GHOUL	t	f	Ghoul Coin					\N	-	N/A	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MIL	t	f	Milllionaire Coin					\N	-	X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HEDG	t	f	Hedgecoin					\N	-	X13	PoW	33000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BOB	t	f	Bob Coin					\N	http://www.dobbscoin.info/	Scrypt	PoW	21000000	4646600.00000001	10	\N	185504	747429319	0	0	0	{}	{}	{}	0	0	0	0
GEN	t	f	Genstake					\N	http://genstake.com/	Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XPH	t	f	PharmaCoin					\N	-	N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XSEED	t	f	BitSeeds					\N	http://bitseeds.org/	SHA256	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CRE	t	f	Credits					\N	http://credits-currency.org/	SHA256	PoW/PoS	30000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CHIP	t	f	Chip					\N	-	X11	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SPEC	t	f	SpecCoin					\N	-	Scrypt	PoW	3000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GRAM	t	f	Gram Coin					\N	-	N/A	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GRM	t	f	GridMaster					\N	-	N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
QTZ	t	f	Quartz					\N	-	SHA256	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DIGS	t	f	Diggits					\N	http://www.diggits.co/	Scrypt	PoS	100000000	100000000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LTS	t	f	Litestar Coin					\N	-	N/A	PoW/PoS	120000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SPC	t	f	SpinCoin					\N	-	NIST5	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PPT	t	f	Populous					\N		N/A	N/A	53252246	41252246	0	\N	0	0	41.77	0.00251117	2453.369304	{}	{}	{}	2908640	-2.08	1.28	5.76
ARDR	t	f	Ardor					\N	https://www.ardorplatform.org/	N/A	PoS	998999495	998999495	0	\N	0	0	1.24651	0.00007494	73.214014152	{}	{}	{}	21407400	0.6	24.42	28.59
SYS	t	f	Syscoin					\N	http://syscoin.org/	Scrypt	PoW	888000000	529683791	16.38551802188158	\N	502971	1912821331462900000	0.641458	0.00003856	37.6761639216	{}	{}	{}	16045300	2.56	15.82	44.48
QASH	t	f	QASH					\N		N/A	N/A	1000000000	350000000	0	\N	0	0	0.96386	0.00005795	56.612509872	{}	{}	{}	13391400	-0.07	6.39	35.43
MAPC	t	f	MapCoin					\N	-	X11	PoS	2228921.184	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HIRE*	t	f	BitHIRE					\N	http://www.bithire.info	Scrypt	PoS	42000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SPOTS	t	f	Spots					\N	-	N/A	PoW/PoS	12730	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NAS2	t	f	Nas2Coin					\N	http://nascoin.net/	N/A	PoS	200000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KARM	t	f	Karmacoin					\N	http://karmacoin.info/	Scrypt	PoW	92	78717294065	10000	\N	1896092	19165952519	0	0	0	{}	{}	{}	0	0	0	0
DBIC	t	f	DubaiCoin					\N	https://dubaicoin.org/	SHA256	PoW/PoS	10500000	5129014	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PWR	t	f	PowerCoin					\N	http://www.powercoin.pw/	NIST5	PoW/PoS	50021000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PRIME	t	f	PrimeChain					\N	http://statmine.online/	N/A	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SCOT	t	f	Scotcoin					\N	http://www.scotcoin.org/	Counterparty	N/A	1000000000	1000000000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CLV	t	f	CleverCoin					\N	-	N/A	PoS/PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XID*	t	f	International Diamond Coin					\N	http://xidcoin.com/en	N/A	PoW	67000010	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KNC*	t	f	Khancoin					\N	http://khancoin.com/	X11	PoW/PoS	7850291561	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SOUL	t	f	SoulCoin					\N	-	Scrypt	PoW/PoS	1400000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GROW	t	f	GrownCoin					\N	http://www.growcoin.pw/	N/A	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
OLDSF	t	f	OldSafeCoin					\N	https://safecoinclub.com/	N/A	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SSTC	t	f	SunShotCoin					\N	-	X11	PoW	2250000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DGD	t	f	DigixDAO					\N	https://www.dgx.io/	N/A	N/A	1999421	2000000	0	\N	0	0	162.826	0.00978894	9563.6176752	{}	{}	{}	5034200	-2.68	-1.52	10.85
NETC	t	f	NetworkCoin					\N	-	X13	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MYC	t	f	MayaCoin					\N	http://www.mayacoin.org/	Scrypt	PoW/PoS	250000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XDB	t	f	DragonSphere					\N	-	X11	PoW/PoS	21007600	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KR	t	f	Krypton					\N	http://krypton.rocks	Dagger-Hashimoto	PoW	0	2910710	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NEU	t	f	NeuCoin					\N		N/A	PoS	100000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CGA	t	f	Cryptographic Anomaly					\N	http://anti.cash/	Scrypt	PoW	10000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AGRS	t	f	Agoras Tokens					\N		N/A	N/A	42000000	42000000	0	\N	0	0	2.03763	0.0001225	119.680605576	{}	{}	{}	474913	3.48	5.91	54.5
LYB	t	f	LyraBar					\N	-	Lyra2RE	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BST	t	f	BitStone					\N	http://factom.org/	X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RUSTBITS	t	f	Rustbits					\N		N/A	N/A	100000000	35300866	0	\N	0	0	0.111479	0.00000589	6.5477413608	{}	{}	{}	0	11.95	0	10.3
DOGED	t	f	DogeCoinDark					\N	http://www.dogecoindark.net/	Scrypt	PoW	16500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RCX	t	f	RedCrowCoin					\N	-	Scrypt	PoW/PoS	3966666667	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SAR	t	f	SARCoin					\N	http://www.sarcoin.com/	SHA256	PoS	0	250377624.26653793	0	\N	332924	0	0	0	0	{}	{}	{}	0	0	0	0
ETHS	t	f	EthereumScrypt					\N	-	Scrypt	PoW/PoS	4200000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PXL	t	f	Phalanx					\N	-	SHA256	PoW	15000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NUM	t	f	NumbersCoin					\N	-	Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
COIN*	t	f	Coin					\N	http://coin.org/	SHA256	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AEC	t	f	AcesCoin					\N	http://www.acescoin.org/	X11	PoS	98000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
404	t	f	404Coin					\N	-	Scrypt	PoW/PoS	532000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SPM	t	f	Supreme					\N	-	Scrypt	PoW/PoS	88900000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FLX	t	f	Flash					\N	-	Scrypt	PoW/PoS	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CLUD	t	f	CludCoin					\N	http://cludcoin.com/	Scrypt	PoW	100200000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GIZ	t	f	GIZMOcoin					\N	http://gizmocoin.info/	X11	PoW/PoS	100000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GREXIT	t	f	GrexitCoin					\N	-	N/A	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DEUR	t	f	DigiEuro					\N	http://www.digieuro-altcoin.com/	Scrypt	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SAFEX	t	f	Safe Exchange Coin					\N	http://safex.io/	Scrypt	PoC	2147483647	2147483647	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TUR	t	f	Turron					\N	-	N/A	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LEMON	t	f	LemonCoin					\N	-	N/A	PoW	31000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CYT	t	f	Cryptokenz					\N	-	PoS	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NEBU	t	f	Nebuchadnezzar					\N	-	PoS	PoS	20000000	20000000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
N7	t	f	Number7					\N	http://www.number7.co/	Scrypt	PoW	270967742	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ADN	t	f	Aiden					\N	http://www.aidenorg.org/	ScryptOG	PoW	84000000	84000000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CYG	t	f	Cygnus					\N	http://cygnus.online/	X11	PoW/PoS	25885320	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LGBTQ	t	f	LGBTQoin					\N	http://lgbtqoin.org	X11	PoW	50000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
UTH	t	f	Uther					\N	-	Dagger	PoW	25885320	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MPRO	t	f	MediumProject					\N	-	PoS	PoW	250000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NKC	t	f	Nukecoinz					\N	http://www.Nukecoinz.org	Scrypt	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XNX	t	f	XanaxCoin					\N	-	Scrypt	PoW	42000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
STAR*	t	f	StarCoin					\N	-	Scrypt	PoW/PoS	870731707	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EMC2	t	f	Einsteinium					\N	-	Scrypt	PoW	299792458	216171943	4.000000020391063	\N	1712754	153120740662.45	1.45636	0.00008755	85.539595872	{}	{}	{}	70317100	0.05	-10.47	-13.47
STHR	t	f	Stakerush					\N	-	PoS	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GOTX	t	f	GothicCoin					\N	-	Scrypt	PoW	313333333	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SHREK	t	f	ShrekCoin					\N	https://soundcloud.com/flavorcoin	Scrypt	PoW/PoS	1246000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NXE	t	f	NXEcoin					\N	http://www.nxeprotocol.co/	NIST5	PoW/PoS	2200000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
STA*	t	f	Stakers					\N	-	PoS	PoS	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PBC	t	f	PabyosiCoin					\N	http://pbcinfo.net/	X11	PoW/PoS	31500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
OBS	t	f	Obscurebay					\N	http://www.Nukecoinz.org	X11	PoW/PoS	6562000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EXIT	t	f	ExitCoin					\N	http://www.Nukecoinz.org	Scrypt	PoW/PoS	756000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EDC	t	f	EducoinV					\N	-	Scrypt	PoW/PoS	99000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ZOOM	t	f	ZoomCoin					\N	-	Lyra2RE	PoW	250000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KAT	t	f	KATZcoin					\N	-	SHA256D	PoW/PoS	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CKC	t	f	Clockcoin					\N	http://myclint.us/	SHA256	PoW/PoS	525000000	16662820	10	\N	274282	1013480586	0	0	0	{}	{}	{}	0	0	0	0
LQD	t	f	Liquid					\N	www.liquidtech.info	N/A	N/A	99999.99	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MARV	t	f	Marvelous					\N	www.project-decorum.com	Scrypt	PoW	400000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
YOVI	t	f	YobitVirtualCoin					\N	https://yobit.net/en/trade/YOVI/BTC	SHA256	PoS	22830000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GSY	t	f	GenesysCoin					\N	http://genesyscoin.com/	SHA256	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GOON	t	f	Goonies					\N	http://gooncoin.tk/	Scrypt	PoW	270875968	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RING	t	f	RingCoin					\N	-	Scrypt	PoW/PoS	1900000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GAS	t	f	Gas					\N		N/A	N/A	100000000	9137582	0	\N	0	0	33.9269	0.00203965	1992.70325688	{}	{}	{}	6936810	0.12	0.14	46.29
DRACO	t	f	DT Token					\N	http://www.drachmae.co.uk/	N/A	N/A	88888888	88888888	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
INCP	t	f	InceptionCoin					\N	-	X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
OMA	t	f	OmegaCoin					\N	-	X15	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
COX	t	f	CobraCoin					\N	-	Scrypt	PoW/PoS	1012941176	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EKO	t	f	EkoCoin					\N	http://www.ekocoin.org/	Scrypt	PoW	533333333	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BIT16	t	f	16BitCoin					\N	http://www.16bit.ml/	NIST5	PoW/PoS	16000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ENTER	t	f	EnterCoin (ENTER)					\N	-	Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BM	t	f	BitMoon					\N	http://www.bitmoon.net/	X13	PoS	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TKN*	t	f	TrollTokens					\N	-	SHA256	PoW/PoS	860000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SCRPT	t	f	ScryptCoin					\N	-	Scrypt	PoW	34181818	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MMNXT	t	f	MMNXT					\N	-	N/A	N/A	50000000	50000000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SPX	t	f	Specie					\N	-	PoS	PoS	9000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KRAK	t	f	Kraken					\N	-	SHA256	PoW/PoS	20	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EXB	t	f	ExaByte (EXB)					\N	-	SHA256	PoW	500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WGC	t	f	World Gold Coin					\N	http://wgcglobal.com/	SHA256	PoW	51000000	3102200	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XT	t	f	ExtremeCoin					\N	-	Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RUST	t	f	RustCoin					\N	-	Scrypt	PoW/PoS	21212121	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NZC	t	f	NewZealandCoin					\N	-	Scrypt	PoW	335800000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
UNIQ	t	f	Uniqredit					\N	http://uniqredit.com/	SHA256D	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BFX	t	f	BitFinex Tokens					\N	-	N/A	N/A	32000000	32000000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XPOKE	t	f	PokeChain					\N	-	X13	PoS	75000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LC	t	f	Lutetium Coin					\N	-	X11	PoS	657000000	657000000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MUDRA	t	f	MudraCoin					\N	-	X13	PoS	200000000	5000000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CNMT	t	f	Coinomat					\N	-	N/A	N/A	3000000	3000000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CDX	t	f	Cryptodex					\N	https://cryptodex.io/about/	N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RBIT	t	f	ReturnBit					\N	@ReturnBit	Scrypt	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MC	t	f	Mass Coin					\N	https://mass.network/	N/A	N/A	1000000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TAB	t	f	MollyCoin					\N	-	Scrypt	PoW/PoS	25000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
STO	t	f	Save The Ocean					\N	-	X11	PoW/PoS	150000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FSN	t	f	Fusion					\N	http://fusioncoindev.wixsite.com/fusion	SHA256	PoW	3000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SNS	t	f	Sense					\N	http://www.sensusapp.co/	N/A	N/A	100000000	100000000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CTC	t	f	CarterCoin					\N	http://www.cartercoinweb.com/	Scrypt	PoW/PoS	90000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TOT	t	f	TotCoin					\N	-	Scrypt	PoW/PoS	1613150000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BOTS	t	f	ArkDAO					\N	http://www.arkdao.com	N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MDC	t	f	MedicCoin					\N	https://mediccoin.wordpress.com	Scrypt	PoW/PoS	33000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FTP	t	f	FuturePoints					\N	http://www.ftpcoin.com/	X11	PoS	360000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ZET2	t	f	Zeta2Coin					\N	-	Quark	PoW/PoS	1200000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
COV*	t	f	CovenCoin					\N	-	SHA256	PoW/PoS	33000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ENE	t	f	EneCoin					\N	-	X13	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TDFB	t	f	TDFB					\N	-	SHA256D	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DGDC	t	f	DarkGold					\N	-	X13	PoW/PoS	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FX	t	f	FCoin					\N	-	Scrypt	PoW/PoS	987600000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ROOT	t	f	RootCoin					\N	-	Scrypt	PoW/PoS	1900000	1939889	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PIO	t	f	Pioneershares					\N	http://www.blockpioneers.info/	X11	PoW/PoS	200000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SMSR	t	f	Samsara Coin					\N	http://samsara.pw/	QuBit	PoW/PoS	60000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
UBIQ	t	f	Ubiqoin					\N	http://ubiquoin.com/	Progressive-n	PoS	500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ARM	t	f	Armory Coin					\N	-	Scrypt	PoW/PoS	1990000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ERB	t	f	ERBCoin					\N	http://endroadbullying.org/	Scrypt	N/A	125000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PNK	t	f	SteamPunk					\N	-	PoS	PoS	40000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MOOND	t	f	Dark Moon					\N	-	Scrypt	PoW/PoS	420000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BBCC	t	f	BaseballCardCoin					\N	-	Scrypt	PoW/PoS	19000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CRNK	t	f	CrankCoin					\N	-	X11	PoS/PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FIT	t	f	Fitcoin					\N	http://wisefintechs.com/WebSite/	X11	PoW/PoS	8880000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SEN	t	f	Sentaro					\N	-	Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XPO	t	f	Opair					\N	https://www.opair.co/	PoS	PoS	74000000	74033806.79496826	0	\N	139579	0	0	0	0	{}	{}	{}	0	0	0	0
BRONZ	t	f	BitBronze					\N	-	Scrypt	PoW	4502400	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NLC	t	f	NoLimitCoin					\N	-	SHA256D	PoW/PoS	0	204731813	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PSB	t	f	PesoBit					\N	http://www.pesobit.net/	Scrypt	PoW/PoS	32958651	33522957	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SCN	t	f	Swiscoin					\N	https://www.swisopensource.com	Scrypt	PoW/PoW	3100000000	665200057	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
VTX	t	f	Vertex					\N	-	SHA256	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KRC	t	f	KRCoin					\N	-	X11	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LFC	t	f	BigLifeCoin					\N	-	X11	PoW	9900000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EQUAL	t	f	EqualCoin					\N		X13	PoW/PoS	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SWEET	t	f	SweetStake					\N		PoS	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
2BACCO	t	f	2BACCO Coin					\N		Scrypt	PoW/PoS	81454545	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DKC	t	f	DarkKnightCoin					\N		Scrypt	PoW/PoS	24000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
COC	t	f	Community Coin					\N		SHA256	PoW	36129032	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CHOOF	t	f	ChoofCoin					\N		Scrypt	PoW/PoS	40000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CSH	t	f	CashOut					\N		SHA256	PoW	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WEX	t	f	Wexcoin					\N	http://www.wexcoin.org/	N/A	PoS	0	10000289269.21137	0.37999629974365234	\N	773317	0	0	0	0	{}	{}	{}	0	0	0	0
EMIGR	t	f	EmiratesGoldCoin					\N	-	SHA256	PoW	4000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BHC	t	f	BighanCoin					\N	-	Quark	PoW	411000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CRAFT	t	f	Craftcoin					\N	-	Scrypt	PoW/PoS	49411760	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
INV	t	f	Invictus					\N	-	X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MG	t	f	Mind Gene					\N	-	SHA256	PoW/PoS	7500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PSI	t	f	PSIcoin					\N	-	X11	PoS	696969	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PINKX	t	f	PantherCoin					\N	-	Scrypt	PoW/PoS	735000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BTCL*	t	f	BitluckCoin					\N	-	Scrypt	PoS	5000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MT	t	f	Mycelium Token					\N	https://mycelium.com/	N/A	N/A	5311	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RCN*	t	f	RCoin					\N	http://rcoin.eu/	SHA256	N/A	5000000000	9209084006.979998	12.13325571459393	\N	225968	0	0	0	0	{}	{}	{}	0	0	0	0
TIA	t	f	Tianhe					\N	-	Lyra2RE	N/A	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XUP	t	f	UPcoin					\N	-	X13	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CFC	t	f	CoffeeCoin					\N	-	PoS	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
VTY	t	f	Victoriouscoin					\N	http://victoriouscoin.site/	Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BS	t	f	BlackShadowCoin					\N	-	X11	PoW/PoS	2100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
JIF	t	f	JiffyCoin					\N	http://jiffycoin.xyz/	SHA256D	PoW	5108400	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
OLYMP	t	f	OlympCoin					\N	-	X11	PoW/PoS	50000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HKG	t	f	Hacker Gold					\N	https://hack.ether.camp/	N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ANTC	t	f	AntiLitecoin					\N	-	Scrypt	PoW	84000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DGORE	t	f	DogeGoreCoin					\N	-	X11	PoW/PoS	500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RMS	t	f	Resumeo Shares					\N	-	NIST5	PoS	9188302	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
VAPOR	t	f	Vaporcoin					\N	-	SHA256	PoW/PoS	2000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NUBIS	t	f	NubisCoin					\N	-	SHA256D	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TENNET	t	f	Tennet					\N	-	SHA256D	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
32BIT	t	f	32Bitcoin					\N	-	X11	PoW/PoS	355000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RRT	t	f	Recovery Right Tokens					\N	@bitfinex	N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CRAB	t	f	CrabCoin					\N	-	X15	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AIR*	t	f	Aircoin					\N	-	Scrypt	PoW/PoS	357000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GNJ	t	f	GanjaCoin V2					\N	http://www.ganjacoin.net/	X14	PoW/PoS	100000000	100000000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RYCN	t	f	RoyalCoin 2.0					\N		X13	PoS	2500000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WINE	t	f	WineCoin					\N		Scrypt	PoW/PoS	1744000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ZECD	t	f	ZCashDarkCoin					\N		Scrypt	PoW	500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ZXT	t	f	Zcrypt					\N		N/A	PoW/PoZ	101000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WASH	t	f	WashingtonCoin					\N		X11	PoW/PoS	170000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LUCKY	t	f	LuckyBlocks (LUCKY)					\N		PoS	PoS	20000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TPG	t	f	Troll Payment					\N		PoS	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MDT	t	f	Midnight					\N		SHA256	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
INSANE	t	f	InsaneCoin					\N		X11	PoW/PoS	22000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PEN	t	f	PenCoin					\N		Scrypt	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FAME	t	f	FameCoin					\N		QuBit	PoW/PoS	50000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LIV	t	f	LiviaCoin					\N		Scrypt	PoW/PoS	1572000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SP	t	f	Sex Pistols					\N		Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MEGA	t	f	MegaFlash					\N		N/A	N/A	300000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ALC	t	f	Arab League Coin					\N		X13	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DOGETH	t	f	EtherDoge					\N		X11	PoW/PoS	18100000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BTLC	t	f	BitLuckCoin					\N		PoS	PoS	5000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DRM8	t	f	Dream8Coin					\N		Scrypt	PoW	88800000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FIST	t	f	FistBump					\N		X13	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EBZ	t	f	Ebitz					\N		PoS	PoS	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
365	t	f	365Coin					\N		X11	PoW/PoS	2300000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FGZ	t	f	Free Game Zone					\N		Scrypt	PoW	44775520	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BOSON	t	f	BosonCoin					\N		X11	PoW/PoS	5000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PNC	t	f	PlatiniumCoin					\N		SHA256	PoW	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BRDD	t	f	BeardDollars					\N		Scrypt	PoW/PoS	21212121	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XNC	t	f	XenCoin					\N		Scrypt	PoW	2100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BTTF	t	f	Coin to the Future					\N		PoS	PoS	1210000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DLR	t	f	DollarOnline					\N		X11	PoW/PoS	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CSMIC	t	f	Cosmic					\N		SHA256D	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FIRST	t	f	FirstCoin					\N		Scrypt	PoW/PoS	110000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SCASH	t	f	SpaceCash					\N		X13	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XEN	t	f	XenixCoin					\N		X11	PoW/PoS	3853326.77707314	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
JIO	t	f	JIO Token					\N		N/A	N/A	8888888	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
IW	t	f	iWallet					\N		X11	PoW/PoS	2142857142.86	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MIOTA	t	t	IOTA					\N				2779530283	2779530283	0	\N	0	0	5.12251	0.00030796	300.871649352	{}	{}	{}	552707000	1.92	3.65	24.88
FRE	t	f	FreeCoin					\N		PoS	PoS	50000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NPC	t	f	NPCcoin					\N		SHA256D	PoW/PoS	7000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DGMS	t	f	Digigems					\N		Scrypt	PoW	50000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MTLM3	t	f	Metal Music v3					\N		Scrypt	PoW/PoS	2500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ODNT	t	f	Old Dogs New Tricks					\N		SHA256D	PoW/PoS	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CCX	t	f	CoolDarkCoin					\N		Scrypt	PoW/PoS	11052632	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SEEDS	t	f	SeedShares					\N		SHA256D	PoW/PoS	7996400	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BCCOIN	t	f	BitConnect Coin					\N		Scrypt	PoW/PoS	28000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PCM	t	f	Procom					\N		Scrypt	PoW	28000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KC	t	f	Kernalcoin					\N		SHA256	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CORAL	t	f	CoralPay					\N		X13	PoS	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BAMITCOIN	t	f	BAM					\N		X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HSP	t	f	Horse Power					\N		Scrypt	PoW	2900000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HZT	t	f	HazMatCoin					\N		Scrypt	PoW/PoS	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CS	t	f	CryptoSpots					\N		DPoS	DPoS	5000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XSP	t	f	PoolStamp					\N		X13	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BULLS	t	f	BullshitCoin					\N		Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NIC	t	f	NewInvestCoin					\N		PoS	PoS	47090909	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XCI	t	f	Cannabis Industry Coin					\N		CryptoNight	PoW	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LOOK	t	f	LookCoin					\N		X11	PoW/PoS	1613150000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MIS	t	f	MIScoin					\N		X11	PoW/PoS	25000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WOP	t	f	WorldPay					\N		X11	PoW/PoS	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CQST	t	f	ConquestCoin					\N		X13	PoW/PoS	30000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
IN	t	f	InCoin					\N		X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CHIEF	t	f	TheChiefCoin					\N		Scrypt	PoW/PoS	2500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GOAT	t	f	Goat					\N		Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ANAL	t	f	AnalCoin					\N		SHA256	N/A	600000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CND*	t	f	Canada eCoin					\N		Scrypt	PoW	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
OPTION	t	f	OptionCoin					\N		X11	PoS	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LTD	t	f	Limited Coin					\N		PoS	PoS	128	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HEEL	t	f	HeelCoin					\N		PoS	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GAKH	t	f	GAKHcoin					\N		Scrypt	PoW/PoS	3315789	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
S8C	t	f	S88 Coin					\N		Scrypt	PoW/PoS	520000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LVG	t	f	Leverage Coin					\N		N/A	N/A	26000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DRA	t	f	DraculaCoin					\N		Scrypt	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XPRO	t	f	ProCoin					\N		X15	PoW/PoS	6000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AST*	t	f	Astral					\N		X13	PoW/PoS	37875500	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GIFT	t	f	GiftNet					\N		X13	PoW	6750000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
INC	t	f	Incrementum					\N		PoS	PoS	1300000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PTA	t	f	PentaCoin					\N		SHA256	PoW/PoS	1311955	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ACID	t	f	AcidCoin					\N		SHA256	PoW	4500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ZLQ	t	f	ZLiteQubit					\N		QuBit	N/A	83075000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RADI	t	f	RadicalCoin					\N		X13	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RNC	t	f	ReturnCoin					\N		X11	PoS	250000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TWIST	t	f	TwisterCoin					\N		X11	PoW/PoS	3195000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DETH	t	f	DarkEther					\N		X11	N/A	16035000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
YAY	t	f	YAYcoin					\N		Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LENIN	t	f	LeninCoin					\N		SHA256D	PoW	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MRSA	t	f	MrsaCoin					\N		X13	PoW/PoS	2100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BOSS	t	f	BitBoss					\N		SHA256	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BIC	t	f	Bikercoins					\N		CryptoNight	PoW	25000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CRPS	t	f	CryptoPennies					\N		X11	PoS	1593.15	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NTCC	t	f	NeptuneClassic					\N		X11	PoW/PoS	250000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XNC*	t	f	Numismatic Collections					\N		X13	PoW/PoS	23273860	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SPKTR	t	f	Ghost Coin					\N		SHA256	PoW/PoS	2270000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SEL	t	f	SelenCoin					\N		PoS	PoS	159680000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NOO	t	f	Noocoin					\N		PoS	PoS	25000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CHAO	t	f	23 Skidoo					\N		SHA256D	PoW	23	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XGB	t	f	GoldenBird					\N		X13	PoW/PoS	450000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
YMC	t	f	YamahaCoin					\N		Scrypt	PoW	315000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
JOK	t	f	JokerCoin					\N		Scrypt	PoW/PoS	5000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GBIT	t	f	GravityBit					\N		Scrypt	PoW/PoS	5333000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RDD	t	f	ReddCoin					\N	https://www.reddcoin.com/	Scrypt	PoW/PoS	27500000000	28696219404	0	\N	0	0	0.0103439	0.00000062	0.6075510353	{}	{}	{}	161667000	18	257.24	555.44
TEC	t	f	TeCoin					\N		Multiple	PoW	469521976	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BOMB	t	f	BombCoin					\N		Scrypt	PoW/PoS	4516129032	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WEALTH	t	f	WealthCoin					\N		DPoS	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CLICK	t	f	Clickcoin					\N		PoS	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BTZ	t	f	BitzCoin					\N		X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RATIO	t	f	Ratio					\N		PoS	PoS	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BAN	t	f	Babes and Nerds					\N		PoS	N/A	150000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NICE	t	f	NiceCoin					\N		Scrypt	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SMF	t	f	SmurfCoin					\N		Scrypt	PoW/PoS	2500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TECH	t	f	TechCoin					\N		X13	PoW/PoS	300000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CIR	t	f	CircuitCoin					\N		SHA256D	PoW/PoS	3125000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ROUND	t	f	RoundCoin					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TAT	t	f	Tatiana Coin					\N		N/A	N/A	3000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HAZE	t	f	HazeCoin					\N		Scrypt	PoW	25000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NRC	t	f	Neurocoin					\N		PoS	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
IMPCH	t	f	Impeach					\N		Scrypt	PoW/PoS	21933333	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ERR	t	f	ErrorCoin					\N		Scrypt	PoW	81000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TIC	t	f	TrueInvestmentCoin					\N		Scrypt	PoW/PoS	53200000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NUKE	t	f	NukeCoin					\N		PoS	PoS	2778196	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EOC	t	f	EveryonesCoin					\N		Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
JANE	t	f	JaneCoin					\N		X11	PoW/PoS	2100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PARA	t	f	ParanoiaCoin					\N		Scrypt	PoW	72000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MM	t	f	MasterMint					\N		X11	PoS	1500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NDOGE	t	f	NinjaDoge					\N		X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ORO	t	f	OroCoin					\N		Scrypt	PoW	23529412	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ALEX	t	f	Alexandrite					\N		SHA256	PoW/PoS	1268000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TBCX	t	f	TrashBurn					\N		SHA256D	PoS	9000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MCAR	t	f	MasterCar					\N		Scrypt	PoW/PoS	2991837	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
UAEC	t	f	United Arab Emirates Coin					\N		X11	PoW/PoS	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EA	t	f	EagleCoin					\N		SHA256	PoW	40000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WISC	t	f	WisdomCoin					\N		Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FIND	t	f	FindCoin					\N		X13	PoS	14524851.4827	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MLITE	t	f	MeLite					\N		SHA256D	PoW/PoS	1	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
STALIN	t	f	StalinCoin					\N		X11	PoW/PoS	3000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CHAT	t	f	ChatCoin					\N		Scrypt	PoW/PoS	52500000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TPAY	t	f	TrollPlay					\N		Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
VEG	t	f	BitVegan					\N		PoS	PoS	600000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MBIT	t	f	Mbitbooks					\N		Scrypt	PoW	81000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PLANET	t	f	PlanetCoin					\N		Scrypt	PoW/PoS	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DUCK	t	f	DuckDuckCoin					\N		Scrypt	PoW	121	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BSTK	t	f	BattleStake					\N		PoS	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AMIS	t	f	AMIS					\N		N/A	N/A	20000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CJC	t	f	CryptoJournal					\N		PoS	PoS	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AMY	t	f	Amygws					\N		Scrypt	PoW	23333333	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SRC*	t	f	StarCredits					\N		N/A	N/A	20000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EB3	t	f	EB3coin					\N		Scrypt	PoW	4000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
APT	t	f	Aptcoin					\N		Scrypt-n	PoW	42000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ARPA	t	f	ArpaCoin					\N		SHA256D	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BNB*	t	f	Boats and Bitches					\N		X11	PoS	696969	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DARK	t	f	Dark					\N		SHA256	PoW/PoS	12800000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WBTC	t	f	wBTC					\N		N/A	N/A	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GOT	t	f	Giotto Coin					\N		Scrypt	PoW/PoS	233100000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EMPC	t	f	EmporiumCoin					\N		X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
IEC	t	f	IvugeoEvolutionCoin					\N		Scrypt	PoW	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WRC*	t	f	WarCoin					\N		Scrypt	PoW/PoS	11666667	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GRW	t	f	GrowthCoin					\N		Scrypt	PoS	37368000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
OLV	t	f	OldV					\N		Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ZRX	t	f	0x					\N		N/A	N/A	1000000000	500000000	0	\N	0	0	0.583313	0.00003507	34.2610057176	{}	{}	{}	12365500	1.27	14.42	61.97
OPES	t	f	Opescoin					\N		Argon2	PoW	52000000	0	0	\N	0	0	0.00219161	0.00000012	0.1287246517	{}	{}	{}	0	0	0	0
ILC	t	f	ILCoin					\N		SHA256	PoW	2500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
IOU	t	f	IOU1					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PUPA	t	f	PupaCoin					\N		Blake2S	PoW/PoS	3500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RICE	t	f	RiceCoin					\N		X13	PoW/PoS	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DEA	t	f	Degas Coin					\N		Scrypt	PoW/PoS	105000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CTIC	t	f	Coinmatic					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TAP	t	f	TappingCoin					\N		X11	PoW/PoS	5000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MUU	t	f	MilkCoin					\N		SHA256	PoW/PoS	4500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
INF8	t	f	Infinium-8					\N		HybridScryptHash256	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SUB*	t	f	Subscriptio					\N		PoS	PoS	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DUX	t	f	DuxCoin					\N		Scrypt	PoW/PoS	1680000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XPS	t	f	PoisonIvyCoin					\N		Scrypt	PoW/PoS	4666666667	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MAT*	t	f	Manet Coin					\N		Scrypt	PoW/PoS	215000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
F16	t	f	F16Coin					\N		Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HAMS	t	f	HamsterCoin					\N		Scrypt	PoW	20000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NEF	t	f	NefariousCoin					\N		Scrypt	PoW/PoS	4835000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
IOT	t	f	IOTA					\N		N/A	Tangle	2779530283	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BQX	t	f	Ethos					\N		N/A	N/A	222295208.2384	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HRB	t	f	Harbour DAO					\N		N/A	N/A	19.125	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NET*	t	f	Nimiq Exchange Token					\N		N/A	N/A	10500000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LKY	t	f	LuckyCoin					\N	http://www.luckycoin.cc/	Scrypt	PoW	20000000	19326319.14375	0.34375	\N	820916	0	0	0	0	{}	{}	{}	0	0	0	0
8BT	t	f	8 Circuit Studios					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MIV	t	f	MakeItViral					\N		Scrypt	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BET*	t	f	DAO.casino					\N		N/A	N/A	167270821	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PQT	t	f	PAquarium					\N		N/A	N/A	1200000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XZC	t	f	ZCoin					\N	https://zcoin.io	Lyra2RE	PoW	21000000	3699575	50	\N	66275	130114777741	77.2369	0.0046434	4536.52476888	{}	{}	{}	22681800	2.02	22.55	38.95
OROC	t	f	Orocrypt					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DIM	t	f	DIMCOIN					\N		N/A	N/A	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GGS	t	f	Gilgam					\N		N/A	N/A	700000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FND	t	f	FundRequest					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
IPC	t	f	ImperialCoin					\N		NeoScrypt	PoW	1600000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MASS	t	f	Mass.Cloud					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
IML	t	f	IMMLA					\N		N/A	N/A	226736000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GUNS	t	f	GeoFunders					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CAT*	t	f	BitClave					\N		N/A	N/A	2000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SYC	t	f	SynchroCoin					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AHT*	t	f	Bowhead Health					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TRIBE	t	f	TribeToken					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PRE*	t	f	Presearch					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NPX	t	f	Napoleon X					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EQB	t	f	Equibit					\N		N/A	N/A	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BOG	t	f	Bogcoin					\N		SHA256	PoW	21212121	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SAND	t	f	BeachCoin					\N		X11	PoW	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XAI*	t	f	AICoin					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DMT	t	f	DMarket					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XCJ	t	f	CoinJob					\N		N/A	N/A	200000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SPN	t	f	Spoon					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KING	t	f	King93					\N		N/A	N/A	50000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ANCP	t	f	Anacrypt					\N		N/A	N/A	10000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RCC	t	f	Reality Clash					\N		N/A	N/A	150000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ROOTS	t	f	RootProject					\N		N/A	N/A	10000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SNK	t	f	Sosnovkino					\N		N/A	N/A	390000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CABS	t	f	CryptoABS					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ZNT	t	f	OpenZen					\N		N/A	N/A	270000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BITSD	t	f	Bits Digit					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HIRE	t	f	HireMatch					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BBT*	t	f	BrickBlock					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DFBT	t	f	DentalFix					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EQ	t	f	EQUI					\N		N/A	N/A	500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WOLK	t	f	Wolk					\N		N/A	N/A	500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ATOM*	t	f	Cosmos					\N		PoS	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TME	t	f	Timereum					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
COE	t	f	CoEval					\N		N/A	N/A	100000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ARENA	t	f	Arena					\N		N/A	N/A	14000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MOBI	t	f	Mobius					\N		N/A	N/A	888000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SDAO	t	f	Solar DAO					\N		N/A	N/A	80000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CORE	t	f	Core Group Asset					\N		N/A	N/A	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KCN	t	f	Kencoin					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AUT	t	f	Autoria					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CTT	t	f	CodeTract					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MNY	t	f	Monkey					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CCC	t	f	CCCoin					\N		N/A	N/A	2500000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
UMC	t	f	Umbrella Coin					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BMXT	t	f	Bitmxittz					\N		Scrypt	PoW/PoS	10000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BNC	t	f	Benjacoin					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TOM	t	f	Tomahawkcoin					\N		N/A	N/A	200000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BTM*	t	f	Bytom					\N		N/A	N/A	1407000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SMNX	t	f	SMNX					\N		N/A	N/A	15000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MRV	t	f	Macroverse					\N		N/A	N/A	668908	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MET	t	f	Memessenger					\N		N/A	N/A	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AUTH	t	f	Authoreon					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CASH*	t	f	Cash Poker Pro					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DTCT	t	f	DetectorToken					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WNET	t	f	Wavesnode.net					\N		N/A	N/A	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
THNX	t	f	ThankYou					\N		N/A	N/A	70000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
VNT	t	f	Veredictum					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
IWT	t	f	IwToken					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
JDC	t	f	JustDatingSite					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MEDI	t	f	MediBond					\N		N/A	N/A	250000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LTA	t	f	Litra					\N		N/A	N/A	99999999	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NIMFA	t	f	Nimfamoney					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SCOR	t	f	Scorista					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MLS	t	f	CPROP					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KEX	t	f	KexCoin					\N		N/A	N/A	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ARI*	t	f	BeckSang					\N		N/A	N/A	5000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MAG*	t	f	Magos					\N		N/A	N/A	50123377	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
UTK	t	f	Utrust					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LAT	t	f	Latium					\N		N/A	N/A	30000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SQP	t	f	SqPay					\N		N/A	N/A	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WAN	t	f	Wanchain					\N		N/A	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MNT	t	f	GoldMint					\N		N/A	N/A	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ALTOCAR	t	f	AltoCar					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CFT*	t	f	Credo					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BKX	t	f	BANKEX					\N		N/A	N/A	400000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BOU	t	f	Boulle					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TTT	t	f	Tap Project					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AMT	t	f	Acumen					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EMT	t	f	EasyMine					\N		N/A	N/A	33000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GXC	t	f	Gx Coin					\N		N/A	N/A	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SRT	t	f	Scrypto					\N		N/A	N/A	9123000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AVA	t	f	Avalon					\N		N/A	N/A	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BT	t	f	BuildTeam					\N		N/A	N/A	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AR*	t	f	Ar.cash					\N		SHA256	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
Z2	t	f	Z2 Coin					\N		SHA256	PoW	11000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TRV	t	f	Travel Coin					\N		N/A	N/A	200000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EON	t	f	Exscudo					\N		N/A	DPoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MTX	t	f	Matryx					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PEPECASH	t	f	Pepe Cash					\N		N/A	N/A	701884009	701884009	0	\N	0	0	0.118931	0.00000715	6.9854360712	{}	{}	{}	128760	0.61	16.92	33.46
DRC	t	f	Dropcoin					\N		N/A	PoS	500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ACE	t	f	TokenStars					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XUC*	t	f	UCash					\N		N/A	N/A	21000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WRT	t	f	WRTcoin					\N		X11	PoW	25000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DEEP	t	f	Deep Gold					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TMT	t	f	ToTheMoon					\N		N/A	N/A	51750000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CCT*	t	f	Crystal Clear Token					\N		N/A	N/A	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WSH	t	f	Wish Finance					\N		N/A	N/A	30000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ARNA*	t	f	ARNA Panacea					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PRP	t	f	Papyrus					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SKR*	t	f	Skrilla Token					\N		N/A	N/A	405545345	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
3DES	t	f	3DES					\N		N/A	N/A	35000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PYN	t	f	Paycentos					\N		N/A	N/A	450000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KAPU	t	f	Kapu					\N		DPoS	DPoS	115000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SENSE	t	f	Sense Token					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NRN	t	f	Doc.ai Neuron					\N		N/A	N/A	860000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WIZ	t	f	Crowdwiz					\N		N/A	PoS	40000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ATKN	t	f	A-Token					\N		N/A	N/A	30000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
8S	t	f	Elite 888					\N		N/A	N/A	888	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
H2O	t	f	Hydrominer					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TKT	t	f	Crypto Tickets					\N		N/A	N/A	914869281	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RHEA	t	f	Rhea					\N		N/A	N/A	50000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DTT	t	f	DreamTeam Token					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MTN	t	f	TrackNetToken					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
STOCKBET	t	f	StockBet					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PLM	t	f	Algo.Land					\N		N/A	PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GLA	t	f	Gladius					\N		N/A	N/A	96300000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ZNA	t	f	Zenome					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EZM	t	f	EZMarket					\N		N/A	N/A	150000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MTK	t	f	Moya Token					\N		N/A	N/A	125000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CAS	t	f	Cashaa					\N		N/A	N/A	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MAT	t	f	MiniApps					\N		N/A	PoW	20000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GJC	t	f	Global Jobcoin					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WEB	t	f	Webcoin					\N		N/A	PoW	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WAND	t	f	WandX					\N		N/A	N/A	72000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HAC	t	f	Hackspace Capital					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
OPP	t	f	Opporty					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ROCK	t	f	Ice Rock Mining					\N		N/A	N/A	16500000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EARTH	t	f	Earth Token					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GRF	t	f	Graft Network					\N		CryptoNight	PoW/PoS	18446744	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CZC	t	f	Crazy Coin					\N		N/A	N/A	85000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GUESS	t	f	Peerguess					\N		N/A	N/A	200000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CAN*	t	f	CanYaCoin					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CIX	t	f	Cryptonetix					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ERT	t	f	Esports.com					\N		N/A	N/A	60000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BAC*	t	f	LakeBanker					\N		N/A	N/A	500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TRIP	t	f	Trippki					\N		N/A	N/A	200000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MBT	t	f	Multibot					\N		N/A	N/A	25000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
JVY	t	f	Javvy					\N		N/A	N/A	1000000000000040100	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LEV	t	f	Leverj					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ARBI	t	f	Arbi					\N		Ethash	N/A	50000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ELT	t	f	Eloplay					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ROK	t	f	Rockchain					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XRED	t	f	X Real Estate Development					\N		N/A	N/A	65000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FLP	t	f	Gameflip					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HXT	t	f	HextraCoin					\N		Scrypt	N/A	29000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
VRP*	t	f	Prosense.tv					\N		N/A	N/A	720000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NTM	t	f	NetM					\N		Scrypt	PoW	101318932073.89769	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
COV	t	f	Covesting					\N		N/A	N/A	20000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WAX	t	f	Worldwide Asset eXchange					\N		N/A	N/A	185000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ATCC	t	f	ATC Coin					\N		Scrypt	PoW	84000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KOLION	t	f	Kolion					\N		N/A	N/A	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ILCT	t	f	ILCoin Token					\N		SHA256	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
C20	t	f	Crypto20					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GXC*	t	f	GenXCoin					\N		X15	PoW/PoS	2000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ELM	t	f	Elements					\N		X11	PoW	1800000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BAY	t	f	BitBay					\N	http://bitbaymarket.net/	N/A	PoS	0	1008417006	19.99999976158142	\N	1475553	0	0.271694	0.00001633	15.9580014288	{}	{}	{}	21783500	1.83	18.38	216.46
CAV	t	f	Caviar					\N		N/A	N/A	375000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CLOUT	t	f	Clout					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PTC*	t	f	Propthereum					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MNZ	t	f	Monaize					\N		Equihash	PoW/DPoW	257142857	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AURS	t	f	Aureus					\N		Scrypt	N/A	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ECHT	t	f	e-Chat					\N		N/A	N/A	300000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RGC	t	f	RG Coin					\N		NIST5	PoW/PoS	300000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BM*	t	f	Bitcomo					\N		N/A	N/A	170000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CPAY	t	f	CryptoPay					\N		N/A	N/A	320000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BON*	t	f	Bonpay					\N		N/A	N/A	21745688.353416167	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
APPC	t	f	AppCoins					\N		N/A	N/A	450000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
UP	t	f	UpToken					\N		N/A	N/A	10000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RNDR	t	f	Render Token					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EDDIE	t	f	Eddie coin					\N		Scrypt	PoW/PoS	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SCT*	t	f	Soma					\N		N/A	N/A	60000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GAT	t	f	GATCOIN					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FLLW	t	f	Follow Coin					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WYR	t	f	Wyrify					\N		N/A	N/A	200000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
VZT	t	f	Vezt					\N		N/A	PoW	125000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
INDI	t	f	IndiCoin					\N		N/A	PoW	550000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BAR	t	f	TBIS token					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WPR	t	f	WePower					\N		N/A	N/A	289000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ODMC	t	f	ODMCoin					\N		N/A	N/A	25000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CABS*	t	f	CyberTrust					\N		N/A	N/A	600000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GXS	t	f	GXShares					\N				100000000	40510000	0	\N	0	0	6.68275	0.00040176	392.5126578	{}	{}	{}	17286300	-0.51	11.04	133.21
KEY*	t	f	SelfKey					\N		N/A	N/A	6000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
REA	t	f	Realisto					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AVE	t	f	Avesta					\N		Avesta hash	PoW	200000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LOAN*	t	f	Lendoit					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DTT*	t	f	Data Trading					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ZAB	t	f	ZABERcoin					\N		N/A	N/A	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MDL	t	f	Modulum					\N		N/A	N/A	35100000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SHP	t	f	Sharpe Capital					\N		N/A	N/A	333333333	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
JCR	t	f	Jincor					\N		N/A	N/A	35000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XSB	t	f	Extreme Sportsbook					\N		X11	PoS	3000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AID	t	f	AidCoin					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BHC*	t	f	BlackholeCoin					\N		Scrypt	PoW/PoS	14788275.991	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ST	t	f	SimpleToken					\N		N/A	N/A	800000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DTC	t	f	Datacoin					\N		Multiple	PoW	2000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PLAY	t	f	HEROcoin					\N		N/A	N/A	252165029	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CLD	t	f	Cloud					\N		N/A	N/A	60000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
REBL	t	f	Rebellious					\N		N/A	N/A	696000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
INS	t	f	INS Ecosystem					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
JPC*	t	f	J Coin					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AXT	t	f	AIX					\N		N/A	N/A	20000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RDN*	t	f	Raiden Network					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BDR	t	f	BlueDragon					\N		N/A	N/A	728121985	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TIO	t	f	Trade.io					\N		N/A	N/A	500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HNC*	t	f	Huncoin					\N		X13	PoW	86400000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MDC*	t	f	MadCoin					\N		Scrypt	PoW	10000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ATFS	t	f	ATFS Project					\N		N/A	N/A	380000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GES	t	f	Galaxy eSolutions					\N		N/A	N/A	2800000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PHR*	t	f	Phore					\N		POS 3.0	N/A	18773269	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LCASH	t	f	LitecoinCash					\N		N/A	N/A	12000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SPHTX	t	f	SophiaTX					\N		DPoS	DPoS	500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SRN	t	f	SirinLabs					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WSC	t	f	WiserCoin					\N		Scrypt	PoW	22105263	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MSR	t	f	Masari					\N		CryptoNight	PoW	18500000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NEU*	t	f	Neumarks					\N	http://www.neucoin.org/en/	N/A	N/A	1500000000	53041454.93410022	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CJT	t	f	ConnectJob Token					\N		N/A	N/A	300000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ESC*	t	f	Ethersportcoin					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EVN	t	f	Envion					\N		N/A	N/A	150000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BNK	t	f	Bankera					\N		N/A	N/A	25000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
COIN	t	f	Coinvest					\N		N/A	N/A	60000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ROCK*	t	f	RocketCoin					\N		N/A	N/A	25000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ETK	t	f	Energi Token					\N		N/A	N/A	2307692310	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EPY*	t	f	Emphy					\N		N/A	N/A	15375000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EXY	t	f	Experty					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CRDS	t	f	Credits					\N		Argon2	N/A	95000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SCR	t	f	Scorum					\N		DPoS	DPoS	20000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DBR	t	f	Düber					\N		N/A	N/A	2226000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ABT	t	f	Advanced Browsing Token					\N		N/A	N/A	300000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GFT	t	f	Giftcoin					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RIPT	t	f	RiptideCoin					\N		N/A	N/A	95000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CSTL	t	f	Castle					\N		X11	PoW/PoS	200000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ICC	t	f	Insta Cash Coin					\N		SHA256	PoW	300000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
JNT	t	f	Jibrel Network Token					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KNC**	t	f	KingN Coin					\N		Scrypt	PoW/PoS	420000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LOCI	t	f	LociCoin					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TAU	t	f	Lamden Tau					\N		DPoS	DPoS	500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LAB	t	f	Labrys					\N		N/A	N/A	430000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DEB	t	f	Debitum Token					\N		N/A	N/A	400000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LDM	t	f	Ludum token					\N		N/A	N/A	404926.7576	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
STP	t	f	StashPay					\N		N/A	N/A	500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
WISH*	t	f	MyWish					\N		N/A	N/A	19803895.1235	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ETHB	t	f	EtherBTC					\N		N/A	N/A	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CDX*	t	f	Commodity Ad Network					\N		N/A	N/A	120000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FOOD	t	f	FoodCoin					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DRC*	t	f	Darico					\N		N/A	240000000	60000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SETH	t	f	Sether					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TIO*	t	f	Tio Tour Guides					\N		N/A	N/A	17100000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ABYSS	t	f	The Abyss					\N		N/A	N/A	1964671117084325	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BCD*	t	f	BitCAD					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
GEA	t	f	Goldea					\N		N/A	N/A	3000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BCO*	t	f	BridgeCoin					\N		Scrypt	PoW	27000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BDG	t	f	BitDegree					\N		N/A	N/A	660000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ETBT	t	f	Ethereum Black					\N		N/A	N/A	3999998.59851	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CNBC	t	f	Cash & Back Coin					\N		Scrypt	PoW/PoS	210000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ARC*	t	f	Arcade City					\N		N/A	N/A	9525398	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XUN	t	f	UltraNote					\N		CryptoNight	PoW	85000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RFL	t	f	RAFL					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
COFI	t	f	CoiniFi					\N		N/A	N/A	300000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NTK	t	f	Neurotoken					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CMT*	t	f	CyberMiles					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RLX	t	f	Relex					\N		N/A	N/A	2000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MAN	t	f	People					\N		Scrypt	PoW	7500000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CWV	t	f	CryptoWave					\N		N/A	N/A	1000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ACT*	t	f	Achain					\N		DPoS	DPoS	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
X8X	t	f	X8Currency					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FNT	t	f	FinTab					\N		N/A	N/A	16500000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XMRG	t	f	Monero Gold					\N		N/A	N/A	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BTCE	t	f	EthereumBitcoin					\N		N/A	N/A	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BOXY	t	f	BoxyCoin					\N		Scrypt	PoW	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
NGC	t	f	NagaCoin					\N		N/A	N/A	400000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
UTN	t	f	Universa					\N		N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DPP	t	f	Digital Assets Power Play					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ADB	t	f	Adbank					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XDC	t	f	XinFin Coin					\N		SHA256	PoS	100000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BMT	t	f	BMChain					\N		N/A	N/A	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BIO	t	f	Biocoin					\N		N/A	N/A	10000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MTRC	t	f	ModulTrade					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BTCL	t	f	BTC Lite					\N		N/A	N/A	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
STH	t	f	SmartHoldem					\N		DPoS	DPoS	240000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
PYP	t	f	PayPro					\N		N/A	N/A	25000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MANA	t	f	Decentraland					\N		N/A	N/A	2805886393.1583	2273755650	0	\N	0	0	0.118835	0.00000714	6.979797492	{}	{}	{}	38766200	1.97	21.55	-5.52
RBTC	t	f	Bitcoin Revolution					\N		N/A	N/A	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
KLK	t	f	Kalkulus					\N		Scrypt	PoW	20000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
AC3	t	f	AC3					\N		X11	PoW	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
CHIPS*	t	f	CHIPS					\N		SHA256	PoW	21000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HKN	t	f	Hacken					\N		N/A	N/A	5600000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LOC*	t	f	LockChain					\N		N/A	N/A	18585933	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MNT*	t	f	Media Network Coin					\N		N/A	N/A	125000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SMT*	t	f	SmartMesh					\N		N/A	N/A	3141592653	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BCH	t	t	Bitcoin Cash					\N		SHA256	PoW	21000000	16867263	0	\N	0	0	3637.84	0.218703	213669.259968	{}	{}	{}	9449430000	-3.68	6.1	115.9
DAS	t	f	DAS					\N		X11	PoW	18900000	2803245	0	\N	0	0	0.00469418	0.00000037	0.2757136011	{}	{}	{}	0	0	0	0
DCS	t	f	deCLOUDs					\N	http://www.declouds.com/	N/A	PoS	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BTC	t	t	Bitcoin					\N	https://bitcoin.org/en/	SHA256	PoW	21000000	16754137	12.5	\N	500318	13408415859.577105	16776.9	1	985394.57688	{}	{}	{}	20158300000	-0.03	-0.84	2
XDP	t	f	DogeParty					\N	http://www.dogeparty.io/	N/A	N/A	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EMGO	t	f	MobileGo					\N		N/A	N/A	100000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
TLE	t	f	Tattoocoin (Limited Edition)					\N				0	0	0	\N	0	0	0.0363107	0.00000204	2.1327162266	{}	{}	{}	0	-92.37	0	-92.32
CSC	t	f	CasinoCoin					\N	-	Scrypt	PoW	336000000	37366984.89	10	\N	1470410	18006633149	0.508835	0.00002727	29.886525492	{}	{}	{}	0	28.06	0	23.91
SAN	t	f	Santiment Network Token					\N		N/A	N/A	83337000	60522560	0	\N	0	0	4.32567	0.00026005	254.069092584	{}	{}	{}	8765680	-2.94	-3.24	2.77
ZEN	t	f	ZenCash					\N		Equihash	PoW	21000000	2821788	0	\N	0	0	42.1339	0.00253304	2474.74304328	{}	{}	{}	3428520	2.77	19.56	32.07
CVC	t	f	Civic					\N		N/A	N/A	1000000000	342700000	0	\N	0	0	0.721768	0.00004339	42.3931878336	{}	{}	{}	16789200	11.8	35.46	92.34
GNO	t	f	Gnosis					\N		N/A	N/A	10000000	1104590	0	\N	0	0	218.268	0.013122	12820.0146336	{}	{}	{}	4174990	0.88	18.57	47
FDC	t	f	Future Digital Currency					\N		N/A	N/A	0	2753201	0	\N	0	0	0.0000077734	0.0000000004	0.0004565751	{}	{}	{}	0	-58.85	0	-58.82
SOAR	t	f	Soarcoin					\N		N/A	N/A	5000000000	712910569	0	\N	0	0	0.0264872	0.00000159	1.5557309894	{}	{}	{}	41518.9	0.38	2.25	-0.57
SJCX	t	f	Storjcoin X					\N	http://storj.io	Counterparty	PoS	500000000	51173144	0	\N	0	0	0.37077	0.00001975	21.777250104	{}	{}	{}	0	0	0	24.36
CNX	t	f	Cryptonex					\N		N/A	N/A	210000000	45023213	0	\N	0	0	5.30701	0.00031905	311.708293752	{}	{}	{}	194908	5.59	9.54	22.73
CNO	t	f	Coin(O)					\N		Scrypt	PoW	0	105170753	0	\N	0	0	0.0154085	0.00000093	0.9050213292	{}	{}	{}	5885.87	40.53	-3.22	0.6
DVC	t	f	DevCoin					\N	http://devcoin.org/	SHA256	PoW	21000000000	10946460000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
SFR	t	f	SaffronCoin					\N	http://saffroncoin.com/	Multiple	PoW	111000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
XBOT	t	f	SocialXbotCoin					\N	-	Scrypt	PoW/PoS	2000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HZ	t	f	Horizon					\N	https://horizonplatform.io/	N/A	PoS	1000000000	1000000000	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MINE	t	f	Instamine Nuggets					\N	http://www.instaminenuggets.com/	Scrypt	PoW	21649485	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ETC	t	f	Ethereum Classic					\N	http://www.ethereumclassic.org	Ethash	PoW	0	98520626	5	\N	0	7381819021559	43.1566	0.00259453	2534.81153232	{}	{}	{}	878454000	0.83	11.5	39.62
PYC	t	f	PayCoin					\N	-	Scrypt	PoW/PoS	30000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
QSLV	t	f	Quicksilver coin					\N	http://quicksilvercoin.co/	X11	PoW	33000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
RBR	t	f	Ribbit Rewards					\N	https://www.ribbitrewards.me/	Multiple	PoW	1000000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
MCN	t	f	MonetaVerde					\N	-	CryptoNight	PoW	0	8581904.449426593	24.867469524992	\N	1830908	107199.73333333	0	0	0	{}	{}	{}	0	0	0	0
REV	t	f	Revenu					\N	http://revsurfprofit.com/coin	SHA256	PoW/PoS	222725000	1195525	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
ZEC	t	f	Zcash					\N	https://z.cash/	Equihash	PoW	21000000	2879544	10	\N	240285	350270760	655.733	0.039422	38514.6089016	{}	{}	{}	293189000	-1.49	10.77	47.25
DNET	t	f	Darknet					\N	http://darknet-crypto.com/	Quark	Pow/PoS	37175346	51579988.756553	0	\N	514199	0	0	0	0	{}	{}	{}	0	0	0	0
MI	t	f	XiaoMiCoin					\N	http://www.xiaomicoin.org/	Scrypt	PoW/PoS	400000000	404316475.54546493	14.040847187896944	\N	307748	0	0	0	0	{}	{}	{}	0	0	0	0
DIEM	t	f	CarpeDiemCoin					\N	http://thehouseofdiem.info/	SHA256	PoW	21626280000	21739971929	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
DCK	t	f	DickCoin					\N	http://dickcoin.biz/	X11	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
UNF	t	f	Unfed Coin					\N	http://www.unfedcurrency.byethost9.com/?i=1	Scrypt	PoW	67000000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
HILL	t	f	President Clinton					\N	-	N/A	N/A	57968072167	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
FOREX	t	f	ForexCoin					\N	-	X15	PoW/PoS	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
BTD	t	f	Bitcloud					\N	http://bit-cloud.net/	Scrypt	PoW/PoS	0	11278645.03618584	0	\N	421451	0	0	0	0	{}	{}	{}	0	0	0	0
DROP	t	f	FaucetCoin					\N	http://faucetdrop.com/	X13	PoS	10000	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
EC	t	f	Eclipse					\N	http://www.eclipsecrypto.com/	SHA256D	PoW/PoS	0	4309268.81555066	10	\N	190937	0	0	0	0	{}	{}	{}	0	0	0	0
ETH	t	t	Ethereum					\N	https://www.ethereum.org/	Ethash	PoW	0	96467838	3	\N	4767786	124663753276741.5	824.46	0.0495656	48424.822992	{}	{}	{}	3525850000	0.42	5.07	14.75
XRP	t	t	Ripple					\N	https://ripple.com/	N/A	N/A	100000000000	38739144847	0	\N	0	0	0.854734	0.00005139	50.2029724368	{}	{}	{}	960464000	4.63	13.28	68.51
TRA	t	f	Tetra					\N	https://tetracurrency.com/	Scrypt	PoW	0	0	0	\N	0	0	0	0	0	{}	{}	{}	0	0	0	0
LTC	t	t	Litecoin					\N	https://litecoin.com	Scrypt	PoW	84000000	54398033	25	\N	1335920	106406862099564	318.858	0.0191694	18728.1884016	{}	{}	{}	1858290000	-0.71	-2.54	4.53
DASH	t	t	Dash					\N	http://dash.org	X11	PoW/PoS	18900000	7765422	3.6029519103467464	\N	785847	3302637859919954	1542.32	0.0927226	90588.473664	{}	{}	{}	770033000	0.6	25.51	69.22
EOS	t	f	EOS					\N		DPoS	DPoS	1000000000	552424607	0	\N	0	0	12.3308	0.00074131	724.25200416	{}	{}	{}	717520000	0.43	8.22	72.2
NEO	t	f	NEO					\N	https://neo.org/	N/A	N/A	100000000	65000000	0	\N	0	0	75.4708	0.00453722	4432.79253216	{}	{}	{}	275297000	-0.92	14.34	58.83
TRX	t	f	TRON					\N		N/A	N/A	100000000000	65748192475	0	\N	0	0	0.0511695	0.00000308	3.0054508164	{}	{}	{}	359232000	-2.81	23.92	226.68
XVG	t	f	Verge					\N	http://vergecurrency.com/	Multiple	PoW	16555000000	14414614674	1336472.05962377	\N	1736693	0	0.15596	0.00000938	9.160341792	{}	{}	{}	1030240000	2.27	129.65	1008.72
OMG	t	f	OmiseGO					\N		N/A	PoS	140245398	102042552	0	\N	0	0	18.3302	0.00110199	1076.62796304	{}	{}	{}	165702000	2.5	9.7	67.48
BCC	t	f	BitConnect					\N				28000000	4804290	0	\N	0	0	366.364	0.0220254	21518.4628128	{}	{}	{}	18482600	0.11	-0.26	-0.34
HSR	t	f	Hshare					\N		N/A	PoW/PoS	84000000	42396178	0	\N	0	0	36.9784	0.0022231	2171.93371968	{}	{}	{}	155976000	-0.45	14.09	117.24
WAVES	t	f	Waves					\N	https://wavesplatform.com/	Leased POS	LPoS	100000000	100000000	0	\N	0	0	15.5888	0.00093718	915.61128576	{}	{}	{}	80409400	1.56	5.71	12.59
USDT	t	f	Tether					\N		N/A	N/A	0	1169049990	0	\N	0	0	1.00278	0.00006029	58.898483856	{}	{}	{}	3306110000	0.37	-0.76	-2.93
NXT	t	f	Nxt					\N	http://nxt.org/	PoS	PoS/LPoS	1000000000	998999942	0	\N	0	0	1.15879	0.00006967	68.061762408	{}	{}	{}	249579000	-0.19	36.22	64.76
STRAT	t	f	Stratis					\N	http://www.stratisplatform.com/	X13	PoW/PoS	0	98668710	0.9999999966886308	\N	648605	0	11.4765	0.00068995	674.0745228	{}	{}	{}	50349000	1.07	6.12	19.86
REP	t	f	Augur					\N	https://augur.net/	N/A	N/A	11000000	11000000	0	\N	0	0	91.8094	0.00551948	5392.44347088	{}	{}	{}	54167100	-3.66	3.77	153.6
MONA	t	f	MonaCoin					\N	http://monacoin.org/en/	Scrypt	PoW	105120000	56152575	0	\N	0	0	14.9855	0.00090091	880.1763396	{}	{}	{}	30133200	0.32	6.23	4.85
STEEM	t	f	Steem					\N	https://steem.io/	N/A	PoW	99692126	245951012	0	\N	0	0	3.38545	0.00020353	198.84508284	{}	{}	{}	19810900	0.27	27.35	87.22
KMD	t	f	Komodo					\N	https://komodoplatform.com/	Equihash	dPoW/PoW	200000000	103782159	0	\N	0	0	7.79154	0.00046842	457.637660208	{}	{}	{}	33818500	-0.29	46.58	115.85
DOGE	t	f	Dogecoin					\N	http://dogecoin.com/	Scrypt	PoW	0	112426335121	0.00000762939453125	\N	2019303	0	0.00707701	0.00000043	0.4156695978	{}	{}	{}	77284600	0.19	36.24	101.28
ARK	t	f	Ark					\N		DPoS	DPoS	125000000	97981284	0	\N	0	0	7.68055	0.00046175	451.11864036	{}	{}	{}	44425400	2.36	31.78	69.33
SC	t	f	Siacoin					\N	https://sia.tech/	Blake2b	PoW	0	31396146174	0	\N	0	0	0.0234533	0.00000141	1.3775342662	{}	{}	{}	101214000	2.55	61.56	122.62
SNT	t	f	Status					\N		N/A	N/A	6804870175	3470483788	0	\N	0	0	0.188356	0.00001132	11.0631273312	{}	{}	{}	44131400	3.21	1.99	191.81
DCR	t	f	Decred					\N	https://decred.org/	BLAKE256	PoW/PoS	21000000	6396622	0	\N	0	0	99.8665	0.00600386	5865.6788508	{}	{}	{}	7137790	3.33	20.13	39.26
GNT	t	f	Golem					\N		N/A	N/A	1000000000	833032000	0	\N	0	0	0.751898	0.0000452	44.1628794096	{}	{}	{}	30882800	13.77	44.74	105.05
VERI	t	f	Veritaseum					\N		N/A	N/A	100000000	2036645	0	\N	0	0	287.817	0.0173032	16904.9890584	{}	{}	{}	1392630	3.25	18.3	26.7
GAME	t	f	GameCredits					\N	https://gamecredits.com/	Scrypt	PoW	84000000	64355352	0	\N	0	0	3.57671	0.00021503	210.078777192	{}	{}	{}	7546310	0.93	11.97	51.31
FUN	t	f	FunFair					\N		N/A	N/A	17173696076	4249873622	0	\N	0	0	0.0538255	0.00000324	3.1614515076	{}	{}	{}	17672100	0.69	4.22	32.23
NXS	t	f	Nexus					\N	http://www.nexusearth.com/	SHA3	PoW/nPoS	78000000	54510208	0	\N	0	0	4.10269	0.00024665	240.972317688	{}	{}	{}	6599180	0.18	14.02	48.8
ETHOS	t	f	Ethos					\N				0	75201833	0	\N	0	0	2.69283	0.00016189	158.163908616	{}	{}	{}	11887000	4.04	39.87	111.82
RDN	t	f	Raiden Network Token					\N	-	N/A	PoS	0	50148936	0	\N	0	0	4.03227	0.00024242	236.836184904	{}	{}	{}	9340790	0.49	-5.96	18.42
MCO	t	f	Monaco					\N		N/A	N/A	31587682.3632061	11443876	0	\N	0	0	17.0837	0.00102705	1003.41453624	{}	{}	{}	36292700	0.69	11.05	-11.3
REQ	t	f	Request Network					\N		N/A	N/A	1000000000	640739733	0	\N	0	0	0.301707	0.00001814	17.7208209864	{}	{}	{}	19340400	2.08	2.61	14.41
STORJ	t	f	Storj					\N		N/A	N/A	424999998	106295572	0	\N	0	0	1.75785	0.00010568	103.24767132	{}	{}	{}	43699400	2.46	35.64	73.86
BNT	t	f	Bancor					\N	https://bancor.network/	N/A	N/A	79323978	40772871	0	\N	0	0	4.49564	0.00027027	264.052314528	{}	{}	{}	7788920	-0.37	1.44	14.27
MTL	t	f	Metal					\N		N/A	PoPP	66588888	19300994	0	\N	0	0	9.08953	0.00054645	533.875362456	{}	{}	{}	21379700	-1.17	4.33	47.92
NAV	t	f	NAV Coin					\N	https://navcoin.org/	X13	PoW/PoS	0	62195429	0.8478904090821743	\N	1660697	0	2.80059	0.00016837	164.493213768	{}	{}	{}	30686300	0.11	11.99	27.48
DATA	t	f	Streamr DATAcoin					\N		N/A	N/A	987154514	677154514	0	\N	0	0	0.254842	0.00001532	14.9681958384	{}	{}	{}	9450870	-0.59	7.56	79.39
AION	t	f	Aion					\N		N/A	N/A	465934586.66	59799856	0	\N	0	0	2.80395	0.00016857	164.69056404	{}	{}	{}	765207	-1.09	3.88	-43.6
PPP	t	f	PayPie					\N		N/A	N/A	165000000	82500000	0	\N	0	0	2.02043	0.00012147	118.670360136	{}	{}	{}	560040	0.31	5.28	55.35
BLOCK	t	f	Blocknet					\N	http://blocknet.co/	N/A	PoW/PoS	0	4935842	0.9999766184948384	\N	191616	0	32.6811	0.00196475	1919.53094472	{}	{}	{}	669886	1.17	6.29	39.97
ETP	t	f	Metaverse ETP					\N		Ethash	N/A	100000000	36707308	0	\N	0	0	4.25055	0.00025554	249.65690436	{}	{}	{}	12108300	1.65	-0.29	36.75
INK	t	f	Ink					\N				1000000000	178250000	0	\N	0	0	0.862068	0.00005183	50.6337363936	{}	{}	{}	201395000	-1.64	-7.79	149.14
GRS	t	f	Groestlcoin					\N	http://www.groestlcoin.org/	Groestl	PoW	105000000	69047749	5.000000001241763	\N	1887880	186696834720.52	2.20089	0.00013232	129.269714328	{}	{}	{}	10465600	0.89	1.04	90.45
UBQ	t	f	Ubiq					\N		Dagger-Hashimoto	PoW	0	38800395	0	\N	0	0	3.73968	0.00022483	219.650852736	{}	{}	{}	5884040	-0.15	7.38	82.24
RHOC	t	f	RChain					\N		N/A	N/A	1000000000	182963195	0	\N	0	0	0.791231	0.00004757	46.4731110312	{}	{}	{}	838436	-1.73	-2.73	21.25
PPC	t	f	Peercoin					\N	http://peercoin.net/	N/A	N/A	0	24525721	0.33666664982835454	\N	339831	0	5.77349	0.0003471	339.107089848	{}	{}	{}	6048170	0.31	2.71	34.7
SNM	t	f	SONM					\N		N/A	N/A	444000000	359600000	0	\N	0	0	0.387386	0.00002329	22.7531941872	{}	{}	{}	7453840	-6.38	3.63	108.23
EDG	t	f	Edgeless					\N		N/A	N/A	132046997	82046288	0	\N	0	0	1.63857	0.00009851	96.241736664	{}	{}	{}	7035980	4.13	4.98	12.08
LINK	t	f	ChainLink					\N		N/A	N/A	1000000000	350000000	0	\N	0	0	0.368811	0.00002217	21.6621878472	{}	{}	{}	9198030	-3.69	-10.99	37.95
SUB	t	f	Substratum					\N		N/A	N/A	600000000	226091449	0	\N	0	0	0.570577	0.0000343	33.5129542104	{}	{}	{}	7794060	3.5	5.88	57.32
ACT	t	f	Achain					\N		N/A	N/A	1000000000	300000000	0	\N	0	0	0.420467	0.00002528	24.6962133384	{}	{}	{}	2165570	-0.3	-2.65	62.86
SNGLS	t	f	SingularDTV					\N	https://singulardtv.com/	N/A	N/A	1000000000	600000000	0	\N	0	0	0.197109	0.00001185	11.5772365368	{}	{}	{}	10509200	-0.3	33.73	29.11
ANT	t	f	Aragon					\N		N/A	N/A	39609524	32250457	0	\N	0	0	3.51286	0.00021119	206.328534672	{}	{}	{}	2200590	3.78	14.71	27.68
PURA	t	f	Pura					\N		X11	PoW	350000000	172137533	0	\N	0	0	0.642876	0.00003865	37.7594504352	{}	{}	{}	562241	0.05	-4.86	-14.2
SKY	t	f	Skycoin					\N		N/A	N/A	100000000	6330006	0	\N	0	0	17.363	0.00104385	1019.8192776	{}	{}	{}	328062	0.33	-1.27	28.75
JINN	t	f	Jinn					\N				0	58703	0	\N	0	0	1853.4	0.111424	108859.81968	{}	{}	{}	3706.8	-0.67	30.59	51.11
QSP	t	f	Quantstamp					\N		N/A	N/A	976442388.3211	617314171	0	\N	0	0	0.176143	0.00001059	10.3457943336	{}	{}	{}	9174280	0.83	2.42	55.35
R	t	f	Revain					\N		N/A	N/A	484450000	184450000	0	\N	0	0	0.588662	0.00003539	34.5751803024	{}	{}	{}	830335	-1.26	-5.7	14.85
TNB	t	f	Time New Bank					\N		N/A	N/A	5541877892.218591	1132673199	0	\N	0	0	0.0920304	0.00000553	5.4054239501	{}	{}	{}	10308800	-0.13	8.22	152.38
ADX	t	f	AdEx					\N		N/A	N/A	100000000	60248315	0	\N	0	0	1.69216	0.00010173	99.389356032	{}	{}	{}	13505100	1.75	2.92	33.67
KIN	t	f	Kin					\N		N/A	N/A	10000000000000	756097560976	0	\N	0	0	0.000130923	0.000000008	0.0076897886	{}	{}	{}	369096	-0.25	-4.63	81.33
DENT	t	f	Dent					\N		N/A	N/A	100000000000	10614760961	0	\N	0	0	0.0091177	0.00000055	0.535529933	{}	{}	{}	3736990	-0.68	-4.95	499.97
RPX	t	f	Red Pulse					\N		N/A	N/A	1358371250	543348500	0	\N	0	0	0.174984	0.00001052	10.2777202368	{}	{}	{}	2223250	7	48.89	310.78
CLOAK	t	f	CloakCoin					\N	http://www.cloakcoin.com/	X13	PoW/PoS	0	5053693	0.100594450021163	\N	1841371	0	18.6904	0.00112365	1097.78438208	{}	{}	{}	1561690	14.06	29.04	98.91
LRC	t	f	Loopring					\N		N/A	N/A	1395076055	286170756	0	\N	0	0	0.327411	0.00001968	19.2305505672	{}	{}	{}	3151100	0.1	2.3	46.28
ENG	t	f	Enigma					\N		N/A	N/A	150000000	74836171	0	\N	0	0	1.23495	0.00007424	72.53503524	{}	{}	{}	12743800	1.89	35.8	87.73
XDN	t	f	DigitalNote					\N	http://digitalnote.org/	CryptoNight	PoW	8589869056	6885695758	0	\N	0	0	0.013379	0.0000008	0.7858182408	{}	{}	{}	15333700	3.44	48.44	273.84
LBC	t	f	LBRY Credits					\N	https://lbry.io/	N/A	N/A	1000000000	125129289	0	\N	292008	0	0.711585	0.00004278	41.795087292	{}	{}	{}	15563800	1.84	11.46	82.92
XCP	t	f	Counterparty					\N	http://counterparty.io/	N/A	PoW	2600000	2617444	0	\N	0	0	33.9929	0.00204362	1996.57978008	{}	{}	{}	1580470	0.48	5.02	29.25
PART	t	f	Particl					\N		PoS	PoS	8634140	7812352	0	\N	0	0	11.2347	0.00067541	659.87235144	{}	{}	{}	846036	1.63	4.19	12.29
CND	t	f	Cindicator					\N		N/A	N/A	2000000005	1445976590	0	\N	0	0	0.060621	0.00000364	3.5605865592	{}	{}	{}	15227000	0.05	-16.84	239.16
VIA	t	f	Viacoin					\N	http://viacoin.org/	Scrypt	PoW	23000000	22931702	0.31250000018942153	\N	4472630	44781749847873	3.8096	0.00022903	223.75761792	{}	{}	{}	2338090	2.29	19.88	36.37
YOYOW	t	f	YOYOW					\N		N/A	N/A	1000000000	211436247	0	\N	0	0	0.393988	0.00002369	23.1409639776	{}	{}	{}	16547200	-1.61	10.94	33.32
ATM	t	f	ATMChain					\N	-	X11	PoW/PoS	0	4245153758	0	\N	0	0	0.0195925	0.00000118	1.150769406	{}	{}	{}	63983.6	7.48	-4.43	8.46
WINGS	t	f	Wings					\N	https://wings.ai/	N/A	N/A	100000000	89708333	0	\N	0	0	0.925296	0.00005563	54.3474456192	{}	{}	{}	3922810	-2.61	21.57	49.53
KCS	t	f	KuCoin Shares					\N		N/A	N/A	181043076	91043076	0	\N	0	0	0.893752	0.00005373	52.4947024704	{}	{}	{}	939334	3.14	9.65	80.16
ENJ	t	f	Enjin Coin					\N		N/A	N/A	1000000000	756192535	0	\N	0	0	0.106808	0.00000642	6.2733892416	{}	{}	{}	6326020	-2.09	-11.82	131.55
MNX	t	f	MinexCoin					\N		Mars	N/A	19000000	3000000	0	\N	0	0	26.7745	0.00160966	1572.6056124	{}	{}	{}	141479	2.43	15	-7.02
QRL	t	f	Quantum Resistant Ledger					\N		N/A	PoS	105000000	52000000	0	\N	0	0	1.54345	0.00009279	90.65484444	{}	{}	{}	1214780	0.88	4.86	21.16
RLC	t	f	iExec RLC					\N		N/A	N/A	87000000	79070793	0	\N	0	0	1.01337	0.00006092	59.520489624	{}	{}	{}	2866550	2.41	13.9	29.53
MER	t	f	Mercury					\N		N/A	N/A	100000000	100000000	0	\N	0	0	0.797053	0.00004792	46.8150673656	{}	{}	{}	1562940	-0.12	7.28	46.07
DPY	t	f	Delphy					\N				0	28166669	0	\N	0	0	2.8211	0.0001696	165.69787272	{}	{}	{}	203279	2.57	9.23	113.11
RISE	t	f	Rise					\N	https://rise.vision/	DPoS	PoS	0	113139200	0	\N	550423	0	0.701737	0.00004219	41.2166630424	{}	{}	{}	5322470	-0.44	6.99	27.06
CTR	t	f	Centra					\N		N/A	N/A	100000000	68000000	0	\N	0	0	1.16388	0.00006997	68.360724576	{}	{}	{}	14452400	1.75	6.98	196.57
MLN	t	f	Melon					\N		N/A	N/A	749400	599400	0	\N	0	0	129.164	0.00776519	7586.4733728	{}	{}	{}	1741960	0.58	7.76	63.89
FTC	t	f	Feathercoin					\N	https://www.feathercoin.com/	Scrypt	PoW	336000000	185654200	0	\N	2013539	0	0.415923	0.000025	24.4293205896	{}	{}	{}	1142610	1.66	1.67	-3.09
MGO	t	f	MobileGo					\N		N/A	N/A	100000000	98028887	0	\N	0	0	0.780658	0.00004693	45.8521037616	{}	{}	{}	544136	0.42	18.11	13.05
WABI	t	f	WaBi					\N		N/A	N/A	100000000	45248033	0	\N	0	0	1.6466	0.00009899	96.71338032	{}	{}	{}	7697040	1.11	-1.31	53.59
POT	t	f	PotCoin					\N	http://www.potcoin.com/	Scrypt	PoW	420000000	219015586	0.21700080758646914	\N	2572990	0	0.33707	0.00002026	19.797873864	{}	{}	{}	5828000	-0.34	12.42	-13.01
VOX	t	f	Voxels					\N	https://www.voxelus.com/	Scrypt	PoW	210000000	210000000	0	\N	0	0	0.345563	0.00002077	20.2967119176	{}	{}	{}	7453990	3.54	3.98	37.09
CFI	t	f	Cofound.it					\N		N/A	N/A	500000000	325000000	0	\N	0	0	0.222625	0.00001338	13.0759239	{}	{}	{}	3304260	1.21	9.07	59.69
EDO	t	f	Eidoo					\N		N/A	N/A	90708327	20986407	0	\N	0	0	3.39643	0.00020419	199.489995336	{}	{}	{}	3119880	1.31	7.27	31.6
LKK	t	f	Lykke					\N		N/A	N/A	1285690000	264151766	0	\N	0	0	0.260374	0.00001565	15.2931189648	{}	{}	{}	132455	0.64	-0.06	-10.81
POE	t	f	Po.et					\N		N/A	N/A	3141592653	2176495390	0	\N	0	0	0.0304159	0.00000183	1.7864839697	{}	{}	{}	7433320	13.4	7.14	187.04
PLR	t	f	Pillar					\N		N/A	N/A	800000000	227384800	0	\N	0	0	0.284331	0.00001709	16.7002381512	{}	{}	{}	432604	0.69	1.38	20.67
TNT	t	f	Tierion					\N		N/A	N/A	1000000000	428481269	0	\N	0	0	0.15015	0.00000903	8.81909028	{}	{}	{}	3913250	0.58	9.36	74.3
NMC	t	f	Namecoin					\N	https://namecoin.info/	SHA256	PoW	21000000	14736400	0	\N	0	0	4.27725	0.00025714	251.2251342	{}	{}	{}	1286320	2.14	2.71	17.1
EMC	t	f	Emercoin					\N	http://emercoin.com	SHA256	PoW/PoS	1000000000	41050379	0	\N	0	0	1.53117	0.00009205	89.933576184	{}	{}	{}	398445	-4.74	-0.14	30.2
AEON	t	f	Aeon					\N	-	CryptoNight	PoW	18400000	14651140	11.985432705408	\N	903816	16934882.316667	4.28312	0.0002575	251.569909824	{}	{}	{}	789430	-5.43	16.15	20.85
COB	t	f	Cobinhood					\N		N/A	N/A	1000000000	265251444	0	\N	0	0	0.231696	0.00001393	13.6087108992	{}	{}	{}	246239	0.98	-5.83	-23.28
CDT	t	f	CoinDash					\N		N/A	N/A	1000000000	560650080	0	\N	0	0	0.109314	0.00000657	6.4205796528	{}	{}	{}	6101440	5.5	13.7	55.64
1ST	t	f	FirstBlood					\N	https://firstblood.io	N/A	N/A	93468691	85558371	0	\N	0	0	0.708341	0.00004258	41.6045503032	{}	{}	{}	5093250	-4.79	7.67	-23.16
PAYX	t	f	Paypex					\N				0	68380258	0	\N	0	0	0.880548	0.00005294	51.7191628896	{}	{}	{}	2455.76	0.31	1.85	20.38
XWC	t	f	WhiteCoin					\N	http://www.whitecoin.info/	Scrypt	PoW/PoS	300000000	248574543	2	\N	400422	234929580466323	0.241343	0.00001451	14.1753293736	{}	{}	{}	2171350	-1.05	-3.43	44.36
BURST	t	f	Burst					\N	http://burstcoin.info/	Shabal256	PoC	2158812800	1800339818	1660	\N	385192	0	0.0330383	0.00000199	1.9405111582	{}	{}	{}	6921900	-9.19	38.07	121.57
THC	t	f	HempCoin					\N	http://hempcoin.org/	Scrypt	PoW/PoS	250000000	230006224	3.480452896192156	\N	1971322	34518938047	0.255992	0.00001539	15.0357413184	{}	{}	{}	8584250	1.99	42.07	102.33
LEND	t	f	ETHLend					\N		N/A	N/A	1299999942	940000000	0	\N	0	0	0.0625321	0.00000376	3.6728353999	{}	{}	{}	11424200	-1	-10.48	166.67
TIX	t	f	Blocktix					\N		N/A	N/A	62500000	40000000	0	\N	0	0	1.46866	0.00008829	86.262038832	{}	{}	{}	5160550	1.4	19.77	42.89
WGR	t	f	Wagerr					\N		PoS	N/A	200000000	183000000	0	\N	0	0	0.319778	0.00001922	18.7822247856	{}	{}	{}	445748	2.15	1.14	48.1
NEBL	t	f	Neblio					\N		N/A	N/A	0	12650526	0	\N	0	0	4.53957	0.00027291	266.632551864	{}	{}	{}	573738	0.62	11.49	10.68
OST	t	f	Simple Token					\N		N/A	N/A	800000000	181489545	0	\N	0	0	0.312998	0.00001882	18.3840001296	{}	{}	{}	8334720	1.12	-17.21	0
XBY	t	f	XTRABYTES					\N		N/A	PoSign	650000000	430000000	0	\N	0	0	0.131693	0.00000792	7.7350146936	{}	{}	{}	519543	0.38	-0.92	45.91
HVN	t	f	Hive					\N		N/A	N/A	500000000	375000000	0	\N	0	0	0.149414	0.00000898	8.7758611728	{}	{}	{}	1191830	1.26	-18.28	72.56
NLG	t	f	Gulden					\N	https://guldencoin.com/	Scrypt	PoW	1680000000	358333145	0	\N	0	0	0.155203	0.00000933	9.1158792456	{}	{}	{}	1031270	1.96	1.74	67.35
DNT	t	f	district0x					\N		N/A	N/A	1000000000	600000000	0	\N	0	0	0.0925173	0.00000556	5.434022119	{}	{}	{}	5800720	4.93	12.78	89.92
UKG	t	f	Unikoin Gold					\N		N/A	N/A	1000000000	133989637	0	\N	0	0	0.413481	0.00002486	24.2858892312	{}	{}	{}	452811	-4.3	41.34	130.36
HMQ	t	f	Humaniq					\N		N/A	N/A	920952070	162862944	0	\N	0	0	0.338134	0.00002033	19.8603681168	{}	{}	{}	4705610	-0.65	-1.11	94.53
CRW	t	f	Crown					\N	http://crown.tech/	SHA256	PoW	42000000	16475901	9.000000000657405	\N	1677888	1271208186436650000	3.32804	0.00020008	195.473095008	{}	{}	{}	535542	-0.87	3.6	59.16
DCT	t	f	DECENT					\N	http://decent.ch/	N/A	PoS	73197775	51306089	0	\N	0	0	1.06723	0.00006416	62.683967496	{}	{}	{}	4077690	-2.3	20.11	36.47
AST	t	f	AirSwap					\N		N/A	N/A	500000000	150000000	0	\N	0	0	0.36478	0.00002193	21.425426256	{}	{}	{}	7239820	-0.51	16.98	39.12
SIB	t	f	SIBCoin					\N	http://sibcoin.org/	X11GOST	PoW	24000000	16039114	0	\N	0	0	3.34892	0.00020133	196.699485984	{}	{}	{}	830418	0.39	7.72	32.51
FAIR	t	f	FairCoin					\N	http://fair-coin.org/	Groestl	PoW/PoS	0	53193831	0	\N	0	0	0.993864	0.00005975	58.3748008128	{}	{}	{}	119292	-0.6	-1.46	0.21
SBD	t	f	Steem Dollars					\N	http://steemit.com	N/A	N/A	0	4035446	0	\N	0	0	12.999	0.00078148	763.4988648	{}	{}	{}	8224310	0.91	13.88	140.65
DCN	t	f	Dentacoin					\N		N/A	N/A	8000000000000	325190215376	0	\N	0	0	0.000159737	0.00000001	0.0093821846	{}	{}	{}	148818	3.84	-11.3	39.34
TAAS	t	f	TaaS					\N		N/A	N/A	8146001	8146001	0	\N	0	0	6.34898	0.00038169	372.908610096	{}	{}	{}	1034720	-0.07	16.67	33.94
XP	t	f	XP					\N		SHA256	PoW/PoS	0	190082699469	0	\N	0	0	0.000269678	0.00000002	0.0158395913	{}	{}	{}	1143140	-1.5	65.26	92.88
IOC	t	f	I/O Coin					\N	http://iocoin.io/	X11	PoW/PoS	0	16422504	1.5000000042574746	\N	1650512	0	3.0779	0.00018504	180.78107208	{}	{}	{}	795528	-0.07	10.57	14.85
GUP	t	f	Matchpool					\N		N/A	N/A	100000000	75000000	0	\N	0	0	0.664742	0.00003996	39.0437543184	{}	{}	{}	4242100	2.99	3.08	61.18
VEE	t	f	BLOCKv					\N		N/A	N/A	6428571429	1349120359	0	\N	0	0	0.0364738	0.00000219	2.1422959378	{}	{}	{}	1318540	-1.54	10.31	3.84
DMD	t	f	Diamond					\N	https://bit.diamonds/	Groestl	PoW/PoS	4380000	2566326	2.349988230005173	\N	62021	0	19.0558	0.00114561	1119.24622416	{}	{}	{}	179819	1.78	5.61	23.63
ION	t	f	ION					\N	https://ionomy.com/	N/A	PoS	50900000	18446946	17	\N	424457	0	2.62713	0.00015794	154.305005976	{}	{}	{}	329466	-0.23	2.91	14.06
MOD	t	f	Modum					\N		N/A	N/A	27266200	18266200	0	\N	0	0	2.63152	0.0001582	154.562853504	{}	{}	{}	4020170	3.28	21.47	52.04
AMB	t	f	Ambrosus					\N		N/A	N/A	361477438	144590975	0	\N	0	0	0.330871	0.00001989	19.4337743592	{}	{}	{}	4898070	0.59	-2.31	33.74
TRST	t	f	WeTrust					\N		N/A	N/A	100000000	92147500	0	\N	0	0	0.511055	0.00003072	30.016917636	{}	{}	{}	1469440	0.3	2.54	-5.02
BLK	t	f	BlackCoin					\N	http://blackcoin.co/	Scrypt	PoS	0	76559267	1.499999998704247	\N	1916602	0	0.613166	0.00003686	36.0144276432	{}	{}	{}	2372050	1.9	7.8	57.44
BOT	t	f	Bodhi					\N				0	40000000	0	\N	0	0	1.14424	0.00006879	67.207165248	{}	{}	{}	2546020	0.53	3.41	126.61
TRIG	t	f	Triggers					\N	https://www.blocksafefoundation.com/	N/A	N/A	100000000	32105578	0	\N	0	0	1.42268	0.00008553	83.561394336	{}	{}	{}	4052940	3.11	5.87	56.56
FUEL	t	f	Etherparty					\N		N/A	N/A	1000000000	485096253	0	\N	0	0	0.0941532	0.00000566	5.5301070326	{}	{}	{}	4825700	2.91	11.12	95.57
SPANK	t	f	SpankChain					\N		N/A	N/A	1000000000	300043386	0	\N	0	0	0.152208	0.00000915	8.9399673216	{}	{}	{}	91914.3	0.31	14.21	8.17
BITCNY	t	f	bitCNY					\N	-	N/A	N/A	100000000000	323962000	0	\N	0	0	0.140927	0.00000847	8.2773755304	{}	{}	{}	54455300	-4.05	-0.36	-4.09
MDA	t	f	Moeda Loyalty Points					\N		N/A	N/A	19628888	19628888	0	\N	0	0	2.23474	0.00013435	131.257900848	{}	{}	{}	3720880	-0.12	20.92	58.76
OK	t	f	OKCash					\N	http://okcash.co/	N/A	PoW/PoS	105000000	73500652	2.0833195025722184	\N	1429731	0	0.579461	0.00003484	34.0347577272	{}	{}	{}	5100810	1.86	1.9	17.01
SHIFT	t	f	Shift					\N		DPoS	DPoS	0	11527503	0	\N	0	0	3.62607	0.000218	212.977946664	{}	{}	{}	858898	-0.32	13.77	43.32
OMNI	t	f	Omni					\N	http://www.omnilayer.org/	Scrypt	PoW	616448	560312	0	\N	0	0	73.7308	0.00443262	4330.59328416	{}	{}	{}	1055530	1.52	7.16	43.99
FLO	t	f	FlorinCoin					\N	http://florincoin.org/	Scrypt	PoW	160000000	140738405	11.458619683980942	\N	2500130	140954757742	0.292698	0.0000176	17.1916755696	{}	{}	{}	2037510	4.18	30.27	126.96
OTN	t	f	Open Trading Network					\N		N/A	N/A	100000000	4949297	0	\N	0	0	8.11478	0.00048785	476.623226256	{}	{}	{}	101789	0.69	-0.27	-24.5
AMP	t	f	Synereo					\N	http://www.synereo.com/	N/A	Pow/PoSC	927786732.665189	82256324	0	\N	0	0	0.472947	0.00002843	27.7786366344	{}	{}	{}	2405640	-0.25	14.53	34.44
GRC	t	f	GridCoin					\N	http://www.gridcoin.us/	Scrypt	DPoR	0	390312753	0	\N	0	0	0.0979467	0.00000589	5.7529190138	{}	{}	{}	1380000	-1.95	18.83	39.65
MTH	t	f	Monetha					\N		N/A	N/A	402400000	216883420	0	\N	0	0	0.176242	0.0000106	10.3516091184	{}	{}	{}	3615320	0.28	-9.05	130.15
ZSC	t	f	Zeusshield					\N		N/A	N/A	5642500000	1153170765	0	\N	0	0	0.0330467	0.00000199	1.9410045338	{}	{}	{}	1481860	0.38	-7.59	9.86
ADT	t	f	adToken					\N		N/A	N/A	1000000000	600000000	0	\N	0	0	0.0633253	0.00000381	3.7194241606	{}	{}	{}	2283250	0.4	42.41	92.95
VIB	t	f	Viberate					\N		N/A	N/A	200000000	162299801	0	\N	0	0	0.229917	0.00001382	13.5042209784	{}	{}	{}	7316080	0.03	5.95	39.9
MUE	t	f	MonetaryUnit					\N	http://www.monetaryunit.org/	Quark	PoW	4000000000	120515677	35.99999996700457	\N	307818	16210716386584	0.308216	0.00001853	18.1031284032	{}	{}	{}	948835	0.97	14.52	21.77
NMR	t	f	Numeraire					\N		N/A	N/A	21000000	1296613	0	\N	0	0	27.8394	0.00167368	1635.15272688	{}	{}	{}	1705090	1.43	12.82	19.18
NLC2	t	f	NoLimitCoin					\N		PoS	PoS	0	204755009	0	\N	0	0	0.175995	0.00001058	10.337101524	{}	{}	{}	152505	1.11	10.21	41.04
GRID	t	f	Grid+					\N		N/A	N/A	300000000	39236491	0	\N	0	0	0.912597	0.00005486	53.6015673144	{}	{}	{}	32269.4	0.31	3.84	8.33
PTOY	t	f	Patientory					\N		N/A	N/A	100002000	70000000	0	\N	0	0	0.509836	0.00003065	29.9453194272	{}	{}	{}	5058480	0.62	10.81	42.52
BCO	t	f	BridgeCoin					\N				27000000	27000000	0	\N	0	0	1.30309	0.00007834	76.537251768	{}	{}	{}	73903.4	0.52	5.93	44.95
XPA	t	f	XPlay					\N				0	1000000000	0	\N	0	0	0.0349014	0.0000021	2.0499407093	{}	{}	{}	188760	0.31	4.94	7
RADS	t	f	Radium					\N	https://radiumcore.org/	N/A	PoS	9000000	3412992	0.5034396585077048	\N	1306815	0	10.1297	0.00060899	594.96995544	{}	{}	{}	2955860	0.25	2.57	75.82
QAU	t	f	Quantum					\N		N/A	N/A	246855127	77429074	0	\N	0	0	0.445996	0.00002681	26.1956642592	{}	{}	{}	259896	-0.31	41.25	162.58
XST	t	f	Stealthcoin					\N	https://www.stealth-coin.com/	X13	PoW/PoS	0	27662073	1	\N	445709	0	1.21677	0.00007315	71.467229304	{}	{}	{}	5488340	1.99	98.15	237.06
SLS	t	f	SaluS					\N	http://saluscoin.info/	Scrypt	PoW/PoS	0	1009732	0	\N	0	0	33.1003	0.00198995	1944.15274056	{}	{}	{}	591965	1.07	5.51	1.46
BITB	t	f	BitBean					\N	http://www.bitbean.org/	SHA256	PoW/PoS	50000000000	2274429000	1000	\N	1678447	0	0.0144606	0.00000087	0.8493462331	{}	{}	{}	10872800	-6.41	113.42	166.3
EXP	t	f	Expanse					\N	http://www.expanse.tech/	Ethash	PoW	16906397	7906397	0	\N	0	0	4.13712	0.00024872	242.994570624	{}	{}	{}	3392360	-2.51	17.48	81.13
CSNO	t	f	BitDice					\N		N/A	N/A	100000000	70000000	0	\N	0	0	0.456086	0.00002742	26.7883024272	{}	{}	{}	116854	0.1	18.55	26.63
CLAM	t	f	Clams					\N	http://www.clamcoin.org/	N/A	PoW	0	2772676	1	\N	1825029	6194839098419	11.2586	0.00067686	661.27612272	{}	{}	{}	1528330	2.86	14.32	47.44
DLT	t	f	Agrello					\N		N/A	N/A	130271020	85978873	0	\N	0	0	0.361543	0.00002174	21.2353004136	{}	{}	{}	1044680	5.64	5.39	66.02
PST	t	f	Primas					\N		N/A	N/A	100000000	51200000	0	\N	0	0	0.599211	0.00003602	35.1947779272	{}	{}	{}	756953	0.37	6.1	115.9
DRT	t	f	DomRaider					\N		N/A	N/A	1300000000	591500000	0	\N	0	0	0.051824	0.00000312	3.0438930048	{}	{}	{}	19073.7	0.2	-10.65	106.46
BTX	t	f	Bitcore					\N		Time Travel	PoW	21000000	1976181	0	\N	0	0	15.4061	0.0009262	904.88036472	{}	{}	{}	2970200	-1.68	-1.37	0.67
XSPEC	t	f	Spectrecoin					\N		POS 3.0	PoS	0	20785264	0	\N	0	0	1.46309	0.00008796	85.934883768	{}	{}	{}	343514	0.32	-0.66	287.79
PRE	t	f	Presearch					\N	-	Scrypt	PoW	1000000000	155000000	0	\N	0	0	0.191098	0.00001149	11.2241792496	{}	{}	{}	27645.7	-8.17	-10.62	-2.38
PPY	t	f	Peerplays					\N	http://www.peerplays.com/	N/A	N/A	5916684	3937156	0	\N	0	0	7.5171	0.00045192	441.51837192	{}	{}	{}	15531.4	0.21	58.53	89.54
VRC	t	f	VeriCoin					\N	http://www.vericoin.info/	Scrypt	PoW/PoS	0	30535331	0.6212281535565853	\N	2099316	0	0.966249	0.00005809	56.7528282648	{}	{}	{}	2003040	-0.51	1.89	-18.03
WCT	t	f	Waves Community Token					\N		N/A	N/A	10000000	9973579	0	\N	0	0	2.95088	0.0001774	173.320526976	{}	{}	{}	94856	-0.62	-0.91	4.39
GAM	t	f	Gambit					\N	http://gambitcrypto.com/	Scrypt	PoW/PoS	0	1199650	0.09775698449229822	\N	1430258	0	24.4564	0.00147029	1436.45154528	{}	{}	{}	328858	-0.23	1.78	37.01
RBY	t	f	Rubycoin					\N	http://www.rubycoin.org/	Scrypt	PoS	0	25108006	4.000000006053597	\N	1002404	0	1.16494	0.00007003	68.422983888	{}	{}	{}	534728	2.02	1.89	35.25
BCAP	t	f	BCAP					\N		N/A	N/A	10000000	10000000	0	\N	0	0	2.92472	0.00017583	171.784014144	{}	{}	{}	9356.72	0.31	3.72	45.78
SNC	t	f	SunContract					\N		N/A	N/A	7994751.31	107712011	0	\N	0	0	0.27105	0.0000163	15.92017596	{}	{}	{}	1393170	0.88	24.09	58.83
MYST	t	f	Mysterium					\N		N/A	N/A	32433366	19429024	0	\N	0	0	1.48742	0.00008942	87.363911184	{}	{}	{}	3552710	-2.22	3.26	51.18
STX	t	f	Stox					\N		N/A	N/A	58850550.4633	42370678	0	\N	0	0	0.680067	0.00004088	39.9438712584	{}	{}	{}	1926390	-0.57	9.42	40.45
BCPT	t	f	BlockMason Credit Protocol					\N		N/A	N/A	116158667	45166200	0	\N	0	0	0.637075	0.0000383	37.41872754	{}	{}	{}	6228850	14.87	83.83	276.65
GOLOS	t	f	Golos					\N		N/A	PoW	0	124518891	0	\N	0	0	0.230227	0.00001384	13.5224288904	{}	{}	{}	90890.5	0.35	6.74	15.79
EVX	t	f	Everex					\N		N/A	N/A	25000000	16500000	0	\N	0	0	1.67959	0.00010098	98.651054568	{}	{}	{}	2368920	6.39	6.45	38.36
OCT	t	f	OracleChain					\N				0	30000000	0	\N	0	0	0.920878	0.00005536	54.0879535056	{}	{}	{}	247257	-5.2	5.06	43.36
XUC	t	f	Exchange Union					\N		N/A	N/A	3000000000	2000000	0	\N	0	0	13.5347	0.00081369	794.96331144	{}	{}	{}	3586050	0.78	-10.55	28.98
GVT	t	f	Genesis Vision					\N		N/A	N/A	4436644	3726781	0	\N	0	0	7.23251	0.00043481	424.802921352	{}	{}	{}	4105210	2.33	-8.01	30.5
FRST	t	f	FirstCoin					\N		Scrypt	PoW/PoS	110000000	1869936	0	\N	0	0	14.1712	0.00085196	832.34826624	{}	{}	{}	397266	-5.7	-6.15	-14.61
PRG	t	f	Paragon					\N		N/A	N/A	200000000	64936666	0	\N	0	0	0.398004	0.00002393	23.3768445408	{}	{}	{}	126069	2.08	1.15	30.16
XRL	t	f	Rialto					\N		N/A	N/A	100000000	85000000	0	\N	0	0	0.300836	0.00001809	17.6696626272	{}	{}	{}	64332.3	0.14	23.86	34.92
DTB	t	f	Databits					\N		N/A	N/A	22747809	22747809	0	\N	0	0	1.12227	0.00006747	65.916752904	{}	{}	{}	386399	1.15	13.34	16.38
ICOS	t	f	ICOS					\N		N/A	N/A	591617	585250	0	\N	0	0	43.5485	0.00261809	2557.8298572	{}	{}	{}	41927.4	7.46	-5.97	-9.68
GCR	t	f	Global Currency Reserve					\N	-	N/A	PoS	0	103532814	2.2066507997612157	\N	811173	0	0.243353	0.00001463	14.2933871256	{}	{}	{}	1560100	-1.58	8.59	-15.1
AVT	t	f	Aventus					\N		N/A	N/A	10000000	6000000	0	\N	0	0	4.19647	0.00025229	246.480504744	{}	{}	{}	2304550	3.39	9.59	2.05
TIPS	t	f	FedoraCoin					\N				0	443168182458	0	\N	0	0	0.0000567309	0.000000003	0.0033321008	{}	{}	{}	7091.12	-4.96	-33.72	-9.29
NULS	t	f	Nuls					\N		N/A	N/A	40000000	23564882	0	\N	0	0	1.03949	0.00006249	61.054653048	{}	{}	{}	467451000	0.9	-1.56	18.98
NEOS	t	f	NeosCoin					\N	http://www.neoscoin.com/	SHA256	PoS	21000000	3620174	0.8999999999878523	\N	745022	0	6.61791	0.00039786	388.704267432	{}	{}	{}	703592	1.89	6.78	10.97
OBITS	t	f	OBITS					\N	http://obits.io/	N/A	N/A	18276898	15752000	0	\N	0	0	1.51831	0.00009128	89.178241512	{}	{}	{}	86926.6	-5.95	-2.08	20.44
BSD	t	f	BitSend					\N	https://www.bitsend.info/	X11	PoW/PoS	139000000	17566425	25	\N	411388	2313256972.6672	1.36111	0.00008183	79.945068072	{}	{}	{}	450996	0.68	3.19	-0.43
IXT	t	f	iXledger					\N		N/A	N/A	65778843.8311	35778844	0	\N	0	0	0.668008	0.00004016	39.2355834816	{}	{}	{}	509237	0.71	-7.72	-19.73
XMY	t	f	Myriad					\N	http://myriadcoin.org/	Multiple	PoW	2000000000	1538382000	250	\N	2282690	3132157959549	0.0154917	0.00000093	0.9099080978	{}	{}	{}	1981430	17.12	73.13	199.82
NXC	t	f	Nexium					\N		N/A	N/A	100000000	66521586	0	\N	0	0	0.352418	0.00002119	20.6993417136	{}	{}	{}	1156870	5.08	28.24	67.55
SWT	t	f	Swarm City					\N		N/A	N/A	7885956	7965165	0	\N	0	0	2.9416	0.00017685	172.77546432	{}	{}	{}	835728	0.08	11.77	16.39
ALIS	t	f	ALIS					\N		N/A	N/A	287604611.0864	38538648	0	\N	0	0	0.605332	0.00003639	35.5542960864	{}	{}	{}	281216	-0.2	4.55	27.82
PASC	t	f	Pascal Coin					\N		N/A	N/A	0	16207700	0	\N	0	0	1.43033	0.00008599	84.010718616	{}	{}	{}	426185	0.64	10.93	37.72
BLUE	t	f	BLUE					\N		N/A	N/A	42000000	33509711	0	\N	0	0	0.690719	0.00004153	40.5695186088	{}	{}	{}	789181	1.88	103.88	206.94
BBR	t	f	Boolberry					\N	http://boolberry.com/	X11	PoW	18450000	10720038	7.114974	\N	938688	4397556434.825	2.11581	0.0001272	124.272523512	{}	{}	{}	16018.6	0.2	3.41	6.14
ZNY	t	f	Bitzeny					\N	http://bitzeny.org/	Scrypt	PoW	250000000	75614500	0	\N	0	0	0.295255	0.00001775	17.341861476	{}	{}	{}	368749	7.38	55.74	-14.02
TX	t	f	TransferCoin					\N	https://txproject.io/	X11	PoW/PoS	0	6251318	1	\N	1178227	0	3.4921	0.00020994	205.10919192	{}	{}	{}	1002010	2.32	4.36	-14.69
TKN	t	f	TokenCard					\N		N/A	N/A	39406760	23644056	0	\N	0	0	0.919564	0.00005528	54.0107754528	{}	{}	{}	277419	0.75	-0.51	-26.83
BQ	t	f	bitqy					\N		N/A	N/A	10000000000	2713469159	0	\N	0	0	0.00800149	0.00000048	0.4699691154	{}	{}	{}	9348.88	0.3	-2.86	-24.25
XSH	t	f	SHIELD					\N		Multiple	PoW	660000000	473027819	0	\N	0	0	0.0458554	0.00000276	2.6933260901	{}	{}	{}	979026	4.29	110.48	517.82
PINK	t	f	PinkCoin					\N	http://getstarted.with.pink/	X11	PoW/PoS	500000000	374148600	60.71428573131561	\N	313226	0	0.0573395	0.00000345	3.3678470004	{}	{}	{}	1729340	24.58	54.92	82.4
LEO	t	f	LEOcoin					\N		Scrypt	PoW	1000000000	95092869	0	\N	0	0	0.225544	0.00001356	13.2473719488	{}	{}	{}	36564.5	-2.37	-0.33	-4.68
LMC	t	f	LoMoCoin					\N		Scrypt	PoW/PoS	1000000000	222156141	0	\N	0	0	0.0956352	0.00000575	5.617152599	{}	{}	{}	1062330	7.35	7.47	40.93
SLR	t	f	SolarCoin					\N	http://solarcoin.org/en/front-page/	Scrypt	PoW	98100000000	38451856	0.8867788324132562	\N	2044203	0	0.550307	0.00003308	32.3223917064	{}	{}	{}	420363	-1.56	8.11	14.77
UNO	t	f	Unobtanium					\N	http://unobtanium.uno/	SHA256	PoW	250000	197952	0.00999999999961195	\N	1052346	16775192435725500	106.238	0.00638692	6239.9101776	{}	{}	{}	78188	-5.82	7.38	35.11
FLDC	t	f	FoldingCoin					\N	http://foldingcoin.net/	Stanford Folding	PoW	1000000000	550358603	0	\N	0	0	0.0381825	0.0000023	2.242656774	{}	{}	{}	1282280	1.92	20.29	28.25
MOON	t	f	Mooncoin					\N	-	Scrypt	PoW	384000000000	223069890491	0	\N	0	0	0.0000940629	0.000000006	0.0055248032	{}	{}	{}	72026.2	-5.28	6.29	79.34
MSP	t	f	Mothership					\N		N/A	N/A	200000000	140000000	0	\N	0	0	0.146622	0.00000881	8.6118724944	{}	{}	{}	237330	-6.63	-2.27	50.28
BITUSD	t	f	bitUSD					\N	-	N/A	N/A	100000000000	21850000	0	\N	0	0	0.920718	0.00005535	54.0785558736	{}	{}	{}	12546700	-7.55	-4.54	-8.13
NVST	t	f	NVO					\N		N/A	N/A	30000000	15000000	0	\N	0	0	1.33932	0.00008052	78.665228064	{}	{}	{}	4747.77	0.05	3.01	31.72
XAUR	t	f	Xaurum					\N	http://www.xaurum.org/	N/A	N/A	127108472.4829	127107117	0	\N	0	0	0.15736	0.00000946	9.242571072	{}	{}	{}	396347	2.58	6.9	-28.8
XVC	t	f	Vcash					\N	https://v.cash/	Whirlpool	PoS	0	15366836	0.0027485002453128495	\N	861866	110968422261	1.30092	0.00007821	76.409796384	{}	{}	{}	810255	0.38	2.73	14.33
ODN	t	f	Obsidian					\N		SHA-512	PoS	91388946	25000000	0	\N	0	0	0.799213	0.00004805	46.9419353976	{}	{}	{}	343531	13.91	16.22	84.59
MUSIC	t	f	Musicoin					\N		Ethash	PoW	454898394	512926850	0	\N	0	0	0.0388976	0.00000234	2.2846583155	{}	{}	{}	1553070	4.55	31.46	61.46
DICE	t	f	Etheroll					\N		N/A	N/A	7001622	7001623	0	\N	0	0	2.84313	0.00017093	166.991809176	{}	{}	{}	22513.9	0.08	3.23	-13.65
PLBT	t	f	Polybius					\N		N/A	N/A	20000000	3820954	0	\N	0	0	5.17636	0.0003112	304.034539872	{}	{}	{}	484126	0.37	12.07	-4.13
COVAL	t	f	Circuits of Value					\N	http://cov.al/	Multiple	PoW	1000000000	1000000000	0	\N	0	0	0.0192951	0.00000116	1.1333015575	{}	{}	{}	920523	12.26	32	155.73
ATB	t	f	ATBCoin					\N		SHA256	PoW	300000000	39745125	0	\N	0	0	0.477392	0.0000287	28.0397145984	{}	{}	{}	4025490	2.2	-0.85	4.99
LUN	t	f	Lunyr					\N		N/A	N/A	2703356.0785	2297853	0	\N	0	0	8.22504	0.00049448	483.099369408	{}	{}	{}	419487	-1.58	6.5	39.13
TCC	t	f	The ChampCoin					\N				516085281	164925727	0	\N	0	0	0.113608	0.00000683	6.6727886016	{}	{}	{}	179498	0.74	0.1	1.9
INCNT	t	f	Incent					\N		N/A	N/A	0	46016602	0	\N	0	0	0.395715	0.00002379	23.242399668	{}	{}	{}	369328	1.04	9.41	45.37
NSR	t	f	NuShares					\N	https://nubits.com/nushares/introduction	N/A	PoS	1000000000	2777600756	0	\N	0	0	0.00651283	0.00000039	0.3825323726	{}	{}	{}	65601.7	-0.23	18.84	21.42
ART	t	f	Maecenas					\N		N/A	N/A	100000000	30150150	0	\N	0	0	0.598976	0.00003601	35.1809751552	{}	{}	{}	41342.4	0.2	3.34	-2.25
PHR	t	f	Phore					\N		PoS	PoS	30000000	7950189	0	\N	0	0	2.26385	0.0001361	132.96768252	{}	{}	{}	490119	-1.95	7.54	202.45
KICK	t	f	KickCoin					\N		N/A	N/A	476222009	321137782	0	\N	0	0	0.0544787	0.00000328	3.1998173402	{}	{}	{}	691999	-1.83	-10.02	29.73
HST	t	f	Decision Token					\N		N/A	N/A	48240069.5496	31182814	0	\N	0	0	0.557866	0.00003354	32.7663710832	{}	{}	{}	351466	3.22	8.44	78.53
AIR	t	f	AirToken					\N		N/A	N/A	1491492558	1050000000	0	\N	0	0	0.0165045	0.00000099	0.9693951084	{}	{}	{}	138050	-0.21	24.44	48.63
DIME	t	f	Dimecoin					\N	http://dimecoin.org	Quark	PoW	0	539096740560	17439.999938964844	\N	2577966	0	0.0000313661	0.000000002	0.0018422942	{}	{}	{}	23630.6	2.35	172.72	81.26
ENRG	t	f	Energycoin					\N	http://energycoin.pw/	Scrypt	PoW/PoS	0	121483035	4.999923075620945	\N	2445392	0	0.138226	0.00000831	8.1187317552	{}	{}	{}	154995	-4.38	9.53	6.42
BTM	t	f	Bytom					\N	https://github.com/project-bitmark/	Scrypt	PoW	27580000	7468680	0	\N	0	0	2.24516	0.00013498	131.869921632	{}	{}	{}	152455	-0.38	9.75	11.94
NVC	t	f	Novacoin					\N	http://novacoin.org/	Scrypt	PoW/PoS	0	1929890	0	\N	0	0	8.47902	0.00050975	498.016935504	{}	{}	{}	611198	0.24	8.23	30.13
OAX	t	f	OAX					\N		N/A	N/A	100000000	25009250	0	\N	0	0	0.649645	0.00003906	38.157029004	{}	{}	{}	1722540	5.3	14.68	76.78
POSW	t	f	PoSW Coin					\N		Scrypt	PoW/PoS	41000000	44100000	0	\N	0	0	0.364495	0.00002191	21.408686724	{}	{}	{}	261889	-2.06	-10.91	54.66
HEAT	t	f	HEAT					\N	-	N/A	PoS/PoP	26000000	31002864	0	\N	0	0	0.518147	0.00003115	30.4334676744	{}	{}	{}	14952.1	-3.98	-5.15	13.22
ONION	t	f	DeepOnion					\N		X13	PoW/PoS	18898187.6216583	4590263	0	\N	0	0	3.4374	0.00020665	201.89637648	{}	{}	{}	348265	2.89	-1.05	30.82
TIME	t	f	Chronobank					\N		N/A	N/A	710113	710113	0	\N	0	0	22.1449	0.00133133	1300.68513048	{}	{}	{}	447279	-3.87	12.04	26.24
BMC	t	f	Blackmoon Crypto					\N		N/A	N/A	60000000	30049251	0	\N	0	0	0.523168	0.00003145	30.7283771136	{}	{}	{}	3176760	-0.01	-5.82	3.08
MEME	t	f	Memetic / PepeCoin					\N	-	X11	PoW/PoS	0	18624483	0	\N	0	0	0.834839	0.00005019	49.0344356328	{}	{}	{}	2760770	5.33	9.2	-19.5
RVT	t	f	Rivetz					\N		N/A	N/A	200000000	26244468	0	\N	0	0	0.589777	0.00003546	34.6406700504	{}	{}	{}	45113.3	1.8	1.87	1.95
ABY	t	f	ArtByte					\N	http://www.applebyte.me/	Scrypt	PoW	1000000000	792537250	0	\N	0	0	0.0194271	0.00000117	1.1410546039	{}	{}	{}	1167070	2.16	56.65	115.58
SPHR	t	f	Sphere					\N	http://www.sphrpay.io/	Scrypt	PoW/PoS	0	3082940	0	\N	0	0	4.99028	0.00030001	293.105093856	{}	{}	{}	538852	-1.22	-0.72	-13.04
SEQ	t	f	Sequence					\N		Scrypt	PoW/PoS	0	45239595	0	\N	0	0	0.338163	0.00002033	19.8620714376	{}	{}	{}	145782	0.13	8.16	22.28
COSS	t	f	COSS					\N		N/A	N/A	200000000	59483027	0	\N	0	0	0.25655	0.00001542	15.06851556	{}	{}	{}	469623	0.58	-2.62	86.77
OXY	t	f	Oxycoin					\N		DPoS	DPoS	0	84747771	0	\N	0	0	0.179364	0.00001078	10.5349804128	{}	{}	{}	17228.9	0.18	4.71	-7.32
AUR	t	f	Auroracoin					\N	http://auroraspjall.is/	Scrypt	PoW/PoS	21000000	8658139	2.5	\N	1136633	0	1.74878	0.00010514	102.714943056	{}	{}	{}	384925	1.42	23.63	29.17
BCY	t	f	Bitcrystals					\N	http://bitcrystals.com/	Counterparty	N/A	100000000	23192531	0	\N	0	0	0.644075	0.00003872	37.82987394	{}	{}	{}	406673	1.35	8.84	37.95
TGT	t	f	Target Coin					\N		N/A	N/A	2000100000	952429892	0	\N	0	0	0.0149703	0.0000009	0.8792835646	{}	{}	{}	4426.02	-0.06	-20.65	26.87
POLL	t	f	ClearPoll					\N		N/A	N/A	9999991	6999991	0	\N	0	0	2.02983	0.00012203	119.222471016	{}	{}	{}	383057	-1.77	-13.84	12.47
LA	t	f	LAToken					\N		N/A	N/A	1000000000	45760869	0	\N	0	0	0.303443	0.00001824	17.8227852936	{}	{}	{}	459162	-1.5	0.04	0.86
B2B	t	f	B2B					\N		N/A	N/A	19822337.199585434	15864963	0	\N	0	0	0.875146	0.00005261	51.4018753392	{}	{}	{}	28084.5	6.33	65.13	-43.55
CURE	t	f	Curecoin					\N	https://www.curecoin.net/	Scrypt	PoW	0	23817377	0.175812499597669	\N	204459	0	0.572525	0.00003442	33.62737038	{}	{}	{}	168917	-2.48	-0.2	17.09
KORE	t	f	Kore					\N	http://korecoin.net/	X13	PoW/PoS	12000000	2022465	0	\N	489689	0	6.67294	0.00040117	391.936465488	{}	{}	{}	1352850	2.73	2.3	43.92
ASTRO	t	f	Astro					\N		N/A	N/A	6999999	3313833	0	\N	0	0	4.00533	0.0002408	235.253858616	{}	{}	{}	42654.1	0.31	4.51	38.96
MXT	t	f	MarteXcoin					\N		X13	PoW/PoS	5000000	2828490	0	\N	0	0	4.60607	0.00027691	270.538442664	{}	{}	{}	37175.8	-0.81	-1.24	96.56
LOC	t	f	LockChain					\N		Quark	PoW/PoS	0	14043321	0	\N	0	0	0.919908	0.0000553	54.0309803616	{}	{}	{}	87452.9	12.26	0	0
XBC	t	f	Bitcoin Plus					\N	https://www.bitcoinplus.org/	Scrypt	PoW/PoS	0	104049	0.03123287142807385	\N	474258	0	124.127	0.00746237	7290.6241704	{}	{}	{}	444296	2.08	9.04	3.33
CAG	t	f	Change					\N		N/A	N/A	79184116	37109887	0	\N	0	0	0.340638	0.00002048	20.0074410576	{}	{}	{}	250578	2.14	-8.49	1.85
EAC	t	f	EarthCoin					\N	http://getearthcoin.com/	Scrypt	PoW	13500000000	11573059432	0	\N	0	0	0.00108608	0.00000007	0.063791126	{}	{}	{}	150407	-12	-3.17	69.76
ECC	t	f	ECC					\N		Scrypt	PoW/PoS	25000000000	25000000000	0	\N	0	0	0.000499011	0.00000003	0.0293095109	{}	{}	{}	7263.19	0.15	8.41	73.76
IFT	t	f	InvestFeed					\N		N/A	N/A	191381258	191381257	0	\N	0	0	0.0648106	0.0000039	3.8066635531	{}	{}	{}	139625	2.49	5.5	29.41
VIBE	t	f	VIBE					\N		N/A	N/A	267000000	172403636	0	\N	0	0	0.0698851	0.0000042	4.1047153255	{}	{}	{}	138805	-6.52	13.34	39.31
DNA	t	f	EncrypGen					\N		N/A	N/A	75000000	38575767	0	\N	0	0	0.305808	0.00001838	17.9616940416	{}	{}	{}	124711	2.17	-8.56	-36.4
IOP	t	f	Internet of People					\N		SHA256	PoW/PoS	21000000	1816107	0	\N	0	0	6.35224	0.00038189	373.100086848	{}	{}	{}	3066050	1.45	9.58	1.76
XPM	t	f	Primecoin					\N	http://primecoin.io/	Multiple	PoW	0	21767988	0	\N	0	0	0.528969	0.0000318	31.0691000088	{}	{}	{}	777977	-1.05	39.17	53.93
XTO	t	f	Tao					\N				0	32684386	0	\N	0	0	0.344983	0.00002074	20.2626455016	{}	{}	{}	6630.03	0.15	-0.73	-13.23
GLD	t	f	GoldCoin					\N	http://www.gldcoin.com/	Scrypt	PoW	72245700	40702988	3.9999999962747097	\N	747288	12600354452	0.274546	0.00001651	16.1255142192	{}	{}	{}	365291	3.77	-14.74	84.16
PZM	t	f	PRIZM					\N		SHA256	PoS	6000000000	12198872	0	\N	0	0	0.907157	0.00005454	53.2820478264	{}	{}	{}	11828.3	-0.13	-6.67	12.8
XNN	t	f	Xenon					\N		N/A	N/A	1000000000	300000000	0	\N	0	0	0.0364489	0.00000219	2.1408334313	{}	{}	{}	44978.2	-7.75	19.3	-9.75
DOPE	t	f	DopeCoin					\N	http://www.dopecoin.com/	Scrypt	PoW	575000000	116845228	0	\N	0	0	0.0931718	0.0000056	5.4724643074	{}	{}	{}	1464500	0.87	10.21	27.15
EDR	t	f	E-Dinar Coin					\N	https://edinarcoin.com/	X11	DPoS	999999999999999	886211988	0	\N	0	0	0.0122545	0.00000074	0.7197705084	{}	{}	{}	449963	6.79	0.19	-7.54
DBET	t	f	DecentBet					\N		N/A	N/A	133039762.4203	77918105	0	\N	0	0	0.138698	0.00000834	8.1464547696	{}	{}	{}	20713.7	0.19	-0.29	17.5
SXC	t	f	Sexcoin					\N	https://www.sexcoin.info/	Scrypt	PoW	250000000	125511051	6.25	\N	2541812	0	0.0853918	0.00000513	5.0155044514	{}	{}	{}	35384	0.63	6.35	28.32
ZEPH	t	f	Zephyr					\N		N/A	N/A	2000000000	125990535	0	\N	0	0	0.0847877	0.0000051	4.980022517	{}	{}	{}	160097	-3.24	9.28	107.05
PTC	t	f	Pesetacoin					\N	http://pesetacoin.info/	Scrypt	PoW	166386000	131959464	9.999999988537569	\N	2004400	16999850296008	0.0804505	0.00000484	4.7252762076	{}	{}	{}	274776	2.82	11.53	0.69
BELA	t	f	Bela					\N	http://belacoin.org/	Scrypt	PoW	54000000	39083075	25	\N	833166	105165979714	0.269608	0.00001621	15.8354798016	{}	{}	{}	515212	-1.4	19.68	57.39
APX	t	f	APX					\N		N/A	N/A	1000000	703179	0	\N	0	0	14.8557	0.00089311	872.55251064	{}	{}	{}	93890.5	-0.81	12.56	25.56
MTNC	t	f	Masternodecoin					\N				0	47023456	0	\N	0	0	0.2184	0.00001313	12.82776768	{}	{}	{}	6428.18	-14.79	-18.47	-25.94
EXCL	t	f	ExclusiveCoin					\N	http://exclusivecoin.pw/	PoS	PoS	4000000	4379322	0	\N	0	0	2.31915	0.00013942	136.21573908	{}	{}	{}	791416	3.97	3.16	42.97
QWARK	t	f	Qwark					\N		N/A	N/A	250377576	43625589	0	\N	0	0	0.231838	0.00001394	13.6170512976	{}	{}	{}	443515	1.28	8.1	24.94
TOA	t	f	ToaCoin					\N		Scrypt	PoW/PoS	0	1331155614	0	\N	0	0	0.00757047	0.00000046	0.4446530695	{}	{}	{}	68582.7	-0.57	3.83	-18.42
RIC	t	f	Riecoin					\N	http://riecoin.org/	Groestl	PoW	84000000	39965675	49.99999998882413	\N	800114	18681239359	0.251456	0.00001512	14.7693184512	{}	{}	{}	575375	1.97	22.19	24.53
CVCOIN	t	f	CVCoin					\N		N/A	N/A	15193882	9837033	0	\N	0	0	1.01946	0.00006129	59.878186992	{}	{}	{}	14998.7	-4.6	30.38	16.77
PIX	t	f	Lampix					\N		N/A	N/A	657154880	113322017	0	\N	0	0	0.088466	0.00000532	5.1960682032	{}	{}	{}	65944.6	0.06	-8.12	53.75
BLITZ	t	f	Blitzcash					\N	-	X13	PoS	3852156	4113027	0.144017525203526	\N	1849005	0	2.39292	0.00014386	140.548634784	{}	{}	{}	1947590	-0.82	32.54	96.53
SYNX	t	f	Syndicate					\N	http://syndicateltd.net/	X11	PoW/PoS	0	16726360	10	\N	1025328	0	0.581944	0.00003499	34.1805972288	{}	{}	{}	1771770	1.24	6.53	9.54
MYB	t	f	MyBit Token					\N		N/A	N/A	5000000	2799476	0	\N	0	0	3.44293	0.00020698	202.221182136	{}	{}	{}	18748.1	-0.21	12.09	91.38
MCAP	t	f	MCAP					\N		N/A	N/A	100000000	10490000	0	\N	0	0	0.91201	0.00005483	53.567089752	{}	{}	{}	882535	0.18	-0.9	-21
EBTC	t	f	eBitcoin					\N		N/A	N/A	21000000	18897126	0	\N	0	0	0.505885	0.00003041	29.713256652	{}	{}	{}	92757.2	5.03	-4.94	8.08
FRD	t	f	Farad					\N		N/A	N/A	1600000000	126362038	0	\N	0	0	0.0743013	0.00000447	4.3641017158	{}	{}	{}	23712.8	-9.09	-6.44	-22.31
BRK	t	f	Breakout					\N	http://breakoutenterprise.com/	SHA256	PoW/PoS	42000000	18142083	0	\N	0	0	0.513919	0.0000309	30.1851352488	{}	{}	{}	419760	-0.2	2.47	88.2
HGT	t	f	HelloGold					\N		N/A	N/A	1000000000	263034654	0	\N	0	0	0.0352349	0.00000212	2.0695288985	{}	{}	{}	76194.7	-0.82	7.77	9.89
DRP	t	f	DCORP					\N		N/A	N/A	8094002.47	8094002	0	\N	0	0	1.10902	0.00006667	65.138511504	{}	{}	{}	76142.1	-0.98	26.82	102.12
ZCL	t	f	ZClassic					\N		Equihash	PoW	21000000	1809800	0	\N	0	0	4.92444	0.00029605	289.237968288	{}	{}	{}	752835	0.06	6.75	-4.82
INXT	t	f	Internxt					\N		N/A	N/A	629610	629610	0	\N	0	0	14.1243	0.00084914	829.59358536	{}	{}	{}	236596	3.99	19.39	172.66
ARN	t	f	Aeron					\N		N/A	N/A	100000000	12000000	0	\N	0	0	0.735887	0.00004424	43.2224701224	{}	{}	{}	4735040	2.34	-4.54	152.09
2GIVE	t	f	2GIVE					\N	http://2give.info/	Scrypt	PoW/PoS	0	519256979	0.6232870221138	\N	72517	1112	0.0166324	0.000001	0.9769073405	{}	{}	{}	380353	0.95	25.02	58.97
DBIX	t	f	DubaiCoin					\N		Dagger-Hashimoto	PoW	0	1713779	0	\N	0	0	4.96821	0.00029868	291.808807992	{}	{}	{}	142472	-3.23	4.68	2.31
DOVU	t	f	Dovu					\N		N/A	N/A	1200000000	63761400	0	\N	0	0	0.133088	0.000008	7.8169502976	{}	{}	{}	18913.2	0.3	10.7	15.05
SWIFT	t	f	Bitswift					\N	http://www.bitswift.io/	Scrypt	PoW/PoS	0	4069197	0	\N	3112546	0	2.07206	0.00012457	121.702858512	{}	{}	{}	737680	-1.42	13.66	10.73
PDC	t	f	Project Decorum					\N	http://www.project-decorum.com	N/A	N/A	50000000	50000000	0	\N	0	0	0.163842	0.00000985	9.6232926384	{}	{}	{}	113179	-0.6	7.34	16.46
VSL	t	f	vSlice					\N		N/A	N/A	33390496.0333	33390496	0	\N	0	0	0.244252	0.00001468	14.3461900704	{}	{}	{}	9180.14	0.15	23.37	25.03
VOISE	t	f	Voise					\N		N/A	N/A	825578000	643012000	0	\N	0	0	0.012657	0.00000076	0.7434114264	{}	{}	{}	832783	-0.74	-4.76	39.98
YOC	t	f	Yocoin					\N	http://www.yocoin.org/	Scrypt	PoW	336000000	109023300	100	\N	5302	2675294523	0.0738373	0.00000444	4.336848583	{}	{}	{}	126980	-2.51	-4.59	210.17
MINT	t	f	Mintcoin					\N	http://www.mintcoinofficial.com/	Scrypt	PoS	0	24947260808	49	\N	1570091	14992528	0.000322523	0.00000002	0.0189434529	{}	{}	{}	32688.2	-0.4	8.34	7.94
BDL	t	f	Bitdeal					\N		Scrypt	PoW	300000000	175583793	0	\N	0	0	0.0455295	0.00000274	2.6741842884	{}	{}	{}	116116	-4.75	-11.14	-43.53
ERC	t	f	EuropeCoin					\N	-	X11	PoW/PoS	32000000	9970267	1.00000342912972	\N	147078	57654	0.796754	0.0000479	46.7975055408	{}	{}	{}	184576	3.48	3.98	29.46
TRUST	t	f	TrustPlus					\N	http://trustplus.co/	X11	PoW/PoS	0	32086595	1.2916621245645188	\N	3176183	0	0.247509	0.00001488	14.5374906168	{}	{}	{}	253020	3.13	5.04	23.83
DYN	t	f	Dynamic					\N		Argon2	PoW	44738100	1887926	0	\N	0	0	4.16208	0.00025022	244.460601216	{}	{}	{}	1034400	1.22	-2.96	-16.2
BLU	t	f	BlueCoin					\N	http://www.bluecoin.io/	X11	PoW/PoS	500000000	574683675	35	\N	131878	7515226825	0.0136074	0.00000082	0.7992333605	{}	{}	{}	6497.58	-4.34	8.01	8.8
PBT	t	f	Primalbase Token					\N		N/A	N/A	1250	1000	0	\N	0	0	7755.75	0.466267	455535.5274	{}	{}	{}	1355490	-0.16	2.09	-0.08
PLU	t	f	Pluton					\N		N/A	N/A	20000000	850000	0	\N	0	0	9.08791	0.00054635	533.780211432	{}	{}	{}	17194.8	0.43	47.17	-21.7
SNRG	t	f	Synergy					\N	http://www.synergycoin.com/	X11	PoW/PoS	0	3280783	10	\N	342263	0	2.33541	0.0001404	137.170773432	{}	{}	{}	89062.8	0.25	-1.34	11.63
BTDX	t	f	Bitcloud					\N		Quark	PoW/PoS	200000000	16439075	0	\N	0	0	0.456201	0.00002743	26.7950569752	{}	{}	{}	24195.8	-0.79	-7.81	-26.72
BON	t	f	Bonpay					\N	-	Scrypt	PoS	0	11290301	0	\N	0	0	0.661902	0.00003979	38.8769463504	{}	{}	{}	28492.5	0.06	-23.04	-15.2
BRX	t	f	Breakout Stake					\N		N/A	PoW/PoS	12500000	6268082	0	\N	0	0	1.19024	0.00007156	69.908984448	{}	{}	{}	142779	0.13	1	15.91
TFL	t	f	TrueFlip					\N		N/A	N/A	8924667.5762055	6247267	0	\N	0	0	1.192	0.00007166	70.0123584	{}	{}	{}	5885.01	0.24	40.26	33.18
ELIX	t	f	Elixir					\N		N/A	N/A	24147007.0087	26575020	0	\N	0	0	0.27812	0.00001672	16.335433824	{}	{}	{}	195118	1.46	3.79	16.86
ESP	t	f	Espers					\N		HMQ1725	PoW/PoS	50000000000	20834183384	0	\N	0	0	0.000334111	0.00000002	0.0196240764	{}	{}	{}	135850	0.28	116.35	186.94
UNIT	t	f	Universal Currency					\N	https://www.u-currency.com/	SHA256	PoW/PoS	210000000	12134791	0	\N	0	0	0.564305	0.00003393	33.144567036	{}	{}	{}	3256690	2.86	61.28	-39.59
ATMS	t	f	Atmos					\N		PoS	PoS	110290030	100332975	0	\N	0	0	0.0675074	0.00000406	3.9650606405	{}	{}	{}	22751.8	-0.04	18.26	46.24
DIVX	t	f	Divi					\N		N/A	N/A	6171607	5143007	0	\N	0	0	1.31601	0.00007912	77.296110552	{}	{}	{}	73774.9	0.24	8.16	58.06
HTML5	t	f	HTMLCOIN					\N		X15	PoW/PoS	90000000000	40659020000	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	40496.7	0.29	-0.73	1
CHIPS	t	f	CHIPS					\N				21000000	20097328	0	\N	0	0	0.332674	0.00002	19.5396739248	{}	{}	{}	37222.4	-14.43	12.88	83.64
CRB	t	f	Creditbit					\N	https://www.creditbit.org/	N/A	N/A	16504333	16508356	0	\N	0	0	0.404305	0.00002431	23.746935036	{}	{}	{}	407948	-1.48	1.42	12.73
FLIXX	t	f	Flixxo					\N		N/A	N/A	189151328.5746	71984123	0	\N	0	0	0.0924125	0.00000556	5.42786667	{}	{}	{}	148327	0.39	-3.9	46.94
ADST	t	f	AdShares					\N		N/A	N/A	12009726	13389904	0	\N	0	0	0.496261	0.00002983	29.1479890872	{}	{}	{}	8380.41	0.15	11.6	49.28
PAC	t	f	Paccoin					\N		SHA256D	PoW	100000000000000	3293594232470	0	\N	0	0	0.0000019974	0.0000000001	0.00011732	{}	{}	{}	29429.4	-0.19	23.33	130.36
PUT	t	f	PutinCoin					\N	https://putincoin.org	Scrypt	PoW/PoS	2000000000	316191398	321.432856440544	\N	38260	0	0.0207125	0.00000125	1.21655283	{}	{}	{}	13444.1	0.58	4.64	7.61
EGC	t	f	EverGreenCoin					\N	http://evergreencoin.org	X15	PoW/PoS	26298000	13321301	3.1432450434399977	\N	1014189	0	0.491423	0.00002954	28.8638281896	{}	{}	{}	184464	1.17	1.9	-10.03
START	t	f	Startcoin					\N	https://startcoin.org/	X11	PoW	45079785	45079785	10	\N	1453405	0	0.143092	0.0000086	8.4045372384	{}	{}	{}	672696	5	31.27	64.89
CANN	t	f	CannabisCoin					\N	http://cannabiscoin.net/	X11	PoW	106000000	77231176	70.00000001362392	\N	2604632	18915830202121	0.0826198	0.00000497	4.852690477	{}	{}	{}	764104	-5.07	11.6	19.03
NTRN	t	f	Neutron					\N	http://www.neutroncoin.com/	SHA256	PoW/PoS	68000000	32823820	0	\N	0	0	0.19304	0.00001161	11.338243008	{}	{}	{}	5134.92	0.44	2.3	11.39
CREA	t	f	Creativecoin					\N		Keccak	PoW	115000000	12976998	0	\N	0	0	0.480694	0.0000289	28.2336582288	{}	{}	{}	23320.7	-2.75	-39.77	30.72
GEO	t	f	GeoCoin					\N	http://geo.money/	Scrypt	N/A	1000000000	3348451	1	\N	1515242	491897879144	1.86279	0.00011199	109.411343208	{}	{}	{}	146842	1.25	3.38	40.18
PKB	t	f	ParkByte					\N	http://www.parkbyte.com/	SHA256	PoW/PoS	25000000	4764026	0	\N	0	0	1.26975	0.00007634	74.5790202	{}	{}	{}	914273	-0.29	12.25	21.75
SSS	t	f	Sharechain					\N				0	1633760178	0	\N	0	0	0.00370062	0.00000022	0.2173566558	{}	{}	{}	50875.5	3.83	5.68	-5.23
EFYT	t	f	Ergo					\N		N/A	N/A	5000000	397300	0	\N	0	0	14.9759	0.00090034	879.61248168	{}	{}	{}	4028.69	0.95	0.01	-23.7
GBX	t	f	GoByte					\N		NeoScrypt	PoW	31800000	298217	0	\N	0	0	19.7396	0.00118673	1159.40935392	{}	{}	{}	213427	-0.11	3.47	-13.17
PIRL	t	f	Pirl					\N		Dagger	PoW	0	6044556	0	\N	0	0	0.963306	0.00005791	56.5799705712	{}	{}	{}	60004.6	1.25	-0.65	9.88
CCT	t	f	Crystal Clear					\N				10000000	2993099	0	\N	0	0	1.94252	0.00011678	114.094300704	{}	{}	{}	1634920	-3.14	604.34	492.92
GMT	t	f	Mercury Protocol					\N		N/A	N/A	1000000000	168809625	0	\N	0	0	0.0343646	0.00000207	2.0184116539	{}	{}	{}	5949.91	0.31	6.07	16.98
BPL	t	f	Blockpool					\N		DPoS	N/A	0	22293890	0	\N	0	0	0.259929	0.00001563	15.2669818008	{}	{}	{}	15526.3	-1.02	-13.63	46.81
LIFE	t	f	LIFE					\N		N/A	N/A	100000000000	6555819578	0	\N	0	0	0.000881829	0.00000005	0.0517944027	{}	{}	{}	112628	10.89	17.61	1.96
TZC	t	f	TrezarCoin					\N		NeoScrypt	PoW/PoS	400000000	83306600	0	\N	0	0	0.0692182	0.00000416	4.0655448206	{}	{}	{}	18460.7	0.12	-4.71	4.67
ALQO	t	f	ALQO					\N		Quark	PoW/PoS	57879300	13780193	0	\N	0	0	0.416185	0.00002502	24.444709212	{}	{}	{}	195166	2.98	-0.66	210.39
VRM	t	f	VeriumReserve					\N	http://www.vericoin.info/	N/A	PoWT	0	1418315	3.8624652199912815	\N	159421	0	4.03219	0.00024241	236.831486088	{}	{}	{}	162836	0.87	8.78	22.02
ZRC	t	f	ZrCoin					\N		N/A	N/A	4988894	3807146	0	\N	0	0	1.49906	0.00009012	88.047588912	{}	{}	{}	31826.5	-2.27	-12.82	-20.65
KRB	t	f	Karbowanec					\N	http://karbowanec.com/	CryptoNight	PoW	10000000	4981392	0	\N	0	0	1.11611	0.0000671	65.554944072	{}	{}	{}	101931	2.21	10.49	-8.64
OCL	t	f	Oceanlab					\N		N/A	DPoS/LPoS	50000000	46500000	0	\N	0	0	0.119078	0.00000716	6.9940701456	{}	{}	{}	87676.7	-4.06	19.4	1.65
HUC	t	f	HunterCoin					\N	http://huntercoin.org/	Multiple	PoW	42000000	20537320	0	\N	0	0	0.266638	0.00001603	15.6610362576	{}	{}	{}	77986.6	0.72	12.26	32.24
IND	t	f	Indorse Token					\N		N/A	N/A	170622047	46508192	0	\N	0	0	0.117458	0.00000706	6.8989191216	{}	{}	{}	362644	0.29	5.65	24.37
FST	t	f	Fastcoin					\N	http://www.fastcoin.ca/	Scrypt	PoW	165888000	156913424	0	\N	0	0	0.0341203	0.00000205	2.0040626446	{}	{}	{}	59368	38.42	139.45	196.26
DAR	t	f	Darcrus					\N		N/A	N/A	14055048	13600388	0	\N	0	0	0.38217	0.00002298	22.446831384	{}	{}	{}	142835	2.83	0.89	16.21
CHC	t	f	ChainCoin					\N		N/A	N/A	23000000	14270093	0	\N	0	0	0.359898	0.00002164	21.1386810096	{}	{}	{}	44361.4	0.43	8.17	-11.92
XCN	t	f	Cryptonite					\N	http://cryptonite.info/	M7 POW	PoW	1840000000	377241710	0	\N	0	0	0.0135417	0.00000081	0.7953744578	{}	{}	{}	155093	0.58	21.5	124.72
INN	t	f	Innova					\N		NeoScrypt	PoW	42000000	1091633	0	\N	0	0	4.6258	0.0002781	271.69728816	{}	{}	{}	124248	-2.25	-1.7	-1.52
PING	t	f	CryptoPing					\N		N/A	N/A	10000000	9952089	0	\N	0	0	0.492131	0.00002959	28.9054127112	{}	{}	{}	52879.4	0.19	15.44	-30.09
AC	t	f	AsiaCoin					\N	http://www.thecoin.asia/	Scrypt	PoS	0	1196163391	726.6671388603393	\N	1940501	0	0.00404937	0.00000024	0.2378405568	{}	{}	{}	2331.24	-15.03	0.46	-35.98
SCL	t	f	Social					\N		N/A	N/A	16714019.6643	16714020	0	\N	0	0	0.286526	0.00001723	16.8291619152	{}	{}	{}	50854.7	6.9	-35.55	65.2
NYC	t	f	NewYorkCoin					\N		Scrypt	PoW	10000000000	129032781759	0	\N	0	0	0.0000371093	0.000000002	0.0021796222	{}	{}	{}	16546.9	1.85	-20.63	6.18
REAL	t	f	REAL					\N		N/A	N/A	19717289.2292	10055817	0	\N	0	0	0.470817	0.00002831	27.6535306584	{}	{}	{}	4400.75	0.31	2.84	8.99
UNB	t	f	UnbreakableCoin					\N	http://www.unbreakablecoin.com/	SHA256	PoW	80000000	2278150	0	\N	0	0	2.07206	0.00012457	121.702858512	{}	{}	{}	4153530	-2.81	23.78	237.54
KLN	t	f	Kolion					\N				0	600000	0	\N	0	0	7.80486	0.00046922	458.420013072	{}	{}	{}	1187830	0.37	6.53	2.51
VTR	t	f	vTorrent					\N	-	Scrypt	PoW/PoS	20000000	10815966	0	\N	0	0	0.426821	0.00002566	25.0694167992	{}	{}	{}	233773	0.88	-1.06	-4.33
TKS	t	f	Tokes					\N		N/A	N/A	50000000	1133007	0	\N	0	0	4.07046	0.00024471	239.079282192	{}	{}	{}	541691	0.94	19.61	33.97
TRC	t	f	Terracoin					\N	http://www.terracoin.info/	SHA256	PoW	42000000	21889658	0	\N	0	0	0.210487	0.00001265	12.3629960424	{}	{}	{}	18728.7	3.98	-4.68	-19.37
SMART	t	f	SmartCash					\N		Keccak	PoW	5000000000	6658088	0	\N	0	0	0.689055	0.00004143	40.471783236	{}	{}	{}	1173.8	0.31	3.71	12.61
OPT	t	f	Opus					\N		N/A	N/A	249308531	140080549	0	\N	0	0	0.0326083	0.00000196	1.9152550222	{}	{}	{}	4351.93	0.28	59.28	21.13
ZEIT	t	f	Zeitcoin					\N	www.zeit-coin.net	PoS	PoS	99000000000	36971162941	0.1864483642578125	\N	4217657	0	0.000119495	0.000000007	0.0070185627	{}	{}	{}	42679.4	-16.93	30.11	368.32
WDC	t	f	WorldCoin					\N	http://www.worldcoinalliance.net/	Scrypt	PoW	265420800	117593996	0	\N	0	0	0.0374099	0.00000225	2.1972779585	{}	{}	{}	29847.8	-0.03	25.51	62.33
PBL	t	f	Publica					\N		N/A	N/A	33787150	18582933	0	\N	0	0	0.236484	0.00001422	13.8899350368	{}	{}	{}	211933	-4.79	-15.78	27.01
QRK	t	f	Quark					\N	http://www.qrk.cc/	Multiple	PoW	247000000	253413973	1	\N	5040176	22424059764	0.0172853	0.00000104	1.0152555526	{}	{}	{}	7600.39	5.83	1.73	3.98
EFL	t	f	e-Gulden					\N	-	Scrypt	PoW	21000000	15984401	1.5625	\N	1010742	4747166813.8733	0.272522	0.00001638	16.0066341744	{}	{}	{}	196456	1.86	2.88	10.63
WISH	t	f	MyWish					\N				0	16842182	0	\N	0	0	0.257282	0.00001547	15.1115097264	{}	{}	{}	29022	0.31	-0.16	93.15
RUP	t	f	Rupee					\N		Scrypt	PoW	84000000	22562650	0	\N	0	0	0.190257	0.00001144	11.1747829464	{}	{}	{}	118694	-0.11	0.88	-11.33
DOT	t	f	Dotcoin					\N	https://www.cryptopia.co.nz	Scrypt	PoW	890000000	272506750	249.99999998013178	\N	1259953	0	0.0156227	0.00000094	0.917602409	{}	{}	{}	76565.5	0.41	-0.1	0.81
PND	t	f	Pandacoin					\N		Scrypt	PoS	32514916898	32514916898	0	\N	0	0	0.000130001	0.000000008	0.0076356347	{}	{}	{}	8541.82	19.27	17.11	20.72
NIO	t	f	Autonio					\N		N/A	N/A	220466789	65828135	0	\N	0	0	0.0639689	0.00000385	3.7572261353	{}	{}	{}	38325.4	2.86	-9.91	58.77
XLR	t	f	Solaris					\N		XEVAN	PoW/PoS	0	842844	0	\N	0	0	4.98578	0.00029974	292.840785456	{}	{}	{}	68948.3	8.44	34	155.22
VIVO	t	f	VIVO					\N		NeoScrypt	PoW	27000000	887386	0	\N	0	0	4.70182	0.00028267	276.162338064	{}	{}	{}	89086.9	-0.71	5.7	-1.97
HDG	t	f	Hedge					\N		N/A	N/A	5774676.11	3709674	0	\N	0	0	1.1106	0.00006677	65.23131312	{}	{}	{}	36151.3	0.32	30.32	45.36
SUMO	t	f	Sumokoin					\N		CryptoNight	PoW	88888888	2627024	0	\N	0	0	1.56565	0.00009413	91.95876588	{}	{}	{}	185993	0.43	10.96	103.95
XMG	t	f	Magi					\N	http://coinmagi.org/	M7M	PoW/PoM/PoSII	0	7702163	40.21785000478849	\N	1597898	1431	0.523715	0.00003149	30.760505268	{}	{}	{}	201752	0.15	3.81	17.76
SPR	t	f	SpreadCoin					\N	-	X11	PoW	20000000	9285630	3.7329725000696876	\N	1760245	4919402439	0.432722	0.00002601	25.4160132144	{}	{}	{}	348107	-4.49	3.14	-3.95
ONG	t	f	onG.social					\N		N/A	N/A	300000000	12599240	0	\N	0	0	0.318087	0.00001912	18.6829035624	{}	{}	{}	1921.34	0.31	58.49	40.18
QVT	t	f	Qvolta					\N		N/A	N/A	21600000	6731528	0	\N	0	0	0.588184	0.00003536	34.5471048768	{}	{}	{}	80081.7	2.93	8.7	117.91
NDC	t	f	NEVERDIE					\N		N/A	N/A	400000000	41004200	0	\N	0	0	0.0961472	0.00000578	5.6472250214	{}	{}	{}	7639.12	4.68	0	51.52
STA	t	f	Starta					\N		N/A	N/A	0	5230914	0	\N	0	0	0.748248	0.00004498	43.9484959296	{}	{}	{}	2787.75	6.01	-10.91	-0.83
JNS	t	f	Janus					\N		N/A	N/A	100000000	23020335	0	\N	0	0	0.164665	0.0000099	9.671631708	{}	{}	{}	1891.79	-0.71	123.74	35.71
DP	t	f	DigitalPrice					\N		X11	PoW	24629450	17632474	0	\N	0	0	0.0509676	0.00000306	2.9935921795	{}	{}	{}	24981.7	-4.31	-4.09	-4.03
ANC	t	f	Anoncoin					\N	https://anoncoin.net/	N/A	PoW	4200000	2110317	2.5	\N	422465	0	1.77997	0.00010701	104.546893944	{}	{}	{}	1019.66	0.15	-4.52	-35.79
CTX	t	f	CarTaxi Token					\N		N/A	N/A	487500000	60594811	0	\N	0	0	0.0618571	0.00000372	3.6331891399	{}	{}	{}	13194.5	1.53	-3.53	-9.91
CNT	t	f	Centurion					\N		X11	PoW/PoS	250000000	73877869	0	\N	0	0	0.0507145	0.00000305	2.9787263004	{}	{}	{}	12208.4	8.11	-8.13	-18.25
CV2	t	f	Colossuscoin V2					\N				0	22925410675	0	\N	0	0	0.000163042	0.00000001	0.0095763045	{}	{}	{}	661.754	-1.83	197.85	15.29
ABJ	t	f	Abjcoin					\N				0	8265187	0	\N	0	0	0.447025	0.00002687	26.25610278	{}	{}	{}	6177.46	48.81	-72.15	0
ADL	t	f	Adelphoi					\N		N/A	N/A	100000000	23472224	0	\N	0	0	0.156941	0.00000944	9.2179610232	{}	{}	{}	950.818	-0.35	28.65	90.14
LUX	t	f	LUXCoin					\N		PHI1612	PoW/PoS	60000000	657215	0	\N	0	0	5.55789	0.00033413	326.443780728	{}	{}	{}	246507	0.44	2.7	-11.3
REX	t	f	REX					\N		N/A	N/A	24041497.2407	8660756	0	\N	0	0	0.421619	0.00002535	24.7638762888	{}	{}	{}	2615.79	0.31	3.41	13.59
MEC	t	f	Megacoin					\N	https://www.megacoin.co.nz/	Scrypt	PoW	42000000	36465362	12.4999999999483	\N	922268	299355624381	0.0991517	0.00000596	5.8236949298	{}	{}	{}	30512.5	-3.63	8.61	80.58
CRAVE	t	f	Crave					\N	http://www.cravecoin.info/	Scrypt	PoW/PoS	0	1461924	1	\N	947556	0	2.44134	0.00014677	143.392593168	{}	{}	{}	30267.4	0.48	12.5	23.35
BASH	t	f	LuckChain					\N		Scrypt	PoW/PoS	1000000000	715868299	0	\N	0	0	0.00498471	0.0000003	0.2927779388	{}	{}	{}	7944.47	0.02	0.25	59.62
SPF	t	f	SportyFi					\N				0	25245040	0	\N	0	0	0.140601	0.00000845	8.2582278552	{}	{}	{}	539680	-7.33	10.33	-32.09
UFO	t	f	UFO Coin					\N	https://ufocoin.net	NeoScrypt	PoW	4000000000	3515281262	1249.9999999046327	\N	1180148	168304705	0.000998022	0.00000006	0.0586190218	{}	{}	{}	5461.13	0.15	9.91	22.42
NOTE	t	f	DNotes					\N	http://dnotescoin.com/	Scrypt	PoW	500000000	130070420	21.434375021606684	\N	2013401	46506905032	0.0267991	0.00000161	1.5740504983	{}	{}	{}	15218.5	2.06	21.5	41.01
SIFT	t	f	Smart Investment Fund Token					\N		N/A	N/A	722935	722935	0	\N	0	0	4.80736	0.00028901	282.361251072	{}	{}	{}	514.387	0.31	3.8	13.7
EQT	t	f	EquiTrader					\N		Scrypt	PoW	72000000	9917795	0	\N	0	0	0.34846	0.00002095	20.466867792	{}	{}	{}	71216.3	1.05	-8.56	105.18
IXC	t	f	Ixcoin					\N	https://www.ixcoin.co/	SHA256	PoW	21000000	20999088	0	\N	416720	23604358921240	0.158269	0.00000951	9.2959613688	{}	{}	{}	2076.58	0.16	23.47	-11.19
SUPER	t	f	SuperCoin					\N	https://bitcointalk.org/index.php?topic=618552.0	X11	PoW/PoS	150000000	47467010	0.16347030301888785	\N	4659907	0	0.0675072	0.00000406	3.9650488934	{}	{}	{}	27228	-17.67	63.6	-29.86
ONX	t	f	Onix					\N		X11	PoW	1100000000	27432814	0	\N	0	0	0.115771	0.00000696	6.7998328392	{}	{}	{}	39626.9	7.53	-14.31	-45.73
ATL	t	f	ATLANT					\N		N/A	N/A	54175041	13225026	0	\N	0	0	0.239684	0.00001441	14.0778876768	{}	{}	{}	22163.5	-0.7	-25.53	-12.46
FYP	t	f	FlypMe					\N		N/A	N/A	35277363	17638681	0	\N	0	0	0.178896	0.00001075	10.5074923392	{}	{}	{}	10667.6	9.91	54.51	13.78
CRYPT	t	f	CryptCoin					\N	-	X11	PoW	18000000	6068260	0.15839576428490026	\N	1075291	0	0.515645	0.000031	30.286512204	{}	{}	{}	678.681	0.15	52.49	11.86
WGO	t	f	WavesGo					\N		N/A	N/A	10000000	9628340	0	\N	0	0	0.321056	0.0000193	18.8572883712	{}	{}	{}	13119.9	1.34	22.39	30.15
HUSH	t	f	Hush					\N		Equihash	PoW	21000000	2242500	0	\N	0	0	1.37836	0.00008287	80.958250272	{}	{}	{}	183722	-3.19	-14.34	-17.73
GB	t	f	GoldBlocks					\N	http://goldblocks.eu/	X11	PoW/PoS	50000000	15289993	0	\N	0	0	0.200241	0.00001204	11.7611951832	{}	{}	{}	25275.9	0.64	6.92	-4.26
HYP	t	f	HyperStake					\N	http://hypercrypto.com/	X11	PoW/PoS	0	1084749329	0	\N	1222285	0	0.00281756	0.00000017	0.1654899501	{}	{}	{}	6799.24	0.3	-2.71	7.94
FCN	t	f	Fantomcoin					\N	-	CryptoNight	PoW	18400000	6190179	2.800025156129	\N	1894311	31085882.883333	0.482377	0.000029	28.3325095704	{}	{}	{}	1884.59	0.29	0	30.55
PRL	t	f	Oyster Pearl					\N		N/A	N/A	108592693	31823026	0	\N	0	0	0.0924937	0.00000556	5.4326359682	{}	{}	{}	1397840	6.71	99.46	115.89
BTCZ	t	f	BitcoinZ					\N		Equihash	PoW	21000000000	731375098	0	\N	0	0	0.00402088	0.00000024	0.236167191	{}	{}	{}	27256.6	-2.14	6.07	1.18
FYN	t	f	FundYourselfNow					\N		N/A	N/A	12500000	850000	0	\N	0	0	3.43514	0.00020652	201.763634928	{}	{}	{}	9621.48	0.31	-12.67	-2.31
ERC20	t	f	ERC20					\N				0	1574741156	0	\N	0	0	0.0018368	0.00000011	0.1078848154	{}	{}	{}	13330	0.31	14.88	-69.04
B@	t	f	BankCoin					\N		N/A	N/A	0	10291781	0	\N	0	0	0.276119	0.0000166	16.2179046888	{}	{}	{}	1075.93	0.13	0	-27.87
ADC	t	f	AudioCoin					\N	http://www.audiocoin.eu/	Scrypt	PoW/PoS	10500000000	837574940	0	\N	1589719	0	0.00336182	0.0000002	0.1974571701	{}	{}	{}	9052.22	0.97	0.82	-9.7
ZENI	t	f	Zennies					\N		Scrypt	PoS	1000000000	1000812836	0	\N	0	0	0.00266654	0.00000016	0.1566197602	{}	{}	{}	9188.65	-5.67	-1.77	-13.13
BRIT	t	f	BritCoin					\N		X13	PoW/PoS	30000000	21268092	0	\N	0	0	0.124548	0.00000749	7.3153516896	{}	{}	{}	24907	0.16	0.37	10.71
LINX	t	f	Linx					\N		Scrypt	PoW	100000000	13484850	0	\N	0	0	0.195846	0.00001177	11.5030539792	{}	{}	{}	56269.4	0.01	-14.07	47.44
EBST	t	f	eBoost					\N		Scrypt	PoW	99990000	12000000	0	\N	0	0	0.21707	0.00001305	12.749649864	{}	{}	{}	628924	2.08	8.26	-28
ECA	t	f	Electra					\N		NIST5	PoW/PoS	30000000000	22298706290	0	\N	0	0	0.0001165	0.000000007	0.0068426508	{}	{}	{}	232939	-18.15	0.87	598.34
SPRTS	t	f	Sprouts					\N	http://sproutcoin.github.io/	SHA256	PoW/PoS	0	1536920610013	0	\N	0	0	0.0000016415	0.0000000001	0.000096415	{}	{}	{}	18235.7	0.56	34.58	36.76
ELLA	t	f	Ellaism					\N		Ethash	PoW	280000000	3117825	0	\N	0	0	0.808692	0.00004862	47.4986863584	{}	{}	{}	52893.6	1.74	-0.14	60.66
BTCRED	t	f	Bitcoin Red					\N		N/A	N/A	21000000	18124926	0	\N	0	0	0.135904	0.00000817	7.9823486208	{}	{}	{}	109573	-1.89	-8.1	-43.65
CBX	t	f	Crypto Bullion					\N	http://cryptobullion.io/	Scrypt	PoW/PoS	1000000	1006288	0.041481000000203494	\N	2218209	0	2.43664	0.00014649	143.116537728	{}	{}	{}	8458.3	0.23	14.83	-21.49
42	t	f	42-coin					\N	https://42-coin.org/	Scrypt	PoW/PoS	42	42	0	\N	57431	0	56180.3	3.3775	3299761.15656	{}	{}	{}	9560.81	-3.41	0.51	21.22
PROC	t	f	ProCurrency					\N		SHA256	PoS	75000000000	96167974	0	\N	0	0	0.0245208	0.00000147	1.4402340922	{}	{}	{}	28343.5	2.16	14.04	-15.97
GCN	t	f	GCoin					\N		Scrypt	PoW	200000000000	148665635000	0	\N	0	0	0.0000156609	0.0000000009	0.0009198461	{}	{}	{}	3902.72	-14.64	-3.21	-8.83
FLIK	t	f	FLiK					\N		N/A	N/A	600000000	60123682	0	\N	0	0	0.0382673	0.0000023	2.247637519	{}	{}	{}	16369.2	-0.38	0.85	6.15
TRCT	t	f	Tracto					\N		N/A	N/A	70000000	5233100	0	\N	0	0	0.438141	0.00002634	25.7342992632	{}	{}	{}	10351	1.57	-9.5	2.08
1337	t	f	1337					\N	-	X13	PoW/PoS	314159265359	24021134916	7422.787523542132	\N	1206315	0	0.0000946324	0.000000006	0.0055582529	{}	{}	{}	25747.9	-13.13	-5.4	10.7
HBT	t	f	Hubii Network					\N		N/A	N/A	31	13097723	0	\N	0	0	0.173065	0.0000104	10.165007388	{}	{}	{}	4415.56	0.31	3.34	1.47
XFT	t	f	Footy Cash					\N				0	4558609	0	\N	0	0	0.497061	0.00002988	29.1949772472	{}	{}	{}	7365.01	8.33	-1.54	27.68
LGD	t	f	Legends Room					\N		N/A	N/A	30000000	2000000	0	\N	0	0	1.11927	0.00006729	65.740547304	{}	{}	{}	305915	1.96	5.37	12.1
ZOI	t	f	Zoin					\N		Lyra2RE	PoW	21000000	15832125	0	\N	0	0	0.140829	0.00000847	8.2716194808	{}	{}	{}	24879.6	2.16	-4.74	-9.45
VISIO	t	f	Visio					\N		X13	PoW/PoS	0	50870352	0	\N	0	0	0.0424159	0.00000255	2.4913063697	{}	{}	{}	703.383	0.15	-34.22	28.04
MAG	t	f	Magnet					\N		X11	PoW/PoS	144000000	6117492	0	\N	0	0	0.351803	0.00002115	20.6632195656	{}	{}	{}	52735.3	-2.38	-13.59	62.39
UNIFY	t	f	Unify					\N		Scrypt	PoW	19276800	17796903	0	\N	0	0	0.120899	0.00000727	7.1010269448	{}	{}	{}	23260.6	0.08	-11.13	135.16
BWK	t	f	Bulwark					\N		NIST5	PoW/PoS	27000000	539730	0	\N	0	0	3.9749	0.00023897	233.46654648	{}	{}	{}	288955	3.03	4.16	-15.97
AHT	t	f	Bowhead					\N		Ethash	PoW	100000000	8000000	0	\N	0	0	0.266434	0.00001602	15.6490542768	{}	{}	{}	798.599	0.55	76.81	-0.66
MBRS	t	f	Embers					\N		N/A	N/A	50000000	50000000	0	\N	0	0	0.0422496	0.00000254	2.4815387059	{}	{}	{}	17335.2	-4	-5.65	18.42
UIS	t	f	Unitus					\N	-	Multiple	PoW	0	46785866	0	\N	0	0	0.044722	0.00000269	2.6267556144	{}	{}	{}	20211.3	2.53	-8.05	40.23
RC	t	f	RussiaCoin					\N		Scrypt	PoW/PoS	144000000	8377873	0	\N	0	0	0.245575	0.00001476	14.42389674	{}	{}	{}	629.128	0.36	1.03	16.66
GRE	t	f	Greencoin					\N	http://www.grcoin.com/	Scrypt	PoW	10000000000	3635804641	4000	\N	505369	0	0.000565703	0.00000003	0.0332266788	{}	{}	{}	2942.52	0.15	74.7	136.65
BBP	t	f	BiblePay					\N				0	293938100	0	\N	0	0	0.00698615	0.00000042	0.4103329175	{}	{}	{}	8473.96	-0.03	-0.65	76.94
BTA	t	f	Bata					\N	http://www.bata.io/	Scrypt	PoW	10000000	4986620	0.125	\N	855392	1630447898	0.393921	0.00002368	23.1370287192	{}	{}	{}	10075.5	0.9	-6.69	13.24
ZET	t	f	Zetacoin					\N	http://zetacoin.com/	SHA256	PoW	0	167273705	0.999999999812564	\N	8001891	20761956855783	0.0117147	0.0000007	0.6880652474	{}	{}	{}	8567.71	0.87	12.05	35.6
XMCC	t	f	MonacoCoin					\N		X11	PoW/PoS	9507271	2730934	0	\N	0	0	0.71244	0.00004283	41.845305888	{}	{}	{}	15358.7	-0.49	-11.6	23.06
BUZZ	t	f	BuzzCoin					\N	-	SHA256D	PoW/PoS	20000000000	6975679269	0	\N	0	0	0.000278615	0.00000002	0.0163645077	{}	{}	{}	14405.1	14.12	0.14	-39.41
ITNS	t	f	IntenseCoin					\N		CryptoNight	PoW	999481516	271654424	0	\N	0	0	0.00711772	0.00000043	0.4180607077	{}	{}	{}	10807.9	0.93	14.7	6.96
ICOO	t	f	ICO OpenLedger					\N		N/A	N/A	472649	465952	0	\N	0	0	4.14954	0.00024947	243.724061808	{}	{}	{}	8941.93	-5.98	-47.36	-44.61
GIM	t	f	Gimli					\N		N/A	N/A	150000000	80000000	0	\N	0	0	0.0238765	0.00000144	1.4023910028	{}	{}	{}	1466.24	0.31	3.68	53.14
BYC	t	f	Bytecent					\N	http://bytecent.com/	N/A	PoW	33000000	1915762	1	\N	1773844	0	0.981388	0.000059	57.6420204576	{}	{}	{}	47380.7	0.53	5.27	4.86
LOG	t	f	Woodcoin					\N	-	N/A	PoW	27625814	8035193	0	\N	0	0	0.233038	0.00001401	13.6875335376	{}	{}	{}	1364.24	0.29	-0.78	-16
PRIX	t	f	Privatix					\N		N/A	N/A	1275455.31177803	1182668	0	\N	0	0	1.56068	0.00009383	91.666851936	{}	{}	{}	12264.7	3.47	-3.79	-11.06
DGPT	t	f	DigiPulse					\N		N/A	N/A	5420726	1402641	0	\N	0	0	1.2983	0.00007805	76.25591016	{}	{}	{}	1383.11	0.29	-14.49	-8.41
ATS	t	f	Authorship					\N		N/A	N/A	100000000	80000000	0	\N	0	0	0.0225405	0.00000136	1.3239207756	{}	{}	{}	37943.6	13.29	87.19	197.09
CDN	t	f	Canada eCoin					\N		Scrypt	PoW	100000000	97415544	0	\N	0	0	0.0183628	0.0000011	1.0785427306	{}	{}	{}	4726.48	-1.38	4.38	15.16
INPAY	t	f	InPay					\N		N/A	N/A	10000000	10000000	0	\N	0	0	0.178646	0.00001074	10.4928085392	{}	{}	{}	769.542	15.36	101.06	15.4
DFT	t	f	DraftCoin					\N		Scrypt	PoS	17405891.19707116	2231379	0	\N	0	0	0.792467	0.00004764	46.5457077384	{}	{}	{}	1937.35	-0.59	12.11	30.66
MRT	t	f	Miners' Reward Token					\N		N/A	N/A	10000000	10000000	0	\N	0	0	0.176809	0.00001063	10.3849119768	{}	{}	{}	27991.9	0.42	-2.14	9.1
ORB	t	f	Orbitcoin					\N	http://orbitcoin.org/	NeoScrypt	PoW/PoS	3770000	3102635	1	\N	2323627	0	0.561194	0.00003374	32.9618418288	{}	{}	{}	1413.12	-0.34	-1.93	-33.04
PIPL	t	f	PiplCoin					\N				7531907537	83444258	0	\N	0	0	0.0207916	0.00000125	1.2211987843	{}	{}	{}	710.717	0.16	-3.33	-36.87
INFX	t	f	Influxcoin					\N	http://chainworksindustries.com/	X11	PoW/PoS	12000000	1673383	2.5192438339814545	\N	444828	1457493212367.9	1.01245	0.00006087	59.46645324	{}	{}	{}	73768.6	-0.06	6.62	25.23
VSX	t	f	Vsync					\N		X13	PoW/PoS	125025560	98964274	0	\N	0	0	0.0170599	0.00000103	1.0020166385	{}	{}	{}	39118	-41.29	14.2	94.37
SMLY	t	f	SmileyCoin					\N	-	Scrypt	PoW	50000000000	25960250000	10000.000006357828	\N	283683	0	0.0000640673	0.000000004	0.0037630057	{}	{}	{}	4829.06	0.46	10.76	58.77
WTT	t	f	Giga Watt Token					\N		N/A	N/A	10800000	900000	0	\N	0	0	1.77012	0.00010642	103.968352224	{}	{}	{}	6674.8	0.31	11.39	-11.27
KEK	t	f	KekCoin					\N		POS 2.0	PoS	21000000	10457201	0	\N	0	0	0.151699	0.00000912	8.9100711048	{}	{}	{}	2657.98	1.04	1.27	23.59
CFT	t	f	CryptoForecast					\N		N/A	N/A	50000000	46000000	0	\N	0	0	0.0340916	0.00000205	2.0023769443	{}	{}	{}	1346.16	4.55	-0.49	225.83
NOBL	t	f	NobleCoin					\N	https://www.noblemovement.com/	Scrypt	PoW	15000000000	2317176250	114.93108602932521	\N	944516	0	0.000661355	0.00000004	0.0388448182	{}	{}	{}	2644.81	31.45	9.79	91.89
J	t	f	Joincoin					\N	-	Multiple	PoW	2800000	3034421	1	\N	944392	0	0.502953	0.00003024	29.5410450456	{}	{}	{}	6504.06	40.1	85.66	246.54
PURE	t	f	Pure					\N		X11	PoW/PoS	20000000	2888281	0	\N	0	0	0.518306	0.00003116	30.4428065712	{}	{}	{}	64350.2	-0.06	-36.81	20.64
RAIN	t	f	Condensate					\N		X11	PoW/PoS	500000000	91023137	0	\N	0	0	0.0161739	0.00000097	0.9499772513	{}	{}	{}	13079.2	-0.2	-4.38	4.42
ADZ	t	f	Adzcoin					\N	http://adzcoin.org/	X11	PoW	84000000	43426857	0	\N	0	0	0.0336141	0.00000202	1.9743308863	{}	{}	{}	2326.74	-0.92	3.73	-16.25
RKC	t	f	Royal Kingdom Coin					\N		N/A	N/A	15000000	2700000	0	\N	0	0	0.5398	0.00003245	31.70526096	{}	{}	{}	7072.75	-1.39	-13.45	-44.58
DNR	t	f	Denarius					\N		NIST5	PoW/PoS	10000000	2025157	0	\N	0	0	0.719563	0.00004326	42.2636767176	{}	{}	{}	19301.6	1.2	-6.97	18.8
DEM	t	f	Deutsche eMark					\N	-	SHA256	PoW/PoS	210000000	32707378	0	\N	0	0	0.0442646	0.00000266	2.5998901339	{}	{}	{}	11656.5	4.02	-3.53	14.29
WA	t	f	WA Space					\N				0	0	0	\N	0	0	0.0194614	0.00000117	1.1430692213	{}	{}	{}	456	-0.23	-0.65	-13.2
GRWI	t	f	Growers International					\N		DPoS	N/A	1000420	1165454	0	\N	0	0	1.21661	0.00007314	71.457831672	{}	{}	{}	3177.07	-0.13	-0.77	-38.15
NUKO	t	f	Nekonium					\N				0	5705063	0	\N	0	0	0.246179	0.0000148	14.4593728008	{}	{}	{}	20903.9	-3.13	6.33	135.05
RNS	t	f	Renos					\N		Scrypt	PoS	34426423	33356077	0	\N	0	0	0.0420999	0.00000253	2.4727460465	{}	{}	{}	1005.84	0.17	25.62	7.65
CRC	t	f	CrowdCoin					\N	-	Scrypt	PoW	100000000	234861	0	\N	0	0	5.88697	0.00035392	345.772360344	{}	{}	{}	166594	2.64	23.7	29.69
EPY	t	f	Emphy					\N	-	Scrypt	PoW	100000	7636898	0	\N	0	0	0.180276	0.00001084	10.5885469152	{}	{}	{}	1763.5	0.31	2.8	44.51
MZC	t	f	MazaCoin					\N	https://mazacoin.org/	SHA256	PoW/PoS	2419200000	1349573390	0	\N	0	0	0.000985061	0.00000006	0.0578577548	{}	{}	{}	3566.77	45.21	43.21	31.92
FJC	t	f	FujiCoin					\N	http://www.fujicoin.org/	Scrypt-n	N/A	10000000000	1229344580	976	\N	1814930	0	0.00106741	0.00000006	0.0626945398	{}	{}	{}	6718.35	1.89	6.39	9.22
LNK	t	f	Link Platform					\N		N/A	N/A	47503.2535	47503	0	\N	0	0	27.2331	0.00163723	1599.54157512	{}	{}	{}	6422.39	0.28	-22.65	-34.44
SKIN	t	f	SkinCoin					\N		N/A	N/A	488183483.290948	88183483	0	\N	0	0	0.0146095	0.00000088	0.8580919044	{}	{}	{}	30133.7	-1.05	5.52	-4.93
BTB	t	f	BitBar					\N	http://bitbar.co/	Scrypt	PoW/PoS	500000	35503	0.07959233333288769	\N	254378	10174479242	36.2712	0.00218059	2130.39618624	{}	{}	{}	4148.16	-0.18	8.57	-7.55
UNY	t	f	Unity Ingot					\N				0	202000000	0	\N	0	0	0.00632483	0.00000038	0.371490155	{}	{}	{}	5348.29	0.12	-8.16	-30.77
FC2	t	f	FuelCoin					\N	http://fuelcrypto.com/	X11	PoS	100000000	101643387	0	\N	0	0	0.0119763	0.00000072	0.7034303758	{}	{}	{}	6612.39	-0.03	71.63	81.3
XHI	t	f	HiCoin					\N	http://xhicoin.com/	Scrypt	PoS	10008835635	189729990	0.0000012715657552083333	\N	856895	0	0.00632583	0.00000038	0.3715488902	{}	{}	{}	141253	0.22	-1.57	-24
NET	t	f	Nimiq					\N	http://netcoinfoundation.org/	Scrypt	PoW	0	787126712	0	\N	1687460	0	0.0014931	0.00000009	0.0876975271	{}	{}	{}	2282.79	12.06	18.27	24.02
XIOS	t	f	Xios					\N		Scrypt	PoW/PoS	21000000	2149688	0	\N	0	0	0.542952	0.00003264	31.8903943104	{}	{}	{}	26756.9	5.2	-8.54	-3.46
INSN	t	f	InsaneCoin					\N		X11	PoW/PoS	30000000	18380150	0	\N	0	0	0.0626284	0.00000377	3.6784915997	{}	{}	{}	1219.45	8.14	15.89	13.08
CPC	t	f	Capricoin					\N	http://capricoin.com/	X11	PoW/PoS	208000000	1990045	0.09925966709852219	\N	1376485	0	0.577014	0.00003469	33.8910326928	{}	{}	{}	300923	-0.57	3.98	30.97
CARBON	t	f	Carboncoin					\N	www.carboncoin.cc	Scrypt	PoW	16000000000	15392010999	0.12925118666428786	\N	1021598	1925431	0.0000745877	0.000000004	0.0043809235	{}	{}	{}	1642.6	-0.3	-36.22	-30.5
CCRB	t	f	CryptoCarbon					\N		N/A	N/A	70000000	3562111	0	\N	0	0	0.319847	0.00001923	18.7862775144	{}	{}	{}	22044.4	0.33	-0.99	-19.32
LDOGE	t	f	LiteDoge					\N	http://www.litedoge.org/	Scrypt	PoW/PoS	35000000000	14907059016	526.3157891725239	\N	1306608	0	0.0000761159	0.000000005	0.0044706826	{}	{}	{}	8640.7	-0.53	-18.05	-35.5
ZER	t	f	Zero					\N		Equihash	PoW	78948000	1991680	0	\N	0	0	0.562611	0.00003382	33.0450696072	{}	{}	{}	2613.15	5.62	1.28	-12.98
SIGT	t	f	Signatum					\N		SkunkHash v2 Raptor	PoS	137500000	107972766	0	\N	0	0	0.0103123	0.00000062	0.605695003	{}	{}	{}	8301.96	-6.52	1.44	-0.88
MAC	t	f	Machinecoin					\N		Time Travel	PoW	35000000	20258700	0	\N	0	0	0.0544195	0.00000327	3.1963402164	{}	{}	{}	1020.84	2.1	26.02	13.95
BLOCKPAY	t	f	BlockPay					\N	http://blockpay.ch/	N/A	N/A	100000000	5428300	0	\N	0	0	0.201019	0.00001209	11.8068911688	{}	{}	{}	4368.33	-0.24	67.47	69.6
NETKO	t	f	Netko					\N		Blake	N/A	25534140	4442515	0	\N	0	0	0.241669	0.00001453	14.1944770488	{}	{}	{}	1457.05	0.29	-8.09	28.31
UTC	t	f	UltraCoin					\N	http://ultracoin.net/	Scrypt	PoW/PoS	100000000	44760148	10	\N	2268318	0	0.023984	0.00000144	1.4087050368	{}	{}	{}	704.172	0.18	6.55	-7.63
UNITS	t	f	GameUnits					\N		Scrypt	PoW/PoS	13000000	3472983	0	\N	0	0	0.297026	0.00001786	17.4458815152	{}	{}	{}	45079.3	-9.68	40.85	579.44
XJO	t	f	Joulecoin					\N	http://www.joulecoin.org/	SHA256	PoW	45000000	34563092	4.000000000372529	\N	3034163	95782346957843	0.0297288	0.00000179	1.7461270138	{}	{}	{}	1911.53	0.04	-5.94	62.51
BTSR	t	f	BTSR					\N				0	3284266	0	\N	0	0	0.312757	0.0000188	18.3698449464	{}	{}	{}	1782.91	-2.77	8.69	-0.07
CRM	t	f	Cream					\N		X11	PoW/PoS	100000000	44869468	0	\N	0	0	0.0228408	0.00000137	1.3415589562	{}	{}	{}	10303.8	-5.66	36.35	88.23
LINDA	t	f	Linda					\N		Scrypt	PoW/PoS	50000000000	6003429666	0	\N	0	0	0.000170345	0.00000001	0.0100052476	{}	{}	{}	76002.5	-25.16	-31.83	-8.73
TKR	t	f	CryptoInsight					\N		N/A	N/A	12529747	12529747	0	\N	0	0	0.0803566	0.00000483	4.7197609723	{}	{}	{}	7395.96	24.8	-11.4	26.16
GOOD	t	f	Goodomy					\N		Scrypt	PoW/PoS	100000000	441349000	0	\N	0	0	0.00226437	0.00000014	0.1329982248	{}	{}	{}	1431.03	21.79	43.62	126.06
RMC	t	f	Russian Miner Coin					\N				84000000	1979224	0	\N	0	0	0.501007	0.00003012	29.4267463464	{}	{}	{}	1478.11	0.15	-1.68	-27.32
XCPO	t	f	Copico					\N				0	15746668	0	\N	0	0	0.0628868	0.00000378	3.6936687754	{}	{}	{}	246520	5.58	21.18	160.95
DSH	t	f	Dashcoin					\N	https://dashcoin.info/	CryptoNight	PoW	18446744	17574970	2.262365562617	\N	901730	377292.60833333	0.0560434	0.00000337	3.2917203077	{}	{}	{}	5278.08	-5.49	-26.39	19.74
PXC	t	f	Phoenixcoin					\N	http://phoenixcoin.org/	Scrypt	PoW/PoS	98000000	62794937	25	\N	1591631	0	0.0156751	0.00000094	0.9206801335	{}	{}	{}	2669.16	3.42	-0.42	9.71
UFR	t	f	Upfiring					\N		N/A	N/A	0	14400000	0	\N	0	0	0.0681042	0.00000409	4.0001138078	{}	{}	{}	1281.16	0.31	15.61	40.24
HOLD	t	f	Interstellar Holdings					\N		Scrypt	PoS	2000000000	81950302	0	\N	0	0	0.011938	0.00000072	0.7011808176	{}	{}	{}	23974.6	-1.04	-11.37	-13.7
SMC	t	f	SmartCoin					\N	http://smartcoin.cc/	Scrypt	PoW	51200000	23661367	8.888888892200258	\N	952030	325007284858	0.0412067	0.00000248	2.4202837658	{}	{}	{}	1245.76	3.97	14.84	18.26
ELTCOIN	t	f	ELTCOIN					\N		N/A	N/A	100000000	90000000	0	\N	0	0	0.0107028	0.00000064	0.6286310986	{}	{}	{}	155278	5.47	-1.54	0.15
OTX	t	f	Octanox					\N		X11	PoW/PoS	7905634	8500001	0	\N	0	0	0.113109	0.0000068	6.6434797368	{}	{}	{}	552.239	10.27	0	71.7
MOIN	t	f	Moin					\N	http://coin.org/	N/A	PoW/PoS	184000000	7319576	1.4920648836220305	\N	939946	0	0.130184	0.00000783	7.6463832768	{}	{}	{}	6429.48	-2.96	0.54	-4.7
STRC	t	f	StarCredits					\N				20000000	4500000	0	\N	0	0	0.21025	0.00001264	12.3490758	{}	{}	{}	750.847	0.66	-10.38	-74.5
BRO	t	f	Bitradio					\N		PoS	PoS	0	5950243	0	\N	0	0	0.158873	0.00000955	9.3314374296	{}	{}	{}	2659.74	6.69	13.69	3.94
ICOB	t	f	ICOBID					\N		Scrypt	PoW/PoS	200000000	106701874	0	\N	0	0	0.00876519	0.00000053	0.5148251877	{}	{}	{}	180047	-0.96	-27.52	779.6
UNIC	t	f	UniCoin					\N				0	2970170	0	\N	0	0	0.311585	0.00001873	18.301007292	{}	{}	{}	1902.62	0.11	1.82	54.38
RLT	t	f	RouletteToken					\N				0	10217204	0	\N	0	0	0.0879665	0.00000529	5.1667299708	{}	{}	{}	2267.08	-2.37	-6.57	-27.99
COLX	t	f	ColossusCoinXT					\N	http://www.colossuscoin.org/	X11	PoS	13000000000	4027031669	0	\N	0	0	0.000214558	0.00000001	0.012602107	{}	{}	{}	44878.9	-31.47	-4.32	83.96
NKA	t	f	IncaKoin					\N	-	SHA256	PoW/PoS	0	11637226543	98	\N	2267963	0	0.0000742344	0.000000004	0.0043601723	{}	{}	{}	1005.2	-27.36	-34.14	-54.61
POS	t	f	PoSToken					\N		N/A	PoS	10000000	872679	0	\N	0	0	0.985482	0.00005925	57.8824823664	{}	{}	{}	92857.3	2.78	-0.11	-8.47
HERO	t	f	Sovereign Hero					\N				0	4773	0	\N	0	0	175.61	0.0105575	10314.488472	{}	{}	{}	101134	-6.63	6.58	-3.08
ALTCOM	t	f	AltCommunity Coin					\N		SkunkHash	PoW/PoS	163358.72760916	154136	0	\N	0	0	5.4094	0.00032521	317.72219088	{}	{}	{}	24144.1	0.15	34.59	15.4
AU	t	f	AurumCoin					\N				0	296216	0	\N	0	0	2.74059	0.00016476	160.969101768	{}	{}	{}	4226.29	-0.03	54.44	58.97
ZZC	t	f	ZoZoCoin					\N				27000000	536310	0	\N	0	0	1.50951	0.00009075	88.661371752	{}	{}	{}	13380.1	8.77	-7.15	-15.76
XGOX	t	f	XGOX					\N		Scrypt	PoW/PoS	1000000000	789269426	0	\N	0	0	0.00101895	0.00000006	0.059848232	{}	{}	{}	5893.37	0.23	-5.37	-17.07
SPACE	t	f	SpaceCoin					\N	-	Scrypt	PoW/PoS	0	21106297	1.3333333302289248	\N	1100427	0	0.0379231	0.00000228	2.2274208631	{}	{}	{}	36047.4	1.68	243.33	190.11
LCP	t	f	Litecoin Plus					\N				4000000	793910	0	\N	0	0	1.00698	0.00006054	59.145171696	{}	{}	{}	32674.7	-5.39	-10.15	-34.2
TES	t	f	TeslaCoin					\N	http://teslacoins.com/	Multiple	PoW/PoS	60800000	73549055	0.0492406226694584	\N	1414385	0	0.0108108	0.00000065	0.6349745002	{}	{}	{}	7155.35	0.13	-6.53	1.44
BTWTY	t	f	Bit20					\N				0	1	0	\N	0	0	768134	46.1794	45116504.1168	{}	{}	{}	7746.65	-5.42	64.46	67.07
PCOIN	t	f	Pioneer Coin					\N				0	1273451	0	\N	0	0	0.605633	0.00003641	35.5719753816	{}	{}	{}	23130.8	7.7	5.22	-5.48
EBCH	t	f	eBitcoinCash					\N		N/A	N/A	21000000	9285500	0	\N	0	0	0.0826262	0.00000497	4.8530663822	{}	{}	{}	7763.54	-1.28	114.44	221.32
TIT	t	f	Titcoin					\N	http://www.titcoins.biz/	SHA256	PoW	69000000	49898202	0	\N	0	0	0.0152371	0.00000092	0.8949541159	{}	{}	{}	1855.79	-0.99	23.4	31.54
TAG	t	f	TagCoin					\N	http://www.tagcoin.org/	Scrypt	PoW/PoS	1000000	5992132	0	\N	0	0	0.125589	0.00000755	7.3764950328	{}	{}	{}	2958.54	15.79	-13.16	23.49
FLT	t	f	FlutterCoin					\N	http://fluttercoin.us/	Scrypt	PoS/PoW/PoT	0	322214524	1	\N	1338068	0	0.0023289	0.00000014	0.1367884073	{}	{}	{}	2504.2	11.39	6.88	-0.3
BBT	t	f	BitBoost					\N		N/A	N/A	100000000	4862878	0	\N	0	0	0.152233	0.00000915	8.9414357016	{}	{}	{}	1371.7	0.31	4.9	20.69
RED	t	f	RedCoin					\N		Scrypt	PoW	329000000	74107896	0	\N	0	0	0.00994377	0.0000006	0.5840493197	{}	{}	{}	48517.3	10.91	91.5	213.11
BITBTC	t	f	bitBTC					\N				0	43	0	\N	0	0	16883.2	1.015	991638.12864	{}	{}	{}	41463.5	-5.86	-14.66	-7.85
HPC	t	f	Happycoin					\N		X11	PoW/PoS	100000000	13147833	0	\N	0	0	0.0538299	0.00000324	3.1617099425	{}	{}	{}	5017.75	2.19	-13.49	43.9
EL	t	f	Elcoin					\N				0	11208967	0	\N	0	0	0.0627521	0.00000377	3.6857571439	{}	{}	{}	5670.08	3.89	39.94	103.91
BTCR	t	f	Bitcurrency					\N	-	Scrypt	PoS	0	169598616	0	\N	0	0	0.00409336	0.00000025	0.2404243183	{}	{}	{}	923.032	38.9	6.29	-4.28
NTO	t	f	Fujinto					\N		N/A	N/A	400000000	65802448	0	\N	0	0	0.0103137	0.00000062	0.6057772322	{}	{}	{}	449078	0.16	-14.46	3.02
BCF	t	f	Bitcoin Fast					\N		Scrypt	PoW/PoS	33000000	4981700	0	\N	0	0	0.135449	0.00000814	7.9556241048	{}	{}	{}	10900.8	1.75	16.47	25.54
ATOM	t	f	Atomic Coin					\N	https://www.atomicproject.org/	Scrypt	PoW/PoS	252000000	13433164	7.289450753324975	\N	679921	0	0.0497031	0.00000299	2.9193215191	{}	{}	{}	12825.9	0.08	-6.33	4.93
MAX	t	f	MaxCoin					\N	http://www.maxcoin.co.uk/	SHA3	PoW/PoS	100000000	61283597	0	\N	0	0	0.0106456	0.00000064	0.6252714451	{}	{}	{}	2260.7	4.34	-20.17	-8.41
NYAN	t	f	Nyancoin					\N	http://nyan-coin.org/	Scrypt	PoW	337000000	318929301	0	\N	0	0	0.00201613	0.00000012	0.1184177988	{}	{}	{}	1292.01	0.72	9.48	30.38
MNE	t	f	Minereum					\N		N/A	N/A	136576000	1709985	0	\N	0	0	0.374402	0.00002251	21.9905763504	{}	{}	{}	5750.1	-0.61	1.31	-19.21
XPD	t	f	PetroDollar					\N	-	SHA256D	N/A	122107462	63993275	0	\N	0	0	0.00989592	0.00000059	0.5812388404	{}	{}	{}	7001.71	-1.31	4.53	-4.49
DGC	t	f	Digitalcoin					\N	http://digitalcoin.co/	Scrypt	PoW	48166000	27547433	4.999999998853757	\N	2961157	2797800572	0.0229727	0.00000138	1.349306129	{}	{}	{}	6611.95	-0.37	5.75	28.99
PFR	t	f	Payfair					\N		N/A	N/A	33000000	86000000	0	\N	0	0	0.00729276	0.00000044	0.4283417172	{}	{}	{}	9661.99	0.31	-38.78	-31.34
BUN	t	f	BunnyCoin					\N				0	102346793489	0	\N	0	0	0.0000060789	0.0000000004	0.000357046	{}	{}	{}	2316.84	-0.18	32.85	54.57
HAT	t	f	Hawala.Today					\N				0	337793	0	\N	0	0	1.80116	0.00010828	105.791492832	{}	{}	{}	16117.5	0.31	26.27	280.89
NEWB	t	f	Newbium					\N		N/A	N/A	49000000	50000000	0	\N	0	0	0.0116297	0.0000007	0.6830727554	{}	{}	{}	1027.81	0.25	1.98	8.79
LOT	t	f	LottoCoin					\N				0	14491014421	0	\N	0	0	0.0000394622	0.000000002	0.0023178202	{}	{}	{}	1491.83	-4.78	-15.57	6.29
CCN	t	f	CannaCoin					\N	http://cannacoin.cc/index.php	Scrypt	PoW	13140000	4700135	0.00868463609367609	\N	661463	0	0.121238	0.00000729	7.1209381776	{}	{}	{}	924.374	-0.02	-2.08	25.2
TRUMP	t	f	TrumpCoin					\N	http://trumpcoin.rocks/	Blake	PoS	12000000	6549538	0.26786300959065557	\N	618654	0	0.0851398	0.00000512	5.000703181	{}	{}	{}	2777.84	0.03	-9.81	7.43
EMB	t	f	EmberCoin					\N		X13	PoW/PoS	850000000	92192822723	0	\N	0	0	0.0000057568	0.0000000003	0.0003381274	{}	{}	{}	32848	-2.23	-39.2	21.44
PAK	t	f	Pakcoin					\N	http://www.pakcoin.info/	Scrypt	PoW	182000000	45244450	50	\N	540798	4167936966	0.0116638	0.0000007	0.6850756258	{}	{}	{}	8556.1	-4.78	-10.21	5.9
CAT	t	f	BlockCAT					\N	http://www.catcoins.org/	Scrypt	PoW	21000000	6235900	0	\N	0	0	0.0831685	0.000005	4.8849184812	{}	{}	{}	14909.6	6.57	-32.2	76.89
PIGGY	t	f	Piggycoin					\N	https://www.piggy-coin.com/	X11	PoW/PoS	0	487592040	6.405163502693176	\N	1726156	0	0.00105022	0.00000006	0.0616848817	{}	{}	{}	581.696	-0.13	4.71	53.12
GRIM	t	f	Grimcoin					\N				0	24457016	0	\N	0	0	0.0207732	0.00000125	1.2201180566	{}	{}	{}	121600	4.89	-7.98	1549.34
BUCKS	t	f	SwagBucks					\N		Scrypt	PoW/PoS	0	329100	0	\N	0	0	1.51856	0.00009129	89.192925312	{}	{}	{}	522.924	0.13	-1.43	0.52
ZUR	t	f	Zurcoin					\N	http://shai102.wixsite.com/zurcoin	Quark	PoW	126000000	87627246.0003	21	\N	2672782	6204490637	0.00681982	0.00000041	0.4005634917	{}	{}	{}	3256.84	2.77	19.49	-7.8
FNC	t	f	FinCoin					\N				0	12878667	0	\N	0	0	0.0380667	0.00000229	2.2358552378	{}	{}	{}	1056.64	-3.56	-11.5	77
GUN	t	f	Guncoin					\N				0	197864878	0	\N	0	0	0.002462	0.00000015	0.1446060624	{}	{}	{}	1309.39	-4.9	11.04	25.87
DDF	t	f	DigitalDevelopersFund					\N		N/A	N/A	6428932	5118307	0	\N	0	0	0.0917422	0.00000552	5.3884964654	{}	{}	{}	941.58	1.16	9.22	10.57
CCO	t	f	Ccore					\N				0	1200000	0	\N	0	0	0.389309	0.0000234	22.8661419768	{}	{}	{}	1896.11	9.09	-27.33	-62.84
PASL	t	f	Pascal Lite					\N		SHA256	PoW/PoS	0	4449500	0	\N	0	0	0.104293	0.00000627	6.1256702136	{}	{}	{}	1178.06	0.29	6.16	60.32
CHESS	t	f	ChessCoin					\N	http://chesscoinpro.com/	Scrypt	PoW/PoS	74666667	54032769	0.3564390515287717	\N	890823	0	0.00852768	0.00000051	0.5008749903	{}	{}	{}	788.736	-0.3	2.32	4.47
HODL	t	f	HOdlcoin					\N	http://www.hodlcoin.com/	1GB AES Pattern Search	PoW	81962100	161057170	50	\N	229076	0	0.00282773	0.00000017	0.1660872871	{}	{}	{}	2001.46	89.18	-6.25	10.78
Q2C	t	f	QubitCoin					\N				0	248244515	0	\N	0	0	0.00182971	0.00000011	0.1074683828	{}	{}	{}	684.177	-8.19	-9	9.11
STV	t	f	Sativacoin					\N	https://bitcointalk.org/index.php?topic=791266.0	X13	PoW/PoS	10000000	7087250	0	\N	0	0	0.0640642	0.00000385	3.7628235998	{}	{}	{}	2039.9	0.29	-0.43	13.9
ECASH	t	f	Ethereum Cash					\N		N/A	N/A	15000000	14100000	0	\N	0	0	0.0321168	0.00000193	1.8863866714	{}	{}	{}	13321.1	0.86	14.74	38.49
BIGUP	t	f	BigUp					\N	http://bigup.club/	N/A	PoS	4000000000	2121627013	0	\N	0	0	0.000211171	0.00000001	0.0124031709	{}	{}	{}	4994.78	0.68	-33.75	27.85
ETG	t	f	Ethereum Gold					\N		N/A	N/A	24000000	12000000	0	\N	0	0	0.037308	0.00000224	2.1912928416	{}	{}	{}	15620.2	-13.77	-14.87	-1.82
KUSH	t	f	KushCoin					\N		X11	PoW/PoS	9354000	5455437	0	\N	0	0	0.0805148	0.00000484	4.729052881	{}	{}	{}	626.608	2.26	-8.23	13.31
ITI	t	f	iTicoin					\N				0	32000	0	\N	0	0	13.6007	0.00081766	798.83983464	{}	{}	{}	894.062	0.34	5.32	-22.33
CRX	t	f	Chronos					\N	http://chronos-coin.com/	Scrypt	PoW/PoS	0	73729962	0	\N	0	0	0.00584329	0.00000035	0.3432068068	{}	{}	{}	8827.86	3.15	-24.07	403.58
IFLT	t	f	InflationCoin					\N		X11	PoW/PoS	0	34534573857	0	\N	0	0	0.0000124244	0.0000000007	0.0007297496	{}	{}	{}	1838.83	0.26	-29.55	-41.96
WHL	t	f	WhaleCoin					\N		Ethash	PoW	0	4682092	0	\N	0	0	0.09081	0.00000546	5.333743512	{}	{}	{}	139013	-2.63	0.26	-20.51
POST	t	f	PostCoin					\N	-	N/A	PoS	15081003	15868233	0	\N	0	0	0.0267417	0.00000161	1.5706790978	{}	{}	{}	886.087	-2.3	31.21	42.16
BOLI	t	f	Bolivarcoin					\N	http://bolicoin.com/	X11	PoW	25000000	8550600	25	\N	342024	4321917862093	0.0487552	0.00000293	2.863646423	{}	{}	{}	1704.8	1.03	1.51	-7.92
E4ROW	t	f	E4ROW					\N				0	5762000	0	\N	0	0	0.0721104	0.00000434	4.2354187661	{}	{}	{}	2591.97	0.31	-0.23	31.53
TTC	t	f	TittieCoin					\N	http://tittiecoin.com/	Scrypt	PoW	1000000	1259816434	0	\N	0	0	0.000329189	0.00000002	0.0193349818	{}	{}	{}	3084.76	-0.62	71.43	-15.94
XLC	t	f	LeviarCoin					\N		CryptoNight	PoW	54000000	10018386	0	\N	0	0	0.0413569	0.00000249	2.4291057929	{}	{}	{}	5980.76	-1.1	32.49	-38.68
XPTX	t	f	PlatinumBAR					\N		Quark	PoW/PoS	0	445983	0	\N	0	0	0.911099	0.00005477	53.5135819848	{}	{}	{}	712.857	-8.73	-29.37	22.6
BLAS	t	f	BlakeStar					\N		Blake2S	PoW/PoS	2400000000	247062346	0	\N	0	0	0.00161753	0.0000001	0.0950059481	{}	{}	{}	7706.18	15.64	29.76	86.07
ROC	t	f	Rasputin Online Coin					\N				5000000	1083633	0	\N	0	0	0.368564	0.00002216	21.6476802528	{}	{}	{}	2443.74	0.31	-30.71	-26
BTG	t	t	Bitcoin Gold					\N		Equihash	PoW	21000000	59588	0	\N	0	0	6.67536	0.00040132	392.078604672	{}	{}	{}	23375.6	3.96	54.37	31.64
CNNC	t	f	Cannation					\N				0	2476893	0	\N	0	0	0.156079	0.00000938	9.1673312808	{}	{}	{}	748.389	2.3	2.4	7.36
XPY	t	f	PayCoin					\N	https://paycoin.com/	SHA256	PoS	12500000	11831353	0.2609847904338191	\N	1391265	0	0.0326021	0.00000196	1.9148908639	{}	{}	{}	1286.85	0.15	21.53	76.57
ECO	t	f	EcoCoin					\N		Scrypt	PoW/PoS	10733333	1151323	0	\N	0	0	0.331343	0.00001992	19.4614973736	{}	{}	{}	29404.4	4.37	33.11	110.3
TRI	t	f	Triangles					\N	https://info.triangles.technology/	X13	PoW/PoS	120000	72891	0	\N	0	0	5.21014	0.00031323	306.018614928	{}	{}	{}	920.57	0.21	-20.67	25.71
MNM	t	f	Mineum					\N	https://mineum.org/	X13	PoW/PoS	10000000	9436367	0	\N	0	0	0.0399439	0.0000024	2.3461129553	{}	{}	{}	562.75	0.24	95.3	81.08
HXX	t	f	Hexx					\N		Lyra2RE	PoW	9999999	1492833	0	\N	0	0	0.24794	0.00001491	14.562805488	{}	{}	{}	520.38	1.29	88.76	151.5
TYCHO	t	f	Tychocoin					\N				0	5024368	0	\N	0	0	0.0733546	0.00000441	4.3084971019	{}	{}	{}	6712.28	-8.44	-9.59	-28.31
DSR	t	f	Desire					\N				0	1012637	0	\N	0	0	0.357183	0.00002147	20.9792149416	{}	{}	{}	63567.2	2.58	-2.76	-13.68
BITSILVER	t	f	bitSilver					\N				0	18758	0	\N	0	0	19.0449	0.00114496	1118.60601048	{}	{}	{}	35299.5	-27.61	0.5	-9.53
4CHN	t	f	ChanCoin					\N		Scrypt	PoW	30000000	6900632	0	\N	0	0	0.0504757	0.00000303	2.9647003346	{}	{}	{}	1043.5	0.15	0.11	4.36
POP	t	f	PopularCoin					\N				4999999999	3372875244	0	\N	0	0	0.000101323	0.000000006	0.0059512267	{}	{}	{}	5558.97	0.02	-56.05	88.28
BLN	t	f	Bolenum					\N				0	10000000	0	\N	0	0	0.0337721	0.00000203	1.9836110479	{}	{}	{}	25074	-3.18	93.73	-20.61
EVO	t	f	Evotion					\N				0	3176848	0	\N	0	0	0.102788	0.00000618	6.0372737376	{}	{}	{}	592.455	2.55	3.4	-2.5
TRK	t	f	Truckcoin					\N	http://truckcoin.net/	X11	PoW/PoS	1000000	159468721	200	\N	1221448	3608205774	0.00204519	0.00000012	0.1201246437	{}	{}	{}	1021.83	-4.47	-4.55	-0.97
808	t	f	808Coin					\N	-	SHA256	PoW/PoS	0	3978187849	73039.96800003052	\N	380545	0	0.000081804	0.000000005	0.0048047743	{}	{}	{}	8392.69	-1.2	33.65	-15.81
IETH	t	f	iEthereum					\N				0	17982000	0	\N	0	0	0.0180189	0.00000108	1.0583436953	{}	{}	{}	3868.73	0.18	-24.52	-11.34
PHO	t	f	Photon					\N				0	20721389306	0	\N	0	0	0.0000154559	0.0000000009	0.0009078054	{}	{}	{}	2150.06	-0.45	-32.82	-8.19
CFD	t	f	Confido					\N		N/A	N/A	15000000	9000000	0	\N	0	0	0.0351088	0.00000211	2.0621223898	{}	{}	{}	4672.25	0.24	5.78	-6.63
ZCG	t	f	ZCash Gold					\N		N/A	N/A	5000000	2007615	0	\N	0	0	0.156268	0.00000939	9.1784322336	{}	{}	{}	12572.6	-2.1	14.95	15
XBL	t	f	Billionaire Token					\N		N/A	N/A	3315372	3268329	0	\N	0	0	0.0951746	0.00000572	5.5900991659	{}	{}	{}	8862.16	0.18	-3.41	10.29
SGR	t	f	Sugar Exchange					\N				0	3500000	0	\N	0	0	0.0887578	0.00000534	5.2132071346	{}	{}	{}	2500.67	0.29	95.95	160.24
DALC	t	f	Dalecoin					\N				1000000	409217	0	\N	0	0	0.744581	0.00004476	43.7331139512	{}	{}	{}	826.237	0.06	-20.23	-23.91
GLC	t	f	GlobalCoin					\N	http://www.gcrmarketing.com/	Scrypt	PoW	70000000	65171010	0.09765625020696057	\N	3122316	5583019	0.00465744	0.00000028	0.2735556699	{}	{}	{}	1109.66	0.15	-30.55	-19.2
ETHD	t	f	Ethereum Dark					\N		Scrypt	PoW/PoS	4200000	1500000	0	\N	0	0	0.199521	0.00001199	11.7189058392	{}	{}	{}	72022.4	1.62	-9.93	-8.69
ENT	t	f	Eternity					\N		X11	PoW/PoS	60000000	4107567	0	\N	0	0	0.0725463	0.00000436	4.2610214398	{}	{}	{}	1138.53	-17.79	-25.96	11.91
SDRN	t	f	Senderon					\N				0	38492900	0	\N	0	0	0.0076402	0.00000046	0.448748675	{}	{}	{}	1789.85	-8.19	-14.06	-13.44
EAGLE	t	f	EagleCoin					\N				0	2093421	0	\N	0	0	0.136372	0.0000082	8.0098366944	{}	{}	{}	6739.21	0.17	-18.69	48.27
GPL	t	f	Gold Pressed Latinum					\N	-	N/A	PoW/PoS	1000000	256527	0	\N	0	0	1.10312	0.00006632	64.791973824	{}	{}	{}	12691	-7	-33.65	139.54
EVIL	t	f	Evil Coin					\N	http://evilcoin.xyz/	X11	PoW/PoS	21024000	21020383	0	\N	0	0	0.0134425	0.00000081	0.789547926	{}	{}	{}	549.474	0.18	3.27	16.29
SAGA	t	f	SagaCoin					\N				0	221789	0	\N	0	0	1.24971	0.00007513	73.401966792	{}	{}	{}	82152	-18.14	-18.83	-25.53
XRA	t	f	Ratecoin					\N	http://ratecoin.info/	X11	PoW/PoS	75000000	115765492	0	\N	0	0	0.00233606	0.00000014	0.1372089513	{}	{}	{}	6575.95	7.81	-13.4	-0.45
ICE	t	f	iDice					\N		N/A	N/A	2071013	1571013	0	\N	0	0	0.170859	0.00001027	10.0354375368	{}	{}	{}	676.064	1.47	48.6	8.68
QTL	t	f	Quatloo					\N	http://quatloos.org/	Scrypt	PoW	100000000	7718883	4.252500000409782	\N	525344	0	0.0343545	0.00000207	2.0178184284	{}	{}	{}	1831.21	0.1	29.26	4.73
CMPCO	t	f	CampusCoin					\N		Scrypt	PoW	1010000000	312238546	0	\N	0	0	0.000844106	0.00000005	0.0495787347	{}	{}	{}	11397.8	-19.04	-8.45	10.87
XVP	t	f	Virtacoinplus					\N		X11	PoW/PoS	100000000	10928643	0	\N	0	0	0.0228214	0.00000137	1.3404194933	{}	{}	{}	2127.11	0.29	-1.86	8.93
BLC	t	f	Blakecoin					\N	https://blakecoin.org/	Blake	PoW	7000000000	15122697	0	\N	0	0	0.015778	0.00000095	0.9267239856	{}	{}	{}	643.563	-2.25	-0.53	-14.09
MEOW	t	f	Kittehcoin					\N		Scrypt	PoW	25000000000	23905669976	0	\N	0	0	0.0000099114	0.0000000006	0.0005821504	{}	{}	{}	5972.85	-6.59	-23.28	-19.67
SRC	t	f	SecureCoin					\N	http://securecoin.org/	Scrypt	PoW	21000000	8280891	0	\N	0	0	0.0283717	0.00000171	1.6664174738	{}	{}	{}	1433.1	10.82	-2.92	51.92
CJ	t	f	Cryptojacks					\N	http://cryptojacks.com/	X13	PoW/PoS	500000000	406568581	0	\N	0	0	0.000551853	0.00000003	0.0324131963	{}	{}	{}	4848.3	-1.15	-10.4	24.68
XRE	t	f	RevolverCoin					\N	http://www.revolvercoin.org/	X11Evo	PoW	0	22364122	2.0000000007982766	\N	813621	76193843.75396942	0.0100168	0.0000006	0.5883387514	{}	{}	{}	538.856	-9.03	21.94	0.02
RBX	t	f	Ripto Bux					\N		N/A	N/A	0	381236123	0	\N	0	0	0.000580774	0.00000003	0.034111877	{}	{}	{}	653.118	0.67	32.6	28.19
COAL	t	f	BitCoal					\N		CryptoNight	PoW	12500000	4500000	0	\N	0	0	0.0462595	0.00000278	2.7170609844	{}	{}	{}	3460.67	0.17	9.4	27.63
MOJO	t	f	MojoCoin					\N	-	PoS	PoS	0	12141546	0	\N	231667	0	0.0169911	0.00000102	0.9979756567	{}	{}	{}	587.973	4.06	-28.02	-6.8
QCN	t	f	QuazarCoin					\N	http://www.quazarcoin.org/	CryptoNight	PoW	0	6044911	5.667441574688	\N	924592	132924.33333333	0.0332674	0.000002	1.9539673925	{}	{}	{}	607.838	-12.4	0	74.04
GPU	t	f	GPU Coin					\N	http://www.usedgpus.com/	Scrypt	PoS	221052632	40477042	0	\N	0	0	0.00486128	0.00000029	0.2855282531	{}	{}	{}	898.574	0.13	28.61	4.09
USDE	t	f	USDe					\N	http://www.usd-e.com/	Scrypt	PoW/PoS	1600000000	1134236104	15.625	\N	1145940	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	2383.71	0.15	-50.39	1
EOT	t	f	EOT Token					\N				200000000	15653903	0	\N	0	0	0.0120242	0.00000072	0.7062437918	{}	{}	{}	3059.58	-0.52	-8.36	28.8
URC	t	f	Unrealcoin					\N				0	7024402	0	\N	0	0	0.0267803	0.00000161	1.5729462766	{}	{}	{}	3119.98	0.29	-39.46	-13.05
KAYI	t	f	Kayicoin					\N		N/A	N/A	300000000	284274947	0	\N	0	0	0.000644986	0.00000004	0.0378833817	{}	{}	{}	59820.6	-1.42	116.88	105.81
CF	t	f	Californium					\N	-	SHA256	PoW	2520000	2409794	0	\N	0	0	0.0748516	0.0000045	4.3964236963	{}	{}	{}	788.467	0.15	37.71	54.06
BOST	t	f	BoostCoin					\N	-	X13	PoW/PoS	0	11855487	61.71463013254106	\N	1125095	35589.01686184	0.0146377	0.00000088	0.859748237	{}	{}	{}	3644.21	0.15	-0.73	-23.43
DRXNE	t	f	DROXNE					\N		PoS	PoS	0	63841415	0	\N	0	0	0.00269424	0.00000016	0.1582467252	{}	{}	{}	1509.27	0.04	-7.18	-6.65
BTPL	t	f	Bitcoin Planet					\N		Skein	PoW/PoS	100000000	5712874	0	\N	0	0	0.0299407	0.0000018	1.7585730026	{}	{}	{}	1175.25	0.15	-37.81	-5.27
XCXT	t	f	CoinonatX					\N		Scrypt	PoW/PoS	48252000	16660506	0	\N	0	0	0.0100259	0.0000006	0.5888732417	{}	{}	{}	836.128	-0.06	-1.45	-2.31
MUT	t	f	Mutual Coin					\N		Scrypt	PoW/PoS	1000000000	1110722844	0	\N	0	0	0.000149703	0.000000009	0.0087928356	{}	{}	{}	13272.4	-8.57	2.95	-87.48
AERM	t	f	Aerium					\N		SkunkHash	PoW/PoS	500000000	1279475	0	\N	0	0	0.127225	0.00000765	7.47258582	{}	{}	{}	5998.39	0.33	-1.46	-10.06
CACH	t	f	CacheCoin					\N	http://cachecoin.org/	Scrypt	PoW	10000000	4195132	0	\N	0	0	0.0387857	0.00000233	2.2780858466	{}	{}	{}	1534.42	0.16	-4.92	-19.95
SCORE	t	f	Scorecoin					\N		Scrypt	PoW	0	30346591	0	\N	0	0	0.00531729	0.00000032	0.3123120916	{}	{}	{}	2230.39	-21.16	-4.01	0.02
BAS	t	f	BitAsean					\N				0	5000000	0	\N	0	0	0.0320491	0.00000193	1.8824102983	{}	{}	{}	539.217	0.31	-24.57	39.03
BITGOLD	t	f	bitGold					\N				0	93	0	\N	0	0	1701.38	0.102285	99930.894576	{}	{}	{}	11413.6	-1.94	20.42	15.86
FUNC	t	f	FUNCoin					\N		N/A	N/A	100000000	5848581	0	\N	0	0	0.0266968	0.0000016	1.5680418874	{}	{}	{}	2402.93	-0.16	29.04	-2.07
TEK	t	f	TEKcoin					\N	http://tekcoin.org/	SHA256	PoW/PoS	100000000	1414054562	0	\N	0	0	0.000105335	0.000000006	0.0061868723	{}	{}	{}	7379.92	1.61	152.99	-31.37
HONEY	t	f	Honey					\N		Blake2S	PoW/PoS	7000000	355750	0	\N	0	0	0.41135	0.00002473	24.16072452	{}	{}	{}	1320.59	0.44	18.33	-18.34
611	t	f	SixEleven					\N	http://anti.cash/	SHA256	PoW	611000	432646	0	\N	0	0	0.32949	0.00001981	19.352661048	{}	{}	{}	958.072	-4.59	7.26	26.93
BITEUR	t	f	bitEUR					\N				0	115332	0	\N	0	0	1.21989	0.00007334	71.650483128	{}	{}	{}	14326	-6.83	0.26	-5.32
GLT	t	f	GlobalToken					\N		SHA256	PoW	168000000	27063600	0	\N	0	0	0.0051381	0.00000031	0.3017873311	{}	{}	{}	1162.46	2.83	17.21	31.79
MONK	t	f	Monkey Project					\N				0	105797	0	\N	0	0	1.28928	0.00007751	75.726118656	{}	{}	{}	13653.7	0.13	-7.89	-7.33
VUC	t	f	Virta Unique Coin					\N		NIST5	PoW/PoS	120000000	61532825	0	\N	0	0	0.0021644	0.00000013	0.1271264669	{}	{}	{}	4358.49	0.15	-6.03	2.03
PRC	t	f	PRCoin					\N	-	Scrypt	PoW	21000000	16149200	0	\N	0	0	0.00815051	0.00000049	0.478721835	{}	{}	{}	14805.3	0.15	-0.78	1.18
CPN	t	f	CompuCoin					\N				0	19615019	0	\N	0	0	0.00669183	0.0000004	0.3930459734	{}	{}	{}	858.077	-0.75	9.54	21.8
VOT	t	f	VoteCoin					\N		Equihash	PoW	220000000	16474625	0	\N	0	0	0.00781784	0.00000047	0.459182396	{}	{}	{}	917.475	-0.06	-18.75	85.36
IMX	t	f	Impact					\N		X11	PoW/PoS	110000000	109509126	0	\N	0	0	0.00116338	0.00000007	0.068331357	{}	{}	{}	11250.8	6.68	-27.06	140.18
$$$	t	f	Money					\N				0	45887218	0	\N	0	0	0.00268722	0.00000016	0.1578344041	{}	{}	{}	1697.72	-2.32	-4.66	73.55
CORG	t	f	CorgiCoin					\N				0	1251855418	0	\N	0	0	0.0000972642	0.000000006	0.0057128322	{}	{}	{}	2305.52	-0.38	-16.33	-78.21
ALL	t	f	Allion					\N				0	6199359	0	\N	0	0	0.0196053	0.00000118	1.1515212166	{}	{}	{}	1151.27	0.01	-36.69	-1.04
LUNA	t	f	Luna Coin					\N				0	1692410	0	\N	0	0	0.0714936	0.0000043	4.1991908947	{}	{}	{}	3894.77	1.84	18.3	158.63
LEA	t	f	LeaCoin					\N	-	SHA256	PoW	2000000000	317056091	11000.000000298	\N	1537154	52277636336037	0.000379016	0.00000002	0.0222615806	{}	{}	{}	1752.57	0.19	-43.46	-43.07
MND	t	f	MindCoin					\N	-	X11	PoW	16000000	15867695	0	\N	0	0	0.00748516	0.00000045	0.4396423696	{}	{}	{}	723.942	-0.23	-8.88	26.25
XBTS	t	f	Beatcoin					\N	-	X11	PoW/PoS	0	1524686	0	\N	0	0	0.0760741	0.00000457	4.4682274783	{}	{}	{}	936.402	8.72	82	156.38
REE	t	f	ReeCoin					\N	-	Scrypt	PoW/PoS	350000000	2560000000	0	\N	0	0	0.0000439096	0.000000003	0.0025790391	{}	{}	{}	1428.2	-0.08	21.43	-52.7
300	t	f	300 Token					\N				300	300	0	\N	0	0	366.306	0.0220219	21515.0561712	{}	{}	{}	1414.61	0.15	-35.73	-3.82
XCO	t	f	X-Coin					\N	http://x-coin.info/	SHA256	PoW/PoS	0	12384976	40	\N	319510	0	0.0082297	0.00000049	0.4833730754	{}	{}	{}	843.049	55.38	52.4	37.85
KURT	t	f	Kurrent					\N		X11	PoW	228000000	9919485	0	\N	0	0	0.0102167	0.00000061	0.6000799178	{}	{}	{}	5003.69	-0.01	9.72	8.08
KRONE	t	f	Kronecoin					\N		Scrypt	PoW	84000000	3925542	0	\N	0	0	0.0257955	0.00000155	1.5151038516	{}	{}	{}	3416.59	-0.34	85.11	45.27
ACP	t	f	AnarchistsPrime					\N	http://www.anarchistsprime.info/	SHA256	PoW	53760000	4394874	32	\N	219913	0	0.022546	0.00000136	1.3242438192	{}	{}	{}	6959.2	0.39	-1.07	-17.27
BIP	t	f	BipCoin					\N		CryptoNight	PoW	18446744	1627261	0	\N	0	0	0.0607809	0.00000365	3.5699783177	{}	{}	{}	986.019	2.63	7.2	-11.76
SOIL	t	f	SOILcoin					\N	http://soilcoin.xyz/	Dagger	PoW	30000000	5702048	0	\N	0	0	0.0168778	0.00000101	0.9913209586	{}	{}	{}	532.076	0.51	3.62	-15.63
BENJI	t	f	BenjiRolls					\N		Scrypt	PoW	35520400	20272949	0	\N	0	0	0.0043561	0.00000026	0.2558564047	{}	{}	{}	669.179	0.71	40.41	52.34
DRS	t	f	Digital Rupees					\N		Scrypt	PoS	0	510802961	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	802.868	0.29	-0.78	1
GTC	t	f	Global Tour Coin					\N				0	29887402	0	\N	0	0	0.00282773	0.00000017	0.1660872871	{}	{}	{}	2243.82	0.29	-19.64	-59.38
LTCR	t	f	Litecred					\N		QuBit	PoW/PoS	78835200	30227750	0	\N	0	0	0.00277023	0.00000017	0.1627100131	{}	{}	{}	963.714	0.04	-37.61	-49.74
WBB	t	f	Wild Beast Block					\N	http://www.wildbeastbitcoin.com/	Scrypt	PoW	2628000	173053	0.3125	\N	1080482	1798146675	0.483043	0.00002904	28.3716272136	{}	{}	{}	817.136	143.83	134.93	249.18
ITZ	t	f	Interzone					\N				0	2098084	0	\N	0	0	0.039006	0.00000234	2.2910252112	{}	{}	{}	2230.49	0.15	7.36	21.32
BRAT	t	f	Brother Token					\N		N/A	N/A	1000000000	160000000	0	\N	0	0	0.00050953	0.00000003	0.0299273465	{}	{}	{}	4103.04	0.02	76.3	16.26
EGAS	t	f	ETHGAS					\N		N/A	N/A	13	10157540	0	\N	0	0	0.00801226	0.00000048	0.4706016936	{}	{}	{}	3084.72	0.31	-28.3	-53.05
LTCU	t	f	LiteCoin Ultra					\N		Scrypt	PoW/PoS	150000000	919402	0	\N	0	0	0.0838551	0.00000504	4.9252460695	{}	{}	{}	26383.3	-7.58	-14.28	25.83
ERY	t	f	Eryllium					\N		X11	PoW/PoS	100000000	5529416	0	\N	0	0	0.0138315	0.00000083	0.8123959188	{}	{}	{}	2891.22	14.02	22.59	31.28
CRDNC	t	f	Credence Coin					\N				25000000	3427006	0	\N	0	0	0.0220138	0.00000132	1.2929849458	{}	{}	{}	1853.44	-6.17	-1.69	-16.38
ICON	t	f	Iconic					\N		PoS	PoS	520000	592894	0	\N	0	0	0.11627	0.00000699	6.829141704	{}	{}	{}	2482.05	-0.03	3.78	115.94
WOMEN	t	f	WomenCoin					\N		Scrypt	PoW/PoS	25000000000	44220400	0	\N	0	0	0.0013307	0.00000008	0.0781589306	{}	{}	{}	676.421	0.29	-15.5	-4.03
RBT	t	f	Rimbit					\N	https://rimbit.com/	N/A	N/A	0	115499623	0	\N	0	0	0.000492703	0.00000003	0.0289390092	{}	{}	{}	12750.1	-0.23	22.6	40.97
NANOX	t	f	Project-X					\N				0	0	0	\N	0	0	715249	43	42010293.0648	{}	{}	{}	46477.3	0.15	-24.07	769.39
VIP	t	f	VIP Tokens					\N	http://viptokens.club/	NIST5	PoW/PoS	90000000	83450403	0	\N	0	0	0.000665348	0.00000004	0.0390793478	{}	{}	{}	596.117	-0.03	-20.52	0.99
VPRC	t	f	VapersCoin					\N	http://vaperscoin.com	Scrypt	PoW	42750000000	780124964	0	\N	0	0	0.0000681684	0.000000004	0.0040038846	{}	{}	{}	1219.25	0.3	-5.04	66.3
VLTC	t	f	Vault Coin					\N		X11	PoW	1000000000	30380880	0	\N	0	0	0.0015755	0.00000009	0.0925373076	{}	{}	{}	711.522	-1.48	37.89	47.11
LBTC	t	f	LiteBitcoin					\N		Scrypt	PoW	1000000000	3188280	0	\N	0	0	0.0147356	0.00000089	0.8654984131	{}	{}	{}	26266.7	4.89	-18.51	77.03
MSCN	t	f	Master Swiscoin					\N				0	44846660	0	\N	0	0	0.00100053	0.00000006	0.0587663297	{}	{}	{}	930.236	7.14	-2.13	33.78
BOAT	t	f	BOAT					\N		HMQ1725	PoW/PoS	500000000	18547845	0	\N	0	0	0.00232872	0.00000014	0.1367778349	{}	{}	{}	531.186	0.29	-0.78	-22.46
VRS	t	f	Veros					\N		N/A	N/A	10000000000	486609040	0	\N	0	0	0.0000870954	0.000000005	0.0051155657	{}	{}	{}	5054.78	-4.98	10.85	176.05
XCS	t	f	CybCSec					\N		POS 3.0	PoS	0	11834082	0	\N	0	0	0.0031604	0.00000019	0.1856267261	{}	{}	{}	5135.85	0.15	32.01	-7.2
BNX	t	f	BnrtxCoin					\N		X11	PoW	210000000	26603501	0	\N	0	0	0.00128536	0.00000008	0.0754958767	{}	{}	{}	963.764	1.26	15.56	29.74
CREVA	t	f	CrevaCoin					\N	http://www.crevacoin.com/	X11	N/A	0	36390750	0	\N	0	0	0.000681741	0.00000004	0.040042194	{}	{}	{}	4352.43	0.16	-14.93	-16.75
GEERT	t	f	GeertCoin					\N				0	5091200	0	\N	0	0	0.00428511	0.00000026	0.2516867929	{}	{}	{}	730.876	-0.06	42.75	28.76
SDP	t	f	SydPak					\N	http://www.sydpak.com/	X13	PoW/PoS	0	159862	0.009582665006746538	\N	213591	0	0.13307	0.000008	7.815893064	{}	{}	{}	723.872	0.29	0	-31.59
LVPS	t	f	LevoPlus					\N				0	1513256	0	\N	0	0	0.0114773	0.00000069	0.674121511	{}	{}	{}	2007.68	0.15	-7.89	19.04
FRAZ	t	f	Frazcoin					\N		Scrypt	PoW	20000000	9407448	0	\N	0	0	0.00131349	0.00000008	0.0771480978	{}	{}	{}	895.966	0.15	-33.73	3.75
HMC	t	f	HarmonyCoin					\N				67130000000	561235	0	\N	0	0	0.0120421	0.00000072	0.7072951519	{}	{}	{}	7744.21	0.15	-3.77	0.38
UNITY	t	f	SuperNET					\N	https://www.supernet.org/en	N/A	N/A	816060.9999	816061	0	\N	0	0	60.2471	0.00362199	3538.62546792	{}	{}	{}	126.525	-35.52	15.77	4.45
CREDO	t	f	Credo					\N		N/A	N/A	1374729257.2286	549891703	0	\N	0	0	0.0480736	0.00000289	2.8236125107	{}	{}	{}	266.808	0.31	0.37	32
ECN	t	f	E-coin					\N				0	4818216	0	\N	0	0	3.19651	0.00019217	187.747654152	{}	{}	{}	302.581	0.13	-25.77	29.48
ECOB	t	f	Ecobit					\N		N/A	N/A	0	444444444	0	\N	0	0	0.0183314	0.0000011	1.0766984453	{}	{}	{}	430.745	-0.09	8.85	25.16
BIS	t	f	Bismuth					\N		N/A	PoW	109999978	6317855	0	\N	0	0	1.19763	0.000072	70.343037576	{}	{}	{}	179.351	0.15	-0.45	-1.84
XC	t	f	XCurrency					\N	http://www.xc-official.com/	X11	PoW/PoS	5500000	5873642	0.22826816669354835	\N	1274399	0	0.944351	0.00005212	55.4666448552	{}	{}	{}	0	12.1	0	12.76
YASH	t	f	YashCoin					\N				0	10000283	0	\N	0	0	0.44911	0.000027	26.378565672	{}	{}	{}	197.026	0.15	78.68	-11.55
PGL	t	f	Prospectors Gold					\N		N/A	N/A	220000000	64500000	0	\N	0	0	0.0636912	0.00000383	3.7409153702	{}	{}	{}	49.6267	0.14	-35.35	-56.16
FIMK	t	f	FIMKrypto					\N				0	577004618	0	\N	0	0	0.0068891	0.00000041	0.4046326663	{}	{}	{}	8.98236	0.15	0	0
VTA	t	f	Virtacoin					\N	http://www.virtalocal.com/	Scrypt	PoW	21000000000	5201310113	0	\N	0	0	0.000580911	0.00000003	0.0341199238	{}	{}	{}	143.256	6.45	8912.03	8863.99
ITT	t	f	Intelligent Trading Tech					\N		N/A	N/A	11500000	9797899	0	\N	0	0	0.216331	0.00001301	12.7062445512	{}	{}	{}	167.456	0.31	75.42	-24.53
ARC	t	f	ArcticCoin					\N		X11	PoW	60000000	1557102	0	\N	0	0	1.23158	0.00007389	72.337097616	{}	{}	{}	76191.7	13.53	1.22	12.34
HTC	t	f	HitCoin					\N	http://hitcoininfo.com/	X11	PoW/PoS	26550000000	10996318099	0	\N	0	0	0.000164221	0.00000001	0.0096455533	{}	{}	{}	0	-0.21	-1.49	-0.28
SHORTY	t	f	Shorty					\N		PoS	PoS	100000000	100000000	0	\N	0	0	0.0168	0.00000101	0.98675136	{}	{}	{}	4.01454	0.15	-0.78	0.12
ETBS	t	f	Ethbits					\N		N/A	N/A	1634690.7627412013	1391604	0	\N	0	0	1.17549	0.00007067	69.042640248	{}	{}	{}	97.5383	-3.32	-23.55	-2.35
SDC	t	f	ShadowCash					\N	http://www.aboutshadow.com/	Scrypt	PoW/PoS	0	6695133	0.2745110864257988	\N	1587844	0	0.235866	0.00001418	13.8536366832	{}	{}	{}	160.269	0.15	25.54	38.47
EMV	t	f	Ethereum Movie Venture					\N				0	6566666	0	\N	0	0	0.206732	0.00001243	12.1424453664	{}	{}	{}	35.254	0.31	-91.18	-89.17
MBI	t	f	Monster Byte					\N		N/A	N/A	40000000	16822736	0	\N	0	0	0.0716912	0.00000431	4.2107969702	{}	{}	{}	73.528	-0.23	-23.35	-31.15
USC	t	f	Ultimate Secure Cash					\N		SHA256	PoS	200084200	10343113	0	\N	0	0	0.116436	0.000007	6.8388917472	{}	{}	{}	85.7868	10.24	240.62	113.05
METAL	t	f	MetalCoin					\N	-	Scrypt	PoW	0	76925527	0	\N	0	0	0.0156357	0.00000094	0.9183659666	{}	{}	{}	286.027	0.15	-18.86	11.7
RIYA	t	f	Etheriya					\N		N/A	N/A	100000000	1581531	0	\N	0	0	0.732774	0.00004405	43.0396274448	{}	{}	{}	24.251	-0.21	10.05	-2.76
TROLL	t	f	Trollcoin					\N				0	566540521	0	\N	0	0	0.0019984	0.00000012	0.1173764237	{}	{}	{}	269.556	0.3	-3.03	67.93
KOBO	t	f	Kobocoin					\N	http://kobocoin.com	X15	PoW/PoS	350000000	24700248	0.49640650684504134	\N	1435394	0	0.0424627	0.00000255	2.494055177	{}	{}	{}	203.499	3.19	-43.85	-1.88
CASINO	t	f	Casino					\N				0	1000000	0	\N	0	0	1.01123	0.00006079	59.394796296	{}	{}	{}	21.2359	-1.53	0.29	0
DCY	t	f	Dinastycoin					\N		CryptoNight	PoW	2000000000	1420858063	0	\N	0	0	0.00068645	0.00000004	0.040318778	{}	{}	{}	268.207	0.26	18.08	-19.45
EBET	t	f	EthBet					\N		N/A	N/A	10000000	8502500	0	\N	0	0	0.112172	0.00000674	6.5884448544	{}	{}	{}	186.766	0.31	59.69	12.82
HBN	t	f	HoboNickels					\N	http://hobonickels.info/	Scrypt	PoW/PoS	120000000	59696358	29.649080613007147	\N	5746715	0	0.0159684	0.00000096	0.9379071677	{}	{}	{}	336.639	-0.03	5.5	12.09
V	t	f	Version					\N				0	470893127	0	\N	0	0	0.00199419	0.00000012	0.1171291485	{}	{}	{}	368.617	0.3	14.3	34.35
VAL	t	f	Valorbit					\N				0	5334132990	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	342.019	0.29	-0.73	0.74
I0C	t	f	I0Coin					\N	https://izerocoin.org/	SHA256	PoW	21000000	20985884	0.046874994039535524	\N	2328150	1582466880712940000	0.03975	0.00000239	2.3347242	{}	{}	{}	20.7132	-44.19	9.27	46.93
MAO	t	f	Mao Zedong					\N				0	6230035	0	\N	0	0	0.133569	0.00000803	7.8452019288	{}	{}	{}	475.943	-0.2	-5.93	-13.62
STS	t	f	Stress					\N	-	X13	PoW/PoS	0	565134332	0	\N	0	0	0.0013307	0.00000008	0.0781589306	{}	{}	{}	36.9701	0.15	-5.04	1
GAIA	t	f	GAIA					\N	-	X11	PoS	24000000	24101381	0	\N	0	0	0.03039	0.00000183	1.784962728	{}	{}	{}	104.264	0.46	6.83	-33.43
OPAL	t	f	Opal					\N	http://www.opal-coin.com/	X13	PoW/PoS	15000000	15143926	0.0129145799825589	\N	824909	0	0.0481148	0.00000289	2.826032401	{}	{}	{}	350.772	-2.55	-30.23	-40.6
FUNK	t	f	The Cypherfunks					\N				0	46405032499	0	\N	0	0	0.0000156016	0.0000000009	0.0009163631	{}	{}	{}	337.903	-0.03	8.45	7.54
LTB	t	f	LiteBar					\N	-	Scrypt	PoW	1350000	819620	0	\N	398988	4578312300188	0.813491	0.00004891	47.7805565832	{}	{}	{}	301.376	0.29	-4.02	-11.02
KLC	t	f	KiloCoin					\N		Scrypt	PoW	10000000000	196297971	0	\N	0	0	0.00319327	0.00000019	0.1875573521	{}	{}	{}	284.979	-0.02	-5.19	121.17
JET	t	f	Jetcoin					\N				0	6876109	0	\N	0	0	0.0881622	0.0000053	5.1782244494	{}	{}	{}	318.804	-2.84	16.96	81.04
8BIT	t	f	8Bit					\N	http://www.8bitcoin.org/	Scrypt	PoW/PoS	0	1467841	0	\N	0	0	0.409792	0.00002464	24.0692150784	{}	{}	{}	314.358	0.38	-1.78	24.33
BPC	t	f	Bitpark Coin					\N				0	75000000	0	\N	0	0	0.00781784	0.00000047	0.459182396	{}	{}	{}	197.269	0.29	-20.44	-20.88
TALK	t	f	BTCtalkcoin					\N				0	65290635	0	\N	0	0	0.00881586	0.00000053	0.5178013003	{}	{}	{}	250.747	6.3	6.27	-5.84
WAY	t	f	WayGuide					\N	https://wayguide.club/	X11	PoS	100000000	100040708	0	\N	0	0	0.00565546	0.00000034	0.3321745742	{}	{}	{}	9.37043	0.15	0	2.45
OHM	t	f	OHM					\N				500000000	29956108	0	\N	0	0	0.0182664	0.00000099	1.0728806573	{}	{}	{}	0	166.7	0	173.19
UNI	t	f	Universe					\N		Scrypt	PoS	112000000	12249947	0	\N	0	0	0.0445783	0.00000268	2.6183153662	{}	{}	{}	187.53	0.15	5.09	-0.26
VLT	t	f	Veltor					\N	http://veltor.org/	N/A	PoW	0	554855	0	\N	0	0	0.965753	0.00005806	56.7236956056	{}	{}	{}	264.804	0.15	-12.84	4.18
FUCK	t	f	FuckToken					\N		N/A	N/A	70856775	51392877	0	\N	0	0	0.0104159	0.00000063	0.6117799697	{}	{}	{}	138.612	0.31	-43.78	-2.82
DAXX	t	f	DaxxCoin					\N		Ethash	PoW	10000000000	499721740	0	\N	0	0	0.00103706	0.00000006	0.0609119265	{}	{}	{}	207.884	0.36	-8.92	27.29
BRIA	t	f	BriaCoin					\N				3000000	629304	0	\N	0	0	0.79	0.00004749	46.400808	{}	{}	{}	346.637	-0.58	-19.33	-17.58
SPEX	t	f	SproutsExtreme					\N				0	2866607586	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	3.32674	0.15	-0.78	0
SLG	t	f	Sterlingcoin					\N	http://sterlingcoin.org.uk/	X13	PoS	0	4209832	0	\N	0	0	0.111664	0.00000671	6.5586073728	{}	{}	{}	415.061	0.31	1.29	4.62
BERN	t	f	BERNcash					\N	http://berncoin.org/	X14	PoW/PoS	0	71234301	0	\N	0	0	0.0062353	0.00000037	0.3662315926	{}	{}	{}	211.801	0.33	-2.95	6.53
FRC	t	f	Freicoin					\N	http://freico.in/	SHA256	PoW	2602410	29679346	0	\N	0	0	0.014804	0.00000089	0.8695159008	{}	{}	{}	25.7094	0.15	-8.65	36.2
C2	t	f	Coin2.1					\N	-	Scrypt	PoW/PoS	0	99976323	2.7604936425174986	\N	1887817	0	0.00432476	0.00000026	0.2540156436	{}	{}	{}	31.5278	0.15	43.84	5.78
BITS	t	f	Bitstar					\N	http://bitstarcoin.com/	Scrypt	PoW/PoS	54256119	23079737	0	\N	0	0	0.0184616	0.00000111	1.0843457683	{}	{}	{}	347.326	0.65	-10.29	1.8
BSTY	t	f	GlobalBoost-Y					\N	https://globalboo.st/	yescript	PoW	0	13329339	50.000000001117584	\N	163849	1152992	0.0313009	0.00000188	1.8384646217	{}	{}	{}	321.598	0.17	8.4	32.16
CUBE	t	f	DigiCube					\N	http://www.freestaking.com	N/A	PoS	0	2429126009	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	4.99011	-0.03	-0.65	0.99
BXT	t	f	BitTokens					\N	-	SHA256	PoW/PoS	21000000	566850	0	\N	0	0	0.704233	0.00004234	41.3632661016	{}	{}	{}	116.085	-22.27	-11.96	-22.9
FLY	t	f	Flycoin					\N	-	X13	PoS	0	210806	0	\N	0	0	1.88293	0.0001132	110.594270136	{}	{}	{}	6.44024	0.15	0	0
SH	t	f	Shilling					\N	https://digitalshilling.org/	Scrypt	PoW	30000000	39965675	50	\N	103396	1510166689	0.00981388	0.00000059	0.5764202046	{}	{}	{}	102.598	0.13	-11.3	6.92
TGC	t	f	Tigercoin					\N	https://tigercoin.wordpress.com/	SHA256	PoW	47011968	43536800	0	\N	0	0	0.00881586	0.00000053	0.5178013003	{}	{}	{}	316.005	0.15	-12.31	-3.72
EUC	t	f	Eurocoin					\N		SHA256	PoW/PoS	20000000	12416554	0	\N	0	0	0.0296918	0.00000179	1.7439538114	{}	{}	{}	492.648	7.73	106.02	100.42
SWING	t	f	Swing					\N	http://tryswing.com/	SHA256	PoW/PoS	40000000	2818908	7.724999999993348	\N	660787	0	0.12968	0.0000078	7.616780736	{}	{}	{}	468.129	-0.48	-0.27	1.25
SHDW	t	f	Shadow Token					\N				0	7000000	0	\N	0	0	0.0520635	0.00000313	3.0579600852	{}	{}	{}	5.20635	0.15	4.09	-7.76
MARS	t	f	Marscoin					\N	http://marscoin.org/	X11	PoW	33000000	28279074	0	\N	0	0	0.0126789	0.00000076	0.7446977273	{}	{}	{}	400.465	13.51	99.04	110.69
SAC	t	f	SACoin					\N				0	7015555	0	\N	0	0	0.0507328	0.00000305	2.9798011546	{}	{}	{}	321.025	-0.03	0.87	-37.43
ICN	t	f	Iconomi					\N	https://www.iconomi.net/	N/A	N/A	100000000	29247488	0	\N	0	0	0.0119763	0.00000072	0.7034303758	{}	{}	{}	360.666	0.15	-3.46	73.51
HAL	t	f	Halcyon					\N	-	X15	PoW/PoS	0	5350522	0	\N	0	0	0.0650378	0.00000391	3.8200081906	{}	{}	{}	9.9751	0.29	-0.73	8.86
PR	t	f	Prototanium					\N				0	196011	0	\N	0	0	1.77079	0.00010646	104.007704808	{}	{}	{}	95.0378	0.61	4.39	-7.88
XGR	t	f	GoldReserve					\N		X11	PoW/PoS	40000000	17171382	0	\N	0	0	0.0195278	0.00000117	1.1469692386	{}	{}	{}	278.665	-0.03	-13.72	6.6
WYV	t	f	Wyvern					\N				0	1811144	0	\N	0	0	0.184634	0.0000111	10.8445149168	{}	{}	{}	278.311	0.15	0.12	12.04
MAD	t	f	SatoshiMadness					\N		PoS	PoS	2000000000	2000683485	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	1.66337	0.15	-0.78	1
WMC	t	f	WMCoin					\N	http://www.digitalbulliongold.com/	X11	PoS	1000000000	11527489	0	\N	0	0	0.028819	0.00000152	1.6926897288	{}	{}	{}	0	14.47	0	15.12
CYP	t	f	Cypher					\N	http://www.cypher.pw/	QuBit	PoW	0	6365285	0	\N	0	0	0.0499011	0.000003	2.9309510887	{}	{}	{}	32.6879	-0.23	3.85	56.99
GAP	t	f	Gapcoin					\N	http://gapcoin.org	Scrypt	PoW/PoS	250000000	12144239	11.151999469846487	\N	691390	0	0.0260395	0.00000157	1.5294352404	{}	{}	{}	78.7131	0.36	9.05	-12.99
EMD	t	f	Emerald Crypto					\N	http://www.emeraldcrypto.org/	Scrypt	PoW	31499000	19117129	0	\N	0	0	0.0162088	0.00000097	0.9520271098	{}	{}	{}	230.122	0.33	8.23	17.18
AMBER	t	f	AmberCoin					\N	http://amber-coin.webnode.com/	X11	PoW/PoS	1000000000	43699481	0	\N	0	0	0.00698615	0.00000042	0.4103329175	{}	{}	{}	2.65474	-0.23	0	50.94
KED	t	f	Darsek					\N		Scrypt	PoW/PoS	500000000	15250570	0	\N	0	0	0.0197536	0.00000119	1.1602316467	{}	{}	{}	19.1658	0.17	16.66	47.46
PHS	t	f	Philosopher Stones					\N	http://phstones.com/	Scrypt	PoW	8891840	6014340	0	\N	0	0	0.0490694	0.00000295	2.8821010229	{}	{}	{}	28.7811	0.15	-2.06	6.41
888	t	f	OctoCoin					\N	http://octocoinfoundation.org	N/A	PoW	135776563	50782016	0	\N	0	0	0.00527173	0.00000032	0.3096361159	{}	{}	{}	178.549	-2.9	4.86	-4.02
VIDZ	t	f	PureVidz					\N		PoS	PoS	125000000	125279775	0	\N	0	0	0.00206312	0.00000012	0.1211777658	{}	{}	{}	213.053	6.82	-9.95	-15.22
RBIES	t	f	Rubies					\N	http://rbies.org/	N/A	PoS	10000000	10415252	0	\N	0	0	0.0244515	0.00000147	1.4361637428	{}	{}	{}	165.899	0.29	-3.96	-30.17
XBTC21	t	f	Bitcoin 21					\N				0	793108	0	\N	0	0	0.308389	0.00001854	18.1132895928	{}	{}	{}	3.08389	0.15	-26.06	-18.19
ARI	t	f	Aricoin					\N	-	Scrypt	PoW	322649400	140262505	0	\N	0	0	0.00174347	0.0000001	0.1024030591	{}	{}	{}	190.904	1.7	-4.62	21.7
DUO	t	f	ParallelCoin					\N		Scrypt	PoW	1000000	301974	0	\N	0	0	0.806874	0.00004851	47.3919057648	{}	{}	{}	325.609	8.51	7.12	-6.41
BUMBA	t	f	BumbaCoin					\N				0	22503918	0	\N	0	0	0.0108119	0.00000065	0.6350391089	{}	{}	{}	36.5911	0.15	-13.97	-0.53
YAC	t	f	Yacoin					\N	http://www.yaccoin.org/	Scrypt	PoW	2000000000	120016860	0	\N	0	0	0.00199604	0.00000012	0.1172378086	{}	{}	{}	6.48714	0.15	-1.09	-13.43
PXI	t	f	Prime-XI					\N	http://prime-xi.com/	X11	PoW	0	18085290	5.000000000181721	\N	3616860	258093327203	0.0129988	0.00000078	0.7634871178	{}	{}	{}	397.948	-0.92	21.48	17.07
PRX	t	f	Printerium					\N		Scrypt	PoW/PoS	20000000	11821728	0	\N	0	0	0.0194844	0.00000117	1.1444201309	{}	{}	{}	239.666	-0.58	221.25	258.37
GRT	t	f	Grantcoin					\N	http://www.grantcoin.org/	SHA256	Pow	10031749627.87	43276373	9.998004150390624	\N	954164	0	0.00530615	0.00000032	0.3116577815	{}	{}	{}	23.8271	5.86	-0.67	-31.59
ACOIN	t	f	Acoin					\N	http://acoinproject.org/	SHA256	PoW	1600000	1220085	0	\N	0	0	0.185512	0.00001115	10.8960844224	{}	{}	{}	181.12	0.43	-11.98	-8.22
ARCO	t	f	AquariusCoin					\N		Scrypt	PoW/PoS	42000000	1510818	0	\N	0	0	0.149434	0.00000898	8.7770358768	{}	{}	{}	429.093	0.95	24.76	44.93
IMS	t	f	Independent Money System					\N		Scrypt	PoW/PoS	21212121	5368934	0	\N	0	0	0.0420496	0.00000253	2.4697916659	{}	{}	{}	77.8133	2.77	10.43	47.63
HMP	t	f	HempCoin					\N	http://www.hempcoin.com/	Scrypt-n	PoW	5000000000	1356645470	0	\N	1971249	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	13.6396	0.15	-0.78	1
PX	t	f	PX					\N		SHA256	PoW/PoS	0	97060271	0	\N	0	0	0.00216238	0.00000013	0.1270078218	{}	{}	{}	4.54932	0.15	0	9.45
VEC2	t	f	VectorAI					\N	-	Dagger-Hashimoto	PoW	0	16680860	0	\N	0	0	0.0123089	0.00000074	0.7229657033	{}	{}	{}	228.248	-0.03	12.23	111.22
TSE	t	f	Tattoocoin (Standard Edition)					\N		Scrypt	PoW/PoS	500000000	90421856	0	\N	0	0	0.00226926	0.00000014	0.13328544	{}	{}	{}	171.867	0.46	13.65	21.7
XCRE	t	f	Creatio					\N		PoS	PoS	20000000	20520514	0	\N	0	0	0.00983147	0.00000059	0.5774533567	{}	{}	{}	110.096	0.29	-21.18	-13.06
GP	t	f	GoldPieces					\N	http://gpieces.com/	X11	PoW/PoS	0	1220161	0	\N	0	0	0.164765	0.00000991	9.677505228	{}	{}	{}	287.032	0.29	-6.53	44.35
DLC	t	f	Dollarcoin					\N	-	SHA256	PoW	10638298	9106714	0	\N	0	0	0.0219565	0.00000132	1.2896194188	{}	{}	{}	52.4138	0.15	1.58	4.16
FIRE	t	f	Firecoin					\N	-	X15	PoW/PoS	0	98412	0	\N	0	0	1.99189	0.00011975	116.994057528	{}	{}	{}	36.9108	0.15	-0.7	1.09
ISL	t	f	IslaCoin					\N	http://islacoin.net/	X11	PoW/PoS	0	1513704	0	\N	0	0	0.128412	0.00000772	7.5423045024	{}	{}	{}	30.6597	0.15	-4.37	-31.95
COXST	t	f	CoExistCoin					\N				0	27100000	0	\N	0	0	0.00713309	0.00000043	0.4189634678	{}	{}	{}	6.29144	1.37	-52.7	412.53
XCT	t	f	C-Bit					\N		SHA256	PoW	210000000	157625875	0	\N	0	0	0.00116848	0.00000007	0.0686309065	{}	{}	{}	498.786	-0.03	11.26	-10.15
BITZ	t	f	Bitz					\N	-	N/A	PoS	0	1990891	0	\N	0	0	0.0924834	0.00000556	5.4320309957	{}	{}	{}	23.9329	0.15	-0.42	18.75
ANTI	t	f	AntiBitcoin					\N	http://anti.cash/	SHA256	PoW	42000000	17465159	0	\N	0	0	0.0104792	0.00000063	0.6154979078	{}	{}	{}	3.37331	0.15	11.42	24.77
DBTC	t	f	Debitcoin					\N	-	Scrypt	PoW	25999629.2378176	17999629	0.0006103436648845673	\N	1584758	1518081	0.00998022	0.0000006	0.5861902177	{}	{}	{}	351.815	3.61	8.7	26.25
DRM	t	f	Dreamcoin					\N				0	2449822	0	\N	0	0	0.0731883	0.0000044	4.2987294382	{}	{}	{}	448.22	0.29	95.77	0
TAJ	t	f	TajCoin					\N		Blake2S	PoW/PoS	36900000	8085132	0	\N	0	0	0.0218601	0.00000131	1.2839573455	{}	{}	{}	177.836	0.46	-5.47	4.86
BLZ	t	f	BlazeCoin					\N				0	608557394	0	\N	0	0	0.000288374	0.00000002	0.0169377046	{}	{}	{}	445.964	10.01	48.77	54.18
MTLMC3	t	f	Metal Music Coin					\N				0	79719140	0	\N	0	0	0.00214942	0.00000013	0.1262466136	{}	{}	{}	142.381	0.15	7.07	10.17
SLING	t	f	Sling					\N	https://bitcointalk.org/index.php?topic=1032166.0	SHA256	PoW	1000000	1074095	0	\N	0	0	0.158852	0.00000955	9.3302039904	{}	{}	{}	143.232	-0.03	-0.76	-28.5
URO	t	f	Uro					\N	http://uro.io/	X11	PoW	0	1207310	0	\N	0	0	0.139224	0.00000837	8.1773494848	{}	{}	{}	488.684	0.15	-0.78	10.05
NEVA	t	f	NevaCoin					\N	http://nevacoin.pw/	N/A	PoW/PoS	26280000	2499020	5	\N	499794	70167728918.43	0.0660087	0.00000397	3.8770341962	{}	{}	{}	198.967	0.5	3.29	-1.23
CON	t	f	PayCon					\N	-	X13	PoW/PoS	50000000	23042604	0	\N	0	0	0.0068129	0.00000041	0.4001570441	{}	{}	{}	315.826	0.27	-25.92	-22.64
JIN	t	f	Jin Coin					\N				9960000	9848485	0	\N	0	0	0.0158725	0.0000009	0.932274462	{}	{}	{}	0	-4.2	-0.19	-8.1
SOON	t	f	SoonCoin					\N	http://www.sooncoin.com/	SHA256	PoW	21000000	12462620	0	\N	0	0	0.0124753	0.00000075	0.7327392406	{}	{}	{}	48.2275	0.29	-0.73	-20.46
ARG	t	f	Argentum					\N	-	Scrypt	PoW	64000000	8654941	0	\N	0	0	0.0162589	0.00000098	0.9549697433	{}	{}	{}	312.074	0.03	17.16	-15.48
RPC	t	f	RonPaulCoin					\N	http://www.ronpaulcoin.com/	Scrypt	PoW	21000000	899174	0	\N	899174	13375983821	0.149572	0.00000899	8.7851413344	{}	{}	{}	90.6432	0.15	-23.87	18.28
PULSE	t	f	Pulse					\N	http://pulseproject.pw/	SHA256D	PoS	0	14298972	0	\N	0	0	0.0089822	0.00000054	0.5275713134	{}	{}	{}	76.4167	-0.03	96.66	154.93
SCRT	t	f	SecretCoin					\N	https://secretcoin.club/	X11	PoW/PoS	21000000	4228672	0	\N	0	0	0.0294416	0.00000177	1.7292582643	{}	{}	{}	131.643	0.29	0	1
BSTAR	t	f	Blackstar					\N		X11	PoS	0	630795971	0	\N	0	0	0.000181929	0.00000001	0.0106856362	{}	{}	{}	0	9.61	0	10.13
MAR	t	f	Marijuanacoin					\N		X11	PoW/PoS	0	1561689	0	\N	0	0	0.0731883	0.0000044	4.2987294382	{}	{}	{}	237.647	0.15	11.39	-4.65
MST	t	f	MustangCoin					\N	http://mustangcoin.xyz/	X11	PoW/PoS	3000000	630343	0.02275397625635378	\N	328441	0	0.17299	0.0000104	10.160602248	{}	{}	{}	26.7555	0.15	-5.38	-15.87
MAY	t	f	Theresa May Coin					\N		SHA256	PoW/PoS	100000000	25885000	0	\N	0	0	0.00419624	0.00000025	0.2464669956	{}	{}	{}	345.4	-0.36	27.7	33.26
BVC	t	f	BeaverCoin					\N		Scrypt	PoW	3360000	3115258	0	\N	0	0	0.0345852	0.00000208	2.031368639	{}	{}	{}	31.696	0.95	6.51	7.47
JWL	t	f	Jewels					\N	-	POS 3.0	N/A	20000000	20181636	0	\N	0	0	0.00515645	0.00000031	0.302865122	{}	{}	{}	4.24376	-0.03	28.22	16.01
AMMO	t	f	Ammo Rewards					\N		N/A	PoS	77777777	77777777	0	\N	0	0	0.0013307	0.00000008	0.0781589306	{}	{}	{}	5.32278	-0.03	13.39	-32.67
CTO	t	f	Crypto					\N	-	Lyra2RE	PoW	65789100	12385182	0	\N	0	0	0.00815051	0.00000049	0.478721835	{}	{}	{}	205.473	0.15	-0.65	38.81
VC	t	f	VirtualCoin					\N				4000000000	10064287	0	\N	0	0	0.00996984	0.0000006	0.5855805464	{}	{}	{}	0	-45.79	-0.7	-45.46
ZMC	t	f	ZetaMicron					\N				0	600344291	0	\N	0	0	0.000166991	0.00000001	0.0098082498	{}	{}	{}	0	-0.29	-0.26	-49.3
NRO	t	f	Neuro					\N		SHA256	PoW/PoS	20000000	40098446	0	\N	0	0	0.00249505	0.00000015	0.1465472608	{}	{}	{}	393.316	25.19	24.18	-16.01
BLRY	t	f	BillaryCoin					\N	http://billary.rocks/	Scrypt	PoW/PoS	42000000	8992150	0	\N	0	0	0.0106456	0.00000064	0.6252714451	{}	{}	{}	76.2552	0.15	4.1	13.49
WARP	t	f	WARP					\N	-	PoS	PoS	0	1095224	0	\N	0	0	0.0871606	0.00000524	5.1193952731	{}	{}	{}	7.7375	0.15	13.09	1
CAGE	t	f	CageCoin					\N				0	101168328395	0	\N	0	0	0.0000008956	0.00000000005	0.000052602	{}	{}	{}	4.05612	-54.32	75.17	-14.46
SONG	t	f	SongCoin					\N	http://www.songcoin.org/	Scrypt	PoW	210240000	32565300	0	\N	0	0	0.00276893	0.00000017	0.1626336573	{}	{}	{}	289.7	-0.63	-3.9	72.77
EREAL	t	f	eREAL					\N				0	68427562	0	\N	0	0	0.00128116	0.00000008	0.0752491888	{}	{}	{}	149.829	0.31	65.64	5.28
ATX	t	f	Artex Coin					\N		X11	PoW	500000000	18781750	0	\N	0	0	0.00465744	0.00000028	0.2735556699	{}	{}	{}	357.506	7.69	20.92	112.33
CXT	t	f	Coinonat					\N		NIST5	PoW	48252000	8623200	0	\N	0	0	0.0100804	0.00000061	0.5920743101	{}	{}	{}	215.781	2.55	13.52	68.44
PIE	t	f	PIECoin					\N		PoS	PoS	0	12098764	0	\N	0	0	0.00698615	0.00000042	0.4103329175	{}	{}	{}	153.721	11.49	98.44	-1.49
OFF	t	f	Cthulhu Offerings					\N				0	2622273	0	\N	0	0	0.032103	0.00000193	1.8855761256	{}	{}	{}	47.7314	0.29	13.36	0
EXN	t	f	ExchangeN					\N		N/A	N/A	10000000	5100000	0	\N	0	0	0.0163963	0.00000099	0.9630399598	{}	{}	{}	356.02	0.23	246.46	3.69
ASAFE2	t	f	AllSafe					\N		Scrypt	PoS	15000000	8030000	0	\N	0	0	0.01018	0.00000061	0.597924336	{}	{}	{}	332.889	0.07	3.47	3.48
MCRN	t	f	MACRON					\N		PoS	PoS	0	401421401	0	\N	0	0	0.000191954	0.00000001	0.0112744566	{}	{}	{}	113.133	-11.75	-64.38	-11.7
MRJA	t	f	GanjaCoin					\N				0	4451920	0	\N	0	0	0.0167834	0.00000101	0.9857763557	{}	{}	{}	19.1119	-59.56	-79.92	0
EMP	t	f	EMoneyPower					\N				2400000000	9200000	0	\N	0	0	0.00781784	0.00000047	0.459182396	{}	{}	{}	16.6337	0.15	0	0
SPT	t	f	Spots					\N	-	Scrypt	PoW	100000000	22406021	0	\N	0	0	0.00316536	0.00000019	0.1859180527	{}	{}	{}	117.115	-13.27	-11.33	-18.19
FLVR	t	f	FlavorCoin					\N	https://soundcloud.com/flavorcoin	SHA256	PoW/PoS	9000000	20898106	0	\N	0	0	0.00332674	0.0000002	0.1953967392	{}	{}	{}	34.9374	0.15	0	0
ZYD	t	f	Zayedcoin					\N	http://zayedcoin.net/	SHA256	PoW	9736000	6243840	0	\N	0	0	0.0109782	0.00000066	0.6448067726	{}	{}	{}	220.467	0.15	52.29	66.65
DIBC	t	f	DIBCOIN					\N				0	5000000	0	\N	0	0	0.0136797	0.00000082	0.8034799154	{}	{}	{}	220.657	-0.17	31.57	22.77
ORLY	t	f	Orlycoin					\N	-	X15	PoW/PoS	36000000	36646779	0	\N	0	0	0.00182971	0.00000011	0.1074683828	{}	{}	{}	23.5929	0.15	0	-11.48
G3N	t	f	G3N					\N				0	7561891	0	\N	0	0	0.00864952	0.00000052	0.5080312871	{}	{}	{}	324.964	0.29	-16.74	46.17
BTQ	t	f	BitQuark					\N	http://www.bitquark.info/	Multiple	PoW	0	9081731	0	\N	0	0	0.00715249	0.00000043	0.4201029306	{}	{}	{}	217.539	0.29	-0.73	-42.8
BSC	t	f	BowsCoin					\N	http://thebows.ru/	X11	PoW	21000000	5550102	0	\N	0	0	0.0116436	0.0000007	0.6838891747	{}	{}	{}	1.6667	0.15	0	-16.01
JS	t	f	JavaScript Token					\N				0	7991996	0	\N	0	0	0.0079722	0.00000048	0.4682487614	{}	{}	{}	84.1288	0.31	7.92	113.03
ADCN	t	f	Asiadigicoin					\N	http://www.asiadigicoin.org/	Scrypt	PoW	42000000	24931054	0	\N	0	0	0.00254732	0.00000015	0.1496173497	{}	{}	{}	390.815	0.14	-0.7	6.82
CRT	t	f	CRTCoin					\N				0	79270	0	\N	0	0	0.798418	0.000048	46.8952409136	{}	{}	{}	33.2866	0.29	-0.78	1
NTWK	t	f	Network Token					\N				0	11671310	0	\N	0	0	0.00520076	0.00000031	0.3054676788	{}	{}	{}	261.2	0.31	34.75	-1.18
EGO	t	f	EGO					\N	-	PoS	PoS	60000000	60000001	0	\N	0	0	0.000998022	0.00000006	0.0586190218	{}	{}	{}	26.9305	-0.23	0	47.9
FLAX	t	f	Flaxscript					\N				0	5589719	0	\N	0	0	0.010416	0.00000063	0.6117858432	{}	{}	{}	43.5645	0.9	14.41	5.34
PONZI	t	f	PonziCoin					\N				0	861099	0	\N	0	0	0.0672001	0.00000404	3.9470113135	{}	{}	{}	50.6964	11.6	-1.99	18.96
STEPS	t	f	Steps					\N	https://altcoinsteps.com/	N/A	PoS	9243127.173	18625017	0	\N	0	0	0.00299407	0.00000018	0.1758573003	{}	{}	{}	35.3864	0.15	5.06	39.69
FUZZ	t	f	FuzzBalls					\N	http://fyi-koerier.nl/fuzzballs.htm	Scrypt	PoW	21000000	4829945	0	\N	0	0	0.0113109	0.00000068	0.6643479737	{}	{}	{}	41.1937	3.66	-11.95	32.4
DIX	t	f	Dix Asset					\N				0	100000000000	0	\N	0	0	0.0000005462	0.00000000003	0.0000320783	{}	{}	{}	125.348	-37.09	45.68	0
PLNC	t	f	PLNcoin					\N		Scrypt	PoW/PoS	38540000	17089600	0	\N	0	0	0.0031604	0.00000019	0.1856267261	{}	{}	{}	7.16763	-0.03	0	59.92
DPAY	t	f	DPAY					\N	-	X13	PoW/PoS	90400000	79541001	0	\N	0	0	0.000665348	0.00000004	0.0390793478	{}	{}	{}	7.60493	0.15	32.53	-15.79
JOBS	t	f	JobsCoin					\N	http://jobscoin.us/	X11	PoW/PoS	20000000000	106019270	0	\N	0	0	0.000499011	0.00000003	0.0293095109	{}	{}	{}	171.46	0.29	49.02	55.83
FXE	t	f	FuturXe					\N				0	235421	0	\N	0	0	0.221789	0.00001333	13.0268212728	{}	{}	{}	151.324	0.21	-8.15	64.11
DES	t	f	Destiny					\N	http://www.kuboscoin.usa.cc/	Scrypt	PoW/PoS	212625	1600000	0	\N	0	0	0.0322694	0.00000194	1.8953496629	{}	{}	{}	11.8041	0.13	-0.78	0
DLISK	t	f	DAPPSTER					\N	https://dlisk.com/	N/A	DPoS	100000000	100000000	0	\N	0	0	0.000499011	0.00000003	0.0293095109	{}	{}	{}	125.445	0.29	-0.78	1
QBK	t	f	Qibuck Asset					\N	-	X13	PoS/PoB	0	1671379	0	\N	0	0	0.0297426	0.00000179	1.7469375595	{}	{}	{}	0.892278	-9.71	35.98	134.78
CWXT	t	f	CryptoWorldX Token					\N		N/A	PoW/PoS	100000000	59630200	0	\N	0	0	0.000833	0.00000005	0.0489264216	{}	{}	{}	141.78	0.13	-29.19	-11.5
IMPS	t	f	ImpulseCoin					\N		X13	PoW/PoS	0	20245510	0	\N	0	0	0.00232872	0.00000014	0.1367778349	{}	{}	{}	4.42456	0.15	-6.51	-6.32
SLEVIN	t	f	Slevin					\N				0	70000000	0	\N	0	0	0.000665348	0.00000004	0.0390793478	{}	{}	{}	73.3019	-0.03	3	34.67
ARB	t	f	ARbit					\N	http://getaugmented.net/	N/A	PoW/PoS	0	7929975	0	\N	0	0	0.00576366	0.00000031	0.3385297228	{}	{}	{}	0	-43.95	0	-21.16
KIC	t	f	KibiCoin					\N				0	14701000	0	\N	0	0	0.00308191	0.00000019	0.1810166002	{}	{}	{}	7.10973	-0.45	-34.97	-67.04
OS76	t	f	OsmiumCoin					\N		Scrypt	PoW	2714286	894026	0	\N	0	0	0.0500674	0.00000301	2.9407187525	{}	{}	{}	7.00944	0.15	0	-12.39
SFC	t	f	Solarflarecoin					\N		Scrypt	PoW	20000000	14083450	0	\N	0	0	0.00317442	0.00000019	0.1864501936	{}	{}	{}	119.547	0.11	-5.28	-13.03
TOR	t	f	Torcoin					\N	https://bitcointalk.org/index.php?topic=677434.0	X11	PoW/PoS	10000000	316179	0	\N	240022	65930738521.42	0.137727	0.00000828	8.0894228904	{}	{}	{}	8.31685	0.15	-47	-6.37
LIR	t	f	LetItRide					\N	http://letitri.de	POS 3.0	PoS	33500000	36326167	4.4599999859929085	\N	645631	0	0.00116436	0.00000007	0.0683889175	{}	{}	{}	41.2093	0.15	7.09	17.84
CNC	t	f	CHNCoin					\N	-	Scrypt	PoW	462500000	50718735	0	\N	0	0	0.000830535	0.00000005	0.0487816393	{}	{}	{}	0	-37.3	0.3	-36.96
BIOS	t	f	BiosCrypto					\N	-	Quark	PoW/PoS	20190463.54969237	20821709	0	\N	0	0	0.00199604	0.00000012	0.1172378086	{}	{}	{}	12.6795	-0.03	8.24	-36.21
UET	t	f	Useless Ethereum Token					\N		N/A	N/A	3965716.0979	3965716	0	\N	0	0	0.0104159	0.00000063	0.6117799697	{}	{}	{}	90.806	-11.38	0	8.52
PLACO	t	f	PlayerCoin					\N				0	35120000	0	\N	0	0	0.00116436	0.00000007	0.0683889175	{}	{}	{}	5.82179	-2.16	15.9	11.84
PEX	t	f	PosEx					\N		SHA256D	N/A	0	2453240	0	\N	0	0	0.0166337	0.000001	0.9769836962	{}	{}	{}	51.3704	0.29	0	-7.34
HVCO	t	f	High Voltage					\N	-	SHA256	PoW/PoS	1700000	1494171	0	\N	0	0	0.0264476	0.00000159	1.5534050755	{}	{}	{}	6.97085	0.29	37.54	-1.83
DOLLAR	t	f	Dollar Online					\N				0	753776	0	\N	0	0	0.0515645	0.0000031	3.0286512204	{}	{}	{}	153.687	2.2	6.89	64.79
TAGR	t	f	TAGRcoin					\N	http://www.tagrcoin.com/	X15	PoW/PoS	30700000	38669634	0	\N	0	0	0.000998022	0.00000006	0.0586190218	{}	{}	{}	121.052	0.15	-40.16	0
WORM	t	f	HealthyWormCoin					\N		PoS	PoS	0	112133831	0	\N	0	0	0.000332674	0.00000002	0.0195396739	{}	{}	{}	215.855	0.15	-0.78	1
RIDE	t	f	Ride My Car					\N		PoS	PoS	100000000	101276976	0	\N	0	0	0.000332674	0.00000002	0.0195396739	{}	{}	{}	33.656	0.15	-0.78	102.01
GBT	t	f	GameBet Coin					\N	https://www.gamebet.gg/	POS 3.0	PoS	0	21262780	0	\N	0	0	0.00149703	0.00000009	0.0879283565	{}	{}	{}	21.5569	-3.28	-10.7	-51.66
MTM	t	f	MTMGaming					\N				0	2999967	0	\N	0	0	0.0096543	0.00000057	0.5670472414	{}	{}	{}	0	-10.03	0.46	0
ZNE	t	f	Zonecoin					\N	-	Scrypt	PoW/PoS	21000000	2581970	0	\N	0	0	0.0111446	0.00000067	0.6545803099	{}	{}	{}	4.22829	0.15	0	0
MILO	t	f	MiloCoin					\N		Scrypt	PoW/PoS	30015000	10789954	0	\N	0	0	0.00266139	0.00000016	0.1563172739	{}	{}	{}	14.7571	0.15	-38.62	0
AGLC	t	f	AgrolifeCoin					\N				0	7741185	0	\N	0	0	0.0035205	0.00000021	0.2067772716	{}	{}	{}	143.602	-0.08	0.18	205.38
BIOB	t	f	BioBar					\N		SHA256D	PoW/PoS	60000000	885756	0	\N	0	0	0.030606	0.00000184	1.7976495312	{}	{}	{}	38.2412	0.13	-0.65	50.22
ALTC	t	f	Antilitecoin					\N				0	31512613	0	\N	0	0	0.000831685	0.00000005	0.0488491848	{}	{}	{}	123.262	-0.03	-0.78	-15.05
CESC	t	f	CryptoEscudo					\N	http://cryptoescudo.org/	Scrypt	PoW	1000000000	144105100	200	\N	966959	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	118.817	0.15	-0.73	-49.5
ARGUS	t	f	Argus					\N		Scrypt	PoW/PoS	28600000	1148324	0	\N	0	0	0.019916	0.0000012	1.1697702432	{}	{}	{}	338.558	-1.44	14.34	70.28
GBC	t	f	GBCGoldCoin					\N				0	11361817	0	\N	0	0	0.001986	0.00000012	0.1166481072	{}	{}	{}	0.100532	-18.35	77.24	6.5
CRTM	t	f	Corethum					\N		N/A	Proof of Ownership	1100000	2500000	0	\N	0	0	0.00883993	0.00000053	0.5192150565	{}	{}	{}	17.627	0.31	3.8	-12.74
SCS	t	f	Speedcash					\N				0	261831	0	\N	0	0	0.0833348	0.00000501	4.894686145	{}	{}	{}	166.986	0.15	-22.41	-23.14
ROOFS	t	f	Roofs					\N				0	130000000	0	\N	0	0	0.000166325	0.00000001	0.0097691321	{}	{}	{}	490.554	-0.03	-0.66	-25.79
CCM100	t	f	CCMiner					\N				0	3360417	0	\N	0	0	0.00638969	0.00000038	0.3752997201	{}	{}	{}	21.7313	-9.71	172.22	227.03
IBANK	t	f	iBank					\N	-	Scrypt	PoW/PoS	44333333	4526324	0	\N	0	0	0.00465744	0.00000028	0.2735556699	{}	{}	{}	119.862	0.15	6.9	68.56
KNC	t	f	Kyber Network					\N		N/A	N/A	226000000	2008	0	\N	0	0	9.84199	0.00059169	578.071251048	{}	{}	{}	198.967	0.15	-24.89	-32.5
CAB	t	f	Cabbage					\N	-	N/A	PoS	10499999.99999999	10499996	0	\N	0	0	0.00182971	0.00000011	0.1074683828	{}	{}	{}	14.376	-0.06	43.62	10.42
SLFI	t	f	Selfiecoin					\N				0	107829281	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	12.9743	0.29	-0.78	1.14
XOC	t	f	Xonecoin					\N				0	420000	0	\N	0	0	0.0422735	0.00000261	2.4829424772	{}	{}	{}	0	-43.1	-3.26	-42.82
VOLT	t	f	Bitvolt					\N		PoS	PoS	0	15112554	0	\N	0	0	0.00116436	0.00000007	0.0683889175	{}	{}	{}	26.7269	0.15	3.67	52.15
P7C	t	f	P7Coin					\N				0	35220238	0	\N	0	0	0.000499011	0.00000003	0.0293095109	{}	{}	{}	24.5093	0.15	0	0
RSGP	t	f	RSGPcoin					\N				0	1728	0	\N	0	0	9.68664	0.00058235	568.946737728	{}	{}	{}	121.224	0.29	-16.22	-14.76
XRC	t	f	Rawcoin					\N				0	704882	0	\N	0	0	0.0234025	0.00000141	1.374550518	{}	{}	{}	158.518	16.46	-1.69	-2.87
MRNG	t	f	MorningStar					\N				0	32786500	0	\N	0	0	0.0004996	0.00000003	0.0293441059	{}	{}	{}	4.19902	1.16	2.79	103.44
ELS	t	f	Elysium					\N		Scrypt	PoW	18000000	4005012	0	\N	0	0	0.00399209	0.00000024	0.2344762046	{}	{}	{}	9.98022	0.15	-0.78	54.99
GSR	t	f	GeyserCoin					\N				4500000	46864	0	\N	0	0	0.301569	0.00001813	17.7127155288	{}	{}	{}	401.139	0.15	-26	-53.79
OCEAN	t	f	BurstOcean					\N				0	211827	0	\N	0	0	0.0652409	0.00000392	3.8319373097	{}	{}	{}	8.67704	-10.26	9.98	92.74
SOCC	t	f	SocialCoin					\N		Scrypt	PoW	75000000	1384879	0	\N	0	0	0.00864952	0.00000052	0.5080312871	{}	{}	{}	342.503	0.15	-12.55	-9.45
CTIC2	t	f	Coimatic 2.0					\N				102000000	13532750	0	\N	0	0	0.000665348	0.00000004	0.0390793478	{}	{}	{}	42.9971	0.29	32.36	1
NODC	t	f	NodeCoin					\N				0	1678439	0	\N	0	0	0.00532278	0.00000032	0.3126345479	{}	{}	{}	15.9209	0.29	38.04	-2.06
TOKEN	t	f	SwapToken					\N				0	15320585365	0	\N	0	0	0.0000005616	0.00000000003	0.000032988	{}	{}	{}	376.145	0.85	-72.16	271.05
MGM	t	f	Magnum					\N				0	3978626	0	\N	0	0	0.00216238	0.00000013	0.1270078218	{}	{}	{}	8.82002	0.15	-46.26	45.89
SANDG	t	f	Save and Gain					\N	-	SHA256	PoW	0	3064800	0	\N	75045	0	0.00249505	0.00000015	0.1465472608	{}	{}	{}	301.428	0.15	-17.21	-20.05
ULA	t	f	Ulatech					\N				90000000	200261	0	\N	0	0	0.0272793	0.00000164	1.6022551414	{}	{}	{}	40.8602	0.15	24.37	39.04
SOJ	t	f	Sojourn					\N		Scrypt	PoW	10500000000	485214	0	\N	0	0	0.0110009	0.00000066	0.6461400617	{}	{}	{}	0	66.79	-0.58	20.24
CONX	t	f	Concoin					\N				0	744266	0	\N	0	0	0.00715249	0.00000043	0.4201029306	{}	{}	{}	385.544	0.15	12.33	12.77
TRADE	t	f	Tradecoin					\N				25000000	8192629	0	\N	0	0	0.000545722	0.00000003	0.0320530908	{}	{}	{}	0	-34.42	0	-33.9
TSTR	t	f	Tristar Coin					\N				0	5027857	0	\N	0	0	0.000831685	0.00000005	0.0488491848	{}	{}	{}	381.749	0.15	-15.6	-29.92
PIZZA	t	f	PizzaCoin					\N	-	X11	PoW	25000000	1377917	0	\N	0	0	0.00266139	0.00000016	0.1563172739	{}	{}	{}	72.8812	0.15	-0.78	-14.35
XNG	t	f	Enigma					\N		X11	PoW/PoS	5000000	16627	0	\N	0	0	0.216238	0.000013	12.7007821776	{}	{}	{}	315.775	0.15	-16.52	-21.2
LEX	t	f	Lex4All					\N				0	1000000	0	\N	0	0	0.00358825	0.00000022	0.2107565814	{}	{}	{}	0.358825	-9.71	0	0
WBC	t	f	WalletBuildersCoin					\N				0	18820	0	\N	0	0	0.168665	0.00001	9.906572508	{}	{}	{}	0	-48.72	1.17	-49.14
EBT	t	f	Ebittree Coin					\N				0	1264511	0	\N	0	0	0.00240406	0.00000014	0.1412029449	{}	{}	{}	365.71	0.15	617.35	231.47
DGCS	t	f	Digital Credits					\N				0	5826388	0	\N	0	0	0.000332674	0.00000002	0.0195396739	{}	{}	{}	6.90964	0.15	-0.78	1
ABN	t	f	Abncoin					\N				0	67700	0	\N	0	0	0.0159684	0.00000096	0.9379071677	{}	{}	{}	82.915	0.15	4.67	31.26
MNC	t	f	Mincoin					\N	http://www.mincoin.us/	Scrypt	PoW	10000000	4650380	0	\N	0	0	0.00016477	0.00000001	0.0096777989	{}	{}	{}	289.658	16.54	7.48	-0.29
DMB	t	f	Digital Money Bits					\N				50000000	421300	0	\N	0	0	0.000998022	0.00000006	0.0586190218	{}	{}	{}	50.7218	0.15	-25.55	54.84
ENV	t	f	Environ					\N				0	132717518	0	\N	0	0	0.0000030912	0.0000000002	0.0001815617	{}	{}	{}	2.16383	-0.66	-98.13	0.64
CALC	t	f	CaliphCoin					\N	-	SHA256	PoW	189000000	87140	0	\N	0	0	0.00181254	0.00000011	0.1064598994	{}	{}	{}	161.701	-0.23	10.43	23.72
FAL	t	f	Falcoin					\N				200000000	196766	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	33.2674	0.15	-0.33	78.57
APW	t	f	AppleCoin					\N				2100000000	88429	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	73.4045	0.29	-0.73	0.87
ICX	t	f	ICON					\N		N/A	LFT	400230000	0	0	\N	0	0	2.17027	0.00013047	127.471242504	{}	{}	{}	41857500	0.37	7.34	8.4
BCD	t	f	Bitcoin Diamond [Futures]					\N		X13	PoW/PoS	210000000	0	0	\N	0	0	65.0233	0.00390913	3819.15653016	{}	{}	{}	27794300	-3.93	35.46	95.18
SMT	t	f	SmartMesh					\N		N/A	N/A	100000000	0	0	\N	0	0	0.0492801	0.00000296	2.8944765295	{}	{}	{}	15811800	1.43	-1.09	68.12
ATMC	t	f	ATMCoin					\N				0	0	0	\N	0	0	5.00716	0.00030103	294.096544032	{}	{}	{}	15060600	0.27	0.99	7.36
BCX	t	f	BitcoinX [Futures]					\N	http://battlecoinxchange.com/	SHA256	PoS	210000000000	0	0	\N	0	0	0.0640288	0.00000385	3.7607443738	{}	{}	{}	8207470	-1.07	-0.3	0
GTO	t	f	Gifto					\N		N/A	N/A	1000000000	0	0	\N	0	0	0.28069	0.00001687	16.486383288	{}	{}	{}	8050040	-2.29	-6.62	0
CMS	t	f	COMSA [ETH]					\N		N/A	N/A	0	0	0	\N	0	0	3.83753	0.00023071	225.398092056	{}	{}	{}	6935770	0.47	8.61	1.26
CMT	t	f	Comet					\N	https://cometcoin.com/	Scrypt	PoW	2000000	872830	0	\N	0	0	0.220874	0.00001328	12.9730785648	{}	{}	{}	5525180	2.21	-6.48	20.03
AI	t	f	POLY AI					\N				0	0	0	\N	0	0	16.6941	0.00100363	980.53130232	{}	{}	{}	5151720	3.89	4.94	-4.8
B2X	t	f	SegWit2x [Futures]					\N				0	0	0	\N	0	0	614.964	0.036971	36120.0335328	{}	{}	{}	4552850	-2.62	0	221.13
GNX	t	f	Genaro Network					\N				0	0	0	\N	0	0	0.484284	0.00002911	28.4445175968	{}	{}	{}	3178580	2.53	5.19	0
SBTC	t	f	Super Bitcoin					\N		SHA256	PoW	21210000	0	0	\N	0	0	288.336	0.0173344	16935.4726272	{}	{}	{}	3021010	-0.69	11.98	0
USNBT	t	f	NuBits					\N				0	960923	0	\N	0	0	0.990537	0.00005955	58.1793888024	{}	{}	{}	2791450	-0.28	8.87	-1.17
XTZ	t	f	Tezos (Pre-Launch)					\N		N/A	DPoS	0	0	0	\N	0	0	4.98754	0.00029985	292.944159408	{}	{}	{}	2321300	0.83	0	21.67
ITC	t	f	IoT Chain					\N				0	0	0	\N	0	0	1.19094	0.0000716	69.950099088	{}	{}	{}	2152010	0.67	5	11.17
FRGC	t	f	Fargocoin					\N				0	0	0	\N	0	0	10.862	0.00065301	637.9817424	{}	{}	{}	2111610	-0.02	6.69	0.91
BT2	t	f	BT2 [CST]					\N		N/A	N/A	0	0	0	\N	0	0	250.523	0.0150612	14714.5185096	{}	{}	{}	1642530	-0.99	-20.62	61.75
DAT	t	f	Datum					\N		N/A	N/A	2653841597.973272	0	0	\N	0	0	0.0427327	0.00000257	2.509913681	{}	{}	{}	1430410	1.07	2.14	0
TSL	t	f	Energo					\N				0	0	0	\N	0	0	0.261445	0.00001572	15.356024364	{}	{}	{}	1391310	12.27	41.28	697.59
INF	t	f	InfChain					\N				0	0	0	\N	0	0	0.0278237	0.00000167	1.6342305842	{}	{}	{}	1374470	-6.96	15.02	113.24
CLUB	t	f	ClubCoin					\N	http://clubcoin.co/	Scrypt	PoW/PoS	160000000	97931660.31489629	13.483190906544527	\N	479499	0	2.73413	0.00016437	160.589672376	{}	{}	{}	1337940	-0.09	-4.3	-21.11
HWC	t	f	HollyWoodCoin					\N				0	0	0	\N	0	0	18.4829	0.00111117	1085.59682808	{}	{}	{}	1322480	0.15	-8.82	6.55
ORME	t	f	Ormeus Coin					\N		N/A	N/A	200000000	0	0	\N	0	0	2.48058	0.00014913	145.697362416	{}	{}	{}	1271860	-1.9	-1.79	-12.25
REC	t	f	Regalcoin					\N		X11	PoW/PoS	27000000	0	0	\N	0	0	10.281	0.00061808	603.8565912	{}	{}	{}	938628	-3.27	-13.44	-47
VIU	t	f	Viuly					\N		N/A	N/A	1000000000	0	0	\N	0	0	0.0140109	0.00000084	0.8229330137	{}	{}	{}	817673	-7.63	-22.59	-54.6
BTCA	t	f	Bitair					\N		N/A	N/A	1000000000	0	0	\N	0	0	0.0229171	0.00000138	1.3460404519	{}	{}	{}	774155	-1.82	0	0
MDS	t	f	MediShares					\N				0	0	0	\N	0	0	0.0681359	0.0000041	4.0019757137	{}	{}	{}	773880	4.05	7.03	123.98
WC	t	f	WINCOIN					\N	http://www.whitecoinfoundation.org/	Scrypt	PoW/PoS	300000000	248574297.19257	2	\N	400370	1693663165387126	1.36296	0.00008194	80.053728192	{}	{}	{}	772618	1.22	-2.46	58.8
UGT	t	f	UG Token					\N		N/A	N/A	100000000	0	0	\N	0	0	0.760838	0.00004574	44.6879720976	{}	{}	{}	713009	0.31	3.67	15.92
STC	t	f	Santa Coin					\N		N/A	N/A	28000000	0	0	\N	0	0	0.716879	0.0000431	42.1060314408	{}	{}	{}	703535	5.54	0.12	27.38
UBTC	t	f	United Bitcoin					\N				0	0	0	\N	0	0	412.79	0.0248165	24245.303208	{}	{}	{}	676903	-0.11	0.48	0
FIL	t	f	Filecoin [Futures - 6 Month]					\N		N/A	N/A	0	0	0	\N	0	0	19.6891	0.00118369	1156.44322632	{}	{}	{}	670014	-0.03	13.45	73.96
LLT	t	f	LLToken					\N				0	0	0	\N	0	0	0.372789	0.00002241	21.8958364728	{}	{}	{}	665247	0.36	-0.06	19.2
GRX	t	f	GOLD Reward Token					\N		N/A	N/A	20000000	0	0	\N	0	0	2.07739	0.00012489	122.015917128	{}	{}	{}	614345	-2.7	-4.83	-17.76
BTE	t	f	BitSerial					\N	http://bytecoin.biz/	SHA256	PoW	21000000	0	0	\N	0	0	5.43313	0.00032663	319.115977176	{}	{}	{}	593384	4.61	-1.4	-30.7
PRO	t	f	Propy					\N		N/A	N/A	100000000	14057212	0	\N	0	0	0.416823	0.00002506	24.4821822696	{}	{}	{}	554522	0.35	0.8	2.8
ERO	t	f	Eroscoin					\N		N/A	N/A	240000000	0	0	\N	0	0	0.135024	0.00000812	7.9306616448	{}	{}	{}	548892	1.28	20	-17.76
AMM	t	f	MicroMoney					\N				0	0	0	\N	0	0	0.573483	0.00003448	33.6836387016	{}	{}	{}	455803	-0.07	-1.06	0
STORM	t	f	Storm					\N		N/A	N/A	7500000000	0	0	\N	0	0	0.0226326	0.00000136	1.3293302875	{}	{}	{}	374059	3.52	0	0
WRC	t	f	Worldcore					\N		N/A	N/A	245209299	0	0	\N	0	0	0.119044	0.00000716	6.9920731488	{}	{}	{}	297413	-3.95	6.03	0
XIN	t	f	Infinity Economics					\N		SHA256	PoS	9000000	0	0	\N	0	0	0.0247842	0.00000149	1.4557049438	{}	{}	{}	294388	0.15	6.6	1.13
MKR	t	f	Maker					\N		N/A	N/A	1000000	0	0	\N	0	0	1281.96	0.0770701	75296.176992	{}	{}	{}	262910	0.24	-7.12	59.23
MAVRO	t	f	Mavro					\N				0	0	0	\N	0	0	0.166337	0.00001	9.7698369624	{}	{}	{}	223273	-31.93	-50.57	256.56
BSR	t	f	BitSoar					\N				0	0	0	\N	0	0	0.182638	0.00001098	10.7272794576	{}	{}	{}	193647	6.9	-4.05	-6.85
DTR	t	f	Dynamic Trading Rights					\N		N/A	N/A	3750000	0	0	\N	0	0	0.0190789	0.00000115	1.1206030073	{}	{}	{}	154267	0.62	0	0
DAV	t	f	DavorCoin					\N				0	0	0	\N	0	0	19.2896	0.00115967	1132.97851392	{}	{}	{}	149649	3.59	-5.38	0
SBC	t	f	StrikeBitClub					\N	-	Scrypt	PoW	250000000	24215181.725	25	\N	919194	0	0.555067	0.00003337	32.6019712584	{}	{}	{}	145885	-0.11	-5.28	-41.49
SHND	t	f	StrongHands					\N				0	0	0	\N	0	0	0.0000003565	0.00000000002	0.0000209387	{}	{}	{}	138380	2.21	61.32	855.74
GBG	t	f	Golos Gold					\N				0	0	0	\N	0	0	0.173815	0.00001045	10.209058788	{}	{}	{}	138032	7.31	8.83	8.4
CRED	t	f	Verify					\N		N/A	N/A	29997543	0	0	\N	0	0	0.416486	0.00002504	24.4623885072	{}	{}	{}	133058	0.31	2.12	0
ZENGOLD	t	f	ZenGold					\N				0	0	0	\N	0	0	0.0908354	0.00000546	5.3352353861	{}	{}	{}	132360	-0.04	17.51	21.96
TOK	t	f	Tokugawa					\N				0	0	0	\N	0	0	1.85299	0.0001114	108.835738248	{}	{}	{}	132083	-7.04	-10.32	291.57
CAPP	t	f	Cappasity					\N		N/A	N/A	10000000000	0	0	\N	0	0	0.0222051	0.00000133	1.3042209895	{}	{}	{}	129576	-3.9	0	37.36
BTU	t	f	Bitcoin Unlimited (Futures)					\N				0	0	0	\N	0	0	236.152	0.0141972	13870.4349504	{}	{}	{}	125081	-3.38	-13.83	210.31
VASH	t	f	VPNCoin					\N				0	0	0	\N	0	0	0.00948121	0.00000057	0.5568807656	{}	{}	{}	117792	6.18	10.93	46.17
THS	t	f	TechShares					\N		DPoS	DPoS	600000000	0	0	\N	0	0	0.590907	0.00003552	34.7070408264	{}	{}	{}	96345.5	-1.7	1.57	-22.56
BCDN	t	f	BlockCDN					\N				0	0	0	\N	0	0	0.155438	0.00000934	9.1296820176	{}	{}	{}	79552.2	0.53	43.25	92.74
BT1	t	f	BT1 [CST]					\N		N/A	N/A	0	0	0	\N	0	0	19241.1	1.15675	1130129.85672	{}	{}	{}	76810.6	8.53	6.97	19.94
UQC	t	f	Uquid Coin					\N		N/A	N/A	40000000	0	0	\N	0	0	1.33966	0.00008054	78.685198032	{}	{}	{}	62918.4	6.52	-5.81	-9.46
SNOV	t	f	Snovio					\N		N/A	N/A	651129644	0	0	\N	0	0	0.00651588	0.00000039	0.382711515	{}	{}	{}	61562.1	-0.08	13.46	35.31
OCOW	t	f	OCOW					\N				0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	58479.2	0.15	10.3	-97.11
EAG	t	f	EA Coin					\N				100000000	0	0	\N	0	0	2.8628	0.00017211	168.14713056	{}	{}	{}	54909.7	0.15	-7.84	-20.98
SEND	t	f	Social Send					\N		Quark	PoW/PoS	150000000	0	0	\N	0	0	0.110614	0.00000665	6.4969354128	{}	{}	{}	48734.8	4.04	1.5	17.43
B3	t	f	B3Coin					\N	-	X11	PoW/PoS	2000000000	614130862.6851639	888.9731851816177	\N	84058	0	0.000153418	0.000000009	0.0090110369	{}	{}	{}	36865.9	7.45	-4.84	36.33
IFC	t	f	Infinitecoin					\N	http://infinitecoin.com/	Scrypt	PoW	9060000000000000000	90596277248.71335	0.00048828125	\N	2641189	0	0.00016627	0.00000001	0.0097659017	{}	{}	{}	35087.4	0.11	0.71	1279.4
MSD	t	f	MSD					\N				30000000000	0	0	\N	0	0	0.00549335	0.00000033	0.3226530109	{}	{}	{}	33547.2	0.16	-6.15	-36.33
LTG	t	f	LiteCoin Gold					\N		N/A	N/A	84000000	0	0	\N	0	0	0.00758248	0.00000046	0.4453584793	{}	{}	{}	32865.9	-5.93	-19.61	112.07
DEUS	t	f	DeusCoin					\N				0	0	0	\N	0	0	0.452437	0.0000272	26.5739776824	{}	{}	{}	29512.7	-0.03	-0.65	87.85
BOS	t	f	BOScoin					\N		N/A	mFBA	500000000	0	0	\N	0	0	2.67803	0.000161	157.294627656	{}	{}	{}	27030.5	0.78	0	153.07
SIGMA	t	f	SIGMAcoin					\N				0	0	0	\N	0	0	0.0721104	0.00000434	4.2354187661	{}	{}	{}	25776.6	0.24	3.71	32.84
FOR	t	f	FORCE					\N				0	0	0	\N	0	0	0.0128828	0.00000077	0.7566738346	{}	{}	{}	25051.2	1.44	22.39	3.16
AKY	t	f	Akuya Coin					\N				0	0	0	\N	0	0	0.0914854	0.0000055	5.3734132661	{}	{}	{}	23742.5	17.62	16.99	-71.74
EVR	t	f	Everus					\N		N/A	N/A	1000000000	0	0	\N	0	0	0.63954	0.00003845	37.563509808	{}	{}	{}	19758.1	2.73	-4.19	-41.09
KBR	t	f	Kubera Coin					\N				0	0	0	\N	0	0	0.0998022	0.000006	5.8619021774	{}	{}	{}	19750.9	0.15	0	-14.4
BTCM	t	f	BTCMoon					\N		N/A	N/A	21000000	0	0	\N	0	0	0.0200024	0.0000012	1.1748449645	{}	{}	{}	17386	0.14	-12.47	-17.55
DFS	t	f	DFSCoin					\N				210000000	0	0	\N	0	0	0.0132073	0.00000079	0.775733407	{}	{}	{}	14338.3	0.15	-3.49	107.64
ELITE	t	f	Ethereum Lite					\N		N/A	N/A	1000000	0	0	\N	0	0	0.415931	0.00002501	24.4297904712	{}	{}	{}	13316.1	25.58	0.94	53.99
CMP	t	f	Compcoin					\N		N/A	N/A	10000000	0	0	\N	0	0	11.75	0.0007064	690.1386	{}	{}	{}	12535.1	0.15	7.88	14.71
TCOIN	t	f	T-coin					\N				0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	12515	-0.03	-0.65	-42.97
STAR	t	f	Starbase					\N		N/A	N/A	1000000000	0	0	\N	0	0	0.108165	0.0000065	6.353092908	{}	{}	{}	12018.4	0.31	0	0
WILD	t	f	Wild Crypto					\N		N/A	N/A	100000000	0	0	\N	0	0	0.339696	0.00002042	19.9521124992	{}	{}	{}	10655.2	0.3	33.18	27.78
SUR	t	f	Suretly					\N		N/A	N/A	0	0	0	\N	0	0	3.61534	0.00021735	212.347717968	{}	{}	{}	9636.08	2.13	0	-2.98
PKT	t	f	Playkey					\N		N/A	N/A	100000000	0	0	\N	0	0	0.469834	0.00002825	27.5957939568	{}	{}	{}	9400.45	-16.64	0	0
NBIT	t	f	netBit					\N		Scrypt	PoW/PoS	10.5	0	0	\N	0	0	0.122347	0.00000736	7.1860755144	{}	{}	{}	9189.67	0.16	-2.64	23.9
SISA	t	f	SISA					\N				0	0	0	\N	0	0	0.0162999	0.00000098	0.9573778865	{}	{}	{}	8643.48	0.18	-16.94	34.35
YTN	t	f	YENTEN					\N				0	0	0	\N	0	0	0.15634	0.0000094	9.182661168	{}	{}	{}	8519.29	-5.51	-30.48	0
GLS	t	f	GlassCoin					\N				0	0	0	\N	0	0	0.499843	0.00003005	29.3583785736	{}	{}	{}	7237.28	-1.32	-19.42	-22.28
PLX	t	f	PlexCoin					\N		N/A	N/A	1000000000	0	0	\N	0	0	0.0246135	0.00000148	1.4456788452	{}	{}	{}	7020.96	0.23	12.73	24.66
ZBC	t	f	Zilbercoin					\N		Scrypt	PoW/PoS	55000000	0	0	\N	0	0	0.0328139	0.00000197	1.9273309793	{}	{}	{}	6810.76	0.24	27.09	27.26
STU	t	f	bitJob					\N		N/A	N/A	200000000	0	0	\N	0	0	0.0472947	0.00000284	2.7778636634	{}	{}	{}	6665.79	9.9	40.14	34.7
NEOG	t	f	NEO GOLD					\N		N/A	N/A	100000000	0	0	\N	0	0	0.0037773	0.00000023	0.221860471	{}	{}	{}	6484.92	-0.4	-1.01	59.08
IGNIS	t	f	Ignis [Futures]					\N		N/A	N/A	0	0	0	\N	0	0	2.72417	0.00016377	160.004669784	{}	{}	{}	6434.11	0.31	0	14.67
PEC	t	f	Peacecoin					\N	-	X11	PoW	700000000	0	0	\N	0	0	0.0522298	0.00000314	3.067727749	{}	{}	{}	3503.63	0.13	-13.66	-22.28
COR	t	f	CORION					\N		N/A	N/A	0	0	0	\N	0	0	0.647731	0.00003894	38.0446098312	{}	{}	{}	5782.51	6.29	-0.17	-5.01
DUTCH	t	f	Dutch Coin					\N		Scrypt	PoW/PoS	440000000	0	0	\N	0	0	0.000831685	0.00000005	0.0488491848	{}	{}	{}	5721.51	13.12	7.54	152.5
MCR	t	f	Macro					\N				0	0	0	\N	0	0	1.41486	0.00008506	83.102085072	{}	{}	{}	5262.26	0.15	-17.1	-36.17
AIB	t	f	Advanced Internet Blocks					\N	-	Scrypt	PoW	314159265359	0	0	\N	0	0	0.0244032	0.00000147	1.4333268326	{}	{}	{}	5115.6	-0.09	4.62	31.82
ACC	t	f	Accelerator Network					\N		Scrypt	PoW	100000000	223091	0	\N	0	0	0.0935801	0.00000563	5.4964458895	{}	{}	{}	5073.71	-0.22	-5.14	-20.97
QBT	t	f	Qbao					\N		SHA256	PoW/PoS	300000000	0	0	\N	0	0	0.00516474	0.00000031	0.3033520368	{}	{}	{}	4766.84	0.16	1.9	15.16
SND	t	f	Sand Coin					\N		N/A	N/A	2684319	0	0	\N	0	0	0.575137	0.00003458	33.7807867224	{}	{}	{}	4493.53	-4.41	-22.18	-27.33
PNX	t	f	Phantomx					\N				0	0	0	\N	0	0	0.0192951	0.00000116	1.1333015575	{}	{}	{}	4406.64	0.15	-34.02	34.94
BLX	t	f	Blockchain Index					\N		N/A	N/A	372601.2965	0	0	\N	0	0	5.60858	0.00033718	329.421068016	{}	{}	{}	4128.72	0.31	21.1	41.15
FLASH	t	f	Flash					\N		N/A	N/A	900000000	0	0	\N	0	0	0.00777005	0.00000047	0.4563754408	{}	{}	{}	4103.56	-0.31	13.29	4.31
TIE	t	f	TIES Network					\N		N/A	N/A	200000000	0	0	\N	0	0	0.127395	0.00000766	7.482570804	{}	{}	{}	3958.86	0.31	3.22	-13.23
MOTO	t	f	Motocoin					\N		N/A	PoP	40000000	0	0	\N	0	0	0.0253042	0.00000152	1.4862472478	{}	{}	{}	3666.54	0.14	46.77	-0.94
TRDT	t	f	Trident Group					\N				0	0	0	\N	0	0	0.353133	0.00002123	20.7413373816	{}	{}	{}	3500.14	-14.09	-16.54	0
MCI	t	f	Musiconomi					\N		N/A	N/A	100000000	0	0	\N	0	0	0.0664655	0.000004	3.9038644356	{}	{}	{}	3235.81	0.15	17.35	23.08
EVC	t	f	EventChain					\N		N/A	N/A	84000000	0	0	\N	0	0	0.160245	0.00000963	9.412022124	{}	{}	{}	2981.36	0.31	-1.14	193.53
RYZ	t	f	ANRYZE					\N		N/A	N/A	321000000	0	0	\N	0	0	0.0183204	0.0000011	1.0760523581	{}	{}	{}	2784.2	6.12	-10.85	-3.05
PLC	t	f	PlusCoin					\N				0	0	0	\N	0	0	0.000881349	0.00000005	0.0517662098	{}	{}	{}	2726.57	0.31	-0.63	-27.51
BTC2X	t	f	Bitcoin2x					\N				0	0	0	\N	0	0	0.00520477	0.00000031	0.3057032069	{}	{}	{}	2638.44	0.31	37.55	-39.06
WOW	t	f	Wowcoin					\N				0	0	0	\N	0	0	0.000167997	0.00000001	0.0098673374	{}	{}	{}	2470.92	0.18	7.99	0.95
ETT	t	f	EncryptoTel [WAVES]					\N		N/A	N/A	77663987	62131190	0	\N	0	0	0.0754062	0.00000453	4.4289982382	{}	{}	{}	2436.23	-11.49	-13.12	-13.93
HYTV	t	f	Hyper TV					\N				0	0	0	\N	0	0	0.00256312	0.00000015	0.1505453658	{}	{}	{}	2361.21	0.31	14.41	1.58
BAT	t	f	Basic Attention Token					\N		N/A	N/A	1500000000	1000000000	0	\N	0	0	0.0000089435	0.0000000005	0.0005252971	{}	{}	{}	2258.68	3.85	15.59	14.88
BEST	t	f	BestChain					\N		Scrypt	PoW/PoS	0	0	0	\N	0	0	0.00604146	0.00000036	0.3548463614	{}	{}	{}	2232.41	0.03	-12.57	225.91
INDIA	t	f	India Coin					\N				0	0	0	\N	0	0	0.000499011	0.00000003	0.0293095109	{}	{}	{}	2090.8	0.29	48.83	51.5
TRIA	t	f	Triaconta					\N		N/A	N/A	0	0	0	\N	0	0	15.2233	0.00091521	894.14357016	{}	{}	{}	2087.19	0.31	21.74	49.87
OX	t	f	OX Fina					\N				501237838	0	0	\N	0	0	0.000142253	0.000000009	0.0083552584	{}	{}	{}	1807.92	8.68	179.73	-42.16
HDLB	t	f	HODL Bucks					\N				2000000	0	0	\N	0	0	0.155858	0.00000937	9.1543508016	{}	{}	{}	1801.91	0.15	-3.21	41.02
IQT	t	f	iQuant					\N				0	0	0	\N	0	0	0.169697	0.0000102	9.9671872344	{}	{}	{}	1755.64	-1.89	4.32	104.06
TOPAZ	t	f	Topaz Coin					\N				0	0	0	\N	0	0	0.705104	0.00004239	41.4144244608	{}	{}	{}	1712.33	-0.41	-14.85	586.07
STEX	t	f	STEX					\N		N/A	N/A	0	0	0	\N	0	0	2.31663	0.00013927	136.067726376	{}	{}	{}	1707.51	-0.67	55.6	68.9
XQN	t	f	Quotient					\N	http://www.quotientcoin.com/	Scrypt	PoW/PoS	0	0	0	\N	0	0	0.00731883	0.00000044	0.4298729438	{}	{}	{}	1701.87	-0.23	6.53	16.35
SKR	t	f	Sakuracoin					\N		Scrypt	PoW	105100000	0	0	\N	0	0	0.00662274	0.0000004	0.3889879584	{}	{}	{}	1650.42	1.45	4.51	-16.19
IBTC	t	f	iBTC					\N				0	0	0	\N	0	0	0.0112172	0.00000067	0.6588444854	{}	{}	{}	1494.29	0.31	11.08	12.25
NAMO	t	f	NamoCoin					\N		NIST5	PoW/PoS	1200000000	0	0	\N	0	0	0.000101625	0.000000006	0.0059689647	{}	{}	{}	1486.58	0.81	21.66	-54.09
POKE	t	f	PokeCoin					\N				0	0	0	\N	0	0	0.000332674	0.00000002	0.0195396739	{}	{}	{}	1440.78	-0.03	0	102
DBG	t	f	Digital Bullion Gold					\N	http://www.digitalbulliongold.com/	PoS	PoS	15000000	0	0	\N	0	0	0.00182971	0.00000011	0.1074683828	{}	{}	{}	1350.66	0.15	16.27	0
WIC	t	f	Wi Coin					\N		N/A	N/A	100000000	0	0	\N	0	0	0.00266966	0.00000016	0.156803014	{}	{}	{}	1316.32	-0.03	-22.49	6.32
TER	t	f	TerraNova					\N		Scrypt	PoW/PoS	15733333	0	0	\N	0	0	10.0668	0.0006052	591.27551136	{}	{}	{}	1315.84	-7.4	9.91	-17.55
RBBT	t	f	RabbitCoin					\N				0	0	0	\N	0	0	0.0000061918	0.0000000004	0.0003636743	{}	{}	{}	1293.51	0.43	42.2	55.41
PRM	t	f	PrismChain					\N	-	SHA256	PoW/PoS	0	0	0	\N	0	0	0.00216238	0.00000013	0.1270078218	{}	{}	{}	1279.54	-0.03	-22.6	16
BTBC	t	f	Bitbase					\N				100000000	0	0	\N	0	0	0.00399209	0.00000024	0.2344762046	{}	{}	{}	1273.89	0.15	9.7	41.69
EDRC	t	f	EDRCoin					\N	-	SHA256	PoW/PoS	22000000	0	0	\N	0	0	0.0959561	0.00000577	5.6360007247	{}	{}	{}	1191.44	-0.05	14.44	28.31
HALLO	t	f	Halloween Coin					\N	-	X11	PoW/PoS	1500000000	264664216.48817956	1.8458194732666	\N	923936	0	0.000332936	0.00000002	0.0195550625	{}	{}	{}	1181.06	-0.23	-17.62	101.42
PCS	t	f	Pabyosi Coin (Special)					\N		X11	PoW/PoS	31500000000	0	0	\N	0	0	0.0552239	0.00000332	3.2435868113	{}	{}	{}	1159.5	0.13	-0.65	-28.9
BET	t	f	DAO.Casino					\N	-	SHA256	PoW	32000000	167270821	0	\N	0	0	0.00349308	0.00000021	0.2051667524	{}	{}	{}	1158.71	0.15	-51.65	72
MINEX	t	f	Minex					\N		N/A	N/A	30000000	0	0	\N	0	0	0.0157451	0.00000095	0.9247915975	{}	{}	{}	1155.51	-9.87	-21.69	-11.34
NTC	t	f	Natcoin					\N	-	Scrypt	PoW/PoS	0	0	0	\N	0	0	0.0522335	0.00000314	3.0679450692	{}	{}	{}	1140	0.16	-62.59	-42
DMC	t	f	DynamicCoin					\N				0	0	0	\N	0	0	0.0018281	0.00000011	0.1073738191	{}	{}	{}	1114.62	0.37	22.84	-21.99
BLAZR	t	f	BlazerCoin					\N		Scrypt	PoW	294336000	0	0	\N	0	0	0.0017864	0.00000011	0.1049245613	{}	{}	{}	1016.69	0.09	-9.94	27.91
TESLA	t	f	TeslaCoilCoin					\N		N/A	N/A	100000000	0	0	\N	0	0	0.998188	0.00006001	58.6287718176	{}	{}	{}	1011.51	0.15	-0.6	-72.27
XOT	t	f	Internet of Things					\N				21000000	0	0	\N	0	0	2104.32	0.126509	123597.656064	{}	{}	{}	963.969	0.15	-0.73	-8.21
XRY	t	f	Royalties					\N				0	0	0	\N	0	0	0.0000463678	0.000000003	0.002723422	{}	{}	{}	895.075	-6.67	-10.09	-70.2
EXRN	t	f	EXRNchain					\N				0	0	0	\N	0	0	0.0000032049	0.0000000002	0.000188241	{}	{}	{}	878.144	0.24	-16.91	114.47
BUB	t	f	Bubble					\N				0	0	0	\N	0	0	0.0194614	0.00000117	1.1430692213	{}	{}	{}	855.37	3.7	-16.09	10.21
GAY	t	f	GAY Money					\N	http://www.gaycoin.online/	X11	PoW/PoS	10000000000	5661983519.886451	251.6822233994802	\N	663654	0	0.025655	0.00000154	1.506851556	{}	{}	{}	813.116	40.97	55.58	38.35
HIGH	t	f	High Gain					\N				0	0	0	\N	0	0	0.000499011	0.00000003	0.0293095109	{}	{}	{}	810.524	-0.03	-12.18	8.76
VULC	t	f	Vulcano					\N				0	0	0	\N	0	0	0.00299042	0.00000018	0.1756429168	{}	{}	{}	795.953	-13.2	-13.43	-39.46
FUDD	t	f	DimonCoin					\N				0	0	0	\N	0	0	0.000120184	0.000000007	0.0070590313	{}	{}	{}	791.612	0.31	122.69	-91.61
DAY	t	f	Chronologic					\N		N/A	N/A	806812	0	0	\N	0	0	3.31488	0.00019929	194.700139776	{}	{}	{}	780.856	0.15	14.53	-38.46
TELL	t	f	Tellurion					\N	http://tellurion.info/	X11	PoW/PoS	3652422000	0	0	\N	0	0	0.000737336	0.00000004	0.0433075774	{}	{}	{}	771.956	0.98	28.77	210.98
CYC	t	f	Cycling Coin					\N	-	X11	PoW	33000000	0	0	\N	0	0	0.00149703	0.00000009	0.0879283565	{}	{}	{}	746.878	0.15	-18.82	0.53
STARS	t	f	StarCash Network					\N				0	0	0	\N	0	0	0.120879	0.00000727	7.0998522408	{}	{}	{}	743.674	-9.58	-24.14	305.61
EBIT	t	f	eBIT					\N				0	0	0	\N	0	0	0.00560298	0.00000034	0.3290921509	{}	{}	{}	734.725	0.24	113.63	146.9
MARX	t	f	MarxCoin					\N		X11	PoW	100640000	0	0	\N	0	0	0.00221743	0.00000013	0.1302411945	{}	{}	{}	734.353	17.04	22.09	34.92
ABC	t	f	Alphabit					\N		N/A	N/A	210000000	0	0	\N	0	0	68.9608	0.00414585	4050.42638016	{}	{}	{}	727.532	0.67	3.45	211.42
FLAP	t	f	FlappyCoin					\N	http://flappycoin.biz/	Scrypt	PoW	100000000000	0	0	\N	0	0	0.0000163081	0.000000001	0.0009578595	{}	{}	{}	653.915	-0.19	-78.23	-90.05
IRL	t	f	IrishCoin					\N				0	0	0	\N	0	0	0.00332674	0.0000002	0.1953967392	{}	{}	{}	634.892	-3.95	-0.78	-12.05
ACN	t	f	Avoncoin					\N		PoS	PoS	1000000000	0	0	\N	0	0	0.000499011	0.00000003	0.0293095109	{}	{}	{}	604.361	0.15	-0.73	1
QBC	t	f	Quebecoin					\N		X11	N/A	21000000	0	0	\N	0	0	0.00299407	0.00000018	0.1758573003	{}	{}	{}	596.062	0.15	10.29	18.23
FONZ	t	f	Fonziecoin					\N	http://fonziecoin.com/	SHA256	PoW/PoS	0	0	0	\N	0	0	0.00116436	0.00000007	0.0683889175	{}	{}	{}	594.299	0.15	27.51	18.94
FRN	t	f	Francs					\N	http://www.francs.paris/	Scrypt	PoW	20000000	4933694.38929168	17.6470588235294	\N	200227	3324211297	0.0278778	0.00000168	1.6374081586	{}	{}	{}	569.709	0.37	-5.29	22.85
CTIC3	t	f	Coimatic 3.0					\N				102000000	0	0	\N	0	0	0.00498391	0.0000003	0.2927309506	{}	{}	{}	556.587	0.63	14.73	-8.41
SFE	t	f	SafeCoin					\N	https://safecoinclub.com/	N/A	PoW/PoS	0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	555.757	-0.03	-0.78	0
SWP	t	f	Swapcoin					\N				0	0	0	\N	0	0	0.144091	0.00000866	8.4632137032	{}	{}	{}	503.17	0.31	4.29	55.26
MGC	t	f	MergeCoin					\N				0	0	0	\N	0	0	0.00482377	0.00000029	0.2833250957	{}	{}	{}	499.011	0.29	11.03	-3.04
GBRC	t	f	Global Business Revolution					\N	https://gbrcoin.com/	Scrypt	PoW	87500000	0	0	\N	0	0	0.000332674	0.00000002	0.0195396739	{}	{}	{}	444.68	0.15	-0.78	102
APC	t	f	AlpaCoin					\N	http://alpacoin.com/	N/A	PoW	0	22286048	0	\N	0	0	0.0234518	0.00000141	1.3774461634	{}	{}	{}	405.608	0.14	-0.68	-18.72
SKC	t	f	Skeincoin					\N				0	0	0	\N	0	0	0.0317704	0.00000191	1.8660407981	{}	{}	{}	400.41	0.15	-0.78	7.35
EGG	t	f	EggCoin					\N	-	Scrypt	PoW/PoS	3891	0	0	\N	0	0	0.0284436	0.00000171	1.6706405347	{}	{}	{}	396.862	0.15	13.92	-54.43
UNRC	t	f	UniversalRoyalCoin					\N				0	0	0	\N	0	0	0.000833723	0.00000005	0.0489688871	{}	{}	{}	393.948	0.14	-1.79	-25.7
AMS	t	f	AmsterdamCoin					\N	http://www.amsterdamcoin.com/	Quark	PoW/PoS	0	81292775.30868423	4.999999997871263	\N	183679	8608619	0.00432476	0.00000026	0.2540156436	{}	{}	{}	389.649	0.15	-4.91	-16.41
TOP	t	f	TopCoin					\N				0	0	0	\N	0	0	0.000668021	0.00000004	0.039236347	{}	{}	{}	377.69	0.31	1.42	25.53
UAHPAY	t	f	UAHPay					\N				0	0	0	\N	0	0	0.0000865325	0.000000005	0.0050825037	{}	{}	{}	357.347	0.31	-6.66	-6.59
9COIN	t	f	9COIN					\N				0	0	0	\N	0	0	0.00332674	0.0000002	0.1953967392	{}	{}	{}	356.781	0.15	-0.73	-15.79
CC	t	f	CyberCoin					\N	-	Scrypt	PoW/PoS	0	549818319.0091578	4.51357445120811	\N	323256	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	356.704	-0.23	-0.65	0.99
SNAKE	t	f	SnakeEyes					\N				0	0	0	\N	0	0	0.0840629	0.00000505	4.9374512441	{}	{}	{}	352.896	-9.49	35.4	52.44
BCCS	t	f	BitcoinCashScrypt					\N				0	0	0	\N	0	0	0.0499011	0.000003	2.9309510887	{}	{}	{}	349.308	0.15	0	891.46
HYPER	t	f	Hyper					\N	http://hypercrypto.com/	Scrypt	PoW/PoS	0	0	0	\N	0	0	0.0414179	0.00000249	2.4326886401	{}	{}	{}	335.087	0.15	23.53	0
CBD	t	f	CBD Crystals					\N		PoS	N/A	50000000	0	0	\N	0	0	0.00166337	0.0000001	0.0976983696	{}	{}	{}	318.267	0.15	-22.46	-40.75
BTCS	t	f	Bitcoin Scrypt					\N		Scrypt	PoW	21000000	16512238	0	\N	0	0	0.00456699	0.00000027	0.268243071	{}	{}	{}	317.286	0.31	18.31	-42.67
COUPE	t	f	Coupecoin					\N				0	0	0	\N	0	0	0.0000266986	0.000000002	0.0015681476	{}	{}	{}	307.402	-1.66	-50.06	-75.41
KARMA	t	f	Karmacoin					\N				0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	296.269	0.15	-0.78	0
UR	t	f	UR					\N		Dagger	PoW	0	0	0	\N	0	0	0.000997031	0.00000006	0.0585608152	{}	{}	{}	278.485	0.16	19.55	6.12
ZSE	t	f	ZSEcoin					\N		X11	PoW/PoS	2093500000	0	0	\N	0	0	0.0175868	0.00000106	1.0329642154	{}	{}	{}	272.097	-0.74	-13.77	-5.27
MONETA	t	f	Moneta					\N	http://moneta.io/	Scrypt	PoW	184000000	0	0	\N	0	0	0.000499011	0.00000003	0.0293095109	{}	{}	{}	253.564	-24.78	-0.73	0.79
GRN	t	f	Granite					\N				0	0	0	\N	0	0	0.0182971	0.0000011	1.0746838279	{}	{}	{}	226.364	0.15	9.28	0.35
EUSD	t	f	eUSD					\N				0	0	0	\N	0	0	0.000328503	0.00000002	0.0192946894	{}	{}	{}	225.946	0.31	3.96	9.1
ANI	t	f	Animecoin					\N				0	0	0	\N	0	0	0.000332674	0.00000002	0.0195396739	{}	{}	{}	225.533	0.15	-0.73	43.39
IPY	t	f	Infinity Pay					\N				0	0	0	\N	0	0	0.00320651	0.00000019	0.1883350062	{}	{}	{}	224.343	0.31	-25.82	22.16
SKULL	t	f	Pirate Blocks					\N				240000000	0	0	\N	0	0	0.00199222	0.00000012	0.1170134401	{}	{}	{}	221.223	6.4	5.13	-20.74
BAC	t	f	BitAlphaCoin					\N	http://bitalphacoin.com/wp/	N/A	PoW	7850161887.5	0	0	\N	0	0	0.00349308	0.00000021	0.2051667524	{}	{}	{}	217.649	0.15	0	-11.62
PRN	t	f	Protean					\N				0	0	0	\N	0	0	0.00016505	0.00000001	0.0096942448	{}	{}	{}	216.823	0.15	1027.33	1954.77
FRWC	t	f	FrankyWillCoin					\N	-	Scrypt	PoW/PoS	100000000	0	0	\N	0	0	0.00415843	0.00000025	0.2442462177	{}	{}	{}	215.859	0.15	19.62	0
SHA	t	f	SHACoin					\N				0	0	0	\N	0	0	0.00116436	0.00000007	0.0683889175	{}	{}	{}	189.289	0.15	-22.83	9.2
AXIOM	t	f	Axiom					\N	-	N/A	PoW/PoS	0	0	0	\N	0	0	0.0247842	0.00000149	1.4557049438	{}	{}	{}	188.183	0.29	2.01	2.38
PRIMU	t	f	Primulon					\N				750000000	0	0	\N	0	0	0.000311841	0.00000002	0.0183160435	{}	{}	{}	169.783	4.66	-4.44	89.35
GOLF	t	f	Golfcoin					\N				0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	166.337	0.15	-2.85	0
LKC	t	f	LinkedCoin					\N				0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	163.708	0.13	-66.93	1
AV	t	f	AvatarCoin					\N		PoS	PoS	10000000	0	0	\N	0	0	0.0625427	0.00000376	3.673457993	{}	{}	{}	162.492	-0.03	10.51	7.61
LDCN	t	f	LandCoin					\N				0	0	0	\N	0	0	0.00322502	0.00000019	0.1894221947	{}	{}	{}	161.402	0.15	-32.63	93.25
BSN	t	f	Bastonet					\N				0	0	0	\N	0	0	0.000499011	0.00000003	0.0293095109	{}	{}	{}	158.651	0.15	-23.45	23.23
BIT	t	f	First Bitcoin					\N				0	0	0	\N	0	0	0.00998022	0.0000006	0.5861902177	{}	{}	{}	155.19	1.65	-2.28	4.2
DON	t	f	Donationcoin					\N		Scrypt	PoW	90000000	0	0	\N	0	0	0.000832664	0.00000005	0.0489066866	{}	{}	{}	153.166	0.18	-13.2	16.97
QORA	t	f	Qora					\N	http://www.qora.org/	N/A	PoS	10000000000	10000000000	0	\N	0	0	0.288531	0.00001735	16.9469259912	{}	{}	{}	145.901	0.15	-4.04	10.33
TRICK	t	f	TrickyCoin					\N		PoS	PoS	0	0	0	\N	0	0	0.0139723	0.00000084	0.820665835	{}	{}	{}	136.278	-0.03	-0.78	-13.76
RCN	t	f	Ripio Credit Network					\N		N/A	PoW	1000000000	488318724	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	114.281	0.13	-0.65	1
CME	t	f	Cashme					\N				0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	106.856	0.15	-0.78	1
SAK	t	f	Sharkcoin					\N	http://www.sharkcoin.org/	SHA256	PoW	400000000	0	0	\N	0	0	0.00504798	0.0000003	0.2964941149	{}	{}	{}	104.631	-2.81	-20.26	170.96
MMXVI	t	f	MMXVI					\N		N/A	PoW	0	0	0	\N	0	0	0.00299407	0.00000018	0.1758573003	{}	{}	{}	96.4121	-0.23	-28.47	-4.31
OMC	t	f	Omicron					\N	http://delta.investments/	Scrypt	PoW	3371337	10140044.44302932	0	\N	254677	0	0.256658	0.00001543	15.0748589616	{}	{}	{}	94.8001	0.15	6.32	47.16
X2	t	f	X2					\N	-	N/A	N/A	0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	92.942	0.15	0	1.12
LTH	t	f	LAthaan					\N	https://lathaan.com/	PoS	N/A	0	0	0	\N	0	0	0.000332674	0.00000002	0.0195396739	{}	{}	{}	88.4956	0.13	-33.85	-71.14
UNC	t	f	UNCoin					\N	http://www.uncoin.org/	X11	N/A	144000000000	8388608	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	85.7467	0.29	-0.78	1
WINK	t	f	Wink					\N		PoS	PoS	80000000	0	0	\N	0	0	0.000499011	0.00000003	0.0293095109	{}	{}	{}	84.8334	0.15	-0.73	51.5
BXC	t	f	Bitcedi					\N		CryptoNight	PoW	8589869056	0	0	\N	0	0	0.00499313	0.0000003	0.2932724892	{}	{}	{}	78.9501	0.18	-0.14	-5.34
VOYA	t	f	Voyacoin					\N	-	N/A	PoW	0	0	0	\N	0	0	1.177	0.00007076	69.1313304	{}	{}	{}	78.5847	0.15	-0.57	-45.07
XID	t	f	Sphre AIR					\N		N/A	N/A	30820620.1838	0	0	\N	0	0	0.00665348	0.0000004	0.3907934785	{}	{}	{}	75.3523	0.15	-0.73	-17.83
WSX	t	f	WeAreSatoshi					\N		X11	PoW/PoS	0	0	0	\N	0	0	0.00349308	0.00000021	0.2051667524	{}	{}	{}	71.3425	0.15	1.58	51.5
TODAY	t	f	TodayCoin					\N	-	Scrypt	PoW	39200000	0	0	\N	0	0	0.0013307	0.00000008	0.0781589306	{}	{}	{}	68.3322	0.29	-0.78	34.05
FC	t	f	Facecoin					\N		N/A	N/A	20000000	0	0	\N	0	0	0.00368564	0.00000022	0.2164768025	{}	{}	{}	60.092	0.31	5.5	64.41
RHFC	t	f	RHFCoin					\N				0	0	0	\N	0	0	0.00116436	0.00000007	0.0683889175	{}	{}	{}	55.3546	0.29	-0.73	35.17
SHELL	t	f	ShellCoin					\N				0	0	0	\N	0	0	0.0322694	0.00000194	1.8953496629	{}	{}	{}	54.9478	0.15	0	-9.27
XVE	t	f	The Vegan Initiative					\N		PoS	PoS	50000000	0	0	\N	0	0	0.000499011	0.00000003	0.0293095109	{}	{}	{}	53.8516	0.15	0	0
HNC	t	f	Helleniccoin					\N	http://www.helleniccoin.gr/	Scrypt	PoW	100000000	64261380	0	\N	0	0	0.00182971	0.00000011	0.1074683828	{}	{}	{}	46.3302	0.15	-17.53	-13.44
DASHS	t	f	Dashs					\N				0	0	0	\N	0	0	0.0540595	0.00000325	3.1751955444	{}	{}	{}	44.0916	0.15	0.77	22.87
FUTC	t	f	FutCoin					\N	-	X13	PoW/PoS	0	0	0	\N	0	0	0.00216238	0.00000013	0.1270078218	{}	{}	{}	43.8348	0.15	-0.73	-22.41
FAP	t	f	FAPcoin					\N				0	0	0	\N	0	0	0.00114346	0.00000007	0.0671613518	{}	{}	{}	43.5291	0.23	-24.35	-70.76
RUPX	t	f	Rupaya					\N		Scrypt	PoW/PoS	8400000	6117643	0	\N	0	0	0.00365941	0.00000022	0.2149361782	{}	{}	{}	32.5157	0.15	-5.05	53.89
LEPEN	t	f	LePen					\N		SHA256	PoS	1000000000	0	0	\N	0	0	0.0000335795	0.000000002	0.0019722986	{}	{}	{}	30.4495	1.27	-8.23	-68.74
ANTX	t	f	Antimatter					\N				0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	29.9407	0.15	-0.73	1
PRES	t	f	President Trump					\N		N/A	N/A	57968072167	0	0	\N	0	0	0.0039691	0.00000024	0.2331258823	{}	{}	{}	29.2067	0.59	-23.12	-1.57
BITCF	t	f	First Bitcoin Capital					\N				0	0	0	\N	0	0	0.107953	0.00000649	6.3406410456	{}	{}	{}	28.5321	0.15	-0.73	2.54
ELC	t	f	Elacoin					\N	http://elacoin.cc/	Scrypt	PoW	75000000	0	0	\N	0	0	0.111933	0.00000673	6.5744071416	{}	{}	{}	26.5239	0.23	0.86	27.18
FBL	t	f	Faceblock					\N				0	0	0	\N	0	0	0.000881349	0.00000005	0.0517662098	{}	{}	{}	26.4405	0.31	3.71	-55.53
IVZ	t	f	InvisibleCoin					\N	-	N/A	PoS	1000000	0	0	\N	0	0	0.507161	0.00003049	29.7882027672	{}	{}	{}	24.7747	0.29	-0.52	37.66
GUC	t	f	GoldUnionCoin					\N				0	0	0	\N	0	0	0.0374258	0.00000225	2.1982118482	{}	{}	{}	24.054	0.15	-0.78	-29.3
XTD	t	f	XTD Coin					\N				0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	23.2872	0.15	-0.78	0
RUBIT	t	f	RubleBit					\N	http://rublebit.com/	Scrypt	PoW	100000000	0	0	\N	0	0	0.00598813	0.00000036	0.3517140132	{}	{}	{}	21.9873	0.15	2.05	10.2
RUNNERS	t	f	Runners					\N				0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	21.6238	0.15	-0.6	1
EGOLD	t	f	eGold					\N				0	0	0	\N	0	0	0.0218845	0.00000132	1.2853904844	{}	{}	{}	21.1991	0.15	60.11	32.23
CYDER	t	f	Cyder					\N				0	0	0	\N	0	0	0.000332674	0.00000002	0.0195396739	{}	{}	{}	20.0854	0.15	-0.78	1
XSTC	t	f	Safe Trade Coin					\N				0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	18.2971	-0.23	0	0
PI	t	f	PiCoin					\N				2941134	0	0	\N	0	0	0.00582179	0.00000035	0.341944	{}	{}	{}	16.6337	-0.03	0	53.39
YES	t	f	Yescoin					\N		Scrypt	PoW/PoS	0	0	0	\N	0	0	0.000111399	0.000000007	0.0065430425	{}	{}	{}	15.3304	0.17	-33.39	15.22
ACES	t	f	Aces					\N		X13	PoS	100000000	0	0	\N	0	0	0.000332674	0.00000002	0.0195396739	{}	{}	{}	12.9743	0.29	82.53	102
OP	t	f	Operand					\N				0	0	0	\N	0	0	0.00116436	0.00000007	0.0683889175	{}	{}	{}	11.6436	0.15	0	-1.07
MAGN	t	f	Magnetcoin					\N				0	0	0	\N	0	0	0.659658	0.00003966	38.7451445616	{}	{}	{}	11.5819	0.21	1.94	2.56
BITOK	t	f	Bitok					\N		Scrypt	PoS	0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	9.47738	0.15	-0.73	0.65
SPORT	t	f	SportsCoin					\N	http://www.thesportscoin.com/	X11	PoS	20000000	0	0	\N	0	0	0.00166337	0.0000001	0.0976983696	{}	{}	{}	9.06653	0.29	41.74	0
CASH	t	f	Cashcoin					\N	-	Scrypt	PoW/PoS	47433600	46158242	0	\N	1992599	322429395	0.0440683	0.00000265	2.5883604142	{}	{}	{}	8.81349	0.31	3.71	-11.97
BIRDS	t	f	Birds					\N				0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	8.73269	-0.03	-0.65	1
XDE2	t	f	XDE II					\N	-	SHA256	PoS	0	86100.38843564	0	\N	223332	0	2.99457	0.00018003	175.886667864	{}	{}	{}	8.34712	0.29	0	20.22
PAYP	t	f	PayPeer					\N		X11	PoW/PoS	50000000000	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	8.31685	0.29	-0.78	0.99
MBL	t	f	MobileCash					\N				0	0	0	\N	0	0	0.000499011	0.00000003	0.0293095109	{}	{}	{}	6.57064	0.15	-0.78	-8.57
DISK	t	f	DarkLisk					\N	-	X11	PoW/PoS	0	0	0	\N	0	0	0.0013307	0.00000008	0.0781589306	{}	{}	{}	6.46768	0.15	13.45	-7.73
FAZZ	t	f	Fazzcoin					\N		PoS	PoS	0	0	0	\N	0	0	0.00781784	0.00000047	0.459182396	{}	{}	{}	6.21551	0.15	14.71	-5.06
BGR	t	f	Bongger					\N				0	0	0	\N	0	0	0.000309119	0.00000002	0.0181561663	{}	{}	{}	6.18237	-0.45	-4.06	171.46
UTA	t	f	UtaCoin					\N				0	0	0	\N	0	0	0.00216238	0.00000013	0.1270078218	{}	{}	{}	4.58525	0.15	-0.78	1.18
LAZ	t	f	Lazaruscoin					\N	http://lazaruscoin.com/	DPoS	DPoS	10000000	0	0	\N	0	0	0.00166337	0.0000001	0.0976983696	{}	{}	{}	4.31212	0.15	10.24	-15.83
PDG	t	f	PinkDog					\N				0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	3.32674	0.29	-50.39	1
KASHH	t	f	KashhCoin					\N				0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	3.32674	-0.03	0	12.43
TURBO	t	f	TurboCoin					\N				0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	3.32674	0.15	-0.78	1
ELTC2	t	f	eLTC					\N		N/A	N/A	84000000	0	0	\N	0	0	0.000241169	0.00000001	0.0141651094	{}	{}	{}	3.20491	0.31	3.8	-26.27
NBE	t	f	BitCentavo					\N				0	0	0	\N	0	0	0.0000002075	0.00000000001	0.0000121891	{}	{}	{}	2.9966	-5.53	0	22.38
REGA	t	f	Regacoin					\N				0	0	0	\N	0	0	0.00149703	0.00000009	0.0879283565	{}	{}	{}	2.24555	-0.03	-9.42	55.12
CHEAP	t	f	Cheapcoin					\N				0	0	0	\N	0	0	0.000332674	0.00000002	0.0195396739	{}	{}	{}	2.23723	0.15	-0.78	102
RICHX	t	f	RichCoin					\N				0	0	0	\N	0	0	0.00914854	0.00000055	0.5373413266	{}	{}	{}	1.69248	0.15	0	0
MONEY	t	f	MoneyCoin					\N		Scrypt	PoW/PoS	650659833	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	1.66503	0.15	-0.78	0
TERA	t	f	TeraCoin					\N				0	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	1.66337	0.13	-0.65	0.31
PCN	t	f	PeepCoin					\N		N/A	PoW/PoS	40000000000	0	0	\N	0	0	0.000166337	0.00000001	0.009769837	{}	{}	{}	1.66337	0.29	-0.78	0
10MT	t	f	10M Token					\N				0	0	0	\N	0	0	0.00205915	0.00000012	0.1209445871	{}	{}	{}	1.60245	0.31	3.8	-21.17
VGC	t	f	VegasCoin					\N				0	0	0	\N	0	0	0.000152263	0.000000009	0.0089431978	{}	{}	{}	0	0.4	-1.96	10.5
SYNC	t	f	Sync					\N	-	X11	PoW/PoS	1000	1177	0	\N	0	0	924.883	0.048	54323.1879816	{}	{}	{}	0	60.89	0	36.75
GML	t	f	GameLeagueCoin					\N	https://bitcointalk.org/index.php?topic=595779.0	Scrypt	PoW/PoS	500000000	0	0	\N	0	0	0.0150802	0.00000091	0.885738563	{}	{}	{}	13.5512	0.27	-1.15	11.78
FFC	t	f	FireFlyCoin					\N	-	SHA256	PoW	700000000000	0	0	\N	0	0	0.000168476	0.00000001	0.0098954716	{}	{}	{}	0	1.68	0.5	2.3
XAU	t	f	Xaucoin					\N	https://bitcointalk.org/index.php?topic=974426.0	SHA256	PoW	2100000	0	0	\N	0	0	0.0503624	0.00000265	2.9580456365	{}	{}	{}	0	14.64	0	15.24
DUB	t	f	Dubstep					\N	-	X15	PoW/PoS	0	0	0	\N	0	0	0.00293114	0.00000016	0.1721610941	{}	{}	{}	0	10.52	0	11.1
DCRE	t	f	DeltaCredits					\N		N/A	PoS	100000	0	0	\N	0	0	0.246778	0.00001511	14.4945551856	{}	{}	{}	6.67983	0.53	-2.46	-0.95
PSY	t	f	Psilocybin					\N	-	SHA256D	PoW/PoS	4214600	0	0	\N	0	0	0.0300209	0.0000017	1.7632835657	{}	{}	{}	0	7.01	0	7.32
TCR	t	f	TheCreed					\N	http://thecreed.tech/	QuBit	PoW/PoS	0	0	0	\N	0	0	0.000323188	0.00000002	0.0189825118	{}	{}	{}	73.1105	-0.13	-3.61	-1.88
GAIN	t	f	UGAIN					\N				0	0	0	\N	0	0	0.0009041	0.00000005	0.0531024943	{}	{}	{}	0	-7.58	0	17.2
GARY	t	f	President Johnson					\N				0	0	0	\N	0	0	0.190275	0.00000997	11.17584018	{}	{}	{}	0	-17.44	0	-17.98
MEN	t	f	PeopleCoin					\N				0	0	0	\N	0	0	0.0001894	0.00000001	0.0111244469	{}	{}	{}	0	13.74	0	14.33
ASN	t	f	Aseancoin					\N	-	QuBit	PoW/PoS	0	0	0	\N	0	0	0.00415915	0.00000024	0.2442885071	{}	{}	{}	0	14.28	3.42	25.62
YEL	t	f	Yellow Token					\N				21000000	0	0	\N	0	0	0.00182135	0.00000011	0.1069773565	{}	{}	{}	0	-54.07	0.19	-54.79
EDOGE	t	f	EtherDoge					\N				0	0	0	\N	0	0	0.0000007954	0.00000000004	0.0000467196	{}	{}	{}	0	-43.61	0	-39.34
HCC	t	f	Happy Creator Coin					\N	http://hccunited.net/	Scrypt	PoW	100100400000	0	0	\N	0	0	0.00033664	0.00000002	0.0197726177	{}	{}	{}	0	-0.01	0.4	-31.86
BRAIN	t	f	Braincoin					\N	-	X11	PoW/PoS	22000000	10094424	0	\N	0	0	0.00266139	0.00000016	0.1563172739	{}	{}	{}	63.5076	0.15	-6.62	-10.41
\.


--
-- Name: coins coins__idx_pkey; Type: CONSTRAINT; Schema: public; Owner: bitjournal
--

ALTER TABLE ONLY coins
    ADD CONSTRAINT coins__idx_pkey PRIMARY KEY (symbol);


--
-- Name: coins__idx__enable; Type: INDEX; Schema: public; Owner: bitjournal
--

CREATE INDEX coins__idx__enable ON coins USING btree (enable);


--
-- Name: coins__idx__hot; Type: INDEX; Schema: public; Owner: bitjournal
--

CREATE INDEX coins__idx__hot ON coins USING btree (hot);


--
-- Name: coins__idx__pricebtc; Type: INDEX; Schema: public; Owner: bitjournal
--

CREATE INDEX coins__idx__pricebtc ON coins USING btree ("priceBTC");


--
-- Name: coins__idx__pricerub; Type: INDEX; Schema: public; Owner: bitjournal
--

CREATE INDEX coins__idx__pricerub ON coins USING btree ("priceRUB");


--
-- Name: coins__idx__priceusd; Type: INDEX; Schema: public; Owner: bitjournal
--

CREATE INDEX coins__idx__priceusd ON coins USING btree ("priceUSD");


--
-- Name: coins__idx__rating; Type: INDEX; Schema: public; Owner: bitjournal
--

CREATE INDEX coins__idx__rating ON coins USING gin (rating);


--
-- PostgreSQL database dump complete
--

