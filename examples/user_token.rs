#[tokio::main]
async fn main() {
    let _ = dotenv::dotenv(); // Eat error
    let mut args = std::env::args().skip(1);
    let token = twitch_oauth2::UserToken::from_existing(
        twitch_oauth2::client::surf_http_client,
        std::env::var("TWITCH_TOKEN")
            .ok()
            .or_else(|| args.next())
            .map(twitch_oauth2::AccessToken::new)
            .expect("Please set env: TWITCH_TOKEN or pass token as first argument"),
        std::env::var("TWITCH_REFRESH_TOKEN")
            .ok()
            .or_else(|| args.next())
            .map(twitch_oauth2::RefreshToken::new),
        std::env::var("TWITCH_CLIENT_SECRET")
            .ok()
            .or_else(|| args.next())
            .map(twitch_oauth2::ClientSecret::new),
    )
    .await
    .unwrap();
    println!("{:?}", token);
}
