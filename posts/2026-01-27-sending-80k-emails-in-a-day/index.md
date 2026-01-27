
It's very commonly said that sending tens of thousands of emails in a day from a new domain is a bad thing to do. The general advice is to "warm up" a new sender account by sending 100 and pretty much doubling it every day. 

![alt text](/chatgpt-emails.png)

Well, at one company, I was asked to send out around 80k emails in a single day. I had told the business owners that sending that many emails in a day from an unwarmed account was considered to be a bad idea. I had no choice, however, so I prepared to send out the 80k emails. 

I deduplicated and chunked the email list up into progressively larger chunks. The chunks went 200, 400, 1000, 2000, and doubled from there it until we got to about 10k-15k per chunk. Each chunk was to be sent out every hour starting in the morning and be finished by around 4pm.

So, did our email sender account get screwed? Nope! Our sender reputation stayed high. Now, mind you, these were people who signed up to be notified of updates, so the amount of unsubscribes and bounces were low. We also did have all the SPF, DKIM, and DMARC authentication stuff setup, so I'm sure that helped. 

But this does bring up a good question. Why do people keep saying that sending tens of thousands of emails in a single day will get your email sender account blocked? Is this actually true or just a fable? Did we just happen to get lucky?
