# Serverless Cognito

## Setup

1. `serverless deploy`

Besides deploying the service, we need to manually configure some details, since CloudFormation falls short. So, in the Cognito Dashboard, select the User Pool and follow the steps below:

1. Select "App client settings", enable Cognito User Pool as a provider and enter the callback and sign out URLs. Select "Implicit grant" as allowed OAuth flow and tick all the scopes
2. Select "Domain name" and create one

## Usage

1. Open a web browser and go to `https://<your_domain>/login?response_type=token&client_id=<your_app_client_id>&redirect_uri=<your_callback_url>`
2. After loging in successfully, you'll be redirected to your calback URL with `id_token` in the query string
3. Put `id_token`  in the `Authorization` HTTP header when submitting requests to the API
