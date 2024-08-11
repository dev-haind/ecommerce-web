export async function rewrites() {
    return {
        beforeFiles: [
            {
                source: '/src/app/pages/index.tsx',
                destination: '/',
            }
        ]
    }
}