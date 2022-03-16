const dev = process.env.NODE !== 'production'

export const server = dev ? 'http://localhost:2022' : 'https://yourwebsite.com'