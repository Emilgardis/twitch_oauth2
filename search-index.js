var searchIndex = JSON.parse('{\
"twitch_oauth2":{"doc":"github crates-io docs-rs","i":[[0,"client","twitch_oauth2","Provides different http clients",null,null],[5,"reqwest_http_client","twitch_oauth2::client","Asynchronous HTTP client.",null,[[["httprequest",3]]]],[5,"surf_http_client","","Asynchronous HTTP client using [Surf][surf::Client]",null,[[["httprequest",3]]]],[4,"SurfError","","Possible errors for [surf_http_client][http_client]",null,null],[13,"Surf","","surf failed to do the request: {0}",0,null],[13,"InvalidHeaderValue","","could not construct header value",0,null],[13,"InvalidHeaderName","","could not construct header name",0,null],[0,"id","twitch_oauth2","Representation of oauth2 flow in <code>id.twitch.tv</code>",null,null],[3,"TwitchTokenResponse","twitch_oauth2::id","Twitch’s representation of the oauth flow.",null,null],[12,"access_token","","Access token",1,null],[12,"token_type","","Token type",1,null],[12,"expires_in","","Time (in seconds) until token expires",1,null],[12,"refresh_token","","Token that can be used to refresh",1,null],[12,"scopes","","Scopes attached to token",1,null],[12,"extra_fields","","Extras",1,null],[3,"TwitchTokenErrorResponse","","Twitch’s representation of the oauth flow for errors",null,null],[12,"status","","Status code of error",2,null],[12,"message","","Message attached to error",2,null],[6,"TwitchClient","","Client for Twitch OAuth2",null,null],[0,"scopes","twitch_oauth2","Module for all possible scopes in twitch.",null,null],[4,"Scope","twitch_oauth2::scopes","Scopes for twitch.",null,null],[13,"AnalyticsReadExtensions","","View analytics data for the Twitch Extensions owned by …",3,null],[13,"AnalyticsReadGames","","View analytics data for the games owned by the …",3,null],[13,"BitsRead","","View Bits information for a channel.",3,null],[13,"ChannelEditCommercial","","Run commercials on a channel.",3,null],[13,"ChannelManageBroadcast","","Manage a channel’s broadcast configuration, including …",3,null],[13,"ChannelManageExtensions","","Manage a channel’s Extension configuration, including …",3,null],[13,"ChannelManageRedemptions","","Manage Channel Points custom rewards and their …",3,null],[13,"ChannelManageVideos","","Manage a channel’s videos, including deleting videos.",3,null],[13,"ChannelModerate","","Perform moderation actions in a channel. The user …",3,null],[13,"ChannelReadEditors","","View a list of users with the editor role for a channel.",3,null],[13,"ChannelReadHypeTrain","","View Hype Train information for a channel.",3,null],[13,"ChannelReadRedemptions","","View Channel Points custom rewards and their redemptions …",3,null],[13,"ChannelReadStreamKey","","View an authorized user’s stream key.",3,null],[13,"ChannelReadSubscriptions","","View a list of all subscribers to a channel and check if …",3,null],[13,"ChannelSubscriptions","","[DEPRECATED] Read all subscribers to your channel.",3,null],[13,"ChatEdit","","Send live stream chat and rooms messages.",3,null],[13,"ChatRead","","View live stream chat and rooms messages.",3,null],[13,"ClipsEdit","","Manage Clips for a channel.",3,null],[13,"ModerationRead","","View a channel’s moderation data including Moderators, …",3,null],[13,"UserEdit","","Manage a user object.",3,null],[13,"UserEditBroadcast","","Edit your channel’s broadcast configuration, including …",3,null],[13,"UserEditFollows","","Edit a user’s follows.",3,null],[13,"UserManageBlockedUsers","","Manage the block list of a user.",3,null],[13,"UserReadBlockedUsers","","View the block list of a user.",3,null],[13,"UserReadBroadcast","","View a user’s broadcasting configuration, including …",3,null],[13,"UserReadEmail","","Read an authorized user’s email address.",3,null],[13,"WhispersEdit","","Send whisper messages.",3,null],[13,"WhispersRead","","View your whisper messages.",3,null],[13,"Other","","Other scope that is not implemented.",3,null],[11,"all","","Get a vec of all defined twitch [Scopes][Scope].",3,[[],[["vec",3],["scope",4]]]],[11,"parse","","Make a scope from a cow string",3,[[],["scope",4]]],[11,"as_oauth_scope","","Get [Scope] as an oauth2 Scope",3,[[],["scope",3]]],[0,"tokens","twitch_oauth2","Twitch token types",null,null],[0,"errors","twitch_oauth2::tokens","Errors",null,null],[4,"TokenError","twitch_oauth2::tokens::errors","General errors for talking with twitch, used in […",null,null],[13,"Request","","request for token failed. {0}",4,null],[13,"ParseError","","could not parse url",4,null],[13,"ValidationError","","could not get validation for token",4,null],[4,"ValidationError","","Errors for [validate_token][crate::validate_token]",null,null],[13,"DeserializeError","","deserializations failed",5,null],[13,"NotAuthorized","","token is not authorized for use",5,null],[13,"TwitchError","","twitch returned an unexpected status: {0}",5,null],[13,"Request","","failed to request validation: {0}",5,null],[4,"RevokeTokenError","","Errors for [revoke_token][crate::revoke_token]",null,null],[13,"TwitchError","","400 Bad Request: {0}",6,null],[13,"RequestError","","failed to do revokation: {0}",6,null],[13,"Other","","got unexpected return: {0:?}",6,null],[4,"RefreshTokenError","","Errors for [TwitchToken::refresh_token][…",null,null],[13,"RequestError","","request for token failed. {0}",7,null],[13,"ParseError","","could not parse url",7,null],[13,"NoClientSecretFound","","no client secret found",7,null],[13,"NoRefreshToken","","no refresh token found",7,null],[4,"UserTokenExchangeError","","Errors for [UserTokenBuilder::get_user_token][…",null,null],[13,"RequestError","","request for token failed. {0}",8,null],[13,"ParseError","","could not parse url",8,null],[13,"TwitchError","","twitch returned an unexpected status: {0}",8,null],[13,"DeserializeError","","deserializations failed",8,null],[13,"StateMismatch","","State CSRF does not match.",8,null],[13,"ValidationError","","could not get validation for token",8,null],[3,"AppAccessToken","twitch_oauth2::tokens","An App Access Token from the OAuth client credentials flow",null,null],[3,"UserToken","","An User Token from the OAuth implicit code flow or OAuth …",null,null],[12,"access_token","","The access token used to authenticate requests with",9,null],[12,"refresh_token","","The refresh token used to extend the life of this user …",9,null],[3,"UserTokenBuilder","","Builder for OAuth authorization code flow",null,null],[8,"TwitchToken","","Trait for twitch tokens to get fields and generalize over …",null,null],[10,"client_id","","Client ID associated with the token. Twitch requires this …",10,[[],["clientid",3]]],[10,"token","","Get the [AccessToken] for authenticating",10,[[],["accesstoken",3]]],[10,"login","","Get the username associated to this token",10,[[],[["option",4],["str",15]]]],[10,"refresh_token","","Refresh this token, changing the token to a newer one",10,[[],[["pin",3],["box",3]]]],[10,"expires","","Get instant when token will expire.",10,[[],[["option",4],["instant",3]]]],[10,"scopes","","Retrieve scopes attached to the token",10,[[],["option",4]]],[11,"validate_token","","Validate this token. Should be checked on regularly, …",10,[[],[["box",3],["pin",3]]]],[11,"revoke_token","","Revoke the token. See …",10,[[],[["box",3],["pin",3]]]],[3,"ValidatedToken","","Token validation returned from …",null,null],[12,"client_id","","Client ID associated with the token. Twitch requires this …",11,null],[12,"login","","Username associated with the token",11,null],[12,"user_id","","User ID associated with the token",11,null],[12,"scopes","","Scopes attached to the token.",11,null],[4,"Scope","twitch_oauth2","Scopes for twitch.",null,null],[13,"AnalyticsReadExtensions","","View analytics data for the Twitch Extensions owned by …",3,null],[13,"AnalyticsReadGames","","View analytics data for the games owned by the …",3,null],[13,"BitsRead","","View Bits information for a channel.",3,null],[13,"ChannelEditCommercial","","Run commercials on a channel.",3,null],[13,"ChannelManageBroadcast","","Manage a channel’s broadcast configuration, including …",3,null],[13,"ChannelManageExtensions","","Manage a channel’s Extension configuration, including …",3,null],[13,"ChannelManageRedemptions","","Manage Channel Points custom rewards and their …",3,null],[13,"ChannelManageVideos","","Manage a channel’s videos, including deleting videos.",3,null],[13,"ChannelModerate","","Perform moderation actions in a channel. The user …",3,null],[13,"ChannelReadEditors","","View a list of users with the editor role for a channel.",3,null],[13,"ChannelReadHypeTrain","","View Hype Train information for a channel.",3,null],[13,"ChannelReadRedemptions","","View Channel Points custom rewards and their redemptions …",3,null],[13,"ChannelReadStreamKey","","View an authorized user’s stream key.",3,null],[13,"ChannelReadSubscriptions","","View a list of all subscribers to a channel and check if …",3,null],[13,"ChannelSubscriptions","","[DEPRECATED] Read all subscribers to your channel.",3,null],[13,"ChatEdit","","Send live stream chat and rooms messages.",3,null],[13,"ChatRead","","View live stream chat and rooms messages.",3,null],[13,"ClipsEdit","","Manage Clips for a channel.",3,null],[13,"ModerationRead","","View a channel’s moderation data including Moderators, …",3,null],[13,"UserEdit","","Manage a user object.",3,null],[13,"UserEditBroadcast","","Edit your channel’s broadcast configuration, including …",3,null],[13,"UserEditFollows","","Edit a user’s follows.",3,null],[13,"UserManageBlockedUsers","","Manage the block list of a user.",3,null],[13,"UserReadBlockedUsers","","View the block list of a user.",3,null],[13,"UserReadBroadcast","","View a user’s broadcasting configuration, including …",3,null],[13,"UserReadEmail","","Read an authorized user’s email address.",3,null],[13,"WhispersEdit","","Send whisper messages.",3,null],[13,"WhispersRead","","View your whisper messages.",3,null],[13,"Other","","Other scope that is not implemented.",3,null],[3,"AppAccessToken","","An App Access Token from the OAuth client credentials flow",null,null],[8,"TwitchToken","","Trait for twitch tokens to get fields and generalize over …",null,null],[10,"client_id","","Client ID associated with the token. Twitch requires this …",10,[[],["clientid",3]]],[10,"token","","Get the [AccessToken] for authenticating",10,[[],["accesstoken",3]]],[10,"login","","Get the username associated to this token",10,[[],[["option",4],["str",15]]]],[10,"refresh_token","","Refresh this token, changing the token to a newer one",10,[[],[["pin",3],["box",3]]]],[10,"expires","","Get instant when token will expire.",10,[[],[["option",4],["instant",3]]]],[10,"scopes","","Retrieve scopes attached to the token",10,[[],["option",4]]],[11,"validate_token","","Validate this token. Should be checked on regularly, …",10,[[],[["box",3],["pin",3]]]],[11,"revoke_token","","Revoke the token. See …",10,[[],[["box",3],["pin",3]]]],[3,"UserToken","","An User Token from the OAuth implicit code flow or OAuth …",null,null],[12,"access_token","","The access token used to authenticate requests with",9,null],[12,"refresh_token","","The refresh token used to extend the life of this user …",9,null],[3,"ValidatedToken","","Token validation returned from …",null,null],[12,"client_id","","Client ID associated with the token. Twitch requires this …",11,null],[12,"login","","Username associated with the token",11,null],[12,"user_id","","User ID associated with the token",11,null],[12,"scopes","","Scopes attached to the token.",11,null],[7,"AUTH_URL","","Authorization URL for <code>id.twitch.tv</code>",null,null],[7,"TOKEN_URL","","Token URL for <code>id.twitch.tv</code>",null,null],[7,"VALIDATE_URL","","Validation URL for <code>id.twitch.tv</code>",null,null],[7,"REVOKE_URL","","Revokation URL for <code>id.twitch.tv</code>",null,null],[5,"validate_token","","Validate this token.",null,[[["accesstoken",3]]]],[5,"revoke_token","","Revoke the token.",null,[[["accesstoken",3],["clientid",3]]]],[5,"refresh_token","","Refresh the token, call if it has expired.",null,[[["refreshtoken",3],["clientid",3],["clientsecret",3]]]],[11,"from","twitch_oauth2::client","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","twitch_oauth2::id","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"to_string","","",2,[[],["string",3]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","twitch_oauth2","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"to_string","","",3,[[],["string",3]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"equivalent","","",3,[[],["bool",15]]],[11,"vzip","","",3,[[]]],[11,"from","twitch_oauth2::tokens","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"vzip","","",12,[[]]],[11,"from","twitch_oauth2::tokens::errors","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_string","","",5,[[],["string",3]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_string","","",6,[[],["string",3]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_string","","",7,[[],["string",3]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"vzip","","",7,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_string","","",8,[[],["string",3]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"vzip","","",8,[[]]],[11,"from","twitch_oauth2::tokens","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"vzip","","",9,[[]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"vzip","","",13,[[]]],[11,"from","twitch_oauth2","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"vzip","","",11,[[]]],[11,"client_id","twitch_oauth2::tokens","",12,[[],["clientid",3]]],[11,"token","","",12,[[],["accesstoken",3]]],[11,"login","","",12,[[],[["option",4],["str",15]]]],[11,"refresh_token","","",12,[[],[["pin",3],["box",3]]]],[11,"expires","","",12,[[],[["option",4],["instant",3]]]],[11,"scopes","","",12,[[],["option",4]]],[11,"client_id","","",9,[[],["clientid",3]]],[11,"token","","",9,[[],["accesstoken",3]]],[11,"login","","",9,[[],[["option",4],["str",15]]]],[11,"refresh_token","","",9,[[],[["pin",3],["box",3]]]],[11,"expires","","",9,[[],[["option",4],["instant",3]]]],[11,"scopes","","",9,[[],["option",4]]],[11,"from","twitch_oauth2::client","",0,[[["invalidheadervalue",3]]]],[11,"from","","",0,[[["invalidheadername",3]]]],[11,"from","twitch_oauth2","",3,[[["scope",3]]]],[11,"from","","",3,[[["string",3]]]],[11,"from","twitch_oauth2::tokens::errors","",4,[[["parseerror",4]]]],[11,"from","","",4,[[["validationerror",4]]]],[11,"from","","",5,[[["error",3]]]],[11,"from","","",7,[[["parseerror",4]]]],[11,"from","","",8,[[["parseerror",4]]]],[11,"from","","",8,[[["error",3]]]],[11,"from","","",8,[[["validationerror",4]]]],[11,"clone","twitch_oauth2::id","",1,[[],["twitchtokenresponse",3]]],[11,"clone","","",2,[[],["twitchtokenerrorresponse",3]]],[11,"clone","twitch_oauth2","",3,[[],["scope",4]]],[11,"clone","twitch_oauth2::tokens","",12,[[],["appaccesstoken",3]]],[11,"clone","","",9,[[],["usertoken",3]]],[11,"clone","twitch_oauth2","",11,[[],["validatedtoken",3]]],[11,"eq","","",3,[[["scope",4]],["bool",15]]],[11,"ne","","",3,[[["scope",4]],["bool",15]]],[11,"fmt","twitch_oauth2::client","",0,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2::id","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2","",3,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2::tokens","",12,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2::tokens::errors","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2::tokens","",9,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2","",11,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2::client","",0,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2::id","",2,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2","",3,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2::tokens::errors","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"source","twitch_oauth2::client","",0,[[],[["error",8],["option",4]]]],[11,"source","twitch_oauth2::tokens::errors","",4,[[],[["error",8],["option",4]]]],[11,"source","","",5,[[],[["error",8],["option",4]]]],[11,"source","","",6,[[],[["error",8],["option",4]]]],[11,"source","","",7,[[],[["error",8],["option",4]]]],[11,"source","","",8,[[],[["error",8],["option",4]]]],[11,"deserialize","twitch_oauth2::id","",1,[[],["result",4]]],[11,"deserialize","","",2,[[],["result",4]]],[11,"deserialize","twitch_oauth2","",3,[[],["result",4]]],[11,"deserialize","","",11,[[],["result",4]]],[11,"serialize","twitch_oauth2::id","",1,[[],["result",4]]],[11,"serialize","","",2,[[],["result",4]]],[11,"serialize","twitch_oauth2","",3,[[],["result",4]]],[11,"access_token","twitch_oauth2::id","",1,[[],["accesstoken",3]]],[11,"token_type","","",1,[[]]],[11,"expires_in","","",1,[[],[["option",4],["duration",3]]]],[11,"refresh_token","","",1,[[],[["refreshtoken",3],["option",4]]]],[11,"scopes","","",1,[[],[["vec",3],["option",4]]]],[11,"from_existing_unchecked","twitch_oauth2::tokens","Assemble token without checks.",12,[[["option",4],["option",4],["accesstoken",3],["vec",3],["string",3]],["appaccesstoken",3]]],[11,"from_existing","","Assemble token and validate it. Retrieves <code>client_id</code> and …",12,[[["clientsecret",3],["accesstoken",3]]]],[11,"get_app_access_token","","Generate app access token via OAuth client credentials …",12,[[["clientid",3],["clientsecret",3],["vec",3],["scope",4]]]],[11,"from_existing_unchecked","","Assemble token without checks.",9,[[["option",4],["option",4],["vec",3],["string",3]],["usertoken",3]]],[11,"from_existing","","Assemble token and validate it. Retrieves <code>login</code>, <code>client_id</code>…",9,[[["accesstoken",3]]]],[11,"builder","","Create a [<code>UserTokenBuilder</code>] to get a token with the OAuth …",9,[[["redirecturl",3],["clientid",3],["clientsecret",3]],[["result",4],["parseerror",4],["usertokenbuilder",3]]]],[11,"new","","Create a [<code>UserTokenBuilder</code>]",13,[[["redirecturl",3],["clientid",3],["clientsecret",3]],[["result",4],["parseerror",4],["usertokenbuilder",3]]]],[11,"force_verify","","Enable or disable function to make the user able to …",13,[[["bool",15]]]],[11,"generate_url","","Generate the URL to request a code.",13,[[]]],[11,"get_user_token","","Generate the code with the help of the authorization code",13,[[["authorizationcode",3],["option",4],["str",15]]]]],"p":[[4,"SurfError"],[3,"TwitchTokenResponse"],[3,"TwitchTokenErrorResponse"],[4,"Scope"],[4,"TokenError"],[4,"ValidationError"],[4,"RevokeTokenError"],[4,"RefreshTokenError"],[4,"UserTokenExchangeError"],[3,"UserToken"],[8,"TwitchToken"],[3,"ValidatedToken"],[3,"AppAccessToken"],[3,"UserTokenBuilder"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);