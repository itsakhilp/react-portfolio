export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`,import.meta.url).href
}

// export const getImageUrl = (path) => {
//     // Assuming assets are located in the public folder
//     return new URL(`${process.env.PUBLIC_URL}/assets/${path}`).href;
// };