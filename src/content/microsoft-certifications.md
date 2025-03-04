---
slug: "/microsoft-certifications-why-and-how"
date: "2021-04-24"
title: "Microsoft Certifications: Why and How"
featured: false
tags:
  ["Microsoft", "Certifications", "Career", "Professional Development", "Azure"]
---

# Establishing Credibility - or Why Should I Listen to This Guy?

I think you should read this if you have some interest in getting Microsoft certifications, especially if you are at the start of your certification journey, or you are not getting certs as quickly as you would like to, or you have not really started the journey, you just keep thinking about it or delaying it. I think you should listen specifically to me because over the last 3 years I have passed fifteen certification exams. During the same time my salary doubled, I went from a rather junior project engineer to a Sr. Cloud Engineer and the lead of a small team. I think certifications were a huge help in this journey.  
Here you can check these details for yourself:  
[https://learn.microsoft.com/en-us/users/konthecat/transcript/de62wf4qkr250p3](https://learn.microsoft.com/en-us/users/konthecat/transcript/de62wf4qkr250p3)

From here on out when I write certifications you should read "Microsoft certifications" - I do not have any other ones in any volume significant enough to say this experience applies to them.

# Why Get Certifications

I find that it is a good idea to have a solid set of reasons that prove to you why you are even going to do all this work. Especially since for most people this is going to be extra work, outside of work, on your own time - time you could spend with your family, or partners, or conquering the galaxy or racking up the kill count, or whatever else sparks joy - why certs and not that?  
My personal reasons, in order of significance:

1. I wanted to have the lay of the land with Microsoft technologies, or put another way, I wanted to know what I should Google before I went Googling for it. I wanted to have a general understanding of the technology I am certifying for - so for example, what are the high-level capabilities of Windows Server 2016, when it comes to storage, DNS, AD, whatever? I found that if I had this general understanding it was a lot easier to speak confidently about capabilities and then to carry out targeted research/testing as needed. Here is an extreme example of the value of this: I learned about domain trusts in 2018 for the AD exam but only used them in production for the first time late 2020. The idea to use domain trusts for the specific problem was also my idea. Another example: Private Link in Azure with AD DNS in Azure VMs works much better if you understand how to use conditional forwarders. I learned about conditional forwarders from the Server 2016 certification exam but only used them over the last year with Azure.
2. I wanted to understand how the Microsoft understood their own products and their general deployment patterns and best practices. This is not just idle curiosity - products generally work better when used as designed, for the purposes for which they were designed. This is especially true with public cloud services as the use of the wrong service will have direct impact on either the performance or the cost, or both, of what you are deploying.
3. I wanted the list of certs on my resume/LinkedIn profile. I did not want to lose opportunities to otherwise similar applicants who have done this work.
4. I wanted to signal value to Microsoft Partners (mostly MSPs). They need some number of certified people for Microsoft Partner Program membership and competency levels.

So you should have your reasons. Feel free to borrow mine. People have frequently told me that they use certifications to validate their depth of understanding of a subject area - this is certainly a valid approach too. There are some organizations that reward you very well for certifications - I have not had the fortune there and consider this to be a part of my own development of my capabilities, for which the employer then pays.

# How To Get Certifications - ABC

As you may know, the rule of sales is to Always Be Closing, defined here:  
[https://www.youtube.com/watch?v=AO_t7GtXO6w](https://www.youtube.com/watch?v=AO_t7GtXO6w) (Some of this language is dated. The macho sexism is not needed, the point holds without it.)

So for certifications, the rule is to Always Be Certifying. I always sign up for the next certification exam right after I have taken a certification exam, pass or fail - this way there is not a gap, there is always something to work towards. You can be as aggressive or not with this as it works for you - some exams you may need or want 6 months for - that does not matter - what matters is that it is at a defined place in your future, not some idea you have of a maybe-future or a one-day. And you can re-schedule, at least with Microsoft, for free the first time, so you have flexibility - and after that there is a defined cost for re-scheduling. I found that for my mind this cost to re-schedule or the cost of the exam is not an acceptable loss.

# How to Get Certifications - Picking Certs to Take

Some will advocate a defined multi-year certification path. I have not tried this. I was completely opportunistic - I took certs about technologies I was working with, or would potentially work with. So Windows Server 2016 was something I was working with, and Azure was something I was getting into - the certs made natural sense. After that I wanted to broaden my Azure understanding and to shore up my Microsoft 365 understanding - before I knew it, I had taken fifteen exams. I do recommend this.  
You should take a fundamental-level (900) certification only once. They are quite entry level and generally easy, and so their value is minimal. They are, however, a good way to get familiar with the style of the exams.  
A vital point - the account you use for certifications should be your personal Microsoft account. Employers can link to this; certs do not have to be done on the corporate account in order to count for Microsoft Partner Program benefits. The certs are also your certs, your personal accomplishment.

# How to Get Certifications - Study Methods

My method has been to drown my brain in video content and then to do targeted labs, reviewing documentation when necessary, specifically to get a handle on service limits or some specific configuration items. [Pluralsight](http://referral.pluralsight.com/mQhewqH) (shameless referral link) has been my go-to until recently, now I am trying out [CloudSkills](https://cloudskills.io/). I have supplemented Pluralsight with Udemy when Pluralsight did not have the desired amount of hours of content.  
The value of the labs cannot be under-stated. Until the pandemic some Microsoft exams included a live lab, so it is important to know not only the theory but also at least enough of the practice to figure it out on the spot. Towards this end I have taken a somewhat extreme approach - for several years I have maintained a [Microsoft Action Pack subscription](https://partner.microsoft.com/en-US/membership/action-pack) ($500/year, which gets you $100/month of Azure, O365 licenses, on prem software, etc.) and a personal computer with 64 GB of RAM - I found this to be more than enough for what I have had to lab so far.  
Reviewing the Microsoft document on what the exam will cover and to what extent is a good idea. I frequently do this in the weeks before the exam just to make sure that my studying has been covering what I really need to cover.  
I have had mixed results with practice exams. I can say that the general guidance that the Mindhub exams come the closest to actual exam questions in terms of format, but I have honestly stopped taking them and my performance has not been impacted.  
It also helps to pick a specific time when you will do your studying, at least most of the time - I find that I function best in the quiet of the early mornings before work, so I use that time for certification study or the most interesting of personal labs. This also has the advantage of starting your day with accomplishment. Do not open email or communication apps until you have accomplished the studying - the distraction is a very real negative factor. Also in my experience attempting to do this in an office is not advised - inevitably some people will show up early and they will think that you are also there early to work, so they will ask you questions about work.

# How to Get Certifications - Taking the Exam

You should read the exam policies at least once. Below is a summary of what I think is critical from that, and from my own experience with sitting for the exam.  
I have never seen the inside of one of the testing centers and some horror stories on Reddit have dissuaded me from ever trying - stories of equipment not working and running out of time due to that, of refunds or credits delayed - you do not want this. I have taken my exams at home. You do need a clean workstation - for me a small table in the bedroom with a laptop on it works wonders (they do not like multiple monitors or VMs) - and you will be on camera and audio-captured the whole time, so you should be alone in the room, and it should be quiet outside - but if you schedule the exam a few months in advance you can more or less pick any time on any day, so if 2 AM works for you as exam time, you do that. I have settled on about 8:30 AM on a Saturday morning as my exam time.  
If you do not have such a space at home using the space of your employer is a very valid option. Two of my co-workers have done this without issues.  
Do follow all the exam-taking tips you may have learned in high school and/or college - get plenty of sleep, do not attempt to cram the night before the exam, etc. Also, do not worry. The failed exams do not show on the transcript, you can pretend that never happened and just take them again when you are ready. I have failed three exams so far, so you can trust me when I say that nothing bad happens if you do.  
Do the exam software testing step the day before the exam. Finding out that something does not work or you do not know how to navigate the portal during your exam start time is not a problem you want at that time. I always start my exams as early as I can and I recommend this.  
Once the exam starts you will not be allowed to leave the view of the camera for any reason. I strongly recommend that you manage your biological functions with this in mind.  
I have never run out of time on the exam. You get two hours or so for 50 or so questions - this has been more than enough in my experience. The lab for the Azure Associate certification did take me somewhat close to the end of the time, so if you have a lab you should watch timing - but the exam interface makes this easy for you.  
You typically get your results right after the end of the exam, with the exception of the labs, which may take some number of hours to evaluate.  
And remember, after you take the exam, you really should register for the next one.

# After Passing the Exam and Getting That Cert

You should sign up for the next exam. I promise, this is the last time I make this point.  
Then you should share the accomplishment on LinkedIn. There are these nice badges that you can get due to a Microsoft partnership with Acclaim - so you can decorate your Outlook signature or website if you are inclined to do so.

# Summary of Major Points

1. You must have solid reasons for taking doing certifications as the time required to do them will probably be your own personal time. For me general awareness of the various services and how they can inter-connect has been very interesting and valuable.
2. You should Always Be Certifying – sign up for the next exam the day you pass the current one. And if you are going for your first one, get it over with, sign up for it now!
3. The certification exams require a combination of theoretical and practical knowledge. For me watching video content and building out the services in a personal lab has worked wonders.
4. Taking the test at home is a very convenient option if you can do that. Home can be a work office on a Sunday morning. You do not have to go to a test center.

# Conclusion

I hope this has been helpful to you. I personally think that certifications are a long game, you should expect this to become a part of your professional life and just stay that, especially since Microsoft certifications now require annual renewal.

# 2023 Update

This article was written before the changes Microsoft made as far as requiring recertification through MS Learn Quizzes. I quite like the quizzes, but it can become something of an activity, so I would certainly advise being thoughtful about what certifications you are getting and why. I have since become a bit less agressive in my persuit of all the certs but am now considering doing some on the AI side.
