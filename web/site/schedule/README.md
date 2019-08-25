---
title: Schedule
sidebar: true
order: 2
---

# Schedule

18.9.2019 (Wednesday) at Park Boutique Hotel Varaždin.

Technical lectures, single track, relevant technical content with no sales talks.

Additional activities include: OWASP Croatia meeting.

| Time          | Speaker          | Subject                                                                                                                 |
| :-----------  | :--------------- | :---------------------------------------------------------------------------------------------------------------------- |
| 08:30 - 09:00 |                  | Registration                                                                                                            |
| 09:00 - 09:05 |                  | Opening Ceremony                                                                                                        |
| 09:05 - 09:45 | Ivan Fratric     | [Flash Click2play in Web Browsers and Other Horror Stories](#flash-click2play-in-web-browsers-and-other-horror-stories) |
| 10:00 - 10:45 | Vanja Svajcer    | [Legitimate tools or weapons of mass compromise?](#legitimate-tools-or-weapons-of-mass-compromise)                      |
| 11:00 - 11:45 | Bojan Zdrnja     | [Threats seen by SANS Internet Storm Center](#threats-seen-by-sans-internet-storm-center)                               |
| 12:00 - 13:30 |                  | Lunch Break (no organized lunch, make your own arrangements)                                                            |
| 13:30 - 13:50 | Dejan Strbad     | [(Ab)using eBPF as a security tool](#ab-using-ebpf-as-a-security-tool)                                                  |
| 14:00 - 14:45 | Andrea Barisani  | [USB armory Mk II sneak peek](#usb-armory-mk-ii-sneak-peek)                                                             |
| 15:00 - 15:45 | Utkonos          | [The Basics of x64dbg](#the-basics-of-x64dbg)                                                                           |
| 16:00 - 16:45 | penguin / Deso   | [That one time someone tried to blackmail KPN](#that-one-time-someone-tried-to-blackmail-kpn)                           |
| 17:00 - 17:45 | Antonio Zekic    | [iOS exploitation](#ios-exploitation)                                                                                   |
| 17:45 - 18:00 |                  | Closing Ceremony

## Flash Click2play in Web Browsers and Other Horror Stories

Adobe Flash used to be a crowd favorite when it comes to exploiting web browsers with over 20 
0day attacks using Flash vulnerabilities caught in the wild during the last 5 years. As a 
consequence of this trend and Flash's eventual deprecation, major web browsers don't play 
Flash content by default any more and now require user interaction in order to play it, aka 
click2play. This means that an attacker sitting on a stockpile of unpatched Flash vulnerabilities now 
needs a click2play bypass for those vulnerabilities to become relevant again.

In this talk we will dive into the good, the bad and the ugly of click2play implementations in two major web 
browsers (Google Chrome and Microsoft Edge). I will show how I discovered several weaknesses 
in those implementations, including a full click2play bypass in Microsoft Edge.

#### About the speaker

Ivan Fratric is a security researcher at Google Project Zero. Before joining Project Zero he worked in the Google Security Team and before that at the University of Zagreb where he also received his Ph.D. He has been doing and publishing security research for over 10 years and is the author of several open-source security tools.

## Legitimate tools or weapons of mass compromise?

Windows desktop and servers contain a large number of legitimate tools which can also be used by attackers, once they obtain initial access. This presentation describes those tools and their usage in real world attacks.

Centralised logging and telemetry provides a wealth of information for blue team members and their day to day operations. These sources usually contain enough data to detect when attackers were successful in compromising the defended network.

But how to recognise a successful attack when the tools the attackers are using are also legitimate system administration utilities? Most Windows administrators would agree that PowerShell is an essential system administration tool but it has also been frequently seen as an attack avenue for attackers and red team activities.

Powershell is typically used to load code from remote servers and make the attacks “fileless” using reflective dll loading, steal user credentials, pivot within the compromised network, maintain persistence and execute other offensive tasks. 

Right from the initial compromise, we can expect attackers to use standard Windows tools for enumerating network resources, adding new users, pivoting to other servers, dumping databases, exfiltrating data etc. 

This session will be a walk through attackers techniques using tools which can also be considered legitimate and are usually installed by default on Windows. We will talk about basic and advanced functionality of this legitimate attack arsenal and show its usage observed during recent attacks. 

#### About the speaker

Vanja works for Cisco Talos. He is a security researcher with more than 20 years of experience in malware research and detection development. He enjoys tinkering with automated analysis systems, reversing binaries and other types of malware. He thinks time spent scraping telemetry data for signs of new attacks is well worth the effort. 

In his free time, he is hopelessly trying to improve his acoustic guitar skills and sometimes plays basketball, which at his age is not a recommended activity.

## Threats seen by SANS Internet Storm Center

In last couple of years we have witnessed some sophisticated (and some less sophisticated) attacks that severely impacted businesses around the world, causing millions of EUR in damage.
SANS Internet Storm Center has been following and analyzing various attacks for more than 2 decades.

In this presentation, Bojan Zdrnja, senior SANS Internet Storm Center handler will introduce the SANS Internet Storm Center and will talk about several new emerging threats that are slowly becoming prevalent. We will also discuss some incident that Bojan and other SANS ISC handlers worked on in last year.

#### About the speaker

Bojan is the CTO of INFIGO IS, a Croatian security company, where he leads the penetration testing team.
Besides this, Bojan is also a senior SANS Internet Storm Center (https://isc.sans.edu) handler, where he regularly posts about new malware, incidents or penetration testing techniques.
Finally, Bojan is also a SANS instructor - he teaches the SEC542 course (Web App Penetration Testing and Ethical Hacking) and holds numerous SANS certificates.

## (Ab)using eBPF as a security tool

eBPF unlocks God mode on Linux. Why not (ab)use it as a security tool then? 

In this talk I will present few real-world examples where eBPF fits perfectly as a security tool. Since we live in a containerized world my focus will be on such environments.

#### About the speaker

Dejan is the CTO in Kraken (KrakenSystems) and Ascalia, with over 10 years of professional experience in a wide range of software development, SRE, Ops and systems architect roles.

He is the main figure in supporting Nextuser’s distributed high-load system spreading over 4 continents and helping their other clients tackle their technical challenges. Lately his focus is on building Ascalia, ICS for 21st century...

He is constantly looking for new challenges, building new companies and likes to exchange knowledge through meetups, workshops and conferences. In his free time, he is involved in political activism through civil society initiatives.

## USB armory Mk II sneak peek

We will delve into the engineering challenges (say Type-C one more time...) that the USB armory Mk II security goals entailed, exploring how this open hardware has been developed.

#### About the speaker

Andrea Barisani is an internationally recognized security researcher. Since owning his first Commodore-64 he has never stopped studying new technologies, developing unconventional attack vectors and exploring what makes things tick...and break.

His experiences focus on large-scale infrastructure defense, penetration testing and code auditing with particular focus on safety critical environments, with more than 15 years of professional experience in security consulting.

Being an active member of the international open source and security community he contributed to several projects, books and open standards. He is the founder of the oCERT effort, the Open Source Computer Security Incident Response Team.

He is a well known international speaker, having presented at BlackHat, CanSecWest, Chaos Communication Congress, DEFCON, Hack In The Box, among many other conferences, speaking about innovative research on automotive hacking, side-channel attacks, payment systems, embedded system security and many other topics.

## The Basics of x64dbg

There are a number of debuggers out there such as WinDbg, OllyDbg, Immunity’s fork of Olly, and more. However, x64dbg is open source, and has matured to the point of being a very useful tool in the malware researcher’s toolkit. It’s constantly being updated with releases coming out monthly or even faster. It has a large, vibrant user base who are quite friendly with answering questions about how to use it best. This talk is a review of the basics of getting started using x64dbg.

Using version 102 of Sodinokibi as a lab rat, we will walk through debugging this recent ransomware using x64dbg. We will look at unpacking a custom packer as well as reconstructing the payload’s import table using the built in version of Skylla. We will then lay out all the capabilities of the payload like an alien autopsy. This will include how to analyze both of the optional shellcodes as well as how to circumvent an anti-debugging technique based on thread timeout. We will dump the configuration file and examine the URL generation algorithm used to construct the C2 URLs Sodinokibi uses to call home. Finally, we will see how to use a new tool that I wrote for converting function labels from IDA Free and Ghidra into x64dbg database format called lst2x64dbg.

#### About the speaker

Robert Simmons is an independent malware researcher. With an expertise in building automated malware analysis systems based on open source tools, he has been tracking malware and phishing attacks and picking them apart for years. Robert has spoken on malware analysis at many of the top security conferences including DEFCON, HOPE, botconf, and DerbyCon among others. Robert also is a maintainer of plyara, a YARA rule parser written in pure python.

Robert, also known as Utkonos, has a background in biology, linguistics, and Russian area studies. He has lived extensively in Russia and Ukraine and has been known to swear profusely and constantly in Russian.

## That one time someone tried to blackmail KPN

KPN was the target of a blackmail attempt in October 2017 by an ex-employee of a KPN MSP. KPN-CERT conducted and coordinated an investigation, assisting Dutch Law Enforcement, into the situation. As a result, two suspects were raided and arrested, and eventually convicted in public court.

#### About the speaker

Miscreant Puncher at KPN-CERT

## iOS exploitation

Presentation is a general introduction of a typical iOS attack model, iOS attack vectors as well as modern iOS mitigations and post-exploitation mitigations.

#### About the speaker

A passionate security specialist with a broad background in information security. In spare time he enjoys iOS/macOS reverse engineering and vulnerability research.
