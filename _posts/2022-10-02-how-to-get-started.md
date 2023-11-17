---
layout: post
title: How to get started with pentesting
date: 2022-10-02
---

# How to get started with pentesting?

*When people ask me about how to get into pentesting, the first I say is that practice is essential. But how to practice pentesting on your own? How to get started with virtual machines?*  
*In this article i am going to explain, how to create a virtual attacking machine. With this machine, you will be able to practice on platforms that have « boxes ». Boxes are vulnerable machines that can be hacked. I will then present some of the website you can use for practice.*  
*On another part I will share how to use vulnerable virtual machines and set them up in your lab*  
*Practicing this way is very helpful because it is the closest way to understand pentest (it is not realistic but you will get the core techniques used for pentest)*  

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
- [Learn Cyber in 25 days](https://tryhackme.com/room/learncyberin25days)
- [Advent of cyber 2019](https://tryhackme.com/room/25daysofchristmas)
- [Advent of cyber 2021](https://tryhackme.com/room/adventofcyber3)
- [Advent of cyber 2022](https://tryhackme.com/room/adventofcyber4)
- [Avdent of cyber 2023](https://tryhackme.com/room/adventofcyber2023)

There are plenty more, I really recommend you to have a look around.

## How to use vulnerable VM to practice

- Once your have your kali installed, you can also take vulnerable machines to practice on them.
- The idea here is to connect your kali with this machine so that you can hack it from your kali.

### Where to find vulnerable machines

- [Vulnhub](https://www.vulnhub.com/)
- [OWASP Vulnerable Web Applications Directory](https://owasp.org/www-project-vulnerable-web-applications-directory/)

**IMPORTANT NOTICE: These are vulnerable machines so use with caution. Also always check and research about a machine before installing it**

### How to connect your kali with another machine

- Once you have chosen the machine you wish to try, and deployed it, you will need to connect it.
- In this example I am going to show you how to proceed with Metasploitable 2. You can find it [here](https://www.vulnhub.com/entry/metasploitable-2,29/).

#### Install Metasploitable 2

- Unzip the downloaded file in a folder you will easily find later
- Go to virtualbox click on new machine
- Give a name to your new machine I will call it Metasploitable
- Choose the type Linux and Version Ubuntu  
![-005](https://user-images.githubusercontent.com/96747355/210256618-3477cdeb-91ed-413a-876e-b04c1a765b63.png){: width="500" }  
- Choose how much ram you need (1go should be enough)  
**Be careful here to also leave resources to your host and calculate this also with your kali. You will need: enough resources for your host, your kali and your vulnerable machine.**  
![-007](https://user-images.githubusercontent.com/96747355/210256688-69a8d1f9-29bf-4919-86f5-9ea5816e08ad.png){: width="500" }  
- On the next window click on "use an existing virtualdisk file"  
![-010](https://user-images.githubusercontent.com/96747355/210257033-bbb58dcc-6adf-4a40-8b09-2526aa939405.png){: width="500" }  
  - Click on the yellow folder 
  - Click on add
  - Navigate to the metasploitable folder you have just dowloaded and select the .vdmk file 
  - Select it and then click on choose
  - Finally click on create
- You can now start the machine for the first time (it should take a few minutes to start
login is `msfadmin` and password is `msfadmin`)
- Shut down the machine

#### Useful resources on Metasploitable 2

- [Official guide - Metasploitatble 2 installation and details](https://docs.rapid7.com/metasploit/metasploitable-2/)
- [Official guide - Metasploitable 2 Exploitability Guide](https://docs.rapid7.com/metasploit/metasploitable-2-exploitability-guide/)

### Connect Kali and Metasploitable 2 together

- Both machine should be shut down for this process
- Go to virtualbox
- Click on file > preferences > network 
- Click on the plus
- Rename the network as you like or leave it like this
- And click on ok  

![-014](https://user-images.githubusercontent.com/96747355/210257311-0fd6b87a-6539-4e66-a8f9-8a517116f686.png){: width="500" }  

- Click on Metasploitable
- Settings
- Network
- And select Nat Network from the dropdown menu
- And then ok
- Ensure that Allows VM is selected in promiscuous mode
- Do the Same for the kali machine
- Launch both the machine  
*For more information on connection of VM together you can refer to [this link](https://www.virtualbox.org/manual/ch06.html)*  
![-016](https://user-images.githubusercontent.com/96747355/210257515-8a19b1a2-c9f7-4dce-aa0c-127c9dea47f0.png){: width="500" }  

#### Check if our machines can communicate

- In your Metasploitable type `ip a` and check your ip address
- In you kali open the terminal and type ping <IP-OF-METASPLOITABLE>
  - In my case: ping 10.0.2.4
  - My kali can access metasploitable  
![-018](https://user-images.githubusercontent.com/96747355/210257624-fcc053bd-131d-4532-84c8-d0e5ac4f1b85.png){: width="500" }  
- Now type `ip a` in your kali and ping it from your Metasploitable.
- They can connect to each other both ways.

### Start to work on our skills

- We are ready to go
- We can launch an nmap scan
- If you want to work only on your web skills you can open the browser in your kali and go to `http://<your-metasploitable-ip>`. (In my case http://10.0.2.4/)
- You should land on this page Mutillidae and DVWA are fun to play with for web skills.  
![-020](https://user-images.githubusercontent.com/96747355/210257937-c642ce37-f9d8-4ac1-8c82-0eefe6a756ff.png){: width="500" }  

#### Proper config for Mutillidae

- In order for mutillidae to work properly we need to change the config file.
- In Metasploitable VM navigate to `/var/www/mutillidae`
- Type, `sudo nano config.inc`
- Change the database name from ‘metasploit’ to ‘owasp10’ 
- Close and save the changes

#### Mutillidae Exploration

![-022](https://user-images.githubusercontent.com/96747355/210258100-e4edfb7e-2995-49df-9fac-97fd3fd7d8dc.png){: width="500" }  
- **Toggle hints**: will activate or dactivate the hints. If you are a beginner you should activate them
- **Toggle security**: Change the level of security of the application. Start at level 0
- **Reset DB**: Will reset the database in case you feel like the app is not working properly or in case you break it :D

#### DVWA Exploration

- Connect to the app with the help of the hint under the form
  - Hint: default username is 'admin' with password 'password'  
![-025](https://user-images.githubusercontent.com/96747355/210258227-d5e49bf0-2fd9-4258-b850-029b0cac1236.png){: width="250" }  

- Setup: you will be able to reset the database 
- DVWA Security: you will be able to change the security for it to make it harder to hack. I recommend starting with low.
- The items in the middle are different attacks you can try out.  

**ENJOY!! :D**
  
## Push your skills further with other platforms

You have covered your beginners skills? You want to go further? Here are some useful resources for this.

- Practice for certifications ([PNPT](https://certifications.tcm-sec.com/pnpt/), [HTB CPTS](https://academy.hackthebox.com/preview/certifications/htb-certified-penetration-testing-specialist/), [ECCPT](https://elearnsecurity.com/product/ecpptv2-certification/), ...) with [Rana Kalil’s gitbook](https://rana-khalil.gitbook.io/hack-the-box-oscp-preparation/) and Hackthebox (She made for the OSCP but it works really well for the PNPT)
- Join CTF platforms: [root-me](https://www.root-me.org/?lang=en), [ringzer0](https://ringzer0ctf.com/).
- Hack lots of box that you deploy on virtualbox with [vulnhub](https://www.vulnhub.com/).
- Get into bug bounty with [Synack](https://www.synack.com/red-team/), [yeswehack](https://www.yeswehack.com/), [hackerone](https://www.hackerone.com/), [bugcrowd](https://www.bugcrowd.com/).  
- Do not stay alone in your practice: Join groups like Hackthebox Chapters, [OWASP chapters](https://owasp.org/chapters/), [(ISC)2 chapters](https://www.isc2.org/Chapters/Chapter-Directory), [CSNP](https://www.csnp.org/) and so many others you can find ones near you with [meetup.com](https://www.meetup.com/).

