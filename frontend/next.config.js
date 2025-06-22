// next.config.js
module.exports = {
    reactStrictMode: true,
    images: {
    //   domains: ['example.com'],
        remotePatterns:[
            {
                hostname: "localhost",
                port: "8000",
                pathname:'/leagueImgs/**'

            },
            {
                hostname: "victimsofamadan.com",
                
            }

        ]
        
    },
  };
  