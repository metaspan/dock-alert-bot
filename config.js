import 'dotenv/config'

const config = {
  rpc_url: 'wss://mainnet-node.dock.io',
  bot_token: process.env.bot_token,
  app_id: process.env.app_id,
  public_key: process.env.public_key,
  channel_id: process.env.channel_id,
  update_interval: 15 * 1000
}

export default config
