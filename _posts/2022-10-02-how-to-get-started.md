---
layout: post
title: How to get started with pentesting
date: 2022-10-02
---

# How to get started with pentesting?

*When people ask me about how to get into pentesting, the first i say is that practice is essential. But how to practice pentesting on your own? How to get started with virtual machines?*  
*In this article i am going to explain, how to create a virtual attacking machine. With this machine, you will be able to practice on platforms that have « boxes ». Boxes are vulnerable machines that can be hacked. I will then present some of the website you can use for practice.*  
*Practicing this way is very helpful because it is the closest way to understand pentest (it is not realistic but you will get the core techniques used for pentest)*
**Note: This article was previously published in my former blog**

## How to get started ?

### Create your virtual attacking machine with Kali Linux

1. Download Virtualbox and install it: https://www.virtualbox.org/  
2. Download Virtualbox and install it from here  
3. Download the lastest kali linux virtualbox image (it is going to be our attacker machine) Make sure to take the virtualbox image and not the vmware one:

![Kali](https://user-images.githubusercontent.com/96747355/193460692-813c9c26-8baf-41ae-8d28-2a8fc89f8e38.png){: width="500" } 

4. Install Kali:

- Go to virtualbox and click on « File » > « Import Appliance… »
- Click on the yellow folder and navigate to the image of kali you downloaded, select it and click on open
- Click on next and then click on import. It will take a little while… And then launch it for the first time. Username should be kali and password kali but you can find this info on their website or on the description of your machine in virtualbox

![Import](https://user-images.githubusercontent.com/96747355/193460766-37015043-1e20-494c-8a1e-e5890319eff7.png){: width="500" } 

## What website can you use?

### Some great starters

First i would recommend to create an account on tryHackMe [here](https://tryhackme.com/), it’s free! Then you will have to download your configuration file and access to the VPN so you can start hacking away on their machines.  

What is awesome about tryhackme is that you even have box to learn how to get started on their platform [here](https://tryhackme.com/room/hello). [This other box](https://tryhackme.com/room/openvpn) will tell you everything about OpenVPN and how to access the boxes. So it will not only be useful on tryhackme but also on other platforms and in your daily practice as a pentester (we do sometimes need a VPN to access our customer system to test).  

If you are not familiar with VPN [here](https://en.wikipedia.org/wiki/Virtual_private_network) is a wikipedia article explaining what it is. But simply put you can see a VPN as a tool that will give you access to another computer or environment remotely. TryHackMe and other website for pentesting practice will require a VPN so that you can access your practicing environment, usually a vulnerable machine hack.  

If you are not familiar with [linux](https://tryhackme.com/room/zthlinux), TryHackMe has a box that explains it very well, you even get a cool badge by completing it! You can also practice on [overthewire.org](https://overthewire.org/wargames/), this website is a wargame you will be able to learn about linux and security concepts. If you want a little more explainations on concepts you should definitely go on [linuxjourney](https://linuxjourney.com/).  

After this you can have a look at the box on TryHackMe that introduces you to pentesting: [basic pentesting](https://tryhackme.com/room/basicpentestingjt).  

Here is a list of great box (all free) on tryhackmefor beginners:

- Learn [Nmap](https://tryhackme.com/room/rpnmap)
- Learn the [web fundamentals](https://tryhackme.com/room/httpindetail)
- Learn about active recon, web app attacks and privilege escalation on [Vulniversity](https://tryhackme.com/room/vulnversity)
- Learn [how to research efficiently on search engines](https://tryhackme.com/room/introtoresearch)
- Get familiar with [Metasploit](https://tryhackme.com/room/metasploitintro)
- Learn about [Google Dorking](https://tryhackme.com/room/googledorking)
- A fun way to learn the [basics of pentesting in a christmas theme](https://tryhackme.com/room/25daysofchristmas). Stay tuned they make one every year!
- Walkthrough on exploiting a Linux machine with [Kenobi](https://tryhackme.com/room/kenobi)
- A [crash course](https://tryhackme.com/room/ccpentesting) on various topics in penetration testing

There are plenty more, I really recommend you to have a look around.

### Push your skills further with other platforms

You have covered your beginners skills? You want to go further? Here are some useful resources for this.

- Practice for certifications ([PNPT](https://certifications.tcm-sec.com/pnpt/), [HTB CPTS](https://academy.hackthebox.com/preview/certifications/htb-certified-penetration-testing-specialist/), [ECCPT](https://elearnsecurity.com/product/ecpptv2-certification/), ...) with [Rana Kalil’s gitbook](https://rana-khalil.gitbook.io/hack-the-box-oscp-preparation/) and Hackthebox (She made for the OSCP but it works really well for the PNPT)
- Join CTF platforms: [root-me](https://www.root-me.org/?lang=en), [ringzer0](https://ringzer0ctf.com/).
- Hack lots of box that you deploy on virtualbox with [vulnhub](https://www.vulnhub.com/).
- Get into bug bounty with [Synack](https://www.synack.com/red-team/), [yeswehack](https://www.yeswehack.com/), [hackerone](https://www.hackerone.com/), [bugcrowd](https://www.bugcrowd.com/).  
- Do not stay alone in your practice: Join groups like Hackthebox Chapters, [OWASP chapters](https://owasp.org/chapters/), [(ISC)2 chapters](https://www.isc2.org/Chapters/Chapter-Directory), [CSNP](https://www.csnp.org/) and so many others you can find ones near you with [meetup.com](https://www.meetup.com/).

