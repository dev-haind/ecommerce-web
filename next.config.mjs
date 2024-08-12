export async function rewrites() {
    return {
        beforeFiles: [
            {
                source: '/src/app/pages/home/index.tsx',
                destination: '/',
            }
        ]
    }
}