export interface Config {
  port: number
}

export default (): Config => ({
  port: parseInt(process.env.PORT || '', 10) || 4001,
})
