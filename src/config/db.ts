import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

const db = new Sequelize('postgres://rest_api_node_ts_server_lr8k_user:2xjnv2T5TXGeWK56sR4cDejvFxLim59C@dpg-cpj3a1i1hbls73bpnvog-a.oregon-postgres.render.com/rest_api_node_ts_server_lr8k?ssl=true')

export default db
