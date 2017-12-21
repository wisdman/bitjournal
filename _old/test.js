


const IAlgorithm =
['Skein',
'ABC',
'AES',
'Argon2',
'Axiom',
'Base',
'Blake256',
'Blake2b',
'Blake2s',
'Blockchain',
'BOINC',
'Counterparty',
'CPU',
'Dagger-Hashimoto',
'ECDSA',
'Equihash',
'Fresh',
'Fugue256',
'Groestl',
'HEFTY1',
'JHA',
'Keccak',
'KSHAKE320',
'LBRY',
'Lyra2RE',
'Lyra2RE2',
'M7',
'Momentum',
'Multiple',
'NeoScrypt',
'NIST5',
'NXT',
'Pluck',
'Quark',
'Qubit',
'Scrypt',
'Scrypt-Jane',
'Scrypt-N',
'Scrypt-OG',
'SHA-2',
'SHA-256',
'SHA-3',
'Sidechain',
'Smart',
'Smartchain',
'SpreadX11',
'Stanford',
'Transaction',
'Velvet',
'Whirlpool',
'X11',
'X11gost',
'X13',
'X14',
'X15',
'X17',
'Yescrypt']





var algo = {
"INT"    :     "Skein",
"TRMB"    :     "ABC",
"HODL"    :     "AES",
"XZC"    :     "Argon2",
"AXIOM"    :     "Axiom",
"BCY"    :     "base",
"EL"    :     "Base",
"DIME"    :     "base",
"ANI"    :     "base",
"BIOS"    :     "base",
"BTQ"    :     "base",
"CNOTE"    :     "base",
"OFF"    :     "base",
"DOUG"    :     "base",
"FRQ"    :     "base",
"FZ"    :     "base",
"KUMA"    :     "base",
"MUE"    :     "base",
"PRT"    :     "base",
"PHO"    :     "base",
"QB"    :     "base",
"RQC"    :     "base",
"SRC"    :     "base",
"SAK"    :     "base",
"TMC"    :     "base",
"TYC"    :     "base",
"DCR"    :     "Blake256",
"XVC"    :     "Blake256",
"TRUMP"    :     "Blake256",
"HUGE"    :     "Blake256",
"BLC"    :     "Blake256",
"UFC"    :     "Blake256",
"SC"    :     "blake2b",
"XEM"    :     "blockchain",
"LH"    :     "blockchain",
"PEERPLAYS"    :     "blockchain",
"HIRE"    :     "blockchain",
"NXC"    :     "blockchain",
"GRC"    :     "BOINC",
"GEMZ"    :     "Counterparty",
"LTBC"    :     "Counterparty",
"RIC"    :     "CPU",
"MTS"    :     "CPU",
"O2O"    :     "CPU",
"TLS"    :     "CPU",
"WIKI"    :     "CPU",
"XPB"    :     "CPU",
"XMR"    :     "CPU",
"DSH"    :     "CPU",
"BCN"    :     "CPU",
"AEON"    :     "CPU",
"BIC"    :     "CPU",
"BIP"    :     "CPU",
"CRR"    :     "CPU",
"XDN"    :     "CPU",
"FCN"    :     "CPU",
"MCN"    :     "CPU",
"MNT"    :     "CPU",
"NPT"    :     "CPU",
"OEC"    :     "CPU",
"QCN"    :     "CPU",
"XCI"    :     "CPU",
"XPM"    :     "CPU",
"DTC"    :     "CPU",
"BBR"    :     "CPU",
"DNC"    :     "CPU",
"ETH"    :     "Dagger-Hashimoto",
"ETC"    :     "Dagger-Hashimoto",
"EXP"    :     "Dagger-Hashimoto",
"ELE"    :     "Dagger-Hashimoto",
"KR"    :     "Dagger-Hashimoto",
"SHF"    :     "Dagger-Hashimoto",
"SOIL"    :     "Dagger-Hashimoto",
"XRP"    :     "ECDSA",
"ZEC"    :     "Equihash",
"ZCL"    :     "Equihash",
"KMD"    :     "Equihash",
"FRSH"    :     "Fresh",
"FC"    :     "Fugue256",
"TWE"    :     "Fugue256",
"AID"    :     "Groestl",
"ATH"    :     "Groestl",
"DMD"    :     "Groestl",
"GRS"    :     "Groestl",
"HVC"    :     "HEFTY1",
"MNR"    :     "HEFTY1",
"MLS"    :     "HEFTY1",
"MED"    :     "Scrypt,Hash256",
"JPC"    :     "JHA",
"365"    :     "Keccak",
"BCT"    :     "Keccak",
"CLR"    :     "Keccak",
"METH"    :     "Keccak",
"GLN"    :     "Keccak",
"HXC"    :     "Keccak",
"MAX"    :     "Keccak",
"SLOTH"    :     "Keccak",
"WEC"    :     "Keccak",
"KHC"    :     "KSHAKE320",
"LBC"    :     "LBRY",
"VTC"    :     "Lyra2RE",
"MONA"    :     "Lyra2RE",
"LYB"    :     "Lyra2RE",
"ZOOM"    :     "Lyra2RE2",
"XCN"    :     "M7",
"BCR"    :     "Momentum,",
"MMC"    :     "Momentum,",
"NRS"    :     "Momentum,",
"PTS"    :     "Momentum,",
"J"    :     "Multiple",
"FTC"    :     "NeoScrypt",
"ORB"    :     "NeoScrypt",
"UFO"    :     "NeoScrypt",
"UPM"    :     "NIST5",
"FIBRE"    :     "NIST5",
"ICB"    :     "NIST5",
"XLR"    :     "Nist5",
"TAC"    :     "NIST5",
"NAUT"    :     "NXT",
"INDEX"    :     "NXT",
"CNMT"    :     "NXT",
"HZ"    :     "NXT",
"UNITY"    :     "NXT",
"SUP"    :     "Pluck",
"VOYA"    :     "Pluck",
"DNET"    :     "Quark",
"QRK"    :     "Quark",
"GEO"    :     "Qubit",
"Q2C"    :     "Qubit",
"LTC"    :     "Scrypt",
"DOGE"    :     "Scrypt",
"SYS"    :     "Scrypt",
"POT"    :     "Scrypt",
"BLK"    :     "Scrypt",
"VIA"    :     "Scrypt",
"VRC"    :     "Scrypt",
"BELA"    :     "Scrypt",
"FLO"    :     "Scrypt",
"BCC"    :     "Scrypt",
"NOTE"    :     "Scrypt",
"BTM"    :     "Scrypt",
"NVC"    :     "Scrypt",
"FST"    :     "Scrypt",
"VOX"    :     "Scrypt",
"ARC"    :     "Scrypt",
"SXC"    :     "Scrypt",
"CRC"    :     "Scrypt",
"BTA"    :     "Scrypt",
"SLR"    :     "Scrypt",
"CREVA"    :     "Scrypt",
"HNC"    :     "Scrypt",
"LDC"    :     "Scrypt",
"DMC"    :     "Scrypt",
"ISK"    :     "Scrypt",
"1CR"    :     "Scrypt",
"2GIVE"    :     "Scrypt",
"42"    :     "Scrypt",
"66"    :     "Scrypt",
"AIR"    :     "Scrypt",
"AUM"    :     "Scrypt",
"ALN"    :     "Scrypt",
"ALF"    :     "Scrypt",
"AMC"    :     "Scrypt",
"AMY"    :     "Scrypt",
"ANC"    :     "Scrypt",
"ANT"    :     "Scrypt",
"APH"    :     "Scrypt",
"APP"    :     "Scrypt",
"ABY"    :     "Scrypt",
"ARCH"    :     "Scrypt",
"ARG"    :     "Scrypt",
"ARI"    :     "Scrypt",
"AC"    :     "Scrypt",
"ADCN"    :     "Scrypt",
"ASR"    :     "Scrypt",
"BAT"    :     "Scrypt",
"BQC"    :     "Scrypt",
"BEC"    :     "Scrypt",
"BEA"    :     "Scrypt",
"BVC"    :     "Scrypt",
"BEE"    :     "scrypt",
"BEER"    :     "Scrypt",
"BELI"    :     "Scrypt",
"BEL"    :     "Scrypt",
"BIL"    :     "Scrypt",
"BTB"    :     "Scrypt",
"BTCS"    :     "Scrypt",
"BTG"    :     "Scrypt",
"BITS"    :     "Scrypt",
"BLTZ"    :     "Scrypt",
"BONES"    :     "Scrypt",
"CAP"    :     "Scrypt",
"TALK"    :     "Scrypt",
"BUR"    :     "Scrypt",
"CAGE"    :     "Scrypt",
"CDN"    :     "Scrypt",
"CCN"    :     "Scrypt",
"CARB"    :     "scrypt",
"CARB"    :     "Scrypt",
"CASH"    :     "Scrypt",
"CSC"    :     "Scrypt",
"CAT"    :     "Scrypt",
"CHA"    :     "Scrypt",
"CNC"    :     "Scrypt",
"CIN"    :     "Scrypt",
"CINNI"    :     "Scrypt",
"WATER"    :     "Scrypt",
"CDC"    :     "Scrypt",
"CLUB"    :     "Scrypt",
"COIN"    :     "Scrypt",
"JBS"    :     "Scrypt",
"CNO"    :     "Scrypt",
"COYE"    :     "Scrypt",
"COL"    :     "Scrypt",
"COMM"    :     "Scrypt",
"CORG"    :     "Scrypt",
"CMC"    :     "Scrypt",
"CR"    :     "Scrypt",
"CRD"    :     "Scrypt",
"CRT"    :     "Scrypt",
"BUK"    :     "Scrypt",
"CBX"    :     "Scrypt",
"CESC"    :     "Scrypt",
"CGA"    :     "Scrypt",
"DRS"    :     "Scrypt",
"DIGS"    :     "Scrypt",
"DOGED"    :     "Scrypt",
"DOPE"    :     "Scrypt",
"DBL"    :     "Scrypt",
"DUCK"    :     "Scrypt",
"EAC"    :     "Scrypt",
"ELCO"    :     "Scrypt",
"EBST"    :     "Scrypt",
"EBT"    :     "Scrypt",
"ECC"    :     "Scrypt",
"EDU"    :     "Scrypt",
"EMC2"    :     "Scrypt",
"KRN"    :     "Scrypt",
"VOLT"    :     "scrypt",
"EFL"    :     "Scrypt",
"ELP"    :     "scrypt",
"EMD"    :     "Scrypt",
"EMO"    :     "Scrypt",
"ETOK"    :     "Scrypt",
"EUK"    :     "Scrypt",
"EPC"    :     "Scrypt",
"EXC"    :     "Scrypt",
"EZC"    :     "Scrypt",
"FAIL"    :     "Scrypt",
"FAC"    :     "Scrypt",
"TIPS"    :     "Scrypt",
"FLAP"    :     "Scrypt",
"FLN"    :     "Scrypt",
"FLT"    :     "Scrypt",
"FRX"    :     "Scrypt",
"FOX"    :     "Scrypt",
"FRK"    :     "Scrypt",
"FSC"    :     "Scrypt",
"FRY"    :     "Scrypt",
"GAC"    :     "scrypt",
"GLX"    :     "Scrypt",
"GAM"    :     "Scrypt",
"GME"    :     "Scrypt",
"GMC"    :     "Scrypt",
"GER"    :     "Scrypt",
"GHC"    :     "Scrypt",
"BST"    :     "Scrypt",
"GLC"    :     "Scrypt",
"GCR"    :     "Scrypt",
"GOAL"    :     "Scrypt",
"GLD"    :     "Scrypt",
"GBC"    :     "Scrypt",
"GRA"    :     "Scrypt",
"GDC"    :     "Scrypt",
"GRCE"    :     "Scrypt",
"GRW"    :     "Scrypt",
"GRUMP"    :     "Scrypt",
"NLG"    :     "Scrypt",
"GUN"    :     "Scrypt",
"HEX"    :     "Scrypt",
"HBN"    :     "Scrypt",
"HOT"    :     "Scrypt",
"HOC"    :     "Scrypt",
"HYC"    :     "Scrypt",
"IPC"    :     "Scrypt",
"IFC"    :     "Scrypt",
"ITC"    :     "Scrypt",
"WOLF"    :     "Scrypt",
"ISR"    :     "Scrypt",
"iTi"    :     "Scrypt",
"IEC"    :     "Scrypt",
"JKC"    :     "Scrypt",
"KZC"    :     "Scrypt",
"MEOW"    :     "scrypt",
"KDC"    :     "Scrypt",
"KGC"    :     "Scrypt",
"LEAF"    :     "Scrypt",
"LBW"    :     "Scrypt",
"LGD"    :     "Scrypt",
"LPC"    :     "Scrypt",
"LTB"    :     "Scrypt",
"LTCD"    :     "Scrypt",
"LOT"    :     "Scrypt",
"LOVE"    :     "Scrypt",
"LKY"    :     "Scrypt",
"LYC"    :     "Scrypt",
"MIM"    :     "Scrypt",
"MAGI"    :     "Scrypt",
"MPL"    :     "Scrypt",
"MTC"    :     "Scrypt",
"MRS"    :     "Scrypt",
"MXT"    :     "Scrypt",
"MEC"    :     "Scrypt",
"MEM"    :     "Scrypt",
"MNC"    :     "Scrypt",
"MINT"    :     "Scrypt",
"MONETA"    :     "Scrypt",
"MOON"    :     "Scrypt",
"MVC"    :     "Scrypt",
"GOX"    :     "Scrypt",
"NAN"    :     "scrypt",
"NEC"    :     "Scrypt",
"NTC"    :     "Scrypt",
"NET"    :     "Scrypt",
"NWC"    :     "Scrypt",
"NEU"    :     "Scrypt",
"NTR"    :     "Scrypt",
"NIB"    :     "Scrypt",
"NOBL"    :     "Scrypt",
"NRB"    :     "Scrypt",
"NYAN"    :     "Scrypt",
"NBL"    :     "Scrypt",
"888"    :     "Scrypt",
"OIL"    :     "Scrypt",
"OK"    :     "Scrypt",
"OMC"    :     "Scrypt",
"OGC"    :     "Scrypt",
"OP"    :     "Scrypt",
"OC"    :     "Scrypt",
"P7C"    :     "Scrypt",
"PND"    :     "Scrypt",
"PAND"    :     "Scrypt",
"PAWN"    :     "Scrypt",
"PZR"    :     "Scrypt",
"PEC"    :     "Scrypt",
"PENG"    :     "Scrypt",
"PPL"    :     "Scrypt",
"PTC"    :     "Scrypt",
"PHS"    :     "Scrypt",
"PXC"    :     "Scrypt",
"PI"    :     "Scrypt",
"PLNC"    :     "Scrypt",
"PCC"    :     "Scrypt",
"PWC"    :     "Scrypt",
"PCN"    :     "Scrypt",
"PRC"    :     "Scrypt",
"PXL"    :     "Scrypt",
"QTL"    :     "Scrypt",
"RBBT"    :     "Scrypt",
"RAIN"    :     "Scrypt",
"RPD"    :     "Scrypt",
"RZR"    :     "Scrypt",
"RED"    :     "Scrypt",
"RDD"    :     "Scrypt",
"RHC"    :     "Scrypt",
"RIPO"    :     "Scrypt",
"RPC"    :     "Scrypt",
"ROOT"    :     "Scrypt",
"RYC"    :     "Scrypt",
"Rubit"    :     "Scrypt",
"RUBY"    :     "Scrypt",
"SMB"    :     "Scrypt",
"SPH"    :     "Scrypt",
"SAT2"    :     "Scrypt",
"SAT"    :     "Scrypt",
"SCORE"    :     "Scrypt",
"SMBR"    :     "Scrypt",
"XSX"    :     "Scrypt",
"SHADE"    :     "Scrypt",
"SDC"    :     "Scrypt",
"SHIBE"    :     "Scrypt",
"SOC"    :     "Scrypt",
"XBOT"    :     "Scrypt",
"SONG"    :     "Scrypt",
"SVC"    :     "Scrypt",
"SPN"    :     "Scrypt",
"SPEC"    :     "Scrypt",
"SPT"    :     "Scrypt",
"SBC"    :     "Scrypt",
"SUN"    :     "scrypt",
"SRG"    :     "Scrypt",
"SCN"    :     "Scrypt",
"SYN"    :     "Scrypt",
"TCO"    :     "Scrypt",
"TAG"    :     "Scrypt",
"TESLA"    :     "Scrypt",
"FUNK"    :     "Scrypt",
"TIX"    :     "Scrypt",
"TTC"    :     "Scrypt",
"TOP"    :     "Scrypt",
"TROLL"    :     "Scrypt",
"UNI"    :     "Scrypt",
"USC"    :     "Scrypt",
"USDE"    :     "Scrypt",
"VLC"    :     "Scrypt",
"VGC"    :     "Scrypt",
"VTA"    :     "Scrypt",
"VPN"    :     "Scrypt",
"WC"    :     "Scrypt",
"WBB"    :     "Scrypt",
"WDC"    :     "Scrypt",
"XNC"    :     "Scrypt",
"MI"    :     "Scrypt",
"XIV"    :     "Scrypt",
"XXL"    :     "Scrypt",
"YACC"    :     "Scrypt",
"YC"    :     "Scrypt",
"YANG"    :     "Scrypt",
"YSH"    :     "Scrypt",
"ZED"    :     "Scrypt",
"ZEIT"    :     "scrypt",
"ZMB"    :     "Scrypt",
"MYR"    :     "Scrypt,",
"GIV"    :     "Scrypt,",
"XVG"    :     "Scrypt,X17,Groestl,Blake2s,Lyra2RE2",
"LEO"    :     "Scrypt-jane",
"BTL"    :     "Scrypt-jane",
"BDC"    :     "Scrypt-jane",
"CACH"    :     "Scrypt-jane",
"CPR"    :     "Scrypt-jane",
"FRE"    :     "Scrypt-jane",
"MRC"    :     "Scrypt-jane",
"ONC"    :     "Scrypt-jane",
"CENT"    :     "Scrypt-jane",
"QQC"    :     "Scrypt-Jane",
"THOR"    :     "Scrypt-jane",
"UTC"    :     "Scrypt-jane",
"VEL"    :     "Scrypt-jane",
"YAC"    :     "Scrypt-jane",
"YBC"    :     "Scrypt-jane",
"ZCC"    :     "Scrypt-jane",
"CAI"    :     "Scrypt-N",
"CATC"    :     "Scrypt-N",
"CZC"    :     "Scrypt-N",
"ELC"    :     "Scrypt-N",
"EMU"    :     "Scrypt-N",
"ENC"    :     "Scrypt-N",
"EXE"    :     "Scrypt-N",
"GNS"    :     "Scrypt-N",
"GIAR"    :     "Scrypt-N",
"GPUC"    :     "Scrypt-N",
"GTC"    :     "Scrypt-N",
"H2O"    :     "Scrypt-N",
"KMC"    :     "Scrypt-N",
"MRY"    :     "Scrypt-N",
"PANDA"    :     "Scrypt-N",
"RT2"    :     "Scrypt-N",
"XSV"    :     "Scrypt-N",
"SPA"    :     "Scrypt-N",
"SPD"    :     "Scrypt-N",
"10-5"    :     "Scrypt-N",
"VMC"    :     "Scrypt-N",
"WAC"    :     "Scrypt-N",
"MON"    :     "Scrypt-N,",
"PLX"    :     "Scrypt-N,",
"ADN"    :     "Scrypt-OG",
"BTC"    :     "SHA-256",
"STEEM"    :     "SHA-256",
"NEOS"    :     "SHA-256",
"PPC"    :     "SHA-256",
"PASC"    :     "SHA-256",
"BTCD"    :     "SHA-256",
"EMC"    :     "SHA-256",
"CURE"    :     "SHA-256",
"BCU"    :     "SHA-256",
"ACOIN"    :     "SHA-256",
"ARB"    :     "SHA-256",
"ARK"    :     "SHA-256",
"ASC"    :     "SHA-256",
"AU"    :     "SHA-256",
"BNCR"    :     "SHA-256",
"BCX"    :     "SHA-256",
"BEN"    :     "SHA-256",
"BET"    :     "SHA-256",
"BIG"    :     "SHA-256",
"BITB"    :     "SHA-256",
"BCc"    :     "SHA-256",
"BTU"    :     "SHA-256",
"BTN"    :     "SHA-256",
"BNS"    :     "SHA-256",
"BFC"    :     "SHA-256",
"BTE"    :     "SHA-256",
"DIEM"    :     "SHA-256",
"CCC"    :     "SHA-256",
"CTM"    :     "SHA-256",
"XXC"    :     "SHA-256",
"CRW"    :     "SHA-256",
"CREA"    :     "SHA-256",
"DVC"    :     "SHA-256",
"IQD"    :     "SHA-256",
"EC"    :     "SHA-256",
"EDRC"    :     "SHA-256",
"DEM"    :     "SHA-256",
"EVO"    :     "SHA-256",
"IOP"    :     "SHA-256",
"FFC"    :     "SHA-256",
"FRC"    :     "SHA-256",
"FUD"    :     "SHA-256",
"FUEL"    :     "SHA-256",
"GLB"    :     "SHA-256",
"GRT"    :     "SHA-256",
"HAM"    :     "SHA-256",
"HPC"    :     "SHA-256",
"HKC"    :     "SHA-256",
"I0C"    :     "SHA-256",
"NKA"    :     "SHA-256",
"IXC"    :     "SHA-256",
"JIF"    :     "SHA-256",
"XJO"    :     "SHA-256",
"MZC"    :     "SHA-256",
"MMXIV"    :     "SHA-256",
"NYM"    :     "SHA-256",
"NPC"    :     "SHA-256",
"OSC"    :     "SHA-256",
"ORO"    :     "SHA-256",
"PKB"    :     "SHA-256",
"XPY"    :     "SHA-256",
"PRO"    :     "SHA-256",
"PT"    :     "SHA-256",
"PLC"    :     "SHA-256",
"PEX"    :     "SHA-256",
"PR"    :     "SHA-256",
"PWNY"    :     "SHA-256",
"SPC"    :     "SHA-256",
"BALLS"    :     "SHA-256",
"SSD"    :     "SHA-256",
"SPRTS"    :     "SHA-256",
"STC"    :     "SHA-256",
"STA"    :     "SHA-256",
"STY"    :     "SHA-256",
"TAK"    :     "SHA-256",
"TEA"    :     "SHA-256",
"TEK"    :     "SHA-256",
"TRC"    :     "SHA-256",
"TGC"    :     "SHA-256",
"TIT"    :     "SHA-256",
"UNAT"    :     "SHA-256",
"UNB"    :     "SHA-256",
"UNIC"    :     "SHA-256",
"UNIT"    :     "SHA-256",
"UNO"    :     "SHA-256",
"WKC"    :     "SHA-256",
"ZET"    :     "SHA-256",
"PMC"    :     "SHA-256",
"NMC"    :     "SHA-256,",
"DEUR"    :     "SHA-256,",
"DVK"    :     "SHA-256,",
"DVK"    :     "SHA-256,",
"DVK"    :     "SHA-256,",
"SFR"    :     "SHA-256,",
"10K"    :     "SHA-256,",
"DGC"    :     "SHA-256,",
"NXS"    :     "SHA-3",
"HUC"    :     "SHA-256,",
"DGB"    :     "SHA-256,Scrypt,Qubit,Skein,Groestl",
"AUR"    :     "SHA-256,Scrypt,Qubit,Skein,Groestl",
"LISK"    :     "Sidechain",
"NGC"    :     "Skein,SHA2",
"SKC"    :     "Skein,SHA2",
"XDC"    :     "Skein,SHA2",
"REP"    :     "Smart",
"PLBT"    :     "Smart",
"ICN"    :     "Smart",
"YOC"    :     "Smart",
"DGD"    :     "Smart",
"RADS"    :     "Smartchain",
"SPR"    :     "SpreadX11",
"FLDC"    :     "Stanford",
"BTS"    :     "Transaction",
"FCT"    :     "Transaction",
"NXT"    :     "Transaction",
"MAID"    :     "Transaction",
"BURST"    :     "Transaction",
"CLAM"    :     "Transaction",
"XCP"    :     "Transaction",
"WAVES"    :     "Transaction",
"ADT"    :     "Transaction",
"BANX"    :     "Transaction",
"BIGUP"    :     "Transaction",
"BILS"    :     "Transaction",
"C2"    :     "Transaction",
"ETCC"    :     "Transaction",
"GRID"    :     "Transaction",
"LAT"    :     "Transaction",
"NBT"    :     "Transaction",
"NSR"    :     "Transaction",
"QORA"    :     "Transaction",
"CELL"    :     "Transaction",
"XLM"    :     "Transaction",
"XAU"    :     "Transaction",
"FCX"    :     "Velvet",
"WHRL"    :     "Whirlpool",
"DASH"    :     "X11",
"PINK"    :     "X11",
"TX"    :     "X11",
"BSD"    :     "X11",
"UNC"    :     "X11",
"ADZ"    :     "X11",
"BLU"    :     "X11",
"ACH"    :     "X11",
"BDG"    :     "X11",
"BANK"    :     "X11",
"BNT"    :     "X11",
"BTX"    :     "X11",
"BOLI"    :     "X11",
"BRIG"    :     "X11",
"CANN"    :     "X11",
"CPC"    :     "X11",
"CRPC"    :     "X11",
"CKC"    :     "X11",
"CHIP"    :     "X11",
"CYC"    :     "X11",
"CRYPT"    :     "X11",
"DRKC"    :     "X11",
"DP"    :     "X11",
"ESC"    :     "X11",
"ERC"    :     "X11",
"FRAC"    :     "X11",
"GIVE"    :     "X11",
"GDN"    :     "X11",
"GLYPH"    :     "X11",
"XGR"    :     "X11",
"GRN"    :     "X11",
"GSM"    :     "X11",
"HASH"    :     "X11",
"H5C"    :     "X11",
"HIRO"    :     "X11",
"HYP"    :     "X11",
"INFX"    :     "X11",
"IOC"    :     "X11",
"JUG"    :     "X11",
"KARM"    :     "X11",
"KNC"    :     "X11",
"LOL"    :     "X11",
"LEVO"    :     "X11",
"LGBTQ"    :     "X11",
"XLB"    :     "X11",
"LXC"    :     "X11",
"LIT"    :     "X11",
"LIMX"    :     "X11",
"LKC"    :     "X11",
"LTCX"    :     "X11",
"LGC"    :     "X11",
"MNS"    :     "X11",
"MAST"    :     "X11",
"MIL"    :     "X11",
"MIN"    :     "X11",
"MWC"    :     "X11",
"MUN"    :     "X11",
"PIGGY"    :     "X11",
"PXI"    :     "X11",
"PYRA"    :     "X11",
"QBC"    :     "X11",
"QUID"    :     "X11",
"XRA"    :     "X11",
"SCRT"    :     "X11",
"SHELL"    :     "X11",
"SIS"    :     "X11",
"SIGN"    :     "X11",
"SNET"    :     "X11",
"SMC"    :     "X11",
"START"    :     "X11",
"SUPER"    :     "X11",
"TKT"    :     "X11",
"TWC"    :     "X11",
"UNVC"    :     "X11",
"URO"    :     "X11",
"VC"    :     "X11",
"WEST"    :     "X11",
"CHILD"    :     "X11",
"XC"    :     "X11",
"XURO"    :     "X11",
"SIB"    :     "X11gost",
"XBC"    :     "X13",
"NAV"    :     "X13",
"CLOAK"    :     "X13",
"AERO"    :     "X13",
"AMBER"    :     "X13",
"APEX"    :     "X13",
"AXIS"    :     "X13",
"XBL"    :     "X13",
"BOOM"    :     "X13",
"COCO"    :     "X13",
"DIG"    :     "X13",
"DOS"    :     "X13",
"XHC"    :     "X13",
"JUDGE"    :     "X13",
"KEY"    :     "X13",
"MAMM"    :     "X13",
"MARU"    :     "X13",
"NOAH"    :     "X13",
"PAR1"    :     "X13",
"PAR25"    :     "X13",
"PER"    :     "X13",
"PFC"    :     "X13",
"PSEUD"    :     "X13",
"SSV"    :     "X13",
"XST"    :     "X13",
"SLG"    :     "X13",
"USE"    :     "X13",
"VEIL"    :     "X13",
"VTX"    :     "X13",
"ZIPC"    :     "X13",
"ALI"    :     "X14",
"BBL"    :     "X15",
"CRYST"    :     "X15",
"HAL"    :     "X15",
"HTML5"    :     "X15",
"NMB"    :     "X15",
"VLTY"    :     "X15",
"ZNY"    :     "Yescrypt",
"BSTY"    :     "Yescrypt",
}




function getAlgo(symbol) {
  s = symbol.toUpperCase()

  a = algo[s]

  if (!a)
    return []

  return a.toLowerCase().split(',').map( item => item.trim() ).filter(item => !!item )
       .map( item => {

        return IAlgorithm.find( alg => alg.toLowerCase() === item )

       }).filter( item => !!item )
}










const https = require('https')

var url = 'https://api.coinmarketcap.com/v1/ticker/?limit=0'
function main() {
  https.get(url, function(res){
      var body = '';

      res.on('data', function(chunk){
          body += chunk;
      });

      res.on('end', function(){
          var fbResponse = JSON.parse(body)


          let symbolML = 0
          let nameML   = 0
          let maxML    = 8

          let maxAlgo  = 0

          fbResponse = fbResponse.sort(compare)


          fbResponse.forEach( item => {
            const max = parseFloat(item.max_supply)

            symbolML = Math.max(item.symbol.length, symbolML)
            nameML = Math.max(item.name.length, nameML)
            maxML = Math.max(String(max).length, maxML)

            item.algo = JSON.stringify( getAlgo(item.symbol) )

            maxAlgo = Math.max(item.algo.length, maxAlgo)
          })

          // console.log('symbolML',symbolML)

          symbolML += 2
          nameML += 2

          const svgML = symbolML + 4

          fbResponse.forEach( item => {
            let max = parseFloat(item.max_supply)

            if (Number.isNaN(max))
              max = Infinity

            const symbol = `"${item.symbol}"`.padEnd(symbolML, ' ')
            const name   = `"${item.name}"`.padEnd(nameML, ' ')



            const maxst  = `${max}`.padEnd(maxML, ' ')


            const algo = `${item.algo}`.padEnd(maxAlgo, ' ')

            const padding = ''.padEnd(symbolML + 21, ' ')

            const svg = `"${item.symbol.toLowerCase()}.svg"`

            const line = `  static ${symbol} = new Coin(${symbol} , ${name} , ${maxst} ,\n${padding}${algo} , [] ,\n${padding}"" , "" ,\n${padding}${svg})\n`

            console.log(line);
          })



          // console.log("Got a response: ", fbResponse.length);
      });
  }).on('error', function(e){
        console.log("Got an error: ", e);
  });
}

function compare(a,b) {
  if (a.symbol.toLowerCase() < b.symbol.toLowerCase())
    return -1;
  if (a.symbol.toLowerCase() > b.symbol.toLowerCase())
    return 1;
  return 0;
}

main()