## Google strategy
we need to provide client Id and client secret, these are provided to us directly from google Oauth service.
Project ID: emaily-426106
Visit https://console.cloud.google.com

```
1) Create Project
2) APIs & Services, then OAuth Consent Screen
3) External and create!
4) Fill out the required data -> save and continue!
5) Publishing status -> publish API
6) Now on side bar select credentials and create credentials
7) Oauth Client Id and provide the uri origins
8) Authorized JavaScript Origins: http://localhost:5000
   Authorized redirect URI: http://localhost:5000/auth/google/callback
9) Continue and create u will be provided with clientId and Client secret!

```