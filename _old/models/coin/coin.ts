/*
 * === Coins ===
 */

import { ICoin } from './coin.interface'

import { Historical } from './historical'
import { IHistorical } from './historical.interface'

export class Coin implements ICoin {

//                              symbol        name                              max coins
//                              algorithm                                         system
//                              founder, start
//                              icon

  static "$$$"       = new Coin("$$$"       , "Money"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "$$$.svg")

  static "10MT"      = new Coin("10MT"      , "10M Token"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "10mt.svg")

  static "1337"      = new Coin("1337"      , "1337"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "1337.svg")

  static "1ST"       = new Coin("1ST"       , "FirstBlood"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "1st.svg")

  static "2GIVE"     = new Coin("2GIVE"     , "2GIVE"                         , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "2give.svg")

  static "300"       = new Coin("300"       , "300 Token"                     , 300             ,
                                []                                              , [] ,
                                "" , "" ,
                                "300.svg")

  static "42"        = new Coin("42"        , "42-coin"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "42.svg")

  static "4CHN"      = new Coin("4CHN"      , "ChanCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "4chn.svg")

  static "611"       = new Coin("611"       , "SixEleven"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "611.svg")

  static "808"       = new Coin("808"       , "808Coin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "808.svg")

  static "888"       = new Coin("888"       , "OctoCoin"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "888.svg")

  static "8BIT"      = new Coin("8BIT"      , "8Bit"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "8bit.svg")

  static "9COIN"     = new Coin("9COIN"     , "9COIN"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "9coin.svg")

  static "ABC"       = new Coin("ABC"       , "Alphabit"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "abc.svg")

  static "ABJ"       = new Coin("ABJ"       , "Abjcoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "abj.svg")

  static "ABN"       = new Coin("ABN"       , "Abncoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "abn.svg")

  static "ABY"       = new Coin("ABY"       , "ArtByte"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "aby.svg")

  static "AC"        = new Coin("AC"        , "AsiaCoin"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "ac.svg")

  static "ACES"      = new Coin("ACES"      , "Aces"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "aces.svg")

  static "ACN"       = new Coin("ACN"       , "Avoncoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "acn.svg")

  static "ACOIN"     = new Coin("ACOIN"     , "Acoin"                         , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "acoin.svg")

  static "ACP"       = new Coin("ACP"       , "AnarchistsPrime"               , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "acp.svg")

  static "ACT"       = new Coin("ACT"       , "Achain"                        , 1000000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "act.svg")

  static "ADA"       = new Coin("ADA"       , "Cardano"                       , 45000000000     ,
                                []                                              , [] ,
                                "" , "" ,
                                "ada.svg")

  static "ADC"       = new Coin("ADC"       , "AudioCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "adc.svg")

  static "ADCN"      = new Coin("ADCN"      , "Asiadigicoin"                  , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "adcn.svg")

  static "ADK"       = new Coin("ADK"       , "Aidos Kuneen"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "adk.svg")

  static "ADL"       = new Coin("ADL"       , "Adelphoi"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "adl.svg")

  static "ADST"      = new Coin("ADST"      , "AdShares"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "adst.svg")

  static "ADT"       = new Coin("ADT"       , "adToken"                       , 1000000000      ,
                                ["Transaction"]                                 , [] ,
                                "" , "" ,
                                "adt.svg")

  static "ADX"       = new Coin("ADX"       , "AdEx"                          , 100000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "adx.svg")

  static "ADZ"       = new Coin("ADZ"       , "Adzcoin"                       , 84000000        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "adz.svg")

  static "AE"        = new Coin("AE"        , "Aeternity"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ae.svg")

  static "AEON"      = new Coin("AEON"      , "Aeon"                          , Infinity        ,
                                ["CPU"]                                         , [] ,
                                "" , "" ,
                                "aeon.svg")

  static "AERM"      = new Coin("AERM"      , "Aerium"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "aerm.svg")

  static "AGLC"      = new Coin("AGLC"      , "AgrolifeCoin"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "aglc.svg")

  static "AGRS"      = new Coin("AGRS"      , "Agoras Tokens"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "agrs.svg")

  static "AHT"       = new Coin("AHT"       , "Bowhead"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "aht.svg")

  static "AI"        = new Coin("AI"        , "POLY AI"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ai.svg")

  static "AIB"       = new Coin("AIB"       , "Advanced Internet Blocks"      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "aib.svg")

  static "AION"      = new Coin("AION"      , "Aion"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "aion.svg")

  static "AIR"       = new Coin("AIR"       , "AirToken"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "air.svg")

  static "AKY"       = new Coin("AKY"       , "Akuya Coin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "aky.svg")

  static "ALIS"      = new Coin("ALIS"      , "ALIS"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "alis.svg")

  static "ALL"       = new Coin("ALL"       , "Allion"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "all.svg")

  static "ALQO"      = new Coin("ALQO"      , "ALQO"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "alqo.svg")

  static "ALT"       = new Coin("ALT"       , "Altcoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "alt.svg")

  static "ALTC"      = new Coin("ALTC"      , "Antilitecoin"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "altc.svg")

  static "ALTCOM"    = new Coin("ALTCOM"    , "AltCommunity Coin"             , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "altcom.svg")

  static "AMB"       = new Coin("AMB"       , "Ambrosus"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "amb.svg")

  static "AMBER"     = new Coin("AMBER"     , "AmberCoin"                     , Infinity        ,
                                ["X13"]                                         , [] ,
                                "" , "" ,
                                "amber.svg")

  static "AMMO"      = new Coin("AMMO"      , "Ammo Rewards"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ammo.svg")

  static "AMP"       = new Coin("AMP"       , "Synereo"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "amp.svg")

  static "AMS"       = new Coin("AMS"       , "AmsterdamCoin"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ams.svg")

  static "ANC"       = new Coin("ANC"       , "Anoncoin"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "anc.svg")

  static "ANI"       = new Coin("ANI"       , "Animecoin"                     , Infinity        ,
                                ["Base"]                                        , [] ,
                                "" , "" ,
                                "ani.svg")

  static "ANT"       = new Coin("ANT"       , "Aragon"                        , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "ant.svg")

  static "ANTI"      = new Coin("ANTI"      , "AntiBitcoin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "anti.svg")

  static "ANTX"      = new Coin("ANTX"      , "Antimatter"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "antx.svg")

  static "APC"       = new Coin("APC"       , "AlpaCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "apc.svg")

  static "APW"       = new Coin("APW"       , "AppleCoin"                     , 2100000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "apw.svg")

  static "APX"       = new Coin("APX"       , "APX"                           , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "apx.svg")

  static "ARB"       = new Coin("ARB"       , "ARbit"                         , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "arb.svg")

  static "ARCO"      = new Coin("ARCO"      , "AquariusCoin"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "arco.svg")

  static "ARDR"      = new Coin("ARDR"      , "Ardor"                         , 998999495       ,
                                []                                              , [] ,
                                "" , "" ,
                                "ardr.svg")

  static "ARG"       = new Coin("ARG"       , "Argentum"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "arg.svg")

  static "ARGUS"     = new Coin("ARGUS"     , "Argus"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "argus.svg")

  static "ARI"       = new Coin("ARI"       , "Aricoin"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "ari.svg")

  static "ARK"       = new Coin("ARK"       , "Ark"                           , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "ark.svg")

  static "ARN"       = new Coin("ARN"       , "Aeron"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "arn.svg")

  static "ART"       = new Coin("ART"       , "Maecenas"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "art.svg")

  static "ASAFE2"    = new Coin("ASAFE2"    , "AllSafe"                       , 15000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "asafe2.svg")

  static "ASN"       = new Coin("ASN"       , "Aseancoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "asn.svg")

  static "AST"       = new Coin("AST"       , "AirSwap"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ast.svg")

  static "ASTRO"     = new Coin("ASTRO"     , "Astro"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "astro.svg")

  static "ATB"       = new Coin("ATB"       , "ATBCoin"                       , 300000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "atb.svg")

  static "ATL"       = new Coin("ATL"       , "ATLANT"                        , 54175041        ,
                                []                                              , [] ,
                                "" , "" ,
                                "atl.svg")

  static "ATM"       = new Coin("ATM"       , "ATMChain"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "atm.svg")

  static "ATMC"      = new Coin("ATMC"      , "ATMCoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "atmc.svg")

  static "ATMS"      = new Coin("ATMS"      , "Atmos"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "atms.svg")

  static "ATOM"      = new Coin("ATOM"      , "Atomic Coin"                   , 252000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "atom.svg")

  static "ATS"       = new Coin("ATS"       , "Authorship"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ats.svg")

  static "ATX"       = new Coin("ATX"       , "Artex Coin"                    , 500000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "atx.svg")

  static "AU"        = new Coin("AU"        , "AurumCoin"                     , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "au.svg")

  static "AUR"       = new Coin("AUR"       , "Auroracoin"                    , Infinity        ,
                                ["SHA-256","Scrypt","Qubit","Skein","Groestl"]  , [] ,
                                "" , "" ,
                                "aur.svg")

  static "AV"        = new Coin("AV"        , "AvatarCoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "av.svg")

  static "AVT"       = new Coin("AVT"       , "Aventus"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "avt.svg")

  static "AXIOM"     = new Coin("AXIOM"     , "Axiom"                         , Infinity        ,
                                ["Axiom"]                                       , [] ,
                                "" , "" ,
                                "axiom.svg")

  static "B2B"       = new Coin("B2B"       , "B2B"                           , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "b2b.svg")

  static "B2X"       = new Coin("B2X"       , "SegWit2x [Futures]"            , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "b2x.svg")

  static "B3"        = new Coin("B3"        , "B3Coin"                        , 2000000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "b3.svg")

  static "B@"        = new Coin("B@"        , "Bankcoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "b@.svg")

  static "BAC"       = new Coin("BAC"       , "BitAlphaCoin"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bac.svg")

  static "BAS"       = new Coin("BAS"       , "BitAsean"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bas.svg")

  static "BASH"      = new Coin("BASH"      , "LuckChain"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bash.svg")

  static "BAY"       = new Coin("BAY"       , "BitBay"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bay.svg")

  static "BBP"       = new Coin("BBP"       , "BiblePay"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bbp.svg")

  static "BBR"       = new Coin("BBR"       , "Boolberry"                     , 18450000        ,
                                ["CPU"]                                         , [] ,
                                "" , "" ,
                                "bbr.svg")

  static "BBT"       = new Coin("BBT"       , "BitBoost"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bbt.svg")

  static "BCAP"      = new Coin("BCAP"      , "BCAP"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bcap.svg")

  static "BCC"       = new Coin("BCC"       , "BitConnect"                    , 28000000        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "bcc.svg")

  static "BCCS"      = new Coin("BCCS"      , "BitcoinCashScrypt"             , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bccs.svg")

  static "BCD"       = new Coin("BCD"       , "Bitcoin Diamond [Futures]"     , 210000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "bcd.svg")

  static "BCDN"      = new Coin("BCDN"      , "BlockCDN"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bcdn.svg")

  static "BCF"       = new Coin("BCF"       , "Bitcoin Fast"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bcf.svg")

  static "BCH"       = new Coin("BCH"       , "Bitcoin Cash"                  , 21000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bch.svg")

  static "BCN"       = new Coin("BCN"       , "Bytecoin"                      , 184470000000    ,
                                ["CPU"]                                         , [] ,
                                "" , "" ,
                                "bcn.svg")

  static "BCO"       = new Coin("BCO"       , "BridgeCoin"                    , 27000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bco.svg")

  static "BCPT"      = new Coin("BCPT"      , "BlockMason Credit Protocol"    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bcpt.svg")

  static "BCX"       = new Coin("BCX"       , "BitcoinX [Futures]"            , 210000000000    ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "bcx.svg")

  static "BCY"       = new Coin("BCY"       , "Bitcrystals"                   , Infinity        ,
                                ["Base"]                                        , [] ,
                                "" , "" ,
                                "bcy.svg")

  static "BDL"       = new Coin("BDL"       , "Bitdeal"                       , 300000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "bdl.svg")

  static "BELA"      = new Coin("BELA"      , "Bela"                          , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "bela.svg")

  static "BENJI"     = new Coin("BENJI"     , "BenjiRolls"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "benji.svg")

  static "BERN"      = new Coin("BERN"      , "BERNcash"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bern.svg")

  static "BEST"      = new Coin("BEST"      , "BestChain"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "best.svg")

  static "BGR"       = new Coin("BGR"       , "Bongger"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bgr.svg")

  static "BIGUP"     = new Coin("BIGUP"     , "BigUp"                         , Infinity        ,
                                ["Transaction"]                                 , [] ,
                                "" , "" ,
                                "bigup.svg")

  static "BIOB"      = new Coin("BIOB"      , "BioBar"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "biob.svg")

  static "BIOS"      = new Coin("BIOS"      , "BiosCrypto"                    , Infinity        ,
                                ["Base"]                                        , [] ,
                                "" , "" ,
                                "bios.svg")

  static "BIP"       = new Coin("BIP"       , "BipCoin"                       , Infinity        ,
                                ["CPU"]                                         , [] ,
                                "" , "" ,
                                "bip.svg")

  static "BIRDS"     = new Coin("BIRDS"     , "Birds"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "birds.svg")

  static "BIS"       = new Coin("BIS"       , "Bismuth"                       , 109999978       ,
                                []                                              , [] ,
                                "" , "" ,
                                "bis.svg")

  static "BIT"       = new Coin("BIT"       , "First Bitcoin"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bit.svg")

  static "BITB"      = new Coin("BITB"      , "BitBean"                       , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "bitb.svg")

  static "BITBTC"    = new Coin("BITBTC"    , "bitBTC"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bitbtc.svg")

  static "BITCF"     = new Coin("BITCF"     , "First Bitcoin Capital"         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bitcf.svg")

  static "BITCNY"    = new Coin("BITCNY"    , "bitCNY"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bitcny.svg")

  static "BITEUR"    = new Coin("BITEUR"    , "bitEUR"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "biteur.svg")

  static "BITGOLD"   = new Coin("BITGOLD"   , "bitGold"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bitgold.svg")

  static "BITOK"     = new Coin("BITOK"     , "Bitok"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bitok.svg")

  static "BITS"      = new Coin("BITS"      , "Bitstar"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "bits.svg")

  static "BITSILVER" = new Coin("BITSILVER" , "bitSilver"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bitsilver.svg")

  static "BITUSD"    = new Coin("BITUSD"    , "bitUSD"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bitusd.svg")

  static "BITZ"      = new Coin("BITZ"      , "Bitz"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bitz.svg")

  static "BIXC"      = new Coin("BIXC"      , "BIXC"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bixc.svg")

  static "BLAS"      = new Coin("BLAS"      , "BlakeStar"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "blas.svg")

  static "BLAZR"     = new Coin("BLAZR"     , "BlazerCoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "blazr.svg")

  static "BLC"       = new Coin("BLC"       , "Blakecoin"                     , Infinity        ,
                                ["Blake256"]                                    , [] ,
                                "" , "" ,
                                "blc.svg")

  static "BLITZ"     = new Coin("BLITZ"     , "Blitzcash"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "blitz.svg")

  static "BLK"       = new Coin("BLK"       , "BlackCoin"                     , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "blk.svg")

  static "BLN"       = new Coin("BLN"       , "Bolenum"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bln.svg")

  static "BLOCK"     = new Coin("BLOCK"     , "Blocknet"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "block.svg")

  static "BLOCKPAY"  = new Coin("BLOCKPAY"  , "BlockPay"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "blockpay.svg")

  static "BLRY"      = new Coin("BLRY"      , "BillaryCoin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "blry.svg")

  static "BLU"       = new Coin("BLU"       , "BlueCoin"                      , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "blu.svg")

  static "BLUE"      = new Coin("BLUE"      , "BLUE"                          , 42000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "blue.svg")

  static "BLX"       = new Coin("BLX"       , "Blockchain Index"              , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "blx.svg")

  static "BLZ"       = new Coin("BLZ"       , "BlazeCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "blz.svg")

  static "BMC"       = new Coin("BMC"       , "Blackmoon Crypto"              , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bmc.svg")

  static "BNB"       = new Coin("BNB"       , "Binance Coin"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bnb.svg")

  static "BNT"       = new Coin("BNT"       , "Bancor"                        , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "bnt.svg")

  static "BNX"       = new Coin("BNX"       , "BnrtxCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bnx.svg")

  static "BOAT"      = new Coin("BOAT"      , "BOAT"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "boat.svg")

  static "BOLI"      = new Coin("BOLI"      , "Bolivarcoin"                   , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "boli.svg")

  static "BON"       = new Coin("BON"       , "Bonpay"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bon.svg")

  static "BOS"       = new Coin("BOS"       , "BOScoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bos.svg")

  static "BOST"      = new Coin("BOST"      , "BoostCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bost.svg")

  static "BOT"       = new Coin("BOT"       , "Bodhi"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bot.svg")

  static "BPC"       = new Coin("BPC"       , "Bitpark Coin"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bpc.svg")

  static "BPL"       = new Coin("BPL"       , "Blockpool"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bpl.svg")

  static "BQ"        = new Coin("BQ"        , "bitqy"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bq.svg")

  static "BRAIN"     = new Coin("BRAIN"     , "Braincoin"                     , 22000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "brain.svg")

  static "BRAT"      = new Coin("BRAT"      , "BRAT"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "brat.svg")

  static "BRIA"      = new Coin("BRIA"      , "BriaCoin"                      , 3000000         ,
                                []                                              , [] ,
                                "" , "" ,
                                "bria.svg")

  static "BRIT"      = new Coin("BRIT"      , "BritCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "brit.svg")

  static "BRK"       = new Coin("BRK"       , "Breakout"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "brk.svg")

  static "BRO"       = new Coin("BRO"       , "Bitradio"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bro.svg")

  static "BRX"       = new Coin("BRX"       , "Breakout Stake"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "brx.svg")

  static "BSC"       = new Coin("BSC"       , "BowsCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bsc.svg")

  static "BSD"       = new Coin("BSD"       , "BitSend"                       , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "bsd.svg")

  static "BSN"       = new Coin("BSN"       , "Bastonet"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bsn.svg")

  static "BSR"       = new Coin("BSR"       , "BitSoar"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bsr.svg")

  static "BSTAR"     = new Coin("BSTAR"     , "Blackstar"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bstar.svg")

  static "BSTY"      = new Coin("BSTY"      , "GlobalBoost-Y"                 , Infinity        ,
                                ["Yescrypt"]                                    , [] ,
                                "" , "" ,
                                "bsty.svg")

  static "BT1"       = new Coin("BT1"       , "BT1 [CST]"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bt1.svg")

  static "BT2"       = new Coin("BT2"       , "BT2 [CST]"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bt2.svg")

  static "BTA"       = new Coin("BTA"       , "Bata"                          , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "bta.svg")

  static "BTB"       = new Coin("BTB"       , "BitBar"                        , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "btb.svg")

  static "BTBc"      = new Coin("BTBc"      , "Bitbase"                       , 100000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "btbc.svg")

  static "BTC"       = new Coin("BTC"       , "Bitcoin"                       , 21000000        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "btc.svg")

  static "BTC2X"     = new Coin("BTC2X"     , "Bitcoin2x"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "btc2x.svg")

  static "BTCD"      = new Coin("BTCD"      , "BitcoinDark"                   , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "btcd.svg")

  static "BTCM"      = new Coin("BTCM"      , "BTCMoon"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "btcm.svg")

  static "BTCR"      = new Coin("BTCR"      , "Bitcurrency"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "btcr.svg")

  static "BTCRED"    = new Coin("BTCRED"    , "Bitcoin Red"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "btcred.svg")

  static "BTCS"      = new Coin("BTCS"      , "Bitcoin Silver"                , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "btcs.svg")

  static "BTCZ"      = new Coin("BTCZ"      , "BitcoinZ"                      , 21000000000     ,
                                []                                              , [] ,
                                "" , "" ,
                                "btcz.svg")

  static "BTDX"      = new Coin("BTDX"      , "Bitcloud"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "btdx.svg")

  static "BTE"       = new Coin("BTE"       , "BitSerial"                     , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "bte.svg")

  static "BTG"       = new Coin("BTG"       , "Bitcoin Gold"                  , 21000000        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "btg.svg")

  static "BTPL"      = new Coin("BTPL"      , "Bitcoin Planet"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "btpl.svg")

  static "BTQ"       = new Coin("BTQ"       , "BitQuark"                      , Infinity        ,
                                ["Base"]                                        , [] ,
                                "" , "" ,
                                "btq.svg")

  static "BTS"       = new Coin("BTS"       , "BitShares"                     , 3600570502      ,
                                ["Transaction"]                                 , [] ,
                                "" , "" ,
                                "bts.svg")

  static "BTSR"      = new Coin("BTSR"      , "BTSR"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "btsr.svg")

  static "BTU"       = new Coin("BTU"       , "Bitcoin Unlimited (Futures)"   , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "btu.svg")

  static "BTWTY"     = new Coin("BTWTY"     , "Bit20"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "btwty.svg")

  static "BTX"       = new Coin("BTX"       , "Bitcore"                       , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "btx.svg")

  static "BUB"       = new Coin("BUB"       , "Bubble"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bub.svg")

  static "BUCKS"     = new Coin("BUCKS"     , "SwagBucks"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bucks.svg")

  static "BUMBA"     = new Coin("BUMBA"     , "BumbaCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bumba.svg")

  static "BUN"       = new Coin("BUN"       , "BunnyCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bun.svg")

  static "BURST"     = new Coin("BURST"     , "Burst"                         , 2158812800      ,
                                ["Transaction"]                                 , [] ,
                                "" , "" ,
                                "burst.svg")

  static "BUZZ"      = new Coin("BUZZ"      , "BuzzCoin"                      , 20000000000     ,
                                []                                              , [] ,
                                "" , "" ,
                                "buzz.svg")

  static "BVC"       = new Coin("BVC"       , "BeaverCoin"                    , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "bvc.svg")

  static "BWK"       = new Coin("BWK"       , "Bulwark"                       , 27000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bwk.svg")

  static "BXC"       = new Coin("BXC"       , "Bitcedi"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bxc.svg")

  static "BXT"       = new Coin("BXT"       , "BitTokens"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "bxt.svg")

  static "BYC"       = new Coin("BYC"       , "Bytecent"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "byc.svg")

  static "C2"        = new Coin("C2"        , "Coin2.1"                       , Infinity        ,
                                ["Transaction"]                                 , [] ,
                                "" , "" ,
                                "c2.svg")

  static "CAB"       = new Coin("CAB"       , "Cabbage"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cab.svg")

  static "CACH"      = new Coin("CACH"      , "CacheCoin"                     , 10000000        ,
                                ["Scrypt-Jane"]                                 , [] ,
                                "" , "" ,
                                "cach.svg")

  static "CADASTRAL" = new Coin("CADASTRAL" , "Bitland"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cadastral.svg")

  static "CAG"       = new Coin("CAG"       , "Change"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cag.svg")

  static "CAGE"      = new Coin("CAGE"      , "CageCoin"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "cage.svg")

  static "CALC"      = new Coin("CALC"      , "CaliphCoin"                    , 189000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "calc.svg")

  static "CANN"      = new Coin("CANN"      , "CannabisCoin"                  , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "cann.svg")

  static "CAPP"      = new Coin("CAPP"      , "Cappasity"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "capp.svg")

  static "CARBON"    = new Coin("CARBON"    , "Carboncoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "carbon.svg")

  static "CASH"      = new Coin("CASH"      , "Cashcoin"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "cash.svg")

  static "CASINO"    = new Coin("CASINO"    , "Casino"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "casino.svg")

  static "CAT"       = new Coin("CAT"       , "Catcoin"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "cat.svg")

  static "CBD"       = new Coin("CBD"       , "CBD Crystals"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cbd.svg")

  static "CBX"       = new Coin("CBX"       , "Crypto Bullion"                , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "cbx.svg")

  static "CC"        = new Coin("CC"        , "CyberCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cc.svg")

  static "CCM100"    = new Coin("CCM100"    , "CCMiner"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ccm100.svg")

  static "CCN"       = new Coin("CCN"       , "CannaCoin"                     , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "ccn.svg")

  static "CCO"       = new Coin("CCO"       , "Ccore"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cco.svg")

  static "CCRB"      = new Coin("CCRB"      , "CryptoCarbon"                  , 70000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ccrb.svg")

  static "CCT"       = new Coin("CCT"       , "Crystal Clear "                , 10000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cct.svg")

  static "CDN"       = new Coin("CDN"       , "Canada eCoin"                  , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "cdn.svg")

  static "CDT"       = new Coin("CDT"       , "CoinDash"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cdt.svg")

  static "CESC"      = new Coin("CESC"      , "CryptoEscudo"                  , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "cesc.svg")

  static "CF"        = new Coin("CF"        , "Californium"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cf.svg")

  static "CFD"       = new Coin("CFD"       , "Confido"                       , 15000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cfd.svg")

  static "CFI"       = new Coin("CFI"       , "Cofound.it"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cfi.svg")

  static "CFT"       = new Coin("CFT"       , "CryptoForecast"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cft.svg")

  static "CHC"       = new Coin("CHC"       , "ChainCoin"                     , 23000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "chc.svg")

  static "CHEAP"     = new Coin("CHEAP"     , "Cheapcoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cheap.svg")

  static "CHESS"     = new Coin("CHESS"     , "ChessCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "chess.svg")

  static "CHIPS"     = new Coin("CHIPS"     , "CHIPS"                         , 21000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "chips.svg")

  static "CJ"        = new Coin("CJ"        , "Cryptojacks"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cj.svg")

  static "CLAM"      = new Coin("CLAM"      , "Clams"                         , Infinity        ,
                                ["Transaction"]                                 , [] ,
                                "" , "" ,
                                "clam.svg")

  static "CLINT"     = new Coin("CLINT"     , "Clinton"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "clint.svg")

  static "CLOAK"     = new Coin("CLOAK"     , "CloakCoin"                     , Infinity        ,
                                ["X13"]                                         , [] ,
                                "" , "" ,
                                "cloak.svg")

  static "CLUB"      = new Coin("CLUB"      , "ClubCoin"                      , 160000000       ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "club.svg")

  static "CME"       = new Coin("CME"       , "Cashme"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cme.svg")

  static "CMP"       = new Coin("CMP"       , "Compcoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cmp.svg")

  static "CMPCO"     = new Coin("CMPCO"     , "CampusCoin"                    , 1010000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "cmpco.svg")

  static "CNC"       = new Coin("CNC"       , "CHNCoin"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "cnc.svg")

  static "CND"       = new Coin("CND"       , "Cindicator"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cnd.svg")

  static "CNNC"      = new Coin("CNNC"      , "Cannation"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cnnc.svg")

  static "CNO"       = new Coin("CNO"       , "Coin(O)"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "cno.svg")

  static "CNT"       = new Coin("CNT"       , "Centurion"                     , 250000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "cnt.svg")

  static "CNX"       = new Coin("CNX"       , "Cryptonex"                     , 210000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "cnx.svg")

  static "COAL"      = new Coin("COAL"      , "BitCoal"                       , 12500000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "coal.svg")

  static "COB"       = new Coin("COB"       , "Cobinhood"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cob.svg")

  static "COLX"      = new Coin("COLX"      , "ColossusCoinXT"                , 13000000000     ,
                                []                                              , [] ,
                                "" , "" ,
                                "colx.svg")

  static "CON"       = new Coin("CON"       , "PayCon"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "con.svg")

  static "CONX"      = new Coin("CONX"      , "Concoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "conx.svg")

  static "COR"       = new Coin("COR"       , "CORION"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cor.svg")

  static "CORG"      = new Coin("CORG"      , "CorgiCoin"                     , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "corg.svg")

  static "COSS"      = new Coin("COSS"      , "COSS"                          , 200000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "coss.svg")

  static "COUPE"     = new Coin("COUPE"     , "Coupecoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "coupe.svg")

  static "COVAL"     = new Coin("COVAL"     , "Circuits of Value"             , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "coval.svg")

  static "COXST"     = new Coin("COXST"     , "CoExistCoin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "coxst.svg")

  static "CPC"       = new Coin("CPC"       , "Capricoin"                     , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "cpc.svg")

  static "CPN"       = new Coin("CPN"       , "CompuCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cpn.svg")

  static "CRAVE"     = new Coin("CRAVE"     , "Crave"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "crave.svg")

  static "CRB"       = new Coin("CRB"       , "Creditbit"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "crb.svg")

  static "CRC"       = new Coin("CRC"       , "CrowdCoin"                     , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "crc.svg")

  static "CRDNC"     = new Coin("CRDNC"     , "Credence Coin"                 , 25000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "crdnc.svg")

  static "CREA"      = new Coin("CREA"      , "Creativecoin"                  , 115000000       ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "crea.svg")

  static "CRED"      = new Coin("CRED"      , "Verify"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cred.svg")

  static "CREDO"     = new Coin("CREDO"     , "Credo"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "credo.svg")

  static "CREVA"     = new Coin("CREVA"     , "CrevaCoin"                     , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "creva.svg")

  static "CRM"       = new Coin("CRM"       , "Cream"                         , 100000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "crm.svg")

  static "CRT"       = new Coin("CRT"       , "CRTCoin"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "crt.svg")

  static "CRTM"      = new Coin("CRTM"      , "Corethum"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "crtm.svg")

  static "CRW"       = new Coin("CRW"       , "Crown"                         , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "crw.svg")

  static "CRX"       = new Coin("CRX"       , "Chronos"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "crx.svg")

  static "CRYPT"     = new Coin("CRYPT"     , "CryptCoin"                     , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "crypt.svg")

  static "CSC"       = new Coin("CSC"       , "CasinoCoin"                    , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "csc.svg")

  static "CSNO"      = new Coin("CSNO"      , "BitDice"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "csno.svg")

  static "CTIC2"     = new Coin("CTIC2"     , "Coimatic 2.0"                  , 102000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "ctic2.svg")

  static "CTIC3"     = new Coin("CTIC3"     , "Coimatic 3.0"                  , 102000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "ctic3.svg")

  static "CTO"       = new Coin("CTO"       , "Crypto"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cto.svg")

  static "CTR"       = new Coin("CTR"       , "Centra"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ctr.svg")

  static "CTX"       = new Coin("CTX"       , "CarTaxi Token"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ctx.svg")

  static "CUBE"      = new Coin("CUBE"      , "DigiCube"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cube.svg")

  static "CURE"      = new Coin("CURE"      , "Curecoin"                      , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "cure.svg")

  static "CV2"       = new Coin("CV2"       , "Colossuscoin V2"               , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cv2.svg")

  static "CVC"       = new Coin("CVC"       , "Civic"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cvc.svg")

  static "CVCOIN"    = new Coin("CVCOIN"    , "CVCoin"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cvcoin.svg")

  static "CWXT"      = new Coin("CWXT"      , "CryptoWorldX Token"            , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cwxt.svg")

  static "CXT"       = new Coin("CXT"       , "Coinonat"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cxt.svg")

  static "CYC"       = new Coin("CYC"       , "Cycling Coin"                  , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "cyc.svg")

  static "CYDER"     = new Coin("CYDER"     , "Cyder"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cyder.svg")

  static "CYP"       = new Coin("CYP"       , "Cypher"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "cyp.svg")

  static "DALC"      = new Coin("DALC"      , "Dalecoin"                      , 1000000         ,
                                []                                              , [] ,
                                "" , "" ,
                                "dalc.svg")

  static "DAR"       = new Coin("DAR"       , "Darcrus"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dar.svg")

  static "DAS"       = new Coin("DAS"       , "DAS"                           , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "das.svg")

  static "DASH"      = new Coin("DASH"      , "Dash"                          , 18900000        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "dash.svg")

  static "DASHS"     = new Coin("DASHS"     , "Dashs"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dashs.svg")

  static "DATA"      = new Coin("DATA"      , "Streamr DATAcoin"              , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "data.svg")

  static "DAXX"      = new Coin("DAXX"      , "DaxxCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "daxx.svg")

  static "DAY"       = new Coin("DAY"       , "Chronologic"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "day.svg")

  static "DBET"      = new Coin("DBET"      , "DecentBet"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dbet.svg")

  static "DBG"       = new Coin("DBG"       , "Digital Bullion Gold"          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dbg.svg")

  static "DBIX"      = new Coin("DBIX"      , "DubaiCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dbix.svg")

  static "DBTC"      = new Coin("DBTC"      , "Debitcoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dbtc.svg")

  static "DCN"       = new Coin("DCN"       , "Dentacoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dcn.svg")

  static "DCR"       = new Coin("DCR"       , "Decred"                        , 21000000        ,
                                ["Blake256"]                                    , [] ,
                                "" , "" ,
                                "dcr.svg")

  static "DCRE"      = new Coin("DCRE"      , "DeltaCredits"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dcre.svg")

  static "DCT"       = new Coin("DCT"       , "DECENT"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dct.svg")

  static "DCY"       = new Coin("DCY"       , "Dinastycoin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dcy.svg")

  static "DDF"       = new Coin("DDF"       , "DigitalDevelopersFund"         , 6428932         ,
                                []                                              , [] ,
                                "" , "" ,
                                "ddf.svg")

  static "DEM"       = new Coin("DEM"       , "Deutsche eMark"                , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "dem.svg")

  static "DENT"      = new Coin("DENT"      , "Dent"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dent.svg")

  static "DES"       = new Coin("DES"       , "Destiny"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "des.svg")

  static "DEUS"      = new Coin("DEUS"      , "DeusCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "deus.svg")

  static "DFS"       = new Coin("DFS"       , "DFSCoin"                       , 210000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "dfs.svg")

  static "DFT"       = new Coin("DFT"       , "DraftCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dft.svg")

  static "DGB"       = new Coin("DGB"       , "DigiByte"                      , 21000000000     ,
                                ["SHA-256","Scrypt","Qubit","Skein","Groestl"]  , [] ,
                                "" , "" ,
                                "dgb.svg")

  static "DGC"       = new Coin("DGC"       , "Digitalcoin"                   , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "dgc.svg")

  static "DGCS"      = new Coin("DGCS"      , "Digital Credits"               , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dgcs.svg")

  static "DGD"       = new Coin("DGD"       , "DigixDAO"                      , Infinity        ,
                                ["Smart"]                                       , [] ,
                                "" , "" ,
                                "dgd.svg")

  static "DGPT"      = new Coin("DGPT"      , "DigiPulse"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dgpt.svg")

  static "DIBC"      = new Coin("DIBC"      , "DIBCOIN"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dibc.svg")

  static "DICE"      = new Coin("DICE"      , "Etheroll"                      , 7001622         ,
                                []                                              , [] ,
                                "" , "" ,
                                "dice.svg")

  static "DIME"      = new Coin("DIME"      , "Dimecoin"                      , Infinity        ,
                                ["Base"]                                        , [] ,
                                "" , "" ,
                                "dime.svg")

  static "DISK"      = new Coin("DISK"      , "DarkLisk"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "disk.svg")

  static "DIVX"      = new Coin("DIVX"      , "Divi"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "divx.svg")

  static "DIX"       = new Coin("DIX"       , "Dix Asset"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dix.svg")

  static "DLC"       = new Coin("DLC"       , "Dollarcoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dlc.svg")

  static "DLISK"     = new Coin("DLISK"     , "DAPPSTER"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dlisk.svg")

  static "DLT"       = new Coin("DLT"       , "Agrello"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dlt.svg")

  static "DMB"       = new Coin("DMB"       , "Digital Money Bits"            , 50000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dmb.svg")

  static "DMC"       = new Coin("DMC"       , "DynamicCoin"                   , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "dmc.svg")

  static "DMD"       = new Coin("DMD"       , "Diamond"                       , Infinity        ,
                                ["Groestl"]                                     , [] ,
                                "" , "" ,
                                "dmd.svg")

  static "DNA"       = new Coin("DNA"       , "EncrypGen"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dna.svg")

  static "DNR"       = new Coin("DNR"       , "Denarius"                      , 10000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dnr.svg")

  static "DNT"       = new Coin("DNT"       , "district0x"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dnt.svg")

  static "DOGE"      = new Coin("DOGE"      , "Dogecoin"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "doge.svg")

  static "DOLLAR"    = new Coin("DOLLAR"    , "Dollar Online"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dollar.svg")

  static "DON"       = new Coin("DON"       , "Donationcoin"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "don.svg")

  static "DOPE"      = new Coin("DOPE"      , "DopeCoin"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "dope.svg")

  static "DOT"       = new Coin("DOT"       , "Dotcoin"                       , 890000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "dot.svg")

  static "DOVU"      = new Coin("DOVU"      , "Dovu"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dovu.svg")

  static "DP"        = new Coin("DP"        , "DigitalPrice"                  , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "dp.svg")

  static "DPAY"      = new Coin("DPAY"      , "DPAY"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dpay.svg")

  static "DPY"       = new Coin("DPY"       , "Delphy"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dpy.svg")

  static "DRGN"      = new Coin("DRGN"      , "Dragonchain"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "drgn.svg")

  static "DRM"       = new Coin("DRM"       , "Dreamcoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "drm.svg")

  static "DRP"       = new Coin("DRP"       , "DCORP"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "drp.svg")

  static "DRS"       = new Coin("DRS"       , "Digital Rupees"                , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "drs.svg")

  static "DRT"       = new Coin("DRT"       , "DomRaider"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "drt.svg")

  static "DRXNE"     = new Coin("DRXNE"     , "DROXNE"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "drxne.svg")

  static "DSH"       = new Coin("DSH"       , "Dashcoin"                      , Infinity        ,
                                ["CPU"]                                         , [] ,
                                "" , "" ,
                                "dsh.svg")

  static "DSR"       = new Coin("DSR"       , "Desire"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dsr.svg")

  static "DTB"       = new Coin("DTB"       , "Databits"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dtb.svg")

  static "DUB"       = new Coin("DUB"       , "Dubstep"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dub.svg")

  static "DUO"       = new Coin("DUO"       , "ParallelCoin"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "duo.svg")

  static "DUTCH"     = new Coin("DUTCH"     , "Dutch Coin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dutch.svg")

  static "DYN"       = new Coin("DYN"       , "Dynamic"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "dyn.svg")

  static "E4ROW"     = new Coin("E4ROW"     , "E4ROW"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "e4row.svg")

  static "EAC"       = new Coin("EAC"       , "EarthCoin"                     , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "eac.svg")

  static "EAG"       = new Coin("EAG"       , "EA Coin"                       , 100000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "eag.svg")

  static "EAGLE"     = new Coin("EAGLE"     , "EagleCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "eagle.svg")

  static "EBCH"      = new Coin("EBCH"      , "eBitcoinCash"                  , 21000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ebch.svg")

  static "EBET"      = new Coin("EBET"      , "EthBet"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ebet.svg")

  static "EBIT"      = new Coin("EBIT"      , "eBIT"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ebit.svg")

  static "EBST"      = new Coin("EBST"      , "eBoost"                        , 99990000        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "ebst.svg")

  static "EBT"       = new Coin("EBT"       , "Ebittree Coin"                 , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "ebt.svg")

  static "EBTC"      = new Coin("EBTC"      , "eBitcoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ebtc.svg")

  static "ECA"       = new Coin("ECA"       , "Electra"                       , 30000000000     ,
                                []                                              , [] ,
                                "" , "" ,
                                "eca.svg")

  static "ECASH"     = new Coin("ECASH"     , "Ethereum Cash"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ecash.svg")

  static "ECC"       = new Coin("ECC"       , "ECC"                           , 25000000000     ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "ecc.svg")

  static "ECN"       = new Coin("ECN"       , "E-coin"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ecn.svg")

  static "ECO"       = new Coin("ECO"       , "EcoCoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "eco.svg")

  static "ECOB"      = new Coin("ECOB"      , "Ecobit"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ecob.svg")

  static "EDG"       = new Coin("EDG"       , "Edgeless"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "edg.svg")

  static "EDO"       = new Coin("EDO"       , "Eidoo"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "edo.svg")

  static "EDOGE"     = new Coin("EDOGE"     , "EtherDoge"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "edoge.svg")

  static "EDR"       = new Coin("EDR"       , "E-Dinar Coin"                  , 999999999999999 ,
                                []                                              , [] ,
                                "" , "" ,
                                "edr.svg")

  static "EDRC"      = new Coin("EDRC"      , "EDRCoin"                       , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "edrc.svg")

  static "EFL"       = new Coin("EFL"       , "e-Gulden"                      , 21000000        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "efl.svg")

  static "EFYT"      = new Coin("EFYT"      , "Ergo"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "efyt.svg")

  static "EGAS"      = new Coin("EGAS"      , "ETHGAS"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "egas.svg")

  static "EGC"       = new Coin("EGC"       , "EverGreenCoin"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "egc.svg")

  static "EGG"       = new Coin("EGG"       , "EggCoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "egg.svg")

  static "EGO"       = new Coin("EGO"       , "EGO"                           , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ego.svg")

  static "EGOLD"     = new Coin("EGOLD"     , "eGold"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "egold.svg")

  static "EL"        = new Coin("EL"        , "Elcoin"                        , Infinity        ,
                                ["Base"]                                        , [] ,
                                "" , "" ,
                                "el.svg")

  static "ELC"       = new Coin("ELC"       , "Elacoin"                       , Infinity        ,
                                ["Scrypt-N"]                                    , [] ,
                                "" , "" ,
                                "elc.svg")

  static "ELE"       = new Coin("ELE"       , "Elementrem"                    , Infinity        ,
                                ["Dagger-Hashimoto"]                            , [] ,
                                "" , "" ,
                                "ele.svg")

  static "ELITE"     = new Coin("ELITE"     , "Ethereum Lite"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "elite.svg")

  static "ELIX"      = new Coin("ELIX"      , "Elixir"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "elix.svg")

  static "ELLA"      = new Coin("ELLA"      , "Ellaism"                       , 280000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "ella.svg")

  static "ELS"       = new Coin("ELS"       , "Elysium"                       , 18000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "els.svg")

  static "ELTC2"     = new Coin("ELTC2"     , "eLTC"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "eltc2.svg")

  static "ELTCOIN"   = new Coin("ELTCOIN"   , "ELTCOIN"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "eltcoin.svg")

  static "EMB"       = new Coin("EMB"       , "EmberCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "emb.svg")

  static "EMC"       = new Coin("EMC"       , "Emercoin"                      , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "emc.svg")

  static "EMC2"      = new Coin("EMC2"      , "Einsteinium"                   , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "emc2.svg")

  static "EMD"       = new Coin("EMD"       , "Emerald Crypto"                , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "emd.svg")

  static "EMP"       = new Coin("EMP"       , "EMoneyPower"                   , 2400000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "emp.svg")

  static "EMV"       = new Coin("EMV"       , "Ethereum Movie Venture"        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "emv.svg")

  static "ENG"       = new Coin("ENG"       , "Enigma"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "eng.svg")

  static "ENJ"       = new Coin("ENJ"       , "Enjin Coin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "enj.svg")

  static "ENRG"      = new Coin("ENRG"      , "Energycoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "enrg.svg")

  static "ENT"       = new Coin("ENT"       , "Eternity"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ent.svg")

  static "ENV"       = new Coin("ENV"       , "Environ"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "env.svg")

  static "EOS"       = new Coin("EOS"       , "EOS"                           , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "eos.svg")

  static "EOT"       = new Coin("EOT"       , "EOT Token"                     , 200000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "eot.svg")

  static "EPY"       = new Coin("EPY"       , "Emphy"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "epy.svg")

  static "EQT"       = new Coin("EQT"       , "EquiTrader"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "eqt.svg")

  static "ERC"       = new Coin("ERC"       , "EuropeCoin"                    , 32000000        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "erc.svg")

  static "ERC20"     = new Coin("ERC20"     , "ERC20"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "erc20.svg")

  static "EREAL"     = new Coin("EREAL"     , "eREAL"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ereal.svg")

  static "ERO"       = new Coin("ERO"       , "Eroscoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ero.svg")

  static "ERY"       = new Coin("ERY"       , "Eryllium"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ery.svg")

  static "ESP"       = new Coin("ESP"       , "Espers"                        , 50000000000     ,
                                []                                              , [] ,
                                "" , "" ,
                                "esp.svg")

  static "ETBS"      = new Coin("ETBS"      , "Ethbits"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "etbs.svg")

  static "ETC"       = new Coin("ETC"       , "Ethereum Classic"              , Infinity        ,
                                ["Dagger-Hashimoto"]                            , [] ,
                                "" , "" ,
                                "etc.svg")

  static "ETG"       = new Coin("ETG"       , "Ethereum Gold"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "etg.svg")

  static "ETH"       = new Coin("ETH"       , "Ethereum"                      , Infinity        ,
                                ["Dagger-Hashimoto"]                            , [] ,
                                "" , "" ,
                                "eth.svg")

  static "ETHD"      = new Coin("ETHD"      , "Ethereum Dark"                 , 4200000         ,
                                []                                              , [] ,
                                "" , "" ,
                                "ethd.svg")

  static "ETHOS"     = new Coin("ETHOS"     , "Ethos"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ethos.svg")

  static "ETN"       = new Coin("ETN"       , "Electroneum"                   , 21000000000     ,
                                []                                              , [] ,
                                "" , "" ,
                                "etn.svg")

  static "ETP"       = new Coin("ETP"       , "Metaverse ETP"                 , 100000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "etp.svg")

  static "EUC"       = new Coin("EUC"       , "Eurocoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "euc.svg")

  static "EUSD"      = new Coin("EUSD"      , "eUSD"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "eusd.svg")

  static "EVC"       = new Coin("EVC"       , "EventChain"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "evc.svg")

  static "EVIL"      = new Coin("EVIL"      , "Evil Coin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "evil.svg")

  static "EVO"       = new Coin("EVO"       , "Evotion"                       , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "evo.svg")

  static "EVR"       = new Coin("EVR"       , "Everus"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "evr.svg")

  static "EVX"       = new Coin("EVX"       , "Everex"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "evx.svg")

  static "EXCL"      = new Coin("EXCL"      , "ExclusiveCoin"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "excl.svg")

  static "EXN"       = new Coin("EXN"       , "ExchangeN"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "exn.svg")

  static "EXP"       = new Coin("EXP"       , "Expanse"                       , Infinity        ,
                                ["Dagger-Hashimoto"]                            , [] ,
                                "" , "" ,
                                "exp.svg")

  static "EXRN"      = new Coin("EXRN"      , "EXRNchain"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "exrn.svg")

  static "FAIR"      = new Coin("FAIR"      , "FairCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fair.svg")

  static "FAL"       = new Coin("FAL"       , "Falcoin"                       , 200000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "fal.svg")

  static "FAP"       = new Coin("FAP"       , "FAPcoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fap.svg")

  static "FAZZ"      = new Coin("FAZZ"      , "Fazzcoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fazz.svg")

  static "FBL"       = new Coin("FBL"       , "Faceblock"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fbl.svg")

  static "FC"        = new Coin("FC"        , "Facecoin"                      , Infinity        ,
                                ["Fugue256"]                                    , [] ,
                                "" , "" ,
                                "fc.svg")

  static "FC2"       = new Coin("FC2"       , "FuelCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fc2.svg")

  static "FCN"       = new Coin("FCN"       , "Fantomcoin"                    , Infinity        ,
                                ["CPU"]                                         , [] ,
                                "" , "" ,
                                "fcn.svg")

  static "FCT"       = new Coin("FCT"       , "Factom"                        , Infinity        ,
                                ["Transaction"]                                 , [] ,
                                "" , "" ,
                                "fct.svg")

  static "FDC"       = new Coin("FDC"       , "Future Digital Currency"       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fdc.svg")

  static "FFC"       = new Coin("FFC"       , "FireFlyCoin"                   , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "ffc.svg")

  static "FID"       = new Coin("FID"       , "BITFID"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fid.svg")

  static "FIL"       = new Coin("FIL"       , "Filecoin [Futures]"            , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fil.svg")

  static "FIMK"      = new Coin("FIMK"      , "FIMKrypto"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fimk.svg")

  static "FIRE"      = new Coin("FIRE"      , "Firecoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fire.svg")

  static "FJC"       = new Coin("FJC"       , "FujiCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fjc.svg")

  static "FLAP"      = new Coin("FLAP"      , "FlappyCoin"                    , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "flap.svg")

  static "FLASH"     = new Coin("FLASH"     , "Flash"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "flash.svg")

  static "FLAX"      = new Coin("FLAX"      , "Flaxscript"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "flax.svg")

  static "FLDC"      = new Coin("FLDC"      , "FoldingCoin"                   , Infinity        ,
                                ["Stanford"]                                    , [] ,
                                "" , "" ,
                                "fldc.svg")

  static "FLIK"      = new Coin("FLIK"      , "FLiK"                          , 600000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "flik.svg")

  static "FLIXX"     = new Coin("FLIXX"     , "Flixxo"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "flixx.svg")

  static "FLO"       = new Coin("FLO"       , "FlorinCoin"                    , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "flo.svg")

  static "FLT"       = new Coin("FLT"       , "FlutterCoin"                   , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "flt.svg")

  static "FLVR"      = new Coin("FLVR"      , "FlavorCoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "flvr.svg")

  static "FLY"       = new Coin("FLY"       , "Flycoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fly.svg")

  static "FNC"       = new Coin("FNC"       , "FinCoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fnc.svg")

  static "FONZ"      = new Coin("FONZ"      , "Fonziecoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fonz.svg")

  static "FOR"       = new Coin("FOR"       , "FORCE"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "for.svg")

  static "FRAZ"      = new Coin("FRAZ"      , "Frazcoin"                      , 20000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fraz.svg")

  static "FRC"       = new Coin("FRC"       , "Freicoin"                      , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "frc.svg")

  static "FRD"       = new Coin("FRD"       , "Farad"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "frd.svg")

  static "FRGC"      = new Coin("FRGC"      , "Fargocoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "frgc.svg")

  static "FRK"       = new Coin("FRK"       , "Franko"                        , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "frk.svg")

  static "FRN"       = new Coin("FRN"       , "Francs"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "frn.svg")

  static "FRST"      = new Coin("FRST"      , "FirstCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "frst.svg")

  static "FRWC"      = new Coin("FRWC"      , "FrankyWillCoin"                , 100000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "frwc.svg")

  static "FST"       = new Coin("FST"       , "Fastcoin"                      , 165888000       ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "fst.svg")

  static "FTC"       = new Coin("FTC"       , "Feathercoin"                   , 336000000       ,
                                ["NeoScrypt"]                                   , [] ,
                                "" , "" ,
                                "ftc.svg")

  static "FUCK"      = new Coin("FUCK"      , "FuckToken"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fuck.svg")

  static "FUDD"      = new Coin("FUDD"      , "DimonCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fudd.svg")

  static "FUEL"      = new Coin("FUEL"      , "Etherparty"                    , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "fuel.svg")

  static "FUN"       = new Coin("FUN"       , "FunFair"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fun.svg")

  static "FUNC"      = new Coin("FUNC"      , "FUNCoin"                       , 100000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "func.svg")

  static "FUNK"      = new Coin("FUNK"      , "The Cypherfunks"               , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "funk.svg")

  static "FUTC"      = new Coin("FUTC"      , "FutCoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "futc.svg")

  static "FUZZ"      = new Coin("FUZZ"      , "FuzzBalls"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fuzz.svg")

  static "FXE"       = new Coin("FXE"       , "FuturXe"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fxe.svg")

  static "FYN"       = new Coin("FYN"       , "FundYourselfNow"               , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fyn.svg")

  static "FYP"       = new Coin("FYP"       , "FlypMe"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "fyp.svg")

  static "G3N"       = new Coin("G3N"       , "G3N"                           , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "g3n.svg")

  static "GAIA"      = new Coin("GAIA"      , "GAIA"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gaia.svg")

  static "GAIN"      = new Coin("GAIN"      , "UGAIN"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gain.svg")

  static "GAM"       = new Coin("GAM"       , "Gambit"                        , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "gam.svg")

  static "GAME"      = new Coin("GAME"      , "GameCredits"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "game.svg")

  static "GAP"       = new Coin("GAP"       , "Gapcoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gap.svg")

  static "GARY"      = new Coin("GARY"      , "President Johnson"             , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gary.svg")

  static "GAS"       = new Coin("GAS"       , "Gas"                           , 100000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "gas.svg")

  static "GAY"       = new Coin("GAY"       , "GAY Money"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gay.svg")

  static "GB"        = new Coin("GB"        , "GoldBlocks"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gb.svg")

  static "GBC"       = new Coin("GBC"       , "GBCGoldCoin"                   , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "gbc.svg")

  static "GBG"       = new Coin("GBG"       , "Golos Gold"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gbg.svg")

  static "GBRC"      = new Coin("GBRC"      , "Global Business Revolution"    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gbrc.svg")

  static "GBT"       = new Coin("GBT"       , "GameBet Coin"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gbt.svg")

  static "GBX"       = new Coin("GBX"       , "GoByte"                        , 31800000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gbx.svg")

  static "GBYTE"     = new Coin("GBYTE"     , "Byteball Bytes"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gbyte.svg")

  static "GCN"       = new Coin("GCN"       , "GCoin"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gcn.svg")

  static "GCR"       = new Coin("GCR"       , "Global Currency Reserve"       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "gcr.svg")

  static "GEERT"     = new Coin("GEERT"     , "GeertCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "geert.svg")

  static "GEO"       = new Coin("GEO"       , "GeoCoin"                       , Infinity        ,
                                ["Qubit"]                                       , [] ,
                                "" , "" ,
                                "geo.svg")

  static "GIM"       = new Coin("GIM"       , "Gimli"                         , 150000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "gim.svg")

  static "GLC"       = new Coin("GLC"       , "GlobalCoin"                    , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "glc.svg")

  static "GLD"       = new Coin("GLD"       , "GoldCoin"                      , 72245700        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "gld.svg")

  static "GLS"       = new Coin("GLS"       , "GlassCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gls.svg")

  static "GLT"       = new Coin("GLT"       , "GlobalToken"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "glt.svg")

  static "GML"       = new Coin("GML"       , "GameLeagueCoin"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gml.svg")

  static "GMT"       = new Coin("GMT"       , "Mercury Protocol"              , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gmt.svg")

  static "GMX"       = new Coin("GMX"       , "GoldMaxCoin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gmx.svg")

  static "GNO"       = new Coin("GNO"       , "Gnosis"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gno.svg")

  static "GNT"       = new Coin("GNT"       , "Golem"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gnt.svg")

  static "GOLF"      = new Coin("GOLF"      , "Golfcoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "golf.svg")

  static "GOLOS"     = new Coin("GOLOS"     , "Golos"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "golos.svg")

  static "GOOD"      = new Coin("GOOD"      , "Goodomy"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "good.svg")

  static "GP"        = new Coin("GP"        , "GoldPieces"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gp.svg")

  static "GPL"       = new Coin("GPL"       , "Gold Pressed Latinum"          , 1000000         ,
                                []                                              , [] ,
                                "" , "" ,
                                "gpl.svg")

  static "GPU"       = new Coin("GPU"       , "GPU Coin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gpu.svg")

  static "GRC"       = new Coin("GRC"       , "GridCoin"                      , Infinity        ,
                                ["BOINC"]                                       , [] ,
                                "" , "" ,
                                "grc.svg")

  static "GRE"       = new Coin("GRE"       , "Greencoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gre.svg")

  static "GRID"      = new Coin("GRID"      , "Grid+"                         , Infinity        ,
                                ["Transaction"]                                 , [] ,
                                "" , "" ,
                                "grid.svg")

  static "GRIM"      = new Coin("GRIM"      , "Grimcoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "grim.svg")

  static "GRN"       = new Coin("GRN"       , "Granite"                       , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "grn.svg")

  static "GRS"       = new Coin("GRS"       , "Groestlcoin"                   , 105000000       ,
                                ["Groestl"]                                     , [] ,
                                "" , "" ,
                                "grs.svg")

  static "GRT"       = new Coin("GRT"       , "Grantcoin"                     , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "grt.svg")

  static "GRWI"      = new Coin("GRWI"      , "Growers International"         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "grwi.svg")

  static "GRX"       = new Coin("GRX"       , "GOLD Reward Token"             , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "grx.svg")

  static "GSR"       = new Coin("GSR"       , "GeyserCoin"                    , 4500000         ,
                                []                                              , [] ,
                                "" , "" ,
                                "gsr.svg")

  static "GTC"       = new Coin("GTC"       , "Global Tour Coin"              , Infinity        ,
                                ["Scrypt-N"]                                    , [] ,
                                "" , "" ,
                                "gtc.svg")

  static "GUC"       = new Coin("GUC"       , "GoldUnionCoin"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "guc.svg")

  static "GUN"       = new Coin("GUN"       , "Guncoin"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "gun.svg")

  static "GUP"       = new Coin("GUP"       , "Matchpool"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gup.svg")

  static "GVT"       = new Coin("GVT"       , "Genesis Vision"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "gvt.svg")

  static "GXS"       = new Coin("GXS"       , "GXShares"                      , 100000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "gxs.svg")

  static "HAL"       = new Coin("HAL"       , "Halcyon"                       , Infinity        ,
                                ["X15"]                                         , [] ,
                                "" , "" ,
                                "hal.svg")

  static "HALLO"     = new Coin("HALLO"     , "Halloween Coin"                , 1500000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "hallo.svg")

  static "HAT"       = new Coin("HAT"       , "Hawala.Today"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "hat.svg")

  static "HBN"       = new Coin("HBN"       , "HoboNickels"                   , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "hbn.svg")

  static "HBT"       = new Coin("HBT"       , "Hubii Network"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "hbt.svg")

  static "HCC"       = new Coin("HCC"       , "Happy Creator Coin"            , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "hcc.svg")

  static "HDG"       = new Coin("HDG"       , "Hedge"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "hdg.svg")

  static "HDLB"      = new Coin("HDLB"      , "HODL Bucks"                    , 2000000         ,
                                []                                              , [] ,
                                "" , "" ,
                                "hdlb.svg")

  static "HEAT"      = new Coin("HEAT"      , "HEAT"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "heat.svg")

  static "HERO"      = new Coin("HERO"      , "Sovereign Hero"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "hero.svg")

  static "HGT"       = new Coin("HGT"       , "HelloGold"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "hgt.svg")

  static "HIGH"      = new Coin("HIGH"      , "High Gain"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "high.svg")

  static "HMC"       = new Coin("HMC"       , "HarmonyCoin"                   , 67130000000     ,
                                []                                              , [] ,
                                "" , "" ,
                                "hmc.svg")

  static "HMP"       = new Coin("HMP"       , "HempCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "hmp.svg")

  static "HMQ"       = new Coin("HMQ"       , "Humaniq"                       , 920952070       ,
                                []                                              , [] ,
                                "" , "" ,
                                "hmq.svg")

  static "HODL"      = new Coin("HODL"      , "HOdlcoin"                      , Infinity        ,
                                ["AES"]                                         , [] ,
                                "" , "" ,
                                "hodl.svg")

  static "HOLD"      = new Coin("HOLD"      , "Interstellar Holdings"         , 2000000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "hold.svg")

  static "HONEY"     = new Coin("HONEY"     , "Honey"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "honey.svg")

  static "HPC"       = new Coin("HPC"       , "Happycoin"                     , 100000000       ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "hpc.svg")

  static "HSR"       = new Coin("HSR"       , "Hshare"                        , 84000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "hsr.svg")

  static "HST"       = new Coin("HST"       , "Decision Token"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "hst.svg")

  static "HTC"       = new Coin("HTC"       , "HitCoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "htc.svg")

  static "HTML5"     = new Coin("HTML5"     , "HTMLCOIN"                      , Infinity        ,
                                ["X15"]                                         , [] ,
                                "" , "" ,
                                "html5.svg")

  static "HUC"       = new Coin("HUC"       , "HunterCoin"                    , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "huc.svg")

  static "HUSH"      = new Coin("HUSH"      , "Hush"                          , 21000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "hush.svg")

  static "HVCO"      = new Coin("HVCO"      , "High Voltage"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "hvco.svg")

  static "HVN"       = new Coin("HVN"       , "Hive"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "hvn.svg")

  static "HWC"       = new Coin("HWC"       , "HollyWoodCoin"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "hwc.svg")

  static "HXX"       = new Coin("HXX"       , "Hexx"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "hxx.svg")

  static "HYP"       = new Coin("HYP"       , "HyperStake"                    , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "hyp.svg")

  static "HYPER"     = new Coin("HYPER"     , "Hyper"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "hyper.svg")

  static "HYTV"      = new Coin("HYTV"      , "Hyper TV"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "hytv.svg")

  static "I0C"       = new Coin("I0C"       , "I0Coin"                        , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "i0c.svg")

  static "IBANK"     = new Coin("IBANK"     , "iBank"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ibank.svg")

  static "IBTC"      = new Coin("IBTC"      , "iBTC"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ibtc.svg")

  static "ICE"       = new Coin("ICE"       , "iDice"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ice.svg")

  static "ICOB"      = new Coin("ICOB"      , "ICOBID"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "icob.svg")

  static "ICON"      = new Coin("ICON"      , "Iconic"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "icon.svg")

  static "ICOO"      = new Coin("ICOO"      , "ICO OpenLedger"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "icoo.svg")

  static "ICOS"      = new Coin("ICOS"      , "ICOS"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "icos.svg")

  static "ICX"       = new Coin("ICX"       , "ICON"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "icx.svg")

  static "IETH"      = new Coin("IETH"      , "iEthereum"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ieth.svg")

  static "IFC"       = new Coin("IFC"       , "Infinitecoin"                  , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "ifc.svg")

  static "IFLT"      = new Coin("IFLT"      , "InflationCoin"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "iflt.svg")

  static "IFT"       = new Coin("IFT"       , "InvestFeed"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ift.svg")

  static "IGNIS"     = new Coin("IGNIS"     , "Ignis [Futures]"               , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ignis.svg")

  static "IMPS"      = new Coin("IMPS"      , "ImpulseCoin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "imps.svg")

  static "IMS"       = new Coin("IMS"       , "Independent Money System"      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ims.svg")

  static "IMX"       = new Coin("IMX"       , "Impact"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "imx.svg")

  static "INCNT"     = new Coin("INCNT"     , "Incent"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "incnt.svg")

  static "IND"       = new Coin("IND"       , "Indorse Token"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ind.svg")

  static "INDIA"     = new Coin("INDIA"     , "India Coin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "india.svg")

  static "INF"       = new Coin("INF"       , "InfChain"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "inf.svg")

  static "INFX"      = new Coin("INFX"      , "Influxcoin"                    , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "infx.svg")

  static "INK"       = new Coin("INK"       , "Ink"                           , 1000000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "ink.svg")

  static "INN"       = new Coin("INN"       , "Innova"                        , 42000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "inn.svg")

  static "INPAY"     = new Coin("INPAY"     , "InPay"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "inpay.svg")

  static "INSN"      = new Coin("INSN"      , "InsaneCoin"                    , 30000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "insn.svg")

  static "INXT"      = new Coin("INXT"      , "Internxt"                      , 629610          ,
                                []                                              , [] ,
                                "" , "" ,
                                "inxt.svg")

  static "IOC"       = new Coin("IOC"       , "I/O Coin"                      , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "ioc.svg")

  static "ION"       = new Coin("ION"       , "ION"                           , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ion.svg")

  static "IOP"       = new Coin("IOP"       , "Internet of People"            , 21000000        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "iop.svg")

  static "IPY"       = new Coin("IPY"       , "Infinity Pay"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ipy.svg")

  static "IQT"       = new Coin("IQT"       , "iQuant"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "iqt.svg")

  static "IRL"       = new Coin("IRL"       , "IrishCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "irl.svg")

  static "ISL"       = new Coin("ISL"       , "IslaCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "isl.svg")

  static "ITC"       = new Coin("ITC"       , "IoT Chain"                     , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "itc.svg")

  static "ITI"       = new Coin("ITI"       , "iTicoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "iti.svg")

  static "ITNS"      = new Coin("ITNS"      , "IntenseCoin"                   , 999481516       ,
                                []                                              , [] ,
                                "" , "" ,
                                "itns.svg")

  static "ITT"       = new Coin("ITT"       , "Intelligent Trading Tech"      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "itt.svg")

  static "ITZ"       = new Coin("ITZ"       , "Interzone"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "itz.svg")

  static "IVZ"       = new Coin("IVZ"       , "InvisibleCoin"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ivz.svg")

  static "IXC"       = new Coin("IXC"       , "Ixcoin"                        , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "ixc.svg")

  static "IXT"       = new Coin("IXT"       , "iXledger"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ixt.svg")

  static "J"         = new Coin("J"         , "Joincoin"                      , Infinity        ,
                                ["Multiple"]                                    , [] ,
                                "" , "" ,
                                "j.svg")

  static "JET"       = new Coin("JET"       , "Jetcoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "jet.svg")

  static "JIN"       = new Coin("JIN"       , "Jin Coin"                      , 9960000         ,
                                []                                              , [] ,
                                "" , "" ,
                                "jin.svg")

  static "JINN"      = new Coin("JINN"      , "Jinn"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "jinn.svg")

  static "JNS"       = new Coin("JNS"       , "Janus"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "jns.svg")

  static "JOBS"      = new Coin("JOBS"      , "JobsCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "jobs.svg")

  static "JS"        = new Coin("JS"        , "JavaScript Token"              , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "js.svg")

  static "JWL"       = new Coin("JWL"       , "Jewels"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "jwl.svg")

  static "KARMA"     = new Coin("KARMA"     , "Karmacoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "karma.svg")

  static "KASHH"     = new Coin("KASHH"     , "KashhCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "kashh.svg")

  static "KAYI"      = new Coin("KAYI"      , "Kayicoin"                      , 300000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "kayi.svg")

  static "KBR"       = new Coin("KBR"       , "Kubera Coin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "kbr.svg")

  static "KCS"       = new Coin("KCS"       , "KuCoin Shares"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "kcs.svg")

  static "KED"       = new Coin("KED"       , "Darsek"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ked.svg")

  static "KEK"       = new Coin("KEK"       , "KekCoin"                       , 21000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "kek.svg")

  static "KIC"       = new Coin("KIC"       , "KibiCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "kic.svg")

  static "KICK"      = new Coin("KICK"      , "KickCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "kick.svg")

  static "KIN"       = new Coin("KIN"       , "Kin"                           , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "kin.svg")

  static "KLC"       = new Coin("KLC"       , "KiloCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "klc.svg")

  static "KLN"       = new Coin("KLN"       , "Kolion"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "kln.svg")

  static "KMD"       = new Coin("KMD"       , "Komodo"                        , Infinity        ,
                                ["Equihash"]                                    , [] ,
                                "" , "" ,
                                "kmd.svg")


  static "KOBO"      = new Coin("KOBO"      , "Kobocoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "kobo.svg")

  static "KORE"      = new Coin("KORE"      , "Kore"                          , 12000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "kore.svg")

  static "KRB"       = new Coin("KRB"       , "Karbowanec"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "krb.svg")

  static "KRONE"     = new Coin("KRONE"     , "Kronecoin"                     , 84000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "krone.svg")

  static "KURT"      = new Coin("KURT"      , "Kurrent"                       , 228000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "kurt.svg")

  static "KUSH"      = new Coin("KUSH"      , "KushCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "kush.svg")

  static "LA"        = new Coin("LA"        , "LAToken"                       , 1000000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "la.svg")

  static "LANA"      = new Coin("LANA"      , "LanaCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "lana.svg")

  static "LAZ"       = new Coin("LAZ"       , "Lazaruscoin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "laz.svg")

  static "LBC"       = new Coin("LBC"       , "LBRY Credits"                  , Infinity        ,
                                ["LBRY"]                                        , [] ,
                                "" , "" ,
                                "lbc.svg")

  static "LBTC"      = new Coin("LBTC"      , "LiteBitcoin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "lbtc.svg")

  static "LCP"       = new Coin("LCP"       , "Litecoin Plus"                 , 4000000         ,
                                []                                              , [] ,
                                "" , "" ,
                                "lcp.svg")

  static "LDCN"      = new Coin("LDCN"      , "LandCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ldcn.svg")

  static "LDOGE"     = new Coin("LDOGE"     , "LiteDoge"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ldoge.svg")

  static "LEA"       = new Coin("LEA"       , "LeaCoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "lea.svg")

  static "LEND"      = new Coin("LEND"      , "ETHLend"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "lend.svg")

  static "LEO"       = new Coin("LEO"       , "LEOcoin"                       , 1000000000      ,
                                ["Scrypt-Jane"]                                 , [] ,
                                "" , "" ,
                                "leo.svg")

  static "LEPEN"     = new Coin("LEPEN"     , "LePen"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "lepen.svg")

  static "LEX"       = new Coin("LEX"       , "Lex4All"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "lex.svg")

  static "LGD"       = new Coin("LGD"       , "Legends Room"                  , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "lgd.svg")

  static "LIFE"      = new Coin("LIFE"      , "LIFE"                          , 100000000000    ,
                                []                                              , [] ,
                                "" , "" ,
                                "life.svg")

  static "LINDA"     = new Coin("LINDA"     , "Linda"                         , 50000000000     ,
                                []                                              , [] ,
                                "" , "" ,
                                "linda.svg")

  static "LINK"      = new Coin("LINK"      , "ChainLink"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "link.svg")

  static "LINX"      = new Coin("LINX"      , "Linx"                          , 100000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "linx.svg")

  static "LIR"       = new Coin("LIR"       , "LetItRide"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "lir.svg")

  static "LKC"       = new Coin("LKC"       , "LinkedCoin"                    , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "lkc.svg")

  static "LKK"       = new Coin("LKK"       , "Lykke"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "lkk.svg")

  static "LLT"       = new Coin("LLT"       , "LLToken"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "llt.svg")

  static "LMC"       = new Coin("LMC"       , "LoMoCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "lmc.svg")

  static "LNK"       = new Coin("LNK"       , "Link Platform"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "lnk.svg")

  static "LOG"       = new Coin("LOG"       , "Woodcoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "log.svg")

  static "LOT"       = new Coin("LOT"       , "LottoCoin"                     , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "lot.svg")

  static "LRC"       = new Coin("LRC"       , "Loopring"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "lrc.svg")

  static "LSK"       = new Coin("LSK"       , "Lisk"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "lsk.svg")

  static "LTB"       = new Coin("LTB"       , "LiteBar"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "ltb.svg")

  static "LTC"       = new Coin("LTC"       , "Litecoin"                      , 84000000        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "ltc.svg")

  static "LTCR"      = new Coin("LTCR"      , "Litecred"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ltcr.svg")

  static "LTCU"      = new Coin("LTCU"      , "LiteCoin Ultra"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ltcu.svg")

  static "LTG"       = new Coin("LTG"       , "LiteCoin Gold"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ltg.svg")

  static "LTH"       = new Coin("LTH"       , "LAthaan"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "lth.svg")

  static "LUN"       = new Coin("LUN"       , "Lunyr"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "lun.svg")

  static "LUNA"      = new Coin("LUNA"      , "Luna Coin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "luna.svg")

  static "LUX"       = new Coin("LUX"       , "LUXCoin"                       , 60000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "lux.svg")

  static "LVPS"      = new Coin("LVPS"      , "LevoPlus"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "lvps.svg")

  static "MAC"       = new Coin("MAC"       , "Machinecoin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mac.svg")

  static "MAD"       = new Coin("MAD"       , "SatoshiMadness"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mad.svg")

  static "MAG"       = new Coin("MAG"       , "Magnet"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mag.svg")

  static "MAGE"      = new Coin("MAGE"      , "MagicCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mage.svg")

  static "MAGN"      = new Coin("MAGN"      , "Magnetcoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "magn.svg")

  static "MAID"      = new Coin("MAID"      , "MaidSafeCoin"                  , Infinity        ,
                                ["Transaction"]                                 , [] ,
                                "" , "" ,
                                "maid.svg")

  static "MANA"      = new Coin("MANA"      , "Decentraland"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mana.svg")

  static "MAO"       = new Coin("MAO"       , "Mao Zedong"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mao.svg")

  static "MAR"       = new Coin("MAR"       , "Marijuanacoin"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mar.svg")

  static "MARS"      = new Coin("MARS"      , "Marscoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mars.svg")

  static "MARX"      = new Coin("MARX"      , "MarxCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "marx.svg")

  static "MAVRO"     = new Coin("MAVRO"     , "Mavro"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mavro.svg")

  static "MAX"       = new Coin("MAX"       , "MaxCoin"                       , Infinity        ,
                                ["Keccak"]                                      , [] ,
                                "" , "" ,
                                "max.svg")

  static "MAY"       = new Coin("MAY"       , "Theresa May Coin"              , 100000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "may.svg")

  static "MBI"       = new Coin("MBI"       , "Monster Byte"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mbi.svg")

  static "MBL"       = new Coin("MBL"       , "MobileCash"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mbl.svg")

  static "MBRS"      = new Coin("MBRS"      , "Embers"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mbrs.svg")

  static "MCAP"      = new Coin("MCAP"      , "MCAP"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mcap.svg")

  static "MCI"       = new Coin("MCI"       , "Musiconomi"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mci.svg")

  static "MCO"       = new Coin("MCO"       , "Monaco"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mco.svg")

  static "MCR"       = new Coin("MCR"       , "Macro"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mcr.svg")

  static "MCRN"      = new Coin("MCRN"      , "MACRON"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mcrn.svg")

  static "MDA"       = new Coin("MDA"       , "Moeda Loyalty Points"          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mda.svg")

  static "MDS"       = new Coin("MDS"       , "MediShares"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mds.svg")

  static "MEC"       = new Coin("MEC"       , "Megacoin"                      , 42000000        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "mec.svg")

  static "MEME"      = new Coin("MEME"      , "Memetic / PepeCoin"            , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "meme.svg")

  static "MEN"       = new Coin("MEN"       , "PeopleCoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "men.svg")

  static "MEOW"      = new Coin("MEOW"      , "Kittehcoin"                    , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "meow.svg")

  static "MER"       = new Coin("MER"       , "Mercury"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mer.svg")

  static "METAL"     = new Coin("METAL"     , "MetalCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "metal.svg")

  static "MGM"       = new Coin("MGM"       , "Magnum"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mgm.svg")

  static "MGO"       = new Coin("MGO"       , "MobileGo"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mgo.svg")

  static "MILO"      = new Coin("MILO"      , "MiloCoin"                      , 30015000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "milo.svg")

  static "MINEX"     = new Coin("MINEX"     , "Minex"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "minex.svg")

  static "MINT"      = new Coin("MINT"      , "Mintcoin"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "mint.svg")

  static "MIOTA"     = new Coin("MIOTA"     , "IOTA"                          , 2779530283      ,
                                []                                              , [] ,
                                "" , "" ,
                                "miota.svg")

  static "MKR"       = new Coin("MKR"       , "Maker"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mkr.svg")

  static "MLN"       = new Coin("MLN"       , "Melon"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mln.svg")

  static "MMXVI"     = new Coin("MMXVI"     , "MMXVI"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mmxvi.svg")

  static "MND"       = new Coin("MND"       , "MindCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mnd.svg")

  static "MNE"       = new Coin("MNE"       , "Minereum"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mne.svg")

  static "MNM"       = new Coin("MNM"       , "Mineum"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mnm.svg")

  static "MNX"       = new Coin("MNX"       , "MinexCoin"                     , 19000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mnx.svg")

  static "MOD"       = new Coin("MOD"       , "Modum"                         , 27266200        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mod.svg")

  static "MOIN"      = new Coin("MOIN"      , "Moin"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "moin.svg")

  static "MOJO"      = new Coin("MOJO"      , "MojoCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mojo.svg")

  static "MONA"      = new Coin("MONA"      , "MonaCoin"                      , Infinity        ,
                                ["Lyra2RE"]                                     , [] ,
                                "" , "" ,
                                "mona.svg")

  static "MONETA"    = new Coin("MONETA"    , "Moneta"                        , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "moneta.svg")

  static "MONEY"     = new Coin("MONEY"     , "MoneyCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "money.svg")

  static "MONK"      = new Coin("MONK"      , "Monkey Project"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "monk.svg")

  static "MOON"      = new Coin("MOON"      , "Mooncoin"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "moon.svg")

  static "MOTO"      = new Coin("MOTO"      , "Motocoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "moto.svg")

  static "MRJA"      = new Coin("MRJA"      , "GanjaCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mrja.svg")

  static "MRNG"      = new Coin("MRNG"      , "MorningStar"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mrng.svg")

  static "MRT"       = new Coin("MRT"       , "Miners' Reward Token"          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mrt.svg")

  static "MSCN"      = new Coin("MSCN"      , "Master Swiscoin"               , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mscn.svg")

  static "MSD"       = new Coin("MSD"       , "MSD"                           , 30000000000     ,
                                []                                              , [] ,
                                "" , "" ,
                                "msd.svg")

  static "MSP"       = new Coin("MSP"       , "Mothership"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "msp.svg")

  static "MST"       = new Coin("MST"       , "MustangCoin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mst.svg")

  static "MTH"       = new Coin("MTH"       , "Monetha"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mth.svg")

  static "MTL"       = new Coin("MTL"       , "Metal"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mtl.svg")

  static "MTLMC3"    = new Coin("MTLMC3"    , "Metal Music Coin"              , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mtlmc3.svg")

  static "MTM"       = new Coin("MTM"       , "MTMGaming"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mtm.svg")

  static "MTNC"      = new Coin("MTNC"      , "Masternodecoin"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "mtnc.svg")

  static "MUE"       = new Coin("MUE"       , "MonetaryUnit"                  , 4000000000      ,
                                ["Base"]                                        , [] ,
                                "" , "" ,
                                "mue.svg")

  static "MUSIC"     = new Coin("MUSIC"     , "Musicoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "music.svg")

  static "MUT"       = new Coin("MUT"       , "Mutual Coin"                   , 1000000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "mut.svg")

  static "MXT"       = new Coin("MXT"       , "MarteXcoin"                    , 5000000         ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "mxt.svg")

  static "MYB"       = new Coin("MYB"       , "MyBit Token"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "myb.svg")

  static "MYST"      = new Coin("MYST"      , "Mysterium"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "myst.svg")

  static "MZC"       = new Coin("MZC"       , "MazaCoin"                      , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "mzc.svg")

  static "NAMO"      = new Coin("NAMO"      , "NamoCoin"                      , 1200000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "namo.svg")

  static "NANOX"     = new Coin("NANOX"     , "Project-X"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "nanox.svg")

  static "NAV"       = new Coin("NAV"       , "NAV Coin"                      , Infinity        ,
                                ["X13"]                                         , [] ,
                                "" , "" ,
                                "nav.svg")

  static "NBE"       = new Coin("NBE"       , "BitCentavo"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "nbe.svg")

  static "NBIT"      = new Coin("NBIT"      , "netBit"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "nbit.svg")

  static "NDC"       = new Coin("NDC"       , "NEVERDIE"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ndc.svg")

  static "NEBL"      = new Coin("NEBL"      , "Neblio"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "nebl.svg")

  static "NEO"       = new Coin("NEO"       , "NEO"                           , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "neo.svg")

  static "NEOG"      = new Coin("NEOG"      , "NEO GOLD"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "neog.svg")

  static "NEOS"      = new Coin("NEOS"      , "NeosCoin"                      , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "neos.svg")

  static "NETKO"     = new Coin("NETKO"     , "Netko"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "netko.svg")

  static "NEVA"      = new Coin("NEVA"      , "NevaCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "neva.svg")

  static "NEWB"      = new Coin("NEWB"      , "Newbium"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "newb.svg")

  static "NIO"       = new Coin("NIO"       , "Autonio"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "nio.svg")

  static "NKA"       = new Coin("NKA"       , "IncaKoin"                      , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "nka.svg")

  static "NLC2"      = new Coin("NLC2"      , "NoLimitCoin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "nlc2.svg")

  static "NLG"       = new Coin("NLG"       , "Gulden"                        , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "nlg.svg")

  static "NMC"       = new Coin("NMC"       , "Namecoin"                      , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "nmc.svg")

  static "NMR"       = new Coin("NMR"       , "Numeraire"                     , 21000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "nmr.svg")

  static "NOBL"      = new Coin("NOBL"      , "NobleCoin"                     , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "nobl.svg")

  static "NODC"      = new Coin("NODC"      , "NodeCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "nodc.svg")

  static "NOTE"      = new Coin("NOTE"      , "DNotes"                        , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "note.svg")

  static "NRO"       = new Coin("NRO"       , "Neuro"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "nro.svg")

  static "NSR"       = new Coin("NSR"       , "NuShares"                      , Infinity        ,
                                ["Transaction"]                                 , [] ,
                                "" , "" ,
                                "nsr.svg")

  static "NTC"       = new Coin("NTC"       , "Natcoin"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "ntc.svg")

  static "NTO"       = new Coin("NTO"       , "Fujinto"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "nto.svg")

  static "NTRN"      = new Coin("NTRN"      , "Neutron"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ntrn.svg")

  static "NTWK"      = new Coin("NTWK"      , "Network Token"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ntwk.svg")

  static "NUKO"      = new Coin("NUKO"      , "Nekonium"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "nuko.svg")

  static "NULS"      = new Coin("NULS"      , "Nuls"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "nuls.svg")

  static "NVC"       = new Coin("NVC"       , "Novacoin"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "nvc.svg")

  static "NVST"      = new Coin("NVST"      , "NVO"                           , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "nvst.svg")

  static "NXC"       = new Coin("NXC"       , "Nexium"                        , Infinity        ,
                                ["Blockchain"]                                  , [] ,
                                "" , "" ,
                                "nxc.svg")

  static "NXS"       = new Coin("NXS"       , "Nexus"                         , Infinity        ,
                                ["SHA-3"]                                       , [] ,
                                "" , "" ,
                                "nxs.svg")

  static "NXT"       = new Coin("NXT"       , "Nxt"                           , 1000000000      ,
                                ["Transaction"]                                 , [] ,
                                "" , "" ,
                                "nxt.svg")

  static "NYAN"      = new Coin("NYAN"      , "Nyancoin"                      , 337000000       ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "nyan.svg")

  static "NYC"       = new Coin("NYC"       , "NewYorkCoin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "nyc.svg")

  static "OAX"       = new Coin("OAX"       , "OAX"                           , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "oax.svg")

  static "OBITS"     = new Coin("OBITS"     , "OBITS"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "obits.svg")

  static "OCEAN"     = new Coin("OCEAN"     , "BurstOcean"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ocean.svg")

  static "OCL"       = new Coin("OCL"       , "Oceanlab"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ocl.svg")

  static "OCOW"      = new Coin("OCOW"      , "OCOW"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ocow.svg")

  static "OCT"       = new Coin("OCT"       , "OracleChain"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "oct.svg")

  static "ODN"       = new Coin("ODN"       , "Obsidian"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "odn.svg")

  static "OFF"       = new Coin("OFF"       , "Cthulhu Offerings"             , Infinity        ,
                                ["Base"]                                        , [] ,
                                "" , "" ,
                                "off.svg")

  static "OHM"       = new Coin("OHM"       , "OHM"                           , 500000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "ohm.svg")

  static "OK"        = new Coin("OK"        , "OKCash"                        , 105000000       ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "ok.svg")

  static "OMC"       = new Coin("OMC"       , "Omicron"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "omc.svg")

  static "OMG"       = new Coin("OMG"       , "OmiseGO"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "omg.svg")

  static "OMNI"      = new Coin("OMNI"      , "Omni"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "omni.svg")

  static "ONG"       = new Coin("ONG"       , "onG.social"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ong.svg")

  static "ONION"     = new Coin("ONION"     , "DeepOnion"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "onion.svg")

  static "ONX"       = new Coin("ONX"       , "Onix"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "onx.svg")

  static "OP"        = new Coin("OP"        , "Operand"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "op.svg")

  static "OPAL"      = new Coin("OPAL"      , "Opal"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "opal.svg")

  static "OPES"      = new Coin("OPES"      , "Opescoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "opes.svg")

  static "OPT"       = new Coin("OPT"       , "Opus"                          , 249308531       ,
                                []                                              , [] ,
                                "" , "" ,
                                "opt.svg")

  static "ORB"       = new Coin("ORB"       , "Orbitcoin"                     , Infinity        ,
                                ["NeoScrypt"]                                   , [] ,
                                "" , "" ,
                                "orb.svg")

  static "ORLY"      = new Coin("ORLY"      , "Orlycoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "orly.svg")

  static "ORME"      = new Coin("ORME"      , "Ormeus Coin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "orme.svg")

  static "OS76"      = new Coin("OS76"      , "OsmiumCoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "os76.svg")

  static "OTN"       = new Coin("OTN"       , "Open Trading Network"          , 100000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "otn.svg")

  static "OTX"       = new Coin("OTX"       , "Octanox"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "otx.svg")

  static "OX"        = new Coin("OX"        , "OX Fina"                       , 501237838       ,
                                []                                              , [] ,
                                "" , "" ,
                                "ox.svg")

  static "OXY"       = new Coin("OXY"       , "Oxycoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "oxy.svg")

  static "P7C"       = new Coin("P7C"       , "P7Coin"                        , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "p7c.svg")

  static "PAC"       = new Coin("PAC"       , "Paccoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pac.svg")

  static "PAK"       = new Coin("PAK"       , "Pakcoin"                       , 182000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "pak.svg")

  static "PART"      = new Coin("PART"      , "Particl"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "part.svg")

  static "PASC"      = new Coin("PASC"      , "Pascal Coin"                   , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "pasc.svg")

  static "PASL"      = new Coin("PASL"      , "Pascal Lite"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pasl.svg")

  static "PAY"       = new Coin("PAY"       , "TenX"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pay.svg")

  static "PAYP"      = new Coin("PAYP"      , "PayPeer"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "payp.svg")

  static "PAYX"      = new Coin("PAYX"      , "Paypex"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "payx.svg")

  static "PBL"       = new Coin("PBL"       , "Publica"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pbl.svg")

  static "PBT"       = new Coin("PBT"       , "Primalbase Token"              , 1250            ,
                                []                                              , [] ,
                                "" , "" ,
                                "pbt.svg")

  static "PCN"       = new Coin("PCN"       , "PeepCoin"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "pcn.svg")

  static "PCOIN"     = new Coin("PCOIN"     , "Pioneer Coin"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pcoin.svg")

  static "PCS"       = new Coin("PCS"       , "Pabyosi Coin (Special)"        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pcs.svg")

  static "PDC"       = new Coin("PDC"       , "Project Decorum"               , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pdc.svg")

  static "PDG"       = new Coin("PDG"       , "PinkDog"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pdg.svg")

  static "PEC"       = new Coin("PEC"       , "Peacecoin"                     , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "pec.svg")

  static "PEPECASH"  = new Coin("PEPECASH"  , "Pepe Cash"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pepecash.svg")

  static "PEX"       = new Coin("PEX"       , "PosEx"                         , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "pex.svg")

  static "PFR"       = new Coin("PFR"       , "Payfair"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pfr.svg")

  static "PGL"       = new Coin("PGL"       , "Prospectors Gold"              , 220000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "pgl.svg")

  static "PHO"       = new Coin("PHO"       , "Photon"                        , Infinity        ,
                                ["Base"]                                        , [] ,
                                "" , "" ,
                                "pho.svg")

  static "PHR"       = new Coin("PHR"       , "Phore"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "phr.svg")

  static "PHS"       = new Coin("PHS"       , "Philosopher Stones"            , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "phs.svg")

  static "PI"        = new Coin("PI"        , "PiCoin"                        , 2941134         ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "pi.svg")

  static "PIE"       = new Coin("PIE"       , "PIECoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pie.svg")

  static "PIGGY"     = new Coin("PIGGY"     , "Piggycoin"                     , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "piggy.svg")

  static "PING"      = new Coin("PING"      , "CryptoPing"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ping.svg")

  static "PINK"      = new Coin("PINK"      , "PinkCoin"                      , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "pink.svg")

  static "PIPL"      = new Coin("PIPL"      , "PiplCoin"                      , 7531907537      ,
                                []                                              , [] ,
                                "" , "" ,
                                "pipl.svg")

  static "PIRL"      = new Coin("PIRL"      , "Pirl"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pirl.svg")

  static "PIVX"      = new Coin("PIVX"      , "PIVX"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pivx.svg")

  static "PIX"       = new Coin("PIX"       , "Lampix"                        , 657154880       ,
                                []                                              , [] ,
                                "" , "" ,
                                "pix.svg")

  static "PIZZA"     = new Coin("PIZZA"     , "PizzaCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pizza.svg")

  static "PKB"       = new Coin("PKB"       , "ParkByte"                      , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "pkb.svg")

  static "PLACO"     = new Coin("PLACO"     , "PlayerCoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "placo.svg")

  static "PLBT"      = new Coin("PLBT"      , "Polybius"                      , Infinity        ,
                                ["Smart"]                                       , [] ,
                                "" , "" ,
                                "plbt.svg")

  static "PLC"       = new Coin("PLC"       , "PlusCoin"                      , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "plc.svg")

  static "PLNC"      = new Coin("PLNC"      , "PLNcoin"                       , 38540000        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "plnc.svg")

  static "PLR"       = new Coin("PLR"       , "Pillar"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "plr.svg")

  static "PLU"       = new Coin("PLU"       , "Pluton"                        , 20000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "plu.svg")

  static "PLX"       = new Coin("PLX"       , "PlexCoin"                      , Infinity        ,
                                ["Scrypt-N"]                                    , [] ,
                                "" , "" ,
                                "plx.svg")

  static "PND"       = new Coin("PND"       , "Pandacoin"                     , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "pnd.svg")

  static "PNX"       = new Coin("PNX"       , "Phantomx"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pnx.svg")

  static "POE"       = new Coin("POE"       , "Po.et"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "poe.svg")

  static "POKE"      = new Coin("POKE"      , "PokeCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "poke.svg")

  static "POLL"      = new Coin("POLL"      , "ClearPoll"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "poll.svg")

  static "PONZI"     = new Coin("PONZI"     , "PonziCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ponzi.svg")

  static "POP"       = new Coin("POP"       , "PopularCoin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pop.svg")

  static "POS"       = new Coin("POS"       , "PoSToken"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pos.svg")

  static "POST"      = new Coin("POST"      , "PostCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "post.svg")

  static "POSW"      = new Coin("POSW"      , "PoSW Coin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "posw.svg")

  static "POT"       = new Coin("POT"       , "PotCoin"                       , 420000000       ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "pot.svg")

  static "POWR"      = new Coin("POWR"      , "Power Ledger"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "powr.svg")

  static "PPC"       = new Coin("PPC"       , "Peercoin"                      , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "ppc.svg")

  static "PPP"       = new Coin("PPP"       , "PayPie"                        , 165000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "ppp.svg")

  static "PPT"       = new Coin("PPT"       , "Populous"                      , 53252246        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ppt.svg")

  static "PPY"       = new Coin("PPY"       , "Peerplays"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ppy.svg")

  static "PR"        = new Coin("PR"        , "Prototanium"                   , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "pr.svg")

  static "PRC"       = new Coin("PRC"       , "PRCoin"                        , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "prc.svg")

  static "PRE"       = new Coin("PRE"       , "Presearch"                     , 1000000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "pre.svg")

  static "PRES"      = new Coin("PRES"      , "President Trump"               , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pres.svg")

  static "PRG"       = new Coin("PRG"       , "Paragon"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "prg.svg")

  static "PRIMU"     = new Coin("PRIMU"     , "Primulon"                      , 750000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "primu.svg")

  static "PRIX"      = new Coin("PRIX"      , "Privatix"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "prix.svg")

  static "PRL"       = new Coin("PRL"       , "Oyster Pearl"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "prl.svg")

  static "PRM"       = new Coin("PRM"       , "PrismChain"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "prm.svg")

  static "PRN"       = new Coin("PRN"       , "Protean"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "prn.svg")

  static "PROC"      = new Coin("PROC"      , "ProCurrency"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "proc.svg")

  static "PRX"       = new Coin("PRX"       , "Printerium"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "prx.svg")

  static "PST"       = new Coin("PST"       , "Primas"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pst.svg")

  static "PSY"       = new Coin("PSY"       , "Psilocybin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "psy.svg")

  static "PTC"       = new Coin("PTC"       , "Pesetacoin"                    , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "ptc.svg")

  static "PTOY"      = new Coin("PTOY"      , "Patientory"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ptoy.svg")

  static "PULSE"     = new Coin("PULSE"     , "Pulse"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pulse.svg")

  static "PURA"      = new Coin("PURA"      , "Pura"                          , 350000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "pura.svg")

  static "PURE"      = new Coin("PURE"      , "Pure"                          , 20000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "pure.svg")

  static "PUT"       = new Coin("PUT"       , "PutinCoin"                     , 2000000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "put.svg")

  static "PX"        = new Coin("PX"        , "PX"                            , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "px.svg")

  static "PXC"       = new Coin("PXC"       , "Phoenixcoin"                   , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "pxc.svg")

  static "PXI"       = new Coin("PXI"       , "Prime-XI"                      , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "pxi.svg")

  static "PZM"       = new Coin("PZM"       , "PRIZM"                         , 6000000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "pzm.svg")

  static "Q2C"       = new Coin("Q2C"       , "QubitCoin"                     , Infinity        ,
                                ["Qubit"]                                       , [] ,
                                "" , "" ,
                                "q2c.svg")

  static "QASH"      = new Coin("QASH"      , "QASH"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "qash.svg")

  static "QAU"       = new Coin("QAU"       , "Quantum"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "qau.svg")

  static "QBC"       = new Coin("QBC"       , "Quebecoin"                     , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "qbc.svg")

  static "QBK"       = new Coin("QBK"       , "Qibuck Asset"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "qbk.svg")

  static "QCN"       = new Coin("QCN"       , "QuazarCoin"                    , Infinity        ,
                                ["CPU"]                                         , [] ,
                                "" , "" ,
                                "qcn.svg")

  static "QORA"      = new Coin("QORA"      , "Qora"                          , Infinity        ,
                                ["Transaction"]                                 , [] ,
                                "" , "" ,
                                "qora.svg")

  static "QRK"       = new Coin("QRK"       , "Quark"                         , Infinity        ,
                                ["Quark"]                                       , [] ,
                                "" , "" ,
                                "qrk.svg")

  static "QRL"       = new Coin("QRL"       , "Quantum Resistant Ledger"      , 105000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "qrl.svg")

  static "QSP"       = new Coin("QSP"       , "Quantstamp"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "qsp.svg")

  static "QTL"       = new Coin("QTL"       , "Quatloo"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "qtl.svg")

  static "QTUM"      = new Coin("QTUM"      , "Qtum"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "qtum.svg")

  static "QVT"       = new Coin("QVT"       , "Qvolta"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "qvt.svg")

  static "QWARK"     = new Coin("QWARK"     , "Qwark"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "qwark.svg")

  static "R"         = new Coin("R"         , "Revain"                        , 484450000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "r.svg")

  static "RADS"      = new Coin("RADS"      , "Radium"                        , Infinity        ,
                                ["Smartchain"]                                  , [] ,
                                "" , "" ,
                                "rads.svg")

  static "RAIN"      = new Coin("RAIN"      , "Condensate"                    , 500000000       ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "rain.svg")

  static "RBBT"      = new Coin("RBBT"      , "RabbitCoin"                    , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "rbbt.svg")

  static "RBIES"     = new Coin("RBIES"     , "Rubies"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rbies.svg")

  static "RBT"       = new Coin("RBT"       , "Rimbit"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rbt.svg")

  static "RBX"       = new Coin("RBX"       , "Ripto Bux"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rbx.svg")

  static "RBY"       = new Coin("RBY"       , "Rubycoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rby.svg")

  static "RC"        = new Coin("RC"        , "RussiaCoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rc.svg")

  static "RDD"       = new Coin("RDD"       , "ReddCoin"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "rdd.svg")

  static "RDN"       = new Coin("RDN"       , "Raiden Network Token"          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rdn.svg")

  static "REAL"      = new Coin("REAL"      , "REAL"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "real.svg")

  static "REC"       = new Coin("REC"       , "Regalcoin"                     , 27000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rec.svg")

  static "RED"       = new Coin("RED"       , "RedCoin"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "red.svg")

  static "REE"       = new Coin("REE"       , "ReeCoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ree.svg")

  static "REGA"      = new Coin("REGA"      , "Regacoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rega.svg")

  static "REP"       = new Coin("REP"       , "Augur"                         , Infinity        ,
                                ["Smart"]                                       , [] ,
                                "" , "" ,
                                "rep.svg")

  static "REQ"       = new Coin("REQ"       , "Request Network"               , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "req.svg")

  static "REX"       = new Coin("REX"       , "REX"                           , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rex.svg")

  static "RHFC"      = new Coin("RHFC"      , "RHFCoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rhfc.svg")

  static "RHOC"      = new Coin("RHOC"      , "RChain"                        , 1000000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "rhoc.svg")

  static "RIC"       = new Coin("RIC"       , "Riecoin"                       , Infinity        ,
                                ["CPU"]                                         , [] ,
                                "" , "" ,
                                "ric.svg")

  static "RICHX"     = new Coin("RICHX"     , "RichCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "richx.svg")

  static "RIDE"      = new Coin("RIDE"      , "Ride My Car"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ride.svg")

  static "RISE"      = new Coin("RISE"      , "Rise"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rise.svg")

  static "RIYA"      = new Coin("RIYA"      , "Etheriya"                      , 100000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "riya.svg")

  static "RKC"       = new Coin("RKC"       , "Royal Kingdom Coin"            , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rkc.svg")

  static "RLC"       = new Coin("RLC"       , "iExec RLC"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rlc.svg")

  static "RLT"       = new Coin("RLT"       , "RouletteToken"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rlt.svg")

  static "RMC"       = new Coin("RMC"       , "Russian Miner Coin"            , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rmc.svg")

  static "RNS"       = new Coin("RNS"       , "Renos"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rns.svg")

  static "ROC"       = new Coin("ROC"       , "Rasputin Online Coin"          , 5000000         ,
                                []                                              , [] ,
                                "" , "" ,
                                "roc.svg")

  static "ROOFS"     = new Coin("ROOFS"     , "Roofs"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "roofs.svg")

  static "ROYAL"     = new Coin("ROYAL"     , "RoyalCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "royal.svg")

  static "RPC"       = new Coin("RPC"       , "RonPaulCoin"                   , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "rpc.svg")

  static "RPX"       = new Coin("RPX"       , "Red Pulse"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rpx.svg")

  static "RSGP"      = new Coin("RSGP"      , "RSGPcoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rsgp.svg")

  static "RUBIT"     = new Coin("RUBIT"     , "RubleBit"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rubit.svg")

  static "RUNNERS"   = new Coin("RUNNERS"   , "Runners"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "runners.svg")

  static "RUP"       = new Coin("RUP"       , "Rupee"                         , 84000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rup.svg")

  static "RUPX"      = new Coin("RUPX"      , "Rupaya"                        , 8400000         ,
                                []                                              , [] ,
                                "" , "" ,
                                "rupx.svg")

  static "RUSTBITS"  = new Coin("RUSTBITS"  , "Rustbits"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rustbits.svg")

  static "RVT"       = new Coin("RVT"       , "Rivetz"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "rvt.svg")

  static "RYZ"       = new Coin("RYZ"       , "ANRYZE"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ryz.svg")

  static "SAC"       = new Coin("SAC"       , "SACoin"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sac.svg")

  static "SAFEX"     = new Coin("SAFEX"     , "Safe Exchange Coin"            , 2147483647      ,
                                []                                              , [] ,
                                "" , "" ,
                                "safex.svg")

  static "SAGA"      = new Coin("SAGA"      , "SagaCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "saga.svg")

  static "SAK"       = new Coin("SAK"       , "Sharkcoin"                     , Infinity        ,
                                ["Base"]                                        , [] ,
                                "" , "" ,
                                "sak.svg")

  static "SALT"      = new Coin("SALT"      , "SALT"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "salt.svg")

  static "SAN"       = new Coin("SAN"       , "Santiment Network Token"       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "san.svg")

  static "SANDG"     = new Coin("SANDG"     , "Save and Gain"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sandg.svg")

  static "SBC"       = new Coin("SBC"       , "StrikeBitClub"                 , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "sbc.svg")

  static "SBD"       = new Coin("SBD"       , "Steem Dollars"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sbd.svg")

  static "SBTC"      = new Coin("SBTC"      , "Super Bitcoin [Futures]"       , 21210000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sbtc.svg")

  static "SC"        = new Coin("SC"        , "Siacoin"                       , Infinity        ,
                                ["Blake2b"]                                     , [] ,
                                "" , "" ,
                                "sc.svg")

  static "SCL"       = new Coin("SCL"       , "Social"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "scl.svg")

  static "SCORE"     = new Coin("SCORE"     , "Scorecoin"                     , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "score.svg")

  static "SCRT"      = new Coin("SCRT"      , "SecretCoin"                    , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "scrt.svg")

  static "SCS"       = new Coin("SCS"       , "Speedcash"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "scs.svg")

  static "SDC"       = new Coin("SDC"       , "ShadowCash"                    , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "sdc.svg")

  static "SDP"       = new Coin("SDP"       , "SydPak"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sdp.svg")

  static "SDRN"      = new Coin("SDRN"      , "Senderon"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sdrn.svg")

  static "SEND"      = new Coin("SEND"      , "Social Send"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "send.svg")

  static "SEQ"       = new Coin("SEQ"       , "Sequence"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "seq.svg")

  static "SFC"       = new Coin("SFC"       , "Solarflarecoin"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sfc.svg")

  static "SFE"       = new Coin("SFE"       , "SafeCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sfe.svg")

  static "SGR"       = new Coin("SGR"       , "Sugar Exchange"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sgr.svg")

  static "SH"        = new Coin("SH"        , "Shilling"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sh.svg")

  static "SHA"       = new Coin("SHA"       , "SHACoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sha.svg")

  static "SHDW"      = new Coin("SHDW"      , "Shadow Token"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "shdw.svg")

  static "SHELL"     = new Coin("SHELL"     , "ShellCoin"                     , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "shell.svg")

  static "SHIFT"     = new Coin("SHIFT"     , "Shift"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "shift.svg")

  static "SHND"      = new Coin("SHND"      , "StrongHands"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "shnd.svg")

  static "SHORTY"    = new Coin("SHORTY"    , "Shorty"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "shorty.svg")

  static "SIB"       = new Coin("SIB"       , "SIBCoin"                       , Infinity        ,
                                ["X11gost"]                                     , [] ,
                                "" , "" ,
                                "sib.svg")

  static "SIC"       = new Coin("SIC"       , "Swisscoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sic.svg")

  static "SIFT"      = new Coin("SIFT"      , "Smart Investment Fund Token"   , 722935          ,
                                []                                              , [] ,
                                "" , "" ,
                                "sift.svg")

  static "SIGMA"     = new Coin("SIGMA"     , "SIGMAcoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sigma.svg")

  static "SIGT"      = new Coin("SIGT"      , "Signatum"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sigt.svg")

  static "SISA"      = new Coin("SISA"      , "SISA"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sisa.svg")

  static "SJCX"      = new Coin("SJCX"      , "Storjcoin X"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sjcx.svg")

  static "SKC"       = new Coin("SKC"       , "Skeincoin"                     , Infinity        ,
                                ["Skein"]                                       , [] ,
                                "" , "" ,
                                "skc.svg")

  static "SKIN"      = new Coin("SKIN"      , "SkinCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "skin.svg")

  static "SKR"       = new Coin("SKR"       , "Sakuracoin"                    , 105100000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "skr.svg")

  static "SKULL"     = new Coin("SKULL"     , "Pirate Blocks"                 , 240000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "skull.svg")

  static "SKY"       = new Coin("SKY"       , "Skycoin"                       , 100000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "sky.svg")

  static "SLEVIN"    = new Coin("SLEVIN"    , "Slevin"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "slevin.svg")

  static "SLFI"      = new Coin("SLFI"      , "Selfiecoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "slfi.svg")

  static "SLG"       = new Coin("SLG"       , "Sterlingcoin"                  , Infinity        ,
                                ["X13"]                                         , [] ,
                                "" , "" ,
                                "slg.svg")

  static "SLING"     = new Coin("SLING"     , "Sling"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sling.svg")

  static "SLM"       = new Coin("SLM"       , "Slimcoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "slm.svg")

  static "SLR"       = new Coin("SLR"       , "SolarCoin"                     , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "slr.svg")

  static "SLS"       = new Coin("SLS"       , "SaluS"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sls.svg")

  static "SMC"       = new Coin("SMC"       , "SmartCoin"                     , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "smc.svg")

  static "SMLY"      = new Coin("SMLY"      , "SmileyCoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "smly.svg")

  static "SMT"       = new Coin("SMT"       , "SmartMesh"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "smt.svg")

  static "SNAKE"     = new Coin("SNAKE"     , "SnakeEyes"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "snake.svg")

  static "SNC"       = new Coin("SNC"       , "SunContract"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "snc.svg")

  static "SND"       = new Coin("SND"       , "Sand Coin"                     , 2684319         ,
                                []                                              , [] ,
                                "" , "" ,
                                "snd.svg")

  static "SNGLS"     = new Coin("SNGLS"     , "SingularDTV"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sngls.svg")

  static "SNM"       = new Coin("SNM"       , "SONM"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "snm.svg")

  static "SNOV"      = new Coin("SNOV"      , "Snovio"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "snov.svg")

  static "SNRG"      = new Coin("SNRG"      , "Synergy"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "snrg.svg")

  static "SNT"       = new Coin("SNT"       , "Status"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "snt.svg")

  static "SOAR"      = new Coin("SOAR"      , "Soarcoin"                      , 5000000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "soar.svg")

  static "SOCC"      = new Coin("SOCC"      , "SocialCoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "socc.svg")

  static "SOIL"      = new Coin("SOIL"      , "SOILcoin"                      , Infinity        ,
                                ["Dagger-Hashimoto"]                            , [] ,
                                "" , "" ,
                                "soil.svg")

  static "SOJ"       = new Coin("SOJ"       , "Sojourn"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "soj.svg")

  static "SONG"      = new Coin("SONG"      , "SongCoin"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "song.svg")

  static "SOON"      = new Coin("SOON"      , "SoonCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "soon.svg")

  static "SPACE"     = new Coin("SPACE"     , "SpaceCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "space.svg")

  static "SPANK"     = new Coin("SPANK"     , "SpankChain"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "spank.svg")

  static "SPEX"      = new Coin("SPEX"      , "SproutsExtreme"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "spex.svg")

  static "SPF"       = new Coin("SPF"       , "SportyFi"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "spf.svg")

  static "SPHR"      = new Coin("SPHR"      , "Sphere"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sphr.svg")

  static "SPORT"     = new Coin("SPORT"     , "SportsCoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sport.svg")

  static "SPR"       = new Coin("SPR"       , "SpreadCoin"                    , Infinity        ,
                                ["SpreadX11"]                                   , [] ,
                                "" , "" ,
                                "spr.svg")

  static "SPRTS"     = new Coin("SPRTS"     , "Sprouts"                       , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "sprts.svg")

  static "SPT"       = new Coin("SPT"       , "Spots"                         , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "spt.svg")

  static "SRC"       = new Coin("SRC"       , "SecureCoin"                    , Infinity        ,
                                ["Base"]                                        , [] ,
                                "" , "" ,
                                "src.svg")

  static "SSS"       = new Coin("SSS"       , "Sharechain"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sss.svg")

  static "STA"       = new Coin("STA"       , "Starta"                        , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "sta.svg")

  static "STARS"     = new Coin("STARS"     , "StarCash Network"              , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "stars.svg")

  static "START"     = new Coin("START"     , "Startcoin"                     , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "start.svg")

  static "STC"       = new Coin("STC"       , "Santa Coin"                    , 28000000        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "stc.svg")

  static "STCN"      = new Coin("STCN"      , "Stakecoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "stcn.svg")

  static "STEEM"     = new Coin("STEEM"     , "Steem"                         , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "steem.svg")

  static "STEPS"     = new Coin("STEPS"     , "Steps"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "steps.svg")

  static "STEX"      = new Coin("STEX"      , "STEX"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "stex.svg")

  static "STORJ"     = new Coin("STORJ"     , "Storj"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "storj.svg")

  static "STRAT"     = new Coin("STRAT"     , "Stratis"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "strat.svg")

  static "STRC"      = new Coin("STRC"      , "StarCredits"                   , 20000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "strc.svg")

  static "STS"       = new Coin("STS"       , "Stress"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sts.svg")

  static "STU"       = new Coin("STU"       , "bitJob"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "stu.svg")

  static "STV"       = new Coin("STV"       , "Sativacoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "stv.svg")

  static "STX"       = new Coin("STX"       , "Stox"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "stx.svg")

  static "SUB"       = new Coin("SUB"       , "Substratum"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sub.svg")

  static "SUMO"      = new Coin("SUMO"      , "Sumokoin"                      , 88888888        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sumo.svg")

  static "SUPER"     = new Coin("SUPER"     , "SuperCoin"                     , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "super.svg")

  static "SUR"       = new Coin("SUR"       , "Suretly"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sur.svg")

  static "SWIFT"     = new Coin("SWIFT"     , "Bitswift"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "swift.svg")

  static "SWING"     = new Coin("SWING"     , "Swing"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "swing.svg")

  static "SWP"       = new Coin("SWP"       , "Swapcoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "swp.svg")

  static "SWT"       = new Coin("SWT"       , "Swarm City"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "swt.svg")

  static "SXC"       = new Coin("SXC"       , "Sexcoin"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "sxc.svg")

  static "SYNC"      = new Coin("SYNC"      , "Sync"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "sync.svg")

  static "SYNX"      = new Coin("SYNX"      , "Syndicate"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "synx.svg")

  static "SYS"       = new Coin("SYS"       , "Syscoin"                       , 888000000       ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "sys.svg")

  static "TAAS"      = new Coin("TAAS"      , "TaaS"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "taas.svg")

  static "TAG"       = new Coin("TAG"       , "TagCoin"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "tag.svg")

  static "TAGR"      = new Coin("TAGR"      , "TAGRcoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tagr.svg")

  static "TAJ"       = new Coin("TAJ"       , "TajCoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "taj.svg")

  static "TALK"      = new Coin("TALK"      , "BTCtalkcoin"                   , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "talk.svg")

  static "TCC"       = new Coin("TCC"       , "The ChampCoin"                 , 516085281       ,
                                []                                              , [] ,
                                "" , "" ,
                                "tcc.svg")

  static "TCOIN"     = new Coin("TCOIN"     , "T-coin"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tcoin.svg")

  static "TCR"       = new Coin("TCR"       , "TheCreed"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tcr.svg")

  static "TEAM"      = new Coin("TEAM"      , "TeamUp"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "team.svg")

  static "TEK"       = new Coin("TEK"       , "TEKcoin"                       , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "tek.svg")

  static "TELL"      = new Coin("TELL"      , "Tellurion"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tell.svg")

  static "TER"       = new Coin("TER"       , "TerraNova"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ter.svg")

  static "TERA"      = new Coin("TERA"      , "TeraCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tera.svg")

  static "TES"       = new Coin("TES"       , "TeslaCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tes.svg")

  static "TESLA"     = new Coin("TESLA"     , "TeslaCoilCoin"                 , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "tesla.svg")

  static "TFL"       = new Coin("TFL"       , "TrueFlip"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tfl.svg")

  static "TGC"       = new Coin("TGC"       , "Tigercoin"                     , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "tgc.svg")

  static "TGT"       = new Coin("TGT"       , "Target Coin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tgt.svg")

  static "THC"       = new Coin("THC"       , "HempCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "thc.svg")

  static "THS"       = new Coin("THS"       , "TechShares"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ths.svg")

  static "TIE"       = new Coin("TIE"       , "TIES Network"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tie.svg")

  static "TIME"      = new Coin("TIME"      , "Chronobank"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "time.svg")

  static "TIPS"      = new Coin("TIPS"      , "FedoraCoin"                    , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "tips.svg")

  static "TIT"       = new Coin("TIT"       , "Titcoin"                       , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "tit.svg")

  static "TIX"       = new Coin("TIX"       , "Blocktix"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "tix.svg")

  static "TKN"       = new Coin("TKN"       , "TokenCard"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tkn.svg")

  static "TKR"       = new Coin("TKR"       , "CryptoInsight"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tkr.svg")

  static "TKS"       = new Coin("TKS"       , "Tokes"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tks.svg")

  static "TLE"       = new Coin("TLE"       , "Tattoocoin (Limited Edition)"  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tle.svg")

  static "TNB"       = new Coin("TNB"       , "Time New Bank"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tnb.svg")

  static "TNT"       = new Coin("TNT"       , "Tierion"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tnt.svg")

  static "TOA"       = new Coin("TOA"       , "ToaCoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "toa.svg")

  static "TODAY"     = new Coin("TODAY"     , "TodayCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "today.svg")

  static "TOK"       = new Coin("TOK"       , "Tokugawa"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tok.svg")

  static "TOKEN"     = new Coin("TOKEN"     , "SwapToken"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "token.svg")

  static "TOP"       = new Coin("TOP"       , "TopCoin"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "top.svg")

  static "TOPAZ"     = new Coin("TOPAZ"     , "Topaz Coin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "topaz.svg")

  static "TOR"       = new Coin("TOR"       , "Torcoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tor.svg")

  static "TRADE"     = new Coin("TRADE"     , "Tradecoin"                     , 25000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "trade.svg")

  static "TRC"       = new Coin("TRC"       , "Terracoin"                     , 42000000        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "trc.svg")

  static "TRCT"      = new Coin("TRCT"      , "Tracto"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "trct.svg")

  static "TRI"       = new Coin("TRI"       , "Triangles"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tri.svg")

  static "TRIA"      = new Coin("TRIA"      , "Triaconta"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tria.svg")

  static "TRICK"     = new Coin("TRICK"     , "TrickyCoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "trick.svg")

  static "TRIG"      = new Coin("TRIG"      , "Triggers"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "trig.svg")

  static "TRK"       = new Coin("TRK"       , "Truckcoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "trk.svg")

  static "TROLL"     = new Coin("TROLL"     , "Trollcoin"                     , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "troll.svg")

  static "TRST"      = new Coin("TRST"      , "WeTrust"                       , 100000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "trst.svg")

  static "TRUMP"     = new Coin("TRUMP"     , "TrumpCoin"                     , Infinity        ,
                                ["Blake256"]                                    , [] ,
                                "" , "" ,
                                "trump.svg")

  static "TRUST"     = new Coin("TRUST"     , "TrustPlus"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "trust.svg")

  static "TRX"       = new Coin("TRX"       , "TRON"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "trx.svg")

  static "TSE"       = new Coin("TSE"       , "Tattoocoin (Standard Edition)" , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tse.svg")

  static "TSL"       = new Coin("TSL"       , "Energo"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tsl.svg")

  static "TSTR"      = new Coin("TSTR"      , "Tristar Coin"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tstr.svg")

  static "TTC"       = new Coin("TTC"       , "TittieCoin"                    , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "ttc.svg")

  static "TURBO"     = new Coin("TURBO"     , "TurboCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "turbo.svg")

  static "TX"        = new Coin("TX"        , "TransferCoin"                  , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "tx.svg")

  static "TYC"       = new Coin("TYC"       , "Tyrocoin"                      , Infinity        ,
                                ["Base"]                                        , [] ,
                                "" , "" ,
                                "tyc.svg")

  static "TYCHO"     = new Coin("TYCHO"     , "Tychocoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "tycho.svg")

  static "TZC"       = new Coin("TZC"       , "TrezarCoin"                    , 400000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "tzc.svg")

  static "UAHPAY"    = new Coin("UAHPAY"    , "UAHPay"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "uahpay.svg")

  static "UBQ"       = new Coin("UBQ"       , "Ubiq"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ubq.svg")

  static "UET"       = new Coin("UET"       , "Useless Ethereum Token"        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "uet.svg")

  static "UFO"       = new Coin("UFO"       , "UFO Coin"                      , 4000000000      ,
                                ["NeoScrypt"]                                   , [] ,
                                "" , "" ,
                                "ufo.svg")

  static "UFR"       = new Coin("UFR"       , "Upfiring"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ufr.svg")

  static "UGT"       = new Coin("UGT"       , "UG Token"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ugt.svg")

  static "UIS"       = new Coin("UIS"       , "Unitus"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "uis.svg")

  static "UKG"       = new Coin("UKG"       , "Unikoin Gold"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ukg.svg")

  static "ULA"       = new Coin("ULA"       , "Ulatech"                       , 90000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ula.svg")

  static "UNB"       = new Coin("UNB"       , "UnbreakableCoin"               , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "unb.svg")

  static "UNC"       = new Coin("UNC"       , "UNCoin"                        , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "unc.svg")

  static "UNI"       = new Coin("UNI"       , "Universe"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "uni.svg")

  static "UNIC"      = new Coin("UNIC"      , "UniCoin"                       , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "unic.svg")

  static "UNIFY"     = new Coin("UNIFY"     , "Unify"                         , 19276800        ,
                                []                                              , [] ,
                                "" , "" ,
                                "unify.svg")

  static "UNIT"      = new Coin("UNIT"      , "Universal Currency"            , 210000000       ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "unit.svg")

  static "UNITS"     = new Coin("UNITS"     , "GameUnits"                     , 13000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "units.svg")

  static "UNITY"     = new Coin("UNITY"     , "SuperNET"                      , Infinity        ,
                                ["NXT"]                                         , [] ,
                                "" , "" ,
                                "unity.svg")

  static "UNO"       = new Coin("UNO"       , "Unobtanium"                    , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "uno.svg")

  static "UNRC"      = new Coin("UNRC"      , "UniversalRoyalCoin"            , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "unrc.svg")

  static "UNY"       = new Coin("UNY"       , "Unity Ingot"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "uny.svg")

  static "UQC"       = new Coin("UQC"       , "Uquid Coin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "uqc.svg")

  static "UR"        = new Coin("UR"        , "UR"                            , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ur.svg")

  static "URC"       = new Coin("URC"       , "Unrealcoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "urc.svg")

  static "URO"       = new Coin("URO"       , "Uro"                           , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "uro.svg")

  static "USC"       = new Coin("USC"       , "Ultimate Secure Cash"          , 200084200       ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "usc.svg")

  static "USDE"      = new Coin("USDE"      , "USDe"                          , 1600000000      ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "usde.svg")

  static "USDT"      = new Coin("USDT"      , "Tether"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "usdt.svg")

  static "USNBT"     = new Coin("USNBT"     , "NuBits"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "usnbt.svg")

  static "UTA"       = new Coin("UTA"       , "UtaCoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "uta.svg")

  static "UTC"       = new Coin("UTC"       , "UltraCoin"                     , Infinity        ,
                                ["Scrypt-Jane"]                                 , [] ,
                                "" , "" ,
                                "utc.svg")

  static "V"         = new Coin("V"         , "Version"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "v.svg")

  static "VAL"       = new Coin("VAL"       , "Valorbit"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "val.svg")

  static "VASH"      = new Coin("VASH"      , "VPNCoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "vash.svg")

  static "VC"        = new Coin("VC"        , "VirtualCoin"                   , 4000000000      ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "vc.svg")

  static "VEC2"      = new Coin("VEC2"      , "VectorAI"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "vec2.svg")

  static "VEE"       = new Coin("VEE"       , "BLOCKv"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "vee.svg")

  static "VEN"       = new Coin("VEN"       , "VeChain"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "ven.svg")

  static "VERI"      = new Coin("VERI"      , "Veritaseum"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "veri.svg")

  static "VGC"       = new Coin("VGC"       , "VegasCoin"                     , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "vgc.svg")

  static "VIA"       = new Coin("VIA"       , "Viacoin"                       , 23000000        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "via.svg")

  static "VIB"       = new Coin("VIB"       , "Viberate"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "vib.svg")

  static "VIBE"      = new Coin("VIBE"      , "VIBE"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "vibe.svg")

  static "VIDZ"      = new Coin("VIDZ"      , "PureVidz"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "vidz.svg")

  static "VIP"       = new Coin("VIP"       , "VIP Tokens"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "vip.svg")

  static "VISIO"     = new Coin("VISIO"     , "Visio"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "visio.svg")

  static "VIU"       = new Coin("VIU"       , "Viuly"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "viu.svg")

  static "VIVO"      = new Coin("VIVO"      , "VIVO"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "vivo.svg")

  static "VLT"       = new Coin("VLT"       , "Veltor"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "vlt.svg")

  static "VLTC"      = new Coin("VLTC"      , "Vault Coin"                    , 1000000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "vltc.svg")

  static "VOISE"     = new Coin("VOISE"     , "Voise"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "voise.svg")

  static "VOLT"      = new Coin("VOLT"      , "Bitvolt"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "volt.svg")

  static "VOT"       = new Coin("VOT"       , "VoteCoin"                      , 220000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "vot.svg")

  static "VOX"       = new Coin("VOX"       , "Voxels"                        , 210000000       ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "vox.svg")

  static "VOYA"      = new Coin("VOYA"      , "Voyacoin"                      , Infinity        ,
                                ["Pluck"]                                       , [] ,
                                "" , "" ,
                                "voya.svg")

  static "VPRC"      = new Coin("VPRC"      , "VapersCoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "vprc.svg")

  static "VRC"       = new Coin("VRC"       , "VeriCoin"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "vrc.svg")

  static "VRM"       = new Coin("VRM"       , "VeriumReserve"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "vrm.svg")

  static "VRS"       = new Coin("VRS"       , "Veros"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "vrs.svg")

  static "VSL"       = new Coin("VSL"       , "vSlice"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "vsl.svg")

  static "VSX"       = new Coin("VSX"       , "Vsync"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "vsx.svg")

  static "VTA"       = new Coin("VTA"       , "Virtacoin"                     , 21000000000     ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "vta.svg")

  static "VTC"       = new Coin("VTC"       , "Vertcoin"                      , 84000000        ,
                                ["Lyra2RE"]                                     , [] ,
                                "" , "" ,
                                "vtc.svg")

  static "VTR"       = new Coin("VTR"       , "vTorrent"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "vtr.svg")

  static "VUC"       = new Coin("VUC"       , "Virta Unique Coin"             , 120000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "vuc.svg")

  static "VULC"      = new Coin("VULC"      , "Vulcano"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "vulc.svg")

  static "WA"        = new Coin("WA"        , "WA Space"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "wa.svg")

  static "WABI"      = new Coin("WABI"      , "WaBi"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "wabi.svg")

  static "WARP"      = new Coin("WARP"      , "WARP"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "warp.svg")

  static "WAVES"     = new Coin("WAVES"     , "Waves"                         , Infinity        ,
                                ["Transaction"]                                 , [] ,
                                "" , "" ,
                                "waves.svg")

  static "WAY"       = new Coin("WAY"       , "WayGuide"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "way.svg")

  static "WBB"       = new Coin("WBB"       , "Wild Beast Block"              , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "wbb.svg")

  static "WBC"       = new Coin("WBC"       , "WalletBuildersCoin"            , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "wbc.svg")

  static "WC"        = new Coin("WC"        , "WINCOIN"                       , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "wc.svg")

  static "WCT"       = new Coin("WCT"       , "Waves Community Token"         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "wct.svg")

  static "WDC"       = new Coin("WDC"       , "WorldCoin"                     , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "wdc.svg")

  static "WEC"       = new Coin("WEC"       , "Wowecoin"                      , Infinity        ,
                                ["Keccak"]                                      , [] ,
                                "" , "" ,
                                "wec.svg")

  static "WGO"       = new Coin("WGO"       , "WavesGo"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "wgo.svg")

  static "WGR"       = new Coin("WGR"       , "Wagerr"                        , 200000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "wgr.svg")

  static "WHL"       = new Coin("WHL"       , "WhaleCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "whl.svg")

  static "WIC"       = new Coin("WIC"       , "Wi Coin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "wic.svg")

  static "WILD"      = new Coin("WILD"      , "Wild Crypto"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "wild.svg")

  static "WINGS"     = new Coin("WINGS"     , "Wings"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "wings.svg")

  static "WINK"      = new Coin("WINK"      , "Wink"                          , 80000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "wink.svg")

  static "WISH"      = new Coin("WISH"      , "MyWish"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "wish.svg")

  static "WMC"       = new Coin("WMC"       , "WMCoin"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "wmc.svg")

  static "WOMEN"     = new Coin("WOMEN"     , "WomenCoin"                     , 25000000000     ,
                                []                                              , [] ,
                                "" , "" ,
                                "women.svg")

  static "WORM"      = new Coin("WORM"      , "HealthyWormCoin"               , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "worm.svg")

  static "WOW"       = new Coin("WOW"       , "Wowcoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "wow.svg")

  static "WSX"       = new Coin("WSX"       , "WeAreSatoshi"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "wsx.svg")

  static "WTC"       = new Coin("WTC"       , "Walton"                        , 100000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "wtc.svg")

  static "WTT"       = new Coin("WTT"       , "Giga Watt Token"               , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "wtt.svg")

  static "WYV"       = new Coin("WYV"       , "Wyvern"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "wyv.svg")

  static "X2"        = new Coin("X2"        , "X2"                            , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "x2.svg")

  static "XAS"       = new Coin("XAS"       , "Asch"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xas.svg")

  static "XAU"       = new Coin("XAU"       , "Xaucoin"                       , Infinity        ,
                                ["Transaction"]                                 , [] ,
                                "" , "" ,
                                "xau.svg")

  static "XAUR"      = new Coin("XAUR"      , "Xaurum"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xaur.svg")

  static "XBC"       = new Coin("XBC"       , "Bitcoin Plus"                  , Infinity        ,
                                ["X13"]                                         , [] ,
                                "" , "" ,
                                "xbc.svg")

  static "XBL"       = new Coin("XBL"       , "Billionaire Token"             , 3315372         ,
                                ["X13"]                                         , [] ,
                                "" , "" ,
                                "xbl.svg")

  static "XBTC21"    = new Coin("XBTC21"    , "Bitcoin 21"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xbtc21.svg")

  static "XBTS"      = new Coin("XBTS"      , "Beatcoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xbts.svg")

  static "XBY"       = new Coin("XBY"       , "XTRABYTES"                     , 650000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "xby.svg")

  static "XC"        = new Coin("XC"        , "XCurrency"                     , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "xc.svg")

  static "XCN"       = new Coin("XCN"       , "Cryptonite"                    , Infinity        ,
                                ["M7"]                                          , [] ,
                                "" , "" ,
                                "xcn.svg")

  static "XCO"       = new Coin("XCO"       , "X-Coin"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xco.svg")

  static "XCP"       = new Coin("XCP"       , "Counterparty"                  , Infinity        ,
                                ["Transaction"]                                 , [] ,
                                "" , "" ,
                                "xcp.svg")

  static "XCPO"      = new Coin("XCPO"      , "Copico"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xcpo.svg")

  static "XCRE"      = new Coin("XCRE"      , "Creatio"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xcre.svg")

  static "XCS"       = new Coin("XCS"       , "CybCSec"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xcs.svg")

  static "XCT"       = new Coin("XCT"       , "C-Bit"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xct.svg")

  static "XCXT"      = new Coin("XCXT"      , "CoinonatX"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xcxt.svg")

  static "XDE2"      = new Coin("XDE2"      , "XDE II"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xde2.svg")

  static "XDN"       = new Coin("XDN"       , "DigitalNote"                   , Infinity        ,
                                ["CPU"]                                         , [] ,
                                "" , "" ,
                                "xdn.svg")

  static "XEL"       = new Coin("XEL"       , "Elastic"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xel.svg")

  static "XEM"       = new Coin("XEM"       , "NEM"                           , Infinity        ,
                                ["Blockchain"]                                  , [] ,
                                "" , "" ,
                                "xem.svg")

  static "XFT"       = new Coin("XFT"       , "Footy Cash"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xft.svg")

  static "XGOX"      = new Coin("XGOX"      , "XGOX"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xgox.svg")

  static "XGR"       = new Coin("XGR"       , "GoldReserve"                   , 40000000        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "xgr.svg")

  static "XHI"       = new Coin("XHI"       , "HiCoin"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xhi.svg")

  static "XIN"       = new Coin("XIN"       , "Infinity Economics"            , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xin.svg")

  static "XIOS"      = new Coin("XIOS"      , "Xios"                          , 21000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xios.svg")

  static "XJO"       = new Coin("XJO"       , "Joulecoin"                     , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "xjo.svg")

  static "XLC"       = new Coin("XLC"       , "LeviarCoin"                    , 54000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xlc.svg")

  static "XLM"       = new Coin("XLM"       , "Stellar"                       , Infinity        ,
                                ["Transaction"]                                 , [] ,
                                "" , "" ,
                                "xlm.svg")

  static "XLR"       = new Coin("XLR"       , "Solaris"                       , Infinity        ,
                                ["NIST5"]                                       , [] ,
                                "" , "" ,
                                "xlr.svg")

  static "XMCC"      = new Coin("XMCC"      , "MonacoCoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xmcc.svg")

  static "XMG"       = new Coin("XMG"       , "Magi"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xmg.svg")

  static "XMR"       = new Coin("XMR"       , "Monero"                        , Infinity        ,
                                ["CPU"]                                         , [] ,
                                "" , "" ,
                                "xmr.svg")

  static "XMY"       = new Coin("XMY"       , "Myriad"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xmy.svg")

  static "XNG"       = new Coin("XNG"       , "Enigma"                        , 5000000         ,
                                []                                              , [] ,
                                "" , "" ,
                                "xng.svg")

  static "XNN"       = new Coin("XNN"       , "Xenon"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xnn.svg")

  static "XOC"       = new Coin("XOC"       , "Xonecoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xoc.svg")

  static "XOT"       = new Coin("XOT"       , "Internet of Things"            , 21000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xot.svg")

  static "XP"        = new Coin("XP"        , "XP"                            , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xp.svg")

  static "XPA"       = new Coin("XPA"       , "XPlay"                         , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xpa.svg")

  static "XPD"       = new Coin("XPD"       , "PetroDollar"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xpd.svg")

  static "XPM"       = new Coin("XPM"       , "Primecoin"                     , Infinity        ,
                                ["CPU"]                                         , [] ,
                                "" , "" ,
                                "xpm.svg")

  static "XPTX"      = new Coin("XPTX"      , "PlatinumBAR"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xptx.svg")

  static "XPY"       = new Coin("XPY"       , "PayCoin"                       , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "xpy.svg")

  static "XQN"       = new Coin("XQN"       , "Quotient"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xqn.svg")

  static "XRA"       = new Coin("XRA"       , "Ratecoin"                      , Infinity        ,
                                ["X11"]                                         , [] ,
                                "" , "" ,
                                "xra.svg")

  static "XRB"       = new Coin("XRB"       , "RaiBlocks"                     , 133248290       ,
                                []                                              , [] ,
                                "" , "" ,
                                "xrb.svg")

  static "XRC"       = new Coin("XRC"       , "Rawcoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xrc.svg")

  static "XRE"       = new Coin("XRE"       , "RevolverCoin"                  , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xre.svg")

  static "XRL"       = new Coin("XRL"       , "Rialto"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xrl.svg")

  static "XRP"       = new Coin("XRP"       , "Ripple"                        , 100000000000    ,
                                ["ECDSA"]                                       , [] ,
                                "" , "" ,
                                "xrp.svg")

  static "XRY"       = new Coin("XRY"       , "Royalties"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xry.svg")

  static "XSH"       = new Coin("XSH"       , "SHIELD"                        , 660000000       ,
                                []                                              , [] ,
                                "" , "" ,
                                "xsh.svg")

  static "XSPEC"     = new Coin("XSPEC"     , "Spectrecoin"                   , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xspec.svg")

  static "XST"       = new Coin("XST"       , "Stealthcoin"                   , Infinity        ,
                                ["X13"]                                         , [] ,
                                "" , "" ,
                                "xst.svg")

  static "XSTC"      = new Coin("XSTC"      , "Safe Trade Coin"               , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xstc.svg")

  static "XTD"       = new Coin("XTD"       , "XTD Coin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xtd.svg")

  static "XTO"       = new Coin("XTO"       , "Tao"                           , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xto.svg")

  static "XTZ"       = new Coin("XTZ"       , "Tezos (Pre-Launch)"            , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xtz.svg")

  static "XUC"       = new Coin("XUC"       , "Exchange Union"                , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xuc.svg")

  static "XVC"       = new Coin("XVC"       , "Vcash"                         , Infinity        ,
                                ["Blake256"]                                    , [] ,
                                "" , "" ,
                                "xvc.svg")

  static "XVE"       = new Coin("XVE"       , "The Vegan Initiative"          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xve.svg")

  static "XVG"       = new Coin("XVG"       , "Verge"                         , 16555000000     ,
                                ["Scrypt","X17","Groestl","Blake2s","Lyra2RE2"] , [] ,
                                "" , "" ,
                                "xvg.svg")

  static "XVP"       = new Coin("XVP"       , "Virtacoinplus"                 , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xvp.svg")

  static "XWC"       = new Coin("XWC"       , "WhiteCoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xwc.svg")

  static "XYLO"      = new Coin("XYLO"      , "XYLO"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "xylo.svg")

  static "XZC"       = new Coin("XZC"       , "ZCoin"                         , Infinity        ,
                                ["Argon2"]                                      , [] ,
                                "" , "" ,
                                "xzc.svg")

  static "YAC"       = new Coin("YAC"       , "Yacoin"                        , Infinity        ,
                                ["Scrypt-Jane"]                                 , [] ,
                                "" , "" ,
                                "yac.svg")

  static "YASH"      = new Coin("YASH"      , "YashCoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "yash.svg")

  static "YEL"       = new Coin("YEL"       , "Yellow Token"                  , 21000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "yel.svg")

  static "YES"       = new Coin("YES"       , "Yescoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "yes.svg")

  static "YOC"       = new Coin("YOC"       , "Yocoin"                        , 336000000       ,
                                ["Smart"]                                       , [] ,
                                "" , "" ,
                                "yoc.svg")

  static "YOYOW"     = new Coin("YOYOW"     , "YOYOW"                         , 1000000000      ,
                                []                                              , [] ,
                                "" , "" ,
                                "yoyow.svg")

  static "ZBC"       = new Coin("ZBC"       , "Zilbercoin"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zbc.svg")

  static "ZCG"       = new Coin("ZCG"       , "ZCash Gold"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zcg.svg")

  static "ZCL"       = new Coin("ZCL"       , "ZClassic"                      , Infinity        ,
                                ["Equihash"]                                    , [] ,
                                "" , "" ,
                                "zcl.svg")

  static "ZEC"       = new Coin("ZEC"       , "Zcash"                         , Infinity        ,
                                ["Equihash"]                                    , [] ,
                                "" , "" ,
                                "zec.svg")

  static "ZEIT"      = new Coin("ZEIT"      , "Zeitcoin"                      , Infinity        ,
                                ["Scrypt"]                                      , [] ,
                                "" , "" ,
                                "zeit.svg")

  static "ZEN"       = new Coin("ZEN"       , "ZenCash"                       , 21000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zen.svg")

  static "ZENGOLD"   = new Coin("ZENGOLD"   , "ZenGold"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zengold.svg")

  static "ZENI"      = new Coin("ZENI"      , "Zennies"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zeni.svg")

  static "ZEPH"      = new Coin("ZEPH"      , "Zephyr"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zeph.svg")

  static "ZER"       = new Coin("ZER"       , "Zero"                          , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zer.svg")

  static "ZET"       = new Coin("ZET"       , "Zetacoin"                      , Infinity        ,
                                ["SHA-256"]                                     , [] ,
                                "" , "" ,
                                "zet.svg")

  static "ZMC"       = new Coin("ZMC"       , "ZetaMicron"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zmc.svg")

  static "ZNE"       = new Coin("ZNE"       , "Zonecoin"                      , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zne.svg")

  static "ZNY"       = new Coin("ZNY"       , "Bitzeny"                       , Infinity        ,
                                ["Yescrypt"]                                    , [] ,
                                "" , "" ,
                                "zny.svg")

  static "ZOI"       = new Coin("ZOI"       , "Zoin"                          , 21000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zoi.svg")

  static "ZRC"       = new Coin("ZRC"       , "ZrCoin"                        , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zrc.svg")

  static "ZRX"       = new Coin("ZRX"       , "0x"                            , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zrx.svg")

  static "ZSC"       = new Coin("ZSC"       , "Zeusshield"                    , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zsc.svg")

  static "ZSE"       = new Coin("ZSE"       , "ZSEcoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zse.svg")

  static "ZUR"       = new Coin("ZUR"       , "Zurcoin"                       , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zur.svg")

  static "ZYD"       = new Coin("ZYD"       , "Zayedcoin"                     , Infinity        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zyd.svg")

  static "ZZC"       = new Coin("ZZC"       , "ZoZoCoin"                      , 27000000        ,
                                []                                              , [] ,
                                "" , "" ,
                                "zzc.svg")

  static *[Symbol.iterator](): IterableIterator<Coin> {
    const keys = Object.keys(this)
    for (let key of keys) {
      yield (this as any)[key] as Coin
    }
  }

  static get(value: any): Coin | undefined {
    let symbol = String(value && value.symbol || value)

    for (let item of this)
      if (item.symbol === symbol)
        return item

    return undefined
  }

  static getArray(value: any): Array<Coin> {
    return new Array<any>().concat(value)
                           .map( item => this.get(item) )
                           .filter( item => item !== undefined ) as Array<Coin>
  }


  static get algorithms(): Array<string> {
    return Array.from(this)
                .reduce( (prev, item) => prev.concat(item.algorithms), new Array<string>() )
                .filter( (value, i, self) => self.indexOf(value) === i )
  }

  static get symbols(): Array<string> {
    return Array.from(this)
                .map( item => item.symbol )
  }


  private readonly _historical: Array<Historical> = new Array<Historical>()

  get historical(): Array<IHistorical> {
    return this._historical
  }

  updateHistorical(value: Array<Partial<IHistorical>> | Partial<IHistorical>) {
    (new Array<Partial<IHistorical>>())
      .concat(value)
      .map( item => new Historical(value) )
      .filter( item => item.ts > 0)
      .forEach( newItem => {

        const currentItem = this._historical.find( item => item.ts === newItem.ts )

        if (!currentItem) {
          this._historical.push(newItem)
          return
        }

        currentItem.price.update(newItem.price)
      })
  }


  private _lastPrice: Historical = new Historical()

  get lastPrice(): IHistorical {
    return this._lastPrice
  }

  updateLastPrice(value: Partial<IHistorical>) {
    const newValue = new Historical(value)

    if (newValue.ts <= this._lastPrice.ts)
      return

    this._lastPrice.price.update(newValue.price)
    this._lastPrice.ts = newValue.ts
  }


  private _volume24: number = 0

  get volume24(): number {
    return this._volume24
  }

  set volume24(value: number) {
    this._volume24 = value && parseFloat(<any>value) || this._volume24
  }


  private _available: number = 0

  get available(): number {
    return this._available
  }

  set available(value: number) {
    this._available = value && parseFloat(<any>value) || this._available
  }


  private constructor(
    readonly symbol: string,
    readonly title: string,

    readonly max: number,

    readonly algorithms: Array<string>,
    readonly systems: Array<string>,

    readonly founder: string,
    readonly start: string,

    readonly icon: string
  ){}

  private _updatePart(key: string, value: any) {
    switch (key) {
      case 'historical':
        this.updateHistorical(value)
        return

      case 'lastPrice':
        this.updateLastPrice(value)
        return

      case 'volume24':
        this.volume24 = value
        return

      case 'available':
        this.available = value
        return
    }
  }

  update(value: Partial<ICoin>) {
    if (typeof value !== 'object' || value === null)
      return

    for (let key in value)
      this._updatePart(key, (<any>value)[key])
  }


  valueOf(): string {
    return this.symbol
  }


  toJSON(): Partial<ICoin> {
    return {
      symbol: this.symbol,
      title: this.title,

      max: this.max,

      algorithms: this.algorithms,
      systems: this.systems,

      founder: this.founder,
      start: this.start,

      icon: this.icon,

      lastPrice: this.lastPrice,

      volume24: this.volume24,
      available: this.available,
    }
  }


  toNumber(): number {
    return this._lastPrice.toNumber()
  }

  toString(): string {
    return this.symbol
  }

  [Symbol.toPrimitive](hint : 'default' | 'string' | 'number') {
    switch (hint) {
      case 'default':
        return this.valueOf()
      case 'number':
        return this.toNumber()
      case 'string':
        return this.toString()
      default:
        throw new TypeError('Cannot convert Coin value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Coin'
  }
}
