Example frontend code to use cognito auth to call a serverless service

## Prerequisites

* Deploy the serverless service
* Copy config-example.json to config.json
* Edit the URLS. 
  * ```serviceURL``` is the one is shown in the output of ```sls deploy``` and
    ```sls info``` if you already deployed earlier
  * For ``` authenticationURL``` you need to replace APP_CLIENT_ID which you get
    from the cognito console in "General settings / App Clients", and
    ```DOMAIN``` can be found under "App Integration" 
* Start the webserver via ```npm start```  one level above

## Usage

* Go to the index page on http://localhost:3000
* Authenticate by clicking on the authenticate link
* Call the service by clicking the call service button

## TODO

* Simplify code and usage: if no id_token is in url, immediately redirect to
  the authentication page! Manual authentication is not necessary. 
* Add a variant: use the cognito authentication endpoint instead of Cognito 
  provided authentication frontend: 
  https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html  
