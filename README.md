# xss-poc
Simple Cross-Site Scripting Proof of Concept

This is a very simple demonstration that HttpOnly cookies are as vulnerable as localStorage when the use case is storing a secret key, like JWT tokens.

Even if the attacker won't be able to read the actual token from a HttpOnly cookie, requests made from the host document will send the cookie with them, enabling the attacker to make requests on the user behalf.

There's little to no incentive in storing JWT tokens for usage at a different time and from a different computer. JWT tokens usually expire frequently and secure applications will monitor the IP address that initiates the request.